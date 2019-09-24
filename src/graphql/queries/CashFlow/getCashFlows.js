// @flow
import { ForbiddenError, UserInputError } from 'apollo-server-micro';
import mongoose from 'mongoose';
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';
import { getLimitAndSkipFromPagination } from '../../../utils/getLimitAndSkipFromPagination';

type GetCashFlowsArgs = {
  input: {
    to: Date,
    from: Date,
    recordsPerPage?: number,
    pageNumber?: number,
    type?: string,
  },
};

type GetCashFlowsResponse = {
  totalPages: number,
  totalRecordsCount: number,
  cashFlows: Array<CashFlowMongooseRecord>,
};

export async function getCashFlows(
  _: void,
  { input }: GetCashFlowsArgs,
  ctx: any,
): Promise<GetCashFlowsResponse> {
  const userID = ctx.user?.id;

  if (!userID) {
    return new ForbiddenError();
  }

  const { to, from, recordsPerPage = 25, pageNumber = 1, type } = input;

  if (pageNumber < 1) {
    return new UserInputError('Page number should be 1 or more');
  }

  if (recordsPerPage < 1 || recordsPerPage > 200) {
    return new UserInputError(
      'Records per page should be between 1 and 200 (both inclusive)',
    );
  }

  const criteria: any = {
    userID: new mongoose.Types.ObjectId(userID),
  };

  if (to) {
    criteria.date = { $lte: to };
  }

  if (from) {
    criteria.date = { ...criteria.date, $gte: from };
  }

  if (type) {
    criteria.type = type;
  }

  const { skip, limit } = getLimitAndSkipFromPagination({
    recordsPerPage,
    pageNumber,
  });

  const [cashFlows, totalRecordsCount] = await Promise.all([
    ctx.db.CashFlow.query(criteria)
      .skip(skip)
      .limit(limit)
      .lean()
      .sort({ date: 1 }),
    ctx.db.CashFlow.count(criteria),
  ]);

  return {
    totalPages: limit > 0 ? Math.ceil(totalRecordsCount / recordsPerPage) : 1,
    totalRecordsCount,
    cashFlows,
  };
}

getCashFlows.typeDef = /* GraphQL */ `
  extend type Query {
    getCashFlows(input: GetCashFlowsInput!): GetCashFlowsResponse!
  }

  input GetCashFlowsInput {
    to: DateTime
    from: DateTime
    recordsPerPage: Int
    pageNumber: Int
    type: CashFlowType
  }

  type GetCashFlowsResponse implements PaginatedListResponse {
    totalPages: Int!
    totalRecordsCount: Int!
    cashFlows: [CashFlow]!
  }
`;

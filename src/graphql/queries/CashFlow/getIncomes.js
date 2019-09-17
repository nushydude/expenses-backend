// @flow
import { ForbiddenError, UserInputError } from 'apollo-server-micro';
import mongoose from 'mongoose';
import type { CashFlowMongooseRecord } from '../../../mongoose/types/CashFlow';
import { getLimitAndSkipFromPagination } from '../../../utils/getLimitAndSkipFromPagination';
import { CASH_FLOW_TYPE } from '../../../enums/cashFlowType';

type GetIncomesArgs = {
  input: {
    to: Date,
    from: Date,
    recordsPerPage?: number,
    pageNumber?: number,
  },
};

export async function getIncomes(
  _: void,
  { input }: GetIncomesArgs,
  ctx: any,
): Promise<Array<CashFlowMongooseRecord>> {
  const userID = ctx.user?.id;

  if (!userID) {
    return new ForbiddenError();
  }

  const { to, from, recordsPerPage = 25, pageNumber = 1 } = input;

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
    type: CASH_FLOW_TYPE.INCOME,
  };

  if (to) {
    criteria.date = { $lte: to };
  }

  if (from) {
    criteria.date = { ...criteria.date, $gte: from };
  }

  const { skip, limit } = getLimitAndSkipFromPagination({
    recordsPerPage,
    pageNumber,
  });

  const [incomes, totalRecordsCount] = await Promise.all([
    ctx.db.CashFlow.query(criteria)
      .skip(skip)
      .limit(limit)
      .lean(),
    ctx.db.CashFlow.count(criteria),
  ]);

  return {
    totalPages: limit > 0 ? Math.ceil(totalRecordsCount / recordsPerPage) : 1,
    totalRecordsCount,
    incomes,
  };
}

getIncomes.typeDef = /* GraphQL */ `
  extend type Query {
    getIncomes(input: GetIncomesInput!): GetIncomesResponse!
  }

  input GetIncomesInput {
    to: DateTime
    from: DateTime
    recordsPerPage: Int
    pageNumber: Int
  }

  type GetIncomesResponse implements PaginatedListResponse {
    totalPages: Int!
    totalRecordsCount: Int!
    incomes: [CashFlow]!
  }
`;

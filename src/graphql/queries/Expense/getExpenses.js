// @flow
import mongoose from 'mongoose';
import type { ExpenseMongooseRecord } from '../../../mongoose/types/Expense';
import { getLimitAndSkipFromPagination } from '../../../utils/getLimitAndSkipFromPagination';
import { ForbiddenError, UserInputError } from 'apollo-server-micro';

type GetExpensesArgs = {
  input: {
    to: Date,
    from: Date,
    recordsPerPage?: number,
    pageNumber?: number,
  },
};

export async function getExpenses(
  _: void,
  { input }: GetExpensesArgs,
  ctx: any,
): Promise<Array<ExpenseMongooseRecord>> {
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
  };

  if (to) {
    criteria.date = { $lt: to };
  }

  if (from) {
    criteria.date = { ...criteria.date, $gte: from };
  }

  const { skip, limit } = getLimitAndSkipFromPagination({
    recordsPerPage,
    pageNumber,
  });

  const [expenses, totalRecordsCount] = await Promise.all([
    ctx.db.Expense.query(criteria)
      .skip(skip)
      .limit(limit)
      .lean(),
    ctx.db.Expense.count(criteria),
  ]);

  return {
    totalPages: limit > 0 ? Math.ceil(totalRecordsCount / recordsPerPage) : 1,
    totalRecordsCount,
    expenses,
  };
}

getExpenses.typeDef = /* GraphQL */ `
  extend type Query {
    getExpenses(input: GetExpensesInput!): GetExpensesResponse!
  }

  input GetExpensesInput {
    to: DateTime
    from: DateTime
    recordsPerPage: Int
    pageNumber: Int
  }

  type GetExpensesResponse implements PaginatedListResponse {
    totalPages: Int!
    totalRecordsCount: Int!
    expenses: [Expense]!
  }
`;

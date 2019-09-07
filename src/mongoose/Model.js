// @flow
import mongoose from 'mongoose';
import type { MongooseQuery, MongooseDocument } from 'mongoose';
import { createMongooseDataLoader } from './createMongooseDataLoader';

// thin wrapper around a connector (mongoose model) that provides us an interface
// to delegate all of our retrieval methods to a DataLoader instance.
export class Model {
  constructor(config) {
    this.connector = config.connector;
    this.loader = createMongooseDataLoader(this.connector);
    this.isDiscriminator = Boolean(this.connector.baseModelName);
  }

  createDiscriminatorQuery(query) {
    if (this.isDiscriminator) {
      return { ...query, __t: this.connector.modelName };
    }

    return query;
  }

  // escape hatch method that applies any transformatons to our query we'd expect
  query(query: MongooseQuery) {
    const transformedQuery = this.createDiscriminatorQuery(query);

    return this.connector.find(transformedQuery);
  }

  // simple pass through allowing easy extension in a subclass
  async load(query) {
    const transformedQuery = this.createDiscriminatorQuery(query);

    const result = await this.loader.load(transformedQuery);

    return result;
  }

  async find(query: MongooseQuery) {
    const rawResult = await this.load(query);

    const records = rawResult.filter(Boolean);

    return records;
  }

  async findOne(query: MongooseQuery) {
    const [record] = await this.load(query);

    return record;
  }

  async findByID(
    id: string | mongoose.Types.ObjectId,
  ): Promise<?MongooseDocument> {
    const query = {
      _id: typeof id === 'string' ? new mongoose.Types.ObjectId(id) : id,
    };

    const record = await this.findOne(query);

    return record;
  }

  async findOneAndUpdate(
    criteria: Object,
    update: Object,
    opts: Object,
  ): Promise<?MongooseDocument> {
    const defaultOpts = { new: true, runValidators: true };
    const finalOpts = { ...defaultOpts, ...opts };

    const record = await this.connector
      .findOneAndUpdate(criteria, update, finalOpts)
      .lean()
      .exec();

    return record;
  }

  async findByIDAndUpdate(
    id: string | mongoose.Types.ObjectId,
    update: Object,
    opts: Object,
  ): Promise<?MongooseDocument> {
    const criteria = {
      _id: typeof id === 'string' ? new mongoose.Types.ObjectId(id) : id,
    };
    const defaultOpts = { new: true, runValidators: true };
    const finalOpts = { ...defaultOpts, ...opts };

    const record = await this.findOneAndUpdate(criteria, update, finalOpts);

    return record;
  }

  async findByIDAndDelete(
    id: mongoose.Types.ObjectId,
  ): Promise<?MongooseDocument> {
    const record = await this.connector
      .findByIdAndDelete(id)
      .lean()
      .exec();

    return record;
  }

  async findOneAndDelete(criteria: Object) {
    const record = await this.connector
      .findOneAndDelete(criteria)
      .lean()
      .exec();

    return record;
  }

  async count(criteria: Object) {
    const count = await this.connector
      .count(criteria)
      .lean()
      .exec();

    return count;
  }
}

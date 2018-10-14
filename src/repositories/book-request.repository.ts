import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {BookRequest} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BookRequestRepository extends DefaultCrudRepository<
  BookRequest,
  typeof BookRequest.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BookRequest, dataSource);
  }
}

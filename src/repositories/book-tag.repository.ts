import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {BookTag} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BookTagRepository extends DefaultCrudRepository<
  BookTag,
  typeof BookTag.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BookTag, dataSource);
  }
}

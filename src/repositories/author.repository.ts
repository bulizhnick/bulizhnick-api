import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Author} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AuthorRepository extends DefaultCrudRepository<
  Author,
  typeof Author.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Author, dataSource);
  }
}

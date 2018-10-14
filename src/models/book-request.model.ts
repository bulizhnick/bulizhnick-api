import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Book} from './book.model';
import {User} from './user.model';

@model()
export class BookRequest extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @belongsTo(() => User)
  userId: number;

  @belongsTo(() => Book)
  bookId: number;

  @property({
    type: 'boolean',
    required: true,
  })
  isResolved: boolean;

  constructor(data?: Partial<BookRequest>) {
    super(data);
  }
}

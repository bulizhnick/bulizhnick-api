import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Book} from './book.model';
import {Tag} from './tag.model';

@model()
export class BookTag extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @belongsTo(() => Book)
  bookId: number;

  @belongsTo(() => Tag)
  tagId: number;

  constructor(data?: Partial<BookTag>) {
    super(data);
  }
}

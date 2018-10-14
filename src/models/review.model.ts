import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Author} from './author.model';
import {Book} from './book.model';

@model()
export class Review extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @belongsTo(() => Author)
  authorId: number;

  @belongsTo(() => Book)
  bookId: number;

  @property({
    type: 'number',
    required: true,
  })
  rating: number;

  constructor(data?: Partial<Review>) {
    super(data);
  }
}

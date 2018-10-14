import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';
import {Author} from './author.model';

@model()
export class Book extends Entity {
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

  @belongsTo(() => User)
  ownerId: number;

  @belongsTo(() => User)
  reserverId?: number;

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

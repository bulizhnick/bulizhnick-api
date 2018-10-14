import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  nickname: string;

  @property({
    type: 'string',
    required: true,
  })
  telegramNick: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

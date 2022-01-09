import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
// import { UpdateToyDto } from './dtos/update-toy.dto';

@Injectable()
export class UsersService {
  create(_createToyDto: CreateUserDto) {
    return 'This action adds a new toy';
  }

  findAll() {
    return `This action returns all toys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} toy`;
  }

  /*
  update(id: number, _updateToyDto: UpdateToyDto) {
    return `This action updates a #${id} toy`;
  }
*/

  remove(id: number) {
    return `This action removes a #${id} toy`;
  }
}

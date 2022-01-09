import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateUserDto } from './dtos/create-user.dto';
// import { UpdateToyDto } from './dtos/update-toy.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('createToy')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern('findAllToys')
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern('findOneToy')
  findOne(@Payload() id: number) {
    return this.usersService.findOne(id);
  }

  /*
  @MessagePattern('updateToy')
  update(@Payload() updateToyDto: UpdateToyDto) {
    return this.usersService.update(updateToyDto.id, updateToyDto);
  }
*/

  @MessagePattern('removeToy')
  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}

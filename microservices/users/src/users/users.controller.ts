import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateUserDto } from './dtos/create-user.dto';
// import { UpdateToyDto } from './dtos/update-toy.dto';
import { UsersService } from './users.service';

import { messagePattern } from '@src/constants';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(messagePattern.v1.users.join)
  join(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern(messagePattern.v1.users.createAccessToken)
  makeAccessToken() {
    return this.usersService.findAll();
  }

  @MessagePattern(messagePattern.v1.users.deleteAccessToken)
  deleteAccessToken(@Payload() id: number) {
    return this.usersService.findOne(id);
  }
}

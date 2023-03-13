import { Controller, Get, Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger/dist';
import { ApiAcceptedResponse, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger/dist/decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users') //heading of the controller
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true }) //200 htttp request
  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }
  //Need toDo auto parse or cast id
  @ApiOkResponse({ type: User, isArray: false })
  @Get(':id')
  getUserById(@Param('id') id: string): User | undefined {
    return this.usersService.findById(Number(id));
  }

  @ApiCreatedResponse({ type: User }) //201 http request with shape of User entity
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}

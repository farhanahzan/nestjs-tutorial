import { Controller, Get, Param, Query } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger/dist';
import { ApiAcceptedResponse, ApiCreatedResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger/dist/decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users') //heading of the controller
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true }) //200 htttp request
  @ApiQuery({ name: 'name', required: false }) //query http://localhost:3000/users?name=john
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    return this.usersService.findAll(name);
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

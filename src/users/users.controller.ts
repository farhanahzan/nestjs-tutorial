import { Controller, Get, Param } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users') //heading of the controller
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }
  //Need toDo auto parse or cast id
  @Get(':id')
  getUserById(@Param('id') id: string): User |undefined{
    return this.usersService.findById(Number(id))
  }

  @Post()
  createUser(@Body() body:CreateUserDto):User{
    return this.usersService.createUser(body)
  }

}

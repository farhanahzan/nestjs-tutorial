import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class CreateUserDto{
    @ApiProperty() //Create a schema like "name":"string", add require 
    name:string
}
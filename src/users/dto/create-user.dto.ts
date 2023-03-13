import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class CreateUserDto{
    @ApiProperty({required:true}) //Create a schema like "name":"string", add require 
    name:string

    // @ApiProperty({required:false})
    // age:number
}
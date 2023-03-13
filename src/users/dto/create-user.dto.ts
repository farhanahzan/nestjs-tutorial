import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsAlphanumeric } from "class-validator";
import { MaxLength } from "class-validator/types/decorator/decorators";

export class CreateUserDto {
  @ApiProperty({ required: true }) //Create a schema like "name":"string", add require
  @IsAlphanumeric() //validation "name must contain only letters and numbers"
  name: string;

  // @ApiProperty({required:false})
  // age:number
}
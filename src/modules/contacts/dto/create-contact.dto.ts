import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    name: string;
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
  
    @IsString()
    @IsNotEmpty()
    @MinLength(7)
    cellphone: string;
}




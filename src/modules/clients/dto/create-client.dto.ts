import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateClientDto {
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
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ["transform"],
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  cellphone: string;
}

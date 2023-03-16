import { IsNotEmpty, Length } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: 'username shoould not be empty' })
  @Length(6, 12, {
    message: 'Password length should be between 6 and 12 characters',
  })
  userName: string;
  @IsNotEmpty()
  @Length(8, 12, {
    message: 'Password length should be between 8 and 12 characters',
  })
  password: string;
}

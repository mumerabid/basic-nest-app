import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { CreateUserDto } from '../../dtos/createUser.dto';
import { CreateUserPipe } from 'src/users/pipelines/create-user/create-user.pipe';
import { CreateuserGuard } from 'src/users/gaurds/createuser/createuser.guard';
@Controller('users')
export class UsersController {
  constructor(private userServicesVar: UsersService) {}

  @Post()
  @UseGuards(CreateuserGuard)
  @UsePipes(new ValidationPipe())
  createUser(@Body(CreateUserPipe) userData: CreateUserDto) {
    return this.userServicesVar.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userServicesVar.getUserByID(id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { createUserType } from 'src/utils/types';
import { Length } from 'class-validator';

@Injectable()
export class UsersService {
  private usersArr = [
    { id: 1, userName: 'umer92', password: '11223344' },
    { id: 2, userName: 'umer92', password: '11223344' },
  ];

  getUserByID(id: any) {
    id = parseInt(id);
    const user = this.usersArr.find((u) => u.id === id);
    // console.log(typeof id);
    if (!user) {
      throw new NotFoundException(`user with id: ${id} not found`);
    }
    return user;
  }
  createUser(userData: createUserType) {
    const newUser = { ...userData, id: this.usersArr.length + 1 };
    this.usersArr.push(newUser);
    console.log('si: ', newUser);
    return newUser;
  }
}

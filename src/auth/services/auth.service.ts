import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import {UsersService} from '../../users/services/users.service';
import {RegisterDto} from '../dtos/register.dto';
import {LoginDto} from '../dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {
  }

  async login({email, password}: LoginDto) {
    const user = await this.usersService.findUser({email});
    if (!user || user.password !== password) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async register(dto: RegisterDto) {
    return this.usersService.createUser(dto.email, dto.password);
  }

  generateAccessToken(user: User) {
    const payload = {id: user.id};
    return jwt.sign(payload, 'SECRET');
  }
}

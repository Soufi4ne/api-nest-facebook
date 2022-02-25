import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {AuthService} from '../services/auth.service';
import {RegisterDto} from '../dtos/register.dto';
import {LoginDto} from '../dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.login(dto);
    return {
      user,
      token: this.authService.generateAccessToken(user),
    };
  }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }
}

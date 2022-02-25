import {Body, Controller, Get, Param, Patch, UseGuards} from '@nestjs/common';
import {UsersService} from '../services/users.service';
import {UpdateProfileDto} from '../dtos/updateProfile.dto';
import {JwtGuard} from '../../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('/users')
export class UserController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get(':id/posts')
  findPostsById(@Param('id') id: string) {
    return this.usersService.findPostsById(id);
  }

  @Get(':id/profile')
  findProfileById(@Param('id') id: string) {
    return this.usersService.findProfileById(id);
  }

  @Patch(':id/profile')
  updateProfileById(@Param('id') id: string, @Body() data: UpdateProfileDto) {
    return this.usersService.updateProfileById(id, data);
  }
}

import {Injectable} from '@nestjs/common';
import {PrismaService} from '../../database/services/prisma.service';
import {UpdateProfileDto} from '../dtos/updateProfile.dto';
import {Prisma} from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {
  }

  createUser(email: string, password: string) {
    return this.prisma.user.create({
      data: {
        email,
        password,
        Profile: {create: {firstName: '', lastName: ''}}
      }
    });
  }

  findUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({where});
  }

  findPostsById(id: string) {
    return this.prisma.post.findMany({
      where: {
        authorId: id,
      }
    });
  }

  findProfileById(id: string) {
    return this.prisma.profile.findUnique({
      where: {
        userId: id,
      }
    });
  }

  updateProfileById(id: string, data: UpdateProfileDto) {
    return this.prisma.profile.update({
      where: {
        userId: id
      },
      data
    });
  }
}

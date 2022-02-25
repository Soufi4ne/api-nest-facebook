import {Injectable} from '@nestjs/common';
import {PrismaService} from '../../database/services/prisma.service';
import {UpdatePostDto} from '../dtos/updatePost.dto';
import {CreatePostDto} from '../dtos/createPost.dto';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  createPost(data: CreatePostDto, authorId: string) {
    return this.prisma.post.create({
      data: {
        ...data,
        authorId
      }
    });
  }

  findPostById(id: number) {
    return this.prisma.post.findUnique({where: { id }});
  }

  findAllPosts() {
    return this.prisma.post.findMany();
  }

  updatePost(id: number, data: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data
    });
  }

  deletePostById(id) {
    return this.prisma.post.delete({
      where: { id }
    });
  }
}

import {Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards,} from '@nestjs/common';
import {PostsService} from '../services/posts.service';
import {CreatePostDto} from '../dtos/createPost.dto';
import {UpdatePostDto} from '../dtos/updatePost.dto';
import {JwtGuard} from '../../auth/guards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {
  }

  @Post()
  createPost(@Body() dto: CreatePostDto, @Request() req: any) {
    return this.postsService.createPost(dto, req.userId);
  }

  @Get(':id')
  findPostById(@Param('id') id: string) {
    return this.postsService.findPostById(parseInt(id));
  }

  @Get()
  findAllPosts() {
    return this.postsService.findAllPosts();
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() data: UpdatePostDto) {
    return this.postsService.updatePost(parseInt(id), data);
  }

  @Delete(':id')
  deletePostById(@Param('id') id: string) {
    return this.postsService.deletePostById(parseInt(id));
  }
}

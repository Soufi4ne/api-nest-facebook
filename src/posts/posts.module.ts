import {Module} from '@nestjs/common';
import {PostsController} from './controllers/posts.controller';
import {DatabaseModule} from '../database/database.module';
import {PostsService} from './services/posts.service';
import {UsersModule} from '../users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}

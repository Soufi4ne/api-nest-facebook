import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {UsersService} from './services/users.service';
import {UserController} from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}

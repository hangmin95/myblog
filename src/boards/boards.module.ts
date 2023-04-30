import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entity/boards.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  exports: [TypeOrmModule],
  providers: [BoardsService],
  controllers: [BoardsController]
})
export class BoardsModule {}

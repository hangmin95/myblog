import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entity/boards.entity';
import { Repository, getConnection } from 'typeorm';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board)
        private boardsRepository: Repository<Board>,
      ) {}
    
      findAll(): Promise<Board[]> {
        return this.boardsRepository.find();
      }
    
      findOne(id: number): Promise<Board> {
        return this.boardsRepository.findOneBy({id:id});
      }

      async create(board: Board): Promise<void> {
        await this.boardsRepository.save(board);
      }
    
      async remove(id: number): Promise<void> {
        await this.boardsRepository.delete(id);
      }

      async update(id: number, board: Board): Promise<void> {
        const existBoard = await this.boardsRepository.findOneBy({id:id});
        if(existBoard){
            await getConnection()
                .createQueryBuilder()
                .update(Board)
                .set({ 
                    title: board.title,
                    content: board.content
                })
                .where("id = :id", { id })
                .execute();
        }
      }
}

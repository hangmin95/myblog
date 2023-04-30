import { Body, Controller, Delete, Get, Param, Post, Put, Render, Res } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './entity/boards.entity';
import { Response } from 'express';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    //boards.hbs 랜더링
    @Get()
    @Render('boards')
    async root() {
        const boards = await this.boardsService.findAll();
        return { boards };  
    }

    @Post()
    async createUser(@Body() body: Board, @Res() res: Response) {
      await this.boardsService.create(body);
      const boards = await this.boardsService.findAll();
      return res.render('boards', { boards });
    }

    @Get()
    findAll(): Promise<Board[]> {
        return this.boardsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Board> {
        return this.boardsService.findOne(id);
    }
    
    @Post()
    create(@Body() board:Board) {
        return this.boardsService.create(board);
    }

    @Post(':id')
    remove(@Param('id') id: number) {
        this.boardsService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() board: Board) {
        this.boardsService.update(id, board);
        return `updated #${id}`
    }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './entity/boards.entity';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

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

    @Delete(':id')
    remove(@Param('id') id: number) {
        this.boardsService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() board: Board) {
        this.boardsService.update(id, board);
        return `updated #${id}`
    }
}

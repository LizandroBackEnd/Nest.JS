import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NamesService } from './names.service';
import { start } from 'repl';
import { reduce } from 'rxjs';

@Controller('api/v1/names') //Se define la ruta de la API
export class NamesController { 
    constructor(private namesService: NamesService){   //Inyección de un controlador

    } 
     
    @Post() //Se define el método POST
    createName(@Body() data: {name: string}){ 
        return this.namesService.createName(data.name);

    } 
     
    @Get() //Se define el método GET
    getNames(@Query('start') start: string){  
        return this.namesService.getNames(start);

    } 
     
    @Put('/:name/:newName') //Se define el método PUT
    updateName(@Param('name') name: string, @Param('newName') newName: string){ 
        return this.namesService.updateName(name, newName);
    }
}

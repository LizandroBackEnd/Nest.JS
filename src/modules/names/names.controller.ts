import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NamesService } from './names.service';
import { start } from 'repl';

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
}

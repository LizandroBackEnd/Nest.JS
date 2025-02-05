import { Body, Controller, Post } from '@nestjs/common';
import { NamesService } from './names.service';

@Controller('api/v1/names') //Se define la ruta de la API
export class NamesController { 
    constructor(private namesService: NamesService){   //Inyección de un controlador

    } 
     
    @Post() //Se define el método POST
    createName(@Body() data: {name: string}){ 
        return this.namesService.createName(data.name);

    }
}

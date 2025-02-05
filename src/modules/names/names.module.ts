import { Module } from '@nestjs/common';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';

@Module({
    imports: [], //Siempre poner este import para una buena estructura
    controllers: [NamesController], providers: [NamesService]
})
export class NamesModule { }

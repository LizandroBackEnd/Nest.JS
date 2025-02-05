import { Module } from '@nestjs/common';
import { NamesController } from './names.controller';

@Module({
    imports: [], //Siempre poner este import para una buena estructura
    controllers: [NamesController]
})
export class NamesModule { }

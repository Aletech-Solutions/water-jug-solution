import { Body, Controller, Get, Post } from '@nestjs/common';
import { WaterJugService } from './water-jug.service';
import { validatePayload } from 'src/validations/water-jug.validation';

@Controller('water-jug')
export class WaterJugController {
    constructor(private readonly waterJugService: WaterJugService) { }

    @Post('solve')
    public solve(@Body() payload: { x: number; y: number; z: number }): {x:number,y:number,operation:string, steps:number}[] {
        const { x, y, z } = payload;
        validatePayload(payload)
        return this.waterJugService.solve(x, y, z);
    }
}
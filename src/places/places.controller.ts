import { Controller, Get, Param } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {

    constructor(private placesService: PlacesService) { }


    @Get('/:id')
    getOne(@Param('id') id: string) {
        return this.placesService.getOne(id);
    }

    @Get('/')
    getAll() {
        return this.placesService.getAll();
    }

    @Get('/search/:name')
    getAllSearched(@Param('name') name: string) {
        return this.placesService.getAllSearched();
    }
}

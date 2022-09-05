import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePlaceDto } from './create-place.dto';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {

    constructor(private placesService: PlacesService) { }


    @Get('/:id')
    getOne(@Param('id') id: string) {
        return this.placesService.getOne(id);
    }

    @Post()
    createPlace(@Body() createPlaceDto: CreatePlaceDto) {
        return this.placesService.createPlace(createPlaceDto);
    }

    @Get('/')
    getAll() {
        return this.placesService.getAll();
    }

    @Get('/search/:name')
    getAllSearched(@Param('name') name: string) {
        return this.placesService.getAllSearched(name);
    }
}

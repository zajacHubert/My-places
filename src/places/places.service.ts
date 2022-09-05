import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './create-place.dto';
import { Place } from './place.entity';

@Injectable()
export class PlacesService {
    constructor(@InjectRepository(Place) private placesRepository: Repository<Place>) { }

    async getOne(id: string): Promise<Place> {
        const place = await this.placesRepository.findOneBy({ id });
        if (!place) {
            throw new Error('Place not found');
        }
        return place;
    }

    async createPlace(createPlaceDto: CreatePlaceDto): Promise<Place> {
        const place = this.placesRepository.create(createPlaceDto);
        await this.placesRepository.save(place);
        return place;
    }

    async getAll(): Promise<Place[]> {
        return await this.placesRepository.find();
    }

    async getAllSearched(name: string): Promise<Place[]> {

        return await this.placesRepository
            .createQueryBuilder('place')
            .select()
            .where("place.name LIKE :search", { search: `%${name}%` })
            .getMany();
    }
}

import { IsEnum, MaxLength, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PlaceStatus } from "./place-status.enum";

@Entity()
export class Place {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 100,
    })
    @MinLength(3)
    @MaxLength(100)
    name: string;

    @Column('text')
    @MinLength(3)
    @MaxLength(1000)
    description: string;

    @Column({
        length: 20,
    })
    @IsEnum(PlaceStatus)
    @MaxLength(20)
    status: PlaceStatus;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 7,
    })
    lat: number;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 7,
    })
    lon: number;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PlaceStatus } from "./place-status.enum";

@Entity()
export class Place {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: PlaceStatus;

    @Column()
    lat: number;

    @Column()
    lon: number;
}
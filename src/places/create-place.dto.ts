import { PlaceStatus } from "./place-status.enum";

export class CreatePlaceDto {
    name: string;
    description: string;
    status: PlaceStatus;
    lat: number;
    lon: number;
}
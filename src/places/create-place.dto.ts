import { PlaceStatus } from "./place-status.enum";

export class CreatePlace {
    name: string;
    description: string;
    status: PlaceStatus;
    lat: number;
    lon: number;
}
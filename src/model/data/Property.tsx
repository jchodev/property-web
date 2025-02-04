import { PaginationResponse } from "../api/PaginationResponse";

export interface PropertyImage {
    imageUrl: string;
}

export interface Property {
    id: string;
    title: string;
    description: string;
    type: string;
    roomCount: number;
    bathRoomCount: number;
    price: number;
    longitude: number;
    latitudes: number;
    regions: string[];
    images: PropertyImage[];
}

export interface PropertiePagination {
    properties: Property[];
    pagination: PaginationResponse;
}
export interface PropertyImageDTO {
    imageUrl: string;
}

export interface PropertyDto {
    id: string;
    title: string;
    description: string;
    type: number;
    roomCount: number;
    bathRoomCount: number;
    price: number;
    longitude: number;
    latitudes: number;
    regions: number[];
    images: PropertyImageDTO[];
}

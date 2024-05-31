export interface PropertyImage {
    url: string;
}

export interface Property {
    id: number;
    images: PropertyImage[];
    location: string;
    days: string;
    price: string;
    isNew: boolean;
    rating: number;
}
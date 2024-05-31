export interface Image {
    url: string;
}

export interface Property {
    id: number;
    images: Image[];
    location: string;
    days: string;
    price: string;
    isNew: boolean;
    rating: number;
}
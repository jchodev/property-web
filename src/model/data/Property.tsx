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


export interface Page{
    currentPage: number;
    totalPage: number;
}

export interface Properties {
    page: Page;
    properties: Property[];    
}


import {Property} from '../../../model/data/Property'

export interface Page{
    currentPage: number;
    totalPage: number;
}

export interface Properties {
    page: Page;
    properties: Property[];    
}
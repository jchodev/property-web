import { Property } from "../../model/data/Property"; 
import { Response } from "../../model/api/Response"
import { PropertyDto } from "../../model/data/dto/property.dto";

export interface PropertyApi {
    getProperties(page: number, pageSize: number, sorters?: string, filters?: string): Promise<Response<PropertyDto[]>>;
}
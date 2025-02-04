import { PropertiePagination } from "../model/data/Property"; 
import { Response } from "../model/api/Response"

export interface PropertyRepository {
    getPropeties(page: number, pageSize: number, sorters?: any, filters?: any): Promise<PropertiePagination>;
}
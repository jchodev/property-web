import { Property, Properties } from "../model/data/Property"; 
import { Response } from "../model/api/Reponse"

export interface PropertyRepository {
    getPropetiessByPage(page: number): Promise<Response<Properties>>;
}
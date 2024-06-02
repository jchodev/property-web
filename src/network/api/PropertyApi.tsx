import { Property, Properties } from "../../model/data/Property"; 
import { Response } from "../../model/api/Reponse"

export interface PropertyApi {
    getPropetiessByPage(page: number): Promise<Response<Properties>>;
}
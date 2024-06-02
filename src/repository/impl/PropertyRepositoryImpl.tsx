import { PropertyRepository } from "../PropertyRepository";
import { Property, Properties } from "../../model/data/Property";
import { Response } from "../../model/api/Reponse"; 
import { PropertyApi } from "../../network/api/PropertyApi";
import { PropertyApiImpl } from "../../network/api/impl/PropertyApiImpl";


export class PropertyRepositoryImpl implements PropertyRepository {
    api : PropertyApi

    constructor(api: PropertyApi) {
        this.api = api;
    }

    getPropetiessByPage(page: number): Promise<Response<Properties>> {
        return this.api.getPropetiessByPage(page);
    }
}
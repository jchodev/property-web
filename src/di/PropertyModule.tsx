import { PropertyApi } from "../network/api/PropertyApi"
import { PropertyApiImpl } from "../network/api/impl/PropertyApiImpl";
import { PropertyRepository } from "../repository/PropertyRepository";
import { PropertyRepositoryImpl } from "../repository/impl/PropertyRepositoryImpl";

export function providePropertyApi(): PropertyApi {
    return new PropertyApiImpl()
}

export function providePropertyRepository(): PropertyRepository {
    return new PropertyRepositoryImpl(providePropertyApi())
}



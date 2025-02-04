import { PropertyRepository } from "../PropertyRepository";
import { PropertiePagination } from "../../model/data/Property";
import { Response } from "../../model/api/Response"; 
import { PropertyApi } from "../../network/api/PropertyApi";
import { PropertyApiImpl } from "../../network/api/impl/PropertyApiImpl";
import { mapToProperty } from "../../model/mapper/property.mapper";

export class PropertyRepositoryImpl implements PropertyRepository {
    api : PropertyApi

    constructor(api: PropertyApi) {
        this.api = api;
    }

    async getPropeties(page: number, pageSize: number, sorters?: any, filters?: any): Promise<PropertiePagination> {  
        try {
            const response = await this.api.getProperties(
                page, 
                pageSize, 
                sorters ? "" : undefined, 
                filters ? "" : undefined
            );

            //Validate response
            if (response.statusCode !== 200) {
                throw new Error(`API Error: ${response.message}`);
            }

            // Validate required data
            if (!response.data) {
                throw new Error('No property data received');
            }

            if (!response.pagination) {
                throw new Error('No pagination data received');
            }

            // Map and validate individual properties
            const mappedProperties = response.data.map((dto) => {
                try {
                    return mapToProperty(dto);
                } catch (error) {
                    console.error(`Error mapping property ${dto.id}:`, error);
                    throw error;
                }
            });

            return {
                properties: mappedProperties,
                pagination: response.pagination
            };

        } catch (error) {
            // Log error for debugging
            console.error('Error fetching properties:', error);
            
            // Rethrow with a more user-friendly message
            if (error instanceof Error) {
                throw new Error(`Failed to fetch properties: ${error.message}`);
            }
            throw new Error('Failed to fetch properties');
        }
        
    }

   
}
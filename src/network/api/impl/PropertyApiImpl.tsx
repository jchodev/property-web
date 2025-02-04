import { PropertyApi } from "../PropertyApi"
import { Response } from "../../../model/api/Response";
import { Property } from "../../../model/data/Property";
import { PropertyDto } from "../../../model/data/dto/property.dto";
import { useApiService } from "../../../providers/apiProvider";
import { ApiService } from "../../ApiService";

//const apiService = useApiService();

export class PropertyApiImpl implements PropertyApi {

   async getProperties(page: number, pageSize: number, sorters?: string, filters?: string): Promise<Response<PropertyDto[]>> {
        
        const response = await ApiService.getInstance().getAxiosInstance().get("/properties", 
            {
                params: {
                  current: page,
                  pageSize,
                  sorters: sorters ? sorters : undefined,
                  filters: filters ? filters : undefined,
                },
              }
        );
        return response.data;
        // const list: Property[] = [];
        // for (let i = page ; i < page + 200; i++) { 
        //     list.push({
        //     id: i,
        //     images: [
        //       {
        //         url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
        //       },
        //       {
        //         url: 'https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60',
        //       },
        //       {
        //         url: 'https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80',
        //       },
        //       {
        //         url: 'https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60',
        //       },
        //     ],
        //     location: 'Gardon Reveira, Italy',
        //     days: 'Oct 2-9',
        //     price: '$14,999 CAD night',
        //     isNew: true,
        //     rating: 4.5,
        //   });
        // }

        // const mockProperties: Properties = {
        //     page: {
        //       currentPage: page,
        //       totalPage: 20, // Assuming total pages are always 20 for this example
        //     },
        //     properties: list,
        // };

        // const mockReponse: Response<Properties> = {
        //     data: mockProperties
        // };

        // return mockReponse
    }

}
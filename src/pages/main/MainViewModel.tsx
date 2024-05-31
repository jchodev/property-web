import React, {useState} from "react";
import { UIState, State } from "../../model/ui/UIState";
import { Property } from "../../model/main/PropertyItem"; 


export default function MainViewModel() {

    const [propertyState, setPropertyState] = useState<UIState<Property[]>>();

    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function getProperty(page: number) {
        console.log("getProperty: set loading")
        setPropertyState({ responseState: State.Loading });
        await delay(2000);
        console.log("getProperty: set Success")
        setPropertyState({
            responseState: State.Success,
            data: getPropertyFromApi(page),
        });
    }

    function getPropertyFromApi(page: number): Property[] {
      const result: Property[] = [];
      for (let i = page ; i < page + 20; i++) { 
        result.push({
          id: i,
          images: [
            {
              url: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
              url: 'https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
              url: 'https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80',
            },
            {
              url: 'https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60',
            },
          ],
          location: 'Gardon Reveira, Italy',
          days: 'Oct 2-9',
          price: '$14,999 CAD night',
          isNew: true,
          rating: 4.5,
        });
      }
      return result;
    }

    return {
        propertyState,
        getProperty
    };  
}


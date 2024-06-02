import React, {useState} from "react";
import { UIState, State } from "../../model/ui/UIState";
import { Property, Properties } from "../../model/data/Property"; 
import { PropertyRepository } from "../../repository/PropertyRepository";
import { providePropertyRepository } from "../../di/PropertyModule";
import debounce from "lodash/debounce";


export default function MainViewModel() {

    //di
    const propertyRepository: PropertyRepository = providePropertyRepository();

    const [uiState, setUIState] = useState<UIState<Properties>>();

    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const debouncedFetch = debounce((page: number) => { 
      console.log("getProperty: set loading with page " +page);

      setUIState((prevState) => ({
        ...prevState,
        state: State.Loading,
      }));
      
      console.log("getProperty: set Success");

      propertyRepository.getPropetiessByPage(page = page).then( (response) => {
        const newProperties = response.data;

        if (newProperties!=null){
          // Combine existing properties with new properties
          const updatedData = {
            page: newProperties?.page, // Maintain existing page information (if any)
            properties: [...(uiState?.data?.properties || []), ...newProperties?.properties],
          };

          setUIState((prevState) => ({
            ...prevState,
            state: State.Success,
            data: updatedData,
          }));
        }

      })
    }, 500);

    function getProperty(page : number) {
      debouncedFetch(page);
    }

    return {
        uiState,
        getProperty
    };  
}


import React, {useState} from "react";
import { UIState, State } from "../../model/ui/UIState";
import { PropertiePagination, Property } from "../../model/data/Property"; 
import { PropertyRepository } from "../../repository/PropertyRepository";
import { providePropertyRepository } from "../../di/PropertyModule";
import debounce from "lodash/debounce";

export default function MainViewModel() {

    //di
    const propertyRepository: PropertyRepository = providePropertyRepository();

    const [uiState, setUIState] = useState<UIState<PropertiePagination>>();

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

      propertyRepository.getPropeties(1, 10, undefined, undefined).then( (result) => {
        if (result!=null){
          const updatedData = {
            pagination: result.pagination,
            properties: [...(uiState?.data?.properties || []), ...result.properties],
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
      console.log("page: "+ page);
      debouncedFetch(page);
    }

    return {
        uiState,
        getProperty
    };  
}


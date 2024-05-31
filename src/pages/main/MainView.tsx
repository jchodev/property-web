import React, {useEffect, useState} from "react";
import { UIState, State } from "../../model/ui/UIState";
import { Property } from "../../model/data/PropertyItem";
import MainViewModel from "./MainViewModel";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import {AlertTitle, Divider, LinearProgress,} from "@mui/material";
import Box from '@mui/material/Box';
import Header from '../../components/header/Header';
import OptionsTab from '../../components/OptionsTab';
import { displayOnDesktop } from '../../styles/CommonStyles';
import PropertyGrid from '../../components/grid/PropertyGrid';


function MainView() {
    const {propertyState, getProperty} = MainViewModel(); 

    const [properties, setProperties] = useState<Property[] | null>(null);
    const [shouldShowProgress, setShouldShowProgress] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [shouldShowError, setShouldShowError] = useState(false);
    
    
    useEffect(() => {
        if (!propertyState) {
            getProperty(0);
            return
        }

        switch (propertyState.responseState) {
            case State.Loading:
                console.log("view: loading");
                setShouldShowProgress(true);
                break;
            case State.Success:
                console.log("view: Success");
                setShouldShowProgress(false);
                setShouldShowError(false);
                setProperties(propertyState.data!);
                break;
            case State.Fail:
                setShouldShowProgress(false);
                setShouldShowError(true);
                setErrorMessage(propertyState.error?.message || null);
                break;
        }

    }, [propertyState, getProperty]);

    return (
        // <Container>
        //     {shouldShowError && <Alert severity="error">
        //         <AlertTitle>Error</AlertTitle>
        //         {errorMessage} — <strong>check it out!</strong>
        //     </Alert>}
        //     {shouldShowProgress && <LinearProgress color="primary" variant={'query'}/>}
        //     <SearchInput defaultValue={query} onChange={onSearchItemChange}/>
        //     <Divider variant="fullWidth" sx={{border: '1px solid light-grey', margin: 2}}/>
        //     <BookList books={bookList}/>
        //     <Button variant="text" color="error" onClick={logout}>Logout</Button>
        // </Container>
        <React.Fragment>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
          }}
        >
          <Box>
            <Header />
            <OptionsTab />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              height: 100,
              overflowY: 'scroll',
            }}
          >            
            {shouldShowProgress && <LinearProgress color="primary"/>}
            <PropertyGrid properties = {properties}/>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            {/* <FooterMenu /> */}
          </Box>
          <Box sx={displayOnDesktop}>
            {/* <Footer /> */}
          </Box>
        </Box>
      </React.Fragment>
    );
}    

export default MainView;
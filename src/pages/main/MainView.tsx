import React, { useEffect, useState } from "react";
import { UIState, State } from "../../model/ui/UIState";

import MainViewModel from "./MainViewModel";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { AlertTitle, Divider, LinearProgress, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Header from "../../components/header/Header";
import OptionsTab from "../../components/OptionsTab";
import { displayOnDesktop } from "../../styles/CommonStyles";
import PropertyGrid from "../../components/grid/PropertyGrid";
import Footer from "../../components/footer/Footer";

function MainView() {
  const { uiState, getProperty } = MainViewModel();

  useEffect(() => {
    if (!uiState) {
      getProperty(0);
      return;
    }

    switch (uiState.state) {
      case State.Loading:
        console.log("view: loading");
        //setShouldShowProgress(true);
        break;
      case State.Success:
        console.log("view: Success");
        //setShouldShowProgress(false);
        //setShouldShowError(false);
        //setProperties(propertyState.data!);
        break;
      case State.Fail:
        //setShouldShowProgress(false);
        //setShouldShowError(true);
        //setErrorMessage(propertyState.error?.message || null);
        break;
    }
  }, [uiState, getProperty]);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          {uiState?.state === State.Loading && (
            <LinearProgress color="primary" />
          )}
          {uiState?.data?.properties && (
            <PropertyGrid properties={uiState?.data?.properties} />
          )}

          <Button
            onClick={() =>
              //getProperty((uiState?.data?.pagination.currentPage ?? 1) + 1)
              getProperty(1)
            }
          >
            Load More
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default MainView;

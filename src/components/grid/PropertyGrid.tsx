import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CarouselCard from '../carouselCard/CarouselCard';
import { Property } from '../../model/data/Property';

interface PropertyGridProps {
  properties: Property[] | null;
}

const PropertyGrid =  ({properties}: PropertyGridProps) => {

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {properties?.map((property) => {
          return (
            <Grid key={property.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard property={property} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PropertyGrid;
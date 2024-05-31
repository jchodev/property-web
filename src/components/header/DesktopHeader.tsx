import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from './Logo';
import LocationSearch from './LocationSearch';
import ProfileSettings from './ProfileSettings';
import { flexBetweenCenter, displayOnDesktop } from '../../styles/CommonStyles';

const DesktopHeader = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, minHeight: 70, borderBottom: '1px solid #ddd' }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, minHeight: 90, px: 4 }}>
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch />
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DesktopHeader;
import React from 'react';
import Box from '@mui/material/Box';
import MobileSearch from './MobileSearch';
import IconButton from '@mui/material/IconButton';
import { FaSearch } from 'react-icons/fa';

const MobileHeader = () => {
    return (
        <Box sx={{ display: { xs: 'flex', md: 'none' }, minHeight: 70, borderBottom: '1px solid #ddd' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 90, px: 4 }}>
            <MobileSearch />
          </Box>
        </Box>
      );
};

const MobileHeader2 = () => {
    return (
          <Box sx={{ display: { xs: 'flex', md: 'none' }, minHeight: 90, borderBottom: '1px solid #ddd', justifyContent: 'center', alignItems: 'center', }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 90, px: 4 }}>
            <MobileSearch />
            </Box>
          </Box>
      );
};

export default MobileHeader2;
import {React} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            App
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

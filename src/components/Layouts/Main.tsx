import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { NavBar } from '../ui/NavBar';
import { SideBar } from '../ui/SideBar';
import { Copyright } from '../ui/Copyright';
import {  router } from '../../routes/routes';




export const Main = () => {

    const defaultTheme = createTheme();
    const [open, setOpen] = useState(true);
  
  
    const toggleDrawer = () => {
      setOpen(!open);
    };


  return (


    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar 
          toggleDrawer={toggleDrawer} 
          open={open}
        />
        <SideBar
          toggleDrawer={toggleDrawer}
          open={open}
        />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <RouterProvider router={router} />
          </Container>
            <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

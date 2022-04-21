import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer
(props:{children:React.ReactNode})
{
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#9F8F81', height: '10vh' }}>{props.children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
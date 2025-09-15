import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
export default function SuspenseLoader() {
  return (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",   // centers horizontally
      alignItems: "center",       // centers vertically
      height: "100vh",            // full viewport height
      width: "100vw",             // full viewport width
    }}
  >
    <CircularProgress />
    <Typography sx={{ ml: 2 }}>Loading...</Typography>
  </Box>
);
}

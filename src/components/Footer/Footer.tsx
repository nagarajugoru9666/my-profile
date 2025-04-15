import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box component="footer">
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap',py: 5, borderTop: 1, borderColor: 'divider'  }}>
          <Typography variant="body2">© 2024. All rights reserved</Typography>
          <Link href="#" underline="none" sx={{ ml: 2 }}>Back To Home</Link>
          <Box component="ul" sx={{ display: 'flex', gap: 4, listStyle: 'none', p: 0, m: 0 }}>
            <Box component="li">
              <Link href="#" underline="none">Terms & Condition</Link>
            </Box>
            <Box component="li">
              <Link href="#" underline="none">Privacy Policy</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

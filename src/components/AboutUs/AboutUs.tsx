import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  styled,
  Chip,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
}));

const NestedItem = styled(Paper)(({ theme }) => ({
  padding: [theme.spacing(4), theme.spacing(0)],
  height: "100%",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "none"
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const StrokeText = styled(Box)(({ theme }) => ({
  WebkitTextStrokeWidth: "1px",
  WebkitTextStrokeColor: theme.palette.text.primary,
  color: "transparent",
  display: "inline",
}));

const AboutUs = () => {
  const theme = useTheme();

  return (
    <Box sx={{ margin: "50px 0" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Item sx={{ py: 5, px: 4 }}>
              <Chip label="About Us" sx={{ mb: 5 }} />
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h3"
                  sx={{ color: theme.palette.text.primary }}
                >
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    I'm A Senior Product Designer Working For More Than
                  </Box>
                  10 Years In The Startup Market, I've Worked In Large Companies
                  Solving Their Design Problems
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, maiores magnam, illum corrupti placeat earum quaerat
                tempora ratione rerum, porro obcaecati id? Cupiditate molestiae,
                similique porro perferendis molestias earum laborum.
              </Typography>
              <Grid container spacing={4} sx={{mt:1}}>
                <Grid item xs={12} md={4}>
                  <NestedItem>
                    <StyledImage src="./About.jpg" alt="about" />
                  </NestedItem>
                </Grid>
                <Grid item xs={12} md={8}>
                  <NestedItem>
                    <Typography variant="h2" sx={{ mb: 3 }}>
                      My Work Experience And
                      <StrokeText> My Education</StrokeText>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: theme.palette.text.secondary, mb: 3 }}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eum repellat reiciendis quibusdam, quia veniam sit aperiam
                      dicta ea rem esse, earum quis? Explicabo voluptates odio
                      sed sunt, quis saepe, expedita voluptatum corrupti vitae
                      libero non labore recusandae incidunt rerum soluta sequi
                      harum. Molestiae magni delectus minima velit quae
                      distinctio sit.
                    </Typography>
                    <Button variant="contained">About me</Button>
                  </NestedItem>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;

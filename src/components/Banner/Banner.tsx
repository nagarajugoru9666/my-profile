import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Paper, Typography, Chip, Skeleton } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const StyledContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12.5),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px"
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(2),
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(2),
  },
}));

const StyledHeadline = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(3),
    fontSize: "2rem",
  },
}));

const StyledText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const CounterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
  marginTop: theme.spacing(3),
}));

const CounterItem = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
  marginRight: theme.spacing(0),
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(5),
    marginBottom: 0,
  },
}));

const CounterText = styled(Typography)(({ theme }) => ({
  WebkitTextStrokeWidth: '1px',
  WebkitTextStrokeColor: theme.palette.text.primary,
  color: 'transparent',
  fontWeight: 700,
  fontSize: '3rem',
  lineHeight: '1.2',
}));

const CounterLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
}));

const Banner = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <StyledPaper>
              {loading ? (
                <>
                  <Skeleton variant="rectangular" width={120} height={32} />
                  <Skeleton variant="text" height={50} width="80%" />
                  <Skeleton variant="text" height={70} width="90%" />
                  <Skeleton variant="text" height={20} width="100%" />
                  <Skeleton variant="text" height={20} width="100%" />
                  <Skeleton variant="text" height={20} width="100%" />
                  <CounterBox>
                    <Skeleton variant="rectangular" width={80} height={50} />
                    <Skeleton variant="rectangular" width={80} height={50} />
                    <Skeleton variant="rectangular" width={80} height={50} />
                  </CounterBox>
                </>
              ) : (
                <>
                  <StyledChip label="Available for work" />
                  <StyledTitle variant="h3">
                    Hi, I’m Werner Disum,
                  </StyledTitle>
                  <StyledHeadline variant="h1">
                    Senior Product Designer Based in London
                  </StyledHeadline>
                  <StyledText variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, maiores magnam, illum corrupti placeat earum quaerat
                    tempora ratione rerum, porro obcaecati id? Cupiditate molestiae,
                    similique porro perferendis molestias earum laborum.
                  </StyledText>
                  <CounterBox>
                    <CounterItem>
                      <CounterText variant="h3">
                        12
                      </CounterText>
                      <CounterLabel variant="subtitle1">
                        Years of Experience
                      </CounterLabel>
                    </CounterItem>
                    <CounterItem>
                      <CounterText>
                        4k
                      </CounterText>
                      <CounterLabel variant="subtitle1">
                        Projects Completed
                      </CounterLabel>
                    </CounterItem>
                    <CounterItem>
                      <CounterText variant="h3">
                        6k
                      </CounterText>
                      <CounterLabel variant="subtitle1">
                        Clients Worldwide
                      </CounterLabel>
                    </CounterItem>
                  </CounterBox>
                </>
              )}
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              {loading ? (
                <Skeleton variant="rectangular" width="100%" height={300} />
              ) : (
                <StyledImage src="./profile.jpg" alt="profile" />
              )}
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default Banner;

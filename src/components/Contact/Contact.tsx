import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box component="section" sx={{ padding: { xs: "40px 0", sm: "60px 0" } }}>
      <Container>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid
            item
            sm={5}
            xs={12}
            sx={{ paddingRight: isMobile ? "0" : "40px" }}
          >
            <Typography variant="body1" sx={{ marginBottom: "30px" }}>
              Great! We're excited to hear from you and let's start something
              special together. Call us for any inquiry.
            </Typography>
            <Box>
              <Link href="#" sx={{ display: "block", marginBottom: "10px" }}>
                Valentin, Street Road 24, New York, USA - 67452
              </Link>
              <Link href="#" sx={{ display: "block", marginBottom: "10px" }}>
                +02 000-000-000
              </Link>
              <Link href="#" sx={{ display: "block", marginBottom: "10px" }}>
                infocontact@gmail.com
              </Link>
            </Box>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <FacebookIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
              <XIcon fontSize="large" />
              <YouTubeIcon fontSize="large" />
            </Box>
          </Grid>
          <Grid item sm={7} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                marginBottom: "20px",
              }}
            >
              <Box
                sx={{
                  width: isMobile ? "100%" : "50%",
                  marginRight: isMobile ? 0 : "20px",
                  marginBottom: isMobile ? "20px" : 0,
                }}
              >
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Name"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ width: isMobile ? "100%" : "50%" }}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Email"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Subject"
                variant="outlined"
              />
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Box>
            <Button
              variant="contained"
              fullWidth={isMobile}
              sx={{ maxWidth: isDesktop ? "200px" : "100%" }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;

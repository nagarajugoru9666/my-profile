import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  styled,
} from "@mui/material";
import {
  Web,
  PhoneIphone,
  DesignServices,
  GraphicEq,
  Search,
  Campaign,
} from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useTheme } from "@mui/material/styles";

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const StrokeText = styled(Box)(({ theme }) => ({
  WebkitTextStrokeWidth: "1px",
  WebkitTextStrokeColor: theme.palette.text.primary,
  color: "transparent",
  display: "inline",
}));

const services: Service[] = [
  {
    icon: <Web fontSize="large" />,
    title: "Web Design",
    description: "Creating stunning and responsive websites.",
  },
  {
    icon: <PhoneIphone fontSize="large" />,
    title: "App Design",
    description: "Designing user-friendly mobile applications.",
  },
  {
    icon: <DesignServices fontSize="large" />,
    title: "UI/UX Design",
    description: "Improving user experiences through thoughtful design.",
  },
  {
    icon: <GraphicEq fontSize="large" />,
    title: "Graphic Design",
    description: "Creating visually appealing graphics and layouts.",
  },
  {
    icon: <Search fontSize="large" />,
    title: "SEO",
    description: "Optimizing websites for search engines.",
  },
  {
    icon: <Campaign fontSize="large" />,
    title: "Marketing",
    description: "Promoting your brand through strategic marketing.",
  },
];

const CustomArrow = styled(Box)(({ theme }) => ({
  "&:before": {
    color: theme.palette.text.primary,
    // fontSize: '30px',
  },
}));

const CustomDots = styled(Box)(({ theme }) => ({
  "& li button:before": {
    color: theme.palette.text.secondary,
    fontSize: "14px",
    border: "1px solid transparent",
    borderRadius: "50%",
  },
  "& li.slick-active button:before": {
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.text.primary}`,
  },
}));

const Services: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow>→</CustomArrow>,
    prevArrow: <CustomArrow>←</CustomArrow>,
    appendDots: (dots: React.ReactNode) => <CustomDots>{dots}</CustomDots>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: "60px 0" }}>
      <Container>
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          sx={{ marginBottom: "30px" }}
        >
          What I Do For My <StrokeText>Clients</StrokeText>
        </Typography>
        <Slider {...settings}>
          {services.map((service, index) => (
            <Box>
              <Card key={index} sx={{ padding: "20px", margin: "0 10px" }}>
              <CardContent sx={{ textAlign: "center" }}>
                {service.icon}
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
            </Box>
            
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Services;

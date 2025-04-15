import React from 'react';
import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";
import Chip from "@mui/material/Chip";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useTheme } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px"
}));

const StrokeText = styled(Box)(({ theme }) => ({
  WebkitTextStrokeWidth: '1px',
  WebkitTextStrokeColor: theme.palette.text.primary,
  color: 'transparent',
  display:'inline'
}));

const timelineData = [
  {
    yearRange: "2010 - 2012",
    title: "Art University - New York",
    description: "Studied Fine Arts, specializing in modern art and sculpture. Participated in various exhibitions and art shows, and received the Dean's List honor for academic excellence."
  },
  {
    yearRange: "2013 - 2015",
    title: "Programming Course - Paris",
    description: "Completed an intensive programming course focusing on web development and software engineering. Gained proficiency in languages such as Python, JavaScript, and Ruby."
  },
  {
    yearRange: "2016 - 2018",
    title: "Data Analyst - TechCorp",
    description: "Worked as a data analyst, focusing on data visualization and business intelligence. Utilized tools like Tableau and Power BI to present complex data in an accessible manner."
  },
  {
    yearRange: "2019 - 2021",
    title: "NLP Engineer - AI Solutions",
    description: "Specialized in text processing and natural language generation. Developed and fine-tuned models for various applications, including chatbots and automated content creation."
  },
  {
    yearRange: "2022 - 2023",
    title: "UX Researcher - Tech Innovations Lab",
    description: "Conducted research on user behavior and preferences to inform design decisions. Developed user personas, conducted usability testing, and provided actionable insights to improve product design."
  },
  {
    yearRange: "2023 - 2024",
    title: "UI/UX Designer - InnovateX",
    description: "Led the design of user interfaces and experiences for various projects. Collaborated with cross-functional teams to ensure designs met user needs and business goals. Utilized tools such as Sketch, Figma, and Adobe XD."
  },
  {
    yearRange: "2024 - 2025",
    title: "Project Manager - InnovateX",
    description: "Led a team of engineers and designers in planning and executing projects. Oversaw all phases of project development, ensuring timely delivery and alignment with client expectations."
  }
];

const CustomTimeline = () => {
  const theme = useTheme();
  return (
    <Box sx={{ margin: "50px 0" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item sx={{ py: 5, px: 4 }}>
              <Chip label="Timeline" sx={{ mb: 5 }} />
              <Typography variant="h2" sx={{ mb: 3 }}>
                My Work Experience And<StrokeText> My Education</StrokeText>
              </Typography>
              <Timeline position="alternate">
                {timelineData.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent color="text.secondary">
                      {item.yearRange}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot sx={{ backgroundColor: theme.palette.text.primary }} />
                      {index < timelineData.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                        {item.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CustomTimeline;

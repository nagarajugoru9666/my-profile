import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  styled,
  LinearProgress,
} from "@mui/material";
import { useInView } from "./SkillHook/SkillHook";
import { useTheme } from "@mui/material/styles";

const StrokeText = styled(Box)(({ theme }) => ({
  WebkitTextStrokeWidth: "1px",
  WebkitTextStrokeColor: theme.palette.text.primary,
  color: "transparent",
  display: "inline",
}));

interface Skill {
  name: string;
  value: number;
}

const skills: Skill[] = [
  { name: "JavaScript", value: 90 },
  { name: "React", value: 85 },
  { name: "HTML", value: 90 },
  { name: "CSS", value: 80 },
  { name: "Nodejs", value: 75 },
  { name: "Python", value: 70 },
];

type ProgressState = {
  [key in
    | "JavaScript"
    | "React"
    | "HTML"
    | "CSS"
    | "Nodejs"
    | "Python"]: number;
};

const initialProgress: ProgressState = {
  JavaScript: 0,
  React: 0,
  HTML: 0,
  CSS: 0,
  Nodejs: 0,
  Python: 0,
};

const Skills: React.FC = () => {
  const [progress, setProgress] = useState<ProgressState>(initialProgress);

  const { ref, inView } = useInView(
    {
      threshold: 0.3,
    },
    true
  );

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setProgress({
          JavaScript: 90,
          React: 85,
          HTML: 90,
          CSS: 80,
          Nodejs: 75,
          Python: 70,
        });
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [inView]);
  const theme = useTheme();

  return (
    <Box sx={{ padding: "60px 0" }} ref={ref}>
      <Container>
        <Typography variant="h2" gutterBottom align="center">
          My <StrokeText>Skills</StrokeText>
        </Typography>
        {skills.map((skill) => (
          <Box key={skill.name} sx={{ margin: "20px 0" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "text.secondary" }}
              >
                {skill.name}
              </Typography>
              <Typography variant="body1">
                {progress[skill.name.replace(".", "") as keyof ProgressState]}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={
                progress[skill.name.replace(".", "") as keyof ProgressState]
              }
              sx={{
                height: "10px",
                borderRadius: "5px",
                backgroundColor: "text.secondary",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: theme.palette.text.primary,
                },
              }}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Skills;

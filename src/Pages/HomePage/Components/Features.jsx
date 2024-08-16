import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@mui/icons-material";
import { styled } from "@mui/system";

const FeatureCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(4),
  color: theme.palette.primary.dark,
}));

const features = [
  {
    title: "Interactive Learning",
    description:
      "Engage with our platform through interactive lessons and quizzes",
  },
  {
    title: "Personalized Paths",
    description:
      "Tailored learning experiences based on your goals and progress",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your advancement with detailed analytics and insights",
  },
  {
    title: "Real-World Practice",
    description:
        "Participate in engaging exercises to practice speaking, listening, reading, and writing in English",
  },
  {
    title: "Expert Tutors",
    description: "Learn from people with advanced english skills",
  },
  {
    title: "Community Support",
    description:
      "Connect with peers in our vibrant learning community",
  },
];

const Features = () => {
  const theme = useTheme();

  return (
    <Box
      id="features"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 8,
        scrollMarginTop: theme.spacing(8), // Add this line
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h2" align="center">
          Our Features
        </SectionTitle>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FeatureCard>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{ fontSize: 48, color: theme.palette.primary.main }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="div"
                    align="center"
                    gutterBottom
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

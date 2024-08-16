import React, { useEffect, useRef } from "react";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import gsap from "gsap";
import EarthSVG from "../../../assets/Earth.svg";

const OurMission = () => {
  const theme = useTheme();
  const earthRef = useRef(null);

  useEffect(() => {
    const earth = earthRef.current;

    gsap.to(earth, {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(earth, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <Box
      id="our-mission"
      sx={{
        backgroundColor: theme.palette.primary.light,
        py: 8,
        scrollMarginTop: theme.spacing(8), // Add this line
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              gutterBottom
              color="background.default"
              className="font-bold"
            >
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph color="background.default" className="text-justify">
              This platform was created with a deep understanding of the
              challenges faced by refugees seeking to build new lives in the
              United States. Among these challenges, language stands as one of
              the most significant barriers, especially for students navigating
              a new educational environment. Our mission is to break down these
              barriers by making English language learning accessible to all,
              regardless of age, race, economic background, or country of
              origin.
            </Typography>
            <Typography variant="body1" color="background.default" className="text-justify">
              Harnessing the power of advanced AI, including custom-trained
              models like OpenAI's ChatGPT, we deliver personalized and adaptive
              lessons tailored to each student's unique needs. Our commitment is
              to provide high-quality, free education that empowers every user
              to thrive in their new home.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              ref={earthRef}
              sx={{
                width: "100%",
                maxWidth: 400,
                margin: "auto",
                "& img": {
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              <img src={EarthSVG} alt="Earth" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurMission;

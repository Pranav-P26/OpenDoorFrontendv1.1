import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { Email as EmailIcon } from "@mui/icons-material";

const ContactCard = styled(Card)(({ theme }) => ({
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
  color: theme.palette.background.default,
}));

const teamMembers = [
  {
    name: "Pranav Pramod",
    role: "Fullstack Developer",
    email: "pramod.pranav26@gmail.com",
  },
  {
    name: "Mano Wertman",
    role: "Frontend Developer and AI Integrator",
    email: "manoisnotcool@gmail.com",
  },
  {
    name: "Neil Kumaran",
    role: "Backend Developer and AI Integrator",
    email: "neilkumaran710@gmail.com",
  },
  {
    name: "Stratton Jelley",
    role: "Backend Developer and Fullstack Integrator",
    email: "stratjel@gmail.com",
  },
];

const ContactUs = () => {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: theme.palette.primary.light,
        py: 8,
        scrollMarginTop: theme.spacing(8),
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h2" align="center">
          Contact Us
        </SectionTitle>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ContactCard>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      align="center"
                      gutterBottom
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      color="text.secondary"
                      gutterBottom
                    >
                      {member.role}
                    </Typography>
                    <Link
                      href={`mailto:${member.email}`}
                      color="primary"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: 2,
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <EmailIcon sx={{ mr: 1 }} />
                      {member.email}
                    </Link>
                  </Box>
                </CardContent>
              </ContactCard>
            </Grid>
          ))}\
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
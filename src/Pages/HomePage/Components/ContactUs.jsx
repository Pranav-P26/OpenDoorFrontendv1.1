import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  Link,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { Email as EmailIcon } from "@mui/icons-material";

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(6),
  color: theme.palette.background.default, // Updated to use background default color
  textTransform: 'uppercase',
  letterSpacing: '2px',
}));

const ContactTable = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[3],
}));

const ContactRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ContactCell = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const NameTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

const RoleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontStyle: 'italic',
}));

const EmailLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: theme.palette.secondary.main,
  transition: 'color 0.3s',
  '&:hover': {
    color: theme.palette.secondary.dark,
  },
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
        py: 10,
        scrollMarginTop: theme.spacing(8),
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h2" align="center">
          Contact Us
        </SectionTitle>
        <ContactTable>
          {teamMembers.map((member, index) => (
            <React.Fragment key={index}>
              <ContactRow>
                <ContactCell sx={{ width: '25%' }}>
                  <NameTypography variant="h6">{member.name}</NameTypography>
                </ContactCell>
                <ContactCell sx={{ width: '35%' }}>
                  <RoleTypography variant="body1">{member.role}</RoleTypography>
                </ContactCell>
                <ContactCell sx={{ width: '40%', justifyContent: 'flex-start' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <EmailIcon sx={{ mr: 2, fontSize: "1.2rem", flexShrink: 0, color: theme.palette.error.main }}/> {/* Updated to use error color */}
                    <EmailLink href={`mailto:${member.email}`}>
                      <Typography variant="body2" noWrap>{member.email}</Typography>
                    </EmailLink>
                  </Box>
                </ContactCell>
              </ContactRow>
              {index < teamMembers.length - 1 && (
                <Divider sx={{ margin: '0 16px' }} />
              )}
            </React.Fragment>
          ))}
        </ContactTable>
      </Container>
    </Box>
  );
};

export default ContactUs;
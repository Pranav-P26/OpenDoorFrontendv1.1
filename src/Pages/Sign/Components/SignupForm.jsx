import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

// Updated validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must contain a valid domain (e.g., .com, .net)')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const SignupForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ position: 'relative', minHeight: '350px', mt: -2 }}>
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              margin="dense"
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              className="mb-4"
              sx={{ 
                mt: 0,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'transparent', // Remove blue background
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'gray', // Change border color when focused
                },
              }}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              margin="dense"
              error={touched.password && errors.password}
              helperText={touched.password && errors.password}
              className="mb-4"
              sx={{ mt: 0 }}
            />
            <Field
              as={TextField}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              margin="dense"
              error={touched.confirmPassword && errors.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
              className="mb-4"
              sx={{ mt: 0 }}
            />
            <Box sx={{ position: 'absolute', bottom: 30, width: '100%' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                className="mt-4"
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
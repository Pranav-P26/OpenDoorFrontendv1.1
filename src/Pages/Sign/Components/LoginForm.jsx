import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ position: 'relative', minHeight: '250px', mt: -2 }}>
            <Field
              as={TextField}
              name="username"
              label="Username"
              fullWidth
              margin="dense"
              error={touched.username && errors.username}
              helperText={touched.username && errors.username}
              className="mb-4"
              sx={{ mt: 0 }}
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
            <Box sx={{ position: 'absolute', bottom: 10, width: '100%' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                className="mb-4"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
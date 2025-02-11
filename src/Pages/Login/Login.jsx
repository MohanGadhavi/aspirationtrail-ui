import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api.js';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/auth.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import FieldsBuilder from '../../components/Core/FieldBuilder/index.jsx';

const fields = [
  {
    label: 'Email ID',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
  },
  {
    label: (
      <p>
        I agree to the
        <a className="">Terms and Conditions</a>
      </p>
    ),
    name: 'acceptTerms',
    type: 'checkbox',
  },
];

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: 'test@gmail.com',
      password: 'test1234',
      acceptTerms: true,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
      acceptTerms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('Required'),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const payload = {
        email: values.email,
        password: values.password,
        termsAndCondtion: values.acceptTerms,
      };
      console.log('loginPayload::: ', payload);

      try {
        const response = await api.post('/user/login', payload);
        const token = response.data.token;
        // Save token in localStorage
        localStorage.setItem('authToken', token);
        // Dispatch login success
        dispatch(loginSuccess(response.data.user));

        console.log('LoginResponse::: ', response);
        console.log('LoginToken::: ', token);

        // Redirect to Home page
        navigate('/home');
      } catch (error) {
        if (error.response && error.response.data) {
          setFieldError('general', error.response.data.message); // Show the error in a general error section
        } else {
          setFieldError('general', 'Something went wrong. Try again.'); // Show the error in a general error section
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className={` min-h-screen place-content-center bg-teal-200 bg-gradient-to-tr from-[#085078] to-[#267871]   text-black bg-("../../assets/register_page_img.jpg") `}
    >
      <Card
        color="transparent"
        shadow={false}
        className="w-min absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5 px-10 bg-gray-100 border-2 border-black flex flex-col items-start drop-shadow-2xl "
      >
        <Typography variant="h4">Log in</Typography>
        <Typography className="mt-2 font-normal">
          Welcome to Aspirationtrail
        </Typography>
        <form
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={formik.handleSubmit}
        >
          <FieldsBuilder formik={formik} fields={fields} columnsCount={1} />
          <div className={`col-span-2 relative mt-2 h-12`}>
            <Button
              loading={formik.isSubmitting}
              type="submit"
              className="w-full h-full"
              disabled={formik.isSubmitting}
              color="teal"
            >
              {formik.isSubmitting ? 'Registering...' : 'Register'}
            </Button>
            {formik.errors.general && (
              <p className="text-red-400 text-base absolute -bottom-8 left-1 ">
                {formik.errors.general}
              </p>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;

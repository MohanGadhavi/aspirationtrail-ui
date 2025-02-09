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

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsLogin(true);
  //   navigate("/home");
  // };

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
      password: Yup.string().required('Password is required'),
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
      console.log('loginPayloaf::: ', payload);

      try {
        const response = await api.post('/user/login', payload);

        const token = response.data.token;
        // Save token in localStorage
        localStorage.setItem('authToken', response.data.token);

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
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <div>
            <p className="mb-1">Username</p>
            <Input
              type="email"
              size="lg"
              placeholder="example@email.com"
              className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden before:content-none after:content-none',
              }}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-400 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <p className="mb-1">Password</p>
            <div className="relative w-full">
              <Input
                type={showPassword ? 'text' : 'password'}
                size="lg"
                placeholder="********"
                className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: ' hidden before:content-none after:content-none',
                }}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-2"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(false)}
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-400 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
          name="acceptTerms"
          checked={formik.values.acceptTerms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
          <p className="text-red-400 text-sm">{formik.errors.acceptTerms}</p>
        ) : null}
        {formik.errors.general && (
          <p className="text-red-400 text-sm">{formik.errors.general}</p>
        )}
        <Button
          loading={formik.isSubmitting}
          type="submit"
          className="mt-6 justify-center"
          variant="gradient"
          fullWidth
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
        {/* <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/registration" className="font-medium text-gray-900">
            Sign up
          </Link>
        </Typography> */}
      </form>
    </Card>
  );
}

export default Login;

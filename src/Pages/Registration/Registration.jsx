import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
  Checkbox,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api.js';

function Registration() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userType: '',
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      acceptTerms: false,
    },
    validationSchema: Yup.object({
      userType: Yup.string().required('User Type is required'),
      userName: Yup.string().required('Username is required'),
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      acceptTerms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('Required'),
    }),
    // onSubmit: async (values, { setSubmitting, setFieldError }) => {
    //   console.log('values: ', values);
    //   try {
    //     const formData = new FormData();
    //     Object.entries(v&&alues).forEach(([key, value]) => {
    //       formData.append(key, value);
    //     });
    //     await api
    //       .post('/user/register', formData)
    //       .then((res) => {
    //         console.log(res);

    //         navigate('/login');
    //       })
    //       .catch((err) => console.log(err));
    //   } catch (error) {
    //     setFieldError('general', 'Registration failed');
    //   } finally {
    //     setSubmitting(false);
    //   }
    // },

    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      console.log('values: ', values);
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });
        await api.post('/user/register', formData);
        navigate('/login');
      } catch (error) {
        console.error('Error response:', error);
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
    <div className="h-screen place-content-center ">
      <Card className=" w-fit p-5 border-2 border-black  drop-shadow-2xl mx-auto mt-10 ">
        <Typography variant="h4">Register</Typography>
        <form
          className="mt-8 mb-2 grid grid-cols-3  gap-3  "
          onSubmit={formik.handleSubmit}
          encType="multipart/form-data"
        >
          <div className="">
            <label className="block mb-1">User Type</label>
            <Select
              className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden before:content-none after:content-none',
              }}
              name="userType"
              value={formik.values.userType}
              onChange={(val) => formik.setFieldValue('userType', val)}
            >
              <Option value="user">User</Option>
              <Option value="admin">Admin</Option>
              <Option value="admin">Mentor</Option>
            </Select>
            {formik.touched.userType && formik.errors.userType && (
              <p className="text-red-400 text-sm">{formik.errors.userType}</p>
            )}
          </div>
          <div className="">
            <label className="block mb-1">Username</label>
            <Input
              className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden before:content-none after:content-none',
              }}
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.userName && formik.errors.userName && (
              <p className="text-red-400 text-sm">{formik.errors.userName}</p>
            )}
          </div>
          <div className="">
            <label className="block mb-1">First Name</label>
            <Input
              className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden before:content-none after:content-none',
              }}
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-400 text-sm">{formik.errors.firstName}</p>
            )}
          </div>
          <div className="">
            <label className="block mb-1">Last Name</label>
            <Input
              className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden before:content-none after:content-none',
              }}
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-400 text-sm">{formik.errors.lastName}</p>
            )}
          </div>
          <div className="">
            <label className="block mb-1">Email</label>
            <Input
              className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden before:content-none after:content-none',
              }}
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-400 text-sm">{formik.errors.email}</p>
            )}
          </div>
          <div className="">
            <label className="block mb-1">Phone</label>
            <Input
              className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden before:content-none after:content-none',
              }}
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-400 text-sm">{formik.errors.phone}</p>
            )}
          </div>
          <div className="">
            <label className="block mb-1">Password</label>
            <Input
              className=" !border !border-gray-500 bg-white ring-2 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden before:content-none after:content-none',
              }}
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-400 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <div className=" col-span-3 flex items-center">
            <Checkbox
              name="acceptTerms"
              checked={formik.values.acceptTerms}
              onChange={formik.handleChange}
            />
            <label className="ml-2">I accept the Terms and Conditions</label>
            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
              <p className="text-red-400 text-sm">
                {formik.errors.acceptTerms}
              </p>
            )}
          </div>
          <Button type="submit" className="" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? 'Registering...' : 'Register'}
          </Button>
          {formik.errors.general && (
            <p className="text-red-400 text-sm self-center font-semibold">
              {formik.errors.general}
            </p>
          )}
        </form>
      </Card>
    </div>
  );
}

export default Registration;

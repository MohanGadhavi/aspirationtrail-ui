import React, { Suspense, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Card, Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/api.js';
import register_page_img from '../../assets/register_page_img.jpg';
import FieldBuilder from '../../components/Core/FieldBuilder';
const fields = [
  {
    label: 'User type',
    name: 'userType',
    type: 'select',
    options: [
      {
        value: 'user',
        name: 'User',
      },
      {
        value: 'admin',
        name: 'Admin',
      },
      {
        value: 'admin',
        name: 'Mentor',
      },
    ],
  },
  {
    label: 'Username',
    name: 'userName',
    type: 'text',
  },
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text',
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    maxLength: 10,
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    cols: 2,
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
    cols: 2,
  },
];

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
        .required('Email is required')
        .email('Invalid email address'),
      phone: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
      acceptTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions'),
    }),
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
    <div
      className={` min-h-screen place-content-center bg-teal-200 bg-gradient-to-tr from-[#085078] to-[#267871]   text-black bg-("../../assets/register_page_img.jpg") `}
    >
      <Card className=" w-[70%] bg-white/100 p-5 flex flex-row gap-4  border border-teal-900  drop-shadow-2xl mx-auto">
        <div className="image-div w-2/5 rounded-2xl overflow-hidden">
          <img
            src={register_page_img}
            alt="registration_image"
            className="w-full h-full object-cover select-none"
            onLoad={() => console.log('Image loaded')}
          />
        </div>
        <div className="form-div p-8 flex-1  text-black">
          <h2 className="text-4xl font-bold">Create an account</h2>
          <p className="mt-2">
            Already have an account?
            <Link to={'/login'} className="ml-2 text-teal-400 underline ">
              Log in
            </Link>
          </p>
          <form
            className={`mt-8`}
            onSubmit={formik.handleSubmit}
            encType="multipart/form-data"
          >
            <FieldBuilder formik={formik} fields={fields} />
            <div className={`col-span-2 relative mt-2 h-12`}>
              <Button
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
        </div>
      </Card>
    </div>
  );
}

export default Registration;

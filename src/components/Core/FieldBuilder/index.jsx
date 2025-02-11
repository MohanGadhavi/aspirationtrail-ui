import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox, Input, Option, Select } from '@material-tailwind/react';
import React, { useState } from 'react';

function FieldsBuilder({ formik, fields, columnsCount = 2 }) {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={`mb-2 grid  gap-5`}>
      {fields.map((fld, idx) => {
        console.log(fld);
        return (
          <div
            className={` relative w-full h-12 col-span-${fld.cols} `}
            key={idx}
          >
            {fld.type === 'select' ? (
              <Select
                className=""
                label={fld.label}
                name={fld.name}
                value={formik.values[fld.name]}
                onChange={(val) => formik.setFieldValue(fld.name, val)}
                error={formik.touched[fld.name] && formik.errors[fld.name]}
              >
                {fld.options?.map((opt) => (
                  <Option value={opt.value}>{opt.name}</Option>
                ))}
              </Select>
            ) : fld.type === 'checkbox' ? (
              <Checkbox
                name={fld.name}
                checked={formik.values[fld.name]}
                onChange={formik.handleChange}
                label={fld.label}
                onBlur={formik.handleBlur}
                color="teal"
              />
            ) : (
              <>
                <Input
                  className=""
                  label={fld.label}
                  name={fld.name}
                  type={showPass ? 'text' : fld.type}
                  value={formik.values[fld.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  maxLength={fld.maxLength}
                  error={formik.touched[fld.name] && formik.errors[fld.name]}
                />
                {fld.type === 'password' && (
                  <button
                    className="absolute right-2 top-[20%]"
                    onClick={() => setShowPass(!showPass)}
                  >
                    <FontAwesomeIcon
                      icon={showPass ? faEyeSlash : faEye}
                      className=""
                    />
                  </button>
                )}
              </>
            )}
            {formik.touched[fld.name] && formik.errors[fld.name] && (
              <p className="text-red-400 text-[11px] absolute -bottom-2.5 left-1 ">
                {formik.errors[fld.name]}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FieldsBuilder;

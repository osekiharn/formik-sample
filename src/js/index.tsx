/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import ReactDOM from 'react-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './styles.css'

// type Errors = {
//   firstName: string
//   lastName: string
//   email: string
// }

// const validate = (values) => {
//   const errors: Errors = {} as Errors;
//   if (!values.firstName) {
//     errors.firstName = 'Required'
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or lesse'
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required'
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters of less'
//   }

//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }

//   return errors
// }

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters of less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        {...formik.getFieldProps('lastName')}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  return <SignupForm />
}

ReactDOM.render(<App />, document.getElementById('root'))

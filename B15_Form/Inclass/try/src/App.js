// import { Controller, useForm } from "react-hook-form";


// export default function App() {
//   // const {
//   //   register,
//   //   handleSubmit,
//   //   watch,
//   //   formState: { errors },
//   // } = useForm();
//   // const onSubmit = (data) => console.log(data);
//   const { control, handleSubmit, formState: {errors} } = useForm({
//     defaultValues: {
//       Name: "",
//       Selection: "1",
//       email: "",
//     },
//   });

//   const showErrors = () => {
//     switch (errors['Name'].type) {
//       case 'required':
//         return 'Name is required';
//       default:
//         return 'Error';
//     }
//   };
//   const onSubmit = (data) => console.log(data);


//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="">Name</label>
//         <Controller
//           name="Name"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => <input {...field} />}
//         ></Controller>
//         {errors['Name'] && showErrors(errors['Name'].type)}
//       </div>

//       <div>
//         <label htmlFor="">Email</label>
//       <Controller
//         name="email"
//         control={control}
//         render={({ field }) => <input {...field} />}
//       ></Controller>
//       </div>
//       <div>
//         <label htmlFor="">Select</label>
//       <Controller
//         name="Selection"
//         control={control}
//         render={({ field }) => (
//           <select {...field}>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//           </select>
//         )}
//       ></Controller>
//       </div>
//       <button type="submit">Submit</button>
      
//     </form>
//     // <form onSubmit={handleSubmit(onSubmit)}>
//     //   <label htmlFor="name">Name:</label>

//     //   <input {...register("name")} id="name" />

//     //   <label htmlFor="emai">Email:</label>
//     //   <input id="emai" {...register("email")} />

//     //   <button type="submit">Submit</button>
//     // </form>
//   );
// }


// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   // Pass the useFormik() hook initial form values and a submit function that will
//   // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default SignupForm;

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
          <input type="button"></input>
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample;

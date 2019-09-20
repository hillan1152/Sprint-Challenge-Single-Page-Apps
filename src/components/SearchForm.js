import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


function SearchForm( { errors, touched, values, status }) {
  
  const [search, setSearch] = useState([]);
    useEffect(
      () => {
        status && setSearch(search => [...search, status]);
      },
      [status]
    );
  return (
    <section className="search-form">
     <div>
       <Form>
          <h1>Character Search Form</h1>
          <Field type="text" name="names" placeholder="Search For Name"/>
          {touched.names && errors.names && <p>{errors.names}</p>}
       </Form>
     </div>
     {search.map(person => (
        <ul key = {person.id}>
            <li>Name: {person.names}</li>
        </ul>
            ))}
    </section>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({ name }) {
      return {
          name: name || "",
      };
  },
  validationSchema: Yup.object().shape({
      name: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
      axios.post("https://rickandmortyapi.com/api/character/", values)
      .then(res => {
          setStatus(res.data.results);
          console.log(res.data.results);
      })
      .catch(err => console.log("ERROR", err.res))
  }
})(SearchForm);

export default FormikSearchForm;

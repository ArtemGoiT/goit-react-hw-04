import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { query } = values;
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    resetForm();
  };

  return (
    <header className={css.barHeder}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <ErrorMessage name="query" component="div" />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;

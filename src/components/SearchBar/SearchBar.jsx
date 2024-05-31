import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast0;";

const SearchBar = ({ onArtem }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { query } = values;
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onArtem(query);
    resetForm();
  };

  return (
    <header className={css.heder}>
      <Formik initialValues={{ query: "" }} onArtem={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
export default SearchBar;

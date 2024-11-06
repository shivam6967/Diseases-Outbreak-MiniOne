import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import "./form.css"
const Form = () => {
  return (
    <>
      <div className="main-form">
        <div className="data-one">
          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>

          <div>
            <p>Disease Name</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

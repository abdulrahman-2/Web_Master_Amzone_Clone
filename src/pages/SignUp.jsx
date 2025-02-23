import { useState } from "react";
import FormGenerator from "../components/layout/form/FormGenerator";
import FormLayout from "../components/layout/form/FormLayout";
import { authInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const inputsFields = [
    { type: "text", name: "name", placeholder: "Enter your name" },
    { type: "email", name: "email", placeholder: "Enter your email" },
    { type: "password", name: "password", placeholder: "Enter your password" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await authInstance.post("/signup", formData);
      const { success, message } = res.data;
      if (success) {
        toast.success(message);
        setFormData({ email: "", password: "" });
        setErrors("");
        setLoading(false);
        navigate("/signin");
      }
    } catch (error) {
      setErrors(error.response.data.message || "Something went wrong.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormLayout>
      <FormGenerator
        onSubmit={handleSubmit}
        inputsFields={inputsFields.map((field) => ({
          ...field,
          value: formData[field.name],
          onChange: handleChange,
        }))}
        btnName={loading ? "Loading..." : "Sign Up"}
      />
      {errors && <p className="text-red-500 mt-2 self-start">{errors}</p>}
    </FormLayout>
  );
};

export default SignUp;

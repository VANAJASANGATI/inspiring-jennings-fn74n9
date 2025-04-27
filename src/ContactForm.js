import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInput = (e, name) => {
    const value = e.target.value;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const validate = () => {
    let newErrors = {};
    if (!formState.name) {
      newErrors.name = "Name is required";
    }
    if (!formState.email) {
      newErrors.email = "Email is required";
    } else if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(formState.email)
    ) {
      newErrors.email = "Email is invalid";
    }
    if (!formState.message) {
      newErrors.message = "Message is required";
    }
    return newErrors;
    console.log("newErrors", newErrors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formstate", formState);
    const validateErrors = validate();
    console.log("validateErrors", validateErrors);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setIsSubmitted(true);
      setErrors({});
      setFormState({ name: "", email: "", message: "" });
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      {isSubmitted ? (
        <p style={{ color: "green" }}>Thank you for submitting....</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            style={{ width: "100%", marginBottom: "3px" }}
            onChange={(e) => handleInput(e, "name")}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <label htmlFor="email">Email:</label>
          <br />
          <input
            id="email"
            name="email"
            type="text"
            style={{ width: "100%", marginBottom: "3px" }}
            onChange={(e) => handleInput(e, "email")}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            type="text"
            style={{ width: "100%", marginBottom: "3px" }}
            onChange={(e) => handleInput(e, "message")}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#2E67F8",
              border: "none",
              borderRadius: "4px",
              padding: "6px",
              color: "white",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;

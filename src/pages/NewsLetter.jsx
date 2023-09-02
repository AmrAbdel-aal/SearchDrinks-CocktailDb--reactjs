import React from "react";
import Wrapper from "../wappers/newsletter";
import { Form, useNavigation } from "react-router-dom";

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="POST">
        <h3>Get Our Newsletter</h3>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="field">
          <label htmlFor="lname">Last name</label>
          <input type="text" name="lname" id="lname" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="amrmohammed6066@gmail.com"
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default NewsLetter;

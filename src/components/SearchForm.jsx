import React, { useState } from "react";
import Wrapper from "../wappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form action="">
        <input type="text" name="search" id="search" required />
        <button className="search-btn" disabled={isSubmitting}>
          {isSubmitting ? "searching" : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;

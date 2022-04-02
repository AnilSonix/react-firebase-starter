import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorView from "../../shared/components/error";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <ErrorView
      text="404 Page not found"
      label="Go home"
      onClick={() => {
        navigate("/");
      }}
    />
  );
};

export default NotFound;

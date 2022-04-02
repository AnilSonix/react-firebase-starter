import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import Logout from "./pages/logout/logout";
import NotFound from "./pages/notFound/notFound";

const App = () => {
  return (
    <Box h={"full"}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;

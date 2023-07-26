import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [isValidUser, setIsValidUser] = useState(true);
    if (!isValidUser) return <Navigate to="/" />
    return children;
}

export default ProtectedRoute;

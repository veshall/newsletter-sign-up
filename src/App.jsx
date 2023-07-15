import React, { useState } from "react";
import SignupPage from "./components/SignupPage";
import SucceedPage from "./components/succeedPage";

export default function App() {
  const [newEmail, setNewEmail] = useState(null);
  const getEmail = (email) => {
    setNewEmail(email);
  };

  const dismissHandler = () => {
    setNewEmail(null);
  };
  return (
    <>
      {!newEmail && <SignupPage getEmail={getEmail} />}
      {newEmail && (
        <SucceedPage newEmail={newEmail} dismissHandler={dismissHandler} />
      )}
    </>
  );
}

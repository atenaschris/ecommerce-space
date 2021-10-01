import React from "react";

const AuthForm = () => {
  return (
    <form>
      <div className="group-controls">
        <label>Email</label>
        <input />
      </div>
      <div className="group-controls">
        <label>Password</label>
        <input />
      </div>
      <div className="auth-actions">
          <button>SignIn</button>
      </div>
    </form>
  );
};

export default AuthForm;

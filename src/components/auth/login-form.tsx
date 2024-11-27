import React, { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { hideLoading, showLoading } from "../../redux/loading/loadingslice";
import { hostname } from "../../config/config";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();


const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        dispatch(showLoading())
        const response = await axios.post(`${hostname}/v3/216369d2-ac10-429b-bca6-ac60fca6c564`, {email, password})
        if (response.data) {
            toast.success("Successfully Login")
            setTimeout(() => {
                navigate('/dashboard')
            }, 2000)
        } else {
            toast.error(response.data.message)
        }
    } catch (error) {
        toast.error('Something went Wrong, Try again.')
        console.error('Error during sign up:', error)
    } finally {
        setTimeout(() => {
            dispatch(hideLoading())
        }, 4000)
    }
}
  

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <section className="login-form-container">
      {/* <ToastContainer /> */}
      <ToastContainer />
      <div className="login-input">
        <div className="login-header-text">
          <h2 className="login-title">Welcome!</h2>
          <p className="login-text"> Enter details to login.</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Email Address */}
          <div className="email-container">
            <input
              type="email"
              id="emailAddress"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Toggle password visibility button */}
            <button
              type="button"
              className="toggle-button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <p> HIDE </p> : <p> SHOW </p>}
            </button>
          </div>

          {/* Link to navigate to Forgot Passowrd */}
          <div className="forgot-password">
            <Link to="/" className="link">
               FORGOT PASSWORD?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`login-submit ${password.trim() ? "" : "disabled"}`}
            disabled={!password.trim()}
          >
            LOG IN
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;

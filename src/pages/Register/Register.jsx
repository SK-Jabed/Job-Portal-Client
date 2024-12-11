import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RiGoogleFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import registerLottieAnimation from "../../assets/Lottie-Animation/Register-Animation.json"

const Register = () => {
//   const { createNewUser, signInWithGoogle, user, setUser, updateUserProfile } =
//     useContext(authContext);

//   const navigate = useNavigate();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         setUser(result.user);
//         navigate("/");
//       })
//       .catch((error) => setError("ERROR", error.message));
//   };

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const terms = e.target.terms.checked;

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords didn't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!terms) {
      setError("Please accept our terms and conditions");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (

    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-[450px]">
          <Lottie animationData={registerLottieAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <NavLink
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-3 top-12 rounded-full"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </NavLink>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered"
                required
              />
              <Link
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-3 top-12 rounded-full"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Link>
            </div>
            {/* {error && <p className="font-semibold text-red-500">{error}</p>} */}
            <div className="form-control">
              <label className="label justify-start gap-2 cursor-pointer items-center">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox h-5 w-5"
                />
                <span className="label-text font-semibold">
                  Accept our Terms and Conditions
                </span>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-neutral rounded-md text-white font-semibold text-base">
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-semibold text-[#706F6F]">
            Already Have An Account ?{" "}
            <Link to={"/auth/login"} className="text-red-500 font-bold">
              Login
            </Link>
          </p>
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
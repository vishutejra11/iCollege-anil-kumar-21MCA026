import React, { useContext, useState } from "react";
import { PiStudent } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";

import { PiStudentThin, PiUserThin, PiSpinnerGapBold } from "react-icons/pi";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "../../config/api/axios";
import UserContext from "../../Hooks/UserContext";
import CircleDesign from "../Layouts/CircleDesign";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, message, setMessage, slowLoadingIndicator } =
    useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Login");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userType === "") {
      setError({
        response: {
          data: "Select User Type",
        },
      });
    } else {
      e.target.disabled = true;
      setButtonText("Loading...");
      slowLoadingIndicator();
      try {
        const response = await axios.post("/auth/login/" + userType, {
          username,
          password,
        });
        await setUser({ ...response.data, userType });
        localStorage.setItem(
          "userDetails",
          JSON.stringify({ ...response.data, userType })
        );
      } catch (err) {
        setError(err);
        setButtonText("Login");
        e.target.disabled = false;
      }
    }
  };

  React.useEffect(() => {
    if ("userDetails" in localStorage) {
      setUser(JSON.parse(localStorage.getItem("userDetails")));
    }
    setUserType("");
    setMessage("");
  }, [setUserType, setMessage, setUser]);

  return (
    <>
      {!user?._id ? (
        <main className={`relative z-0 flex h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-400 to-slate-300 text-slate-950`}>
          {message && !error && (
            <header className="absolute top-0 w-full bg-violet-500/50 p-2 text-xs lg:text-base">
              {message}
            </header>
          )}
          <CircleDesign />
          <section className="z-0 mb-4 flex items-center gap-2 whitespace-nowrap text-6xl md:text-8xl lg:gap-4">
            {/* <FaUniversity /> */}
            < PiStudent/>
            <h1 className="font-spectral font-semibold  text-slate-900">
             iC
              <span className="inline-block h-10 w-10 rounded-full bg-violet-900 md:h-14 md:w-14 xl:h-14 xl:w-14"></span>
              llege
            </h1>
          </section>
          <section className="z-0 w-[65%] justify-self-center rounded-lg bg-slate-100 opacity-80 hover:opacity-100 focus:opacity-100 sm:w-[min(50%,360px)] md:w-[min(40%,360px)] xl:w-[min(23%,360px)] ">
            <form
              className="tracking-wide placeholder:text-slate-200 "
              onSubmit={(e) => handleLogin(e)}
            >
              <section className="flex flex-col items-center justify-start ">
                <div className="flex w-full text-lg ">
                  <label
                    className="radio relative flex w-1/2 cursor-pointer flex-col items-center rounded-tl-lg p-4"
                    htmlFor="teacher"
                  >
                    Teacher
                    <input
                      className="absolute opacity-0"
                      type="radio"
                      value="teacher"
                      id="teacher"
                      name="userType"
                      onClick={() => setUserType("teacher")}
                    />
                  </label>
                  <label
                    className="radio relative flex w-1/2 cursor-pointer flex-col items-center rounded-tr-lg p-4"
                    htmlFor="student"
                  >
                    Student
                    <input
                      className="absolute opacity-0"
                      type="radio"
                      value="student"
                      id="student"
                      name="userType"
                      onClick={() => setUserType("student")}
                    />
                  </label>
                </div>
                <div className="flex w-full justify-center p-1 pt-0 text-8xl">
                  {userType === "student" ? (
                    <PiStudentThin className="animate-slide rounded-full border-2 border-slate-900 p-1 font-light md:p-2" />
                  ) : userType === "teacher" ? (
                    <PiUserThin className="animate-slide rounded-full border-2 border-slate-900 p-1 font-light md:p-2" />
                  ) : (
                       <LuSchool className="animate-fadeIn rounded-full border-2 border-slate-900 p-1 font-light md:p-2" />
                  )}
                </div>
              </section>
              <section className="rounded-b-lg px-4 pb-4">
                <input
                  className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900"
                  placeholder="username"
                  id="username"
                  type="text"
                  required
                  autoComplete="off"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="mb-4 block h-10 w-full rounded-md border-[1.5px] border-solid border-slate-400 p-1 pl-2 outline-none selection:border-slate-200 focus:border-violet-900"
                  placeholder="password"
                  id="password"
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="mb-1 flex h-10 w-full items-center justify-center gap-1 rounded-md border-[1.5px] border-solid border-violet-900 bg-slate-800 p-1 font-bold tracking-wide text-slate-200 hover:bg-violet-900 focus:bg-violet-900"
                  type="submit"
                  value="Login"
                  onClick={(e) => handleLogin(e)}
                >
                  {!(buttonText === "Login") && (
                    <PiSpinnerGapBold className="animate-spin" />
                  )}
                  {buttonText}
                </button>
                {error ? (
                  <p className="m-2 overflow-hidden text-ellipsis whitespace-nowrap rounded bg-red-300/50 p-1 text-center font-medium text-red-700">
                    {error?.response?.data?.message ||
                      error?.data?.message ||
                      error?.response?.data}
                  </p>
                ) : (
                  ""
                )}
                <p className="inline text-slate-600">
                  Click to{" "}
                </p>
                <button
                  type="button"
                  className="font-semibold text-violet-600 decoration-2 hover:underline focus:underline"
                  onClick={() => navigate("./register/reg_student")}
                >
                  Register
                </button>
              </section>
            </form>
          </section>
        </main>
      ) : (
        <Navigate to="./dash" />
      )}
    </>
  );
};

export default Login;

// --------------------------------------------new code starts here----


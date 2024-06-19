import React, { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

function Login({ signUpActive, setSignUpActive, isLogin, setIsLogin }) {
  return (
    <div className="h-screen w-screen fixed top-0 left-1/2 -translate-x-1/2 flex justify-center items-center bg-transparent/70 z-50">
      <div className="w-[90%] h-full relative bg-black px-8 flex flex-col justify-center items-center pt-12 rounded-2xl overflow-hidden lg:w-2/5">
        <button
          className="absolute right-0 top-0 text-xl p-3 rounded-es-xl bg-zinc-900/80"
          onClick={() => setSignUpActive(!signUpActive)}
        >
          <RiCloseLargeLine />
        </button>
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get started with Clever Book
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>

        <form className="my-8 text-center  w-full">
          <div className="text-left mb-4 flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
            />
          </div>
          <div className="text-left mb-4 flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="••••••••"
              type="password"
              className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
            />
          </div>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="block  text-end my-3 hover:underline"
          >
            Not a user ?
          </button>

          <button onClick={() => setSignUpActive(!signUpActive)} className="">
            <div className="px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl hover:bg-gradient-to-l">
              Submit
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

function Signup({ signUpActive, setSignUpActive, isLogin, setIsLogin }) {
  return (
    <div className="h-screen w-screen fixed top-0 left-1/2 -translate-x-1/2 flex justify-center items-center bg-transparent/70 z-50">
      <div className="w-[90%] h-full relative bg-black px-8 flex flex-col justify-center items-center pt-12 rounded-2xl overflow-hidden lg:w-2/5">
        <button
          className="absolute right-0 top-0 text-xl p-3 rounded-es-xl bg-zinc-900/80"
          onClick={() => setSignUpActive(!signUpActive)}
        >
          <RiCloseLargeLine />
        </button>
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Get started with Clever Book
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>

        <form className="my-8 text-center">
          <div className="flex flex-col text-left lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2 mb-4">
            <div>
              <label htmlFor="firstname">First name</label>
              <input
                id="firstname"
                placeholder="Tyler"
                type="text"
                className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
              />
            </div>
            <div>
              <label htmlFor="lastname">Last name</label>
              <input
                id="lastname"
                placeholder="Durden"
                type="text"
                className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
              />
            </div>
          </div>
          <div className="text-left mb-8 flex flex-col">
            <label htmlFor="username">username</label>
            <input
              id="username"
              placeholder="tyler07"
              className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
            />
          </div>
          <div className="text-left mb-4 flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
            />
          </div>
          <div className="text-left mb-4 flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="••••••••"
              type="password"
              className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-2 mt-1 w-full"
            />
          </div>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="block  text-end my-3 hover:underline"
          >
            Already a user ?
          </button>

          <button onClick={() => setSignUpActive(!signUpActive)} className="">
            <div className="px-10 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl hover:bg-gradient-to-l">
              Submit
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

function SignUpLogin({ signUpActive, setSignUpActive }) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <Login
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          signUpActive={signUpActive}
          setSignUpActive={setSignUpActive}
        />
      ) : (
        <Signup
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          signUpActive={signUpActive}
          setSignUpActive={setSignUpActive}
        />
      )}
    </>
  );
}

export default SignUpLogin;

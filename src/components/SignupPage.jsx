import React, { useEffect, useState } from "react";
import photo from "../assets/images/illustration-sign-up-desktop.svg";
import iconsuccess from "../assets/images/icon-list.svg";

export default function SignupPage({ getEmail }) {
  const [email, setEmail] = useState("");

  const onchangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailSubmitHandler = (e) => {
    e.preventDefault();
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let emailValidate = regex.test(email);
    emailValidate ? getEmail(email) : alert("wrong email");
  };

  return (
    <div className=" absolute left-1/2 top-1/2  m-auto flex -translate-x-1/2  -translate-y-1/2 justify-between  rounded-[32px] bg-white p-5 text-CharcoalGrey xl:h-4/5  xl:w-3/5 ">
      <section className="ml-8 flex flex-col justify-center font-semibold tracking-tight">
        <div className="flex flex-col ">
          <h1 className="mb-2 text-[52px] font-bold text-DarkSlateGrey ">
            Stay updated!
          </h1>
          <p className="mb-6">
            Join 60,000+ product managers receiving monthly
            <br />
            updates on:
          </p>
          <ul className="mb-6">
            <li className="mb-3 flex">
              <img src={iconsuccess}></img>
              <p className="ml-4">
                Product discovery and building what matters
              </p>
            </li>
            <li className="mb-3 flex">
              <img src={iconsuccess}></img>
              <p className="ml-4"> Measuring to ensureupdates are a success</p>
            </li>
            <li className="mb-3 flex">
              <img src={iconsuccess}></img>
              <p className="ml-4">And much more!</p>
            </li>
          </ul>
        </div>
        <form
          onSubmit={emailSubmitHandler}
          className="flex flex-col  transition duration-1000 ease-in-out"
        >
          <label htmlFor="email" className="mb-1">
            Email address
          </label>
          <input
            id="email"
            type="text"
            required
            value={email}
            onChange={onchangeHandler}
            className="mb-4 h-12 w-96 rounded-md border-2 px-4 hover:outline-none"
            placeholder="email@company.com"
          ></input>
          <button
            type="submit"
            className="h-12 
            w-96 rounded-md bg-DarkSlateGrey from-pink-600 
            to-Tomato 
          text-gray-50 hover:bg-gradient-to-r "
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>

      <img src={photo} alt="desktop svg"></img>
    </div>
  );
}

import React from "react";
import iconsuccess from "../assets/images/icon-success.svg";
export default function SucceedPage({ newEmail, dismissHandler }) {
  const backHandler = () => {
    dismissHandler();
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between  xl:w-96 xl:h-96  p-8 bg-white rounded-[32px] text-CharcoalGrey">
      <img src={iconsuccess} width="50px" height="50px"></img>
      <h1 className="text-4xl font-bold"> Thanks for subscribing!</h1>
      <p className="leading-5">
        A confirmation email has been sent to
        <br />
        <span className="font-bold">{newEmail}</span>.
        <br />
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button
        type="submit"
        onClick={backHandler}
        className="bg-DarkSlateGrey 
            hover:bg-gradient-to-r from-pink-600 to-Tomato text-gray-50 
            rounded-md font-semibold
          w-80 h-12 "
      >
        Dismiss message
      </button>
    </div>
  );
}

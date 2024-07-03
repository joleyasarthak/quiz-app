import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";

export default function OTPField({ setView }) {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  function handleChange(OTP) {
    setOtp(OTP);
  }
  function handleSubmit() {
    dispatch(ShowLoading());
    if (otp !== "0000") {
      dispatch(HideLoading());
      message.error("Wrong OTP entered!");
      setOtp("");
      return;
    }
    message.success("OTP Verified Successfully");
    setView("password");
    dispatch(HideLoading());
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-primary">
        <div className="card w-400 p-3 bg-white">
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="text-2xl">Enter OTP</h1>
            </div>
            <div className="divider"></div>
            <div className="mt-2 justify-center">
              <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={4}
                inputStyle="inputStyle"
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="primary-contained-btn mt-2 w-100"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

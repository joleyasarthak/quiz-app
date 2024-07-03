import { Form, message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../../apicalls/users";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { validate, res } from "react-email-validator";
import OTPField from "./OTPField";

function ForgotPassword() {
  const [view, setView] = useState("email");
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await updatePassword({
        email: email,
        password: values.password,
      });
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        window.location.href = "/login";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const onFinish1 = async (values) => {
    dispatch(ShowLoading());
    validate(values.email);
    if (!res) {
      dispatch(HideLoading());
      message.error("Invalid Email");
      return;
    }
    setEmail(values.email);
    setView("otp");
    dispatch(HideLoading());
  };

  return (
    <>
      {view === "email" && (
        <div className="flex justify-center items-center h-screen w-screen bg-primary">
          <div className="card w-400 p-3 bg-white">
            <div className="flex flex-col">
              <div className="flex">
                <h1 className="text-2xl">Forgot Password</h1>
              </div>
              <div className="divider"></div>
              <Form layout="vertical" className="mt-2" onFinish={onFinish1}>
                <Form.Item name="email" label="Email">
                  <input type="text" />
                </Form.Item>

                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="primary-contained-btn mt-2 w-100"
                  >
                    Send OTP
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
      {view === "otp" && <OTPField setView={setView} />}
      {view === "password" && (
        <div className="flex justify-center items-center h-screen w-screen bg-primary">
          <div className="card w-400 p-3 bg-white">
            <div className="flex flex-col">
              <div className="flex">
                <h1 className="text-2xl">
                  Forgot Password <i class="ri-login-circle-line"></i>
                </h1>
              </div>
              <div className="divider"></div>
              <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                <Form.Item name="password" label="Password">
                  <input type="text" />
                </Form.Item>
                <Form.Item name="password1" label="Confirm Password">
                  <input type="text" />
                </Form.Item>
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="primary-contained-btn mt-2 w-100"
                  >
                    Change Password
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;

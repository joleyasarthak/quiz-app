import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, message, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../../components/PageTitle";
import { updateUser } from "../../../apicalls/users";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [modalForm] = Form.useForm();
  const [showEditUserSettingsModal, setShowEditUserSettingsModal] =
    useState(false);
  const navigate = useNavigate();
  const onFinish = async () => {
    try {
      dispatch(ShowLoading());
      const response = await updateUser(modalForm.getFieldsValue());
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
    navigate(0);
  };
  const openEditUserSettingsModal = () => {
    setShowEditUserSettingsModal(true);
  };
  return (
    user && (
      <>
        <PageTitle title={`Hi ${user.name}, Welcome to QuizCraft`} />
        <div className="divider"></div>
        <div>
          <div className="user-settings-container">
            <Form form={form} layout="vertical" initialValues={user}>
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>

              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>

              <Form.Item name="rollno" label="Enrollment Number">
                <Input />
              </Form.Item>

              <div className="flex justify-end">
                <button
                  className="primary-contained-btn"
                  onClick={() => setShowEditUserSettingsModal(true)}
                  type="button"
                >
                  Edit
                </button>
              </div>
            </Form>
          </div>

          <Modal
            title="Edit User Settings"
            visible={showEditUserSettingsModal}
            footer={false}
            onCancel={() => setShowEditUserSettingsModal(false)}
          >
            <Form
              form={modalForm}
              onFinish={onFinish}
              layout="vertical"
              initialValues={user}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="rollno"
                label="Enrollment Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your enrollment number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <div className="flex justify-end mt-2 gap-3">
                <button
                  className="primary-outlined-btn"
                  type="button"
                  onClick={() => setShowEditUserSettingsModal(false)}
                >
                  Cancel
                </button>
                <button className="primary-contained-btn" htmlType="submit">
                  Save
                </button>
              </div>
            </Form>
          </Modal>
        </div>
      </>
    )
  );
};

export default Profile;

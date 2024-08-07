import { Col, Input, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExams } from "../../../apicalls/exams";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import PageTitle from "../../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function Home() {
  const [exams, setExams] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const getExams = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllExams();
      if (response.success) {
        setExams(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getExams();
  }, []);

  return (
    user && (
      <div>
        <div className="flex justify-between">
          <div className="mt-2 text-2xl">
            <h1>Hi {user.name}, Welcome to QuizCraft</h1>
          </div>
          <div className="mt-1 items-end flex justify-around space-x-3">
            {/* <label htmlFor="org-id" className="">
              Org ID:
            </label> */}
            {/* <Input
              id="org-id"
              className="w-full max-w-sm "
              placeholder="Enter Organization ID"
            />
            <button className="primary-contained-btn px-2 py-1 text-sm rounded-xl">
              Filter
            </button> */}
          </div>
        </div>
        <div className="divider"></div>
        <Row gutter={[16, 16]}>
          {exams &&
            exams.map((exam) => (
              <Col span={6}>
                <div className="card-lg flex flex-col gap-1 p-2">
                  <h1 className="text-2xl">{exam?.name}</h1>

                  <h1 className="text-md">Topic : {exam.category}</h1>

                  <h1 className="text-md">Total Marks : {exam.totalMarks}</h1>
                  <h1 className="text-md">
                    Passing Marks : {exam.passingMarks}
                  </h1>
                  <h1 className="text-md">
                    Duration : {Math.floor(exam.duration / 60)} mins{" "}
                    {exam.duration % 60 !== 0 && `${exam.duration % 60} sec`}
                  </h1>

                  <h1 className="text-md text-sm">
                    StartTime:{" "}
                    {dayjs(exam.datetime[0]).format("DD MMM YYYY hh:mm a")}
                  </h1>
                  <h1 className="text-md text-sm">
                    EndTime:{" "}
                    {dayjs(exam.datetime[1]).format("DD MMM YYYY hh:mm a")}
                  </h1>
                  <button
                    className="primary-outlined-btn"
                    onClick={() => navigate(`/user/write-exam/${exam._id}`)}
                  >
                    Start Exam
                  </button>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    )
  );
}

export default Home;

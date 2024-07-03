import React, { useCallback } from "react";
import PageTitle from "../../../components/PageTitle";
import { message, Modal, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { getAllReportsByUser } from "../../../apicalls/reports";
import { useEffect } from "react";
import moment from "moment";

function UserReports() {
  const [reportsData, setReportsData] = React.useState([]);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examName",
      render: (text, record) => <>{record.exam?.name}</>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</>
      ),
    },
    {
      title: "Total Marks",
      dataIndex: "totalQuestions",
      render: (text, record) => <>{record.exam?.totalMarks}</>,
    },
    {
      title: "Passing Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.exam?.passingMarks}</>,
    },
    {
      title: "Obtained Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <>{record.result?.correctAnswers.length}</>,
    },
    {
      title: "Verdict",
      dataIndex: "verdict",
      render: (text, record) => <>{record.result?.verdict}</>,
    },
  ];
  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllReportsByUser();
      if (response.success) {
        const filteredResponse = response.data.filter((obj) => {
          return Object.values(obj).every((value) => value !== null);
        });
        setReportsData(filteredResponse);
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
    getData();
  }, []);

  useEffect(() => {
    const filteredData = reportsData.filter((item) => item !== null);
    console.log(filteredData);
  }, [reportsData]);

  return (
    user && (
      <div>
        <PageTitle title="Reports" />
        <div className="divider"></div>
        <Table columns={columns} dataSource={reportsData} />
      </div>
    )
  );
}

export default UserReports;

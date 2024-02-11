import { useEffect, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Quiz } from "../../types/types";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [quizzes, setQuizzes] = useState<Quiz[] | null>([]);
  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await fetch(`http://localhost:3001/api/quiz`);
      const data = await response.json();
      setQuizzes(data);
    };
    fetchQuizzes();
  }, []);
  const navigate = useNavigate();
  // console.log(quizzes);
  return (
    <>
      <div className="wrapper ">
        <Sidebar />
        <div className="main-panel">
          <nav className="navbar navbar-expand-lg navbar-transparent  navbar-absolute bg-primary fixed-top">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className="navbar-toggle">
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                <a className="navbar-brand" href="#pablo">
                  Dashboard Basic Settings
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
                <span className="navbar-toggler-bar navbar-kebab"></span>
              </button>
            </div>
          </nav>
          <div className="panel-header panel-header-sm"></div>
          <div className="content" style={{ minHeight: "auto" }}>
            <div className="row">
              <div className="col-md-12">
                <div className="card" style={{ minHeight: "400px" }}>
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="title">Pending Quiz Tests</h5>
                      </div>
                      <div className="col-md-4">
                        <button
                          className="btn btn-primary btn-block btn-round"
                          onClick={() => {
                            navigate(`/addQuiz`);
                          }}
                          style={{
                            marginTop: "0px",
                            width: "100px",
                            float: "right",
                          }}
                        >
                          NEW
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    {quizzes?.map((quiz) => (
                      <div className="card" style={{ background: "#ededed" }}>
                        <a
                          className="card-body"
                          href={`http://localhost:5173/quiz/${quiz._id}`}
                          style={{
                            textDecoration: "none",
                            cursor: "default",
                            color: "black",
                          }}
                        >
                          <h6>{quiz.name}</h6>
                          <div className="row">
                            <div className="col-md-8">
                              <p>Subject: {quiz.subject}</p>
                            </div>
                            <div className="col-md-4">
                              <p style={{ textAlign: "right" }}>
                                Quiz Date:
                                {quiz.startDate.split("T")[0]}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form method="POST" action="test_details.php" id="test_details">
            <input type="hidden" id="test_id" name="test_id" />
          </form>
        </div>
      </div>
    </>
  );
};

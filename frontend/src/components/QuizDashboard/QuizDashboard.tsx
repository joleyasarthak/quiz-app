import { useState, useEffect } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import axios from "axios";
import { Quiz } from "../../types/types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";

export const QuizDashboard = () => {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const params = useParams();
  const id = params.id;
  const formattedDate = quiz?.startDate.toString().split("T")[0];
  async function delete_question(question_id: string) {
    if (confirm("Are you sure you want to delete this question?") === false)
      return;
    // console.log(question_id);
    const response = await fetch(
      `http://localhost:3001/api/question/${id}/${question_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      navigate(0);
    }
  }
  function delete_quiz() {}
  function completed() {}
  // console.log(`http://localhost:5173/addQuestion/${id}`)
  // const id = "65b9042eb2e3c17296a2a499";
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/quiz/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response.data);
        setQuiz(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main-panel">
          <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute bg-primary fixed-top">
            <div className="container-fluid">
              <div className="navbar-wrapper">
                <div className="navbar-toggle">
                  <button type="button" className="navbar-toggler">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </button>
                </div>
                Add New Question
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
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="title">General Settings</h5>
                  </div>
                  <div className="card-body">
                    <form
                      method="POST"
                      action="?php echo htmlspecialchars($_SERVER[PHP_SELF"
                    >
                      <input type="hidden" name="general_settings_update" />
                      <input
                        type="hidden"
                        name="test_id"
                        value="<?= $test_id;?>"
                      />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Test name (title)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="test_name"
                              placeholder="Test name"
                              value={quiz?.name}
                            />
                          </div>
                          <div className="form-group">
                            <label>Subject name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject_name"
                              placeholder="Subject name"
                            />
                          </div>
                          <div className="form-group">
                            <label>Test date</label>
                            <input
                              type="date"
                              className="form-control"
                              name="test_date"
                              placeholder="Test Date"
                              value={formattedDate}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Total Questions count</label>
                            <input
                              type="number"
                              className="form-control"
                              name="total_questions"
                              placeholder="Total Questions count"
                              value={quiz?.questions.length || 0}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row center-element">
                        <div className="col-md-8">
                          <div className="form-group">
                            <button className="btn btn-primary btn-block btn-round">
                              UPDATE
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="title">Other Settings</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <form
                        id="form-completed"
                        method="POST"
                        action="<?php echo htmlspecialchars($_SERVER["
                      >
                        <input type="hidden" name="completed" />
                        <input
                          type="hidden"
                          name="test_id"
                          value="<?= $test_id;?>"
                        />
                      </form>

                      <div className="col-md-6">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-block"
                            // onClick={completed()}
                          >
                            MAKE AS COMPLETED
                          </button>
                        </div>
                      </div>

                      <form
                        id="form-deleted"
                        method="POST"
                        action="<?php echo htmlspecialchars($_SERVER["
                      >
                        <input type="hidden" name="deleted" />
                        <input
                          type="hidden"
                          name="test_id"
                          value="<?= $test_id;?>"
                        />
                      </form>

                      <div className="col-md-6">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-block"
                            // onClick={delete_quiz()}
                          >
                            DELETE TEST
                          </button>
                        </div>
                      </div>
                    </div>

                    <form
                      id="form-student-data"
                      method="POST"
                      action="student_test_credentials.php"
                    >
                      <input
                        type="hidden"
                        name="test_id"
                        value="<?= $test_id;?>"
                      />
                    </form>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-block"
                            // onClick="student_data()"
                          >
                            GET STUDENT DATA
                          </button>
                        </div>
                      </div>
                    </div>

                    <form
                      method="POST"
                      action="<?php echo htmlspecialchars($_SERVER["
                    >
                      <input type="hidden" name="other_settings" />
                      <input
                        type="hidden"
                        name="test_id"
                        value="<?= $test_id;?>"
                      />
                      <div className="form-group" style={{ marginTop: "10px" }}>
                        <label>Add guest student to test</label>
                        <input
                          type="text"
                          className="form-control"
                          name="student_roll_no"
                          placeholder="Student Roll number"
                        />
                      </div>

                      <div className="row center-element">
                        <div className="col-md-8">
                          <div className="form-group">
                            <button className="btn btn-primary btn-block">
                              ADD
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content" style={{ minHeight: "auto" }}>
            <div className="row">
              <div className="col-md-12">
                <div className="card" style={{ minHeight: "400px" }}>
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-4">
                        <h5 className="title">Test Questions</h5>
                      </div>
                      <form
                        id="form-add-questions"
                        method="POST"
                        action="add_question.php"
                      >
                        <input
                          type="hidden"
                          name="test_id"
                          value="<?= $test_id;?>"
                        />
                      </form>
                      <div className="col-md-4">
                        <button
                          className="btn btn-primary btn-block btn-round"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          style={{
                            marginTop: "0px",
                            width: "200px",
                            float: "right",
                          }}
                        >
                          UPLOAD
                        </button>
                      </div>

                      <div className="col-md-4">
                        <Link to={`/addQuestion/${id}`}>
                          <button
                            className="btn btn-primary btn-block btn-round"
                            //   onClick="redirect_to_add_question()"
                            style={{
                              marginTop: "0px",
                              width: "200px",
                              float: "right",
                            }}
                          >
                            ADD NEW QUESTION
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <table
                      id="example"
                      className="table table-striped table-bordered"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th>SERIAL NO</th>
                          <th>Question title</th>
                          <th>Option (A)</th>
                          <th>Option (B)</th>
                          <th>Option (C)</th>
                          <th>Option (D)</th>
                          <th>Correct Option</th>
                          <th>Score</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr id="<?= $row1[">
                            <input
                              type="hidden"
                              id="question_id"
                              value="<?= $row1["
                            /> */}

                        {quiz?.questions.map((question, i) => (
                          <tr key={question._id}>
                            <input
                              type="hidden"
                              id="question_id"
                              value={question._id}
                            />
                            <td>{i + 1}</td>
                            <td>{question.content}</td>
                            <td>{question.optionA}</td>
                            <td>{question.optionB}</td>
                            <td>{question.optionC}</td>
                            <td>{question.optionD}</td>
                            <td>{question.correctAnswer}</td>
                            <td>{question.score}</td>
                            <td>
                              <Box sx={{ display: "flex", gap: "0.75rem" }}>
                                {/* <button
                                className="btn btn-primary btn-block btn-round"
                                onClick={() => {
                                  delete_question(question._id);
                                }}
                              >
                                DELETE
                              </button> */}
                                <IconButton onClick={() => {}}>
                                  <EditIcon />
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    delete_question(question._id);
                                  }}
                                  color="error"
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Box>
                            </td>
                          </tr>
                        ))}
                        {/* </tbody> */}
                        {/* <td><?= $i;?></td>
                                <td><?= $row1["title"];?></td>
                                <td><?= $row1["optionA"];?></td>
                                <td><?= $row1["optionB"];?></td>
                                <td><?= $row1["optionC"];?></td>
                                <td><?= $row1["optionD"];?></td>
                                <td><?= $row1["correctAns"];?></td>
                                <td><?= $row1["score"];?></td> */}
                        {/* </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <form
                id="form-file-upload"
                name="form-file-upload"
                method="POST"
                action="file_upload.php"
                encType="multipart/form-data"
              >
                <input type="hidden" name="file_upload" />
                <input
                  type="hidden"
                  name="test_id"
                  id="test_id"
                  value="<?= $test_id; ?>"
                />
                <input type="hidden" name="tmp_name" id="tmp_name" />
                <input type="hidden" name="type" id="type" />
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Select spreadsheet to import
                    </h5>
                  </div>
                  <div className="modal-body">
                    <p>
                      <b>
                        The spreadsheet column should contain (without header):
                      </b>{" "}
                      <br /> Question, Option A, Option B, Option C, Option D,
                      Correct Option, Score.
                    </p>
                    <p>
                      <b>Accepted file formats are:</b> .xls, .xlsx and .ods
                    </p>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept=".xls,.xlsx,.ods"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      //   onClick={"file_upload_submit()"}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizDashboard;

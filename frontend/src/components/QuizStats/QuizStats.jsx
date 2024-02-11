import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";

export const QuizStats = () => {
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
                  Test Statistics
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
                        <h5 className="title">?= $name; ?</h5>
                      </div>
                      <div className="col-md-4">
                        <button
                          className="btn btn-primary btn-block btn-round"
                          onclick="submit(<?= $test_id;?>,'<?php echo $name;?>')"
                          style={{
                            marginTop: "0px",
                            width: "200px",
                            float: "right",
                          }}
                        >
                          Questions Stats
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form
                      method="POST"
                      action="<?php echo htmlspecialchars($_SERVER["
                    >
                      <input type="hidden" name="general_settings" />
                      <table
                        id="example"
                        className="table table-striped table-bordered"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr>
                            <th>SERIAL NO</th>
                            <th>ROLL NO</th>
                            <th>Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>?= $i; ?</td>
                            <td>?= $row1["rollno"]; ?</td>
                            <td>?= $row["score"]; ?</td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            method="POST"
            action="test_question_stats.php"
            id="test_details"
          >
            <input type="hidden" id="test_id" name="test_id" />
            <input type="hidden" id="test_name" name="test_name" />
          </form>
        </div>
      </div>
    </>
  );
};

import { Sidebar } from "../Sidebar/Sidebar";
import { useState } from "react";
import { Quiz } from "../../types/types";

export const AddNewQuiz = () => {
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
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h5 className="title">Create New Test</h5>
                  </div>
                  <div className="card-body">
                    <form
                      method="POST"
                      action="<?php echo htmlspecialchars($_SERVER["
                    >
                      <input type="hidden" name="new_test" />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Test name (title)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="test_name"
                              value={quiz?.name}
                              placeholder="Test name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Subject name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject_name"
                              value={quiz?.subject}
                              placeholder="Subject name"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Test date</label>
                            <input
                              type="date"
                              className="form-control"
                              name="test_date"
                              placeholder="Test Date"
                              value={quiz?.startDate}
                              // onChange={(e) =>
                              //   setQuiz({
                              //     ...quiz,
                              //     startDate: e.target.value.split("T")[0],
                              //   })
                              // }
                              required
                            />
                          </div>
                          <div className="form-group">
                            <div className="row">
                              <div className="col-md-6">
                                <select
                                  id="options"
                                  name="test_status"
                                  className="btn-round"
                                  required
                                  style={{ width: "100%" }}
                                >
                                  <option
                                    selected={true}
                                    value=""
                                    disabled={true}
                                  >
                                    Select test status
                                  </option>

                                  <option value="<?= $row[">
                                    = $row["name"];?
                                  </option>
                                </select>
                              </div>
                              <div className="col-md-6">
                                <select
                                  id="options"
                                  name="test_class"
                                  className="btn-round"
                                  required
                                  style={{ width: "100%" }}
                                >
                                  <option
                                    selected={true}
                                    value=""
                                    disabled={true}
                                  >
                                    Select className for test
                                  </option>
                                  <option value="<?= $row["></option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row center-element">
                        <div className="col-md-8">
                          <div className="form-group">
                            <button className="btn btn-primary btn-block btn-round">
                              CREATE TEST
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

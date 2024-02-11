import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";

const AddNewClass = () => {
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
                  Add Class / Student
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
          <div className="content" style={{ minHeight: "auto;" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="title">Add New class Data</h5>
                  </div>
                  <div className="card-body">
                    <input type="hidden" name="general_settings" />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>class name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="class_name"
                            name="site_name"
                            placeholder="class name"
                          />
                          <span
                            id="class_name_error"
                            className="error text-danger"
                          ></span>
                        </div>
                        <div className="form-group">
                          <label>Starting Roll number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="starting_roll_number"
                            name="site_name"
                            placeholder="Starting roll number"
                          />
                          <span
                            id="starting_roll_error"
                            className="error text-danger"
                          ></span>
                        </div>
                        <div className="form-group">
                          <label>Ending Roll number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="ending_roll_number"
                            name="site_name"
                            placeholder="Ending roll number"
                          />
                          <span
                            id="ending_roll_error"
                            className="error text-danger"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="row center-element">
                      <div className="col-md-8">
                        <div className="form-group">
                          <br />
                          <button
                            className="btn btn-primary btn-block btn-round"
                            onClick="createNewClass()"
                          >
                            CREATE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h5 className="title">Add Student</h5>
                  </div>
                  <div className="card-body">
                    <input type="hidden" name="general_settings" />
                    <div className="row">
                      <div className="col-md-12">
                        <select
                          id="options"
                          name="class_option"
                          className="btn-round"
                          required
                          style={{ width: "100%;" }}
                        >
                          <option selected="true" value="" disabled="disabled">
                            Select Class for test
                          </option>
                        </select>
                        <span
                          id="extra_roll_class_error"
                          className="error text-danger"
                        ></span>

                        <div
                          className="form-group"
                          style={{ marginTop: "10px" }}
                        >
                          <label>Student Roll number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="extra_roll_number"
                            name="site_name"
                            placeholder="Student Roll number"
                          />
                          <span
                            id="extra_roll_error"
                            className="error text-danger"
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div className="row center-element">
                      <div className="col-md-8">
                        <div className="form-group">
                          <br />
                          <button
                            className="btn btn-primary btn-block"
                            onClick="addStudent()"
                          >
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewClass;

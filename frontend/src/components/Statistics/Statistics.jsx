import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
export const Statistics = () => {
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
                  Statistics
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
                        <h5 className="title">Completed Quiz Tests</h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card" style={{ background: "#ededed" }}>
                      <div
                        className="card-body"
                        onclick="submit(<?= $row['id'];?>,'<?php echo $row['name'];?>')"
                      >
                        <h6>?= $row["name"];?</h6>
                        <div className="row">
                          <div className="col-md-8">
                            <p>Subject - ?= $row["subject"];?</p>
                          </div>
                          <div className="col-md-4">
                            <p style={{ textAlign: "right" }}>
                              Date - ?= $row["date"];?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div id="no-data">
                      <center>
                        <img
                          src="../assets/img/no-data.svg"
                          height="400"
                          width="400"
                        />
                        <center>
                          <h5>No Data</h5>
                        </center>
                      </center>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form method="POST" action="test_stats.php" id="test_details">
            <input type="hidden" id="test_id" name="test_id" />
            <input type="hidden" id="test_name" name="test_name" />
          </form>
        </div>
      </div>
    </>
  );
};

import { useParams } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddQuestion = () => {
  const params = useParams();
  const id = params.id;
  const [content, setContent] = useState<string | null>(null);
  const [optionA, setOptionA] = useState<string | null>(null);
  const [optionB, setOptionB] = useState<string | null>(null);
  const [optionC, setOptionC] = useState<string | null>(null);
  const [optionD, setOptionD] = useState<string | null>(null);
  const [correctAnswer, setcorrectAnswer] = useState<string | null>(null);
  const [score, setScoreInput] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !content ||
      !optionA ||
      !optionB ||
      !optionC ||
      !optionD ||
      !correctAnswer ||
      !score
    ) {
      return;
    }
    const question = {
      content,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
      score,
    };
    console.log(JSON.stringify(question));
    try {
      const response = await fetch(
        `http://localhost:3001/api/quiz/${id}/addQuestion`,
        {
          method: "POST",
          body: JSON.stringify(question),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        navigate(`/quiz/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="wrapper ">
        <Sidebar />
        <div className="main-panel">
          <form id="form-completed" method="POST" action="test_details.php">
            <input type="hidden" name="test_id" value="<?= $test_id;?>" />
          </form>
          {/* <script>
        function completed() {
          document.getElementById("form-completed").submit();
        }
    </script> */}
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
                  Add New Question
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
                    <h5 className="title">Add New Question</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <input type="hidden" name="add_question" />
                      <input
                        type="hidden"
                        name="test_id"
                        value="<?= $test_id;?>"
                      />
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Question content</label>
                            <input
                              type="text"
                              className="form-control"
                              name="title"
                              placeholder="Question content"
                              onChange={(e) => setContent(e.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Option (A)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="op_a"
                              placeholder="Option (A)"
                              onChange={(e) => setOptionA(e.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Option (B)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="op_b"
                              placeholder="Option (B)"
                              onChange={(e) => setOptionB(e.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Option (C)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="op_c"
                              onChange={(e) => setOptionC(e.target.value)}
                              placeholder="Option (C)"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Option (D)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="op_d"
                              onChange={(e) => setOptionD(e.target.value)}
                              placeholder="Option (D)"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Correct Option (A/B/C/D)</label>
                            <input
                              type="text"
                              className="form-control"
                              name="op_correct"
                              onChange={(e) => setcorrectAnswer(e.target.value)}
                              placeholder="Correct Option"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Score</label>
                            <input
                              type="number"
                              className="form-control"
                              name="score"
                              onChange={(e) => setScoreInput(e.target.value)}
                              placeholder="Score"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row center-element">
                        <div className="col-md-8">
                          <div className="form-group">
                            <button className="btn btn-primary btn-block btn-round">
                              ADD QUESTION
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

{
  /* <link href="../assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="../assets/css/now-ui-dashboard.css?v=1.1.0" rel="stylesheet" />
  <link href="../assets/css/main.css" rel="stylesheet" /> */
}
import "../phpassets/css/bootstrap.min.css";
import "../phpassets/css/now-ui-dashboard.css";
import "../phpassets/css/main.css";
export const Sidebar = () => {
  return (
    <>
      <div className="sidebar" data-color="orange">
        <div className="logo" style={{ padding: "unset" }}>
          <a
            href="dashboard.php"
            className="simple-text logo-mini"
            style={{ width: "100px", paddingLeft: "10px" }}
          >
            {/* <img src="../assets/img/logo.png" /> */}
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="active">
              <a href="./dashboard.php">
                <i className="now-ui-icons shopping_shop"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="./add_data.php">
                <i className="now-ui-icons business_badge"></i>
                <p>Add Class / Student</p>
              </a>
            </li>
            <li>
              <a href="./statistics.php">
                <i className="now-ui-icons business_chart-bar-32"></i>
                <p>Statistics</p>
              </a>
            </li>
            <li>
              <a href="./view_data.php">
                <i className="now-ui-icons design_bullet-list-67"></i>
                <p>View Data</p>
              </a>
            </li>
            <li>
              <a href="./logout.php">
                <i className="now-ui-icons media-1_button-power"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

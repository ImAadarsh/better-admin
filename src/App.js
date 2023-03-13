import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ManageDoctors from "./components/ManageDoctors";
import ManageUsers from "./components/ManageUsers";
import UserAnalytics from "./components/UserAnalytics";
import Payments from "./components/Payments";

export default function App() {
  return (
    <div className="App">
      <p style={{fontStyle: "italic"}}>Admin Panel</p>
      <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab
          eventKey="doctors"
          title="Manage Doctors"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <ManageDoctors />
        </Tab>
        <Tab
          eventKey="users"
          title="Manage Users"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <ManageUsers />
        </Tab>
        <Tab
          eventKey="analytics"
          title="User Analytics"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <UserAnalytics />
        </Tab>
        <Tab
          eventKey="payments"
          title="Payments"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <Payments />
        </Tab>
      </Tabs>
    </div>
  );
}

import React from "react";
import User from "./User";
import Dropdown from "./Dropdown";
import Input from "./Input";
import Table from "./Table";
// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="main">
        <User>
        </User><br />
        <h1>Cryptocurrency Threshold Evaluator (past 24hrs)</h1>
        <Input>
        </Input>
        <Dropdown>
        </Dropdown>
        <Table>
        </Table>
      </div>
    );
  }
}

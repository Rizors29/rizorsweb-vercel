import React from "react"
import Button from "../components/Button"
import Hello from "../components/Hello"
import Views from "../components/Views";

class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[100svh]">
        <Hello />
        <Button />
        <Views id="home" />
      </div>
    );
  }
}

export default Home;
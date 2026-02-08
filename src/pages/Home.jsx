import React from "react"
import Button from "../components/Button"
import Hello from "../components/Hello"

class Home extends React.Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Hello />
        <Button />
      </div>
    );
  }
}

export default Home;
import Button from "../components/Button"
import Hello from "../components/Hello"
import Views from "../components/Views";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100svh]">
      <Hello />
      <Button />
      <Views id="home" />
    </div>
  );
}

export default Home;
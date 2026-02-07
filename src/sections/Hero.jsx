import Button from "../components/Button"
import Hello from "../components/Hello"

function Hero() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <Hello />
      <Button />
    </div>
  )
}

export default Hero
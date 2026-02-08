import React from "react"

class About extends React.Component {
  render() {
    return (
      <div className="
        min-h-[100svh]
        text-center
        px-5 md:px-40
        bg-black/40 md:bg-transparent
        backdrop-blur-sm md:backdrop-blur-none
        text-white
        ms-0 md:ms-120
        flex flex-col justify-center
        animate-slide-up">
        <h1 className="font-bold text-3xl pb-4">
          About Me
        </h1>
        <p>
          Hello, my name is Mohammad Riza Al Fahrie. I'm 22 years old right now.
          In art, I'm passionate about drawing since 2015 and designing since 2018.
          In tech, I'm interested in web and game development since 2022.
          I've been learning them all, so please keep support me, Thank You! 😁
        </p>
      </div>
    );
  }
}

export default About;
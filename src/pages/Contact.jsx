import React from "react"

class Contact extends React.Component {
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
          <h1 className="font-bold text-3xl underline underline-offset-4 decoration-blue-500 pb-2">
            Contact Me
          </h1>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arzialpazri@gmail.com" target="_blank" className="">
            ✉︎ arzialpazri@gmail.com
          </a>
        </div>
    );
  }
}

export default Contact;
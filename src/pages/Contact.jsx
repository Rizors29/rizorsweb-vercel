import { useState } from "react";
import { MdEmail } from "react-icons/md";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=arzialpazri@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="min-h-[100svh] text-center px-5 md:px-40 bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none text-white ms-0 md:ms-120 flex flex-col justify-center animate-slide-up">
      <h1 className="font-bold text-3xl underline underline-offset-4 decoration-blue-500 pb-2">
        Contact Me
      </h1>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=arzialpazri@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition justify-center flex items-center gap-2 my-2"
      >
        <MdEmail className="text-xl" />
        arzialpazri@gmail.com
      </a>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-4 w-full max-w-md mx-auto text-left"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm text-white">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-white">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-white">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Write your message..."
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 rounded-full bg-white/80 text-black font-bold hover:bg-blue-400 transition duration-300 cursor-pointer"
        >
          Send
        </button>

        {sent && (
          <p className="text-center text-blue-400 text-sm">
            Opening Gmail... thanks for reaching out!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
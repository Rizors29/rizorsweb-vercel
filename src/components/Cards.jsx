import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "Website CTO",
    description: "During my internship, I built this website for one of the units at PT Finnet Indonesia.",
    date: "November 2025",
    image: "/img/WebsiteCover.png",
  },
  {
    id: 2,
    title: "Kucing Oren Lapar",
    description: "My first 2D Unity platformer game that I published. This game is about a hungry cat.",
    date: "January 2023",
    link: "https://yellorddev.itch.io/kucing-oren-lapar",
    image: "/img/Game4.jpeg",
  },
  {
    id: 3,
    title: "Zombie Shooter",
    description: "My first 2D Greenfoot survival game that I published. Shoot the zombies to win.",
    date: "March 2023",
    link: "https://www.greenfoot.org/scenarios/30953",
    image: "/img/Game2.jpeg",
  },
  {
    id: 4,
    title: "Save the Car",
    description: "I made this game on Castle platform on my phone. Save the red car to the finish line.",
    date: "Jan 2022",
    link: "https://castle.xyz/d/J-W5rWoVz",
    image: "/img/Game3.jpeg",
  },
  {
    id: 5,
    title: "Kang Basket dan Emak",
    description: "These two characters is inspired by the game Warnet Life by Akhir Pekan Studio.",
    date: "March 2022",
    image: "/img/Fanart1.jpeg",
  },
  {
    id: 6,
    title: "Mba Penyihir",
    description: "This character also is inspired by the game Warnet Life by Akhir Pekan Studio.",
    date: "April 2022",
    image: "/img/Fanart4.jpeg",
  },
];

function Cards() {
  return (
    <section className="min-h-screen px-6 py-30 text-white bg-black/40">
      <h2 className="text-3xl font-bold text-center mb-12 animate-slide-up">
        My Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            project={{ ...project }}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Cards;
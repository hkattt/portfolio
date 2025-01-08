import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

import styles from "./page.module.scss";

export default function Main() {
  return (
    <>
      <main className={styles.portfolio}>
        <Hero></Hero>
        <Project
          image={{
            src: "/interrogation.png",
            alt: "Interrogation background art",
            width: 0,
            height: 0
          }}
          title="Interrogation"
          description="Created a murder-mystery game called Interrogation for GitHub Game Off 2024."
          links={[
            {
              title: "Play Online",
              href: "https://itch.io/jam/game-off-2024/rate/3148097"
            },
            {
              title: "View GitHub",
              href: "https://github.com/hkattt/interrogation"
            }
          ]}
          technologies={[
            "Godot Engine"
          ]}
        ></Project>
        <Skills
          skills={[
            {
              image: {
                src: "/react.svg",
                alt: "React Icon",
                width: 55,
                height: 55
              },
              name: "React"
            },
            {
              image: {
                src: "/dotnet.svg",
                alt: ".NET Icon",
                width: 55,
                height: 55
              },
              name: ".NET"
            },
            {
              image: {
                src: "/html5.svg",
                alt: "HTML5 Icon",
                width: 55,
                height: 55
              },
              name: "HTML"
            },
            {
              image: {
                src: "/css3.svg",
                alt: "CSS3 Icon",
                width: 55,
                height: 55
              },
              name: "CSS"
            },
            {
              image: {
                src: "/c.svg",
                alt: "C Icon",
                width: 55,
                height: 55
              },
              name: "C"
            },
            {
              image: {
                src: "/cplusplus.svg",
                alt: "C++ Icon",
                width: 55,
                height: 55
              },
              name: "C++"
            },
            {
              image: {
                src: "/java.svg",
                alt: "Java Icon",
                width: 55,
                height: 55
              },
              name: "Java"
            },
            {
              image: {
                src: "/python.svg",
                alt: "Python Icon",
                width: 55,
                height: 55
              },
              name: "Python"
            },
            {
              image: {
                src: "/rust.svg",
                alt: "Rust Icon",
                width: 55,
                height: 55
              },
              name: "Rust"
            },
            {
              image: {
                src: "/git.svg",
                alt: "Git Icon",
                width: 55,
                height: 55
              },
              name: "Git"
            },
            {
              image: {
                src: "/Linux.svg",
                alt: "Linux Icon",
                width: 55,
                height: 55
              },
              name: "Linux"
            },
            {
              image: {
                src: "/godotengine.svg",
                alt: "Godot Engine Icon",
                width: 55,
                height: 55
              },
              name: "Godot"
            }
          ]}
        ></Skills>
        <Experience
          title="Digital Cadet"
          date="Oct 2024 - Present"
          organisation= {{
            title: "GovTEAMS",
            href: "https://www.govteams.gov.au/"
          }}
          description="I am currently working as a junior software developer contributing to the React frontend and .NET backend."
          technologies={[
            ".NET", "React", "Azure", "Figma"
          ]}
        ></Experience>
      </main> 
      <Footer></Footer>
    </>
  )
}

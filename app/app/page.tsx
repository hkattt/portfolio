import PocketBase from "pocketbase";

import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";

import styles from "./page.module.scss";

const pb = new PocketBase("http://127.0.0.1:8090");

export default async function Main() {
  let projects = [];
  let experiences = [];

  try {
    const [projectsRecord, experiencesRecord] = await Promise.all([
      pb.collection("projects").getFullList(),
      pb.collection("experiences").getFullList()
    ]);
    
    for (let index in projectsRecord) {
      let projectRecord = projectsRecord[index];
      projects.push(
        {
          image: {
            src: `${pb.baseURL}/api/files/projects/${projectRecord["id"]}/${projectRecord["image"]}`,
            alt: projectRecord["alt"],
            width: 0,
            height: 0
          },
          title: projectRecord["title"],
          description: projectRecord["description"],
          links: projectRecord["links"],
          technologies: projectRecord["technologies"]
        }
      );
    }

    for (let index in experiencesRecord) {
      let experienceRecord = experiencesRecord[index];
      experiences.push(
        {
          title: experienceRecord["title"],
          date: experienceRecord["date"],
          organisation: experienceRecord["organisation"],
          description: experienceRecord["description"],
          technologies: experienceRecord["technologies"]
        }
      );
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  } 

  return (
    <>
      <main className={styles.portfolio}>
        <Hero></Hero>
        <Projects projects={projects}></Projects>
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
                src: "/linux.svg",
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
        <Experiences experiences={experiences}></Experiences>
      </main> 
      <Footer></Footer>
    </>
  )
}

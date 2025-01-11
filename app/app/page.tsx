import pb from "./utils/pocketbaseClient";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";

import styles from "./page.module.scss";

import { ExperienceProps, ProjectProps, SkillProps } from "./types/props";

const skillNames = [
  { name: "React",  icon: "react.svg" },
  { name: ".NET",   icon: "dotnet.svg" },
  { name: "HTML",   icon: "html5.svg" },
  { name: "CSS",    icon: "css3.svg" },
  { name: "C",      icon: "c.svg" },
  { name: "C++",    icon: "cplusplus.svg" },
  { name: "Java",   icon: "java.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "Rust",   icon: "rust.svg" },
  { name: "Git",    icon: "git.svg" },
  { name: "Linux",  icon: "linux.svg" },
  { name: "Godot",  icon: "godotengine.svg" },
];

const skills: SkillProps[] = skillNames.map(({name, icon}) => (
  {
    image: {
      src: `/${icon}`,
      alt: `${name} Icon`,
      width: 0, 
      height: 0
    },
    name: name
  }
));

export default async function Main() {
  let projects: ProjectProps[] = [];
  let experiences: ExperienceProps[] = [];

  try {
    const [projectsRecord, experiencesRecord] = await Promise.all([
      pb.collection("projects").getFullList(),
      pb.collection("experiences").getFullList()
    ]);

    projects = projectsRecord.map((projectRecord) => (
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
    ));
    
    experiences = experiencesRecord.map((experienceRecord) => (
      {
        title: experienceRecord["title"],
        date: experienceRecord["date"],
        organisation: experienceRecord["organisation"],
        description: experienceRecord["description"],
        technologies: experienceRecord["technologies"]
      }
    ));
  } catch (err) {
    console.error("Error fetching data:", err);
  } 

  return (
    <>
      <Header/>
      <main className={styles.portfolio}>
        <Hero/>
        <Projects projects={projects}/>
        <Skills skills={skills}/>
        <Experiences experiences={experiences}/>
      </main> 
      <Footer/>
    </>
  )
}

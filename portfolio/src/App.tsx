import './App.css'

import Header from "./Header/Header.tsx"
import Projects from './Projects/Projects.tsx'
import Skills from "./Skills/Skills.tsx"

function App() {
  // TODO: What about a <footer> tag?
  return (
    <>
      <Header/>
      <main id="content">
        <Skills/>
        <Projects/>
      </main>
    </>
  )
}

export default App

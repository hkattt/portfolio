import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from "./Header/Header.tsx"
import Content from "./Content/Content.tsx"
import Footer from "./Footer/Footer.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Content/>
    <Footer/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import HomePage from "./pages/HomePage.jsx";
import ContactPage from './pages/ContactPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import Showreel from './pages/Showreel.jsx';
import AboutPage from './pages/AboutPage.jsx';
import SurgicalPage from './pages/SurgicalPage.jsx';
import ArPage from './pages/ArPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ProcessPage from './pages/ProcessPage.jsx';
import MOA from './components/Process/MOA.jsx';
import ARVR from './components/Process/ARVR.jsx';
import SurAni from './components/Process/SurAni.jsx';
import MouthCare from './components/Process/MouthCare.jsx';
import Gallery from './components/Gallery/Gallery.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route index={true} path='/work' element={<WorkPage />} />
      <Route index={true} path='/contact' element={<ContactPage />} />
      <Route index={true} path='/showreel' element={<Showreel />} />
      <Route index={true} path='/about' element={<AboutPage />} />
      <Route index={true} path='/surgical' element={<SurgicalPage />} />
      <Route index={true} path='/augmented' element={<ArPage />} />
      <Route index={true} path='/services' element={<WorkPage />} />
      <Route index={true} path='/process' element={<ProcessPage />} />
      <Route index={true} path='/team' element={<TeamPage />} />
      <Route index={true} path='/moa' element={<MOA />} />
      <Route index={true} path='/arvr' element={<ARVR />} />
      <Route index={true} path='/mouth-care' element={<MouthCare />} />
      <Route index={true} path='/sur-ani' element={<SurAni />} />
      <Route index={true} path='/gallery' element={<Gallery />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

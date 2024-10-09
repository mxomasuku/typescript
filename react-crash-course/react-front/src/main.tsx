import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/routes/App.tsx'
import './index.css' 
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from './Components/layouts/RootLayout.tsx'
import About from './Components/routes/About.tsx'
import Login from "./Components/routes/Login.tsx"
import OurWork from './Components/routes/OurWork.tsx'
import StudentOffers from './Components/routes/StudentOffers.tsx'
import { TestContextProvider } from './Components/context/TestContext.tsx'


const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, children: [
    {path: '/', element: <App/>},
    {path: '/about', element: <About/>},
    {path: "/login", element: <Login/>},
    {path: "/our-work", element: <OurWork/>},
    {path: "/student-offers", element: <StudentOffers/>}
  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestContextProvider>
    <RouterProvider router={router}/>
    </TestContextProvider>
   
 
  </StrictMode>,
)

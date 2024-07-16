import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import RootLayout from './components/RootLayout'

const router = createBrowserRouter([
  { path: '/',
   element: <RootLayout />,
   children: [
    { index: true, element: <Home />},
    { path: 'about', element: <About />},
   ]
  },
   
 
])

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
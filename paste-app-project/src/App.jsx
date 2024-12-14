import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import View from './components/View'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
const router = createBrowserRouter(
[
  {
    path:"/",
    element:
    <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: "/pastes",
    element: 
    <div>
      <Navbar />
      <Paste />
    </div>
  },
  {
    path:"/pastes/:id",
    element:
    <div>
      <Navbar />
      <View />
    </div>
  },
]
)
function App() {

  return (
    <div id='containerapp'>
      <RouterProvider router={router}>
        <div>
        </div>
      </RouterProvider>
    </div>
  )
}

export default App

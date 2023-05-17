import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/layouts/Home'
import Productos from './components/layouts/Productos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <Productos />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

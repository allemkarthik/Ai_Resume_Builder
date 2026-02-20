import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import CoverLetter from '../pages/CoverLetter'

const Router = () => {
 const appRouter=createHashRouter(
    [
      {
        path:"/",
        element: <Home/>
      },{
        path:"/coverletter",
        element: <CoverLetter/>
      }
    ]
  )
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Router

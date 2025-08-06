import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements ,
  Route
} from "react-router-dom";
import Landing from "./Components/Landing";
import SignIn from "./Forms/SignIn";
import SignUp from "./Forms/SignUp";
import Home from "./Components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route index='/' element={<Landing />} />
        <Route path='/Landing' element={<Landing />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Home' element={<Home />} />
      </Route>
    </>
  )
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

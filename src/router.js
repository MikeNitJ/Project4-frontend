import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { indexLoader, showLoader, showUserLoader, userLoader } from "./loaders"
import Index from "./pages/Index"
import Show from "./pages/Show"

import { createAction, updateAction, deleteAction, signupAction } from "./actions";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import User from "./pages/User"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>

            <Route path="/" element={<Home/>}/>
            <Route path="/scoreboard" element={<Index/>} loader={indexLoader}/>
            <Route path="/scoreboard/:id" element={<Show/>} loader={showLoader}/>

            <Route path="/users" element={<User/>} loader={userLoader}/>

            <Route path="login" element={<Login/>} action={createAction}/>
            <Route path="signup" element={<Signup/>} action={signupAction}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))

export default router
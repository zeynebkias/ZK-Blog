import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";

import { Context } from "./context/Context";



function App() {
  const { user } = useContext(Context);
  return (
    <div>
     <TopBar />
    <Routes>

        {/* <Route path="#" element={<TopBar />}/>
        <Route exact path="/" element={<Homepage />} /> 
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/post/:id" element={<Single/>} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}/> */}

<Route path="#" element={<TopBar />}/>
        <Route exact path="/" element={<Homepage />} /> 
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/post/:id" element={<Single/>} />
        <Route path="/write" element={user ? <Write /> : <Login />}/>
        <Route path="/settings" element={user ? <Settings /> : <Login />}/>


    </Routes>
    </div>
  );
}

export default App;

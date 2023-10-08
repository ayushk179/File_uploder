
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Privateroute from "./components/Privateroute";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route  path="/sign-in" element={[<Login/>]} />
          <Route  path="/sign-up" element={[<Signup/>]} />
           <Route path="/" element={<Privateroute />}>
                 <Route path="/" element={[<Home/>]}/>
                 <Route path="/add" element={[<AddUser/>]} />
           </Route>
          <Route path="*" element={<PageNotFound />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;

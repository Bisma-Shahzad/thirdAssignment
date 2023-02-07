import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Home from "../screens/home";
import { Button, Typography } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';



function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav className='shadow d-flex'>
          <Typography variant='h4' style={{padding: 6}}>3rd Assignment</Typography>
          <Button variant="contained" style={{ margin: 8, position: 'absolute', right: 10 }}>
            <Link to="login" style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
              Login
            </Link>
          </Button>
        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AppRouter;
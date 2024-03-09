// src/App.js
import React,{lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home  =lazy(()=> import ('./routers/home'))
const Login  =lazy(()=> import ('./routers/userConfig/interact/login'))
const Register  =lazy(()=> import ('./routers/userConfig/interact/register'))
const ResetPassword  =lazy(()=> import ('./routers/userConfig/interact/rspassword'))

const ResetPasswordToken  =lazy(()=> import ('./routers/userConfig/confirm/rstoken'))

const Managerhome=lazy(()=> import ('./manager/managerhome'))
function App() {


  return (
 
    <Router>
  <Suspense fallback={<div>Loading...</div>}>


    <Routes>
    <Route path="/managerofinan/manager" element={<Managerhome />} />
   


   <Route path="/managerofinan" element={<Home />} />
   <Route path="/managerofinan/login" element={<Login />} />
   <Route path="/managerofinan/register" element={<Register />} />
   <Route path="/managerofinan/resetpassword" element={<ResetPassword />} />

   <Route path="/managerofinan/rspwtoken" element={<ResetPasswordToken />} />
      
     </Routes>
    </Suspense>
  </Router>
);
}

export default App;

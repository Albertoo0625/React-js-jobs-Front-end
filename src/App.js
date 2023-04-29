import React from 'react';
import Test from '../src/components/contextTest';
import Register from '../src/components/register';
import { Routes,Route } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Login from '../src/components/login'
import './App.css'
import RequireAuth from './components/RequireAuth';
import Unauthorized from '../src/components/Unauthorized'
import SkillsPage from './components/Skills';
import Home from './components/home';
import PersistLogin from './components/PersistLogin';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

const App=()=>{

return(  
<Routes>
  <Route path='/' element={<Layout/>}>
       <Route path='register' element={<Register/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='Unauthorized' element={<Unauthorized/>}/>
  

   <Route element={<PersistLogin />}>
     <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
     <Route path="/" element={<Home />} />
   </Route>


  <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
    <Route path="skills" element={<SkillsPage />} />
  </Route>

  <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
    <Route path="test" element={<Test />} />
  </Route>
 
  </Route>
 </Route>
</Routes>
)
}

export default App
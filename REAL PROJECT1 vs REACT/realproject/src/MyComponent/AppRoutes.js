import {NavLink, Routes, Route} from 'react-router-dom'
import Wishlist from './Wishlist';
import Wishlistdetails from './Wishlistdetails';



const AppRoutes=()=>{
    return (<>
         <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <NavLink className="nav-link" to="wishlist">Wishlist</NavLink>
        </li>
        
        <li class="nav-item">
          <NavLink className="nav-link" to="/wishlistdetails">Wishlistdetails</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

   <Routes>
    <Route path="/wishlist" element={<Wishlist/>}></Route> 
    <Route path="/wishlistdetails" element={<Wishlistdetails/>}></Route>
    
   </Routes>
    </>)
}
export default AppRoutes;
import React from 'react'
import {useForm} from "react-hook-form";


const Wishlist=()=>{
   const {register, handleSubmit} = useForm()

   const getRegisterWishlist= (wishlistObj)=>{
    console.log(wishlistObj);
    
   }
  return (<>
   <div className="row">
        <div className="col-md-3">
            <h1 className="text-primary">Register Wishlist</h1>
            <form onSubmit={handleSubmit(getRegisterWishlist)}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="User" {...register("user")}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Auctions" {...register("auctions")}/>
                </div>
                
                <div className="mb-3 text-center">
                    <input type="submit" className="btn btn-outline-success"/>
                </div>
            </form>
        </div>
       </div>
   
  </>)
}

export default Wishlist;
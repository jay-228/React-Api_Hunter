import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";

function Dashboard() {
  const{logoutUser,authState}=useContext(AuthContext)
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    .then((res)=>{
      setdata(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <h1 style={{color:"red"}}>Dashboard</h1>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser} style={{height:"50px",width:"100px",fontSize:"18px"}}>Logout</button>
        <p style={{backgroundColor:"gray",width:"20%",marginLeft:"40%"}}>
          Token:
          <b data-testid="user-token" style={{color:"white",fontWeight:"bold"}}>{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable  data={data} />
      </div>
    </div>
  );
}

export default Dashboard;

import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FormVal=()=>{
    const[Detail,setDetail]=useState([])
    const[uname,setFname]=useState("")
    const[upassword,setPassword]=useState("")
    const[uemail,setEmail]=useState("")

    const navigate=useNavigate();

    // useEffect(()=>{
    //     fetch('http://localhost:3001/list').then((res)=>res.json()).then((res)=>setDetail(res)).catch((err)=>console.log(err))
        
    //   },[])
     
    const handleChnage=(e,key)=>{
        if(key=="name")
        setFname(e.target.value)
        
        if(key=="password")
        setPassword(e.target.value)
        if(key=="email")
        setEmail(e.target.value)
       
       
    }
    const handlesubmit = (e) => {
		e.preventDefault()
      if(uname|| uemail)
		navigate('/Dashboard')

	}
 
    // const handleUpdate=(e,itemid)=>{
    //      const temp=[...Detail]
    //      const obj=temp.find((item)=>item.rank==itemid)
    //      obj.fname=uname
    //      obj.age=uage
    //      obj.rank=urank
    //      setDetail(temp)
  
    // }
    // const handleadd=(e)=>{
    //     e.preventDefault()

    //     const obj={
    //         rank:urank,
    //         name:uname,
    //         age:uage,
    //         points:upoint
    //     }
      
    //     const temp=[...Detail,obj]
    //     setDetail(temp)
       
    // }
    return{
        Detail,
       handleChnage,
       handlesubmit,
        uname
   
    //    handleUpdate
    }
}
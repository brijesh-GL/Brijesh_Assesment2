import React from 'react'
import { useEffect,useState } from 'react'
export const Name = (props) => {
    const[sortData,setSortData]=useState(props.response)
   useEffect(() => {
     const temp=[...sortData].sort((a,b)=>a.name.localeCompare(b.name))
   
      setSortData(temp)
   
   },[])
  return (
    <div className='Name'>
         <div className='rank'>
            <img src='https://cdn-icons.flaticon.com/png/128/556/premium/556691.png?token=exp=1660072506~hmac=7ee6a38ac3364caf194048e4368b8a47'/> 
           <h1>Name Based Sorting!</h1>
           </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortData.map((item)=>{
                         
                            return(
                                <tr>
                                <th scope="row" key={item.id}>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.rank}</td>
                                <td>{item.age}</td>
                            </tr>
                            )
                        })
                    }
                  
                   
                </tbody>
            </table>
    </div>
  )
}

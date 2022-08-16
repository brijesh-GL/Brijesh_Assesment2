import React, { useState } from 'react'
import { FormVal } from './FormVal'
import './dasboard.css'
export const Dashboard = (props) => {
    const[Detail,setDetail]=useState(props.response)
    const { uname} = FormVal()
    
  return (
    <div>
        <h1>Welcome {uname}!</h1>
         <div className="profileInformation">
            <h2>Profile <img src="https://t4.ftcdn.net/jpg/01/18/03/33/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg" alt="" /></h2>
            <div>
                <p>Brijesh Jha </p>
                <p>ID:764642167</p>
                <p>brijesh@gmaiul.com</p>
            </div>
         </div>

         <div className='wishlist'>
            <h4> All the item added to wish list</h4>
            {
          Detail.map((item) => {
            return (
              <div className='Content'>
           
                <div className="card ">
                  <div className="card-body ">
                    <p>{item.title}</p>
                    <p>Author:{item.author}</p>
                    <p>pages:{item.pages}</p>
                  
                    <button className='button'>Delete from wishlist</button>
                    <button className='button'>proceed to page</button>
                  </div>
                </div>
            
              </div>
            )
          })
        }
         </div>
    </div>
  )
}

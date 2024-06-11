import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {

    const[data,changeData]=useState([])
    const fetchDtata=()=>{
        axios.get("http://localhost:8081/view").then((response)=>{
            changeData(response.data)
            console.log(response.data)
        }).catch()
    }
    useEffect(()=>{
        fetchDtata()
    },[])
  return (
    <div>
        <NavBar/>

        <br />
            <center><h1>ADD COURSE</h1></center>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
      <th scope="col">Duration</th>
      <th scope="col">Venue</th>
      <th scope="col">Trainer Name</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td>{value.date}</td>
                <td>{value.duration}</td>
                <td>{value.venue}</td>
                <td>{value.trainerName}</td>
              </tr>
            }
        )
    }
    
  </tbody>
</table>

                    </div>
                </div>
            </div>


    </div>
  )
}

export default ViewAll
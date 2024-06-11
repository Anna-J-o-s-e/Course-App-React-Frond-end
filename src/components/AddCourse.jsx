import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCourse = () => {

const [data,setData]=useState(
    {
        "title":"",
        "description":"",
        "date":"",
        "duration":"",
        "venue":"",
        "trainerName":""
    }
)
const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8081/",data).then((response)=>{
        console.log(data)
        if (response.data.status=="success") {
       alert("Submitted Successfully")     
        } else {
            alert("Error")
            
        }
    }).catch()
}

    return (
        <div>

            <NavBar />
            <br />
            <center><h1>ADD COURSE</h1></center>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <center>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" value={data.title} name='title' onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                
                                <label htmlFor="" className="form-label">Description</label>
                                <input type="text" className="form-control" value={data.description} name='description' onChange={inputHandler}/>
                            </div>
                            </center>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Date</label>
                                <input type="date" name="date" id="" className="form-control" value={data.date} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="text" className="form-control" value={data.duration} name='duration' onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Venue</label>
                                <input type="text" className="form-control" value={data.venue} name='venue' onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Trainer Name</label>
                                <input type="text" className="form-control" value={data.trainerName} name='trainerName' onChange={inputHandler}/>
                            </div>
                            <center>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-warning" onClick={readValue}>Submit</button>
                            </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AddCourse
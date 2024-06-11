import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchCourse = () => {
    const [data,searchData]=useState(
       {
"title":""
       } 
    )
const inputHandler=(event)=>{
    searchData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
}
     
  return (
    <div>
        <NavBar/>
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
    </div><br />
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <button className="btn btn-warning" onClick={readValue}>Search</button>
    </div>
    </center>
</div>

                    </div>
                </div>
            </div>



    </div>
  )
}

export default SearchCourse
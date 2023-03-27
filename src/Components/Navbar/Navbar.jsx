import React,{ useEffect, useState} from 'react'
import "../../App.css"
import axios from "axios"


const Navbar = () => {

    const [search , setSearch] = useState([])
    const [text , setText] = useState([]);

    const changeText = (e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }


    const handleSearch=(e)=>{
        e.preventDefault();

      
            axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakeForManufacturer/${text}?format=json`).then((resp)=>{
                console.log(resp)
                setSearch(resp.data.Results)
            })
        }   
   

  

  return (
    <div >
        <div className='heading'>
        <h1>VEHICLE MANUFACTURERS </h1>
        </div>
        <div className='below-header'>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText}/>
      <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
    </form>
        <section className='dropdown'>
            <label htmlFor='filter'>Filter By Vehicle Type :</label>
            <select className='filter'>
                <option value="All">All</option>
                <option value="Passanger Car">Passanger Car</option>
                <option value="Truck">Truck</option>
                <option value="Multipurpose Passenger Vehicle(MPV)">Multipurpose Passenger Vehicle(MPV)</option>
                <option value="MotorCycles">MotorCycles</option>
                <option value="Trailers">Trailers</option>
                <option value="Off Road Vehicles">Off Road Vehicles</option>
                <option value="Bus">Bus</option>
                <option value="Incomplete Vehicles">Incomplete Vehicles</option>
            </select>
        </section>
        </div>
        <table className="table">
        <thead>
    <tr >
      <th >Name</th>
      <th >Country</th>
      <th className='third'>Type</th>
    </tr>
  </thead>
        </table>
      { 
       search.map((value , index)=>{
        return (
            <div key={index} className="map-div">
           <div id='name'>{value.Make_Name}</div>
          
           <div id='country'>{value.Mfr_Name}</div>
           <div id='type'>{value.Mfr_Name}</div>
            </div>
         
        )
       
        })
        
        }
    </div>
  )
}

export default Navbar
import background from '../images/banner_bg.jpg'
import { Link } from 'react-router-dom';
import events from '../images/events.png';

import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';





function CreateEvents() {
const [title, setTitle]= useState("");
const [description, setDescription]= useState("");
const [address, setAddress]= useState("");
const [date, setDate]= useState("");
const [time, setTime]= useState("");
const [maxAttendee, setMaxAttendee]= useState("");
const [userID, setUserID]= useState("");

const location = useLocation();
    
    useEffect(() => {
   const searchParams = new URLSearchParams(location.search);
   const dataParam = searchParams.get('data');

   if (dataParam) {
     const data = JSON.parse(decodeURIComponent(dataParam));
     console.log('My Event:', data);
     setUserID(data);
     console.log(userID)
     // Use the data in your component as needed
   }
 }, [location.search]);



function Create() {
    let  attendees = 0;

        let data = { title, description, address, date, time, maxAttendee, attendees, userID};

        fetch("http://localhost:8080/api/event/", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then((res) => res.json()) // Parse the response as JSON
          .then((data) => {
            console.log("Result:", data); // Log the response data
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          
  
}

    return (
        <>
        <Navbar />
       
        <div>
            <div id="page-banner-area" className="page-banner-area " style={{ backgroundImage: `url(${background})` }}>

                <div className="page-banner-title">
                    <div className="text-center">
                        <h2 className='eventhead'>Create Event</h2>
                        <ol className="breadcrumb">
                            <li>
                                <Link to="#">Choosy Foody /</Link>
                            </li>
                            <li>
                                Create Event
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <section className="eventcon  ">
                <div className="Container eventcon">
                    <div className="signup-content">
                        <div className="booking">
                            <h5>Create An Event</h5>
                            <div className="booking_top"><div className="booking_form">
                                
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <input type="text" placeholder="title" id="title" onChange={(e)=>{setTitle(e.target.value)}} required="" />
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <input type="text" placeholder="description" id="desc" onChange={(e)=>{setDescription(e.target.value)}} required="" />
                                    </div>
                                    <div className="mb-3">
                                        <div>Address</div>
                                        <input type="text" placeholder="description" id="desc" onChange={(e)=>{setAddress(e.target.value)}} required="" />

                                    </div>
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div>Date</div>
                                        <input type="date" id="date" onChange={(e)=>{setDate(e.target.value)}}/>
                                    </div ><div className="d-flex align-items-center gap-3 mb-3">
                                        <div>Time</div>
                                        <input type="time" id="time" onChange={(e)=>{setTime(e.target.value)}}/>
                                    </div>
                                    <div className="mb-3">
                                        <div>Max. Attendee</div>
                                        <input type="number" placeholder="guest" id="guestSize" onChange={(e)=>{setMaxAttendee(e.target.value)}} />
                                    </div>
                                    
                                    <div className="mb-3">
                                        <button className="btn btn primary__btn  w-100 mt-4 btn cevent" onClick={Create} >Create event</button>
                                    </div>
                               
                            </div>
                            </div>
                        </div>
                        <div className="signup-image">
                            <figure><img src={events} alt="" /></figure>
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
        </>
    )

    
}
export default CreateEvents;
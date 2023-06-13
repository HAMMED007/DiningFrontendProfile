import Navbar from "../components/Navbar";

import { useEffect, useState } from 'react';
import background from '../images/banner_bg.jpg'
import { Link } from 'react-router-dom';




function AllEventsWithDashboard(){
    const [events, setEvents] = useState([]);
 let id;
function Join(eventId) {
  id = eventId;
//   alert(id);
  fetch(`http://localhost:8080/api/event/join/${id}`,{
    method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  })
  .then((data) => data.text()) // Parse the response as JSON
  .then((res)=>{
    alert(res)
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}


   

 useEffect(() => {
   fetch("http://localhost:8080/api/event/").then((data)=> {
      return data.json();
   }).then((result)=> {
      setEvents(result);

   }).catch((error)=>{
      console.log("error : " + error)
   })
   
 },[])



 



    return(
        <>
        <Navbar />
        <div>
            <div id="page-banner-area" className="page-banner-area " style={{ backgroundImage: `url(${background})` }}>

                <div className="page-banner-title">
                    <div className="text-center">
                        <h2 className='eventhead'>All Events</h2>
                        <ol className="breadcrumb">
                            <li>
                                <Link to="/">Choosy Foody /</Link>
                            </li>
                            <li>
                                All Events
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <section className="ts-schedule section-bg ">
         <div className="container ">
            <div className="row">
               <div className="col-lg-12">
                  <h2 className="section-title">
                     All Events
                  </h2>
               </div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
               <div className="col-lg-10">
                  <div className="tab-content schedule-tabs">
                     <div role="tabpanel" className="tab-pane active" id="date2">


                        {
                           events.map((item, index)=>{
                              return(
                                 <div className="schedule-listing">
                                 <div className="schedule-slot-time">
                                    <span> {item.date} - {item.time}</span>
                                     <br/>
                                    
                                    
                                 </div>
                                 
                                 <div className="schedule-slot-info">
                                  
                                 
                                    <div className="schedule-slot-info-content">
                                       <h3 className="schedule-slot-title">{item.title}
                                          <strong>@ {item.address}</strong>
                                       </h3>
                                       <p> {item.description}</p>
                                    </div>
                                    <button className="btn join btn-success" onClick={() => Join(item.id)}>Join Event</button><br/>
                                    <h5 className='mt-2'>member:{item.attendees}/{item.maxAttendee}</h5>
                                   
                                 </div>
                                 
                                 
                              </div>

                              )

                           })
                        }
                       
                      
                       
                     

                       

                  </div>
               </div>
            </div>
            <div className="col-lg-1"></div>
         </div>
         </div>
      </section>

        </div>
        </>
    )
}
export default AllEventsWithDashboard;
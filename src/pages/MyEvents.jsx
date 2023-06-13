import Navbar from '../components/Navbar';
import background from '../images/banner_bg.jpg'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function MyEvents(props) {
  
   let user_id;
   const location = useLocation();
   const [myData,setMyData] = useState([])

   useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const dataParam = searchParams.get('data');
  
      if (dataParam) {
        const data = JSON.parse(decodeURIComponent(dataParam));
        console.log('My Event:', data);
        user_id=data;
        // Use the data in your component as needed
      }
    }, [location.search]);


    
    useEffect(() => {
      fetch("http://localhost:8080/api/event/"+user_id).then((data)=> {
         return data.json();
      }).then((result)=> {
         setMyData(result);
         console.log(myData)
   
      }).catch((error)=>{
         console.log("error : " + error)
      })
      
    },[])
   
   

  
    return (
      <>
      <Navbar />
        <div>
            <div id="page-banner-area" className="page-banner-area " style={{ backgroundImage: `url(${background})` }}>

                <div className="page-banner-title">
                    <div className="text-center">
                        <h2 className='eventhead'>My Events</h2>
                        <ol className="breadcrumb">
                            <li>
                                <Link to="/">Choosy Foody /</Link>
                            </li>
                            <li>
                                My Events
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
                           myData.map((item, index)=>{
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
export default MyEvents;
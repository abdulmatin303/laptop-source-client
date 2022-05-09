import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    
    const [services, setServices]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])



    return (
        <div id='services' className='container mt-5'>
            <h3 className='text-center text-primary mb-5'> My Services </h3>
            
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    services.map(service=> <Service 
                    key={service.id}
                    service={service}></Service> )
                }
            </div>

        </div>
    );
};

export default Services;
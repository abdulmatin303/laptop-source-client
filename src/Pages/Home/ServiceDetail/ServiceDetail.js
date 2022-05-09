import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './serviceDetail.css';

const ServiceDetail = () => {

    const {serviceId} = useParams();

    const [bookDetail, setBookDetail]=useState({})

    useEffect(()=>{
    fetch(`http://localhost:5000/service/${serviceId}`)
    .then(res=>res.json())
    .then(data=>setBookDetail(data))
     },[])

    //  const foundDetails= bookDetail.find(singleBook=>singleBook.id===Number(serviceId))
    //  console.log(foundDetails);

    return (
        <div>
            
            <div className="card w-50  mx-auto mt-5 shadow">
                <img src={bookDetail?.img} className="card-img-top w-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{bookDetail?.name}</h5>
                    <p className="card-text">${bookDetail?.fee}</p>
                    <p className="card-text">{bookDetail?.description}</p>
                    <div>
                        <Link to='/checkout'>
                        <button className='btn btn-info'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
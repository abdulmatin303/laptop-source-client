import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import './serviceDetail.css';

const ServiceDetail = () => {

    const { register, handleSubmit } = useForm();

    const {serviceId} = useParams();

    const [bookDetail, setBookDetail]=useState({})

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };

    const handleDecreaseStock = data => {
        console.log(data);
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    }


    

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
                    <p className="card-text">Available: {bookDetail?.stock}</p>
                    <p className="card-text">{bookDetail?.description}</p>
                    <p className="card-text">id: {bookDetail?._id}</p>
                    <div>
                        
                        <button className='btn btn-info' onClick={()=> handleDecreaseStock({stock: bookDetail?.stock-1}) }>Delivered</button>
                        
                    </div>
                    <div className='mt-4'>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                
                <input className='mb-2' placeholder='Stock' type="number" {...register("stock")} />
                
                <input className='mb-2 bg-info' type="submit" value="Add Quantity" />
            </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
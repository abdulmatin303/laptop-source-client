import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {

    const { _id, name, fee, stock, description, img, supplier } = props.service;

    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='col mb-2' data-aos="fade-up" data-aos-duration="3000">
            <div className="card shadow">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${fee}</p>
                    <p className="card-text">Available: <span className='text-danger'>{stock}</span></p>
                    <p className="card-text">Supplier: <span className='text-warning p-2'>{supplier}</span></p>
                    <p className="card-text">{description.slice(0,35)}.....</p>
                    <button onClick={()=> navigateToServiceDetail(_id)} className='btn btn-info'>Update Stock</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
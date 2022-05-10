import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services,setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }

    return (
        <div className='container'>
            <h2 className='m-4 text-center'>Manage your service</h2>
            <div className='row'>
            {
                services.map(service =>
                    <div  key={service._id} className='col-md-4 mb-4' >
                    <div className="card shadow">
                        <img src={service.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{service.name}</h5>
                            <p className="card-text">${service.fee}</p>
                            <p className="card-text">Available: {service.stock}</p>
                            <p className="card-text">{service.description.slice(0,35)}.....</p>
                            <button className='bg-danger text-white p-2 border rounded' onClick={()=> handleDelete(service._id) }>   Delete</button> 
                        </div>
                    </div>
                </div>
                
                )
            }
            </div>
        </div>
    );
};

export default ManageServices;
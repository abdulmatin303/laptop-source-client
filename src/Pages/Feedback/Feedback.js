import React from 'react';
import Rating from 'react-rating';
import './Feedback.css';

const Feedback = () => {
    return (
        <div id='feedback' className='mt-5 container'>
            <h3 className='text-center text-primary mb-5'> Customer's Feedback </h3>
            <div className="row">
                {/* first feedback  */}
                <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="3000">
                    <div className="card shadow p-3" style={{height:'350px'}}>
                    <img className='img-fluid w-50' src="https://i.ibb.co/vQQ1bQp/feedback.jpg" alt="" />
                    <div className="text-center">
                    <h5>Md Abdul</h5>
                    <p>Budget friendly shop</p>
                    <div className='rating'>
                  <Rating
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star icon-color" 
                  readonly initialRating={3.5}></Rating>
                  </div>
                    </div>
                    </div>
                </div>
                {/* second feedback  */}
                <div className="col-lg-4 col-md-6 col-sm-12"  data-aos="fade-up" data-aos-duration="3000">
                    <div className="card shadow p-3" style={{height:'350px'}}>
                    <img className='img-fluid w-50' src="https://i.ibb.co/vQQ1bQp/feedback.jpg" alt="" />
                    <div className="text-center">
                    <h5>Matin</h5>
                    <p>Special discount for Student is best features </p>
                    <div className='rating'>
                  <Rating
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star icon-color" 
                  readonly initialRating={4.5}></Rating>
                  </div>
                    </div>
                    </div>
                </div>
                {/* third feedback  */}
                <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="3000">
                    <div className="card shadow p-3" style={{height:'350px'}}>
                    <img className='img-fluid w-50' src="https://i.ibb.co/vQQ1bQp/feedback.jpg" alt="" />
                    <div className="text-center">
                    <h5>Rafi</h5>
                    <p>EMI facilities is good</p>
                    <div className='rating'>
                  <Rating
                  emptySymbol="far fa-star icon-color"
                  fullSymbol="fas fa-star icon-color" 
                  readonly initialRating={4}></Rating>
                  </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
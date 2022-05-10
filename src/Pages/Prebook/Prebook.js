import React from 'react';

const Prebook = () => {
    return (
        <div id='prebook' className='mt-5 container'>
            <h3 className='text-center text-primary'> Prebook Order </h3>
            

            <div className="row">
            {/* half column  */}
            <div className="col-md-6">
        
                <img className='img-fluid' src="https://i.ibb.co/wgG09pW/banner33.jpg" alt="" />
            </div>
            {/* half column 0 */}
            <div className="col-md-6 shadow p-2">
            <form className='w-75'>
  <div class="form-group mb-4">
    <label for="exampleInputEmail1">Customer Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
  </div>

  <div class="form-group mb-4">
  <label for="exampleInputEmail1">Customer Phone</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number" />
  </div>


  <div class="form-group mb-4">
    <label for="inputAddress">Customer Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter your Address" />
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
            </div>

        </div>
        
    );
};

export default Prebook;
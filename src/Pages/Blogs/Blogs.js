import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div id='blogs' className='mt-5'>
            <h3 className='text-center text-primary mb-5'> My Blogs </h3>
            <div className="container mt-3">
                <div className="first  p-4  shadow">
                    <h4 className='text-center'>Difference between javascript and nodejs.</h4>
                    <div className="row">

                        <div className="col-md-12  col-sm-12">
                            <p><span className='text-success'>Node </span>   js is a server side javascript runtime that runs outside of a browser using google chrome's v8 engine.</p>
                            <p><span className='text-success'>Javascript</span>   is a programming language and it runs only the browser.</p>
                            <p>Node js non-blocking.</p>
                        </div>
                    </div>
                </div>

                <div className="second  p-4 mt-5 shadow">
                    <h4 className='text-center'>Differences between sql and nosql databases.</h4>
                    <p><span className='text-success'>SQL </span>: Relational database, structured data used, predefined schema(mentioned all the tables attribute name), not suitable for hierarchical data storage, but can be used for complex queries.
                        <br />
                        <br />

                        <span className='text-success'>No SQL </span>: Non relational database, unstructured data used, dynamic schema(not mentioned all the tables attribute name), suitable for hierarchical data storage, but can’t be used for complex queries.
                    </p>
                </div>

                <div className="third  p-4 mt-5 shadow">
                    <h4 className='text-center'>What is the purpose of jwt and how does it work.</h4>
                    <p><span className='text-success'>JWT </span> stands for Json Web Token. It is the most popular user authorization technique for web applications nowadays, mostly micro web services.</p>
                    <br />
                    <p>The user sends a request to the server,then the server sends the jwt token to the user. Inside this jwt token, the server includes header, payload and signature.
                        <br />
Inside the header, the server is written in which algorithm is used in this jwt token.
<br />
Payload is the user information and signature is the secret key.
By the secret key, the server ensures that this is the right user.
<br />
In this case, the server does not keep any data from the user. All the data will be sent from the server to the user and the user keeps this jwt token in browser cookies or others.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Blogs;
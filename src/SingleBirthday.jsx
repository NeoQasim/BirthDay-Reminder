import React from 'react'



const SingleBirthday = ({ id, name, age, img, rem }) => {
    return (
        <>

            <div className="container my-5 w-0 rounded-4 p-2">
                <div className="d-flex ">
                    <div className="d-flex justify-content-between">
                        <div className="img">
                            <img style={{ width: "70px", height: "70px", borderRadius: "90%", objectFit: 'cover' }} src={img} alt="" />
                        </div>
                        <div>
                            <div className=" mx-3">
                                <p className='fs-4 m-0  fw-bold'>{name}</p>
                                <p className='fs-5 m-0  '>{age}</p>
                            </div>
                        </div>
                    </div>
                    <div className="ms-auto"><button className="btn btn-primary me-auto my-3 rounded-pill py-1 px-2" onClick={() => rem(id)}> Remove </button></div>
                </div>

            </div>

        </>

    )
}

export default SingleBirthday
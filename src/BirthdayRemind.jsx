import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { data } from './data'
const BirthdayRemind = () => {
    const [bdays, setbdays] = useState(data);

    const removeData = (id) => {
        const newPeople = bdays.filter((remUser) => remUser.id !== id)
        setbdays(newPeople)
        console.log('hello')
    }
    return (
        <>
            <div className='text-center'>
                <h1 className='fs-3 fw-bold bg-secondary w-25 mx-auto py-2 rounded-2 text-white'> {bdays.length} Birthdays todays </h1>
            </div>
            <div className="container border w-50 rounded-4 p-0">
                {bdays.map((person) => {
                    return <SingleBirthday key={person.id} {...person} rem={removeData} />

                })}

                <div className="text-center w-100 btn btn-danger" onClick={() => {
                    setbdays([])
                }}>Remove</div>
            </div>
        </>
    )
}

export default BirthdayRemind
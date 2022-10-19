import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [contact, setContact] =useState("");

    const  handleSubmit = () =>{
        console.log("working")
    }


    return (
        <>
            <div className="mt-5 mx-5">
                <div className="px-4 py-2">
                    <label htmlFor="Name" className='mr-4'>Name</label> <br />
                    <input type="text" id='Name' className='px-4 py-2 border-2 border-fuchsia-200 rounded-md' placeholder='Enter name here' />
                </div>
                <div className="px-4 py-2">
                    <label htmlFor="Contact" className='mr-4'>Contact</label> <br />
                    <input type="text" id='Contact' className='px-4 py-2 border-2 border-fuchsia-200 rounded-md' placeholder='Enter name here' />
                </div>
                <button className='px-5 py-2 bg-green-700 rounded-sm w-56 ml-3 mt-2 text-white' onClick={handleSubmit}>Send</button>

            </div>
        </>
    )
}

export default Form
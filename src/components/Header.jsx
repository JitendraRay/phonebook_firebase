import React from 'react'
import Form from './Form'
import Taable from './Taable'

const Header = () => {
  return (
<>
<div className="flex bg-teal-500 text-white h-16 items-center content-center">
    <div className="px-4 text-white font-semibold">PhoneBook</div>
    <ul></ul>
</div>
<div className="w-1/3">
    <Form/>
</div>
<div className="w-2/3">
    <Taable/>
</div>
</>  
)
}

export default Header
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' id="contact" className='w-full h-screen flex justify-center items-center font-mono'>
       <form  method='POST' action="https://getform.io/f/aejyrggb" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p id="contact_header" className='text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white'>
                Contact
            </p>
            <p className='text-2xl text-white text-center'>
                Submit the form to send me an email.
            </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
<input className='bg-[#ccd6f6] my-4 p-2' type="email" placeholder='Email' name='email'/>
<textarea className='bg-[#ccd6f6] p-2' name='message' placeholder='Message'></textarea>

        <button className='text-white border-3 hover:bg-slate-400 hover:border-[#333333] px-4 py-3 my-8 mx-auto flex items-center'>
            Send email
        </button>
        
       </form>
    </div>
  )
}

export default Contact
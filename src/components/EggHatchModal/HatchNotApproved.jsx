import React from 'react'

function HatchNotApproved({closeModal}) {
    return (
        <div onClick={(e)=>{e.stopPropagation()}} className=' bg-turf rounded-lg p-10 flex flex-col items-center gap-6 w-full max-w-[524px] text-white text-2xl'>
                <img className='' src='/assets/ban-sign.svg' alt='Ban'/>
                <p className='text-[32px] text-border'>Hatch egg</p>
                <p className=' text-center'>
                These eggs don't seem<br/><br/>
to be ready to hatch yet.
               
                </p>
                
                <button onClick={closeModal} className='text-2xl leading-none py-5 rounded-full w-full border-white border-2'><span className='relative top-1'>got it</span></button>
            </div>
    )
}

export default HatchNotApproved

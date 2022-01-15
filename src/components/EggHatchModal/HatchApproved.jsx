import React from 'react'

function HatchApproved({closeModal}) {
    return (
        <div onClick={(e)=>{e.stopPropagation()}} className=' bg-turf rounded-lg p-10 flex flex-col items-center gap-6 w-full max-w-[524px] text-white text-2xl'>
                <img className='' src='/assets/caution.svg' alt='Caution'/>
                <p className='text-[32px] text-border'>Hatch egg</p>
                <p className=' text-center'>
                It takes 2 weeks for the egg to hatch.
<br/><br/>
You can't sell this egg until it hatches into a dinosaur
                </p>
                <button onClick={closeModal} className='text-2xl leading-none py-5 rounded-full w-full bg-yellow'><span className='relative top-0.5'>Start Hatching</span></button>
                <button onClick={closeModal} className='text-2xl leading-none py-5 rounded-full w-full border-white border-2'><span className='relative top-1'>Cancel</span></button>
            </div>
    )
}

export default HatchApproved

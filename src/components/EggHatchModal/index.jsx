import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { setEgg } from '../../reducers/EggHatchReducer'
import { showEggHatchModal } from '../../reducers/uiReducer'
import HatchApproved from './HatchApproved'
import HatchNotApproved from './HatchNotApproved'
function EggHatchModal() {
     const showModal = useSelector(state => state.uiState.eggHatchModal)
     const eggData = useSelector(state => state.eggToHatchState.egg)
     const dispatch = useDispatch()
     const closeModal = ()=>{
         dispatch(showEggHatchModal(false))
         dispatch(setEgg(null))
     }
     
    return (<div className={`fixed top-0 left-0 z-30 w-screen h-screen transition-all ${showModal ? 'opacity-100' :'opacity-0 pointer-events-none'}`}>
        <div onClick={closeModal}  className='bg-black/60 w-full h-full flex justify-center items-center text-white text-7xl'>
            {eggData?.isReadyToHatch ? <HatchApproved closeModal={closeModal}/> : <HatchNotApproved closeModal={closeModal} />}
        </div>
    </div>
        
    )
}

export default EggHatchModal

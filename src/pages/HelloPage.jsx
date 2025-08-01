import { NavLink } from 'react-router-dom';
import logo from '../images/telegram.png'
import { useRef } from 'react';
import PlaneSwitch from '../animations/PlaneSwitch';
import LoadingText from '../animations/LoadingText';

function HelloPage(){
    const title = useRef();
    
    return <div className='w-full h-full flex flex-col justify-between relative'>
        <div className='absolute top-[22px] right-[22px] shadow shadow-blue-400/70 rounded-full' >
            <PlaneSwitch />
        </div>
        <div className='absolute top-[22px] left-[22px]'>
            <LoadingText />
        </div>

        <div ref={title} className='flex-1 flex flex-col justify-evenly items-center'>
            <img src={logo} className="w-[145px] mt-[30px]" />
            <div className='text-center'>
                <h1 className='text-[45px] font-semibold tracking-[1px] mb-[15px]'>Chat App</h1>
                <p className='leading-[19px]'>The world's <b>fastest</b> messaging app. <br />
                    It is <b>free</b> and <b>secure. </b>
                    <br />
                    <span className='text-[12px]'>Created by <b className='text-[#3A9EDB]'>Samandar</b></span>
                </p>

                <div className='flex mt-10 gap-[8px] justify-center'>
                    <button className='bg-[#3A9EDB] w-[10px] h-[10px] rounded-full cursor-pointer'></button>
                    <button className='bg-zinc-300 w-[10px] h-[10px] rounded-full cursor-pointer'></button>
                    <button className='bg-zinc-300 w-[10px] h-[10px] rounded-full cursor-pointer'></button>
                    <button className='bg-zinc-300 w-[10px] h-[10px] rounded-full cursor-pointer'></button>
                    <button className='bg-zinc-300 w-[10px] h-[10px] rounded-full cursor-pointer'></button>
                </div>
            </div>
        </div>
        <NavLink to={'/signup'} className={'overflow-hidden h-[90px] flex items-center justify-center relative text-white text-[18px] font-semibold tracking-[1px]'}>
            Start Messaging
            <div className='bg-[#3A9EDB] absolute top-0 w-[1600px] h-[1600px] z-[-1] rounded-full'></div>
        </NavLink>
    </div>
}

export default HelloPage;

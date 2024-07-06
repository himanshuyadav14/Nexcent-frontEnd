import React from 'react'
import Logo1 from "../Assets/ClientLogos/Logo1"
import Logo2 from "../Assets/ClientLogos/Logo2"
import Logo3 from "../Assets/ClientLogos/Logo3"
import Logo4 from "../Assets/ClientLogos/Logo4"
import Logo5 from "../Assets/ClientLogos/Logo5"
import Logo6 from "../Assets/ClientLogos/Logo6"
import Logo7 from "../Assets/ClientLogos/Logo7"

const Clients = () => {
  return (
    <div className='w-1440 h-190 px-[144px] mt-[16px]'>
        <div className='flex flex-col justify-center mx-auto items-center w-[1110px] h-[76px] mb-[6px]'>
            <div className='font-[600px] text-[36px] leading-[44px] text-[#4d4d4d]'>Our Clients</div>
            <div className='font-[400px] text-[16px] leading-[24px] text-[#717171]'>We have been working with some Fortune 500+ clients</div>
        </div>

        <div className='w-[1152pxpx] h-[98px] mx-auto flex justify-between items-center'>
            <Logo1/>
            <Logo2/>
            <Logo3/>
            <Logo4/>
            <Logo5/>
            <Logo6/>
            <Logo7/>
        </div>
    </div>
  )
}

export default Clients
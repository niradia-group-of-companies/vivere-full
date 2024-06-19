import { useEffect } from 'react'
import { VivereFooter } from './components/common/VivereFooter'
import { SolterraFooter } from './components/common/SolterraFooter'
import { ThankYouText } from './components/ThankYouText'
import { NavWhite } from './components/common/NavWhite'

export const ThankYou = () => {
  useEffect(() => document.title = 'Vivere by Solterra - North Guildford High-Rise - Surrey New Homes - Thank You', [])

  return (
    <div className='bg-th_green overflow-x-hidden'>
    <div className='w-screen max-w-[1980px] mx-auto'>
    <p className='hidden lg:block fixed font-sub -rotate-90 origin-[50%_53%] text-xs font-bold text-th_darkgray -left-16 2xl:-left-10 bottom-40 '>a quality development by solterra</p>
    <NavWhite />
    <ThankYouText />
    <VivereFooter />
    <SolterraFooter />
    </div>
    </div>
  )
}

import { useState, useEffect } from 'react';
import Vibrantly from './Vibrantly';
import Centrally from './Centrally';
import Authentically from './Authentically';

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // const texts = ["vibrantly", "centrally", "authentically"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => {
        if (prevIndex < 2) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 3700);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-screen max-h-[480px] lg:max-h-[500px] xl:max-h-[740px] mx-auto relative -top-24 xl:-top-32 text-center'>
      <div className='w-11/12 flex justify-between items-center'>
        <img src="/img/sketch.png" alt="vivere_scketch" className='h-full absolute top-20 -left-28 right-0 md:-left-0 xl:-left-20 2xl:-left-14 md:top-20 lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 md:right-1/2 translate-x-0 lg:translate-x-5 xl:translate-x-1/4 2xl:translate-x-1/3 w-[380px] lg:w-[540px] 2xl:w-[680px] object-contain' />
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/4 2xl:-translate-x-1/5 w-1/4 mr-14 ml-10 lg:-ml-3 2xl:ml-20'>
        <h3 className="w-full absolute top-5 md:-top-5 lg:-top-24 text-left font-sub font-bold text-th_brown tracking-widest text-lg md:text-2xl xl:text-3xl pb-1.5 md:pb-4 xl:pb-6">LIVE</h3>
          {/* <AnimatePresence>
            <motion.h3
              key={currentTextIndex}
              initial={variants.initial}
              animate={variants.animate}
              exit={{ opacity: 0 }}
              transition={{ duration: 1}}
              className="font-quote w-full object-contain absolute z-20 top-14 lg:top-1/2 left-2 md:left-1/2 -translate-x-0 md:-translate-x-1/2 -translate-y-0 md:-translate-y-1/2 flex flex-col items-start justify-start text-th_brown"
            > */}
            <div className={`w-full scale-[1.3] md:scale-90 2xl:scale-[1.2] ${currentTextIndex === 2 ? 'pl-2 md:pl-5 xl:pl-7 2xl:pl-8' : 'pl-0'} ml-2 md:-ml-3 xl:-ml-4 2xl:ml-10 object-contain absolute z-20 top-14 lg:top-1/2 left-2 md:left-1/2 -translate-x-0 md:-translate-x-1/2 -translate-y-0 md:-translate-y-1/2 flex flex-col items-start justify-start text-th_brown`}>
            {currentTextIndex === 0 ? <Centrally />  : currentTextIndex === 1 ? <Vibrantly />  :  currentTextIndex === 2 ?  <Authentically />: <></>}
          
            </div>
            {/* </motion.h3>
          </AnimatePresence> */}
          <div>
          </div>
        </div>
        <div className='absolute -right-52 md:-right-24 xl:-right-20 -top-5 md:top-5 lg:-top-10'>
          <img src="/img/slash.png" alt="leaf_background_image" className='h-[440px] lg:h-[600px] xl:h-[780px] object-contain' />
        </div>
      </div>
    </div>
  );
};

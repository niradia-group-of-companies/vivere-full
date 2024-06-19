export const ThankYouText = () => {

  return (
    <div className='w-full h-screen max-h-[480px] lg:max-h-[500px] xl:max-h-[740px] mx-auto relative -top-24 xl:-top-32 text-center'>
      <div className='w-11/12 h-full flex justify-center items-center mx-auto relative z-10'>
      <div className='text-th_ivory text-center'>
       <h1 className='font-main text-3xl md:text-4xl pb-8'>Your Registration has been Submitted</h1>
       <p className="font-sub text-base lg:text-xl  w-10/12 md:w-2/3 text-center mx-auto lg:w-[540px]">Thank you for registering to be the first to discover Vivere by Solterra. We will be in touch with your shortly.</p>
       <p className="font-sub text-base lg:text-xl pt-4 w-10/12 md:w-2/3 text-center mx-auto lg:w-[540px]">Live Authentically.<br/>
Craft your life story at Vivere.
</p>
      </div>
        </div>
        <div className='absolute -right-52 md:-right-24 xl:-right-20 -top-5 md:top-5 lg:-top-10'>
          <img src="/img/slash.png" alt="leaf_background_image" className='h-[440px] lg:h-[600px] xl:h-[780px] object-contain' />
        </div>
      </div>
  );
};

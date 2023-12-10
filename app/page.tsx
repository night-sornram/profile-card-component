import Image from 'next/image'

export default function Home() {
  return (
    <div className=' flex justify-center items-center w-screen h-screen relative'  >
      <div className=' w-5/6 md:w-4/6 lg:w-2/6 bg-white flex flex-col rounded-lg'>
        {/* <svg width="350" height="140" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        className=' object-contain w-full'><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="c"><stop stop-color="#0989B4" stop-opacity="0" offset="0%"/><stop stop-color="#53FFEE" offset="99.94%"/></linearGradient><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="d"><stop stop-color="#0989B4" stop-opacity="0" offset="0%"/><stop stop-color="#53FFEE" offset="99.94%"/></linearGradient><path id="a" d="M0 0h350v140H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlinkHref="#a"/></mask><use fill="#41CBD3" xlinkHref="#a"/><g mask="url(#b)" opacity=".5"><g transform="translate(-11 -4)"><ellipse fill="url(#c)" transform="rotate(90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" transform="rotate(180 14.834 14.8)" cx="14.834" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(-90 106.123 14.8)" cx="106.123" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#c)" transform="rotate(90 243.055 14.8)" cx="243.055" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" transform="rotate(180 197.411 14.8)" cx="197.411" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(-90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834"/></g><g transform="translate(-11 91.63)"><ellipse fill="url(#c)" transform="rotate(90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" transform="rotate(180 14.834 14.8)" cx="14.834" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(-90 106.123 14.8)" cx="106.123" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#c)" transform="rotate(90 243.055 14.8)" cx="243.055" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" transform="rotate(180 197.411 14.8)" cx="197.411" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(-90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834"/></g><g transform="translate(-11 43.815)"><ellipse fill="url(#c)" transform="rotate(-90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" cx="14.834" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(90 106.123 14.8)" cx="106.123" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#c)" transform="rotate(-90 243.055 14.8)" cx="243.055" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" cx="197.411" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834"/></g><g transform="translate(11.822 18.77)"><ellipse fill="url(#c)" transform="rotate(90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" transform="rotate(180 14.834 14.8)" cx="14.834" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(-90 106.123 14.8)" cx="106.123" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#c)" transform="rotate(90 243.055 14.8)" cx="243.055" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" transform="rotate(180 197.411 14.8)" cx="197.411" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(-90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834"/></g><g transform="translate(11.822 114.4)"><ellipse fill="url(#c)" transform="rotate(90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" transform="rotate(180 14.834 14.8)" cx="14.834" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(-90 106.123 14.8)" cx="106.123" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#c)" transform="rotate(90 243.055 14.8)" cx="243.055" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" transform="rotate(180 197.411 14.8)" cx="197.411" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(-90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834"/></g><g transform="translate(11.822 66.585)"><ellipse fill="url(#c)" transform="rotate(-90 60.479 14.8)" cx="60.479" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" cx="14.834" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="151.767" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(90 106.123 14.8)" cx="106.123" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#c)" transform="rotate(-90 243.055 14.8)" cx="243.055" cy="14.8" rx="14.8" ry="14.834"/><ellipse fill="url(#d)" cx="197.411" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#d)" cx="334.344" cy="14.8" rx="14.834" ry="14.8"/><ellipse fill="url(#c)" transform="rotate(90 288.7 14.8)" cx="288.699" cy="14.8" rx="14.8" ry="14.834"/></g></g></g></svg>
         */}
         <Image
         src={"/images/bg-pattern-card.svg"}
         alt='bg-card'
         width={1000}
         height={1000}
         className=' object-cover rounded-t-lg'
         />
        <div className=' flex justify-center items-center relative bg-white rounded-b-lg'>
          <Image
          src={"/images/image-victor.jpg"}
          width={130}
          height={130}
          className=' -top-12 absolute rounded-full border-white border-8 border-solid'
          alt='profile'
          />
          <div className=' mt-28 w-full flex flex-col justify-center items-center '>
            <div className=' w-full flex flex-col justify-center items-center'>
              <div className=' text-xl font-bold' >Victor Crest <span className=' text-xl font-normal text-gray-600 ml-2'> 26</span></div>
              <div className=' text-gray-600 text-lg mt-3' >London</div>
            </div>
            <div className='flex flex-row justify-around items-center w-full mt-8 p-8 border-t-2 border-gray-200'>
              <div className=' flex flex-col'>
                <div className=' text-xl font-bold'>
                  80K
                </div>
                <div className=' text-gray-600 text-sm'>
                  Followers
                </div>
              </div>
              <div className=' flex flex-col'>
                <div className=' text-xl font-bold'>
                  803K
                </div>
                <div className=' text-gray-600 text-sm'>
                  Likes
                </div>
              </div>
              <div className=' flex flex-col'>
                <div className=' text-xl font-bold'>
                  1.4K
                </div>
                <div className=' text-gray-600 text-sm'>
                  Photos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
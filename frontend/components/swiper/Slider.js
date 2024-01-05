import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {Autoplay, Pagination} from 'swiper/modules'
import Image from 'next/image';

export const Slider = ({slides}) => {
  SwiperCore.use([Autoplay]);
  return (
    <>
    <Swiper
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[ Pagination, Autoplay]}
      className='max-w-6xl h-full md:h-full justify-center items-center mb-12'
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className='font-inter flex flex-col items-center text-white pb-20 pt-5'>
          <div className='flex flex-col items-center rounded-lg shadow lg:flex-row 2xl:max-w-5xl p-9'>
            <Image src={slide.image} alt={slide.title} className='rounded-t-lg h-full w-auto max-h-96 lg:w-2/5 object-cover md:rounded-none md:rounded-s-lg'/>
            <div className='flex flex-col justify-between lg:w-3/5'>
              <h5 className='mb-2 text-4xl lg:text-5xl font-bold text-center lg:text-right'>{slide.title}</h5>
              <p className='mt-6 text-base text-center lg:text-right'>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      {/* <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </a> */}
    </>
  )
}

export default Slider;
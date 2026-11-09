'use client';
import { Carousel, Slider, SliderContainer, ThumbsSlider } from '@/components/ui/thumbnail-slider-utils/carousel';
import type { EmblaOptionsType } from 'embla-carousel';

function ThumnailSlider() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  return (
    <>
      <div className='w-[90%] mx-auto'>
        <Carousel options={OPTIONS} className='relative'>
          <SliderContainer className='gap-2'>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://cdn.21st.dev/assets/mirror/a5/a52f96c871b717deaaeefef1d9252d02c4fbe8877df9b5704ad2b9e3c8c233b3.jpg'
              }
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/a5/a52f96c871b717deaaeefef1d9252d02c4fbe8877df9b5704ad2b9e3c8c233b3.jpg'
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://cdn.21st.dev/assets/mirror/6d/6d376dba30de53ad01eec3dc501abd35d5bf261239654e0c14353efe3d94a126.jpg'
              }
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/6d/6d376dba30de53ad01eec3dc501abd35d5bf261239654e0c14353efe3d94a126.jpg'
                width={1400}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://cdn.21st.dev/assets/mirror/b1/b163040425c27d22243665b383e463067978c2e2b43454e318e78b3ec570192b.jpg'
              }
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/b1/b163040425c27d22243665b383e463067978c2e2b43454e318e78b3ec570192b.jpg'
                width={687}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://cdn.21st.dev/assets/mirror/e6/e63b8be1d1e0b27c33ab9831cf374d10957c5abb0a5a59d3f9d13b16c03189eb.jpg'
              }
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/e6/e63b8be1d1e0b27c33ab9831cf374d10957c5abb0a5a59d3f9d13b16c03189eb.jpg'
                width={1474}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://cdn.21st.dev/assets/mirror/b7/b784461c60ccea831d915c3b1a941aeac5454444861ce312300739469a771739.jpg'
              }
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/b7/b784461c60ccea831d915c3b1a941aeac5454444861ce312300739469a771739.jpg'
                width={765}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://cdn.21st.dev/assets/mirror/72/72fb690496e93dc607ee94c76707b44b738a4201237761f5fd0b6a2021c0a882.jpg'
              }
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/72/72fb690496e93dc607ee94c76707b44b738a4201237761f5fd0b6a2021c0a882.jpg'
                width={730}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
            <Slider
              className='xl:h-[400px] sm:h-[350px] h-[300px] w-full'
              thumbnailSrc={
                'https://cdn.21st.dev/assets/mirror/5c/5cd45fe0d3f531b3b1ac76977a135f8101f816e5804feee0cd66a56796b6d7ac.jpg'
              }
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/5c/5cd45fe0d3f531b3b1ac76977a135f8101f816e5804feee0cd66a56796b6d7ac.jpg'
                width={687}
                height={800}
                alt='image'
                className='h-full object-cover rounded-lg w-full'
              />
            </Slider>
          </SliderContainer>
          <ThumbsSlider className='pb-1 px-1' thumbsClassName='basis-[15%] h-24' />
        </Carousel>
      </div>
    </>
  );
}

export default ThumnailSlider;

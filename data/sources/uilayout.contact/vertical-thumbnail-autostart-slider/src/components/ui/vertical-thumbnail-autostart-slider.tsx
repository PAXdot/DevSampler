'use client';
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
  ThumbsSlider,
} from '@/components/ui/vertical-thumbnail-autostart-slider-utils/carousel';
import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import React, { ReactNode } from 'react';

function VerticalthumbsAutostartSlider() {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    axis: 'y',
  };
  return (
    <>
      <div className='py-10'>
        <Carousel
          options={OPTIONS}
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 2000,
              stopOnMouseEnter: false,
              stopOnInteraction: false,
            }),
          ]}
          dir='ltr'
          className='relative h-full'
        >
          <SliderContainer className='h-[400px]'>
            <Slider
              className='w-full h-full'
              thumbnailSrc='https://cdn.21st.dev/assets/mirror/a5/a52f96c871b717deaaeefef1d9252d02c4fbe8877df9b5704ad2b9e3c8c233b3.jpg'
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/a5/a52f96c871b717deaaeefef1d9252d02c4fbe8877df9b5704ad2b9e3c8c233b3.jpg'
                alt='Slide 1'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>

            <Slider
              className='w-full h-full'
              thumbnailSrc='https://cdn.21st.dev/assets/mirror/6d/6d376dba30de53ad01eec3dc501abd35d5bf261239654e0c14353efe3d94a126.jpg'
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/6d/6d376dba30de53ad01eec3dc501abd35d5bf261239654e0c14353efe3d94a126.jpg'
                alt='Slide 2'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>

            <Slider
              className='w-full h-full'
              thumbnailSrc='https://cdn.21st.dev/assets/mirror/b1/b163040425c27d22243665b383e463067978c2e2b43454e318e78b3ec570192b.jpg'
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/b1/b163040425c27d22243665b383e463067978c2e2b43454e318e78b3ec570192b.jpg'
                alt='Slide 3'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>

            <Slider
              className='w-full h-full'
              thumbnailSrc='https://cdn.21st.dev/assets/mirror/e6/e63b8be1d1e0b27c33ab9831cf374d10957c5abb0a5a59d3f9d13b16c03189eb.jpg'
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/e6/e63b8be1d1e0b27c33ab9831cf374d10957c5abb0a5a59d3f9d13b16c03189eb.jpg'
                alt='Slide 4'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>

            <Slider
              className='w-full h-full'
              thumbnailSrc='https://cdn.21st.dev/assets/mirror/b7/b784461c60ccea831d915c3b1a941aeac5454444861ce312300739469a771739.jpg'
            >
              <img
                src='https://cdn.21st.dev/assets/mirror/b7/b784461c60ccea831d915c3b1a941aeac5454444861ce312300739469a771739.jpg'
                alt='Slide 5'
                className='h-full w-full object-cover rounded-lg'
              />
            </Slider>
          </SliderContainer>

          <ThumbsSlider
            className='absolute right-4 top-1/2 -translate-y-1/2 w-20'
            thumbsSliderClassName='border-black'
          />
        </Carousel>
      </div>
    </>
  );
}

export default VerticalthumbsAutostartSlider;

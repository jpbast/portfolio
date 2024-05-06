'use client';

import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { FaChevronLeft } from 'react-icons/fa6';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaChevronRight } from 'react-icons/fa';
import useMediaQuery from '@/hooks/useMediaQuery';

type SlideButtonProps = {
  position: 'left' | 'right';
  disabled: boolean;
  onClick: () => void;
};

const SlideButton: React.FC<SlideButtonProps> = ({ position, disabled, onClick }) => {
  const isLeft = position === 'left';

  if (disabled) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className={`absolute bottom-3 top-3 z-20 flex items-center justify-center bg-[#000000d0] p-8 opacity-0 transition-all hover:opacity-100 max-md:hidden ${isLeft ? 'left-0' : 'right-0'} text-text-secondary`}
    >
      {isLeft ? <FaChevronLeft size={34} /> : <FaChevronRight size={34} />}
    </button>
  );
};

export type CarouselItemArgs<T> = { data: T; index: number };

type CarouselProps<T> = {
  renderItem: ({ data, index }: CarouselItemArgs<T>) => React.ReactNode;
  data: T[];
  color?: 'primary' | 'secondary';
};

function Carousel<T>({ color = 'primary', renderItem, data }: CarouselProps<T>) {
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);

  const isDesktop = useMediaQuery('(min-width: 1400px)');
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    swipeToSlide: true,
    slidesToShow: 3.7,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    onSwipe: () => console.log('swiping'),
    customPaging: () => {
      return (
        <div
          className={`pointer-events-none mt-3 h-2 w-2 rounded-full opacity-30 ${color === 'primary' ? 'bg-text-primary' : 'bg-text-secondary'}`}
        />
      );
    },
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider
        ref={sliderRef}
        {...settings}
        beforeChange={(current, next) => {
          const diff = next - current;
          setDisableRight(isDesktop ? data.length - 4 === current : diff > 0 && diff < 1);

          setDisableLeft(next === 0);
        }}
      >
        {data.map((d, index) => renderItem({ data: d, index }))}
        {/* Add invisible item to fix last item scrolling on larger screens */}
        {isDesktop && <div />}
      </Slider>
      <SlideButton
        disabled={disableLeft}
        position="left"
        onClick={() => sliderRef?.current?.slickPrev()}
      />
      <SlideButton
        disabled={disableRight}
        position="right"
        onClick={() => sliderRef?.current?.slickNext()}
      />
    </div>
  );
}

export default Carousel;

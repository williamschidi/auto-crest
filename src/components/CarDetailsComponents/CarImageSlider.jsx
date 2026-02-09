import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Icon } from "@iconify/react";

function CarImageSlider({ car }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [currentIndex, setCurrrentIndex] = useState(null);

  const images = car.images;
  const maxIndex = images.length - 1;

  const isLastIndex = maxIndex === currentIndex;
  const isFirstIndex = currentIndex === 0;

  return (
    <div className="h-[260px] sm:h-[360px] md:h-[420px] w-full relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) =>
          setCurrrentIndex(swiper.activeIndex)
        }
        className="h-full w-full"
      >
        {images.map((img, ind) => (
          <SwiperSlide key={img} className="w-full">
            <img
              src={`/${img}`}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={nextRef}
        className={`absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 rounded-full flex justify-center ${isLastIndex ? "bg-transparent" : "bg-gray-200"} items-center z-10 `}
      >
        <Icon
          icon="eva:arrow-right-fill"
          width="24"
          height="24"
          className={`${isLastIndex ? "text-transparent" : "text-gray-800"}`}
        />
      </button>

      <button
        ref={prevRef}
        className={`absolute top-1/2 left-2 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center z-10 -translate-y-1/2 ${isFirstIndex ? "bg-transparent" : "bg-gray-200"}`}
      >
        <Icon
          icon="eva:arrow-left-fill"
          width="24"
          height="24"
          className={`${isFirstIndex ? "text-transparent" : "text-gray-800"}`}
        />
      </button>
    </div>
  );
}

export default CarImageSlider;

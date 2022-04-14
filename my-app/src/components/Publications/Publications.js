import React from "react";
import styles from "./publications.module.css";
import "./publicationsSwiper.css";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

import data from "../News/publicationsData";
import PublicationCard from "../publication-card/publication-card";

const Publications = () => {
  return (
    <section className={styles.publications}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Публикации</h2>
        <Swiper
          wrapperTag="ul"
          className={styles.slider}
          modules={[Navigation, Pagination, A11y, Grid]}
          navigation={{
            nextEl: `.${styles.sliderButtonNext}`,
            prevEl: `.${styles.sliderButtonPrev}`,
            disabledClass: styles.sliderButtonDisabled,
          }}
          pagination={{
            el: `.${styles.sliderPagination}`,
            type: "bullets",
            bulletClass: styles.paginationBullet,
            bulletActiveClass: styles.paginationBulletActive,
            bulletElement: "div",
            clickable: true,
          }}
          grid={{
            rows: 2,
            fill: "row",
          }}
          a11y={{
            prevSlideMessage: "Предыдущий слайд",
            nextSlideMessage: "Следующий слайд",
          }}
          spaceBetween={33}
          slidesPerView={3}
          slidesPerGroup={3}
        >
          <>
            {data.map((el) => (
              <SwiperSlide className={styles.card} key={el._id} tag="li">
                <PublicationCard element={el} />
              </SwiperSlide>
            ))}
          </>
        </Swiper>
        <div
          className={`${styles.sliderButtonPrev} ${styles.sliderButton}`}
        ></div>
        <div
          className={`${styles.sliderButtonNext} ${styles.sliderButton}`}
        ></div>
        <div className={styles.sliderPagination}></div>
      </div>
    </section>
  );
};

export default Publications;

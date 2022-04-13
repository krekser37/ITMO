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
                <div
                  style={{ backgroundImage: `url("${el.img}")` }}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardHeading}>{el.heading}</h3>
                <span className={styles.cardAuthors}>{el.authors}</span>
                <p className={styles.cardParagraph}>{el.text}</p>
                <div className={styles.cardFooter}>
                  <a href="#">
                  <span className={styles.cardFooter_heading}>
                    Читать полностью
                  </span>
                  <div className={styles.cardFooter_arrow} />
                  </a>
                  <div className={styles.cardFooter_share} />
                  <div className={styles.cardFooter_social}>
                    <ul className={styles.cardFooter_socialList}>
                      <li>
                        <a href="#">
                          <div
                            className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__vk}`}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div
                            className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__tg}`}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div
                            className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__yt}`}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div
                            className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__vk}`}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div
                            className={`${styles.cardFooter_socialLogo} ${styles.cardFooter_socialLogo__tg}`}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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

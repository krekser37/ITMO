import Styles from "./About.module.css";
import Needle from "../../img/About/Needle.svg";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import news from "../News/News";


const About = () => {
    return (
        <div className={Styles.About}>
            <h2 className={Styles.Title}>НЕСКОЛЬКО СЛОВ О НАС</h2>
            <p className={Styles.Text}>Национальный центр когнитивных разработок – центр национальной технологической инициативы (НТИ), получивший государственную поддержку по направлению «Технологии машинного обучения и когнитивные технологии».</p>

            <Swiper
                className={Styles.Swiper}
            // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={32}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <>
                {news.map((element, index) => (
                    <SwiperSlide className={Styles.Card} key={index}>
                        {/* <article className={Styles.Card}> */}
                            <p className={Styles.TextDate}>{element.date}</p>
                            <h3 className={Styles.TextTitle}>{element.title}</h3>                    
                            <div className={Styles.Line}></div>
                            <p className={Styles.TextDescription}>{element.description}</p>
                            <div className={Styles.Needle}></div>
                        {/* </article> */}
                    </SwiperSlide>
                ))}
                </>
               
            </Swiper>
            
          
        </div>
    )
}

export default About;
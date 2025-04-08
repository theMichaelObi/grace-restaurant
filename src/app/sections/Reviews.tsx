'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './reviews.css';
import SectionTitle from '../components/SectionTitle';
import ReviewsItem from '../components/ReviewsItem';

export default function Reviews() {
    const [slides, setSlides] = useState<any | []>([]);

    const getReviewsData = () => {
        fetch('http://localhost:3000/api/reviews')
            .then(res => res.json())
            .then(data => setSlides(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getReviewsData();
    }, []);

    return (
        <section id="reviews" className="reviews section-bg">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Reviews" subtitle="What they say about us" />
                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        slidesPerView={'auto'} speed={600} autoplay={{ delay: 5000, disableOnInteraction: false, }}
                        pagination={{ el: '.reviews-swiper-pagination', type: 'bullets', clickable: true, }}
                        modules={[Autoplay, Pagination]} loop={true} breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="reviews-slider swiper-container"
                    >
                        {slides &&
                            slides.length > 0 &&
                            slides.map(
                                (slide: {
                                    id: number;
                                    content: string;
                                    avatar: string;
                                    client: string;
                                    position: string;
                                }) => (
                                    <SwiperSlide key={slide.id}>
                                        <ReviewsItem item={slide} />
                                    </SwiperSlide>
                                )
                            )}
                    </Swiper>
                    <div className="reviews-swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}

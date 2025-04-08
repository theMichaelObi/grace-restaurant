'use client';

import React from 'react';
import './about.css';
import aboutImage from '../../../public/images/about/img.png';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                    <div className="about-img">
                        <Image src={aboutImage} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>Let's Talk About Grace's.</h3>
                    <p className="fst-italic">
                        Welcome to the restaurant that offers the most prestigious quality service available. Grace's Restaurant is the best restaurant in 
                        the world. It has amazing food and really good dishes made with organic ingredients. But why choose us? Our restaurant offers some 
                        of the best service here including:
                    </p>
                    <ul>
                        <li>
                            <i className="bi bi-check-circle"></i> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam.
                        </li>
                        <li>
                            <i className="bi bi-check-circle"></i> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam.
                        </li>
                        <li>
                            <i className="bi bi-check-circle"></i> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam.
                        </li>
                    </ul>
                    <p className="fst-italic">
                        Step into one of the finest restaurants in the world. Dine here at Grace's Restaurant and enjoy the finest foods from across the 
                        globe.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

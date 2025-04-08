import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3>Grace's Restaurant</h3>
                            <p>
                                100 Your Street <br />
                                Your City, Your State, 12345
                                <br />
                                <br />
                                <strong>Phone: </strong> +1 123-456-7890
                                <br />
                                <strong>Email: </strong> info@example.com
                                <br />
                            </p>
                            <div className="social-links mt-3">
                                <a href="https://x.com/" target={'_blank'} className="twitter">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                                <a href="https://www.facebook.com/" target={'_blank'} className="facebook">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/" target={'_blank'} className="instagram">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="https://business.yelp.com/" target={'_blank'} className="yelp">
                                    <i className="bi bi-yelp"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#hero">Home</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#about">About</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#menu">Menu</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#specials">Specials</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#events">Events</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#reviews">Reviews</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#gallery">Gallery</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#events">Parties</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#events">Functions</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#events">Private Chefs</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#events">Ceremonies</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>
                            Sign up for updates, promos, exclusives and more.
                        </p>
                        <form action="" method="post">
                            <input type="email" name="email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>Grace's Restaurant</span>
                </strong>
                . All Rights Reserved.
            </div>
            <div className="credits">
                Designed by <a href="https://www.linkedin.com/in/michael-u-obi/" target={'_blank'}>Michael Obi</a>
            </div>
        </div>
    </footer>
  );
}

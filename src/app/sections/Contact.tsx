'use client';

import React, { useState } from 'react';
import './contact.css';
import SectionTitle from '../components/SectionTitle';

export default function Contact() {

    const initialState = {
        name: '',
        email: '',
        subject: '',
        message: '',
        validate: '',
    };

    const [text, setText] = useState(initialState);

    const handleTextChange = (e: Event | any) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    const handleSubmitContact = async (e: Event | any) => {
        e.preventDefault();

        //simple form validation
        if (
            text.name === '' ||
            text.email === '' ||
            text.subject === '' ||
            text.message === ''
        ) {
            setText({ ...text, validate: 'incomplete' });
            return;
        }

        //post request sent
        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            setText({ ...text, validate: 'loading' });

            const result = await response.json();
            if (result) {
                setText({ ...text, validate: 'success' });
                // console.log('Success:', result);
            }
        } catch (error) {
            setText({ ...text, validate: 'error' });
            // console.log('Error:', error);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Contact" subtitle="Contact us" />
            </div>

            <div data-aos="fade-up">
                <iframe style={{ border: 0, width: '100%', height: '350px' }}
                    src="https://maps.google.com/maps?width=100%&amp;height=350&amp;hl=en&amp;coord=30.2963072, -97.8977744&amp;q=102%20E%2011th%20St%2C%20Austin%2C%20Texas&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="container" data-aos="fade-up">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>
                                    100 Your Street
                                    <br />
                                    Your City, Your State 12345
                                </p>
                            </div>

                            <div className="open-hours">
                                <i className="bi bi-clock"></i>
                                <h4>Open Hours:</h4>
                                <p>
                                    Monday-Friday:
                                    <br />
                                    10:00 AM - 11:00 PM
                                </p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Phone:</h4>
                                <p>+1 123-456-7890</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">
                        <form  onSubmit={handleSubmitContact} className="contact-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" value={text.name} placeholder="Full Name" className="form-control" onChange={handleTextChange} />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="text" name="email" value={text.email} placeholder="Email Address" className="form-control" onChange={handleTextChange} />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" name="subject" value={text.subject} placeholder="Subject" className="form-control" onChange={handleTextChange} />
                            </div>
                            <div className="form-group mt-3">
                                <textarea name="message" value={text.message} placeholder="Message" rows={8} className="form-control" onChange={handleTextChange} />
                            </div>
                            <div className="my-3">
                                {text.validate === 'loading' && (
                                    <div className="loading">Loading</div>
                                )}
                                {text.validate === 'incomplete' && (
                                    <div className="error-message">Please fill in all information to send a message.</div>
                                )}
                                {text.validate === 'success' && (
                                    <div className="sent-message">Your Message Has Been Sent. Thank You!</div>
                                )}
                                {text.validate === 'error' && (
                                    <div className="error-message">Error Occurred! Please Try Again.</div>
                                )}                                
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

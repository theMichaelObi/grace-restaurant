'use client';

import React, { useState } from 'react';
import './reservation.css';
import SectionTitle from '../components/SectionTitle';

export default function Reservation() {

    const initialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: '',
    };

    const [text, setText] = useState(initialState);

    const handleTextChange = (e: Event | any) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    const handleSubmitReservation = async (e: Event | any) => {
        e.preventDefault();

        //simple form validation
        if (
            text.name === '' ||
            text.email === '' ||
            text.date === '' ||
            text.time === ''
        ) {
            setText({ ...text, validate: 'incomplete' });
            return;
        }

        //post request sent
        try {
            const response = await fetch('http://localhost:3000/api/reservation', {
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
        <section id="reservation" className="reservation">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="Reservation" subtitle="Book A Table" />

                <form onSubmit={handleSubmitReservation} className="reservation-form" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 form-group">
                            <input type="text" name="name" value={text.name} className="form-control" placeholder="Full Name" onChange={handleTextChange} />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" name="email" value={text.email} className="form-control" placeholder="Email Address" onChange={handleTextChange} />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                            <input type="text" name="phone" value={text.phone} className="form-control" placeholder="Phone Number" onChange={handleTextChange} />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="date" name="date" value={text.date} className="form-control" placeholder="Date" onChange={handleTextChange} />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="time" name="time" value={text.time} className="form-control" placeholder="Time" onChange={handleTextChange} />
                        </div>
                        <div className="col-lg-4 col-md-6 form-group mt-3">
                            <input type="number" name="people" value={text.people} className="form-control" placeholder="# of People" onChange={handleTextChange} />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea name="message" value={text.message} rows={5} className="form-control" placeholder="Message" onChange={handleTextChange} />
                    </div>
                    <div className="mb-3">
                        {text.validate === 'loading' && (
                            <div className="loading">Send Booking</div>
                        )}
                        {text.validate === 'incomplete' && (
                            <div className="error-message">Please fill in all of the details to reserve a table.</div>
                        )}
                        {text.validate === 'success' && (
                            <div className="sent-message">Your booking request was sent. We will call back or send an email to confirm your reservation. Thank you!</div>
                        )}
                        {text.validate === 'error' && (
                            <div className="error-message">Error Occurred! Please Try Again.</div>
                        )}
                    </div>
                    <div className="text-center">
                        <button type="submit">Reserve Table</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

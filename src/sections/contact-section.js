export default function ContactSection() {
    return <section id="contact" className="contact-section">
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    <div className="contact-item-wrapper">
                        <div className="row">
                            <div className="col-12 col-md-6 col-xl-12">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="lni lni-phone"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h4>Contact</h4>
                                        <p>+971 50 123 4567</p>
                                        <p>info@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-12">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="lni lni-map-marker"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h4>Address</h4>
                                        <p>Dubai</p>
                                        <p>United Arab Emirates</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-12">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="lni lni-alarm-clock"></i>
                                    </div>
                                    <div className="contact-content">
                                        <h4>Schedule</h4>
                                        <p>24 Hours / 7 Days Open</p>
                                        <p>Office time: 10 AM - 5:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="contact-form-wrapper">
                        <div className="row">
                            <div className="col-xl-10 col-lg-8 mx-auto">
                                <div className="section-title text-center">
                                    <span> Get in Touch </span>
                                    <h2>
                                        Ready to Get Started
                                    </h2>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus
                                        quiblanditiis praesentium
                                    </p>
                                </div>
                            </div>
                        </div>
                        <form action="#" className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="name" id="name" placeholder="Name" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" name="email" id="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="phone" id="phone" placeholder="Phone" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="subject" id="email" placeholder="Subject" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea name="message" id="message" placeholder="Type Message" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="button text-center rounded-buttons">
                                        <button type="submit" className="btn primary-btn rounded-full">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}
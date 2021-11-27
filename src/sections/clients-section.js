import aws from "../assets/images/client-logo/aws.png"
import google from "../assets/images/client-logo/google.png"
import facebook from "../assets/images/client-logo/facebook.png"
import react from "../assets/images/client-logo/react.png"
import instagram from "../assets/images/client-logo/instagram.webp"
import next from "../assets/images/client-logo/next.png"


export default function ClientSection() {
    return <div id="clients" className="brand-area section">
        <div className="section-title-five">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="content">
                            <h6>Meet our Clients</h6>
                            <h2 className="fw-bold">Our Awesome Clients</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-12">
                    <div className="clients-logos">
                        <div className="single-image">
                            <img src={aws} alt="Brand Logo Images" />
                        </div>
                        <div className="single-image">
                            <img src={google} alt="Brand Logo Images" />
                        </div>
                        <div className="single-image">
                            <img src={facebook} alt="Brand Logo Images" />
                        </div>
                        <div className="single-image">
                            <img src={react} alt="Brand Logo Images" />
                        </div>
                        <div className="single-image">
                            <img src={instagram} alt="Brand Logo Images" />
                        </div>
                        <div className="single-image">
                            <img src={next} alt="Brand Logo Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
import BlogOne from "../assets/images/blog/1.jpg"
import BlogTwo from "../assets/images/blog/2.jpg"
import BlogThree from "../assets/images/blog/3.jpg"
import BlogSix from "../assets/images/blog/b6.jpg"
export default function BlogSection() {
    return <div id="blog" className="latest-news-area section">
        <div className="section-title-five">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="content">
                            <h6>latest news</h6>
                            <h2 className="fw-bold">Latest News & Blog</h2>
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
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-news">
                        <div className="image">
                            <a href="#!"><img className="thumb" src={BlogOne} alt="Blog" /></a>
                            <div className="meta-details">
                                <img className="thumb" src={BlogSix} alt="Author" />
                                <span>BY ABDULRAHMAN ADIL</span>
                            </div>
                        </div>
                        <div className="content-body">
                            <h4 className="title">
                                <a href="#!"> Make your team a Design driven company </a>
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry&apos;s
                                standard.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-news">
                        <div className="image">
                            <a href="#!"><img className="thumb" src={BlogTwo} alt="Blog" /></a>
                            <div className="meta-details">
                                <img className="thumb" src={BlogSix} alt="Author" />
                                <span>BY ABDULRAHMAN ADIL</span>
                            </div>
                        </div>
                        <div className="content-body">
                            <h4 className="title">
                                <a href="#!">
                                    The newest web framework that changed the world
                                </a>
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry&apos;s
                                standard.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="single-news">
                        <div className="image">
                            <a href="#!"><img className="thumb" src={BlogThree} alt="Blog" /></a>
                            <div className="meta-details">
                                <img className="thumb" src={BlogSix} alt="Author" />
                                <span>BY ABDULRAHMAN ADIL</span>
                            </div>
                        </div>
                        <div className="content-body">
                            <h4 className="title">
                                <a href="#!">
                                    5 ways to improve user retention for your startup
                                </a>
                            </h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry&apos;s
                                standard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        ;
}

import Logo from "../assets/images/white-logo.svg";
export default function Sidebar() {
    return <div className="sidebar-left">
        <div className="sidebar-close">
            <a className="close" href="#close"><i className="lni lni-close"></i></a>
        </div>
        <div className="sidebar-content">
            <div className="sidebar-logo">
                <a href="index.html"><img src={Logo} alt="Logo" /></a>
            </div>
            <p className="text">Lorem ipsum dolor sit amet adipisicing elit. Sapiente fuga nisi rerum iusto intro.</p>

            <div className="sidebar-menu">
                <h5 className="menu-title">Quick Links</h5>
                <ul>
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Our Team</a></li>
                    <li><a href="#!">Latest News</a></li>
                    <li><a href="#!">Contact Us</a></li>
                </ul>
            </div>

            <div className="sidebar-social align-items-center justify-content-center">
                <h5 className="social-title">Follow Us On</h5>
                <ul>
                    <li>
                        <a href="#!"><i className="lni lni-facebook-filled"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i className="lni lni-twitter-original"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i className="lni lni-linkedin-original"></i></a>
                    </li>
                    <li>
                        <a href="#!"><i className="lni lni-youtube"></i></a>
                    </li>
                </ul>
            </div>

        </div>

    </div>;
}
import Logo from "../assets/images/white-logo.svg";

export default function Navbar() {

    return <section className="navbar-area navbar-nine">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                            aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse sub-menu-bar" id="navbarNine">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="page-scroll active" href="#hero-area">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#services">Services</a>
                                </li>

                                <li className="nav-item">
                                    <a className="page-scroll" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="navbar-btn d-none d-lg-inline-block">
                            <a className="menu-bar" href="#side-menu-left"><i className="lni lni-menu"></i></a>
                        </div>
                    </nav>

                </div>
            </div>

        </div>

    </section>
        ;

}
import Link from "next/link";
import { useRouter } from "next/router";

const SiteNavBar = () => {
  const router = useRouter();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg nav-container-box"
        style={
          router.pathname === "/"
            ? { backgroundColor: "#510c69" }
            : { backgroundColor: "#020c1e" }
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img src="./images/e-white.png" />
          </Link>
          <button
            className="navbar-toggler mobile-nav-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse links-container-box"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  href="/features"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="/wallet">
                      Wallet
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item contact-box">
                <a
                  className="nav-link contact-item"
                  aria-current="page"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNavBar;

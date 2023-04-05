function HomePage() {
  return (
    <>
      <header>
        <div className="top-head container">
          <div className="ml-auto text-right right-p">
            <ul>
              <li className="mr-3">
                <span className="fa fa-phone"></span>+1(21) 234 4567
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <nav className="py-3 d-lg-flex">
            <div id="logo">
              <h1>
                {" "}
                <a href="index.html">
                  <span className="fa fa-free-code-camp"></span> Kwara Tour{" "}
                </a>
              </h1>
            </div>
            <label htmlFor="drop" className="toggle">
              <span className="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="drop" />
            <ul className="menu ml-auto mt-1">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li className="">
                <a href="#about">About Us</a>
              </li>
              <li className="">
                <a href="#services">Services</a>
              </li>
              <li className="">
                <a href="#stats">Stats</a>
              </li>
              <li className="">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="">
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default HomePage;

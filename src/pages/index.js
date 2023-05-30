import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../img/logo.jpg';

export default function CampusDataPage() {
  return (
    <>
      <Head>
        <title>CampusData</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous" defer></script>

     </Head>

      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src={logoImage} alt="logo" width={200} height={200}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
         
                <Link href="/login" style={{
                  color:"gray",
                  fontSize:"22px"
                }}>Sign In</Link>
          
              </li>
              <li className="nav-item">
                <a
                  className="nav-link btn btn-primary ml-auto text-light font-weight-bold"
                  href="#"
                  style={{ backgroundColor: '#001064' }}
                >
                  Request a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="image-container">
        <div className="overlay"></div>
        <div className="container">
          <h2 style={{ color: '#fff' }}>Student Lead Generation</h2>
          <p>
            Optimized for conversion, our websites are the perfect way for your school to generate
            qualified student leads.
          </p>
          <a className="btn btn-primary" href="#">
            Schedule a Call
          </a>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Boost Your Qualified Student Leads</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id efficitur nunc.
                Pellentesque interdum tempor massa, ut ultricies erat auctor id.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id efficitur nunc.
                Pellentesque interdum tempor massa, ut ultricies erat auctor id.
              </p>
            </div>
            <div className="col-md-6">
           
            </div>
          </div>
        </div>
      </section>

      <section className="optimised">
        <div className="container">
          <h2>Optimized for Conversion</h2>
          <div className="row">
           
            <ul>
        <li>CampusData`&apos;`s SEO captures detailed searches and directs qualified students to your program listings.</li>
        <li>Your program and school pages are advertisement-free and provide information specific to your programs and courses.</li>
        <li>Student-friendly websites are designed to engage visitors and encourage them to contact programs that interest them.</li>
        <li>Our customizable contact forms help you generate the right kinds of student inquiries.</li>
        <li>CampusData`&apos;`s lead forms give you access to our high conversion rate and communication tools – wherever you want to reach students.</li>
        <li>Visitors can filter results by field of study, location, mode of study, and other specifications.</li>
        <li>Students can directly contact the schools they are interested in via our form.</li>
      </ul>
            </div>
         
        </div>
      </section>

    <section className="optimised2">
    <div className="container">
      <h2 classNamess="text-center">Your Benefits</h2>
      <ul>
        <li>Your programs are visible to students in 33+ languages.</li>
        <li>Qualified student leads are delivered straight to your team.</li>
        <li>Receive relevant student enquiries for your courses and programs.</li>
        <li>Dedicated landing pages, optimized to convert leads.</li>
        <li>No distractions - your promotional pages are yours, no external banners or advertising.</li>
      </ul>
    </div>
  </section>

      <section className="mail">
        <div className="container">
          <h2>Request a Call</h2>
          <div className="row">
            <div className="col">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <input type="number" className="form-control" id="number" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>



      <footer>
    <div className="container">
      <div className="row">
        <div className="logo">
          <a className="navbar-brand" href="">
            <Image src={logoImage} alt="logo" width={200}  height={200}/></a>
        </div>
        <div className="columns">
          <div className="row">
            <div className="col-sm-3">
              <h4>Services</h4>
              <ul>
                <li>CRM & Marketing Automation</li>
                <li>Student Recruitment</li>
                <li>Student Conversion Services</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h4>Why Us</h4>
              <ul>
                <li>Our Brands</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h4>Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Events & Webinars</li>
                <li>Media Kit</li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h4>Get in Touch</h4>
              <ul>
                <li>Email: info@example.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: Noida Sector 2 pincode:201301</li>
              </ul>
            </div>
          </div>
          <p><b>&copy; 2023 CampusData. All rights reserved.</b></p>
        </div>
      </div>
      
            </div>
    </footer>

      <style jsx>{`
        /* Add your custom styles here */
        .navbar-brand {
          font-weight: bold;
        }
        body{
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
        .navbar-dark .navbar-nav .nav-link {
          color: #fff;
        }
    
        .navbar-dark .navbar-nav .nav-link:hover {
          color: #f8f9fa;
        }
    
        .navbar-dark .navbar-nav .btn {
          background-color: #283593;
          color: #fff;
          font-weight: bold;
        }
    
        .navbar-dark .navbar-nav .btn:hover {
          background-color: #001064;
        }
        .nav-link{
            font-size: 22px;
        }
        .navbar-brand Image{
            object-fit: cover;
            width: auto;
            height: 200px;
        }
        .navbar-nav {
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        li{
            margin: 0 10px 0 10px;
        }
        .image-container {
          background-image: url("https://www.keg.com/hubfs/team-group-banner-1.jpg");
          background-size: cover;
          background-position: center;
          padding: 200px 0;
          text-align: center;
          color: #fff;
          position: relative;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
        
        .image-container h2 {
          font-size: 42px;
          font-weight: bold;
          color: #fff;
          opacity: calc(100/100);
        }
    
        .image-container p {
          font-size: 20px;
          margin-bottom: 30px;
          opacity: calc(100/100);
        }
    
        .image-container .btn {
          background-color: #283593;
          color: #fff;
          font-weight: bold;
        }
    
        .image-container .btn:hover {
          background-color: #001064;
        }
    
        .about {
          padding: 100px 0;
        }
    
        .about .row {
          align-items: center;
        }
    
        .about .col-md-6 {
          order: 2;
        }
    
        .about .col-md-6 Image {
          max-width: 100%;
          height: auto;
        }
    
        .about h2 {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 20px;
        }
    
        .about p {
          font-size: 18px;
          line-height: 1.5;
        }
    
        .optimised {
          background-color: #283593;
          color: #fff;
          padding: 100px 0;
        }
    
        .optimised h2 {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 20px;
        }
    
        .optimised p {
          font-size: 18px;
          line-height: 1.5;
        }
    
        .optimised ul {
          margin-top: 30px;
          padding-left: 20px;
        }
    
        .optimised ul li {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .optimised2 {
          background-color: white;
          color: black;
          padding: 100px 0;
        }
    
        .optimised2 h2 {
          font-size: 40px;
          font-weight: bold;
          margin-bottom: 20px;
        }
    
        .optimised2 p {
          font-size: 18px;
          line-height: 1.5;
        }
    
        .optimised2 ul {
          margin-top: 30px;
          padding-left: 20px;
        }
    
        .optimised2 ul li {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .mail {
          padding: 100px 0;
        }
    
        .mail h2 {
          font-size: 42px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }
    
        .mail form {
          max-width: 500px;
          margin: 0 auto;
          border:2px solid black;
          border-radius :12px;
          padding: 40px
        }
    
        .mail form .form-group {
          margin-bottom: 20px;
        }
    
        .mail form label {
          font-weight: bold;
        }
    
        .mail form button {
          display: block;
          margin: 0 auto;
        }
        
        .mailcontainer {
        border: 2px solid gainsboro;
        border-radius: 12px;
        padding: 20px 0 20px 0;
    }
    footer {
          background-color: #f8f9fa;
          padding: 20px 0;
          color: #333;
        }
    
        footer .logo {
          float: left;
        }
    
    
        footer .columns h4 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }
    
        footer .columns ul {
          list-style: none;
          padding-left: 0;
        }
    
        footer .columns ul li {
          margin-bottom: 5px;
        }
        footer li{
            margin: 0;
        }
      `}</style>

 </>
  );
}

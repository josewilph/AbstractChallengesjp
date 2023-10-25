import { useState } from "react";
import "./stylesheet/App.css";
import icon from "../src/pictures/icons/icon.png";
import authenticate from '../src/pictures/icons/authenticate.png'
import branches from '../src/pictures/icons/branches.png'
import manageAccount from '../src/pictures/icons/manageAccount.png'
import manageBilling from '../src/pictures/icons/manageBilling.png'
import manageOrganizations from '../src/pictures/icons/manageOrganizations.png'
import support from '../src/pictures/icons/support.png'
import Characters from "./components/Characters";
import CartNavFooter from "./components/CartNavFooter";
function App() {
  return (
    <>
      <header>
        <nav>
          <section className="section-icon">
            <img src={icon} alt="icon" className="icon" />
            <p>
              Abstract <span className="spanTitle"> | Help Center</span>
            </p>
          </section>
          <section className="section-login">
            <button className="request">Submit a request</button>
            <button className="sing">Sign in</button>
          </section>
        </nav>
      </header>
      <main>
        <section className="search-help">
          <h2>How can we help?</h2>
          <input type="search" placeholder="Search" />
        </section>

        <section className="container-characters">
        <div className="container-flex">
      <Characters img={branches} title ="Branches" info="Abstract Branches lets you manage version,and document your designs on one pleace"link="#"/>
      <Characters img={manageAccount} title="Manage your account" info="Configure your account settings ,such as your email,profiledetails ,and password." link={"#"}/>
      <Characters img={manageOrganizations} title="Manage organizations,teams and proyects"info="Use Abstract organizations ,teams ,and proyects to organize youpeople and your work."link="#"/>
      <Characters img={manageBilling} title="Manage billing" info="Change subcriptions and payment details."link="#"/>
      <Characters img={authenticate} title="Authenticate to Abstract" info="Set up and configure SSO,SCIM,and Just-inTime provisioning."link="#"/>
      <Characters img={support} title="Abstract support" info="Set up and configure SSO,SCIM,and Just-inTime provisioning."link="#"/>
          </div>
        </section>
      </main>
      <footer className="footer">
        <section className="container-nav-footer">
         <div className="footer-info">
          <CartNavFooter title="Abstract" link="Start Trial" link2="Pricing" link3="Download"/>
          <CartNavFooter  title="Resources" link="Blog"link2="Help Center" link3="Release Notes" link4="Status"/>
          <CartNavFooter  title="Community" link="Twitter" link2="LinkedIn" link3="Facebook"link4="Dribbble" link5="Podcast"/>
          <CartNavFooter title="Company" link="About Us"link2="Carears"link3="Legal"title2="Contact Us"email="info@abstract.com" />
         </div>
         <div className="container-copyringh">
          
          <div className="info-copyringh">
            <p>
            &copy Copyright2023 
            </p>
            <p>Abstract Studio Design,Inc 
            </p>
              <p>
                All rights reserved
            </p>
          </div>

          <div className="img-footer">
            <img src={icon} alt="icon" />
          </div>

         </div>
        </section>
      </footer>
    </>
  );
}
export default App;

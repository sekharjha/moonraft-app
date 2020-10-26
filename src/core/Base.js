import React from "react";
import Footer from '../Container/footer'
import Header from '../component/Header/Header'
import NavBar from '../component/NavigationBar/Navigation'
const Base = ({
  title = "My Title",
  description = "My desription",
  className = "",
  children
}) => (
  <div>
     <Header></Header>
     <NavBar></NavBar>

    <div>
      <div>
      </div>
      <div className={className}>{children}</div>
    </div>
   <Footer></Footer>
  </div>
);

export default Base;

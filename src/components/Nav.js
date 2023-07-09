import { menus } from "../data";
const Nav = () => {
  return `
      
    
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo w-20">
              <img src="/assets/images/df.png">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="/" >Home</a></li>
              <li class="scroll-to-section"><a href="/projects">Portfolio</a></li>
              <li class="scroll-to-section"><a href="/contact">Contact</a></li>
              
              <li class="scroll-to-section">
                <div class="main-red-button-hover"><a href="#contact">Contact Us Now</a></div>
              </li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  
  `;
};
export default Nav;

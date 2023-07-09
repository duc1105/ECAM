import Footer from "@/components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return `
        ${Header()}
        
        <div id="about" class="about-us section">
        <div class="container">
        
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-image">
                <img src="assets/images/about-left-image.png" alt="Two Girls working together">
              </div>
            </div>
            
            <div class="col-lg-6">
              <div class="section-heading">
                <h2>Hello 👋, I'm </br> <em class="tw-text-6xl">Anh Duc</em> </br>  <div class="tw-text-xl">Web developer</div></h2>
                <p>I'm a computer technician with a focus on web development with JavaScript. </p>
                <h1 class="tw-text-center tw-pt-14">About me</h1>
                <p class="tw-text-[#615978] tw-text-lg tw-leading-normal  ">I'm a computer technician with a great passion for programming.
                Improved my skills as a Front-End  developer
                I develop websites and applications using HTML, CSS, and JavaScript.
                I'm always improving myself with each project I get my hands on.
                I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.</p>
                
        
      
  </div>
  <div class="row  tw-mb-9 tw-pt-2">
        <!-- 1 column -->
        <div class="col-md-6">
          <ul class="">
            <li class="tw-list-none">
              <h4 class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold">Name</h4>
              <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">TRAN ANH DUC</p>
            </li>
            <li class="tw-list-none">
              <h4 class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold">Email</h4>
              <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
               trananhduca23@gmail.com
              </p>
            </li>
            <li class="tw-list-none">
              <h4
                class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
              >
                Phone
              </h4>
              <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                0325587305
              </p>
            </li>
          </ul>
        </div>
        <!-- 1 column -->
        <div class="col-md-6">
          <ul class="tw-p-0">
            <li class="tw-list-none">
              <h4
                class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
              >
                Age
              </h4>
              <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                20 Years Old
              </p>
            </li>
            <li class="tw-list-none">
              <h4
                class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
              >
                EDUCATION
              </h4>
              <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                FPT Polytechnic College
              </p>
            </li>
            <li class="tw-list-none">
              <h4
                class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
              >
                Freelance
              </h4>
              <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                Available
              </p>
            </li>
          </ul>
        </div>
        <div class="tw-pt-5">
            <a
              href="file:///C:/Users/Admin%20PC/Downloads/Tran-Anh-Duc-TopCV.vn-230223.01755.pdf"
              class="tw-py-[15px] tw-px-[42px] tw-bg-[#fd4312] tw-text-[#fff] tw-rounded-md tw-uppercase tw-no-underline tw-font-bold transition-3s hov-contact-btn "
              >Download CV</a
            >
          </div>
      </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
       ${Footer()}`
};
export default AboutPage;

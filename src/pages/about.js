import Footer from "@/components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return `
        ${Header()}
        <div class="container mx-auto  ">
        <div class=" grid  md:grid-cols-2 gap-12 mt-28 mb-10 ">
          <div>
              <p class="text-base  py-1">Hello 👋, I'm</p>
              <p class="text-7xl ">Anh Đức</p>
              <p class="text-base text-lime-500 pt-4">Web developer </p>
              <p class="tw-text-[#615978] tw-text-lg tw-leading-normal"> I'm a computer technician with a focus on web development with JavaScript.</p>
              <button class="block tw-text-white bg-green-700 px-8 py-2 w-45 ml-40  mt-20  rounded-3xl text-base  hover:tw-text-red-500 "> Download CV</button>
          </div>
          <div class="  hidden md:flex-row md:justify-end md:flex  "   >
              <img class="slider tw-w-90 tw-h-80 hov-img-shadow transition-3s hover:tw-rotate-3 " src="./image/22.jpg" alt="">
          </div>
        </div>
       </div>
       <div class="container mx-auto">
      <div class="grid  md:grid-cols-2 gap-12 mt-28 mb-10 text-center md:text-left">
        <div>
        <p class="tw-text-5xl tw-text-red-500 ">About me</p>
        <p class="tw-text-[#615978] tw-text-lg tw-leading-normal  ">I'm a computer technician with a great passion for programming.</p>
        <p class="tw-text-[#615978] tw-text-lg tw-leading-normal  ">Improved my skills as a Front-End  developer</p>
        <p class="tw-text-[#615978] tw-text-lg tw-leading-normal  ">I develop websites and applications using HTML, CSS, and JavaScript.</p>
        <p class="tw-text-[#615978] tw-text-lg tw-leading-normal ">I'm always improving myself with each project I get my hands on.</p>
        <p class="tw-text-[#615978] tw-text-lg tw-leading-normal ">I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.</p>
       
        <div class="row tw-pt-6 tw-mb-9">
            <!-- 1 column -->
            <div class="col-md-6">
              <ul class="tw-p-0">
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Name
                  </h4>
                  <p class="tw-text-[#615978] tw-text-lg tw-leading-normal">
                    TRAN ANH DUC
                  </p>
                </li>
                <li class="tw-list-none">
                  <h4
                    class="tw-text-[#222] tw-text-base tw-uppercase tw-font-bold"
                  >
                    Email
                  </h4>
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
          </div>
          
      </div>
      <div class="pt-20">
          <img class="tw-w-90 tw-h-85 ml-5 hov-img-shadow transition-3s hover:tw-rotate-3 " src="../image/hinh-anh-doremon-tha-bong-bay.jpg" alt="">
      </div>
    </div> 
  </div> 
       ${Footer()}`
};
export default AboutPage;

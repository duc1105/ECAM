import Footer from "@/components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
  return `
        ${Header()}
        <div class="container mx-auto ">
        <div class=" grid  md:grid-cols-2 gap-12 mt-28 mb-10 ">
          <div>
              <p class="text-base  py-1">Hello 👋, I'm</p>
              <p class="text-7xl ">Anh Đức</p>
              <p class="text-base text-lime-500 pt-4">Web developer </p>
              <p class="text-base pt-2 pb-5"> I'm a computer technician with a focus on web development with JavaScript.</p>
              <button class="block text-white bg-green-700 px-8 py-2 w-28 rounded-3xl text-base  hover:text-red-500 "> Contact</button>
          </div>
          <div class="  hidden md:flex-row md:justify-end md:flex  "   >
              <img class="slider w-90" src="./image/22.jpg" alt="">
          </div>
        </div>
       </div>
       <div class="container mx-auto">
      <div class="grid  md:grid-cols-2 gap-12 mt-28 mb-10 text-center md:text-left">
        <div>
        <p class="text-3xl   ">About me</p>
        <p class="text-lg py-2 ">I'm a computer technician with a great passion for programming.</p>
        <p class="text-lg py-2 ">Improved my skills as a Front-End and Back-End developer</p>
        <p class="text-lg  py-2">I develop websites and applications using HTML, CSS, and JavaScript.</p>
        <p class="text-lg py-2">I'm always improving myself with each project I get my hands on.</p>
        <p class="text-lg py-2">I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.</p>
        <p class="text-lg  text-green-500 pb-2">Here are my main skills:</p>
        <div class="justify-center md:justify-start flex ">
          <img  src="../image/1.jpg" alt="">
          <img  src="../image/2.jpg" alt="">
          <img  src="../image/3.jpg" alt="">
          <img  src="../image/4.jpg" alt="">
        </div>
          
      </div>
      <div>
          <img class="w-auto" src="../image/hinh-anh-doremon-tha-bong-bay.jpg" alt="">
      </div>
    </div> 
  </div> 
       ${Footer()}`
};
export default AboutPage;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data";
import { router, useEffect, useState } from "@/lib";

const ProjectsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return `
        ${Header()}
        
    <div class="container">
      <section class="hello">
        <div class="mx-auto pt-5 pb-10 relative">
          <h2
            class="text-center leading-4 text-2xl uppercase mb-6 text-[#222] font-bold"
          >
            <i class="fa-sharp fa-solid fa-square-check mr-2"></i>
            PORTFOLIO
          </h2>
          <p
            class="text-[#948daa] font-normal text-xl w-[59%] text-center mx-auto "
          >
            The projects I was able to complete during my time at FPT
            Polytechnic College.
          </p>
        </div>
      </section>
        
  
        
        <!-- 1 row -->
        <div class="tw-grid tw-grid-cols-3 tw-gap-3  ">
        ${data
      .map(
        (project) => `
        
          <div class=" tw-border  tw-border-black tw-rounded-xl p-2 ">
          <a href="${project.projects}">
          <div>
          <img class="hover:animate-pulse tw-rounded-xl mx-auto tw-w-[90%]" src="${project.avatar}" alt="">
          </div>
              <div class="text-2xl text-center pt-2">
                ${project.name}
              </div>
              <div class="">
                  <a class="no-underline hover:text-orange-700">
                      ${project.noidung}
                  </a>
              </div>
              </a>
            </div>
         
        `
      )
      .join("")}

      </div>
        ${Footer()}
    `;
};
export default ProjectsPage;

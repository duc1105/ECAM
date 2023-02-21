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
        
    <div class="container tw-bg-slate-50">
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
        <div class="tw-grid tw-grid-cols-3 tw-gap-3   ">
        ${data
      .map(
        (project) => `
        
          <div class=" tw-bg-slate-200 tw-border tw-h-[500px] tw-shadow-sm hover:tw-scale-105 tw-ease-in-out tw-duration-300 tw-delay-150   tw-border-black tw-rounded-xl p-2 ">
          
          <div>
          <img class="hover:animate-pulse tw-rounded-xl mx-auto tw-w-[400px] tw-h-[290px]" src="${project.avatar}" alt="">
          </div>
              <div class="text-2xl text-center pt-4 tw-text-red-500 font-mono">
                ${project.name}
              </div>
              <div class="p-1" >
                      ${project.content}
                 
              </div>
              <div class="pt-5">
              <div class="p-1 tw-absolute" >
                     <p>Ngày thực hiện : ${project.date} </p> 
                 
              </div>
              <a href="${project.projects}" target="_blank" class=" no-underline tw-pt-[35px] pl-1 tw-text-gray-700 hover:tw-text-red-500 tw-absolute ">View Github
              </a>
              </div>
              
            </div>
         
        `
      )
      .join("")}

      </div>
        ${Footer()}
    `;
};
export default ProjectsPage;

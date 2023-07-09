import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "@/lib";
import category from "@/components/category";

const ProjectsPage = () => {

  const [data1, setData1] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then(category => setData1(category))
  }, [])

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // get all projects when click one category 
  const onHandleClick = (id) => {

    if (id > 0) {
      (fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
        .then((response) => response.json())
        .then(({ projects }) => setData(projects)))
    }
    else {
      (fetch(`http://localhost:3000/projects`)
        .then((response) => response.json())
        .then((projects) => setData(projects)))
    }
  }


  return `
        ${Header()}
        <div id="portfolio" class="our-portfolio section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-heading">
                <h2>Our Recent <em>Projects</em> &amp; Case Studies <span>for Clients</span></h2>
                <span>Our Portfolio</span>
                <div>
               ${category(data1, onHandleClick)}
                
                
                
              </div>
            </div>
          </div>
        </div>
        
        <div class="tw-grid tw-grid-cols-3 tw-gap-3   ">
        ${data.map(
    (project) => `
        
          <div class="  tw-bg-slate-200 tw-border tw-h-[500px] tw-shadow-sm hover:tw-scale-105 tw-ease-in-out tw-duration-300 tw-delay-150   tw-border-black tw-rounded-xl p-2 ">
          
          <div>
          <img class="hover:animate-pulse tw-rounded-xl mx-auto tw-w-[340px] tw-h-[290px]" src="${project.avatar}" alt="">
          </div>
              <div class=" tw-text-xl text-center pt-4 tw-text-red-500 font-mono">
                ${project.name}
                
              </div>
              <div>
              ${project.General_content}
              </div>
              
              
              <div class=" text-center tw-pt-9 tw-text-red-500 font-mono"><a href="/project/${project.id}">
                Read more...
                </a>
              </div>
              
              <div class="pt-2  tw-flex">
              <div class="pt-2 tw-grid tw-grid-cols-3 tw-gap-3 ">
              <li><a href="#"><i class="fa fa-github"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram"></i></a></li>
            </div>
              <div class="p-1 tw-absolute tw-text-sm tw-ml-[190px] " >
                     <p>Start date : ${project.date} </p> 
              </div>
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

import Footer from "@/components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "@/lib";

const ProjectDetailPage = ({ id }) => {
  const [data1, setcategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}?_expand=category`)
      .then((Response) => Response.json())
      .then((data) => setcategory(data));
  }, [])
  const array = [data1]

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id)
      .then((response) => response.json())
      .then((data1) => setData(data1));
  }, []);
  const arr = [data]
  return `
  ${Header()}
  
  <div class="container  tw-mb-[150px] pricing-tables">
  
    <div class="container"
  <div class="row tw-text-center">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading">
            <h2><span>Details about the project</span></h2>
            <span>Projects</span>
          </div>
        </div>
      </div>
      <div>
      ${array.map((cate) =>
    `
        <div class="tw-flex">
          <div class="tw-mt-2  tw-mb-2  tw-mr-2 tw-px-3 tw-rounded-xl  tw-bg-orange-500">2022</div>
          <div class="tw-pt-2">|</div>
          <img class="tw-pl-3 tw-w-10 tw-h-6 tw-mt-2 tw-mr-2 " src="/image/a.png" alt="">
          <div class="tw-mt-2">
          ${cate.category?.name}
          </div>
        </div>  
        `
  ).join("")}
  
  </div>
    
   <div class="tw-text-4xl tw-font-bold tw-pt-5 ">WEBSITE</div>
   
  ${arr
      .map(
        (project) => `
        <div class="tw-font-serif tw-text-3xl tw-pl-2">
        ${project.name} 
        </div>
        <div class="tw-text-xs tw-pl-2">
          <div class="tw-pl-2">Ngày thực hiện : ${project.date} </div>
          <div class="tw-pl-2">Người thực hiện : ${project.Executor} </div>
        </div>
        
        <div>
        <img class="tw-w-[500px] tw-rounded-2xl tw-ml-[300px] tw-mt-10  " src="${project.avatar}">
        </div>
        <div class=" tw-w-[1000px] tw-font-serif tw-text-2xl tw-ml-24  tw-pt-3">
        ${project.content} 
        </div>
        <div>
              <a href="${project.link}" target="_blank" class="tw-ml-[400px] no-underline tw-pt-[35px] pl-1 tw-text-gray-700 hover:tw-text-red-500 tw-absolute ">Click here to access the project
              </a>
              </div>
        

        `)
      .join("")
    }
    
    </div>
    
    ${Footer()} 
       `;
};
export default ProjectDetailPage;

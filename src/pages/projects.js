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
        <div>
        <tbody>
            ${data
      .map(
        (project) => `
                <div class="flex p-2">
                 
                    <div class="mr-3">${project.name}</div>
                    <div>${project.noidung}</div>
                    
                </div>
            `
      )
      .join("")}
            
        </tbody>
    </div>
        ${Footer()}
    `;
};
export default ProjectsPage;

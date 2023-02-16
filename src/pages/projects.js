import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data";

const ProjectsPage = () => {
  return `
        ${Header()}
        
        {ProjectList({ projects })}
        ${Footer()}
    `;
};
export default ProjectsPage;

// import { projects } from "@/data";
import Footer from "@/components/Footer";
import Header_admin from "@/components/Header_admin";
import { useEffect, useState } from "@/lib";
const ProjectsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // điều kiện để gọi lại useEffect
  useEffect(() => {
    // 3
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        // Xóa local
        const newProjects = data.filter((project) => project.id != id);
        setData(newProjects);

        // xóa server

        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        });
      });
    }
  });
  // 2
  return `<div>
  ${Header_admin()}
      
        <h1 class="text-center pt-5 pb-3">MANAGER PRROJECTS</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Details</th>
                    <th>General content</th>
                    <th>Link</th>
                    <th>Date</th>
                    <th>Executor</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
        <tbody>
            ${data
      .map(
        (project, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${project.name}</td>
                    <td>${project.content}</td>
                    <td>${project.General_content}</td>
                    <td>${project.link}</td>
                    <td>${project.date}</td>
                    <td>${project.Executor}</td>
                    <td><img  src="${project.avatar}" alt="" class="tw-w-[70px] tw-h-[70px]"></td>
                    <td>
                        <button data-id="${project.id
          }" class="btn btn-remove btn-danger">Remove</button>
                        <a href="/admin/projects/edit/${project.id}/${project.categoryId}">EDIT</a>
                    </td>
                </tr>
            `
      )
      .join("")}
      
        </tbody>
       
    </div>
    `
    ;
};

export default ProjectsPage;



import Header_admin from "@/components/Header_admin";
import { useEffect, useState } from "@/lib"

const categories = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((Response) => Response.json())
            .then(data => setData(data));
    }, []);
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

                fetch(`http://localhost:3000/categories/${id}`, {
                    method: "DELETE",
                });
            });
        }
    });

    return `
    ${Header_admin()}
    
    <h1 class="text-center pt-5 pb-3">MANAGER PRROJECTS</h1>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
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
                <td>
                    <button data-id="${project.id
                    }" class="btn btn-remove btn-danger">Remove</button>
                    <a href="/admin/category/edit/${project.id}">EDIT</a>
                </td>
            </tr>
        `
            )
            .join("")}
  
    </tbody>
   
`
}
export default categories

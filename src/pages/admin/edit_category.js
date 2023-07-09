import Header from "@/components/Header";
import Header_admin from "@/components/Header_admin";
import { router, useEffect, useState } from "@/lib";
const edit_category = ({ id }) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/categories/" + id)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);

    useEffect(() => {
        const formEdit = document.querySelector("#form-edit");
        const name = document.querySelector("#name");


        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                name: name.value,
            };
            fetch("http://localhost:3000/categories/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/categories"))

        });
    });
    return `
    ${Header_admin()}
    <div class="text-center pt-4">
    <h2 class="pb-2 tw-text-gray-700 hover:tw-text-red-300">Edit Category</h2>
        <form id="form-edit">
        <lable class="tw-text-2xl">
            <div>
            Name
            </div>
            <input type="text" id="name" placeholder="Sửa danh mục" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2" value="${project.name}"  />
            </lable>
            <button class="btn btn-primary bg-neutral-600 w-40 h-10 rounded-2xl text-white hover:tw-text-red-500 mt-2">Sửa</button>
        </form>
    </div>
   `;
}

export default edit_category

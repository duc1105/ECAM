import axios from "axios";
import Header_admin from "@/components/Header_admin";
import { router, useEffect, useState } from "@/lib";
const ProjectEdit = ({ id }) => {
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/projects/" + id)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);

    useEffect(() => {
        const formEdit = document.querySelector("#form-edit");
        const name = document.querySelector("#name");
        const noidung = document.querySelector("#noidung");
        const avatarBlog = document.querySelector("#avatar-blog");
        const projects = document.querySelector("#projects");

        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            let avatar = "";
            avatar = avatarBlog.files.length > 0 ? await UpImage(avatarBlog.files) : avatarBlog.accept;
            const formData = {
                name: name.value,
                noidung: noidung.value,
                projects: projects.value,
                avatar,
            };
            fetch("http://localhost:3000/projects/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then(() => router.navigate("/admin/projects"))
                .catch((error) => console.log(error));
        });
    });
    const UpImage = async (files) => {
        if (files) {
            const CLOUD_NAME = "desrjsbvc";
            const PRESET_NAME = "assignment";
            const urls = [];
            const FOLDER_NAME = "ducdeptrai";
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
            //khởi tạo đối tượng xử lí biểu mẫu upload ảnh
            const formData = new FormData();
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);

            for (const file of files) {
                formData.append("file", file);

                const response = await axios.post(api, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                urls.push(response.data.secure_url);
            }
            if (urls.length == 1) {
                return urls[0];
            } else {
                return urls;
            }
        }
    };

    return `
    ${Header_admin()}
   
    <div class="text-center pt-4">
    <h2 class="pb-2 tw-text-gray-700 hover:tw-text-red-300">Edit Projects</h2>
        <form id="form-edit">
            <input type="text" id="name" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"" value="${project.name}"  />
            <input type="text" id="noidung" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2" value="${project.noidung}" />
            <input type="src" id="projects" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2" value="${project.projects}" />
            <input type="file" accept ="${project.avatar}" class="border-2 border-gray-500 w-100 h-12 rounded-2xl mb-3 p-2" id="avatar-blog" />
          
            <button class="btn btn-primary bg-neutral-600 w-40 h-10 rounded-2xl text-white hover:tw-text-red-500 mt-2">Sửa</button>
        </form>

    </div>
   `;
};

export default ProjectEdit;

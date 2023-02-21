import Header_admin from "@/components/Header_admin";
import { router, useEffect } from "@/lib";
import axios from "axios";
// import { projects } from "../../data";
const ProjectAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const name = document.querySelector("#name");
        const content = document.querySelector("#content");
        const avatarBlog = document.querySelector("#avatar-blog");
        const projects = document.querySelector("#projects");
        const date = document.querySelector("#date");


        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const avatar = await UpImage(avatarBlog.files);
            const formData = {
                name: name.value,
                content: content.value,
                projects: projects.value,
                date: date.value,
                avatar,
            };
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/projects"));
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
    <div class="text-center p-4">
    <h1>ADD PROJECTS</h1>
        <form id="form-add" class="mt-3 ">
            <lable class="tw-text-2xl">
            <div>
            Name
            </div>
            <input type="text" id="name" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="Tên Dự Án" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
            Content
            </div>
            <input type="text" id="content" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="Nội dung" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
            SRC
            </div>
            <input type="src" id="projects" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="project" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
           Date
            </div>
            <input type="date" id="date" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="Ngày thực hiện" />
            </lable>
            
            <lable class="tw-text-2xl">
            <div>
           Image
            </div>
            <input type="file" class="border-2 border-gray-500 w-100 h-15 rounded-2xl mb-3 p-2" id="avatar-blog"/>
            </lable>
            
            
            
            <button class="btn btn-primary bg-neutral-600 w-40 h-10 rounded-2xl text-white mt-2   ">Thêm</button>
        </form>
        
    </div>`;
};


export default ProjectAdd;

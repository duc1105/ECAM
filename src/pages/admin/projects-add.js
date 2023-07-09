import Header_admin from "@/components/Header_admin";
import { router, useEffect, useState } from "@/lib";
import axios from "axios";
// import { projects } from "../../data";
const ProjectAdd = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((Response) => Response.json())
            .then(data => setData(data));
    }, []);

    useEffect(() => {

        const form = document.querySelector("#form-add");
        const name = document.querySelector("#name");
        const content = document.querySelector("#content");
        const avatarBlog = document.querySelector("#avatar-blog");
        const link = document.querySelector("#link");
        const date = document.querySelector("#date");
        const id_cate = document.querySelector("#id_cate");
        const General_content = document.querySelector("#General_content");
        const Executor = document.querySelector("#Executor");


        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const avatar = await UpImage(avatarBlog.files);
            const formData = {
                name: name.value,
                content: content.value,
                link: link.value,
                General_content: General_content.value,
                date: date.value,
                Executor: Executor.value,
                categoryId: Number(id_cate.value),
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
        <select id="id_cate" class="form-select" aria-label="Default select example">
        <option selected>Category</option>
        ${data.map((categories) => `<option value="${categories.id}">${categories.name}</option>`)
            .join("")
        }
        
        
       
        </select>
            <lable class="tw-text-2xl">
            <div>
            Name
            </div>
            <input type="text" id="name" required class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="Name" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
            Content
            </div>
            <input type="text" id="content" required class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="Details" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
            General content
            </div>
            <input type="text" id="General_content" required class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="General content" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
            Link
            </div>
            <input type="src" id="link" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="project" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
           Date
            </div>
            <input type="date" id="date" required class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="Ngày thực hiện" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
            Executor
            </div>
            <input type="text" id="Executor" required class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"  placeholder="Người thực hiện" />
            </lable>
            
            <lable class="tw-text-2xl">
            <div>
           Image
            </div>
            <input type="file" required  class=" border-2 border-gray-500 w-100 h-15 rounded-2xl mb-3 p-2" id="avatar-blog"/>
            </lable>
            
            
            
            <button  class="btn btn-primary bg-neutral-600 w-40 h-10 rounded-2xl text-white mt-2    ">Thêm</button>
        </form>
        
    </div>`;
};


export default ProjectAdd;

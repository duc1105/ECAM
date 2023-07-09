import axios from "axios";
import Header_admin from "@/components/Header_admin";
import { router, useEffect, useState } from "@/lib";
const ProjectEdit = ({ id, id_cate }) => {
    // console.log(id_cate)
    const [project, setProject] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/categories`)
            .then((response) => response.json())
            .then((data) => setProject(data));

    }, []);

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}?_expand=category`)
            .then((response) => response.json())
            .then((data1) => setCategory(data1));
    }, []);
    const newProject = project.filter(newpro => newpro.id != id_cate)
    // console.log(newProject)
    const array = [category]
    console.log(array)

    useEffect(() => {
        const formEdit = document.querySelector("#form-edit");
        const name = document.querySelector("#name");
        const content = document.querySelector("#content");
        const avatarBlog = document.querySelector("#avatar-blog");
        const link = document.querySelector("#link");
        const date = document.querySelector("#date");
        const id_cate = document.querySelector("#id_cate");
        const General_content = document.querySelector("#General_content");
        const Executor = document.querySelector("#Executor");
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            let avatar = "";
            avatar = avatarBlog.files.length > 0 ? await UpImage(avatarBlog.files) : avatarBlog.accept;
            const formData = {
                name: name.value,
                content: content.value,
                link: link.value,
                date: date.value,
                General_content: General_content.value,
                categoryId: Number(id_cate.value),
                Executor: Executor.value,
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
        <select id="id_cate" class="form-select" aria-label="Default select example">
       
        
        ${newProject.map((categories) => {
        return `
            <option value="${categories.id}" selected>${categories.name}</option>
`

    }).join("")

        }
      
        ${array.map((arr) => {
            return `
            <option value="${arr.category?.id}" selected>${arr.category?.name}</option>
            `
        }).join("")}
        
       
        </select>
      
        ${array.map((load) => {
            return `
            <lable class="tw-text-2xl">
            
            <div>
            Name
            </div>
            <input type="text" id="name"  class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2"" value="${load.name}"  />
            </lable >

            <lable class="tw-text-2xl">
            <div>
            Details
            </div>
            <input type="text"  id="content" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2" value="${load.content}" />
            </lable>
            <lable class="tw-text-2xl">
            <div>
            General_content
            </div>
            <input type="text"  id="General_content" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2" value="${load.General_content}" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
            Link
            </div>
            <input type="src" id="link" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2" value="${load.link}" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
           Date
            </div>
            <input type="date" id="date"  class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2" value="${load.date}" />
            </lable>

            <lable class="tw-text-2xl">
            <div>
           Date
            </div>
            <input type="text" id="Executor"  class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2" value="${load.Executor}" />
            </lable>
            
            <lable class="tw-text-2xl">
            <div>
           Image
            </div>
            <input type="file" multiple  accept ="" value="${load.avatar}" class="border-2 border-gray-500 w-100 h-15 rounded-2xl mb-3 p-2" id="avatar-blog" />
            <div  style="width:200px">
            <img src="${load.avatar}" alt="" style="width:200px">
            </div>
            
            </lable>

            `
        })}
            
            
           
            
            
          
            <button class="btn btn-primary bg-neutral-600 w-40 h-10 rounded-2xl text-white hover:tw-text-red-500 mt-2">Sửa</button>
        </form >

    </div >
    `;
};

export default ProjectEdit;

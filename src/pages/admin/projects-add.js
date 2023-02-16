import { router, useEffect } from "@/lib";
// import { projects } from "../../data";
const ProjectAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const name = document.querySelector("#name");
        const noidung = document.querySelector("#noidung");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = {
                name: name.value,
                noidung: noidung.value,
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

    return `<div>
        <form id="form-add">
            <input type="text" id="name" class="border" placeholder="Tên Dự Án" />
            <input type="text" id="noidung" class="border" placeholder="Nội dung" />
            <button class="btn btn-primary">Thêm</button>
        </form>
    </div>`;
};

export default ProjectAdd;

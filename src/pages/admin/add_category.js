import Header from "@/components/Header";
import Header_admin from "@/components/Header_admin";
import { router, useEffect } from "@/lib";
const add_category = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const name = document.querySelector("#name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = {
                name: name.value,
            };
            fetch("http://localhost:3000/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/categories"));
        });
    });

    return `
    ${Header_admin()}
    <div>
    <h1 class="pb-2 tw-text-gray-700 hover:tw-text-red-300 tw-text-center tw-pt-12">Add Category</h1>
        <form id="form-add" class="tw-pt-12">
            <input type="text" id="name" class="border-2 border-gray-500 w-100 h-10 rounded-2xl mb-3 p-2 " placeholder="Thêm danh mục" />
            <button class="tw-ml-[550px] btn btn-primary bg-neutral-600 w-40 h-10 rounded-2xl text-white hover:tw-text-red-500 mt-2 ">Thêm</button>
        </form>
    </div>`;
};


export default add_category

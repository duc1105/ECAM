import { useEffect } from "@/lib";


const category = (categories, onClick) => {
    useEffect(() => {
        const btns = document.querySelectorAll("#btn_filter")
        for (const btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                onClick(id)
            });
        }

    })

    return  /*html*/ `
    <button class="btn btn-primary" id="btn_filter" data-id="0">ALL</button>
    ${categories.map((category) => {
        return /*html*/ `<button class="btn btn-primary tw-mx-1" id="btn_filter"  data-id="${category.id}">${category.name}</button>`
    }).join("")}
    </div>
  `
}

export default category

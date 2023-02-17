import { menuss } from "../data";
const Nav_admin = () => {
    return `
      
    
  <div class=" mx-auto flex items-center justify-between ">
  <img class="w-15 w-28 rounded-3xl ml-10 p-2" src="/image/admin.jpg" alt="">
  ${menuss
            .map(
                (admin) => `
  <ul
  id="ad"
  class="
hidden
fixed top-0 left-0
flex flex-col justify-center items-center
bg-green-500 w-full h-screen
bg-transparent md:relative md:h-auto
md:flex-row md:justify-end md:flex
"
>
  <li>
    <a
      class="block text-2xl p-4 hover:text-red-400 md:text-black no-underline "
      href="${admin.link}"
      >${admin.name}</a
    >
  </li>
</ul>
  `
            )
            .join("")}
  `;
};
export default Nav_admin;

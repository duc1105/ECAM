import { menus } from "../data";
const Nav = () => {
  return `
      
    
  <div class="container mx-auto flex items-center justify-between ">
  <img class="w-15 w-28" src="./image/df.png" alt="">
  ${menus
      .map(
        (menu) => `
  <ul
  id="menu"
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
      class="block text-2xl p-4 hover:text-red-400 md:text-black"
      href="${menu.link}"
      >${menu.name}</a
    >
  </li>
</ul>
  `
      )
      .join("")}
  `;
};
export default Nav;

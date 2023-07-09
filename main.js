

import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";
import AdminProjectPage from "./src/pages/admin/projects";
import AdminProjectAddPage from "./src/pages/admin/projects-add";
import AdminProjectEditPage from "./src/pages/admin/projects-edit";
import home_admin from "@/pages/admin/home_admin";
import PageNotFound from "@/pages/PageNotFound";
import add_category from "@/pages/admin/add_category";
import categories from "@/pages/admin/categories";
import edit_category from "@/pages/admin/edit_category";

// alt + shift + o
// option + shift + o
const app = document.querySelector("#app");

router.on("/home", () => render(HomePage, app));
router.on("/", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) => render(() => ProjectDetailPage(data), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", () => render(PostDetailPage, app));

router.on("/admin/projects", () => render(AdminProjectPage, app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage, app));
router.on("/admin/projects/edit/:id/:id_cate", ({ data }) => render(() => AdminProjectEditPage(data), app));
router.on("/admin/home_admin", () => render(home_admin, app));
router.on("/admin/add_category", () => render(add_category, app));
router.on("/admin/categories", () => render(categories, app));
router.on("/admin/category/edit/:id", ({ data }) => render(() => edit_category(data), app));

router.notFound(render(PageNotFound, app));

router.resolve();

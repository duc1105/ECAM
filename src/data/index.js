const menus = [
    { id: 1, name: "About", link: "/" },
    { id: 2, name: "Portfolio", link: "/projects" },
    { id: 3, name: "Contact", link: "/contact" },
];
const menuss = [
    { id: 1, name: "Projects", link: "/admin/projects" },
    { id: 4, name: "Category", link: "/admin/categories" },
    { id: 2, name: "ADD Category", link: "/admin/add_category" },
    { id: 3, name: "ADD Projects", link: "/admin/projects/add" },

];

const projects = [
    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Tùng" },
        ],
    }, //project
    {
        id: 2,
        name: "Dự án mẫu",
    }, // project
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        teams: [
            { id: 1, name: "Đạt" },
            { id: 2, name: "Kiên" },
            { id: 3, name: "Tùng" },
        ],
    },
];

export { projects, menus, menuss };

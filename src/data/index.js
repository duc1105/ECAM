const menus = [
    { id: 1, name: "About", link: "/about" },
    { id: 2, name: "Portfolio", link: "/projects" },
    { id: 3, name: "Contact", link: "/contact" },

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

export { projects, menus };

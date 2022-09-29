export const menu_list = [
    {
        id: "home",
        parent: "Trang Chủ",
        child: [],
        image: "",
        type: "container",
        mega_menu: true,
        route: "/"
    },
    {
        id: "services",
        parent: "Dịch vụ",
        child: [
            {child: [
                "Ép kính",
                "Sửa chữa",
                "Nâng cấp phần mềm"
            ]}
        ],
        image: "",
        type: "pages",
        mega_menu: false,
        route: "category"
    },
    {
        id: "phone_type",
        parent: "Điện thoại",
        child: [
            {child: [
                "iPhone",
                "Samsung",
                "Oppo",
                "Xiaomi",
                "Huawei",
                "Vivo",
                "Sony",
                "LG",
                "Zenfone",
                "HTC"
            ]}
        ],
        image: "",
        type: "pages",
        mega_menu: false,
        route: "category"
    },
    {
        id: "tips_faq",
        parent: "Mẹo và các câu hỏi thường gặp",
        child: [],
        image: "",
        type: "pages",
        mega_menu: false,
        route: "faq"
    },
    {
        id: "contact",
        parent: "Liên hệ",
        child: [],
        image: "",
        type: "pages",
        mega_menu: false,
        route: "contact"
    }
]

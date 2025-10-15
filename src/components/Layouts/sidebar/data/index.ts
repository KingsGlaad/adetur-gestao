import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "Menu Principal",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "Página Inicial",
            url: "/admin",
          },
        ],
      },
      {
        title: "Municipios",
        icon: Icons.CityIcon,
        items: [
          {
            title: "Cidades",
            url: "/admin/cities",
          },
          {
            title: "Eventos",
            url: "/admin/events",
          },
          {
            title: "Highlights",
            url: "/admin/highlights",
          },
        ],
      },
      {
        title: "Blog",
        icon: Icons.BlogIcon,
        items: [
          {
            title: "Posts",
            url: "/admin/posts",
          },
        ],

      }
    ],
  },
];

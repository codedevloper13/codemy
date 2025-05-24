import { BookOpenText, Calendar, CalendarHeart, CalendarPlus, ChartNoAxesCombined, Home, Inbox, Search, Settings } from "lucide-react";
export const platform = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },

    {
        title: "Courses",
        url: "/courses",
        icon: CalendarHeart,
    },

    {
        title: "My Courses",
        url: "/my-courses",
        icon: CalendarPlus,
    },
  
    {
        title: "Adjustments",
        url: "/settings",
        icon: Settings,
    },
];

export const Teacherroutes = [
    {
        title: "Courses",
        url: "/teacher",
        icon: BookOpenText,
    },
    {
        title: "Analytics",
        url: "/teacher/analytics",
        icon: ChartNoAxesCombined,
    },
]
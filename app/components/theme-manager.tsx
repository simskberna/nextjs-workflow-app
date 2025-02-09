"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

const ThemeManager = () => {
    useEffect(() => {
        const savedTheme: Theme = (localStorage.getItem("theme") as Theme) || "light";
        document.body.setAttribute("data-theme", savedTheme);
    }, []);

    return null;
};

export default ThemeManager;

module.exports = {
    mode: "jit",
    content: ["./src/**/**/*.{js,ts,jsx,tsx, html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: "class",
    theme: {
        screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
        extend: {
            colors: {
                black: { "900_3f": "var(--black_900_3f)" },
                blue_gray: {100: "var(--blue_gray_100)" },
                light_blue: { 800: "var(--light_blue_800)" },
                white: { a700: "var(--white_a700)" },
            },    
            boxShadow: { xs: "0 4px 4px 0 #0000003f" },
            fontFamily: {onest: "Onest" },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--primary) / <alpha-value>)",
                foreground: "rgb(var(--foreground) / <alpha-value>)",
                "secondary-foreground": "rgb(var(--secondary-foreground) / <alpha-value>)",
                "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
            },
            fontFamily: {
                mono: ["Fira Code", "monospace"],
            },
        },
    },

plugins: []
}
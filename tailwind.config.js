/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'Times', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        sagegreen: "#9DA993",
        darkgreen: "#535E4B",
        mistyblue: "#E3E8E9",
        nude: "#BCA88E",
        rosewater: "#E4B4B4",
        cognac: "#B5A4A3",
        sage: "#C1C2AD",
        puce: "#474241",
      }
    },
  },
  plugins: [],
};

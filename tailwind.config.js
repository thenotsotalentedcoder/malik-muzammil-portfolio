/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyber-pink": "#ff2a6d",
        "cyber-blue": "#05d9e8",
        "cyber-purple": "#9d4edd",
        "cyber-dark": "#0f0f1b",
        "cyber-teal": "#01c5c4",
        "cyber-yellow": "#f9c80e"
      },
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
        code: ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        neon: "0 0 5px theme(colors.cyber-pink), 0 0 20px theme(colors.cyber-pink)",
        "neon-blue": "0 0 5px theme(colors.cyber-blue), 0 0 20px theme(colors.cyber-blue)",
        "neon-purple": "0 0 5px theme(colors.cyber-purple), 0 0 20px theme(colors.cyber-purple)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glitch: "glitch 1s linear infinite",
        "text-flicker": "textFlicker 3s linear infinite",
      },
    },
  },
  plugins: [],
}
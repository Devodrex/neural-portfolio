/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "cyber-cyan": "#00f3ff",
        "cyber-purple": "#bc13fe",
        "cyber-pink": "#ff2d78",
        "cyber-yellow": "#ffd60a",
        "dark-base": "#020510",
        "dark-card": "#060d1f",
        "dark-border": "#0d1f3c",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        "cyber-cyan": "0 0 20px rgba(0,243,255,0.4), 0 0 60px rgba(0,243,255,0.15)",
        "cyber-purple": "0 0 20px rgba(188,19,254,0.4), 0 0 60px rgba(188,19,254,0.15)",
        "cyber-pink": "0 0 20px rgba(255,45,120,0.4)",
        "glow-sm": "0 0 10px rgba(0,243,255,0.3)",
      },
      animation: {
        "scan": "scan 3s linear infinite",
        "pulse-cyan": "pulseCyan 2s ease-in-out infinite",
        "flicker": "flicker 4s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "type": "typing 3.5s steps(40) infinite",
        "glitch": "glitch 0.3s linear",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        pulseCyan: {
          "0%, 100%": { opacity: 1, boxShadow: "0 0 20px rgba(0,243,255,0.4)" },
          "50%": { opacity: 0.7, boxShadow: "0 0 40px rgba(0,243,255,0.8)" },
        },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: 1 },
          "20%, 24%, 55%": { opacity: 0.4 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(3px, -3px)" },
          "60%": { transform: "translate(-3px, -3px)" },
          "80%": { transform: "translate(3px, 3px)" },
          "100%": { transform: "translate(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

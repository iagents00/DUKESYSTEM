/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        scan: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100%)' }
        }
      }
    },
  },
  plugins: [],
}

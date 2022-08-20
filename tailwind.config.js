/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'the-grey':'hsl(0, 0%, 40%)',
        'the-blue': 'hsl(180, 66%, 49%)',
        'the-blue-hover': 'hsl(180, 66%, 30%)',
        'the-blue-focused': 'hsl(180, 66%, 40%)',
      },
    },
  },
  plugins: [ require('@tailwindcss/forms'), ],
}


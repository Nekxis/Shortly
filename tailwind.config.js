/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'the-grey': 'hsl(0, 0%, 40%)',
        'the-light-grey': 'hsl(0, 0%, 65%)',
        'the-blue': 'hsl(180, 66%, 49%)',
        'the-blue-hover': 'hsl(180, 66%, 30%)',
        'the-blue-focused': 'hsl(180, 66%, 40%)',
      },
      height: {
        '128': '32rem',
        '192': '48rem',
        '256': '64rem',
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl':'4.2rem'
    },
  },
  plugins: [ require('@tailwindcss/forms'), ],
}


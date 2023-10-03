/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': "320px",
      'sm': "576px",
      'md': "768px",
      'lg': "992px",
      'xl': "1372px",
      '2xl': "1820px",
      '3xl': "2560px",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-img.jpeg)"
      },
      colors: {
        "primary": "#71C2EF",
        "secondary": "#7142E0",
        "mute": "#ADA7A7"
      },
    },
  },
  plugins: [],
}

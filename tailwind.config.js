module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/src/assets/images/jumbotron.png')"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
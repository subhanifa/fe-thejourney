module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFAFF',
        'black': '#0A090C',
        'blue': '#2589BD',
        'dark-blue': '#0A2463',
        'light-blue': '#3E92CC',
        'mid-blue': '#90DDF0',
        'magenta': '#922D50',
        'silver': '#C0C5C1',
        'maroon': '#D8315B',
        'tangerine': '#F79256',
        'ming': '#2C666E',
        'beige': '#F2F5DE',
        'cyan': '#4DFFF3',
      },
      backgroundImage: {
        header: "url('/src/assets/images/jumbotron.png')"
      },
      fontFamily: {
        sumvib: [ "Summber-Vibes", "Summer-Vibes" ],
        dcbold: [ "DancingScript", "cursive" ],
        dcregular: [ "DancingScript-Regular", "cursive" ],
        lobster: [ "Lobster", "cursive" ],
        pacifico:  [ "Pacifico", "cursive" ],
        patrick: [ "Patrick Hand", "cursive"] ,
        sansita: [ "Sansita Swashed", "cursive" ]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
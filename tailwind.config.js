module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFAFF',
        'dark-blue': '#0A2463',
        'magenta': '#922D50',
        'silver': '#C0C5C1',
        'black': '#0A090C',
        'red': '#D8315B',
        'light-blue': '#3E92CC',
        'tangerine': '#F79256',
        'ming': '#2C666E',
        'midblue': '#90DDF0',
        'beige': '#F2F5DE'
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
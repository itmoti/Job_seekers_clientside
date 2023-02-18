/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: [
    {
      mythemes : {
        // primary: "#a991f7",
        primary : "#cccccc" ,
        secondary: "#ffa400",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      }
    },
    "dark",
    "cupcake" 
     , 
   
  ],
  daisyui : {
    themes : [
      {
        mytheme : {
          primary : "#dbabbc" ,
      
        }
      }
    ]
  } ,
  plugins: [require("daisyui")],
}

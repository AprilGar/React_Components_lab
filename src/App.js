
import './App.css';

function App() {
  return (
    <div>

    <header>
      <nav>
        <a href='#'>About us</a>
        <a href='#'>Recipes</a>
        <a href='#'>Gallery</a>
        <a href='#'>Testimonials</a>
      </nav>
    </header>

      <h1>Welcome to the bakery!</h1>

      {/* HERO IMAGE GOES HERE */}
      <figure className='hero_image'>
        <img src='./carrot_cake.jpeg'></img>
      </figure>

      {/* SEARCH BAR GOES HERE */}
      {/* const searchBar = ()=> {
        <input 
        type={text}
        placeholder="Enter a keyword to search for..."
        />
        <button type='submit'>search</button>
      }; */}

              
        <h2>Recipes</h2>

        {/* const cakes=[
            {
            cakeName: "Lemon Drizzle",
              // image will go here 
              ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
              rating: 5
              },
            
            {
            cakeName: "Tea Loaf",
              // image will go here 
              ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
              rating: 3
              },
    
            {
            cakeName: "Brownie",
              // image will go here 
              ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
              rating: 4
              },
    
            {
            cakeName: "Carrot Cake",
              // image will go here 
              ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
              rating: 5
              }
          ]; */}

          {/* Average rating of all cakes goes here */}
          {/* Will need to map through all the ratings within the nested array, add together and then divide by number of objects within the array */}

      {/* NEW RECIPE FORM GOES HERE */}

    </div>
  );
}

export default App;

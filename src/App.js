
import './App.css';

function App() {
  return (
    <div>
      <h1>Welcome to the bakery!</h1>

      <section className="recipes">
        <h2>Recipes</h2>

        <div>
          cakes = [
            {
              cakeName: "Lemon Drizzle",
              ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
              rating: 5
            },
            
            {
              cakeName: "Tea Loaf",
              ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
              rating: 3
            },
    
            {
              cakeName: "Brownie",
              ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
              rating: 4
            },
    
            {
              cakeName: "Carrot Cake",
              ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
              rating: 5
            }
          ]

          {/* Average rating of all cakes goes here */}

        </div>
      </section>
    </div>
  );
}

export default App;

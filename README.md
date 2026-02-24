### Dependencies installed #####
---------------------------------
React + Tailwind CSS Setup
React ->npm create vite@latest app_name
Tailwind css -> npm install -D tailwindcss @tailwindcss/vite
->update vite.config.js to 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
->update index.css to @import "tailwindcss";
 
---------------------------------------
 ### Day-1 Work #####
->Created categories file to store the array of different category objects , CategoryCard for styling each card with categories details
->Use props to get the details from the categories into CategoryCard for styling the cards,
->finally render each Category card using categories in App.jsx

this work display the all the cards with each details in the Home page
-----------------------------------
### Day-2 Work ###
->created products(DB for all the items across the app) file
->created ProductCard which displays various cards in the Products page of each specific category and responsible for Whatsapp communication
->Implemented Dynamic React routing for routing based on the categoryname the user clicked on the Home Page
->Category Card uses useNavigate Hook ,navigates the user from home page to selected category products page
->created CategoryProducts which takes the name of the category the user clicked through Route using the useParams Hook  ,filters the specif products and displays the specific category products

### How They Connect  -- working of diff pages
```
User clicks "Whey Protein" card (CategoryCard.jsx)
              ↓
useNavigate() → URL becomes /category/Whey Protein
              ↓
React Router matches /category/:categoryName in App.jsx
              ↓
CategoryProducts.jsx loads from home page
              ↓
useParams() reads categoryName = "Whey Protein"
              ↓
products.filter() keeps only Whey Protein products
              ↓
Those products render on screen

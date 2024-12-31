import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
function App() {
    return (
        <div className='container'>
            <Header /> 
            <Menu />
            <Footer />
        </div>
    );
}

function Header(){
    return (
        <header className='header'>
            <h1>Fast Pizza co.</h1>
        </header>
    )
}

function Menu(){
    const pizzas = pizzaData
 return (
    <main className='menu'>
        <h2>Our Menu</h2>
        <ul className='pizzas'>
            {pizzas.map(pizza => (
                <Pizza key={pizza.name} pizzaObject={pizza} />
            ))}
        </ul>
    </main>
 )
    
}

function Pizza(props) {
    if (props.pizzaObject.soldOut) {
        return (
        <li className='pizza sold-out'>
            <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
            <div>
                <h3>{props.pizzaObject.name}</h3>
                <p>{props.pizzaObject.ingredients}</p>
                <span>SOLD OUT</span>
            </div>
            </li>
        )
    }

    return (
        <li className='pizza'>
            <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
            <div>
                <h3>{props.pizzaObject.name}</h3>
                <p>{props.pizzaObject.ingredients}</p>
                <span>{props.pizzaObject.price}</span>
            </div>
            </li>
    );
}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 11;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;
    
    return(
        <footer className='footer'>
                {isOpen ? (
                <div className='order'>
                <p>We are open until {closeHour}:00. Come visit us or order online.</p>
                <button className='btn'>Order now</button>
                </div>
                ): <p> We are closed until {openHour}:00 AM tomorrow. Come visit us soon!</p>}
        </footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root id was created in public/index.html, and it is the root element of the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
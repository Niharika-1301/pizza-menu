// //React.render(<App />);
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza pizza={pizza} key={index} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}

function Pizza({ pizza }) {
  //if (pizza.soldOut) return null;

  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>

        {/* {pizza.soldOut ? <span>SOLD OUT</span> : <sapn>{pizza.price}</sapn>} */}

        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (!isOpen) {
  //   return <p>CLOSED</p>;
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
//   const style = {};
//   return (
//     <header className="header footer">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu() {
//   const pizzas = pizzaData;
//   //const pizzas = [];
//   const numPizzas = pizzas.length;
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>

//       {numPizzas > 0 ? (
//         <ul className="pizzas">
//           {pizzas.map((pizza) => (
//             <Pizza pizzaobj={pizza} key={pizza.name} />
//           ))}
//         </ul>
//       ) : (
//         <p>We're still working on our menu, Please come back later :</p>
//       )}

//       {/* <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         photoName="pizzas/spinaci.jpg"
//         price={10}
//       />
//       <Pizza
//         name="Pizza Funghi"
//         ingredients="Tomato, mushrooms"
//         photoName="pizzas/funghi.jpg"
//         price={12}
//       /> */}
//     </main>
//   );
// }

// function Pizza(props) {
//   console.log(props);

//   if (props.pizzaObj.soldOut) return null;

//   return (
//     <li className="pizza">
//       <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />
//       <div>
//         <h3>{props.pizzaobj.name}</h3>
//         <p>{props.pizzaobj.ingredients}</p>
//         <span>{props.pizzaobj.price}</span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openhour = 10;
//   const closehour = 22;
//   const isOpen = hour >= openhour && hour <= closehour;
//   console.log(isOpen);

//   // if (hour >= openhour && hour <= closehour) alert("We're currently open!");
//   // else alert("Sorry we're closed");

//   if (!isOpen)
//     return (
//       <p>
//         We're happy to welcome you between {openhour}:00 and {closehour}:00.
//       </p>
//     );

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <div className="order">
//           <p>We're open until {closehour}:00. Come visit us or order online.</p>
//           <button className="btn">Order</button>
//         </div>
//       ) : (
//         <p>
//           We're happy to welcome you between {openhour}:00 and {closehour}:00.
//         </p>
//       )}
//     </footer>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import "./styles.css";

export default function App() {
  function Header(props) {
    return (
    <header>
      <h1>Name is: <i>{props.name}</i></h1>
    </header>
    )
  }
  

  function Footer(props) {
    return (
    <footer>
      <h1>Copyright © {props.year}</h1>
    </footer>
    )
  }

  const dishes = [
    "pb",
    "bread",
    "bananas",
    "ice cream"
  ]

  const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}));
  // console.log(dishObjects)

  // dishes.map((dish) => console.log(dish))

  function Main(props) {
    return (
      <section>
        <img src={"https://github.com/nabosh.png"} height={200} alt="profile image" />
      <p>We serve the most {props.adjective} food around.</p>
      <ul>
        {props.dishObjects.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      </section>
    )
  }

  return (
    <div className="App">
      <Header name="Susie" />
      <h1>Hello CodeSandbox</h1>
      <Main adjective="plain" dishObjects={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

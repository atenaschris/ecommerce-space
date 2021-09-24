import "./App.css";

import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Space
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <section className="grid-products">
            {data.products.map((product) => (
              <div key={product._id} className="product-wrapper">
                <figure>
                  <img src={product.image} alt={product.name} />
                  <div className="details-wrapper">
                    <h2>{product.name}</h2>
                    <ul className="row">
                      <li>
                        <i className="fas fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="far fa-star"></i>
                      </li>
                    </ul>
                    <p>{product.price} € </p>
                  </div>
                </figure>
              </div>
            ))}
          </section>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </div>
  );
}

export default App;

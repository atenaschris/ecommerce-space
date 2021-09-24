import ProductList from "./components/Product/ProductList";
import Layout from "./components/Layout/Layout";
import { Switch, Route, Redirect } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

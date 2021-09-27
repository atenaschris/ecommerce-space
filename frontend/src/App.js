
import Layout from "./components/Layout/Layout";
import { Switch, Route, Redirect } from "react-router";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import WhoWeAre from "./pages/WhoWeAre";
import CartPage from "./pages/CartPage";


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/product/:productId" component={ProductDetail}></Route>
        <Route path="/who-we-are" component={WhoWeAre} ></Route>
        <Route path="/cart/:id?/" component={CartPage} ></Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

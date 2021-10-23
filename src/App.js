import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AllProducts from './components/AllProducts/AllProducts';
import AddProduct from './components/AddProduct/AddProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <AllProducts></AllProducts>
          </Route>
          <Route path='/addproduct'>
            <AddProduct></AddProduct>
          </Route>
          <Route path="/updateproduct/:id">
            <UpdateProduct></UpdateProduct>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

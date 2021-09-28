import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import HatsPage from './pages/hatspage/hatspage.component';
import JacketsPage from './pages/jacketspage/jacketspage.component';


function App() {
  return (
    <div>
        <Switch>
        <Route  exact path='/' component={HomePage} />
        <Route  exact path='/shop' component={Shop} />
        <Route  exact path='/shop/hats' component={HatsPage} />
        <Route  exact path='/shop/jackets' component={JacketsPage} />
        </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import HatsPage from './pages/hatspage/hatspage.component';
import JacketsPage from './pages/jacketspage/jacketspage.component';
import Header from './components/header/header.component';
import SignInSignOut from './pages/signIn-signOut/signIn-signOut.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{
    constructor(){
      super();
      this.state = {
        currentUser: null
      }
    }
    unsubscribeFromAuth = null

    componentDidMount(){
      this.unsubscribeFromAuth =  auth.onAuthStateChanged( async userAuth => { //event listener for change in auth state. Like if user has login or logout
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot( snapShot => {//onSnapshot is similar to calling onAuthStateChanged; We get back snapShot object where we get the data
            this.setState({
              currentUser: {
                id: snapShot.id,   //snapShot gives id; snapShot.data() gives the rest of the data but not the id
                ...snapShot.data()
              }
            }, () => {console.log(this.state)});
          });
                                              
        }
        this.setState({currentUser: userAuth});//set currentUser equal to null as well; when user didnt login or sign out userAuth  = null
      });
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

    render(){
      return (
        <div>
          <Header currentUser = {this.state.currentUser} />
          <Switch>
            <Route  exact path='/' component={HomePage} />
            <Route  exact path='/signIn' component={SignInSignOut} />
            <Route  exact path='/shop' component={Shop} />
            <Route  exact path='/shop/hats' component={HatsPage} />
            <Route  exact path='/shop/jackets' component={JacketsPage} />
          </Switch>
        </div>
      );
    }
}

// function App() {
//   return (
//     <div>
        // <Header/>
        // <Switch>
        // <Route  exact path='/' component={HomePage} />
        // <Route  exact path='/signIn' component={SignInSignOut} />
        // <Route  exact path='/shop' component={Shop} />
        // <Route  exact path='/shop/hats' component={HatsPage} />
        // <Route  exact path='/shop/jackets' component={JacketsPage} />
        // </Switch>
//     </div>
//   );
// }

export default App;

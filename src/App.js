import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';

import User from './pages/users/user';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostView from './pages/postView/postView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
          
          <Route exact path="/users" component={User} />
          <Route exact path="/user/:id" component={PostView} />
        </Switch>
        

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Kontak from './pages/kontak'
import Pendidikan from './pages/pendidikan'
import BukuTamu from './pages/bukutamu'
 

function App() {
  return (
    <Router>
      <div className="wrap">

       
			<div className="header">
				<h1>I Wayan Mastrayasa</h1>
			</div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Tentang Saya</Link>
          </li>
          <li>
            <Link to="/kontak">Kontak</Link>
          </li>
          <li>
            <Link to="/galeri">Galeri</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/pendidikan">Pendidikan</Link>
          </li>
          <li>
            <Link to="/bukutamu">Buku Tamu</Link>
          </li> 
        </ul>
        </div>

        <div className="main">
          <div className="sidebar">
          <h2>Foto Foto</h2>
					<div className="tempat-foto">
						<img alt="img" src={require('./img/saya.jpg')} /> 
						<img alt="img" src={require('./img/saya.jpg')} /> 
						<img alt="img" src={require('./img/saya.jpg')} /> 
						<img alt="img" src={require('./img/saya.jpg')} /> 
						<img alt="img" src={require('./img/saya.jpg')} /> 
						<img alt="img" src={require('./img/saya.jpg')} /> 
						<img alt="img" src={require('./img/saya.jpg')} /> 
						<img alt="img" src={require('./img/saya.jpg')} /> 
						<img alt="img" src={require('./img/saya.jpg')} /> 
					</div><br/>
          </div>
          <div className="content">
          <Switch>
          <Route path="/about">
            <About />
          </Route>
           
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/kontak" component={Kontak} />
          <Route path="/pendidikan" component={Pendidikan} />
          <Route path="/bukutamu" component={BukuTamu} />
          <Route component={Default} />
        </Switch>
          </div><div className="clearfix"></div>
        </div> 

        <div className="footer">
				dikembangkan oleh : @mastrayasa
			</div>
      </div>
    </Router>
  );
}

 
 

function Default() {
  return <h2>Error 404</h2>;
}
 

function Portfolio() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Portfolio</h2>

      <ul>
        <li>
          <Link to={`${match.url}/kameradroid`}>Kameradroid.com</Link>
        </li>
        <li>
          <Link to={`${match.url}/infosulteng`}>
          Infosulteng.com
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a Portfolio.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>ID: {topicId}</h3>;
}

export default App;

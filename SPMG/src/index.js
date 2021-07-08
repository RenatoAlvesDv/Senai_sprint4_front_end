import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './services/auth';

import './index.css';

import Home from './pages/home/home';
import Login from './pages/login/login';
import Paciente from './pages/paciente/paciente';
import Medico from './pages/medico/medico';
import Administrador from './pages/administrador/administrador';
import NotFound from './pages/notfound/notfound';

import reportWebVitals from './reportWebVitals';

const RolePaciente = ({ component: Component }) => (
  <Route
    render={props =>
      usuarioAutenticado() && parseJwt().role === "2" ?
        <Component {...props} /> :
        <Redirect to='/' />
    }
  />
)

const RoleMedico = ({ component: Component }) => (
  <Route
    render={props =>
      usuarioAutenticado() && parseJwt().role === "3" ?
        <Component {...props} /> :
        <Redirect to='/' />
    }
  />
)

const RoleAdm = ({ component: Component }) => (
  <Route
    render={props =>
      usuarioAutenticado() && parseJwt().role === "1" ?
        <Component {...props} /> :
        <Redirect to='/' />
    }
  />
)

const routing = (
  <Router>
    <div>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} /> {/* tela - Login */}
        <RolePaciente path="/paciente" component={Paciente} /> {/* tela - paciente */}
        <RoleMedico path="/medico" component={Medico} /> {/* tela - médico */}
        <RoleAdm path="/administrador" component={Administrador} /> {/* tela - administrador */}
        <Route exact path="/notfound" component={NotFound} /> {/* Not Found */}
        <Redirect to="/notfound" />

      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

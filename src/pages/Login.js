import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionAddUser } from '../redux/actions';
import '../css/Login.css';
import Contato from '../components/Contato';

class Login extends React.Component {
state = {
  email: '',
  password: '',
  button: true,
};

handleChange = ({ target }) => {
  const { name, value } = target;
  this.setState({
    [name]: value,
  }, () => this.setState({
    button: this.validInput(),
  }));
}

validInput = () => {
  const { password, email } = this.state;
  const minPassCharacters = 6;
  return !(password.length >= minPassCharacters
    && email.includes('@')
    && email.includes('.com'));
}

handleClick = () => {
  const { email } = this.state;
  const { history, dispatch } = this.props;
  dispatch(actionAddUser(email));
  history.push('/carteira');
}

render() {
  const { button } = this.state;
  return (
    <div className="page-login">
      <div className="content-login">
        <form className="login-form">
          <h3 className="title-login"> LOGIN </h3>
          <label htmlFor="email">
            E-mail
            <input
              className="email"
              placeholder='E-mail*'
              type="text"
              id="email"
              name="email"
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              className="password"
              placeholder='Senha (6 Digitos)*'
              type="text"
              id="password"
              name="password"
              onChange={ this.handleChange }
              data-testid="password-input"
              minLength="6"
            />
          </label>
          <button
            className="btn-login"
            type="button"
            disabled={ button }
            data-testid="btn-login"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
            <Contato cssName='login-contato'/>
        </form>
      </div>
    </div>);
}
}

Login.propTypes = {
  addLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}.isRequired;

export default connect()(Login);

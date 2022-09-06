import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('testar pagina Login', () => {   
    it('Testar a pagina de login', () => {
        const { history } = renderWithRouterAndRedux(<App />)
        const { pathname } = history.location;
        expect(pathname).toBe('/');

        const inputEmail = screen.getByTestId('email-input');
        const inputPassword = screen.getByTestId('password-input');
        const btnLogin = screen.getByTestId('btn-login');
        
        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(btnLogin).toBeInTheDocument();

        //Testar se ao digitar um email e senha invalido ele ocorre um erro
        userEvent.type(inputEmail, 'victorsilva.com');
        userEvent.type(inputPassword, '123456');
        expect(btnLogin.disabled).toBe(true);

        userEvent.type(inputEmail, 'victorsilva@gmail.com');
        userEvent.type(inputPassword, '12346');
        expect(btnLogin.disabled).toBe(true);

        userEvent.type(inputEmail, 'victorsilva@gmail.com');
        userEvent.type(inputPassword, '123456');
        expect(btnLogin.disabled).toBe(false);

        userEvent.type(inputEmail, 'victorsilva@gmail.com');
        userEvent.type(inputPassword, '123456');
        userEvent.click(btnLogin)
    });
});
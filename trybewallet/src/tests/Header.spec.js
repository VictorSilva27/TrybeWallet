import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import { screen } from '@testing-library/react';
import Header from '../components/Header';
import mockData from './helpers/mockData';

export const INITIAL_STATE = {
    user: {
        email: 'victorsilva@gmail.com'
    },
    wallet: {
        currencies: [
            Object.keys(mockData),
        ],
        expenses: [
            {
            id: 0,
            value: '5',
            description: 'Açaí',
            currency: 'USD',
            method: 'Dinheiro',
            tag: 'Alimentação',
            exchangeRates: mockData,
            }
        ],
    }
}
describe('Testar Header', () => {
    it('Testar se o Header tem o email valido na tela', () => {
        renderWithRouterAndRedux(<Header />, { initialState: INITIAL_STATE });
        const emailHeader = screen.getByTestId('email-field');
        expect(emailHeader).toBeInTheDocument();
        expect(emailHeader).toHaveTextContent("victorsilva@gmail.com");
        const totalHeader = screen.getByTestId('total-field');
        expect(totalHeader).toBeInTheDocument();
        expect(totalHeader).toHaveTextContent("23.77");
    });
});

import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import { screen } from '@testing-library/react';
import { INITIAL_STATE } from './Header.spec';
import WalletForm from '../components/WalletForm';
import userEvent from '@testing-library/user-event';
import mockData from './helpers/mockData';

const INITIAL_STATE_EDIT = {
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
        editor: true,
        idToEdit: 0,
    }
}

describe('Componente WalletForm', () => {
    it('Testar Adiciona elemento', () => {
        renderWithRouterAndRedux(<WalletForm />, { initialState: INITIAL_STATE });
        const inputValue = screen.getByTestId('value-input');
        expect(inputValue).toBeInTheDocument();
        const inputDesc = screen.getByTestId('description-input');
        expect(inputDesc).toBeInTheDocument();
        const inputCurrency = screen.getByTestId('currency-input');
        expect(inputCurrency).toBeInTheDocument();
        const inputMethod = screen.getByTestId('method-input');
        expect(inputMethod).toBeInTheDocument();
        const inputTag = screen.getByTestId('tag-input');
        expect(inputTag).toBeInTheDocument();
        const inputBtn = screen.getByTestId('btn-wallet');
        expect(inputBtn).toBeInTheDocument();
        userEvent.click(inputBtn);
    });

    it('Testar Editar elemento', () => {
        renderWithRouterAndRedux(<WalletForm />,
        { initialState: INITIAL_STATE_EDIT });
        const inputValue = screen.getByTestId('value-input');
        expect(inputValue).toBeInTheDocument();
        const inputDesc = screen.getByTestId('description-input');
        expect(inputDesc).toBeInTheDocument();
        const inputCurrency = screen.getByTestId('currency-input');
        expect(inputCurrency).toBeInTheDocument();
        const inputMethod = screen.getByTestId('method-input');
        expect(inputMethod).toBeInTheDocument();
        const inputTag = screen.getByTestId('tag-input');
        expect(inputTag).toBeInTheDocument();
        const inputBtn = screen.getByTestId('btn-wallet');
        expect(inputBtn).toBeInTheDocument();
        userEvent.click(inputBtn);
    });
});
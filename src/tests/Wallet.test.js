import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';

describe('Testar Wallet Form', () => {
    it('Testar se os input estão corretos', () => {
        const { history } = renderWithRouterAndRedux(<Wallet />);
        history.push('/carteira');
        const { pathname } = history.location;
        expect(pathname).toBe('/carteira');
        // elementos presentes na tela Wallet
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
        const totalHeader = screen.getByTestId('total-field');
        expect(totalHeader).toBeInTheDocument();
        const emailHeader = screen.getByTestId('email-field');
        expect(emailHeader).toBeInTheDocument();
        const currencyHeader = screen.getByTestId('header-currency-field');
        expect(currencyHeader).toBeInTheDocument();
        const tableWallet = screen.getByTestId('table-wallet');
        expect(tableWallet).toBeInTheDocument();
        // Header
        expect(totalHeader.innerHTML).toBe("0.00");
        expect(emailHeader.innerHTML).toBe("");
        expect(currencyHeader.innerHTML).toBe("BRL");
    });
});

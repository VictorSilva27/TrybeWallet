import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import { screen } from '@testing-library/react';
import { INITIAL_STATE } from './Header.spec';
import Table from '../components/Table';
import userEvent from '@testing-library/user-event';

describe('Componente Table', () => {
    it('verificar se está com campos certos', () => {
        renderWithRouterAndRedux(<Table />, { initialState: INITIAL_STATE});
        const desc = screen.getByTestId('td-desc');
        expect(desc).toBeInTheDocument();
        const tag = screen.getByTestId('td-tag');
        expect(tag).toBeInTheDocument();
        const method = screen.getByTestId('td-method');
        expect(method).toBeInTheDocument();
        const value = screen.getByTestId('td-value');
        expect(value).toBeInTheDocument();
        const name = screen.getByTestId('td-name');
        expect(name).toBeInTheDocument();
        const cambio = screen.getByTestId('td-cambio');
        expect(cambio).toBeInTheDocument();
        const conversão = screen.getByTestId('td-conversão');
        expect(conversão).toBeInTheDocument();
        const real = screen.getByTestId('td-real');
        expect(real).toBeInTheDocument();
        const btnEdit = screen.getByTestId('edit-btn');
        expect(btnEdit).toBeInTheDocument();
        const btnDelet = screen.getByTestId('delete-btn');
        expect(btnDelet).toBeInTheDocument();
        userEvent.click(btnEdit);
        userEvent.click(btnDelet);
    });
});
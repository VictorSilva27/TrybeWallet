import React from 'react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import { INITIAL_STATE } from './Header.spec';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';

describe('Testando Api', () => {
    it('pagina Wallet', async () => {
        jest.spyOn(global, 'fetch');
        global.fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData),
        });
        renderWithRouterAndRedux(<Wallet />, { initialState: INITIAL_STATE })
    });
});
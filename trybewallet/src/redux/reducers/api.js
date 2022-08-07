export const RECEIVE_COINS = 'RECEIVE_COINS';

const receiveCoins = (currencies) => ({
  type: RECEIVE_COINS,
  currencies });

export const fetchCoins = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coins = await response.json();
    const filter = Object.keys(coins !== undefined && coins)
      .filter((coin) => coin !== 'USDT');
    dispatch(receiveCoins(filter));
  } catch (error) {
    console.log('Falhou');
  }
};

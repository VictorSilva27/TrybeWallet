import React from 'react';
import Contato from '../components/Contato';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import '../css/Table.css';
import '../css/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div className="page-wallet">
          <Header />
          <WalletForm />
          <div className='table'>
            <Table />
          </div>
        </div>
        <footer className='footer-wallet'>
          <h1> Victor Silva </h1>
          <Contato cssName='wallet-contato' />
        </footer>
      </div>
    );
  }
}

export default Wallet;

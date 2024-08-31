import React from 'react';

const TableRow = () => {
  return (
    <tr>
      <td>
        <div className='product'>
          <img src="Imagens\Produtos\Cards\Leite\abacaxisuico.png" alt="Abacaxi Suíço" height="120" width="100"/>
          <div className='info'>
            <div className='name'>Abacaxi Suíço</div>
            <div className='category'>Picolé ao Leite</div>
          </div>
        </div>
      </td>
      <td>R$1,75</td>
      <td>
        <div className='qty'>
          <button>
            <i className='bx bx-minus'></i>
          </button>
          <span>2</span>
          <button>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>R$240,00</td>
      <td>
        <button className='remove'>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

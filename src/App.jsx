import './styles.scss';

import PageTitle from './layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';

function App() {
  return (
    <>
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className='content'>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <TableRow />
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
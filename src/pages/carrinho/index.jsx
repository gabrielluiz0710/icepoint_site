import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import './styles.scss';
import PageTitle from '../../layout/PageTitle';
import Summary from '../../layout/Summary';
import TableRow from '../../layout/TableRow';

function Carrinho(){
    return(
        <>
            <Header />
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
            <Footer />
        </>
    );
}

export default Carrinho
import BarChart from "./components/BarChart";
import DataTable from "./components/DataTable";
import DonutChart from "./components/DonutChart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";


function App()
{

  return (
    <>
      <NavBar />
      <section className="container">
        <h1 className="dsv-text-primary py-3">Dashboard</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Participação nas vendas (%)</h5>
            <DonutChart />
          </div>
        </div>
        <h2 className="py-3 dsv-text-primary">Tabela de Vendas</h2>
        <DataTable />
      </section>
      <Footer />
    </>
  )
}

export default App

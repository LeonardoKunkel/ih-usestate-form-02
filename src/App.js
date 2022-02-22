import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Main from './components/Main/Main';


function App() {

  // Todo retorno con jsx que se haga, debe de tener una única etiqueta que envuelva al contenido
  return (
    // <> -> Este concepto se le conoce como fragmento
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;

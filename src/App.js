import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Main from './components/Main/Main';
import Exercise from './components/Exercise/Exercise';


function App() {

  // Todo retorno con jsx que se haga, debe de tener una única etiqueta que envuelva al contenido
  return (
    // <> -> Este concepto se le conoce como fragmento. Para generar etiquetas hermanas
    <>
      <Header />
      {/*<Main />*/}
      <Exercise />
    </>
  );
}

export default App;

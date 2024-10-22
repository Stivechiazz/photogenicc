import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



import Appheader from './components/header';
import Apphero from './components/hero';
import Appabout from './components/about';
import Appcontacts from './components/contacts';
import Appfooter from './components/footer';
import Appgallery from './components/gallery';
import AppWorks from './components/works';
import Appclients from './components/clients';

function App() {
  return (
    <div className="App">
    <header id='header'>
    <Appheader />
    </header>
    <main id='hero'>
      <Apphero />
      <Appabout />
      <Appgallery />
      <AppWorks />
      <Appclients />
      <Appcontacts />
    </main>
    <footer id='footer' >
      <Appfooter />
    </footer>
    </div>
    
  );
}

export default App;

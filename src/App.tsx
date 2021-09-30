import './assets/css/normalize.css'
import './assets/css/global.css'

import CardProfile from "./components/CardProfile";
import CardTracks from './components/CardTracks';

function App() {
  return (
    <main>
      <section className="card_wrapper">
        <CardProfile />
        <CardTracks />
      </section>
    </main>
  );
}

export default App;

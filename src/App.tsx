import './assets/css/normalize.css'
import './assets/css/global.css'

import CardProfile from "./components/CardProfile";
import CardTrack from './components/CardTrack';

function App() {
  return (
    <main>
      <section className="card_wrapper">
        <CardProfile />
        <CardTrack />
      </section>
    </main>
  );
}

export default App;

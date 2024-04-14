import './App.css';
import Header from './components/Header/header';
import Apresentation from './components/Body/Apresentation/apresentation';
import Services from './components/Body/Services/services';

function App() {
  return (
    <>

      <div class="">
        <div class="background">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
        <section className='content-body'>
          <Header />
          <Apresentation />
          <Services />
          
        </section>
      </div>

    </>
  );
}

export default App;

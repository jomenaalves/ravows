import './App.css';
import Header from './components/Header/header';
import Apresentation from './components/Body/Apresentation/apresentation';

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
          
        </section>
      </div>

    </>
  );
}

export default App;

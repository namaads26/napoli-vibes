import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import Footer from '../components/layout/Footer';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default Home;
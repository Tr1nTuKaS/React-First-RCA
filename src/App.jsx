import './App.css';
import desertImg from './assets/desert.jpg';
import BtnBlack from './components/MyBottomCard/BtnBlack';
import TopCardImage from './components/MyBottomCard/TopCardImage';
import CardBottomText from './components/MyBottomCard/CardBottomText';
import MyPicCard from './components/MyBottomCard/MyPicCard';
import MyButton from './components/MyButton';
import BottomCardContainer from './components/BottomCardContainer';
import BottomSectionHeader from './components/MyBottomCard/BottomSectionHeader';
import Tags from './components/Tags';
import TopSectionHeader from './components/TopSection/TopSectionHeader';

const topSecionData = {
  title: 'The band!',
  subTitle: 'We love music',
  para: 'We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  cardName: 'Shop',
  cardImage: 'cart.jpg',
};


function App() {
  return (
    <div className='App'>
      <section className='top container'>
        
        <MyButton text='i am button one' color='blue' />
        <MyButton text='i am button two' />
        <MyButton text='i am button' color='tomato' />
        
        <TopSectionHeader title={topSecionData.title} subTitle={topSecionData.subTitle} para={topSecionData.para} />

        {/* <h1 className='title title--main'>{topSecionData.title}</h1>
        <h6 className='title title--sub'>{topSecionData.subTitle}</h6>
        <p className='text--main'>{topSecionData.para}</p> */}
        
        <div className='people-container d-flex justify-around'>
          
          <article className='people-card'>
            <p>{topSecionData.cardName}</p>
            <img src={`img/${topSecionData.cardImage}`} alt='cart' />
          </article>
          
          <article className='people-card'>
            <p>{topSecionData.cardName}</p>
            <img src={`img/${topSecionData.cardImage}`} alt='cart' />
          </article>
          
          <article className='people-card'>
            <p>{topSecionData.cardName}</p>
            <img src={`img/${topSecionData.cardImage}`} alt='cart' />
          </article>
        </div>
      </section>

      <section className="black">
      <div className="container">
    
      <BottomSectionHeader title='Our new date' subTitle= 'Book now before its too late' />
      <BottomCardContainer />

      </div>
    </section>
    
    
    <section className='extra container'>
        <Tags
          tag1='London'
          tag2='Paris'
          tag3='Viena'
          tag4='New York'
          tagSpecial='Alaska'
        />
      </section>
      
    </div>
  );
}

export default App;

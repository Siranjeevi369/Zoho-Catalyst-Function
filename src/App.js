import logo from './logo.svg';
import './App.css';
import Entry from './Entry';
import Message from './Message';
import Destructing from './Destructing_props_state';
import NameList from './list rendering/NameList';
import Mui from './mui'
import Appbar from './Appbar'
import DataFetching from './DataFetching'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi SIRANJEEVI</h1>
        <Appbar/>
        <DataFetching/>
        < Entry  name= "raja" />
        < Entry  name = "ramu"/>
      <Message/>
      <Destructing name = "Siranjeevi" food="mushroom biriyani"/>
      <Destructing name = "Ramya" food ="Gobi fry"/>
      <NameList/>
      <Mui/>
      </header>

    </div>
  );
}

export default App;

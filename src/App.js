import Content from './components/Content';
import Header from './components/Header';
import LeftNavbar from './components/LeftNavbar'
import "./App.css"
import "./asset/CSS/grid.css"

function App() {
  return (
      <div className='app'>
        <Header />
        <div className='contentBox'>
          <LeftNavbar />
          <Content />
        </div>
      </div>
  );
}

export default App;

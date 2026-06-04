import Article from "./components/Article"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

import "./App.css"

import Cover from './assets/image-web-3-desktop.jpg'
import Retro from './assets/image-retro-pcs.jpg'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="top">
          <div className="left">
            <div className="cover-image">
              <img src={Cover} />
            </div>
            <div className="cover-texts">
              <h1>The Bright Future of Web 3.0?</h1>
              <div>
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfulling its promise?</p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>New</h2>
            <div className="articles">
              <Article />
            </div>
          </div>
        </div>
        <div className="bottom">
          <Card 
            image={Retro}
            position={"01"}
            title={"Reviving Retro PCs"}
            desc={"What happens when old PCs are give modern upgrades?"}
          />
          <Card />
          <Card />
        </div>
      </main>
    </>
  )
}

export default App
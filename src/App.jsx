import Article from "./components/Article"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="top">
          <div className="left">
            <div className="cover-image">
              Hello
            </div>
            <div className="cover-texts">
              <h1>Bright</h1>
              <div>
                <p>Hello</p>
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
          <Card />
        </div>
      </main>
    </>
  )
}

export default App
import Article from "./components/Article"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

import "./App.css"

import Cover from './assets/image-web-3-desktop.jpg'
import Retro from './assets/image-retro-pcs.jpg'
import Laptop from './assets/image-top-laptops.jpg'
import Game from './assets/image-gaming-growth.jpg'


//  Home New Popular Trending Categories 


const cards = [
  {
    image: Retro,
    position: "01",
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades? "
  },
  {
    image: Laptop,
    position: "02",
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets. "
  },
  {
    image: Game,
    position: "03",
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities."
  }
]

const articles = [
  {
    title: "Hydrogen VS Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    title: "Is VC Funding Drying Up?",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
  }
]


function App() {

  const cardLinks = cards.map((card) => {
    return (
      <Card
        image={card.image}
        position={card.position}
        title={card.title}
        desc={card.desc}
      />
    )
  })

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
              <Article
                title={"Jamila"}
                desc={"Hello world"}
              />
              <Article
                title={"Jamila"}
                desc={"Hello world"}
              />
              <Article
                title={"Jamila"}
                desc={"Hello world"}
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          {cardLinks}
        </div>
      </main>
    </>
  )
}

export default App
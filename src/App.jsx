import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Gallary from './sections/Gallery'
import Secondsection from './sections/Secondsection'
import Footer from './sections/Footer'
import Profile from './sections/Profile'

function App() {
  return (
    <div>
      <div className='bg-[#ffffff]'>
        <Nav />
        <Hero />
        <Profile />
        <Gallary />
        <Secondsection />
        <Footer />
      </div>
    </div>
  )
}

export default App
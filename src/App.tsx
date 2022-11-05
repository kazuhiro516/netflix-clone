import './App.css'
import { Row } from './components/Row'
import { Banner } from './components/Banner'
import { Nav } from './components/Nav'
import { requests } from './request'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.feactTopRated}
        isLargeRow={true}
      />
      <Row
        title="Anime Movies"
        fetchUrl={requests.feactAnimeMovies}
        isLargeRow={true}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.feactComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="Crime Movies"
        fetchUrl={requests.feactCrimeMovies}
        isLargeRow={true}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.feactRomanceMovies}
        isLargeRow={true}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.feactDocumentMovies}
        isLargeRow={true}
      />
      <Row
        title="History"
        fetchUrl={requests.feactHistoryMovies}
        isLargeRow={true}
      />
    </div>
  )
}

export default App

import styled, { createGlobalStyle } from 'styled-components'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

const GlobalStyles = createGlobalStyle`
body {
  background-color: white;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap');
  * {
  font-family: 'Roboto', sans-serif;
  }
  overflow: hidden;
}
`
const Container = styled.div`
  background-color: white;
  height: 100vh;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </>
  )
}

export default App

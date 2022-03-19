import LeftSideBar from "./Components/LeftSideBar";
import Main from "./Components/Main";
import RightSideBar from "./Components/RightSideBar";
import styled from "styled-components"

function App() {
  return (
    <Container>
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </Container>
  );
}

export default App;

const Container = styled.div`
      display:flex;
      width:100%;
` 
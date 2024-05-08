
import React from "react";
import Loader from '../../components/Loader';
import Header from "../../components/Header";
import LeftMenu from "../../components/LeftMenu";
import GridComponent from "../../components/GridComponent";
import { Container } from "./styles";
function Home() {
  return (
    <>
    <div className="App">
    <Header />
    <LeftMenu />
    <Container>
      <GridComponent />  
    </Container>
      <Loader isLoading={false}/>
    </div>
    </>
  );
}

export default Home;

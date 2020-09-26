import { Button } from "@components/Button/Button";
import * as React from "react";
import {} from '../components/Button/Button';
const Home = () => {
  return (
    <>
    <h1>Welcome to My Next App!</h1>
    <Button label={'Test Button'} onClick={() => console.log('clicked!')}></Button>
    </>
    

  )
};

export default Home;

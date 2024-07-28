import React from 'react'
import { Button } from '@mui/material';

function Test() {

  const [name, setName] = React.useState("")

  const pushUser = async() => {
    const url = "https://my-json-server.typicode.com/Shubhamsharma585/SmartSteps/profile";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    setName(json.name);
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }

  }

  return (
    <>
    <h1>Name is {name}</h1>
    <Button onClick={() => pushUser()} variant='contained'>Click</Button>
    </>
  )
}

export default Test
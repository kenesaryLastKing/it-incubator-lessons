import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Nelli } from './components/Nelli'

function App() {
  // const myFirstSubscriber = (subscriber: string, age: number) => {
  //   console.log(subscriber)
  // }
  // const mySecondSubscriber = (subscriber: string) => {
  //   console.log(subscriber)
  // }
  // const myThirdSubscriber = (subscriber: string) => {
  //   console.log(subscriber)
  // }

  return (
    <div>
      <Nelli />

      {/* <Button
        name={'YouTubeChannel-1'}
        callBack={() => myFirstSubscriber('Hello my name is Vasia', 25)}
      />
      <Button
        name={'YouTubeChannel-2'}
        callBack={() => mySecondSubscriber('Hello my name is Vania')}
      />
      <Button
        name="i am stupid button"
        callBack={() => myThirdSubscriber('like')}
      /> */}
    </div>
  )
}

export default App

import React, { useState } from 'react'

export const UseStateObj = () => {
  let [a, setA] = useState(1)
  const onClickHandler = () => {
    setA(++a)
  }
  const onClickHandlerUseState = () => {
    setA((a = 1))
  }
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>num+</button>
      <button onClick={onClickHandlerUseState}>0</button>
    </div>
  )
}

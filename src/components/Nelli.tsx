import React, { useState } from 'react'

type NelliPropsType = 'all' | 'tenge' | 'dollar'

export const Nelli = () => {
  const [money, setMoney] = useState([
    { banknote: 'dollar', nominal: 100, number: 'f12ef84jgvirj' },
    { banknote: 'dollar', nominal: 200, number: '312ef84jgvirj' },
    { banknote: 'tenge', nominal: 120, number: '717ef84jgvirj' },
    { banknote: 'dollar', nominal: 103, number: 'a15ef84jgvirj' },
    { banknote: 'tenge', nominal: 104, number: 'a13ef84jgvirj' },
    { banknote: 'dollar', nominal: 500, number: 'a1wef84jgvirj' },
    { banknote: 'tenge', nominal: 600, number: 'a12ef84egvirj' },
    { banknote: 'dollar', nominal: 700, number: 'a12ef84jevirj' },
  ])

  const [filter, setFilter] = useState<NelliPropsType>('all')

  let currentMoney = money
  if (filter === 'dollar') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === 'dollar'
    )
  }
  if (filter === 'tenge') {
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === 'tenge'
    )
  }

  const onClickFilterHandler = (sum: NelliPropsType) => {
    setFilter(sum)
  }

  return (
    <div>
      <ul>
        {currentMoney.map((cash) => {
          return (
            <li>
              <span>{cash.banknote}</span>
              <span>{cash.nominal}</span>
              <span>{cash.number}</span>
            </li>
          )
        })}
      </ul>
      <button onClick={() => onClickFilterHandler('all')}>all</button>
      <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
      <button onClick={() => onClickFilterHandler('tenge')}>tenge</button>
    </div>
  )
}

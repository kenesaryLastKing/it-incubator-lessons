type TopCarsPropsType = {
  topCars: PropsType[]
}

type PropsType = {
  manufacturer: number
  model: number
}

const topCars = [
  { manufacturer: 'BMW', model: 'm5cs' },
  { manufacturer: 'Mercedes', model: 'e63s' },
  { manufacturer: 'Audi', model: 'rs6' },
]

export const BodyBuilder = (props: TopCarsPropsType) => {
  return (
    <div>
      {props.topCars.map((cars, index) => {
        return (
          <table>
            <tr>
              <td>manufacturer</td>
              <td>model</td>
            </tr>
            <tr>
              <td>{cars.manufacturer}</td>
              <td>{cars.model}</td>
            </tr>
          </table>
        )
      })}
    </div>
  )
}

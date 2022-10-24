import * as S from './styles'

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: 'London'
    },
    {
      id: 2,
      title: 'Sydney'
    },
    {
      id: 3,
      title: 'Toronto'
    },
    {
      id: 4,
      title: 'Tokyo'
    },
    {
      id: 5,
      title: 'Paris'
    }
  ]

  return (
    <S.Wrapper>
      {cities.map((city) => (
        <S.City key={city.id}>{city.title}</S.City>
      ))}
    </S.Wrapper>
  )
}
export default TopButtons

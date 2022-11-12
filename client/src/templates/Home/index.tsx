import { Container } from 'components/Container'
import TopButtons from 'components/TopButtons'
import Input from 'components/Input'
import CurrentDate from 'components/CurrentDate'
import TemperatureAndDetails from 'components/TemperatureAndDetails'

import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <TopButtons />
      <Input />
      <CurrentDate />
      <TemperatureAndDetails />
    </Container>
  </section>
)

export default Home

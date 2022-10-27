import * as S from './styles'

import { TemperatureFull as TemperatureIcon } from '@styled-icons/fa-solid/TemperatureFull'
import { DropletOutline as DropIcon } from '@styled-icons/evaicons-outline/DropletOutline'
import { Windicss as WindIcon } from '@styled-icons/simple-icons/Windicss'

const TemperatureAndDetails = () => (
  <S.Wrapper>
    <S.Detail>Cloudy or whatever</S.Detail>
    <S.Temperature>
      <img
        src="https://openweathermap.org/img/wn/01d@2x.png"
        alt="Uma imagem que mostra o desenho de um sol representando a atual temperatura"
      />
      <S.Celsius>23º</S.Celsius>
      <S.TemperatureDetails>
        <S.Items>
          <TemperatureIcon />
          Real feel:
          <S.FeelTemp>32º</S.FeelTemp>
        </S.Items>

        <S.Items>
          <DropIcon />
          Humidity:
          <S.FeelTemp>65%</S.FeelTemp>
        </S.Items>

        <S.Items>
          <WindIcon />
          Wind:
          <S.FeelTemp>33 km/h</S.FeelTemp>
        </S.Items>
      </S.TemperatureDetails>
    </S.Temperature>
  </S.Wrapper>
)

export default TemperatureAndDetails

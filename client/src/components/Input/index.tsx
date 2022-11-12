import * as S from './styles'

import { SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline/SearchOutline'
import { LocationMarker as LocationIcon } from '@styled-icons/heroicons-outline/LocationMarker'

const Input = () => {
  return (
    <S.Wrapper>
      <S.Information>
        <S.Input type="text" placeholder="Insira o nome..." />

        <SearchIcon />
        <LocationIcon />
      </S.Information>
    </S.Wrapper>
  )
}

export default Input

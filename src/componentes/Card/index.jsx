import * as S from './styles'
import { Card as StyledCard } from './styles'

export const Card = ({text, active}) => {
    return <S.Card active={active}>{text}s</S.Card>
}

export const MeuCard = () => {
    return <StyledCard>teste   </StyledCard>
}
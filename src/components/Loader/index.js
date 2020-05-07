import React from 'react'
import { SquareLoading, SquareInside } from './styles'

export const Loading = () => {
  return (
    <SquareLoading>
      <SquareInside />
      <SquareInside />
      <SquareInside />
    </SquareLoading>
  )
}

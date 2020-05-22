/* eslint-disable react/jsx-closing-tag-location */

import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Helmet } from 'react-helmet'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return <>
    <Helmet>
      <title>Flavs usuario</title>
      <meta name='description' content='aqui puedes ver tu perfil' />
    </Helmet>
    <h1>User</h1>
    <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
  </>
}

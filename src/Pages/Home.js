import React from 'react'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='con petgram puedes encontrar tus fotos de mascotas'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.id
})

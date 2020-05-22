import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => (
  <Layout title={`Fotografia ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />

  </Layout>

)

import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Loader } from '../components/PhotoLoader/style'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderprop = ({ loading, error, data }) => {
  if (loading) return (<Loader />)
  if (loading) return <p>HA OCURRIDO UN ERROR</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      renderprop
    }
  </Query>
)

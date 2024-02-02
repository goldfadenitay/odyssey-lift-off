import React, { useEffect } from "react"
import { useQuery, gql } from "@apollo/client";
import { Layout, QueryResult } from "../components"
import { useParams } from "react-router-dom";
import { ModuleDetail } from "../components";

const GET_MODULE = gql`
  query GetModule($getModuleId: ID!, $trackId: ID!) {
    getModule(id: $getModuleId) {
      id
      title
      length
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      modules {
        id
        length
        title
      }
      title
    }
  }
`

export const Module: React.FunctionComponent<{
  children?: React.ReactNode
}> = ({ children }) => {

  const { moduleId = '', trackId = '' } = useParams();

  const { loading, error, data } = useQuery(GET_MODULE, {
    variables: {
      getModuleId: moduleId,
      trackId
    }
  })

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.getModule}/>
      </QueryResult>
    </Layout>
  )
}
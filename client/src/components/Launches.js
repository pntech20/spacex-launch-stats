import React from 'react';
import { gql, useQuery } from '@apollo/client'
import LaunchItem from './LaunchItem'

const LAUNCH_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
export default function Launch() {
  const { loading, error, data } = useQuery(LAUNCH_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <>
    <h1 className='display-4 my-3'>Launches</h1>
    {
      data.launches.map((launch, index) => (
        <LaunchItem launch={launch} key={index} />
      ))
    }
  </>
}

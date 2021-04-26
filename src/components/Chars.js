import React from 'react'
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
query Chars($page:Int) {
  characters(page:$page){
    results{
      id
      name
      image
    }
  }
}
`;

export default function Chars({page}) {
  
  const { loading, error, data } = useQuery(EXCHANGE_RATES,{variables:{page}});
 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ id, name, image }) => (
    <div key={id}>
      <p>
        {id}: {name} <img src={image} alt={name}/>
      </p>
    </div>
  ));
}
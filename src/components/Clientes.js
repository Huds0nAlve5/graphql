import { gql, useQuery } from "@apollo/client"

const retorno_clientes = gql`
{
  character(id: 1) {
    id
    name
    status
    species
    type
    gender
    origin {
      name
    }
    location {
      name
    }
    image
  }
}
`

 const Clientes = () => {
    const {loading, error, data} = useQuery(retorno_clientes)
    if(!loading)
        console.log(data.character.name)

    return(
    <>
        {!loading?data.character.name:"nao"}
    </>
    )
};

export default Clientes
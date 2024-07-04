import Table from 'react-bootstrap/Table';

function TableComponent(prop) {
    const {data}=prop;
    console.log(data);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Reciepe Name</th>
          <th>Image</th>
          <th>Ingredients</th>
          <th>Instructions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachRecepie)=>{
            const {id,name,image,ingredients,instructions}=eachRecepie;
            return(
                <>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td><img src={image} width={200} alt={name} height={200}/></td>
                   
                    <td>
                        {
                            ingredients.map((eachIngredients,index)=>{
                                return(
                                    <p>{`${index+1}.${eachIngredients}`}</p>
                                )
                            })
                    }</td>
                    <td>{instructions.map((eachInstruction)=>{
                        return(
                        <>{eachInstruction.instructions}
                        </>
                    )})}</td>
                </tr>
                </>
            )
        })}
      
      </tbody>
    </Table>
  );
}

export default TableComponent;
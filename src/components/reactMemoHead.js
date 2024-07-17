import React from 'react'

const Head = (props) => {
    const {data}=props
    console.log("head1111")
  return (
    <div>hi welcome hyderabad:{data}</div>

  )
}
export default React.memo(Head);
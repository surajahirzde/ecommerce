import { useRouteError } from "react-router-dom"


const Errorpage = () => {
    const error=useRouteError()
  return (
    <div>
      <h1>Oops,Some error is Occurred</h1>
      <p>{error.status}</p>
      <p>{error.message}</p>
    <p>{error.data}</p>
    </div>
  )
}

export default Errorpage

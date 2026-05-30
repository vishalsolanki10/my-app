import { Link } from "react-router-dom"

function Home (props:any) {
  return (
		<div>
			<h1>
				Hello Home Page
			</h1>
			<Link to="/dashboard"> Dashboard </Link>
			
		</div>
  )
}
export default Home
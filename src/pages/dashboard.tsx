import { Link } from "react-router-dom"

function Home (props:any) {
  return (
		<div>
			<h1>
				Hello Dashboard Page
			</h1>
			<Link to="/login"> Login </Link>
			
		</div>
  )
}
export default Home
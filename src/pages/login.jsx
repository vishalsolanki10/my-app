import { useState } from "react"

useState

function Login(props) {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

	const handleSubmit =(e)=>{
				e.preventDefault()

		    // Basic validation
    if (!form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    console.log("Login Data:", form);
	}

	const handleChange = (e) =>{
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<input 
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
				/>
				<br /><br />
				<input
					type = "password"
					name="password"
					value ={form.password}
					onChange = {handleChange}
				/>
				<br /><br />
			<button type="submit">Submit</button>
			<button> 
				<Link to="/dashboard"> back </Link>
			</button>
			</form>
		</div>
	)
}

export default Login 
import  {  useState } from 'react'
import { ShopContext } from '../context/ShopContext'

import {Link, useNavigate} from "react-router-dom"

import { LuInfo } from 'react-icons/lu'
import { useAuth } from '../context/AuthContext'


export default function Auth() {
	const [loading, setLoading] = useState(false)
	const [err, setErr] = useState("")

	const { register, login } = useAuth()
	
	 
    return (
      <>
       
        <section className="w-full min-h-screen flex flex-col justify-center items-center">
				<AuthForm register={register} login={login} err={err} setErr={setErr} loading={loading} setLoading={setLoading} />
				</section>
			</>
		);
  }

const AuthForm = ({register, login, err, setErr, loading, setLoading}) => {

	
   const navigate = useNavigate();
		

    const [authForm, setAuthForm] = useState("sign in");

		const [data, setData] = useState({
			username: "",
			email: "",
			password: "",
		});
	console.log(data)

		const onChangeHandler = (e) => {
			
			setData(data => ({...data, [e.target.name]: e.target.value}));
		};

		// useEffect(() => {
		//   console.log(data)
		// },[data])

		const onAuthenticate = async (e) => {
			e.preventDefault();
			setErr('')
			setLoading(true)
			console.log("CCCCCC")

			try {
				if (authForm === "sign in") {
					await login(data.email, data.password)
					navigate("/");
				} else {
					console.log("DDDDD");
					console.log(data.email);
					await register(data.username, data.email, data.password);
					navigate("/")
			}
			} catch (error) {
				authForm === "sign in" ? setErr(error.response?.data?.message || "Login failed. Please Try again") : 
				setErr(error.response?.data?.message || "Registration failed") 
			} finally {
				setLoading(false)
			}
			
		
		};
  return (
		<form
			onSubmit={onAuthenticate}
			className="w-full max-w-[330px] rounded-xl bg-white p-4 shadow-md">
			<div className="w-full my-4">
				<h4 className="text-center text-2xl capitalize">{authForm} </h4>
				<p className="text-zinc-700 text-sm text-center">
					Welcome to the{" "}
					<Link to="/" className="text-lg text-red-700 font-semibold italic">
						wumart
					</Link>{" "}
					online stores
				</p>
			</div>
			<div className="flex flex-col gap-2  w-full">
				{authForm === "sign up" && (
					<>
						<FormInput
							type="username"
							onChangeHandler={onChangeHandler}
						  data={data}
						  
						/>
					</>
				)}

				<FormInput type="email" onChangeHandler={onChangeHandler} data={data} />

				<FormInput
					type="password"
					onChangeHandler={onChangeHandler}
					data={data}
				/>
		  </div>
		  {err && (<p className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 mt-2 rounded mb-4'>{err}</p>)}

			<button className="mt-1 h-10 w-fit bg-red-600 px-6 rounded-full font-semibold text-white">
				{authForm === "sign up" ? (
					<span> {loading ? "Creating account" : "Sign up"}</span>
				) : (
					<span>Sign in</span>
				)}
			</button>

			{authForm === "sign up" ? (
				<p className="text-center mt-4 border-t pt-4 border-zinc-200 text-zinc-600 text-sm gap-2 justify-center flex w-full underline">
					Already have an account?{" "}
					<span className="text-red-800" onClick={() => setAuthForm("sign in")}>
						{" "}
						Login
					</span>
				</p>
			) : (
				<p className="text-center mt-4 border-t pt-4 border-zinc-200 text-zinc-600 text-sm gap-2 justify-center flex w-full underline">
					Don't have an account?{" "}
					<span className="text-red-800" onClick={() => setAuthForm("sign up")}>
						Sign up
					</span>
				</p>
			)}
		</form>
	);
  }


const FormInput = ({onChangeHandler, data, type }) => {
  return (
		<label htmlFor="name" className="flex flex-col gap-2 my-2">
			<span className="text-sm tracking-wider capitalize">{type}</span>
      <div className="flex gap-2 items-center rounded-full p-2 bg-zinc-100 pl-4 outline-none justify-between">
       
				<input
					onChange={onChangeHandler}
					
					name={type}
					value={data.type}
					placeholder={
						type === "password"
							? "**********"
							: type === "username"
							? "yusuf_ade"
							: "chidiyusuf@mail.com"
					}
				  
					required
					className="outline-none"
				/>
				<LuInfo />
			</div>
		</label>
	);
}


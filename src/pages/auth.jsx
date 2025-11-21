import React, { useContext,  useState } from 'react'
import { Footer } from '../components/layout/footer'
import { ShopContext } from '../context/ShopContext'
import aixos from "axios"
import {useNavigate} from "react-router-dom"

export default function Auth() {
  const navigate = useNavigate()
  const { url, setToken } = useContext(ShopContext)
  const [state, setState] = useState("sign in")

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  
  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(data => ({ ...data, [name]: value }))
  }

  // useEffect(() => {
  //   console.log(data)
  // },[data])

  const onLogin = async (e) => {
    e.preventDefault()

    let newUrl = url
    if (state === "sign in") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const res = await aixos.post(newUrl, data)
    if (res.data.success) {
      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)
      navigate("/")
    } else {
      alert(res.data.message)
    }

  }

    // const onSubmitHandler = (e) => {
    //   e.preventDefault()

    //   const formData = new FormData()
    //   console.log(data)
    // }


    return (
      <>
        <section className='w-full h-[90vh] flex flex-col justify-center items-center'>
          <form onSubmit={onLogin} className='w-full max-w-[280px]'>
            <div className='w-full my-8'>
              <h4 className='text-center text-2xl capitalize'>{state}</h4>
            </div>
            <div className='flex flex-col gap-2  w-full'>
              {state === "sign up" && (
                <>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Username :</label>
                    <input
                      onChange={onChangeHandler}
                      type="text"
                      name="name"
                      value={data.name}
                      placeholder='e.g johndoe@mail.us'
                
                      className='border w-full  border-slate-900/20 p-2 pl-4 rounded-md outline-none'
                    />
                  </div>
                </>
              )}
                
              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Email :</label>
                <input
                  onChange={onChangeHandler}
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder='e.g. johndoe@mail.us'
                  required
                  className='border border-slate-900/20 p-2 pl-4 rounded-md outline-none'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="name">Password :</label>
                <input
                  onChange={onChangeHandler}
                  type="password"
                  name="password"
                  value={data.password}
                  placeholder='e.g. **********'
                  required
                  className='border border-slate-900/20 p-2 pl-4 rounded-md outline-none'
                />
              </div>
            </div>

            <button
          
              className='mt-6 h-10 bg-green-600 w-full rounded-sm text-white'>
              {state === "sign up" ? (<span>Sign up</span>) : (<span>Sign in</span>)}
            </button>

        

          
          </form>
          {
            state === "sign up" ? (<p className='text-center mt-4 text-zinc-600'>Already have an account? <span className='text-green-800' onClick={() => setState("sign in")}>{" "} Login</span></p>) : (<p className='text-center mt-4 text-zinc-600'>Don't have an account? <span className='text-green-800' onClick={() => setState("sign up")}>Sign up</span></p>)
          }
        </section>


        <Footer />
      </>
    )
  }


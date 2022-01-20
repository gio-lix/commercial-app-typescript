import {FC, useEffect, useRef, useState} from "react"
import {useRouter} from "next/router";
import RegisterForm from "./RegisterForm";

interface ILoginForm {

}

const LoginForm: FC<ILoginForm> = () => {
    const [loginForm, setLoginForm] = useState(true);
    const loginFocus = useRef<HTMLInputElement>(null);
    const router = useRouter()
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    useEffect(() => {
        if (loginFocus.current) {
            loginFocus.current.focus()
        }
    }, []);


    return (
        <>
            {loginForm ? (
                <div className='relative grid grid-cols-5'>
                    <div className='col-span-5 md:col-span-3'>
                        <p className='absolute -top-10 right-0 font-bold text-2xl'>Login</p>
                        <form onSubmit={handleSubmit} className='flex flex-col space-y-6  mt-3 px-10'>
                         <span className='flex flex-col'>
                               <label htmlFor="username" className='text-sm font-semibold text-gray-500'>Username</label>
                               <input ref={loginFocus} type="text" id='username' className='border border-gray-400 outline-none px-2'/>
                         </span>
                            <span className='flex flex-col'>
                               <label htmlFor="email"
                                      className='text-sm font-semibold text-gray-500'>Email</label>
                               <input type="email" id='email'
                                      className='border border-gray-400 outline-none px-2'/>
                          </span>
                            <div className='-translate-y-6'>
                                <button className='text-sm font-semibold text-gray-400 hover:text-green-700'>forget password ?</button>
                            </div>
                            <button type='submit' className='bg-green-600 hover:bg-green-700 text-white font-bold px-2 py-1'>Submit</button>
                            <span>
                              <p className='text-gray-500'>
                                  Dont&apos;t have an account?
                                  <button onClick={() => setLoginForm(false)} className='text-black ml-2 font-semibold'>
                                      Sign up
                                  </button>
                              </p>
                          </span>
                        </form>

                    </div>
                    <div className='col-span-5 md:col-span-2 flex flex-col space-y-4 mt-[30px] '>
                        <button  className='w-full h-10 font-bold border  text-gray-500 hover:bg-red-100 border-red-400'>
                            Sign with Google
                        </button>
                        <button  className='w-full  h-10  hover:bg-blue-700 font-bold text-white bg-blue-400'>
                            Sign with Facebook
                        </button>
                    </div>
                </div>
            ) : (
               <RegisterForm setLoginForm={setLoginForm} />
            )}

        </>
    )
}
export default LoginForm
import {FC, useEffect, useRef} from "react"

interface IRegisterForm {
    setLoginForm: (item: boolean) => void
}
const RegisterForm: FC<IRegisterForm> = ({setLoginForm}) => {
    const registerFocus = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (registerFocus.current) {
            registerFocus.current.focus()
        }
    }, []);

    const handleSubmitRegister = (e: any) => {
        e.preventDefault()
    }

  return (
      <div className='relative'>
          <p  className='absolute -top-10 right-0 font-bold text-2xl'>Registration</p>
          <form onSubmit={handleSubmitRegister} className='flex flex-col space-y-6 mt-3 px-10'>
                        <span className='flex flex-col'>
                              <label htmlFor="username" className='text-sm font-semibold text-gray-500'>Username</label>
                              <input ref={registerFocus} type="text" id='username' className='border border-gray-400 outline-none px-2'/>
                        </span>
              <span className='flex flex-col'>
                              <label htmlFor="email"
                                     className='text-sm font-semibold text-gray-500'>Email</label>
                              <input type="email" id='email'
                                     className='border border-gray-400 outline-none px-2'/>
                       </span>
              <span className='flex flex-col'>
                              <label htmlFor="password" className='text-sm font-semibold text-gray-500'>Username</label>
                              <input type="password" id='password' className='border border-gray-400 outline-none px-2'/>
                       </span>
              <span className='flex flex-col'>
                              <label htmlFor="confirmPassword" className='text-sm font-semibold text-gray-500'>Username</label>
                              <input type="password" id='confirmPassword' className='border border-gray-400 outline-none px-2'/>
                       </span>

              <button type='submit' className='bg-green-600 hover:bg-green-700 text-white font-bold px-2 py-1'>Submit</button>
              <span>
                         <p className='text-gray-500'>
                             Already have an account?
                             <button onClick={() => setLoginForm(true)} className='text-black ml-2 font-semibold'>
                                 Sign in
                             </button>
                         </p>
                       </span>
          </form>
      </div>
  )
}
export default RegisterForm
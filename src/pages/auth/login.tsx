//icons
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

//google auth
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import {  useAuthState } from 'react-firebase-hooks/auth'

//facebook auth
import { FacebookAuthProvider } from 'firebase/auth'

//route
import { useRouter } from 'next/router'

//effect
import { useEffect } from 'react'


const Login = () => {

    const [user, loading] = useAuthState(auth) 

    const route = useRouter()

    //sign in with google
    const googleProvider = new GoogleAuthProvider()

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
            route.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    //sign in with facebook
    const fbProvider = new FacebookAuthProvider()

    const FacebookProvider = async () => {
        try {
            const result = await signInWithPopup(auth, fbProvider)
            console.log(result)
            route.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(user) {
            route.push('/dashboard')
        } else {
            console.log('login')
        }
    },[user])

    return (
        <div className='shadow-xl mt-32 p-10 text-gray-700 rounded-lg'>
            <h2 className='text-3xl font-medium'>Join with us</h2>
            <div className='py-4'>
                <h3 className='py-4'>Sign in with one of the providers</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <button onClick={GoogleLogin} className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2'> <FcGoogle size="20"/> Sign in with Google</button>
                <button  className='text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2'> <AiFillFacebook className="text-blue-500" size="20"/>Sigh in with Facebook</button>
            </div>
        </div>
    )
}

export default Login
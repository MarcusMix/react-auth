//google auth
import {  useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'

//routes
import { useRouter } from 'next/router'

const Dashboard = () => {

    const [user, loading] = useAuthState(auth)

    const route = useRouter()

    if(loading) return <h1>loading...</h1>
    if(!user) route.push('/auth/login')
    if(user) 
    return (
    <div>
        <h1>Bem vindo ao seu dashboard {user?.displayName}</h1>
        <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
    )
}

export default Dashboard
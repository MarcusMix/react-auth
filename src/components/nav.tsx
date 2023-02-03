import Link from "next/link"

//google auth
import {  useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'

const Nav= () => {

    const [user, loading] = useAuthState(auth)


    return (
        <nav className="flex justify-between items-center py-10">
            <Link href={"/"}>Logo</Link>
            <ul>
                {!user && (
                    <a className="py-2 px-4 text-lg bg-teal-700 rounded-lg font-medium ml-9">
                    <Link href={"/auth/login"}>
                        Join now
                    </Link>
                    </a>
                    )}

                {user && (
                    <div>
                        <Link href={'/dashboard'}>
                            <h2>{user.displayName}</h2>
                            <img src={user.providerData[0].photoURL} alt="avatar" referrerPolicy="no-referrer" className="rounded-" />
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default Nav
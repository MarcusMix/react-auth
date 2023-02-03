import { ReactNode } from 'react'
import Nav from './nav'

interface IChildren {
    children: ReactNode
}

const Layout = ({children}:IChildren) => {
    return (
        <div className='mx-14'>
            <Nav/>
            <main>{children}</main>
        </div>
    )
}

export default Layout
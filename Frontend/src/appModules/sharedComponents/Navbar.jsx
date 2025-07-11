import { Link } from "react-router-dom"

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'User', href: '/userLogin', current: false },
  { name: 'Admin', href: '/adminLogin', current: false },
  { name: 'About', href: '#', current: false },
]


export default function Navbar() {
  return (
   <nav className="flex justify-between items-center bg-indigo-200 h-10 px-5">
    <div>
        <Link to="/">Logo</Link>
    </div>
    <div>
        <ul className="flex gap-5">
            {navigation.map((item,index)=>(
                <li key={index}>
                    <Link to={item.href}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </div>
   </nav>
  )
}
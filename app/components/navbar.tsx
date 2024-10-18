import Link from "next/link"


function Navbar (){
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-center space-x-4">
                <li><Link href="#education"className="hover:text-gray-300">Education</Link></li>
                <li><Link href="#skills"className="hover:text-gray-300">Skills</Link></li>
                <li><Link href="#experience"className="hover:text-gray-300">Experience</Link></li>
                <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
             </ul>
        </nav>
    )
}
export default Navbar
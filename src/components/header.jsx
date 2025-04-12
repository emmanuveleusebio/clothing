import '../styles/header.css'

export default function Header(){
    return(
        <div className='header'>
            <div className="brandNameSec">
                <h3 className='brandName'>Clothing</h3>
            </div>
            <div className="navBar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Project</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="connect">
                <button className='chatBtn'>Lets Chat</button>

            </div>
        </div>
    )
}
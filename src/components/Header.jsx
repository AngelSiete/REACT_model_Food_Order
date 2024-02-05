import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'

export default function Header(){
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="logo" />
                <h1>React - Food Order </h1>
            </div>
            <nav><Button>Cart</Button></nav>
        </header>
    )
}
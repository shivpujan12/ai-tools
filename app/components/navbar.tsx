import style from "../styles/navbar.module.css"
export default function NavBar(){
    return (
      <header id="navbar" className={`${style.navbar} text-center display-4 border p-2`}>
        AI Library
      </header>
    )
  }
import style from "../styles/navbar.module.css"
export default function NavBar(){
    return (
      <header id="navbar" className={`${style.navbar} text-center text-2xl border p-2`}>
        AI Library
      </header>
    )
  }
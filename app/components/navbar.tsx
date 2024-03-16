import style from "../styles/navbar.module.css"
import Image from "next/image";
export default function NavBar(){
    return (
      <header id="navbar" className={`${style.navbar} text-center text-2xl border p-2`}>
          <div className={`p-1`}><Image src={"/menu.png"} alt="Search" width={24} height={24} /></div>
          <div className={`p-1 ${style.logo}`}>AI Library</div>
          <div className={`${style.searchContainer}`}>
          <div className={`${style.search} border-2 rounded-full pl-4 pr-2 pt-1 pb-1 text-sm`}>
              <input type="text" placeholder={"Looking for any specific tool?"} />
              <Image src={"/search.png"} alt="Search" width={24} height={24} />
          </div>
          </div>
      </header>
    )
  }
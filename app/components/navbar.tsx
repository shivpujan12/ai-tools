import style from "../styles/navbar.module.css"
import Image from "next/image";
import * as React from "react";
import BubbleChartSharpIcon from '@mui/icons-material/BubbleChartSharp';

export default function NavBar(){
    return (
        <header id="navbar" className={`${style.navbar} text-center text-2xl border p-2`}>
            {/*logo*/}
            <div className={`p-1 ${style.logo}`}>
                <BubbleChartSharpIcon/> EtherAi
            </div>
            {/*serch box*/}
            <div className={`${style.searchContainer}`}>
                <div className={`${style.search} border-2 rounded-full pl-4 pr-2 pt-1 pb-1 text-sm hidden`}>
                    <input type="text" placeholder={"Looking for any specific tool?"} />
                  <Image src={"/search.png"} alt="Search" width={24} height={24} />
                </div>
            </div>
        </header>
    )
  }
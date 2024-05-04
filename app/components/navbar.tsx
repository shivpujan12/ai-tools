import style from "../styles/navbar.module.css"
import Image from "next/image";
import * as React from "react";
import BubbleChartSharpIcon from '@mui/icons-material/BubbleChartSharp';
import SearchIcon from "@mui/icons-material/Search";

export default function NavBar(){
    return (
        <header id="navbar" className={`${style.navbar} text-center text-2xl p-2`}>
            {/*logo*/}
            <div className={`p-1 ${style.logo}`}>
                <BubbleChartSharpIcon/> EtherAi
            </div>
            {/* Search box */}
            {/*<div className={`hidden ${style.searchContainer}`}>
                <div className={`hidden ${style.search} border-2 rounded-full pl-4 pr-2 pt-1 pb-1 text-sm`}>
                    <input className={`hidden`} type="text" placeholder={"Looking for any specific tool?"} />
                  <Image className={`hidden`} src={"/search.png"} alt="Search" width={24} height={24} />
                </div>
            </div>*/}
            <div className={`${style.rightSection} `}>
                {/*<div>Categories</div>*/}
                <div>Submit</div>
                <SearchIcon />
            </div>
        </header>
    )
  }

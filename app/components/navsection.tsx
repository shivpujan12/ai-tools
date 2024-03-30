import style from "../styles/navbar.module.css"
import Image from "next/image";
import * as React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import BubbleChartSharpIcon from '@mui/icons-material/BubbleChartSharp';
export default function NavSection(){
        return (
            <div className={`${style.header}`}>
                <div className={`${style.logo}`}>
                    <BubbleChartSharpIcon />
                    EtherAi
                </div>
                <div className={`${style.rightSection}`}>
                    <div>Categories</div>
                    <div>+ Submit</div>
                    <div><SearchIcon /></div>
                </div>
            </div>
        );
}
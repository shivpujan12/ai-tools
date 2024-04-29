'use client';
import style from "./page.module.css";
import data from "@/app/data.json";
import Intro from "@/app/components/intro";
import {Autocomplete, Divider, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {white} from "next/dist/lib/picocolors";
import ToolsGrid from "@/app/components/tools-grid";
import NavBar from "@/app/components/navbar";
import {AutoAwesomeMosaic, AutoAwesomeMosaicRounded, AutoAwesomeMosaicTwoTone, AutoStories} from "@mui/icons-material";
import {useContext, useEffect, useState} from "react";
import {Tool} from "@/app/api/get-data/route";
import useCachedFetch from "@/app/lib/cached-fetch";

export default function Home() {

    const baseURL = "http://" + new URL(window.location.href).host;
    const { data, isLoading, error } = useCachedFetch(baseURL + "/api/get-data");
    return (
        <div>
            <div className={`${style.container}`}>
                <NavBar/>
                <Intro/>
                <Divider/>
                {/*Search box mobile*/}
                <div className={`${style.searchBox}`}>
                    <div>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={['option1', 'option2', 'option3', 'option4']}
                            sx={{width: 300}}
                            renderOption={(props: any, option: string) => {
                                return (<Box component="li" {...props}>
                                    {option}
                                </Box>)
                            }}
                            renderInput={(params) =>
                                <TextField {...params} label="Looking for something? 🔍 "/>}
                        />
                    </div>
                    <div className={`${style.categoriesIcon}`}>
                        <AutoAwesomeMosaicTwoTone/>
                    </div>
                </div>
                <div className={`${style.main}`}>
                    <ToolsGrid data={data} />
                </div>
            </div>
        </div>
    );
}

// export const runtime = 'edge' // 'nodejs' (default) | 'edge'






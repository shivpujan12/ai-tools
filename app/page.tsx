'use client';
import style from "./page.module.css";
import Category from "./components/category";
import data from "@/app/data.json";
import IntroSection from "@/app/components/IntroSection";
import {Autocomplete, Divider, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {white} from "next/dist/lib/picocolors";
import ResponsiveGrid from "@/app/components/ResponsiveGrid";
import NavBar from "@/app/components/navbar";
import {AutoAwesomeMosaic, AutoAwesomeMosaicRounded, AutoAwesomeMosaicTwoTone, AutoStories} from "@mui/icons-material";

export default function Home() {
  /*const req = await fetch(`http://localhost:3000/data.json`);
  const data = await req.json();*/

  return (
      <div className={`width100pc`}>
      <div className={`${style.container}`}>
          <NavBar/>
          <IntroSection />
          <Divider />
          <div className={`${style.searchBox}`}>
              <div>
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={['option1', 'option2', 'option3', 'option4']}
                  sx={{width: 300}}
                  renderOption={(props:any, option:string) => {
                      return (<Box component="li" {...props}>
                          {option}
                      </Box>)
                  }}
                  renderInput={(params) =>
                      <TextField {...params} label="Looking for something? 🔍 "/>}
              />
              </div>
              <div className={`${style.categoriesIcon}`}>
                  <AutoAwesomeMosaicTwoTone />
              </div>
          </div>
          <div className={`${style.main}`}>
              <ResponsiveGrid />
          </div>
        {/*<SideNav/>*/}
        {/*<div className={style.pageContent}>
          {data.map((d: any, i: any) => {
            return (
              <div  key={i}>
                <Category title={Object.keys(d)} data={Object.values(d)} />
              </div>
            );
          })}
        </div>*/}
      </div>
      </div>
  );
}

// export const runtime = 'edge' // 'nodejs' (default) | 'edge'






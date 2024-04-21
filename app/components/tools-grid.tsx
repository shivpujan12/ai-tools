import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ToolsCard from "@/app/components/tools-card";
import {useEffect, useState} from "react";

export default function ToolsGrid() {

    type ToolDataType = {
        name : string,
        link: string,
    }

    const [toolData , setToolData] = useState<ToolDataType[]>();
    const baseURL = "http://" + new URL(window.location.href).host;
    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await fetch(baseURL + "/api/get-data").then((res) => res.json());
                console.log("Got Data: ", data);
                setToolData(data);
            } catch (e) {
                console.log("Error: ",e);
            }
        }
        fetchData();
    }, []);

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {
                    toolData?.map((item,index)=>(
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <ToolsCard data={{
                                "name": item.name,
                                "link": item.link,
                            }}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

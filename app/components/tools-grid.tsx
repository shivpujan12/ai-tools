import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Tool} from "@/app/api/get-data/route";
import ToolsCard from "@/app/components/tools-card";

export default function ToolsGrid({data}:{data?:Tool[]}) {

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {
                    data?.map((item,index)=>(
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <ToolsCard tool={item}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

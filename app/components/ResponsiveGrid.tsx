import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MyCard from "@/app/components/my-card";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function ResponsiveGrid() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                        {/*<Item>*/}
                        <MyCard data={{
                            "name": "chatgptbot",
                            "link": "https://chat.tune.app/?utm_source=topai.tools&utm_medium=website_topai&utm_campaign=topai.tools",
                            "description": "",
                            "icon": ""
                        }}/>
                        {/*</Item>*/}
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

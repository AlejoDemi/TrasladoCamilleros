import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {Tab, Tabs} from "@mui/material";
import {Doctor} from "./Doctor";
import {Traslados} from "./Traslados";


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const TabsDoctor = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Nuevo Traslado"/>
                    <Tab label="Traslados solicitados" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Doctor />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Traslados />
            </TabPanel>
        </Box>
    );
}

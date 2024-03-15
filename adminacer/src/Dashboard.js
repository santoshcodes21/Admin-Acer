import React from "react";
import '@radix-ui/themes/styles.css';
import {Flex,Grid,Box,Text} from '@radix-ui/themes';
import './Dasboard.css'

export default function Dashboard(){
    return(
        <>
        <Flex direction="row">
            <Grid columns="1" className="nav">
                <Box  className="navcomp">
                   <h3>Dashboard</h3>
                </Box>
                <Box  className="navcomp">
                    <h3>Reservation</h3>
                </Box>
                <Box  className="navcomp">
                    <h3>Manage rooms</h3>
                </Box>
                <Box  className="navcomp">
                    <h3>FEEDBACK</h3>
                </Box>
                <Box  className="navcomp">
                </Box>
                <Box  className="navcomp">
                </Box>
                <Box  className="navcomp">
                </Box>
                <Box  className="navcomp">
                </Box>
                <Box  className="navcomp">
                </Box>
                <Box  className="navcomp">
                </Box>
                
            </Grid>


            <Grid columns="3"  width="auto"  className="grid1">
                <Box  className="bocx">
                    <h1>34</h1>
                    <p>Available rooms</p>
                </Box>
                <Box  className="bocx">
                    <h1>18</h1>
                    <p>Reservations</p>
                </Box>
                <Box  className="bocx">
                    <h1>40</h1>
                    <p>Complaints</p>
                </Box>
                <Box  className="bocx">
                    <h1>4</h1>
                    <p>Check ins</p>
                </Box>
                <Box  className="bocx">
                    <h1>41</h1>
                    <p>Available rooms</p>
                </Box>
                <Box  className="bocx">
                    <h1>69</h1>
                    <p>Available rooms</p>
                </Box>
            </Grid>
        </Flex>
        </>
    );
        
    
}
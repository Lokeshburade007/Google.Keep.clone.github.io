import React from "react";
import logo from "../images/logo.png"
import me from "../images/me.png"
import Button from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import GridViewIcon from '@mui/icons-material/GridView';
import PauseIcon from '@mui/icons-material/Pause';
import AppsIcon from '@mui/icons-material/Apps';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {

    return (
        <>
            <div className="header">
                <div className="logo">
                    <Button className="menu-icon">
                        <MenuIcon />
                    </Button>
                    <img src={logo} alt="logo" width="40" height="40" />
                    <h4>Keep</h4>
                </div>

                {/* Input Search Bar */}
                <Paper className="searchbar"
                    component="form"
                >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>

                    <InputBase
                        sx={{ ml: 0, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search ' }}
                    />
                </Paper>
                
                <div className="icon-container">
                    <Button className="refresh-icon">
                        <RefreshIcon />
                    </Button>

                    <Button className="grid-icon" style={{ display: "none" }}>
                        <GridViewIcon />
                    </Button>

                    <Button className="list-icon">
                        <PauseIcon />
                    </Button>

                    <Button className="setting-icon">
                        <SettingsApplicationsIcon />
                    </Button>

                </div>

                <div className="me-apps">
                    <Button className="app-icon">
                        <AppsIcon />
                    </Button>

                    <Button className="my-icon">
                        <img src={me} alt="logo" width="35" height="35" />
                    </Button>

                </div>
            </div>

        </>
    );
};

export default Header;
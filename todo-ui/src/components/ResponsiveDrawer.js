import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArchiveIcon from '@material-ui/icons/ArchiveTwoTone';
import ListIcon from '@material-ui/icons/ListAltRounded';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {NavLink, Route, Switch} from "react-router-dom";
import CreateTodo from "./CreateTodo";
import TodoListComponent from "./TodoListComponent";

const drawerWidth = 200;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
        modalOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    render() {
        const {classes, theme} = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar}/>
                <List>
                    <NavLink to={'/'}>
                        <ListItem button key='1'>
                            <ListItemIcon><ListIcon/></ListItemIcon>
                            <ListItemText primary={'Todo List'}/>
                        </ListItem>
                    </NavLink>
                </List>
                <Divider/>
                <List>
                    <NavLink to={'/archive'}>
                        <ListItem button key={2}>
                            <ListItemIcon><ArchiveIcon/></ListItemIcon>
                            <ListItemText primary={'Archived'}/>
                        </ListItem>
                    </NavLink>
                </List>
            </div>
        );

        return (

            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            ToDo App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{paper: classes.drawerPaper}}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{paper: classes.drawerPaper}}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        <Route path={'/'} component={() => <TodoListComponent active={true}/>} exact/>
                        <Route path={'/archive'} component={() => <TodoListComponent active={false}/>}/>
                    </Switch>
                    <Divider/>
                    <CreateTodo/>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);

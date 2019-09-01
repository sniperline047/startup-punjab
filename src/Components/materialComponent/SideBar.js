import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CirLogo from '../../images/circular.png';
import finance from '../../images/finance.jpg';
import health from '../../images/health.jpg';
import edu from '../../images/education.jpg';
import coo from '../../images/cooperation.jpg';
import agr from '../../images/agriculture.jpg';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function SideBar({onSubmit1,onSubmit2,onSubmit3,onSubmit4,onSubmit5}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function logout() {
        localStorage.clear();
        window.location.href = '/';
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={CirLogo} alt="Logo2" height="80" width="80" />
          <Typography variant="h6" noWrap>
            myGovApp
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key={'Home'} onClick={logout}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            <a href="http://172.16.82.90:3002">
            <ListItem button key={'Ping Colleague'} >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Ping Colleague'} />
            </ListItem>
            </a>
            <a href="http://172.16.82.90:3002/next">
            <ListItem button key={'Edit Profile'} >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Edit Profile'} />
            </ListItem>
            </a>
            <a href="http://172.16.82.90:3500">
            <ListItem button key={'Chatroom'}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={'Chatroom'} />
            </ListItem>
            </a>
            <a href="http://172.16.67.83:4545">
            <ListItem button key={'Share Docs'} >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Share Docs'} />
            </ListItem>
            </a>
        </List>
        <Divider />
        <List>
          {['LogOut'].map((text, index) => (
            <ListItem button key={text} onClick={logout} >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
            <h1>Available department in your district: </h1>
              <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 glow'  value='Finance' onClick={onSubmit1}>
                  <img alt='fin' src={finance} height="200" width="200"/>
                  <div>
                    <h2 className="pointer">Finance</h2>
                  </div>
                
              </div>
              <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 glow' value='Health' onClick={onSubmit2} >
                <img alt='fin' src={health} height="200" width="200"/>
                <div>
                  <h2 className="pointer">Health</h2>
                </div>
              </div>
              <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 glow' value='Education' onClick={onSubmit3} >
                <img alt='fin' src={edu} height="200" width="200"/>
                <div>
                  <h2 className="pointer">Education</h2>
                </div>
              </div>
              <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 glow' value='Agriculture' onClick={onSubmit4} >
                <img alt='fin' src={agr} height="200" width="200"/>
                <div>
                  <h2 className="pointer">Agriculture</h2>
                </div>
              </div>
              <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 glow' value='Cooperation' onClick={onSubmit5} >
                <img alt='fin' src={coo} height="200" width="200"/>
                <div>
                  <h2 className="pointer">Cooperation</h2>
                </div>
              </div>                           
      </main>
    </div>
  );
}

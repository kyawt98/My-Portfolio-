import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import CodeIcon from '@material-ui/icons/Code';
import './skillmobile.css'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
    backgroundColor: 'dark',
    width: "100%",
    height: "100%"
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}
    style={{ width:"100%", height:"100%"}}
    >
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons="auto"
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab style={{ color:"white", textTransform: 'lowercase', fontWeight:100, fontSize:14,}} label="Soft Skills" {...a11yProps(0)} />
          <Tab style={{ color:"white", textTransform: 'lowercase', fontWeight:100, fontSize:14,}} label="Programmings" {...a11yProps(1)} />
          <Tab style={{ color:"white", textTransform: 'lowercase', fontWeight:100, fontSize:14,}} label="Frameworks" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
        style={{ height:"auto"}}
        value={value} index={0} dir={theme.direction}>
            <ul className="skill-nav">
                <li className="skill-item-mobile">
                    <LabelImportantOutlinedIcon className="label"/><span className="item">Problem Solving</span>
                </li>
                <li className="skill-item-mobile">
                    <LabelImportantOutlinedIcon className="label"/><span className="item">Good Listening & Leaning</span>
                </li>
                <li className="skill-item-mobile">
                    <LabelImportantOutlinedIcon className="label"/><span className="item">Motivitor</span>
                </li>
            </ul>
        </TabPanel>
        <TabPanel
        style={{ height:"80vh"}}
        value={value} index={1} dir={theme.direction}>
            <ul className="skill-nav">
                <li className="skill-item-mobile">
                    <CodeIcon className="label"/><span className="item">HTML</span>
                </li>
                <li className="skill-item-mobile">
                    <CodeIcon className="label"/><span className="item">CSS</span>
                </li>
                <li className="skill-item-mobile">
                    <CodeIcon className="label"/><span className="item">JavaScript</span>
                </li>
                <li className="skill-item-mobile">
                    <CodeIcon className="label"/><span className="item">Laravel</span>
                </li>
                <li className="skill-item-mobile">
                    <CodeIcon className="label"/><span className="item">Kotlin</span>
                </li>
            </ul>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}
        style={{ height:"80vh"}}
        >
            <ul className="skill-nav">
                <li className="skill-item-mobile">
                    <CodeIcon className="label"/><span className="item">React</span>
                </li>
                <li className="skill-item-mobile">
                    <CodeIcon className="label"/><span className="item">Bootstrap</span>
                </li>
                <li className="skill-item-mobile">
                    <CodeIcon className="label"/><span className="item">Tailwind CSS</span>
                </li>
            </ul>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

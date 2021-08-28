    import React from 'react';
    import PropTypes from 'prop-types';
    import { makeStyles } from '@material-ui/core/styles';
    import Tabs from '@material-ui/core/Tabs';
    import Tab from '@material-ui/core/Tab';
    import Typography from '@material-ui/core/Typography';
    import Box from '@material-ui/core/Box';
    import { white } from '@material-ui/core/colors'
    import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
    import CodeIcon from '@material-ui/icons/Code';
    import './skillbox.css'
    import { motion } from 'framer-motion'

    function SkillsBox(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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

    SkillsBox.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
    }

    const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        color: 'white',
        textTransform: 'normal',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    }));

    export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <motion.div
        initial={{ x:"-50vw", opacity:0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2,
        ease: [0.87, 0, 0.13, 1],}}

        className={classes.root}
        style={{ width:"100%", height:"100%"}}
        >
        {<Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            style={{ marginTop:25, paddingLeft:10, width:300}}
        >
            <Tab style={{ textTransform: 'lowercase', fontWeight:100, fontSize:18,}} label="Soft Skills" {...a11yProps(0)} />
            <Tab style={{ textTransform: 'lowercase', fontWeight:100, fontSize:18,}} label="Programmings" {...a11yProps(1)} />
            <Tab style={{ textTransform: 'lowercase', fontWeight:100, fontSize:18,}} label="Frameworks" {...a11yProps(2)} />
        </Tabs>}
        <SkillsBox value={value} index={0}>
            <ul className="skill-nav">
                <li className="skill-item">
                    <LabelImportantOutlinedIcon className="label"/><span className="item">Problem Solving</span>
                </li>
                <li className="skill-item">
                    <LabelImportantOutlinedIcon className="label"/><span className="item">Good Listening & Leaning</span>
                </li>
                <li className="skill-item">
                    <LabelImportantOutlinedIcon className="label"/><span className="item">Motivitor</span>
                </li>
            </ul>
        </SkillsBox>
        <SkillsBox value={value} index={1}>
            <ul className="skill-nav">
                <li className="skill-item">
                    <CodeIcon className="label"/><span className="item">HTML</span>
                </li>
                <li className="skill-item">
                    <CodeIcon className="label"/><span className="item">CSS</span>
                </li>
                <li className="skill-item">
                    <CodeIcon className="label"/><span className="item">JavaScript</span>
                </li>
                <li className="skill-item">
                    <CodeIcon className="label"/><span className="item">Laravel</span>
                </li>
                <li className="skill-item">
                    <CodeIcon className="label"/><span className="item">Kotlin</span>
                </li>
            </ul>
        </SkillsBox>
        <SkillsBox value={value} index={2}>
            <ul className="skill-nav">
                <li className="skill-item">
                    <CodeIcon className="label"/><span className="item">React</span>
                </li>
                <li className="skill-item">
                    <CodeIcon className="label"/><span className="item">Bootstrap</span>
                </li>
                <li className="skill-item">
                    <CodeIcon className="label"/><span className="item">Tailwind CSS</span>
                </li>
            </ul>
        </SkillsBox>
        </motion.div>
    );
    }

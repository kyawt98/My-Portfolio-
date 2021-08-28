import * as React from "react";
import { motion } from "framer-motion";
import './loading.css'

 const Loading = () => (
  <div className="container">
    <motion.img
    initial={{ x:-100}}
    animate={{ rotate: 360,x:100 }}
    transition={{ duration: 7 }}
    className="loading-item" src={require('../../assets/icons/logo.png').default}/>
  </div>
);

export default Loading

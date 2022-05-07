import React, { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss';

const About = () => {
  const [abouts,setAbouts] = useState([]);
  
  useEffect(()=>{
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data))

  },[]); //empty arry means we only want to run useEffect at the start once the components load

  return (
    <Fragment>
      <h2 className="head-text">I know that <span>Good Development</span><br/>means<span> Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div 
            whileInView={{ opacity: 1 }} 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.5, type: 'tween'}} 
            className="app__profile-item" 
            key={about.tile + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="bold" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </Fragment>
  );
}

export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
  "app__whitebg"
);
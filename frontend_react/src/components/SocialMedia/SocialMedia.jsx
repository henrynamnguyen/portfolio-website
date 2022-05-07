import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://twitter.com/HenryNamNguyen" target="_blank" rel="noreferrer">
              <BsTwitter/>
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/henry-nam-nguyen-670810187/" target="_blank" rel="noreferrer">
              <BsLinkedin/>
            </a>
        </div>
        <div>
            <a href="https://github.com/henrynamnguyen" target="_blank" rel="noreferrer">
              <BsGithub/>
            </a>
        </div>
    </div>
  )
}

export default SocialMedia;
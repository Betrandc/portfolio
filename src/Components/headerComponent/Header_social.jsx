import React from 'react'
import {BsLinkedin}from 'react-icons/bs'
import {FaGithubAlt}from 'react-icons/fa'
import {FiGitBranch}from 'react-icons/fi'
export const Header_social = () => {
  return (
    <div className='header_social'>
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><FaGithubAlt/></a>
        <a href="https://facebook.com"><FiGitBranch/></a>
    </div>
  )
}

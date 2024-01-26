import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaReact,
  FaEmber,
} from "react-icons/fa";

const logotext = "JOSHUA LAIKOWSKI";
const meta = {
  title: "Joshua Laikowski",
  description:
    "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
  title: "I’m Joshua Laikowski",
  animated: {
    first: "am a full stack dev",
    second: "love coding",
    third: "love exploring new tech",
  },
  description: "Full Stack engineer from Brooklyn, New York ",
  your_img_url:
    "https://media.licdn.com/dms/image/D4E03AQFBczle5C15dQ/profile-displayphoto-shrink_800_800/0/1706087493309?e=1711584000&v=beta&t=4xrQi3xcv0jEj1_qgq1iZotaFF_54dgUsnHFOizVp3I",
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I'm a software enigneer originally from Sayreville, New Jersey. From a young age I found my self fasinated by how technology worked, eventually leading me to video games and more. As I got older, and my muse diverged to music, I still found myself trying to build little applications to make my music reoording experience easier. Then, during the beggining of the pandemic, I went to App Academy to learn full stack engineering, and the rest is history",
};
const worktimeline = [
  {
    jobtitle: "Software Engineer III",
    where: "Better Mortgage",
    date: "2022 - 2023",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 95,
  },
  {
    name: "Typescript",
    value: 95,
  },
  {
    name: "Python",
    value: 70,
  },
  {
    name: "Ruby",
    value: 70,
  },
  {
    name: "Ember",
    value: 50,
  },
  {
    name: "Golang",
    value: 40,
  },
];

const services = [
  {
    title: "Frameworks",
    description: "React, Redux, Next.js, Express.js, rails, Ember",
  },
  {
    title: "Test Suites",
    description: "Jest, Selenium, Mocha",
  },
  {
    title: "Pipeline management",
    description: "Buildkite",
  },
  {
    title: "Deployment",
    description: "Spinaker, Heroku, AWS",
  },
  {
    title: "Databases + DBTools",
    description: " Mongoose, MongoDB, SQL, SQLite3, PostgreSQL, Datagrip",
  },
];

const dataportfolio = [
  {
    img: "https://i.postimg.cc/mrYvX0zZ/Screenshot-2023-11-05-194632.png",
    description: "Better Mortgage - Full Stack Development",
    link: "https://www.better.com",
  },
  {
    img: "https://user-images.githubusercontent.com/63963324/150466955-c92744a9-ee2a-4f79-93ca-5066bd141ad3.png",
    description: "Landmarked - track your trips with photos and more!",
    link: "https://github.com/ShuaLaik/Landmarked",
  },
  {
    img: "https://media.licdn.com/dms/image/sync/C4D27AQG8f5zDelyiyQ/articleshare-shrink_800/0/1698980106682?e=1699837200&v=beta&t=IH6hNodcKOWKiULFa7uQTAwcfF53tBhGBona-lnjcoA",
    description: "FacePalm - a facebook clone",
    link: "https://github.com/ShuaLaik/FacePalm",
  },
];

const contactConfig = {
  YOUR_EMAIL: "joshua@laikowski.com",
  YOUR_FONE: "(732)609-3243",
  description:
    "Please reach out if you have any questions/requests. I'll get back to you as soon as possible!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_gicyo97",
  YOUR_TEMPLATE_ID: "template_ge6nmiw",
  YOUR_USER_ID: "2-uByNV-ZouzgtPzO",
};

const socialprofils = {
  github: "https://github.com/JLaikows",
  linkedin: "https://www.linkedin.com/in/joshualaikowski/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};

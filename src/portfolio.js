/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rathang Rajpal",
  title: "Hi all, I'm Rathang",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Eu2OeFOJQzAIkKwPq8LMmcws-rurYOoZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/rathang-rajpal/",
  gmail: "rathang.rajpal@gmail.com",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Texas at Dallas",
      logo: require("./assets/images/utdLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2021 - May 2023",
      desc: "GPA : 4.0/4.0",
      desc1: "Taken courses about Machine Lerning, Big Data, Algorithms, Web Programming ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "The University of Petroleum and Energy Studies",
      logo: require("./assets/images/upesLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2017 - May 2021",
      desc: "Ranked among top 10% in the program. Took courses about Software Engineering, Big Data, Data Structures & Algorithms, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Summer Intern",
      company: "Optum ( United Health Group )",
      companylogo: require("./assets/images/optum.png"),
      date: "May 2019 – July 2019",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Link: "https://drive.google.com/file/d/1ISNCiMzfWibGxGeEKGK3fd9mje7oZ-a3/view?usp=sharing",
      descBullets: [
        "Created a dedicated data analysis pipeline for various Machine Learning projects on Amazon Web Services.",
        "Predicted customer affinity for various products based on the purchase patterns.",
        " Developed a chatbot for recommending products to end users using Flask framework, Python."
        // <a href="https://drive.google.com/file/d/1ISNCiMzfWibGxGeEKGK3fd9mje7oZ-a3/view?usp=sharing"></a>
      ]
    },
    {
      role: "Data Science Intern",
      company: "Xebia IT Architect India Private Limited",
      companylogo: require("./assets/images/Xebia.png"),
      date: "May 2020 – July 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Link: "https://drive.google.com/file/d/1oS5ApxbujOCVx2VLrInMgfPHwUx_X7fN/view?usp=sharing",
      descBullets: [
        "Presented data for deep rooted analysis for client dashboard using Python libraries.",        
        "Undertook automation of existing time-consuming data analysis using Sqoop, Python, crontab and Unix shell.",
        // <a href="https://drive.google.com/file/d/1ISNCiMzfWibGxGeEKGK3fd9mje7oZ-a3/view?usp=sharing"></a>
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "UPES Council for Innovation and Entrepreneurship",
      companylogo: require("./assets/images/upesLogo.png"),
      date: "April 2020 – May 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      Link: "https://drive.google.com/file/d/1E7a57k0ToGttJq7X8i6GhOAFZI7470hv/view?usp=sharing",
      descBullets: [
        " Designed a statistical diary depicting Government of Uttarakhand records for public access and internal use.",
        "Curated a database architecture for storing records using MySQL for various inter-ministerial departments.",
        "Developed the front-end using HTML, CSS & React."
        // <a href="https://drive.google.com/file/d/1ISNCiMzfWibGxGeEKGK3fd9mje7oZ-a3/view?usp=sharing"></a>
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Student Ambassador",
      subtitle:
        "One of the first students to become the Microsoft Ambassador at UTD.",
      image: require("./assets/images/MAP.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/18qTL2g1JaGnQ21deC9qiRBVaXemKQfJ4/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Big Data Specialization",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/big_data.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1WaaPQM7I8yqceVoHk0FtPP3h9cVx4S0R/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Cloud Platform Big Data and Machine Learning Fundamentals",
      subtitle:
        "Offered by Google Cloud via Coursera",
      image: require("./assets/images/gcp.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1bZKGLFWug6ujKPlk2uudLE55YyAG1GFh/view?usp=sharing"
        }
      ]
    },
    {
      title: "Programming for Everybody (Python)",
      subtitle:
        "Offered by University of Michigan via Coursera",
      image: require("./assets/images/python_basics.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1kivbe2b35boa7AALAGbe_oaXJOE6rpez/view?usp=sharing"
        }
      ]
    },
    {
      title: "IEEE Confrence",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/ieee.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1GKnFTN4VrPdHKESrjqClz4PqFzmVVeqd/view?usp=sharing"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // },
    {
      title: "Self Awareness and the Effective Leader",
      subtitle:
        "This course helped me examine my strengths, I also learned how to manage stress and solve problems creatively.",
      image: require("./assets/images/rice.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1VbLlGGEuU5i0YIrFnt_51gDoXn0vVpXg/view?usp=sharing"
        }
      ]
    },
    // {
    //   title: "ETS GRE",
    //   subtitle:
    //     "Got a GRE Score of 326.",
    //   image: require("./assets/images/gre.jpg"),
    //   footerLink: [
    //     {
    //       name: "View Certificate",
    //       url: "https://drive.google.com/file/d/1eKxexS-psOSarCs8OQMO5Ith3y4z5D2c/view?usp=sharing"
    //     }
    //   ]
    // },
    {
      title: "Ducat Python Certification",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/ducat.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1f83oSD_rSkYRiiPzpeuhK5RptuDpetQ5/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Projects and Publications",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://link.springer.com/chapter/10.1007/978-3-030-78284-9_7",
      title: "Applying Computation Intelligence for Improved Computer Vision Capabilities",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://ieeexplore.ieee.org/document/9596226",
      title: "Analysis of AI-driven tools and Impact of Covid-19 on Age: A Case Study for India",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-4699272600",
  email_address: "rathang.rajpal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

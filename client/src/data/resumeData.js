// Data extracted from your uploaded resume PDF and structured for the site.
// Source: user's resume uploaded to the chat. :contentReference[oaicite:1]{index=1}
const resume = {
  name: 'Sameer Abid',
  title: 'Computer Science Undergraduate (Web Developer & Intern)',
  location: 'Islamabad / Rawalpindi, Pakistan',
  contact: {
    phone: '0307-1507354',
    email: 'Mailforsameer00@gmail.com'
  },
  summary:
    "I am a Computer Science undergraduate (7th semester) at Riphah International University with hands-on experience in software development, networking, and problem-solving. Skilled in full-stack web and mobile app development, database design, and secure networking. Strong foundation in OOP, Data Structures & Algorithms, and Computer Networks. Enthusiastic about applying academic knowledge to real-world projects.",
  education: [
    {
      title: 'Bachelor in Computer Science',
      org: 'Riphah International University Islamabad',
      date: 'Sep 2022 - Sep 2026',
      details: 'CGPA: 3.2 — Courses: OOP, DSA, DBMS, OS, Computer Networks, AI, Web Development, Flutter'
    },
    { title: 'FSC Pre-Engineering', org: 'Punjab Group of Colleges (GRW)', date: '2019–2021' },
    { title: 'Matriculation', org: 'Oxford Grammar Public High School', date: '2017–2019' }
  ],
  experience: [
    {
      title: 'Remote Part-Time Web Developer',
      org: 'HAFFAF Digital (Oman)',
      date: '2024 – Present',
      details: 'Collaborated with cross-functional teams to develop and maintain client-facing web applications using Node.js, Express, and MongoDB.'
    }
  ],
  skills: {
    languages: ['JavaScript', 'Python', 'C++', 'Java'],
    frontend: ['React.js', 'HTML5', 'CSS3', 'Flutter', 'Figma'],
    backend: ['Node.js', 'Express', 'RESTful APIs', 'Mongoose'],
    databases: ['MongoDB', 'SQL', 'Firebase Firestore'],
    tools: ['Git', 'Linux', 'Postman'],
    networking: ['CCNA', 'Network Security']
  },
  projects: [
    {
      title: 'DoctorZ Web App',
      desc: 'Hospital management system with patient registration, appointments, and prescription tracking.',
      tech: ['MERN', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/devdansty/DoctorZ-Appointment-Application.git',
      demo: '#'
    },
    {
      title: 'DoctorZ Mobile App',
      desc: 'Cross-platform health monitoring and doctor-patient communication app built with Flutter and Firebase.',
      tech: ['Flutter', 'Firebase'],
      github: 'https://github.com/devdansty/DoctorZ-Appointment-Application.git',
      demo: '#'
    },
    {
      title: 'AI-based Chatbot ',
      desc: 'An AI-powered chatbot that manages daily tasks and conversations ',
      tech: ["Python + Flask (with NLTK & spaCy) handle NLP and task logic, while React.js + Axios"],
      github: 'https://github.com/devdansty/Chaty-AI-based-chatbot.git',
      demo: '#'
    },
    {
      title: 'Printrest_BackEnd-clone',
      desc: 'Backend clone of Printrest using Node.js, Express, and MongoDB with JWT authentication and RESTful APIs.',
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      github: 'https://github.com/devdansty/printrest_BackEnd-clone.git',
      demo: '#'
    }
  ],
  certifications: [
    'IBM Full Stack Developer (Coursera | Ongoing)',
    'CCNA: Introduction to Networks (Cisco | 2025)',
    'PCAP: Python Essentials (Coursera | 2024)',
    'JavaScript Essentials 1 (Coursera | 2025)',
    'Linux Essentials (Cisco | 2024)'
  ]
}

export default resume

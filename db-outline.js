const User {
  firstName: string,
  lastName: string,
  email: string,
  phone: number,
  password: string,
  address: {
    street: string,
    city: string,
    state: string
  },
  jobTitle: string,
  biography: string,
  social: {
    facebook: string,
    instagram: string,
    linkedin: string,
    github: string,
    twitter: string
  },
  education: {
    dateCompletion: number,
    current: boolean,
    institutionName: string,
    fieldOfStudy: string,
    highestDeg: string,
    comments: string
  },
  experience: {
    dateStart: number,
    dateCompletion: number,
    current: boolean,
    companyName: string,
    title: string,
    description: string
  },
  skills: {
    languages: array,
    otherSkills: array
  },
  projects: array,
}

const Projects {
  userId: string,
  title: string,
  description: string,
  url: string,
  img: string
}
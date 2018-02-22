const User = {
  _Id: string,
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
  projects: array,
  experience: array,
  education: array,
  skills: {
    languages: array,
    otherSkills: array
  },
  jwt: string
};

const Projects = {
  userId: string,
  projId: string,
  title: string,
  description: string,
  url: string,
  img: string
};

const Education = {
  userId: string,
  edId: string,
  dateCompletion: number,
  current: boolean,
  institutionName: string,
  fieldOfStudy: string,
  highestDeg: string,
  comments: string
};

const Experience = {
  userId: string,
  expId: string,
  dateStart: number,
  dateCompletion: number,
  current: boolean,
  companyName: string,
  title: string,
  description: string
};

export interface User {
  _Id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone?: number,
  password: string,
  address: {
    street?: string,
    city: string,
    state: string
  },
  jobTitle?: string,
  biography?: string,
  social: {
    facebook?: string,
    instagram?: string,
    linkedin?: string,
    github?: string,
    twitter?: string
  },
  projects?: any,
  experience?: any,
  education?: any,
  skills?: {
    languages: any,
    otherSkills: any
  },
  jwt: string
}
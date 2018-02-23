export interface Experience {
  userId: string,
  expId: string,
  dateStart?: number,
  dateCompletion?: number,
  current?: boolean,
  companyName: string,
  title: string,
  description?: string
};
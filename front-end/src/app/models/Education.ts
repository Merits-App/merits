export interface Education {
  userId: string,
  edId: string,
  dateCompletion?: number,
  current?: boolean,
  institutionName: string,
  fieldOfStudy: string,
  highestDeg?: string,
  comments?: string
};
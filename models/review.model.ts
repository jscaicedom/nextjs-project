export interface ReviewAdded {
  email: string,
  name: string,
  text: string,
}

export interface ReviewFromDB {
  _id: any,
  email: string,
  name: string,
  text: string,
}
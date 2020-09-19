export interface IGetAcronymsService {
  success: boolean;
  data: IAcronym[];
}

export interface ICreateAcronymsService extends IGetAcronymsService {}

export interface IAcronym {
  _id: string;
  name: string;
  title: string;
  description: string;
  link: string;
  author: string;
}

import axios from "axios";
import { requestUrl } from "./requestUtils";

interface BaseResponse<T> {
  code: number;
  msg: string;
  data: T;
}

export interface Subject {
  heat: number;
  major: string;
  subjectDescription: string;
  subjectId: string;
  subjectName: string;
  subjectNumber: string;
}

export async function querySubjectList(params: object) {
  return axios.get<BaseResponse<Subject[]>>(
    requestUrl("/subjects/list", true),
    {
      params,
    }
  );
}

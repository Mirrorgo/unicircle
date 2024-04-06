import axios from "axios";
import { requestUrl } from "./requestUtils";

export interface BaseResponse<T> {
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

export interface Topic {
  body?: string;
  commentNumber: number;
  createdAt?: string;
  imageUrl?: string;
  subjectNumber?: string;
  title?: string;
  topicId?: string;
  typeId?: string;
  typeName: string;
  updatedAt?: string;
  userId?: string;
  username: string;
  [property: string]: any;
}

export interface TopicType {
  typeId: string;
  typeName: string;
}

export async function querySubjectList(params: object) {
  return axios.get<BaseResponse<Subject[]>>(requestUrl("/subjects/list"), {
    params,
  });
}

export async function queryTopicList(params: object) {
  return axios.get<BaseResponse<Topic[]>>(requestUrl("/subjects/topics/list"), {
    params,
  });
}

export async function queryTopic(params: object) {
  return axios.get<BaseResponse<Topic>>(
    requestUrl("/subject/topics/get", true),
    {
      params,
    }
  );
}

export async function queryTypeList(params: object) {
  return axios.get<BaseResponse<TopicType[]>>(
    requestUrl("/subjects/types/list"),
    {
      params,
    }
  );
}

import {Reference} from "../types";

export interface InitiativeMoreInfo {
    title:string,
    url:string
}

export interface Initiative {
    schemaId:string,
    name:string,
    description:string,
    summary:string,
    shortName:string,
    website?:string,
    moreInfo?:InitiativeMoreInfo[],
    isParentOf?:string[],
    references?:Reference[],
    githubRepository?:string
}
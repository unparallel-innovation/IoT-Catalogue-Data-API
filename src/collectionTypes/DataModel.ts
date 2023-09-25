import {Metadata, Reference} from "../types";

export interface DataModel {
    schemaId:string,
    name:string,
    description:string,
    isParentOf?:string[],
    website?:string,
    githubRepository?:string,
    metadata?:Metadata,
    references?:Reference[]
}
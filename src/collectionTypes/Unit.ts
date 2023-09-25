import {Metadata, Reference} from "../types";

export interface Unit {
    name: string,
    symbol?:string,
    lastUpdate?: Date,
    status?: string[],
    schemaId: string,
    metadata?:Metadata,
    references?:Reference[]
}
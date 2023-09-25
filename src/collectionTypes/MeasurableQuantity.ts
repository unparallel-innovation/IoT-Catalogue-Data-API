import {Metadata, Reference} from "../types";

export interface MeasurableQuantity {
    name: string,
    description: string,
    unitIds: string[],
    schemaId: string,
    isParentOf?:string[],
    metadata?:Metadata,
    references?:Reference[]
}

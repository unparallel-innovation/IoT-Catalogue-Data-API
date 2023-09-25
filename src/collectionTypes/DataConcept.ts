import {DataSetMeasurableQuantity, ElementImage, Metadata, Reference} from "../types";

export interface DataConcept {
    name:string,
    description: string,
    dataSetMeasurableQuantities:DataSetMeasurableQuantity[],
    images?:ElementImage[],
    schemaId:string,
    isParentOf?:string[],
    metadata?:Metadata,
    references?:Reference[]
}

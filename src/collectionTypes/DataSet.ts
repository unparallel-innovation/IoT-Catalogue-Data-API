import {Coordinate, DataSetLastMeasurement, DataSetMeasurableQuantity, OSMElement, Reference} from "../types";
import {GeoJSON} from "geojson"

export interface DataSet {
    name:string,
    dataSetMeasurableQuantities:DataSetMeasurableQuantity[],
    componentId: string,
    dataConceptIds: string[],
    timeline?: any,
    location?: any,
    dataSource?: any,
    schemaId:string,
    coordinates?:Coordinate[],
    references?:Reference[],
    locations?:OSMElement[]
}
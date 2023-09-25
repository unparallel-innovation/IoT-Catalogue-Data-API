
export interface MeasurementValue {
    measurableQuantityId:string,
    unitId:string,
    value:any
}

export interface DataMeasurement {
    values:MeasurementValue[],
    schemaId:string,
    dataSetId:string
}
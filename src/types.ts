import { GeoJSON } from "geojson";

export type Call = (methodName:string,parameters:Array<string | number | object>)=>Promise<any>


export interface DataSetMeasurableQuantity {
    measurableQuantityId?:string,
    unitId?: string
}

export interface ElementImage {
    id:string,
    main?: boolean,
    photoGallery?: boolean,
    logo?:boolean
}

export interface DataSetLastMeasurement {
    measurableQuantityId:string,
    unitId:string,
    value:number,
    date:number
}

export type Reference = {
    url:string,
    title?:string,
    description?:string
} | string

export interface Metadata {
    [key: string]: string
}

export interface Documentation {
    url:string,
    name:string,
    description?:string
}

export interface Note {
    title:string,
    text:string
}

export enum Status {
    Final = "Final",
    Draft = "draft"
}

export interface Tag {
    name:string,
    type:string
}

export interface Coordinate {
    lat:number,
    lon:number
}

export interface OSMElementAddress {
    road? : string,
    neighbourhood? : string,
    suburb? :string,
    city_district? : string,
    city? : string,
    county : string,
    "ISO3166-2-lvl6"? : string,
    postcode? : string,
    country? : string,
    country_code? : string,
    house_number?:string,
    state?:string,
    place?:string,
    boundary?:string,
    natural?:string,
    island?:string,
    archipelago?:string,
    beach?:string
}


export interface OSMElement {
    place_id? : number | string ,
    licence? : string
    osm_type ?: string,
    osm_id? : number,
    boundingbox? : [
        southLat:number | string, northLat:number | string, westLon:number | string, eastLon:number | string
    ],
    lat? : string,
    lon? : string,
    display_name? : string,
    class? : string,
    type? : string,
    importance? :number,
    address? :OSMElementAddress,
    extratags? :any,
    geojson?:GeoJSON,
    geo_ids? : string[]
}

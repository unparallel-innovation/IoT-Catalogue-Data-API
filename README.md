# IoT Catalogue Data API

Plugin developed by [UNPARALLEL Innovation](https://www.unparallel.pt/) enabling support to send data to [IoT Catalogue](https://www.iot-catalogue.com) through the browser or a NodeJS application by making use of an authenticated DDP instance.

<img style="margin-right:10px" src="https://iot-catalogue.s3.amazonaws.com/internalImages/r4R9H6Gc535eEqTnp/logo.png" height="50px"/>
<img src="https://www.unparallel.pt/assets/UILogo_black_RGB.png" height="50px"/>

# Installation

```shell
npm install @unparallel/iot-catalogue-data-api
```

# Usage

## Initialisation

This API relies on a "call" object which will provide a way to make authenticated requests to IoT Catalogue, this object can be created by using the native Meteor DDP implementation or third party library such as [simpleDDP](https://github.com/Gregivy/simpleddp).


```typescript
const {IoTCatalogue} = require("@unparallel/iot-catalogue-data-api")

//Inicialiation sample using Meteor.call
type Call = (methodName:string,parameters:Array<string | number | object>)=>Promise<any>
const call:Call = (methodName, parameters)=>(
    new Promise((resolve,reject)=>{
        Meteor.call(methodName,...parameters,(err,res)=>{err?reject(err):resolve(res)})
    })
)
const iotCatalogue = new IoTCatalogue(call)
```

## Usage

The instantiated iotCatalogue object contains several members for different data types providing methods used to send data to IoT Catalogue.

Available members:
* **component**
* **unit**
* **measurableQuantity**
* **dataConcept**
* **dataModel**
* **initiative**
* **dataSet**
* **dataMeasurement**

Available methods

* **send:** Send a single data element
* **sendMany:** Send multiple data elements

```typescript
await iotCatalogue.dataSet.send(dataSet1)
await iotCatalogue.dataSet.send(dataSet2)

const multipleDataConcepts = [dataConcept1, dataConcept2]

await iotCatalogue.dataConcept.sendMany(multipleDataConcepts)
```

## Member types

### Component
```typescript
interface Component {
    /*Name of the component*/
    name:string,
    /*Component tags*/
    tags?:Tag[],
    /*Short summary of the Component (with a maximum of 280 char).*/
    summary: string,
    /*Extended description of the Component*/
    description?:string,
    /*Indicate the type of the Component type. E.g., Component: Platform, Sensor, Gateway, Dataset, Machine Learning Model, Library, Extension, As a Service or Other Software.*/
    type?:string,
    /*Type of use / distribution (e.g., Open-source, closed-source, Internal, etc.). If Open-source, then state Open-source license (guide for open-source license ).*/
    license?:string,
    /*If the component is in development, select the Technology Readiness Level (TRL) target of the Component according to the European Commission.*/
    trl?:string | number
    /*Provide useful documentation and repository of the component, such as instructions manuals, datasheets, publications related to the component, GitHub repository, training material, and so on.*/
    reference:{
        documentation?:Documentation[],
        repositories?:string[],
    }
    /*Component’s developer entity.*/
    developers?:Developer[],
    /*Component’s manufacturer entity.*/
    manufacturers?:Manufacturer[],
    /*List of Standards supported by the Component*/
    standards?:Standard[],
    dataSetMeasurableQuantities?:DataSetMeasurableQuantity[],
    /*URL of the main image (format JPG or PNG) of the Component.*/
    logo?:string,
    /*URL with images (format JPG or PNG) for media gallery of the Component.*/
    mediaGallery?:string[],
    /*The website of the Component*/
    website?:string,
    /*Unique id of the component, this value can be used to allow update components*/
    schemaId:string,
    /*Additional info of the component*/
    notes?:Note[],
    /*Status of the component (Final, Draft)*/
    status?:Status,
    /*List the components and their relationship (e.g., uses, based on, composed by)*/
    linkedComponents?:LinkedComponent[]
}

export interface LinkedComponent{
    /*Describes the relation type ex: Used On*/
    relationType:string,
    /*Components part of the relation*/
    components:Component[]
}

export interface Developer {
    /*Name of the entity*/
    name:string,
    /*Website of the entity*/
    website:string
}

export interface Manufacturer {
    /*Name of the entity*/
    name:string,
    /*Website of the entity*/
    website:string
}

export interface Standard {
    /*Name of the standard*/
    name:string,
    /*Entity that developed the standard*/
    developedBy:Developer
}


```

### Unit
```typescript
interface Unit {
    name: string,
    symbol?:string,
    lastUpdate?: Date,
    status?: string[],
    schemaId: string,
    metadata?:Metadata,
    references?:Reference[]
}
```

### Measurable Quantity
```typescript
interface MeasurableQuantity {
    name: string,
    description: string,
    unitIds: string[],
    schemaId: string,
    isParentOf?:string[],
    metadata?:Metadata,
    references?:Reference[]
}
```
### Data Concept
```typescript
interface DataConcept {
    name:string,
    description: string,
    dataSetMeasurableQuantities:DataSetMeasurableQuantity[],
    images?:ElementImage[],
    schemaId:string,
    isParentOf?:string[],
    metadata?:Metadata,
    references?:Reference[]
}
```
### Data Model
```typescript
interface DataModel {

    schemaId:string,
    name:string,
    description:string,
    isParentOf?:string[],
    website?:string,
    githubRepository?:string,
    metadata?:Metadata,
    references?:Reference[]
}
```
### Initiative
```typescript
interface InitiativeMoreInfo {
    title:string,
    url:string
}

interface Initiative {
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
```
### Data Set
```typescript

interface DataSet {
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
```

### Data Measurement
```typescript
interface MeasurementValue {
    measurableQuantityId:string,
    unitId:string,
    value:any
}

interface DataMeasurement {
    values:MeasurementValue[],
    schemaId:string,
    dataSetId:string
}
```

### Misc types
```typescript
interface DataSetMeasurableQuantity {
    measurableQuantityId?:string,
    unitId?: string
}

interface ElementImage {
    id:string,
    main?: boolean,
    photoGallery?: boolean,
    logo?:boolean
}

interface DataSetLastMeasurement {
    measurableQuantityId:string,
    unitId:string,
    value:number,
    date:number
}

type Reference = {
    url:string,
    title?:string,
    description?:string
} | string

interface Metadata {
    [key: string]: string
}

interface Documentation {
    url:string,
    name:string,
    description?:string
}

interface Note {
    title:string,
    text:string
}

enum Status {
    Final = "Final",
    Draft = "draft"
}

interface Tag {
    name:string,
    type:string
}

interface Coordinate {
    lat:number,
    lon:number
}

interface OSMElementAddress {
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


interface OSMElement {
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


```


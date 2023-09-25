import {DataSetMeasurableQuantity, Documentation, ElementImage, Note, Status, Tag} from "../types";


export interface Component {
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

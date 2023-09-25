import {Call} from "./types";
import {DataCollection} from "./DataCollection";
import {Unit} from "./collectionTypes/Unit";
import {MeasurableQuantity} from "./collectionTypes/MeasurableQuantity";
import {DataConcept} from "./collectionTypes/DataConcept";
import {DataModel} from "./collectionTypes/DataModel";
import {Initiative} from "./collectionTypes/Initiative";
import {DataSet} from "./collectionTypes/DataSet";
import {DataMeasurement} from "./collectionTypes/DataMeasurement";
import {Component} from "./collectionTypes/Component";

export default class IoTCatalogue{
    private readonly call:Call;
    public unit: DataCollection<Unit>;
    public measurableQuantity: DataCollection<MeasurableQuantity>;
    public dataConcept: DataCollection<DataConcept>;
    public dataModel: DataCollection<DataModel>;
    public initiative: DataCollection<Initiative>;
    public dataSet: DataCollection<DataSet>;
    public dataMeasurement: DataCollection<DataMeasurement>
    public component: DataCollection<Component>
    constructor(call:Call) {
        this.call = call;
        this.unit = new DataCollection<Unit>({call:this.call,elementType:"units"})
        this.measurableQuantity = new DataCollection<MeasurableQuantity>({call:this.call,elementType:"measurableQuantities"})
        this.dataConcept = new DataCollection<DataConcept>({call:this.call,elementType:"dataConcepts"})
        this.dataModel = new DataCollection<DataModel>({call:this.call, elementType:"dataModels"})
        this.initiative = new DataCollection<Initiative>({call:this.call, elementType:"initiatives"})
        this.dataSet = new DataCollection<DataSet>({call:this.call, elementType:"dataSets"})
        this.dataMeasurement = new DataCollection<DataMeasurement>({call:this.call, elementType:"dataMeasurements"})
        this.component = new DataCollection<Component>({call:this.call, elementType:"components"})
    }
}




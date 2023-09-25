import {Call} from "./types";

interface ConstructorProps {
    elementType: string | null,
    call: Call
}



export class DataCollection<Type extends object> {
    private readonly elementType: string;
    private readonly call: Call;
    constructor({elementType,call}:ConstructorProps) {
        this.elementType = elementType;
        this.call = call;
    }

    send(element:Type):Promise<any>{
        return this.call("dataAPI.upsert",[element, this.elementType])
    }


    sendMany(elements:Type[]):Promise<any>{
        return this.call("dataAPI.upsertMany",[elements, this.elementType])
    }

}


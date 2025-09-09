import {Money} from "../../shared/domain/model/money";

export class Customer {

    private readonly _id: string;
    private readonly _name: string;
    private readonly _lastOrderPrice: Money | null;

    constructor(id: string, name: string, lastOrderPrice: Money | null = null) {
        this._id = id;
        this._name = name;
        this._lastOrderPrice = lastOrderPrice;
    }

    get name(): string {
        return this._name;
    }

    get id(): string {
        return this._id;
    }

    get lastOrderPrice(): Money | null {
        return this._lastOrderPrice;
    }

}
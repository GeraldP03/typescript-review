export class DateTime{

    private readonly _date: Date;

    constructor(value?: Date | string){
        const now = new Date();
        if (value){
            const parsedDate = new Date(value);
            if (isNaN(parsedDate.getTime()))
                throw Error(`Invalid date: ${parsedDate.getTime()}`);
            if (parsedDate> now)
                    throw Error(`Invalid date: ${parsedDate.getTime()}`);
                this._date = parsedDate;

        }else this._date= now;
    }
}
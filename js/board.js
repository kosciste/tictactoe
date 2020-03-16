export default class Board{
    constructor() {
        this._fields = Array.from(Array(3), () => Array(3).fill('--'))
        
    }
    
    draw(field, symbol){
        console.log(this._fields[0][0]);
        this._fields[field.charAt(0)][field.charAt(1)] = symbol;
        document.getElementById(field).innerHTML=symbol.toUpperCase();
    }

    getField(fieldID){
        return this._fields[fieldID.charAt(0)][fieldID.charAt(1)];
    }

    get fields(){
        return this._fields;


} }

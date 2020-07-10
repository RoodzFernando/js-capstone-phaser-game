export default class Score {
    constructor () {
        this._score = 0;
        this._scoreTable = [];
    }
    set score(value) {
        this._score = value;
    }

    get score() {
        return this._score
    }
    set scoreTable(value) {
        this._scoreTable.push(value);
    }
    get scoreTable() {
        return this._scoreTable;
    }
}
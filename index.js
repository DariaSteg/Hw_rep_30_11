"use strict";

class RangeValidator {
    constructor(from=0, to=10) {
      this.from = from;
      this.to = to;
    }
    get from() {
      return this._from;
    }
    set from(from) {
      if (typeof from !== "number") {
        throw new TypeError("from must be number");
      }
  
      if (from > this._to || from < 0) {
        throw new RangeError("numbers must be 0...10");
      }
      this._from = from;
    }

    get to() {
        return this._to;
      }
      set to(to) {
        if (typeof to !== "number") {
          throw new TypeError("from must be number");
        }
        if (to > 10 || to < this._from) {
          throw new RangeError("numbers must be 0...10");
        }
        this._to = to;
      }


    getrange() {   
       return [this._from,this._to]
      }

    validate () {
        return this._from < this._to
    }
}
  try {

    const worker = new RangeValidator();
    console.log(worker.validate());
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Wrong type");
    }
    if (error instanceof RangeError) {
      console.log("Wrong value");
    }
    console.log(error);
  }
import  add  from '../src/index';

describe("String Parser", () => {
    it("should sum string of numbers delimited by an operator", ()=>{
        expect(add("")).toBe(0);
    });
});
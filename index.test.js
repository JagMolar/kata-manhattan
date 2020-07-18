const MANHATTAN = require("./index");

describe('Esto debería tirar bien si pasa:',()=> {
    test('test1',()=>{
        expect(MANHATTAN([0,1],[3,5])).toBe(7);
    });

    test('test2',()=>{
        // expect(MANHATTAN).toThrow(TypeError);
        expect(()=>{
            MANHATTAN(1,2);
        }).toThrow();
    });
});
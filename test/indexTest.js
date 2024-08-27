const sumar = require('../index');
//const sumar = require('../index');
//import assert from 'assert';
const assert = require('assert');
// assert esta en el entorno

describe("Probar la suma de dos numeros", ()=>{
    //Afirmar que cinco mas cinco son 10.
    it("Cinco mas cinco es 10", ()=>{
        assert.equal(10, sumar(5,5));
    });
    //Afirmar que cinco mas cinco no son 55.
    it("Cinco mas cinco no son 55", ()=>{
        assert.notEqual(55, sumar(5,5));
    })
});
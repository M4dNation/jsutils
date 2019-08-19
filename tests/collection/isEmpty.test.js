require("should");

const isEmpty = require("../../lib/collection/isEmpty.js");

describe("isEmpty", function()
{
    it("Should be able to say [] is an empty array.", function()
    {
        let test = isEmpty([]);
        test.should.be.exactly(true);
    });

    it("Should be able to say [1] is not an empty array.", function()
    {
        let test = isEmpty([1]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [1,2,3] is not an empty array.", function()
    {
        let test = isEmpty([1,2,3]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [0,0,0] is not an empty array.", function()
    {
        let test = isEmpty([0,0,0]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [\"\"] is not an empty array.", function()
    {
        let test = isEmpty([""]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [\"\",\"\",\"\"] is not an empty array.", function()
    {
        let test = isEmpty(["","",""]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [\"aa\",\"aa\",\"aa\"] is not an empty array.", function()
    {
        let test = isEmpty(["aa","aa","aa"]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [\"12\",\"12\",\"12\"] is not an empty array.", function()
    {
        let test = isEmpty(["12","12","12"]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [''] is not an empty array.", function()
    {
        let test = isEmpty(['']);
        test.should.be.exactly(false);
    });

    it("Should be able to say ['','',''] is not an empty array.", function()
    {
        let test = isEmpty(['','','']);
        test.should.be.exactly(false);
    });

    it("Should be able to say ['aa','aa','aa'] is not an empty array.", function()
    {
        let test = isEmpty(['aa','aa','aa']);
        test.should.be.exactly(false);
    });

    it("Should be able to say ['12','12','12'] is not an empty array.", function()
    {
        let test = isEmpty(['12','12','12']);
        test.should.be.exactly(false);
    });

    it("Should be able to say [true] is not an empty array.", function()
    {
        let test = isEmpty([true]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [true,true,true] is not an empty array.", function()
    {
        let test = isEmpty([true,true,true]);
        test.should.be.exactly(false);
    });

    it("Should be able to say [false,false,false] is not an empty array.", function()
    {
        let test = isEmpty([false,false,false]);
        test.should.be.exactly(false);
    });

    it("Should be able to say {} is an empty object.", function()
    {
        let test = isEmpty({});
        test.should.be.exactly(true);
    });

    it("Should be able to say {'titi': 'toto'} is not an empty object.", function()
    {
        let test = isEmpty({'titi': 'toto'});
        test.should.be.exactly(false);
    });
});
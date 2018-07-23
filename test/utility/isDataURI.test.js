require("should");

const isDataURI = require("../../lib/utility/isDataURI.js");

describe("isDataURI", function () 
{
    it("Should find out if the provided address is a data URI.", function () 
    {
        isDataURI("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC").should.be.exactly(true);
        isDataURI("data:,Hello World!").should.be.exactly(true);
        isDataURI("dataxbase64").should.be.exactly(false);
        isDataURI("data:text/html;charset=,%3Ch1%3EHello!%3C%2Fh1%3E").should.be.exactly(false);
        isDataURI("http://wikipedia.org").should.be.exactly(false);
    });
});
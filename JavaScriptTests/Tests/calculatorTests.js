describe("calculator.add", function () {
    it("should add", function () {

        var result = new calculator().add(3, 2);
        expect(result).toBe(5);
    });
});
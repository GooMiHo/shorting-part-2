describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1, 3, 4, 6, 8, 7])).toEqual([[1, 3, 4], [6, 8, 7]])
    });

    it('is able to split an odd number length array and round it up', function(){
        expect(split([3,4,7,2,5])).toEqual([[3, 4, 7], [2, 5]])
    });

    it('returns the array if the length is <= 1', function(){
        expect(split([])).toEqual([]);
        expect(split([3])).toEqual([3])
    });
    it('returns an array', function(){
        expect(Array.isArray (split([]))).toEqual(true)
    })

});








//   it('is able to sort when there is a repeat number', function(){
//     expec(merge([11, 3, 5, 17, 11, 9, 5]).toEqual([3, 5, 5, 9, 11, 11, 17]))
// })
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

describe('Merge function', function(){
    it('is should return an array', function(){
        expect(Array.isArray(merge([10, 6, 90], [10, 3, 4]))).toEqual(true);
    });
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1, 5, 7], [3, 4, 10])).toEqual([1, 3, 4, 5, 7, 10])
    });
    it('is able to merge two sorted arrays into one sorted array when first array is one element longer', function(){
        expect(merge([1, 5, 7, 20], [3, 4, 10])).toEqual([1, 3, 4, 5, 7, 10, 20])
    });
    it('is able to sort when there is a repeat number', function(){
        expect(merge([3, 5, 11], [5, 9, 11])).toEqual([3, 5, 5, 9, 11, 11]);
    })
    it('returns the each array is empty', function(){
        expect(merge([], [])).toEqual([]);
    });
    it('returns the each array has a length od 1', function(){
        expect(merge([4], [2])).toEqual([2, 4]);
    });
  });

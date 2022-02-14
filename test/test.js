var assert = require('assert');
var reverse = require('../reverse').myReverse;
describe('Reverse', () => {

    it('Lower Case: qwerty -> YTREWQ', function() {
      assert.equal(reverse("qwerty"), "YTREWQ");
    });

    it('Upper Case: ASDF -> fdsa', function() {
      assert.equal(reverse("ASDF"), "fdsa");
    });

    it('Upper Case: 123456 -> 654321', function() {
      assert.equal(reverse("123456"), "654321");
    });
    
    it('Lower Case + Upper Case + Number: abCD12 -> 21dcBA', function() {
      assert.equal(reverse("abCD12"), "21dcBA");
    });
});
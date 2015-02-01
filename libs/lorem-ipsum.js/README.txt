knicklabs/lorem-ipsum.js per
https://github.com/knicklabs/lorem-ipsum.js

License

This software is licensed under the MIT license.

Copyright (c) 2012-2014 Nickolas Kenyeres

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


output = loremIpsum({
    count: 1                      // Number of words, sentences, or paragraphs to generate.
  , units: 'sentences'            // Generate words, sentences, or paragraphs.
  , sentenceLowerBound: 5         // Minimum words per sentence.
  , sentenceUpperBound: 15        // Maximum words per sentence.
  , paragraphLowerBound: 3        // Minimum sentences per paragraph.
  , paragraphUpperBound: 7        // Maximum sentences per paragraph.
  , format: 'plain'               // Plain text or html
  , words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
  , random: Math.random           // A PRNG function. Uses Math.random by default
});



/*
 * Helpers
 */
function generateWords(random) {
  var generator = require('./../lib/generator');
  var words = [];

  for (var i = 0; i < 100; i++) {
    words.push(generator({
      count: 1,
      units: 'words',
      random: random
    }));
  }

  return words.join(', ');
}

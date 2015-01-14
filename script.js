// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number
  var myNumber = 42;

  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
  var stringValue = numberToString(myNumber);

  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */
  console.log("myNumber and stringValue are equal: " + areEqual(myNumber, stringValue));
  console.log("They are not equal because areEqual checks for strict equality.");

  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */

  //Yes, I called those functions inside of calculate.

  // Do you see any other functions where code could be reused?

  //Yes, wherever I use the operators (divide, multiply, subtract, add), I could use
  //the functions I wrote earlier.

  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
   */

   //Added two switch cases: (1) percent > 100%, receives A+ (2) default
   //(for scores less than 0), still receives F.

  /**
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */

  // What happens if you were to uncomment the following lines?

  combine = improvedCombine;
  console.log(combine('combine', 'improved!', ' is '));
}

# react-word-checker

A React Hook that allows you to check if any word is a valid English word. 

Word list is from https://github.com/lorenbrichter/Words.

## Installation
---
```
$ npm install react-word-checker
```

## API
---
### Return values
 - `words`: An object with keys for all the words in the valid word list. 
 ```js
    {
        "apple": true,
        "banana": true,
        "word": true,
        ...
    }
 ```
 - `isLoading`: A boolean that returns whether the word list has been loaded or not.
 - `wordExists`: A function that returns `true` if the word exists in the word list and `false` if it does not. Takes in a single lowercase word as an argument.

## Example
---
```js
import { useWordChecker } from 'react-word-checker';

const MyComponent = () => {
  { words, isLoading, wordExists } = useWordChecker();

  useEffect(() => {
    if (!isLoading){
        console.log(wordExists("apple")); // returns true
        console.log(wordExists("ApPLe")); // returns false! argument must be all lowercase
        console.log(wordExists("asdasd")); // returns false
    }
  }, [isLoading]);
}
```

## Contributing 
---
Any contributions to improve this project are very welcome! Submit a PR and I will take a look.

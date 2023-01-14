# react-word-checker

A React Hook that allows you to check if any word is a valid word in English, Spanish, or French. 

Credit to https://github.com/lorenbrichter/Words for the word lists.

## Installation
```
$ npm install react-word-checker
```

## Types
```js
declare const useWordChecker: (language?: string) => {
    words: {
        [name: string]: boolean;
    };
    isLoading: boolean;
    wordExists: (word: string) => boolean;
};
```

## API

`useWordChecker()` takes in a language code as an optional singular argument. This will default to `en` if nothing is given.

### Options
 - `en`: English
 - `es`: Spanish
 - `fr`: French

### Example
```js
useWordChecker("en");
useWordChecker("fr");
```

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
 - `wordExists()`: A function that returns `true` if the word exists in the word list and `false` if it does not. Takes in a single string as an argument.

## Usage Example
```js
import { useWordChecker } from 'react-word-checker';

const MyComponent = () => {
  { words, isLoading, wordExists } = useWordChecker("en");

  useEffect(() => {
    if (!isLoading){
        console.log(wordExists("apple")); // returns true
        console.log(wordExists("ApPLe")); // returns true, function sets argument string to lowercase
        console.log(wordExists("asdasd")); // returns false
    }
  }, [isLoading]);
}
```

## Contributing 
Any contributions to improve this project are very welcome! Submit a PR and I will take a look.

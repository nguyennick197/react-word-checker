import { useState, useEffect } from "react";
import en_words from "../words/en.txt";

export const useWordChecker = () => {
    const [words, setWords] = useState<{[name: string]: boolean}>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWords = async () => {
            const wordMap: {[name: string]: boolean} = {};
            const response = await fetch(en_words);
            const text = await response.text();
            const lines = text.split("\n");
            for (let i = 0; i < lines.length; i++) {
                wordMap[lines[i]] = true;
            }
            setWords(wordMap);
            setIsLoading(false);
        }
        fetchWords();
    }, []);

    const wordExists = (word: string) => {
        return words[word] === true;
    }

    return { words, isLoading, wordExists };
}
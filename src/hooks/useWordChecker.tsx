import { useState, useEffect } from "react";
import en from "../words/en.txt";
import es from "../words/es.txt";
import fr from "../words/fr.txt";

const langMap = {
    "en": en,
    "es": es,
    "fr": fr,
}

export const useWordChecker = (language: string = "en") => {
    const [words, setWords] = useState<{ [name: string]: boolean }>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const fetchWords = () => {
            const wordMap: { [name: string]: boolean } = {};
            const lines = langMap[language].split("\n");
            for (let i = 0; i < lines.length; i++) {
                wordMap[lines[i]] = true;
            }
            setWords(wordMap);
            setIsLoading(false);
        }
        fetchWords();
    }, [language]);

    const wordExists = (word: string) => {
        return words[word.toLowerCase()] === true;
    }

    return { words, isLoading, wordExists };
}
import React from 'react';
import { cleanup, render, renderHook } from '@testing-library/react';
import { useWordChecker } from '../dist';

beforeEach(() => {
    cleanup();
});

afterEach(() => {
    cleanup();
});

test('should validate word checker return values', () => {
    const { result } = renderHook(() => useWordChecker());

    expect(result.current).toHaveProperty('words');
    expect(result.current).toHaveProperty('isLoading');
    expect(result.current).toHaveProperty('wordExists');
    
    expect(result.current.words).toBeInstanceOf(Object);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.wordExists).toBeInstanceOf(Function);
});

test('test useWordChecker in component', () => {
    const TestComponent = () => {
        const { isLoading, wordExists } = useWordChecker();

        React.useEffect(() => {
            if (!isLoading) {
                expect(isLoading).toBe(false);
                expect(wordExists("table")).toBe(true);
                expect(wordExists("asdasd")).toBe(false);
            }
        }, [isLoading]);

        return null;
    }
    render(<TestComponent />)
});
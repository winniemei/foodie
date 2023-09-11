/**
 * @jest-environment jsdom
 */

import AllRecipes from "../components/Recipes";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// where are we testing
describe('Recipes Component', () => {
    // what are we testing
    test('displays recipe title in the browser', () => {
        //how are we expecting/what do we expect to see
        render(<AllRecipes />)

        // Checking the jest-environment browser window for the string 'Salmon'
        const salmon = screen.getByText('Salmon');

        expect(salmon).toBeInTheDocument();
    })
});
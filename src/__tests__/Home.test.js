import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe('Home', () => {
    test("renders successfully", () => {
        render(<Home/>);
        const PageHeading = screen.getByRole('heading',{
            level: 2
        });
        expect(PageHeading).toBeInTheDocument();
    });

    test("renders successfully with heading text tested as string", () => {
        render(<Home/>);
        const PageHeading = screen.getByRole('heading',{
            level: 2
        });
        expect(PageHeading).toHaveTextContent('Home Page');
    });

    test("renders successfully with heading text tested as regex", () => {
        render(<Home/>);
        const PageHeading = screen.getByRole('heading',{
            level: 2
        });
        expect(PageHeading).toHaveTextContent(/Home/);
    });
});
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/app/components/ui/button';
import userEvent from '@testing-library/user-event';
describe('Button', () => {
    it('renders with default variant and size', () => {
        render(<Button>Click Me</Button>);

        const button = screen.getByText(/click me/i);
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass(
            'bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
        );
    });

    it('renders with a custom variant', () => {
        render(<Button variant="destructive">Delete</Button>);

        const button = screen.getByText(/delete/i);
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass(
            'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90'
        );
    });

    it('renders with a custom size', () => {
        render(<Button size="sm">Small Button</Button>);

        const button = screen.getByText(/small button/i);
        expect(button).toBeInTheDocument();
        // Check that the button has classes for the "sm" size
        expect(button).toHaveClass('h-8 rounded-md px-3 text-xs');
    });

    it('calls onClick handler when clicked', async () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);

        const button = screen.getByText(/click me/i);
        await userEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders as a custom component when `asChild` is true', () => {
        render(
            <Button asChild>
                <a href="/some-link">Link Button</a>
            </Button>
        );

        const link = screen.getByText(/link button/i);
        expect(link).toBeInTheDocument();
        expect(link.tagName).toBe('A');
    });

    it('has correct disabled behavior', () => {
        render(<Button disabled>Disabled Button</Button>);

        const button = screen.getByText(/disabled button/i);
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
        const handleClick = jest.fn();
        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });
});

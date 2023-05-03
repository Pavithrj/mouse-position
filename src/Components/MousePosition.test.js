import { fireEvent, render } from "@testing-library/react";
import MousePosition from "./MousePosition";

describe('MousePosition', () => {
    test('displays the correct mouse position on mouse move', () => {
        const { getByTestId } = render(<MousePosition />);
        const mousePositionEl = getByTestId('mouseposition');
        fireEvent.mouseMove(mousePositionEl, { clientX: 100, clientY: 200 });
        expect(mousePositionEl.textContent).toBe("Mouse position x:100Mouse position y:200");
    });
});
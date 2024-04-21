import { render, fireEvent } from '@testing-library/react'
import Calculator from "./calculator"
test('Checking the Add function', () => { 

    const {getByText,getByLabelText} = render(<Calculator />);
    const input1 =getByLabelText('Number 1');
    fireEvent.change(input1,{target : {value : 10}});
    const input2 = getByLabelText("Number 2");
    fireEvent.change(input2,{target : {value : 20}});
    const button = getByText("Add");
    fireEvent.click(button);
    const result = getByText("Result is : 30");
    expect(result).toBeInTheDocument();

 })
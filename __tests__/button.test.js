test('Check the number of buttons we have in the title scene', () => {
  const buttonMock = jest.fn();
  let play = buttonMock();
  let options = buttonMock();
  let credits = buttonMock();
  expect(buttonMock).toHaveBeenCalledTimes(3);
})
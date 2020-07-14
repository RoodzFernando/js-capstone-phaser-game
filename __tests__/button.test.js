test('Check the number of buttons we have in the title scene', () => {
  const buttonMock = jest.fn();
  const play = buttonMock();
  const options = buttonMock();
  const credits = buttonMock();
  expect(buttonMock).toHaveBeenCalledTimes(3);
});
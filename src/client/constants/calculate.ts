export const actions: (isChangeNumber: boolean) => Object[] = (
  isChangeNumber
) => [
  [isChangeNumber ? "C" : "AC", "+/-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ",", "="],
];

export const CLEAR_NUMBER: string[] = ["C", "AC"];

export const CACULATES: string[] = [...CLEAR_NUMBER, "+/-", "%"];

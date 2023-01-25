var generateMatrix = function (n) {
  let result = new Array(n).fill(n).map(() => new Array(n).fill(0));

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let direction = "right";
  let num = 1;
  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result[top][i] = num;
        num++;
      }
      top += 1;
      direction = "down";
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        result[i][right] = num;
        num++;
      }
      right -= 1;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result[bottom][i] = num;
        num++;
      }
      bottom -= 1;
      direction = "up";
    } else if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = num;
        num++;
      }
      left += 1;
      direction = "right";
    }
  }
  return result;
};

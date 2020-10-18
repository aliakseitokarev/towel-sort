
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (arguments.length !== 0 || matrix !== undefined) {
            matrix.forEach((element, index) => {
            if (index % 2 === 0) {
                result = [...result,...element.sort((a,b) => a-b)];
            } else {
                result = [...result,...element.sort((a,b) => b-a)];
            };
        });
    };
  return result;
}

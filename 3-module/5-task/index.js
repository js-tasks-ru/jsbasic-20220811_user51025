function getMinMax(str) {
  let minMaxObj = {};

  let itemArr = str
                .split(' ')
                .map(item => +item)
                .filter(item => !isNaN(item))
                .sort( (a, b) => (a - b) )

  return minMaxObj = {
                      min: itemArr[0],
                      max: itemArr.at(-1)
                    };
}

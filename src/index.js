module.exports = function check(str, bracketsConfig) {
  let stack = [];


  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    switch (element) {
      case '1':
      case '3':
      case '5':
      case '(':
      case '[':
      case '{':
        // console.log(element);
        stack.push(element);
        // console.log(stack);
        // console.log(stack[stack.length - 1]);
        // console.log(stack.length);
        break;
      case ')':
        if (stack.length > 0 && stack[stack.length - 1] == '(') {
          stack.pop(element);
        } else (
          stack.push(element)
        )
        break;
      case ']':
        if (stack.length > 0 && stack[stack.length - 1] == '[') {
          stack.pop(element);
        }
        break;
      case '}':
        if (stack.length > 0 && stack[stack.length - 1] == '{') {
          stack.pop(element);
        }
        break;
      case '|':
        // console.log(" нашли |");
        // console.log(element);
        if (stack[stack.length - 1] == '|') {
          // console.log(" удалили |");
          stack.pop(element);
        } else {
          // console.log(" закинули |");
          stack.push(element);
        }
        break;
      case '2':
        // console.log(" добавили 2")
        if (stack.length > 0 && stack[stack.length - 1] == '1') {
          stack.pop(element);
        }
        break;
      case '4':
        // console.log(" добавили 4")
        if (stack.length > 0 && stack[stack.length - 1] == '3') {
          stack.pop(element);
        }
        break;
      case '6':
        // console.log(" добавили 6")
        if (stack.length > 0 && stack[stack.length - 1] == '5') {
          stack.pop(element);
        }
        break;
      case '7':
        if (stack[stack.length - 1] == '7') {
          // console.log(" удалили 7");
          stack.pop(element);
        } else {
          // console.log(" закинули 7");
          stack.push(element);
        }
        break;
      case '8':
        if (stack[stack.length - 1] == '8') {
          // console.log(" удалили 8");
          stack.pop(element);
        } else {
          // console.log(" закинули 8");
          stack.push(element);
        }
        break;
      // console.log(stack);
    }
  }
  // console.log(stack.length)

  const stack1 = [];
  // console.log(config2);
  for (let index = 0; index < bracketsConfig.length; index++) {
    const element = bracketsConfig[index];
    // console.log(element);
    for (let index = 0; index < element.length; index++) {
      const element1 = element[index];
      // console.log(element1);
      switch (element1) {
        case '(':
        case '[':
        case '{':
          stack1.push(element1)
          // console.log(stack1);
          // console.log(stack1.length);
          break;

        case ')':
          if (stack1.length > 0 && stack1[stack1.length - 1] == '(') {
            stack1.pop();
          }
          break;
        case ']':
          if (stack1.length > 0 && stack1[stack1.length - 1] == '[') {
            stack1.pop();
          }
          break;
        case '}':
          if (stack1.length > 0 && stack1[stack1.length - 1] == '{') {
            stack1.pop();
          }
          break;
        case '|':
          // console.log(" нашли |");
          if (stack[stack.length - 1] == '|') {
            stack.pop();
          } else {
            stack.push();
          }
        // console.log(stack1);
      }
    }
  }
  if (stack.length > 0 || stack1.length > 0) {
    return false
  } else {
    return true
  }
}
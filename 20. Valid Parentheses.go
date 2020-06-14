
// https://leetcode.com/problems/valid-parentheses/
func isValid(s string) bool {
    var stack []uint32
    
    for _, el := range s {
        switch (el) {
            case '{':
            stack = append(stack, 0);
                break;
            case '[':
            stack = append(stack, 1);
                break;
            case '(':
            stack = append(stack, 2);
                break;
            case '}':
            if len(stack) == 0 || stack[len(stack)-1] != 0 {
                return false
            }
            stack = stack[:len(stack)-1]
                break;
            case ']':
              if len(stack) == 0 || stack[len(stack)-1] != 1 {
                return false
             }
             stack = stack[:len(stack)-1]
                break;
            case ')':
              if len(stack) == 0 || stack[len(stack)-1] != 2 {
                return false
             }
             stack = stack[:len(stack)-1]
                break;
            default: 
                return false;
        }
    }
    
    return len(stack) == 0
}
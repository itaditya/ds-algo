//  Knuth-Morris-Pratt algorithm 


// Compute temporary array to maintain size of suffix which is same as prefix
// Time/space complexity is O(size of pattern)
function compute_temporary_array(pattern) {
    n = pattern.length
    lsp = new Array(n)
    index = 0
    i = 1
    while (i < n){
        if (pattern[i] == pattern[index]) {
            lsp[i] = index + 1
            index += 1
            i += 1
        } else {
            if (index != 0) {
                index = lsp[index - 1]
            }
            else {
                lsp[i] = 0
                i += 1
            }
        }
    }
    return lsp
}

// KMP algorithm of pattern matching.
function kmp(text, pattern) {
    lsp = compute_temporary_array(pattern)
    len_text = text.length
    len_pattern = pattern.length
    i = 0
    j = 0
    while (i < len_text && j < len_pattern) {
        if (text[i] == pattern[j]) {
            i += 1
            j += 1
        } else {
            if (j != 0) {
                j = lsp[j - 1]
            }
            else {
                i += 1
            }
        }
    }
    return (j == len_pattern)
}

src = 'abcxabcdabcdabcy'
sub_string = 'abcdabcy'

result = kmp(src, sub_string)
console.log(result)

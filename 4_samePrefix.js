
var longestCommonPrefix = function (strs) {
    let itLetra = 0
    let newArray = []
    if (strs.length > 1) {
        for (let i = 0; i < strs.length; i++) {
            if (i != 0) {
                if (strs[i] != "") {
                    if (strs[i][itLetra] == strs[i - 1][itLetra]) {
                        if (i == strs.length - 1) {
                            console.log(strs[i][itLetra]);
                            newArray.push(strs[i][itLetra])
                            itLetra++
                            if (itLetra < strs[i].length) {
                                i = 0
                            }
                        }
                    } else {
                        i = strs.length + 1
                    }
                }
            }
        }
    } else {
        newArray.push(strs[0])
        console.log(newArray);
    }

    return newArray.join("")
};

console.log(longestCommonPrefix(["flower", "flower"]));
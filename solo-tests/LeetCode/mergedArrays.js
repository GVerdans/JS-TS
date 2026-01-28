const nums1 = [1, 3];
const nums2 = [2, 5];


function Media(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = mergedArray.length;
    console.log(mergedArray);

    return len % 2 === 1 ? mergedArray[Math.floor(len / 2)] : (mergedArray[len / 2 - 1] + mergedArray[len / 2]) / 2;
}


Media(nums1, nums2)




// First Try i do like this =)
// edit 1: I do Wrong =( SUAHSUASH

/*
function Media1(nums1, nums2) {
    const mergedArray = nums1.concat(nums2);
    let sum = 0;
    mergedArray.forEach((el) => sum += el)
    let media = sum / mergedArray.length;
    console.log(`The array's media is ${media}`)

    return media;
}

Media1(nums1, nums2)
*/



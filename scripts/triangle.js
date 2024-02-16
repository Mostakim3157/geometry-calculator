/*
objective: get h, b of triangle. display the area by  using the provided formula and display the area.
step-1: get base value input field triangle-base


*/


function calculateTriangleArea() {
    // get triangle base value
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value
    const base = parseFloat(triangleBaseText)
    // console.log(base)


    // get triangle height
    const triangleHeight = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeight.value
    const height = parseFloat(triangleHeightText)
    // console.log(height)


    // calculate triangle area
    const area = 0.5 * base * height
     const finalArea = area.toFixed(2)
    // console.log('Area of triangle:',area.toFixed(2));

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = finalArea

}
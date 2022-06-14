const label = document.getElementById('label');
const textDiv = document.getElementById('line');
// Change text color on mouseover
label.addEventListener('mouseover', function handleMouseOver() {
	textDiv.style.backgroundColor = '#FAD400';
});
//️ Change text color back on mouseout
label.addEventListener('mouseout', function handleMouseOut() {
	textDiv.style.backgroundColor = '#FEF2BA';
});
const label_red = document.getElementById('label_red');
const textDiv_red = document.getElementById('line_red');
// Change text color on mouseover
label_red.addEventListener('mouseover', function handleMouseOver() {
	textDiv_red.style.backgroundColor = '#FE7766';
});
// Change text color back on mouseout
label_red.addEventListener('mouseout', function handleMouseOut() {
	textDiv_red.style.backgroundColor = '#FFDBD4';
});
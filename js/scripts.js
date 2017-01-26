//deklaracja zmiennych
var a,
	h;
//deklaracja funkcji wyliczajcej pole trojkata
function getTriangleArea(a, h) {
	if ( (a <= 0) || (h <=0 ) ) {
		console.log('Nieprawidłowe dane!');
	} else if ( (a > 0) && (h > 0) ) {
		var value = a * h / 2;
		return value;
	}
}
//wywolania funkcji getTriangleArea
console.log( getTriangleArea(10, 6) );
var triangle1Area = getTriangleArea(26, 12);
console.log('Pole 1 = ', triangle1Area);
var triangle2Area = getTriangleArea(8, 10);
console.log('Pole 2 = ', triangle2Area);
var triangle3Area = getTriangleArea(2, 1);
console.log('Pole 3 = ', triangle3Area);
//wywolanie funkcji z blednymi danymi
getTriangleArea(-2, 8);
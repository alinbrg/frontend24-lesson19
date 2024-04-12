// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}

	// return number % 2 === 0;
}

// console.log(isEven(4));
// console.log(isEven(5));

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.
function getRectangleArea(width, height) {
	return width * height;
}
// console.log(getRectangleArea(4, 5));

// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function getSquareArea(side) {
	return getRectangleArea(side, side);
}
// console.log(getSquareArea(5));

// 4.Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// Math.floor() - ამრგვალებს რიცხვს ნაკლებობით, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round() - ამრგვალებს რიცხვს უახლოეს მთელამდე.
// Math.ceil() - ამრგვალებს რიცხვს უახლოეს მთელამდე, მაგალითად Math.ceil(4.1) აბრუნებს 5-ს.
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.
function getRandomNumber() {
	return Math.round(Math.random() * 100);
}

// console.log(getRandomNumber());

// 5. ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი characters.js სადაც გვაქვს პერსონაჟების მასივი (characters). გადააკოპირეთ ეს მასივი თქვენთან და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტებს(ობიექტებს), რომელთა alternate_names მასივის მნიშვნელობაც არის ცარიელი
// console.log(characters);
function getCharactersWithoutAlternateNames(usersArray) {
	return usersArray.filter((user) => user.alternate_names.length === 0);
}

// console.log(getCharactersWithoutAlternateNames(characters));

/**
 * Little-endian bignum. Naive implementation.
 *
 * First value represents [0, BASE], next is (BASE, BASE^2], etc.
 * Only the first value will have a fractional component.
 */

const BASE_EXP = 5;
const BASE = 10 ** BASE_EXP;

const take = (groupSize, list) => {
	const length = list.length;
	const result = [];

	for (let i = 0; i < length; i += groupSize) {
		result.push(list.slice(i, i + groupSize));
	}

	return result;
};

const bignum = {};

bignum.create = () => [0];
bignum.from = v => [v];

bignum.floor = v => {
	const result = [...v];

	result[0] = Math.floor(result[0]);

	return result;
};

bignum.add = (first, second) => {
	// Sort values so that digits(a) >= digits(b)
	const a = first.length >= second.length ? first : second;
	const b = first.length >= second.length ? second : first;

	const result = [];
	let carry = 0;

	for (let i = 0; i < a.length; i++) {
		const aValue = a[i] || 0;
		const bValue = b[i] || 0;

		let sum = aValue + bValue + carry;
		carry = 0;

		if (sum >= BASE) {
			carry = Math.floor(sum / BASE);
			sum = sum % BASE;
		}

		result.push(sum);
	}

	if (carry !== 0) {
		result.push(carry);
	}

	return result;
};

/**
 * Breaks a bignum into a whole bignum and a regular fraction.
 */
bignum.fractSplit = num => {
	const whole = [...num];
	whole[0] = Math.floor(whole[0]);
	const fractional = num[0] - whole[0];

	return [whole, fractional];
};

bignum.displaySimple = num => num
	.map(value => {
		if (value >= 1 || value === 0) {
			return value.toString();
		} else {
			return value.toString().substr(1);
		}
	})
	.join("");

// Wow! This is a crappy implementation of this function.
bignum.displayEnglish = num => {
	const [whole] = bignum.fractSplit(num);

	const digits = bignum.displaySimple(whole).split("").reverse();
	const groups = take(3, digits).map(value => value.reverse().join(""));
	return groups.reverse().join(",");
};

bignum.unsafeResolve = num => {
	let sum = 0;

	for (let i = 0; i < num.length; i++) {
		sum += (num[i] * (BASE ** i));
	}

	return sum;
};

export default bignum;
/**
 * Little-endian bignum. Naive implementation.
 *
 * First value represents [0, BASE], next is (BASE, BASE^2], etc.
 * Only the first value will have a fractional component.
 */

const BASE = 100000;

const bignum = {};

bignum.create = () => [0];

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

bignum.unsafeResolve = (num) => {
	let sum = 0;

	for (let i = 0; i < num.length; i++) {
		sum += (num[i] * (BASE ** i));
	}

	return sum;
};

export default bignum;
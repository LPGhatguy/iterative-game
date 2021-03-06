import bignum from "./bignum";

describe("bignum", () => {
	it("should construct", () => {
		const num = bignum.create();

		expect(num).toBeDefined();
	});

	describe("add", () => {
		it("should add to zero", () => {
			const a = [0];
			const b = [100];

			const result = bignum.add(a, b);

			expect(result).toHaveLength(1);
			expect(result[0]).toEqual(100);
		});

		it("should add values", () => {
			const a = [1000];
			const b = [10000];

			const result = bignum.add(a, b);

			expect(result).toHaveLength(1);
			expect(result[0]).toEqual(11000);
		});

		it("should wrap values", () => {
			const a = [99999];
			const b = [1];

			const result = bignum.add(a, b);

			expect(result).toHaveLength(2);
			expect(result[0]).toEqual(0);
			expect(result[1]).toEqual(1);
		});

		it("should wrap bigger values", () => {
			const a = [0, 1, 1];
			const b = [0, 99999, 0];

			const result = bignum.add(a, b);

			expect(result).toHaveLength(3);
			expect(result[0]).toEqual(0);
			expect(result[1]).toEqual(0);
			expect(result[2]).toEqual(2);
		});

		it("should keep fractions in the least significant slot", () => {
			const a = [0.12345, 99999];
			const b = [99999.9, 1];

			const result = bignum.add(a, b);

			expect(result).toHaveLength(3);
			expect(result[0]).toBeLessThan(1);
			expect(result[1]).toEqual(1);
			expect(result[2]).toEqual(1);
		});
	});

	describe("displaySimple", () => {
		it("should work on small values", () => {
			const value = [0];
			const result = bignum.displaySimple(value);

			expect(result).toEqual("0");
		});

		it("should work on multiple slot values", () => {
			let value = [12345, 12345, 12];
			let result = bignum.displaySimple(value);

			expect(result).toEqual("123451234512");

			value = [12, 340, 56];
			result = bignum.displaySimple(value);

			expect(result).toEqual("1234056");
		});

		it("should work on decimals", () => {
			const value = [123, 123, 123, 0.1];
			const result = bignum.displaySimple(value);

			expect(result).toEqual("123123123.1");
		});
	});

	describe("displayEnglish", () => {
		it("should work on small values", () => {
			const value = [0];
			const result = bignum.displayEnglish(value);

			expect(result).toEqual("0");
		});

		it("should work on multiple slot values", () => {
			let value = [12345, 12345, 12];
			let result = bignum.displayEnglish(value);

			expect(result).toEqual("123,451,234,512");

			value = [12, 340, 56];
			result = bignum.displayEnglish(value);

			expect(result).toEqual("1,234,056");
		});
	});

	it("should unsafeResolve", () => {
		const num = bignum.create();

		expect(bignum.unsafeResolve(num)).toEqual(0);
	});
});
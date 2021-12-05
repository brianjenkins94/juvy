import test from "ava";

function sum(a: number, b: number) {
	return a + b;
}

function subtract(a: number, b: number) {
	return a - b;
}

test("sum", t => {
	t.is(sum(0, 0), 0);
	t.is(sum(2, 2), 4);
});

test("subtract", t => {
	t.is(subtract(0, 0), 0);
	t.is(subtract(4, 2), 2);
});

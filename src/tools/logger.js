import { typeCheck } from "./utils";

const b = ["background:black;padding:4px 10px;color:#eace6c", "background:#fadfa3;padding:4px 10px;color:black"];
function logger(...o) {
	const result = o.reduce((t, c) => {
		const temp = [c];
		if (typeCheck(c) === "[object String]") {
			const arr = c.match(/%c/g);
			arr.forEach((_, index) => {
				temp.push(b[index]);
			});
		}
		return [...t, ...temp];
	}, []);
	console.log(...result);
}

export default logger;

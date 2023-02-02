const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	fs.stat("./index.html", (err, stats) => {
		if (!err && stats.isFile()) {
			res.writeHead(200);
			fs.createReadStream("./index.html").pipe(res);
		} else {
			res.writeHead(404);
			res.end("404 Not Found");
		}
	});
});

app.get("/ees", (ewq, res) => {
	res.writeHead(200, {
		"Content-Type": "text/event-stream;charset=utf-8", // 规定把报头设置为 text/event-stream
		"Cache-Control": "no-cache" // 设置不对页面进行缓存
	});

	setInterval(() => {
		// 定时事件
		essMsgFn(res, "test", { time: Date.now() });
	}, 2000);
});
function essMsgFn(stream, event, data) {
	return stream.write(`id:${Date.now()}\nevent:${event}\ndata:${JSON.stringify(data)}\n\n`);
}
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

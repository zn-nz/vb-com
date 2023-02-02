const fs = require("fs");
const path = require("path");
const PassThrough = require("stream").PassThrough;
const Readable = require("stream").Readable;
const koa = require("koa");
const Router = require("koa-router");
const app = new koa();
const router = new Router();

function RR() {
	Readable.call(this, arguments);
}
RR.prototype = new Readable();
RR.prototype._read = function (data) {};

router.get("/", function (ctx, next) {
	ctx.set("content-type", "text/html");
	ctx.body = fs.readFileSync(path.join(process.cwd(), "index.html"));
});

const sse = (stream, event, data) => {
	return stream.push(`id:${Date.now()}\nevent:${event}\ndata: ${JSON.stringify(data)}\n\n`);
	//    return stream.write(`event:${ event }\ndata: ${ JSON.stringify(data) }\n\n`);
};
router.get("/ees", function (ctx, next) {
	var stream = new RR(); //PassThrough();
	ctx.set({
		"Content-Type": "text/event-stream",
		"Cache-Control": "no-cache",
		Connection: "keep-alive"
	});
	sse(stream, '', '首条消息');
	ctx.body = stream;
	setInterval(() => {
		sse(stream, "test", { a: "yango", b: Date.now() });
	}, 1000 * 10);
});

app.use(router.routes());
app.listen(3000, function () {
	console.log("http://localhost:3000");
});

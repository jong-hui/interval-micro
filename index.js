
module.exports = function(cb, timeout, ...args) {
	this.timeout = timeout;
	this.cb = cb;
	this.args = args;
	this.step = timeout < 10 ? timeout : 10;
	this.i = 0;
	this.interval = 0;
	this.status = 0;

	this.start = () => {
		this.stop();
		this.status = 1;

		this.interval = setInterval(() => {

			if (this.status) {
				this.i += this.step;

			}

			if (this.i >= this.timeout) {
				this.i = 0;
				this.cb(...args);
			}

		}, this.step);

		return this;
	}

	this.stop = () => {

		this.status = 0;
		clearTimeout(this.interval);

		return this;
	}

	this.clear = () => {
		this.i = 0;
	}

	return this.start();
}
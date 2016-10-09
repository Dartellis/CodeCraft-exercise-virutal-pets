function Pet(name) {
	this.name = name;
	this.hunger = 0;
	this.fun = 100;

	this.maxHunger = 200;
	this.maxFun = 200;

	this.minHunger = -100;
	this.minFun = 0;

	this.info = "I am happey!"

	this.feed = function(food) {
		this.hunger -= food;
		this.fun -= food / 2;
	};

	this.play = function(fun) {
		this.fun += fun;
		this.hunger += fun / 2;
	};

	this.update = function() {
		console.log(this.info);
		if(this.hunger > this.maxHunger) {
			this.info = "I'm hungry!";
			this.hunger = this.maxHunger;
			this.health--;
		}

		if(this.fun > this.maxFun) {
			this.info = "I'm having to much fun!"
			this.fun = this.maxFun;
			this.health--;
		}

		if(this.hunger < this.minHunger) {
			this.info = "I should be having more fun!";
			this.hunger = this.minHunger;
			this.health--;
		}

		if(this.fun < this.minFun) {
			this.info = "I'm full!"
			this.fun = this.minHunger;
			this.health--;
		}
	};

	this.faceExistencialBurden = function() {
		this.fun--;
		this.hunger++;
	};


}

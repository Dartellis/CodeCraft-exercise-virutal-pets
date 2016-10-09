function Controller(model) {

	this.addPet = function(name) {
		var pet = new Pet(name);
		model.addPet(pet);
		return pet;
	}

	this.playWithPet = function(name, amount) {
		var pet = model.getPetByName(name);
		pet.play(amount);
		return pet;
	}

	this.feedPet = function(name, amount) {
		var pet = model.getPetByName(name);
		pet.feed(amount);
		return pet;
	}

	this.getAllPets = function() {
		return model.getAllPets();
	}

	this.updateAllPets = function() {
		model.updateAllPets();
		return pet;
	}

	this.forcePetsToFaceExistencialBurden = function(){
		model.forcePetsToFaceExistencialBurden();
	}
}

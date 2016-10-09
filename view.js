function View(controller) {

	this.createPetHTML = function(pet) {

		var $playInput = $("<input type='text' id='playAmount'>");
		var $feedInput = $("<input type='text' id='feedAmount'>");

		var $playButton = $("<button>Play!</button>");
		var $feedButton = $("<button>Feed!</button>");

		// var self = this;
		// $button.click(function() {
		// 	controller.playWithPet(pet.name, 10);
		// 	self.showAllPets();
		// });

		$playButton.click(function() {
			var amount = $('#playAmount').val();
			controller.playWithPet(pet.name, amount);
			this.updateAllPets();
			this.showAllPets();
		}.bind(this));

		$feedButton.click(function() {
			var amount = $('#feedAmount').val();
			controller.feedPet(pet.name, amount);
			this.updateAllPets();
			this.showAllPets();
		}.bind(this));

		var $pet = $("<p>" +
			pet.name +
			" Hunger: " +
			pet.hunger +
			" Fun: " +
			pet.fun +
			" Info: " + 
			pet.info +
			"</p>"
		);

		$pet.append($playButton);
		$pet.append($playInput);
		$pet.append($feedButton);
		$pet.append($feedInput);

		return $pet;
	};

	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
		}
	};

	this.createPet = function() {
		var name = $('#petname').val();
		controller.addPet(name);
		this.showAllPets();
	}

	this.updateAllPets = function(){
		controller.updateAllPets();
		this.showAllPets();
	}
}

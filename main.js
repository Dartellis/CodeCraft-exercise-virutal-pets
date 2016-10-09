$(document).ready(function(){

	var model = new Model();
	var controller = new Controller(model);
	var view = new View(controller);

	view.showAllPets();

	$('#newpet').click(function(){
		view.createPet();
		$('#petname').val('');
	});
	
	existencialBurden();

	function existencialBurden() {
		setTimeout(function(){ 
			controller.forcePetsToFaceExistencialBurden();
			console.log('hello');
			existencialBurden();
			view.showAllPets();
		}, 3000);
	}
});



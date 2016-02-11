Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	}
});

Template.Recipe.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id,this.inMenu);
	},
	'click .fa-trash': function(){
		Meteor.call('deleteRecipe', this._id)
	},
	'click .fa-pencil': function(){
		//Session var is false if its not present, so no need to set default value for editMode. 
		//When we do session.get it will return false.
		Session.set('editMode', !Session.get('editMode'))
	}
})
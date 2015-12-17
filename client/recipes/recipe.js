Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call("toggleMenuItems", this._id, this.inMenu);
	},

	'click .fa-trash': function() {
		Meteor.call("deleteRecipe", this._id);
	},

	'click .fa-pencil': function() {
		Session.set('editMode', !Session.get('editMode'));
	}
});

Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	}
});
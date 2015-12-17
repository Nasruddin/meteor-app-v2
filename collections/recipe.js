Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc) {
		return !!userId;
	},

	update: function(userId, doc) {
		return !!userId;
	}
})

Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});

RecipeSchema = new  SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},

	desc: {
		type: String,
		label: "Description"
	},

	ingredient: {
		type: [Ingredient]
	},

	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true
	},

	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		}
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date
		}
	}
});

Meteor.methods({
	toggleMenuItems: function(id, currentState) {
		Recipes.update(id, {$set: {
			inMenu: !currentState
		}});
	},

	deleteRecipe: function(id) {
		Recipes.remove(id);
	}
});

Recipes.attachSchema(RecipeSchema);
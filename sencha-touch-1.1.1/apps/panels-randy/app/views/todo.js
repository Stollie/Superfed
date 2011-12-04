TakenApp.Todolist = new Ext.List({
	
	title: "Taken",
	iconCls: "list",
	id: 'todolist',
	store: TakenApp.TodoStore,
	itemTpl: '<div class="contact">[   ] {title}</div>',
	onItemDisclosure: function() { 
	
		TakenApp.Tododetails.update();
		TakenApp.views.Todocard.setActiveItem('tododetails');

	},

});

TakenApp.Tododetails = new Ext.Panel({
	
	id: 'tododetails',
	tpl: 'Test!'

});

TakenApp.views.Todocard = Ext.extend(Ext.Panel, {
	
	title: "Taken",
	iconCls: "list",
	
	fullscreen: true,
	layout: 'card',
	cardSwitchAnimation: 'slide',
	items: [TakenApp.Todolist, TakenApp.Tododetails]	
	
	
});

// Registreer de xtype
Ext.reg('todocard', TakenApp.views.Todocard);
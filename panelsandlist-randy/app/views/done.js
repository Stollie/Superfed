TakenApp.views.Donecard = Ext.extend(Ext.List, {
	
	title: "Voltooid",
	iconCls: "list",
	id: 'donelist',
	store: TakenApp.DoneStore,
	itemTpl: '<div class="contact">[ V ] {title}</div>'
	

});

// Registreer de xtype
Ext.reg('donecard', TakenApp.views.Donecard);
TakenApp.views.Addcard = Ext.extend(Ext.Panel, {
	
	title: "Toevoegen",
	iconCls: "add",
	html: 'Todo: Add'
	
});

// Registreer de xtype
Ext.reg('addcard', TakenApp.views.Addcard);
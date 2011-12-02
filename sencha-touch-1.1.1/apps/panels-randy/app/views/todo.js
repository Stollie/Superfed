TakenApp.views.Todocard = Ext.extend(Ext.Panel, {
	
	title: "Taken",
	iconCls: "list"
	
});

// Registreer de xtype
Ext.reg('todocard', TakenApp.views.Todocard);
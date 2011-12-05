TakenApp.views.Infocard = Ext.extend(Ext.Panel, {
	
	title: "Informatie",
	iconCls: "info",
	html: 'Todo: Info'
	
});

// Registreer de xtype
Ext.reg('infocard', TakenApp.views.Infocard);
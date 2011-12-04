TakenApp.views.Viewport = Ext.extend(Ext.TabPanel, {
	
	fullscreen: true,
		
	tabBar: {
		
		dock: 'bottom',
		layout: {
			pack: 'center'	
		}
		
	},
	
	defaults: {
		
		styleHtmlContent: true
		
	},
	
	items: [
		{ xtype: 'todocard' },
		{ xtype: 'addcard' },
		{ xtype: 'donecard' },
		{ xtype: 'infocard' }
	],
	
	dockedItems: [
		
		{
		xtype:'toolbar', 
		title:'Taken App',
		dock:'top' 
		}

	]

});
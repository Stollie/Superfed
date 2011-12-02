TakenApp.views.Viewport = Ext.extend(Ext.TabPanel, {
	
	fullscreen: true,
	
	tabBar: {
		
		dock: 'bottom',
		layout: {
			pack: 'center'	
		}
		
	},
	
	defaults: {
		
		html: 'Tekst.',
		styleHtmlContent: true
		
	},
	
	items: [
		{ xtype: 'todocard' },
		{ xtype: 'addcard' },
		{ xtype: 'donecard' },
		{ xtype: 'infocard' }
	]
	

});




/*

		
		var header = new Ext.Toolbar({
			dock : 'top',
			title: 'Taken App'
		});
		
				
				
				*/
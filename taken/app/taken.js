// JavaScript Document

	new Ext.Application({
		
		name: 'Taken',
		launch: function() {
		
			new Ext.TabPanel({
				
				fullscreen: true,
				dockedItems: [
					
					{
					xtype:'toolbar', 
					title:'Taken',
					dock:'top' 
					},
					{
					xtype:'toolbar', 
					title:'Das Knopjens jah!',
					dock:'bottom' 
					}
				
				]
								
			});
			
		}
		
	});
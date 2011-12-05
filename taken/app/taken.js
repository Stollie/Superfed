// JavaScript Document

TakenApp = new Ext.Application({
	
	name: 'Taken App',
	launch: function() {
		
		/* Panel: Toevoegen */
		TakenApp.Addcard = new Ext.Panel({
			
			title: "Toevoegen",
			iconCls: "add",
			html: 'Todo: Add'
			
		});
		
		/* List: Voltooid */
		TakenApp.Donecard = new Ext.List({
		
			title: "Voltooid",
			iconCls: "list",
			id: 'donelist',
			store: TakenApp.DoneStore,
			itemTpl: '<div class="contact">[ V ] {title}</div>'
			
		});
		
		/* Panel: Informatie */
		TakenApp.Infocard = new Ext.Panel({
			
			title: "Informatie",
			iconCls: "info",
			html: 'Todo: Info'
			
		});
		
		
		
		/* List: Onvoltooide */
		TakenApp.Todolist = new Ext.List({
			
			title: "Onvoltooid",
			iconCls: "list",
			id: 'todolist',
			store: TakenApp.TodoStore,
			itemTpl: '<div class="contact">[   ] {title}</div>',
			onItemDisclosure: function(record) { 
			
				TakenApp.detailsToolbar.setTitle(record.data.title);
				TakenApp.Tododetails.update(record.data);
				TakenApp.Todocard.setActiveItem('tododetails');
		
			},
		
		});
		
		/* Panel: listWrapper */
		TakenApp.listWrapper = new Ext.Panel({
			
			id: 'listwrapper',
			layout: 'fit',
			items: [TakenApp.Todolist],
			dockedItems: [{
				xtype: 'toolbar',
				title: 'Onvoltooide Taken'
			}]
			
		});

		/* Toolbar: details */
		TakenApp.detailsToolbar = new Ext.Toolbar({
			
			items: [{
				text: 'Terug',
				uit: 'back',
				handler: function() {
					TakenApp.Todocard.setActiveItem('listwrapper',{ type:'slide',direction:'right' })	
				}
			}]
			
		});
		
		/* Panel: Details */
		TakenApp.Tododetails = new Ext.Panel({
			
			id: 'tododetails',
			tpl: '[  ] {title}',
			dockedItems: [TakenApp.detailsToolbar]
			
		
		});
		
		/* Panel: Onvoltooid */
		TakenApp.Todocard = new Ext.Panel({
			
			title: "Taken",
			iconCls: "list",
			
			fullscreen: true,
			layout: 'card',
			cardSwitchAnimation: 'slide',
		
			items: [TakenApp.listWrapper, TakenApp.Tododetails]	
			
			
		});

		/* Panel: Main */
		new Ext.TabPanel({
	
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
			
			items: [ TakenApp.Todocard, TakenApp.Addcard, TakenApp.Donecard, TakenApp.Infocard ]
			
		});
		
	}	
	
});
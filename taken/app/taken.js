// JavaScript Document

TakenApp = new Ext.Application({
	
	name: 'Taken App',
	launch: function() {
		
		/* Panel: Toevoegen */
/* 		TakenApp.Addcard = new Ext.Panel({
			
			title: "Toevoegen",
			iconCls: "add",
			html: 'Todo: Add' 
			items: [TakenApp.taakEditor] // TODO: revert to [NotesApp.views.n
			
		}); */
		/* Eerst de toolbars maken/laden voor dat Addcard Formpanel gemaakt word */
		TakenApp.taakEditorTopToolbar = new Ext.Toolbar({
			title: 'Taak bewerken',
			items: [
				{
					text: 'Opslaan',
					ui: 'action',
					handler: function () {
						var taakEditor = TakenApp.taakEditor;
						var currentTaak = taakEditor.getRecord();
						// Update the note with the values in the form fields.
						taakEditor.updateRecord(currentTaak);
						
						var errors = currentTaak.validate();
						if (!errors.isValid()) {
							currentTaak.reject();
							Ext.Msg.alert('Wacht even!', errors.getByField('title')[0].message, Ext.emptyFn);
							return;
						}
						
						var Todolist = TakenApp.Todolist;
						var takenStore = Todolist.getStore();

						if (takenStore.findRecord('id', currentTaak.data.id) === null) {
							takenStore.add(currentTaak);
						} else {
							currentTaak.setDirty();
						}

						takenStore.sync();
						takenStore.sort([{ property: 'date', direction: 'DESC'}]);

						Todolist.refresh();

						TakenApp.Todocard.setActiveItem('Todolist', { type: 'slide', direction: 'left' });

					}
				},
				{ xtype: 'spacer' },
				{
					iconCls: 'trash',
					iconMask: true,
					handler: function () {
						// TODO: Delete current note.
					}
				}
			]
		});
		
		/* Panel: Bewerken */
		TakenApp.taakEditor = new Ext.form.FormPanel({
			id: 'taakEditor',
			title: "Toevoegen",
			iconCls: "add",
			items: [
				{
					xtype: 'textfield',
					name: 'title',
					label: 'Titel',
					required: true
				}
			] ,
			listeners: {
				'render': function (thisComponent) {
					var now = new Date();
					var taakId = now.getTime();
					var taak = Ext.ModelMgr.create(
						{ id: taakId, date: now, title: '' },
						'Taak'
					);
					thisComponent.load(taak);
				}
			},
			dockedItems: [
					TakenApp.taakEditorTopToolbar,
				] 
		});
		
		/* List: Voltooid */
		TakenApp.Donecard = new Ext.List({
		
			title: "Voltooid",
			iconCls: "list",
			id: 'donelist',
			/* store: TakenApp.DoneStore, */
			store: 'TakenStore',
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
			/* store: TakenApp.TodoStore, */
			store: 'TakenStore',
			itemTpl: '<div class="contact">[   ] {title}</div>',
 			onItemDisclosure: function(record) { 
			
				TakenApp.detailsToolbar.setTitle(record.data.title);
				TakenApp.Tododetails.update(record.data);
				TakenApp.Todocard.setActiveItem('tododetails');
		
			}, 
			listeners: {
				'render': function (thisComponent) {
					thisComponent.getStore().load();
				}
			}
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
			
			items: [ TakenApp.Todocard, TakenApp.taakEditor, TakenApp.Donecard, TakenApp.Infocard ]
			
		});
		
	}	
	
});
	// Maak een nieuw Model
	Ext.regModel('Task', {
		fields: ['completed', 'name']
	});
	
	// Store deze data op basis van het Model Task
	TakenApp.ListStore = new Ext.data.Store({
		model: 'Task',
		sorters: 'name',
		getGroupString : function(record) {
			return record.get('name')[0];
		},
		data: [
		
			{ completed: "false", name: "Bootschappen doen" },
			{ completed: "false", name: "Vuilnis buiten zetten" },
			{ completed: "false", name: "Afspraak maken met Henk" },
			{ completed: "false", name: "Pietje ophalen van school" }
		
		]
	});

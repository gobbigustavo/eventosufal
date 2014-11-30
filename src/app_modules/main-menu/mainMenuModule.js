angular.module('tp.mainMenu', [])
	.factory('MainMenuService', function(){
		//PRIVATE
		
		var currentItem;

		var items = [
			{
				id: 'home',
				description: 'Home',
				icon: 'glyphicon-home',
				initialItemClass: 'item-container-selected'
			},
			{
				id: 'item-1',
				description: 'Item 1',
				icon: 'glyphicon-plus',
				initialItemClass: ''
			},
			{
				id: 'item-2',
				description: 'Item 2',
				icon: 'glyphicon-plus',
				initialItemClass: ''
			},
			{
				id: 'item-3',
				description: 'Item 3',
				icon: 'glyphicon-plus',
				initialItemClass: ''
			},{
				id: 'item-4',
				description: 'Item 4',
				icon: 'glyphicon-plus',
				initialItemClass: ''
			},
		];

		function getItems(){
			return items;
		}

		function routeTo(item){
			
			currentItem = item;

	    	for(var i=0; i<items.length; i++){
	    		document.getElementById(items[i].id).classList.remove('item-container-selected');
	    		items[i].initialItemClass = '';
	      	}

	      	document.getElementById(item.id).classList.add('item-container-selected');
	        
	        window.location.href = "#/" + item.id;
    	}

		//PUBLIC

		return{
			getItems:getItems,
			routeTo: routeTo
		};
	});
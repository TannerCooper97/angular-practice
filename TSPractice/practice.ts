//Definition of Objects
let user: {
	name: string;
	age: number | string;
	hobbies: string[];
	role: {
		description: string;
		id: number;
		}
	}; 
	
	user = {
		name: 'Max',
		age: 38,
		hobbies: ['Sports','Cooking'],
		role: {
			description: 'admin',
			id: 5
		}
	};
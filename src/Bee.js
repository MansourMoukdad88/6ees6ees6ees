class Bee extends Grub {
	
	constructor(food,eat) {
		super(food,eat);
		this.age = 5;
		this.color = "yellow";
		this.job = "Keep on growing";
	}
	
};

/* 
we can use this way if we want to modify the inherited key or method .... the previous one if only we need to pass them as they are


class Bee extends Grub {
	
	constructor() {
		super();
		this.age = 5;
		this.color = "yellow";
		this.job = "Keep on growing";
	}
	food() {
		super.food()
	}
	eat() {
		super.eat()
	}

};
*/
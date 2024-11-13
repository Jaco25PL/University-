class Empresa {
	constructor (name, adress, RUT) {
		this.name = name,
		this.adress = adress,
		this.RUT = RUT
	}
}

class Function {
	constructor (name, description, type){
		this.name = name,
		this.description = description,
		this.type = type
	}
}

class Role {
	constructor (empresa, detail, funcion, salary) {
		this.empresa = empresa,
		this.detail = detail,
		this.funcion = funcion,
		this.salary = salary
	}
}

class System {
	constructor () {
		this.listRoles = [],
		this.listEmpresas = [],
		this.listFunctions = []
	}

	addRole (aRole) {
		this.listRoles.push(aRole)
	}

	addEmpresa (aEmpresa) {
		this.listEmpresas.push(aEmpresa)
	}

	sumFunctions (aFuncion) {
		let counter = 0
		let amount = 0 //teacher 'cant'

		for (let role of this.listRoles) {
			if ( role.funcion === aFuncion ) {
				counter += role.salary
				amount++
			}
		}

		let result = 'No data'
		if ( amount > 0) {
			result =counter
		}

		return result
	}
}


class DServer {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
        console.log("Employee added to DServer:", employee);
    }

    addMultipleEmployees(employees) {
        employees.forEach(emp => this.addEmployee(emp));
    }

    getEmployees() {
        return this.employees;
    }
}



function retrieveEmployees() {
    return [
        { name: "цэцгээ", id: 3 },
        { name: "Ганбаатар", id: 1 },
        { name: "Жоохноо", id: 2 },
        { name: 'Хангол', id: 5 }
    ];
}

function sortEmployees(employees) {
    return employees.sort((a, b) => a.id - b.id);
}

function transferToBackup(sortedEmployees) {
    const dServer = new DServer();
    dServer.addMultipleEmployees(sortedEmployees);
    console.log("өгөгдлийг нөөц сервер рүү шилжүүлэх:", dServer.getEmployees());
}

function sortThenTransfer() {
    try {
        const employees = retrieveEmployees();
        const sortedEmployees = sortEmployees(employees);
        transferToBackup(sortedEmployees);
        console.log("Шилжүүлэг амжилттай");
    } catch (error) {
        console.error("алдаа: ", error);
    }
}

// sortThenTransfer();

function filterAndStore(employees) {
    const filteredEmployees = employees.filter(employee => employee.id > 2);
    console.log("Зохих ажиллагсдын мэдээллийг ялган хадгаллаа", filteredEmployees);
}

function transferThenSortSpecific() {
    try {
        const employees = retrieveEmployees();
        transferToBackup(employees);
        filterAndStore(employees);
        console.log("Шилжүүлээд зохих ажиллагсдыг хадгалах үйлдэл хийгдлээ");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

transferThenSortSpecific();


class DarkhanServer {
    constructor() {
        this.employees = [];
        this.filteredEmployees = [];
    }

    receiveData(employeeData) {
        this.employees.push(...employeeData);
        this.filterData(); 
    }

    filterData() {
        this.filteredEmployees = this.employees.filter(employee => employee.id > 2);
    }

    getFilteredData() {
        return this.filteredEmployees;
    }
    getSortedData() {
        return this.employees; 
    }

}
    
    


function transferDataSorted(employees) {
    
    let sortedEmployees = employees.sort((a, b) => a.id - b.id);
    let darkhanServer = new DarkhanServer();
    darkhanServer.receiveData(sortedEmployees);
    return darkhanServer;
}


function transferDataNo2(employees) {
    let darkhanServer = new DarkhanServer();
    darkhanServer.receiveData(employees);
    return darkhanServer;
}

let employees = [
    { name: "Жоохноо", id: 3 },
    { name: "Хангол", id: 1 },
    { name: "Бэ ки", id: 2 },
    { name: "тэмүүлэн", id: 4 },
    { name: "Билгүүн", id: 6 },
    { name: "Цэцгээ", id: 5 },
    { name: "Монгол", id: 7 },
    { name: "Энх-уул", id: 8 }
];

let server1 = transferDataSorted(employees);
console.log("Эхлээд ялган шүүгээд дараа нь мэдээллийг шилжүүллээ", server1.getSortedData()); 

let server = transferDataNo2(employees);
console.log("Эхлээд мэдээллээ шилжүүлээд зохих ажиллагсдын мэдээллийг ялган хадгалах", server.getFilteredData());

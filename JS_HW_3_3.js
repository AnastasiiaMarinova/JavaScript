const enterprises = [
    {
      id: 1,
      name: "Enterprise 1",
      departments: [
        {
          id: 2,
          name: "QA department",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Marketing department",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Administration",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Enterpris 2",
      departments: [
        {
          id: 6,
          name: "Development department",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Marketing department",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Department of labor protection",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Enterpris 3",
      departments: [
        {
          id: 10,
          name: "Analytics department",
          employees_count: 0,
        },
      ]
    }
  ]
   
//helpers
//1
 const employeesCountHelper = function (number) {
     number = number.toString().split('').pop();
     if (number) {
         if (number == 1) return "employee";
        else return "employees";
         }
else return "(no employees)"; };
//helper 3
const getNewId = function(company) {
  let maxId = company[0].id;
  company.forEach((el) => {
    if (maxId < el.id) {
      maxId = el.id;
    }
    if (el.departments) {
      el.departments.forEach((elem) => {
      if (maxId < elem.id){
        maxId = elem.id;
      }
    });
  }
})
  return maxId + 1;
}

// helper 4
const getEnterprise = function(val){
  let enterprise = enterprises.find(el => el.id == val || el.name == val);
  return enterprise ? enterprise : 'dont have such company'
}
 //TASK
//1. List all companies and their departments. Enter the number of employees next to it. For a business, calculate the sum of all employees in all departments.

const getDeptartments = function (companies) {
    companies.forEach((company) => {
        let depts = [];
        let count = 0;
        depts.push(company.name);
        if (company.departments) {
            company.departments.forEach((dept) =>{
                count += +dept.employees_count;
                if (dept.employees_count) {
                    depts.push(`- ${dept.name} (${dept.employees_count} ${employeesCountHelper(dept.employees_count)})`);
                } else depts.push (`- ${dept.name} (no employees)`) ;
            });
            if (count) {
                depts[0] += `(${count} ${employeesCountHelper(count)})`;
            } else depts[0] +- `(no employees)`;
        }
    console.log(depts.join(`\n\ `));
    });
};
getDeptartments(enterprises);
  
  
//2. Write a function that will take 1 argument (department id or department name and return the name of the company it belongs to).

const getEnterpriseByDepartment = function(val) {
  let enterprise
  enterprises.forEach(ent => {
    let department
    if(ent.departments){
      department = ent.departments.find(dept => {return dept.id == val || dept.name ==val})
    }
    if(department){
      enterprise = ent;
    }
  })
  return enterprise ? enterprise : 'dont have company with such department'
}
//console.log(getEnterpriseByDepartment("Development department"))
  
//3. Write a function that will add an enterprise. Takes the company name as an argument
  const addEnterprise = function(name) {
    enterprises.push ({
      id: getNewId(enterprises),
      name : name,
      departments : []
    })
  }
addEnterprise('QA Engineers')

//4. Write a function to add a department to an enterprise. It takes as an argument the id of the enterprise to which the department will be added and the name of the department.
  const addDepartment = function(id, name, employees_count = 0){
    const enterprise = getEnterprise(id)
    if (typeof enterprise == 'object'){
      enterprise.departments.push({
        id: getNewId(enterprises),
        name: name,
        employees_count: employees_count,
      })
    } else console.log ('dont have such company')
  }
addDepartment(11, "AQA", 20)
addDepartment(11, "manuals", 20)
console.log(getEnterprise(11))
//5. Write a function to edit the company name. It takes as an argument the id of the enterprise and the new name of the enterprise.
 
  
//6.Write a function to edit the name of the department. It accepts as an argument the department id and the new department name
 
  
// 7. Write a function to delete a business. It takes the id of the enterprise as an argument.

  
  
//8.Write a function to delete a department. It takes the department id as an argument. You can only delete a department if it has no employees.
  
  
//9. Write a function to transfer employees between departments of the same enterprise. It takes two values as an argument: the id of the department from which the employees will be transferred and the id of the department to which the employees will be transferred).
  
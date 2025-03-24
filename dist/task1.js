"use strict";
const payPerHour = 32;
const worworkingDays = 14;
const experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5,];
const employee = {
    name: "Alex Brown",
    profession: "doctor",
    worworkingHoursPerDay: 10
};
const premiumData = {
    isPremium: true,
    premium: 1000
};
const getSalaryInfo = (employeeData, premiumData, payPerHour, worworkingDays, experienceСoefficients) => {
    let salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients;
    ;
    if (premiumData.isPremium)
        salary += premiumData.premium;
    return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
};
const salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, worworkingDays, experienceСoefficients[2]);
console.log(salaryInfo);

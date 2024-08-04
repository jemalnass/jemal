document.addEventListener('DOMContentLoaded', () => {
    const financialReport = document.getElementById('financial-report');
    const payrollReport = document.getElementById('payroll-report');
    const taxReport = document.getElementById('tax-report');
    const accountsReport = document.getElementById('accounts-report');

    // Sample data - replace with actual data fetching from backend
    const financialData = {
        revenue: 50000,
        expenses: 30000,
        profit: 20000
    };

    const payrollData = {
        totalPayroll: 15000,
        numberOfEmployees: 10
    };

    const taxData = {
        totalTaxesPaid: 5000,
        taxDeductions: 2000
    };

    const accountsData = {
        receivable: 10000,
        payable: 5000
    };

    financialReport.innerHTML = `
        <p>Revenue: $${financialData.revenue}</p>
        <p>Expenses: $${financialData.expenses}</p>
        <p>Profit: $${financialData.profit}</p>
    `;

    payrollReport.innerHTML = `
        <p>Total Payroll: $${payrollData.totalPayroll}</p>
        <p>Number of Employees: ${payrollData.numberOfEmployees}</p>
    `;

    taxReport.innerHTML = `
        <p>Total Taxes Paid: $${taxData.totalTaxesPaid}</p>
        <p>Tax Deductions: $${taxData.taxDeductions}</p>
    `;

    accountsReport.innerHTML = `
        <p>Accounts Receivable: $${accountsData.receivable}</p>
        <p>Accounts Payable: $${accountsData.payable}</p>
    `;
});

function show_salary() {
        var user = document.getElementById("user_name").value;
        var wage = document.getElementById("daily_wage").value;
        var working_days = document.getElementById("no_days_work").value;
        pay= parseFloat(wage) * working_days;
        results1 = "Employee's Name: " + user + ".";
        results2 ="Basic Salary: INR " + pay.toFixed(2) +".";         
        document.getElementById("demo1").innerHTML = results1;
        document.getElementById("demo2").innerHTML = results2;
     }
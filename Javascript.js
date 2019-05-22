$(document).ready(function(){
		console.log(localStorage.length);
		
        $("#setBudget").hide();
		$("#addDeposit").hide();
		$("#addExpense").hide();
		
		check();
		
		$("#setBudgetTitle").click(function(){
			$("#setBudget").slideToggle();
			$("#addDeposit").hide();
			$("#addExpense").hide();
		});
	
	
		$("#addDepositTitle").click(function(){
			$("#addDeposit").slideToggle();
			$("#setBudget").hide();
			$("#addExpense").hide();
		});
	
		$("#addExpenseTitle").click(function(){
			$("#addExpense").slideToggle();
			$("#setBudget").hide();
			$("#addDeposit").hide();
		});
		
		function check(){
			var test = localStorage.length;
			if(test >= 1){
				$("#setBudgetTitle").hide();
			}
			else{
				$("#setBudgetTitle").show();
				$("#addDepositTitle").hide();
				$("#addExpenseTitle").hide();
			}
		}
	
		function Budget(overall, method, category, title, date, note) {
                this.overall = overall;
				this.method = method;
				this.category = category;
				this.title = title;
				this.date = date;
				this.note = note;
        }
		
        $("#settingBudget").submit(function(event) {
                event.preventDefault();
				var overall = $("#txtSet").val();
				var method = "-";
				var category = "Set Budget";
				var title = "Creating Budget";
				var	date = $("#txtSetDate").val();
				var note = "-";
                var temp = new Budget(overall, method, category, title, date, note);
				var x1 = $("#txtSet").val().length;
				var x2 = $("#txtSetDate").val().length;
				var check = /^[a-zA-Z ]*$/;
 
				if(check.test($("#txtSet").val())){
					alert("Please Do Not Key Any Letters");
				}
			
				if (x1 === 0){
					alert("Please Key In Your Budget");
				}

				if (x2 === 0){
					alert("Please Key In The Date");
				}
	
				else{
                	alert("Budget Have Being Set");
					storeBudget(temp);
					console.log(temp);
					location.reload();
				}
        });
		
		function storeBudget(temp) {
                if (window.localStorage) {
                    var budgetList = JSON.parse(localStorage.getItem("budgetList"));
                    if (budgetList === null)
                        budgetList = []
                    budgetList.push(temp);
                    updateBudgetList(budgetList);
                }
        }

        function getBudgetList() {
                var budgetList;
                if (window.localStorage) {
                    budgetList = JSON.parse(localStorage.getItem("budgetList"));
                }
        }

        function updateBudgetList(arr) {
                localStorage.setItem("budgetList", JSON.stringify(arr));
                var totalBudget = arr.length;
				console.log(localStorage.length);
				alert("Budget Have Being Recorded");
        }
		
		function Deposit(deposit, method, category, title, date, note){
				this.deposit = deposit;
				this.method = method;
				this.category = category;
				this.title = title;
				this.date = date;
				this.note = note;
        }
		
		$("#addingDeposit").submit(function(event) {
            event.preventDefault();
			var deposit = $("#txtDeposit").val();
			var method = $('select option:selected').val();
            var category = "Adding Income";
			var title  = "Deposit";
			var date = $("#txtDepositDate").val();
			var note = $("#txtNote").val();
            var temp = new Deposit(deposit, method, category, title, date, note);
			var y1 = $("#txtDeposit").val().length;
			var y2 = $("#txtDepositDate").val().length;
			var	d2 = new Date().toLocaleDateString();
			var check = /^[a-zA-Z ]*$/;
			
			if(check.test($("#txtDeposit").val()) ){
				alert("Please Do Not Key Any Letters");
				event.preventDefault();
			}
			
			if (y1 === 0){
				alert("Please Key In Your Income");
				event.preventDefault();
			}
			
			if(y2 === 0){
				alert("Please Key In The Date");
				event.preventDefault();
			}
			
            else{   
				alert("Income Have Being Added");
				storeDeposit(temp);
				console.log(temp);
				location.reload();
			}
        });
		
		function storeDeposit(temp) {
                if (window.localStorage) {
                    var depositList = JSON.parse(localStorage.getItem("depositList"));
                    if (depositList === null)
                        depositList = []
                    depositList.push(temp);
                    updateDepositList(depositList);
                }
        }

        function getDepositList() {
                var depositList;
                if (window.localStorage) {
                    depositList = JSON.parse(localStorage.getItem("depositList"));
                }
        }

        function updateDepositList(arr) {
                localStorage.setItem("depositList", JSON.stringify(arr));
                var totalDeposit = arr.length;
				console.log(localStorage.length);
				alert("Income Record Have Being Recorded");
        }
		
		function Expense(expense, method, category, title, date, note) {
				this.expense = expense;
				this.method = method;
				this.category = category;
				this.title = title;
				this.date = date;
				this.note = note;
        }
		
		$("#addingExpense").submit(function(event) {
            event.preventDefault();
			var expense = $("#txtExpense").val();
			var method = $('select option:selected').val();
            var category = "Adding Expenses";
			var title  = "Expense";
			var date = $("#txtExpenseDate").val();
			var note = $("input:radio[name=spending]:checked").val();
            var temp = new Expense(expense, method, category, title, date, note);
			var z1 = $("#txtExpense").val().length;
			var z2 = $("#txtExpenseDate").val().length;
			var	d3 = new Date().toLocaleDateString();
			var check = /^[a-zA-Z ]*$/;
			
			if(check.test($("#txtExpense").val())){
					alert("Please Do Not Key Any Letters");
			}
			
			if ($("#txtExpense").val().length === 0)  {
				alert("Please Key In Your Expense");
			}
			
			if ($("#txtExpenseDate").val().length === 0){
				alert("Please Key In The Date");
				event.preventDefault();
			}
			
			if (!$("input:radio[name=spending]:checked").val()) {
   				alert("Please Select The Area Of Spending");
			}
			
			else{
            	alert("Expense Record Have Being Added");
				storeExpense(temp);
				console.log(temp);
				location.reload();
			}
        });
		
		function storeExpense(temp) {
                if (window.localStorage) {
                    var expenseList = JSON.parse(localStorage.getItem("expenseList"));
                    if (expenseList === null)
                        expenseList = []
                    expenseList.push(temp);
                    updateExpenseList(expenseList);
                }
        }

        function getExpenseList() {
                var expenseList;
                if (window.localStorage) {
                    expenseList = JSON.parse(localStorage.getItem("expenseList"));
                }
        }

        function updateExpenseList(arr) {
                localStorage.setItem("expenseList", JSON.stringify(arr));
                var totalExpense = arr.length;
				console.log(localStorage.length);
				alert("Spending Record Have Being Recorded");
        }
		
		$( function() {
    		$( "#txtSetDate" ).datepicker();
			$( "#txtDepositDate" ).datepicker();
			$( "#txtExpenseDate" ).datepicker();
  		} );	
});
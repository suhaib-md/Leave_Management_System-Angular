var app = angular.module("leaveApp", []);

app.controller("LeaveController", function ($scope) {
    // Initial leave balance values
    $scope.casualLeaveBalance = 10;
    $scope.medicalLeaveBalance = 15;
  
    $scope.leaveTypes = ["Casual Leave", "Medical Leave"];
    $scope.leaveType = $scope.leaveTypes[0];
  
    $scope.applyLeave = function () {
      // Calculate the number of days applied for
      var startDate = new Date($scope.startDate);
      var endDate = new Date($scope.endDate);
      var daysApplied = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
  
      // Check if the leave balance becomes zero or negative
      if ($scope.leaveType === "Casual Leave" && $scope.casualLeaveBalance - daysApplied < 0) {
        alert("Insufficient Casual Leave balance. You cannot apply for more leave.");
      } else if ($scope.leaveType === "Medical Leave" && $scope.medicalLeaveBalance - daysApplied < 0) {
        alert("Insufficient Medical Leave balance. You cannot apply for more leave.");
      } else {
        // Update leave balances based on the leave type
        if ($scope.leaveType === "Casual Leave") {
          $scope.casualLeaveBalance -= daysApplied;
        } else if ($scope.leaveType === "Medical Leave") {
          $scope.medicalLeaveBalance -= daysApplied;
        }
  
        // Reset the form
        $scope.startDate = null;
        $scope.endDate = null;
      }
    };
  });

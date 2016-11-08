
appCtrl.controller('searchuserinfoCtrl',function($scope,$http){
    $scope.studentInfo=[];
    $scope.pages=[1,2,3,4,5];
    $scope.curpage=1;
    $scope.currchangeInfo={};
    $scope.currchangeindex;
    loadData();
    function loadData(){
      $http.get('/mock/userinfo'+$scope.curpage+'.json')
      .then(function(res){
          $scope.studentInfo=res.data;
      })
    }
    $scope.addpage=function(){
      if($scope.curpage<=1){
        $scope.curpage=1;
      }else{
        $scope.curpage--;
      }
        loadData();
    }
    $scope.reducePage=function(){
      if($scope.curpage>=5){
        $scope.curpage=5;
      }else{
        $scope.curpage++;
      }
        loadData();
    }
    $scope.changepage=function(index){
        $scope.curpage=index;
        loadData();
    }
    $scope.bianji=function(list,index){
      $scope.currchangeInfo=list;
      //console.log(  $scope.currchangeInfo);
      $scope.currchangeindex=index;
    }
    $scope.saveData=function(){
      //console.log(1);
      $scope.studentInfo[$scope.currchangeindex]=$scope.currchangeInfo;
    }
    $scope.delData=function(){
      $scope.studentInfo.splice($scope.currchangeindex,1);
    }
})
// appCtrl.controller('changeuserinfoCtrl',function($scope,$http){
//
// })

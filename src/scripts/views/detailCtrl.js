appCtrl.controller('detailCtrl',function($scope,$state,$http,$stateParams){
  //console.log($stateParams.id);
  $scope.surecourseData=[];
  $http.get('./mock/xuanke1.json')
        .then(function(res){
          for (var i = 0; i < res.data.length; i++) {
            if(res.data[i].id==$stateParams.id){
              $scope.infoname=res.data[i].name;
             //console.log($scope.infoname);
              $scope.couseInfo=res.data[i];
              //console.log($scope.couseInfo);
              break;
          }
        }
    })
   $scope.selInfo=function(infoname,detail){
     $scope.info=detail;
     $scope.info.name=infoname;
   }
   $scope.saveData=function(){
     $scope.surecourseData.push( $scope.info);
     $state.go('home.changexuankeInfo');
   }
   $scope.delData=function(index){
     $scope.suredelindex=index;
   }
   $scope.suredelData=function(){
      $scope.surecourseData.splice( $scope.suredelindex,1);
   }
  // $scope.infoname=$stateParams.courseinfo.name;
  // $scope.couseInfo=$stateParams.courseinfo;
})

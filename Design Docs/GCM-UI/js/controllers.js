'use strict';
 

var gcmControllerModule =  angular.module('gcmApp.controllers', ['ui.bootstrap','ngProgress']);
 

gcmControllerModule.controller('gcmCtrl', function ($scope,$http,ngProgress) {
$scope.hostAddress="http://WN7X64-1GMW5Z1/";
$scope.modulePriceCopy;
$scope.rowEditMode=false;
$scope.dpid;
$scope.loading=false;
$scope.waiting=true;
$scope.saving=false;
$scope.iseditable="false";
$scope.formData;
$scope.dispositionCode;
$scope.form;
$scope.item;
$scope.bcontact;
$scope.scontact;
$scope.shipInfo;
$scope.storeOwner;
$scope.accountName;
$scope.tacNumber;
$scope.commandList = {"OrderGroupChangeset":[]};
$scope.bcontactCopy;
$scope.scontactCopy;
$scope.itemCopy;
$scope.contactId;
$scope.contactOldValue;
$scope.contactNewValue;
$scope.moduleOldValue;
$scope.contactBase;

$scope.cancel=function(){
  $scope.iseditable=false;
  $scope.commandList = {"OrderGroupChangeset":[]};
}

$scope.saveChanges=function(){

	$scope.saving = true;
	var dat = JSON.stringify($scope.commandList.OrderGroupChangeset);
	$http({
            url: $scope.hostAddress+'/DellAPI/api/Home/UpdateOrderGroup/?dpId='+$scope.dpid,
            method: "POST",
            data: dat,
            headers: {'Content-Type': 'text/plain'}
        }).success(function (data, status, headers, config) {
				$scope.saving = false;
				$scope.commandList = {"OrderGroupChangeset":[]};
				$scope.loading=true;
				ngProgress.start();
				$http.get($scope.hostAddress+'DellAPI/api/Home/GetOrderGroup/'+$scope.dpid).success(function(data) {
				$scope.formData = data;
				$scope.loading=false;
				ngProgress.complete();});
				
            }).error(function (data, status, headers, config) {
				$scope.commandList = {"OrderGroupChangeset":[]};
				$scope.saving=false;
				$scope.loading=true;
				ngProgress.start();
				$http.get($scope.hostAddress+'/DellAPI/api/Home/GetOrderGroup/'+$scope.dpid).success(function(data) {
				$scope.formData = data;
				$scope.loading=false;
				ngProgress.complete();});
            });		  
}

$scope.cancelRowEdit=function(row){
  $scope.moduleOldValue.Options[0].OriginalPrice = $scope.modulePriceCopy;
  $scope.rowEditMode=!$scope.rowEditMode;
  return (!row);
}

$scope.createItemCopy=function(){
	$scope.commandList.OrderGroupChangeset = [];
	$scope.itemCopy = JSON.parse(JSON.stringify($scope.formData.OrderForms[0].Items));
}

$scope.changeRowEdit=function(row,price,item,module){
  switch(row)
  {
    case false:
      $scope.modulePriceCopy=price;
	  $scope.moduleOldValue=module;
      break;
    case true:
		var x=$scope.createArray($scope.itemCopy[item].ConfigDetails.Modules);
		 var modNo,len;
		  for(modNo=0,len=x.length;modNo<len;modNo++)
			{
				if(x[modNo].Sequence==module.Sequence)
					break;
			}
      var command={
	    Key: 'Items['+item+']'+'.ConfigDetails.Modules['+modNo+'].Options[0].OriginalPrice',
	    OldValue: $scope.modulePriceCopy,
        NewValue: price,
        Action: 'E',
		RequestId: 'asd'
      }
      $scope.commandList.OrderGroupChangeset.push(command);
  }
  $scope.rowEditMode=!$scope.rowEditMode;
  return (!row);
}

$scope.submit=function(){
  $scope.waiting=false;
  $scope.loading=true;
  ngProgress.start();
  $http.get($scope.hostAddress+'/DellAPI/api/Home/GetOrderGroup/'+$scope.dpid).success(function(data) {
    $scope.formData = data;
	$scope.itemCopy = JSON.parse(JSON.stringify($scope.formData.OrderForms[0].Items));
	/*if($scope.formData.DispositionCode == "CMP")
		$scope.dispositionCode = true;
	else
		$scope.dispositionCode = false;*/
		$scope.dispositionCode = false;
  $scope.loading=false;
  ngProgress.complete();
  });  
}

$scope.changeEditState=function(){
if($scope.iseditable==true)
{
  if($scope.contactId!=null)
  {
    if($scope.contactOldValue!=$scope.contactNewValue)
    {
    var command={

      Key: $scope.contactBase+'.'+$scope.contactId,
      OldValue: $scope.contactOldValue,
      NewValue: $scope.contactNewValue,
      Action: 'E',
      RequestId: 'asd'
      }
      $scope.commandList.OrderGroupChangeset.push(command);
    }
  }
  $scope.iseditable=false;
  $scope.saveChanges();
}
else
{
  $scope.iseditable=true;
  $scope.bcontactCopy = JSON.parse(JSON.stringify($scope.bcontact));
  $scope.scontactCopy = JSON.parse(JSON.stringify($scope.scontact));
  $scope.contactId = null;
  $scope.contactOldValue = null;
  $scope.contactNewValue= null;
  $scope.contactBase=null;
}
}
 
$scope.updateContactCommandList=function(contactType,id,val){
  if($scope.contactId!=null)
  {
    if($scope.contactOldValue!=$scope.contactNewValue)
    {
      var command={

      Key: $scope.contactBase+'.'+$scope.contactId,
      OldValue: $scope.contactOldValue,
      NewValue: $scope.contactNewValue,
      Action: 'E',
      RequestId: 'asd'
      }
      $scope.commandList.OrderGroupChangeset.push(command);
    }
  }
    switch(contactType)
    {
      case 'billing':
        $scope.contactBase='BillingContact';
        break;
      case 'shipping':
        $scope.contactBase='ShippingInformation.ShippingContact';
        break;
    }
    $scope.contactId=id;
    $scope.contactOldValue=val;
    $scope.contactNewValue=val;
 }
 
$scope.updateNewValue=function(val){
    $scope.contactNewValue=val;
 }
 
 $scope.createArray=function(obj){
 if( Object.prototype.toString.call(obj) === '[object Array]' )
	 {
	 arr=obj;
	 }
 else
	 {
	var arr=[];
	arr.push(obj);
	 }
 return arr;
 }
 
 $scope.isnull=function(x){
	if((x==null)||(x.length==0))
	{return true;}
	else
	{return false;}
	}
 
 $scope.isStringEmpty=function(x){
 if(x == "")
 {return true;}
 else
 {return false;}
 }
 
 $scope.isNameEmpty=function(contact){
 var first=contact.Name.First;
 var mi=contact.Name.MI;
 var last=contact.Name.Last;
 if((first.trim() == "" || first==null) && (mi.trim() == "" || mi==null) && (last.trim() == "" || last==null))
 return true;
 else
 return false;
 }
 
 $scope.getFulfillmentUnit=function(itemId) {
	var x=$scope.createArray($scope.formData.OrderForms[0].FulfillmentUnits);
	
	for(var i=0,len1=x.length;i<len1;i++)
	{
	  y=$scope.createArray(x[i].FulfillmentItemInformation);
	  for(var j=0,len2=y.length;j<len2;j++)
	  {
	    if(y[j].ItemId==itemId)
		{return(x[i]);}
	  }
	
	}
 }
 
 $scope.getItem=function(itemId){
  var x=$scope.createArray($scope.itemCopy);
  for(var i=0,len1=x.length;i<len1;i++)
	{
		if(x[i].Id==itemId)
		{$scope.item = x[i];}
	}
		
 }
 
 $scope.getStoreOwner=function(p_contacts){
	if (p_contacts != null)
            {
                for(var i=0, len = p_contacts.length; i < len; i++)
                {
                    if (p_contacts[i].IsStoreOwner)
                    {
                        $scope.storeOwner = p_contacts[i];
						break;
                    }
                }
            }
    else
			{
				$scope.storeOwner = null;
			}
 }
 
 $scope.getAccountName=function(){
	var of = $scope.formData.OrderForms[0];
	$scope.accountName=null;
     for(var i=0,len=of.ExtendedProperties.length; i < len ;i++)
        {
            if (of.ExtendedProperties[i] == "AccountName")
            {
                $scope.accountName = of.ExtendedProperties[i].FieldValue;
            }
        }
 }
 
 /*$scope.getTACNumber=function(fraudNumber){
 $scope.tacNumber = null;
	 if(fraudNumber != null)
	 {
	 }
 
 }*/
 
 $scope.getTotalImpact=function(promo){
 if (promo.TotalImpact > 0)
 return promo.TotalImpact;
 else if(promo.TotalAdjustment>0)
 return promo.TotalAdjustment;
 else
 return null;
  }
 
 $scope.deleteModule=function(item,modNumber,itemNo,moduleNo){
 var x=$scope.createArray(item.ConfigDetails.Modules);
 var modNo,len;
  for(modNo=0,len=x.length;modNo<len;modNo++)
	{
		if(x[modNo].Sequence==modNumber)
		{x.splice(modNo,1);
     break;}
	} 
  var command={
	    Key: 'Items['+itemNo+']'+'.ConfigDetails.Modules.RemoveAt('+modNo+')',
	    OldValue: '',
        NewValue: '',
        Action: 'D',
		RequestId: 'asd'
      };
  $scope.commandList.OrderGroupChangeset.push(command);
 
 }
 
 $scope.init_form=function(val){
 $scope.form=val;
 }
 
 $scope.init_bcontact=function(val){
	$scope.bcontact=val;
 }
 
 $scope.init_scontact=function(val){
	$scope.scontact=val;
 }
 
 $scope.init_shipInfo=function(val){
 $scope.shipInfo=val;
 }
 
 $scope.getTriStateText=function(state){
            var sRetVal = "";
            switch (state)
            {
                case "true":
                    sRetVal = "Yes";
                    break;

                case "false":
                    sRetVal = "No";
                    break;

                case "undefined":
                    sRetVal = "Not Specified";
                    break;
            }
            return sRetVal;
	}
 
 $scope.isAts=function(itemConfig){
	if (itemConfig.StockReservationId != null && itemConfig.StockReservationId != "" && itemConfig.StockReservationId != "FAILURE" || itemConfig.BuildToStock=="true")
	{return true;}
	else
	{return false;}
	
	}
 
 $scope.skuCheck=function(item,unit){
	if($scope.isnull(item.ConfigDetails.Modules)||$scope.isnull(unit)||unit.ComplexConfigId!="0")
	{return true;}
	else
	{return false;}
	}
});
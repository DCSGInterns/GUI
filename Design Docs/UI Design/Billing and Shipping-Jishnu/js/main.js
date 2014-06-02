function hvr(id)
{
	//id.style.background-color = 'red';
	id.style.background="lavender";
}

function out(id)
{
	//id.style.background-color = 'red';
	id.style.background="aliceblue";
}

function ctrl1($scope)
{

$scope.cases=[
{heading:'BILLING', ti:'', ln:'Jose', fn:'Nithin', al1:'Google Australia Pty Ltd.', al2: 'Level 5, 48 Pirrama Road', al3: 'Pyrmount', al4:'', pc:'2009', occ:'au', st:'New South Wales,Australia', cs:'Pyrmount', cn:'Google Sydney', cne:'', gt1:'121231312', mob:'123123213'},
{heading:'SHIPPING', ti:'', ln:'Jose', fn:'Nithin', al1:'Google Australia Pty Ltd.', al2: 'Level 5, 48 Pirrama Road', al3: 'Pyrmount', al4:'', pc:'2009', occ:'au', st:'New South Wales,Australia', cs:'Pyrmount', cn:'Google Sydney', cne:'', gt1:'121231312', mob:'123123213'}]

}

function ctrl2($scope)
{
$scope.fc=1;
$scope.ard='up';
$scope.clk=function(){
if($scope.fc==1)
{$scope.fc=0;}
else
{
if($scope.ard=='up')
{$scope.ard='down';}
else
{$scope.ard='up';}
//if($scope.ard=='up')
//{}
}
}
}
//document.getElementsByClassName("form-group").onmouseover="hvr(this)";
//document.getElementsByClassName("form-group").onmouseout="out(this)";

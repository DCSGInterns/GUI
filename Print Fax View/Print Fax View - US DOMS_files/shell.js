// ================================================================
// 
// script code used by the Chameleon framework
//
// ================================================================


// ----------------------------------------------------------------
// form submission functions
// ----------------------------------------------------------------

// post a change of state to the server
// (used when changing from one module to another)
function changeState( state )
{
	postAction( "changeState " + state );
}

// post an action back to the server
function postAction( action )
{
	var cf = document.forms.master;
	
	cf.next_action.value = action;
	
	cf.submit();
}

// submit with an empty action field
function onSubmitMaster()
{
	var cf = document.forms.master;
	
	cf.next_action.value = "";
	
	return true;
}


// ----------------------------------------------------------------
// masthead functions
// ----------------------------------------------------------------

function setTickerMessage( vValue )
{
	document.getElementById( "masthead" ).tickerMessage = vValue;
}

function setCustomerName( vValue )
{
	document.getElementById( "masthead" ).customerName = vValue;
}

function setCustomerNumber( vValue )
{
	document.getElementById( "masthead" ).customerNumber = vValue;
}

function setCompanyNumber( vValue )
{
	document.getElementById( "masthead" ).companyNumber = vValue;
}

function setCreditStatus( vValue )
{
	document.getElementById( "masthead" ).creditStatus = vValue;
}


// ----------------------------------------------------------------
// titled box functions
// ----------------------------------------------------------------

function tbCollapse( id )
{
	var	expanded	= document.getElementById( id + "_xpnd" );
	var	collapse	= document.getElementById( id + "_clps" );
	var	hidden		= document.getElementById( id );
	
	expanded.style.display = "none";
	collapse.style.display = "block";
	hidden.value		   = "clps";
}

function tbExpand( id )
{
	var	expanded	= document.getElementById( id + "_xpnd" );
	var	collapse	= document.getElementById( id + "_clps" );
	var	hidden		= document.getElementById( id );
	
	collapse.style.display = "none";
	expanded.style.display = "block";
	hidden.value		   = "";
}

// ----------------------------------------------------------------
// misc functions
// ----------------------------------------------------------------

// used by the Channel Viewer
function onChannelClick( codePath )
{
	var doc = new ActiveXObject("Msxml2.DOMDocument");
	
	doc.async = false;
	doc.load( "/proteus/bindings/Admin/Modules/ChannelProperties.asmx/GetChannelProperties?codePath=" + codePath );

	parent.document.getElementById("channelProperties").innerHTML = "<xmp>" + doc.xml + "</xmp>";	
}


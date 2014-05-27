// JAVASCRIPT TRIM FUNCTION STARTS HERE.
function trimAll(sString) 
{
    while (sString.substring(0,1) == ' ')
    {
        sString = sString.substring(1, sString.length);
    }
    while (sString.substring(sString.length-1, sString.length) == ' ')
    {
        sString = sString.substring(0, sString.length-1);
    }
    return sString;
}
// TRIM FUNCTION ENDS HERE.

function updateInputBox(tblBeNumId, beOrderNumCount, prefixes, maxLength) 
{
	tblBeNum = document.getElementById(tblBeNumId);
	inputLastBeNumCount = document.getElementById("intLastBeNumCount");
	var count = parseInt(beOrderNumCount);
	if (isNaN(count)) return;
	if (count > 0) 
	{
		var iBeNextIndex = parseInt(inputLastBeNumCount.value);
		var iChange = count - iBeNextIndex;
		var newRow, newCell, inputIds;
		if (iChange > 0)
		{
			for (var i=0; i<iChange; ++i) 
			{ 
				inputIds = "";
				newRow = tblBeNum.insertRow();
				for (var j=0; j<prefixes.length; ++j)
				{
					if (prefixes[j] != '')
					{
						// Display cell normally
						newCell = newRow.insertCell();
						newCell.align = "center";
						newCell.bgColor = "#2B3E42";
						if (j==0) 
						{
							newCell.innerHTML = "<input type=\"text\" ondeactivate=\"ValidateOrderNum(this)\" maxlength=\"" + String(maxLength) + "\" name=\"" + String(prefixes[j]) + String(iBeNextIndex + i) + "\">"
						} 
						else 
						{
							newCell.innerHTML = "<input type=\"text\" name=\"" + String(prefixes[j]) + String(iBeNextIndex + i) + "\">"
						}
						inputIds += "'" + String(prefixes[j]) + String(iBeNextIndex + i) + "',";
					}
					else
					{
						// Don't display cell when there is no prefix -- this hides the SEF when it doesn't apply.
						// Next, pass an empty string so that we pass all required parameters to CopyOrderInfoFromDoms.
						inputIds += "'" + String(prefixes[j]) + "',";
					}
				}

				var checkAPOMS = document.getElementById("BackendSytemID");
				if (checkAPOMS.innerText == "How many APOMS Order Numbers?") {
				}
				else {
				    newCell = newRow.insertCell();
				    newCell.bgColor = "#2B3E42";
				    newCell.innerHTML = "<input type=\"button\" value=\"Copy From Doms\" onclick=\"CopyOrderInfoFromDoms(" + inputIds.substring(0, inputIds.length - 1) + ")\">";
				}
			}
		} else if (iChange < 0) {
			iChange = (iChange*-1) - 1 
			for (var k=0; k<=iChange; ++k) 
			{
				tblBeNum.deleteRow();
			}
		}
		inputLastBeNumCount.value = count
	}
}

function ValidateOrderNum(orderNumElem) 
{ 
    if ((orderNumElem.value.length != 0) && ((orderNumElem.value.length < 9) || (orderNumElem.value.length > 18)))
	{ 
		alert("Order number should have the length of 9-18 digits."); 
		orderNumElem.focus(); 
	} 
} 

// FUNCTION TO COPY ORDER DETAILS FROM DOMS1200 SCREEN - STARTS HERE.
function CopyOrderInfoFromDoms(orderId, shipping, tax, fee, total, deliveryDate)
{
    bxOrderID = document.getElementById(orderId);
    bxShip = document.getElementById(shipping);
	bxTax = document.getElementById(tax);
	if (fee != "")
	{
		// GET THE HTML INPUT NAME SINCE THE SEF APPLIES.
		bxFee = document.getElementById(fee);
	}
	bxTotal = document.getElementById(total);
	bxDeliveryDate = document.getElementById(deliveryDate);

    // MESSAGE INSTRUCTIONS.
    var strCommonMsg = "DOMS1200 Screen -> Click 'Edit' and choose 'Select All' -> Click the 'Copy' button. Then click the 'Copy From Doms' button.";
    var strVerifyMsg = "Please verify the following:\n";
    var strMessage1 = "1. Order has not been generated.\n";
    var strMessage2 = "2. Wrong DOMS screen has been copied.\n";
    var strMessage3 = "3. Clipboard is empty.\n";
    var strMessage4 = "4. Clipboard contains some other copied information.";
    var strOrdNumMsg = "Order Number is not available.";
    var strShipMsg = "Shipping Amount is not available.";
    var strTaxMsg = "Sales Tax is not available.";
    var strTotalMsg = "Order Total Amount is not available.";
    var strDeliveryDateMsg = "Est. Delivery Date / Est. Ship Date  is not available.";
    var strDisplayErrorMsg = "";
    
    // COLUMNS TO BE COPIED FROM DOMS SCREEN.
    var strOrderNum = "Order #:";
    var strShipping = "Hand:";
    var strSalesTax = "Sales Tax:";
	if (fee != "")
	{
	    var strSEFTotalMsg = "SEF Total Amount is not available.";
	    var strSEFTotal = "SEF Total:";
    }    
    var strOrderTot = "Order Tot:";
    var strDeliveryDate = "EDD:";
    var strShipDate="Est Ship:"
    
    
	// FETCH THE CLIPBOARD VALUE.
    var strClipboardData = window.clipboardData.getData('Text');

    var intPosition = 0;
    // ORDER NUMBER COLUMN IN DOMS SCREEN:
    // FIELD NAME = Order #:
    // FIELD NAME WIDTH = 8
    // IF THE FOLLOWING CONDITION IS NOT NULL THEN COPY THE ORDER NUMBER VALUE FROM THE CLIPBOARD STRING.
    var blnDataCaptured = false;
    var strRealValue = "";
    if ((strClipboardData.match(strOrderNum) != null) || (strClipboardData.match(strOrderNum) == strOrderNum))
    {
        // INDEX OF strOrderNum + FIELD NAME WIDTH.
        intPosition = strClipboardData.lastIndexOf(strOrderNum) + 8;
        while (!blnDataCaptured)
        {
            strTempCharacter = trimAll(strClipboardData.substr(intPosition, 1));
            if ((strTempCharacter == "") || (strTempCharacter == String.fromCharCode(9)))   // FOR SPACE AND TAB KEY.
            {
                // THIS CHECK IS FOR, ORDER # SHOULD BE CONTINUOUS 9-18 DIGITS.
                if (trimAll(strRealValue) == "")
                    blnDataCaptured = false;
                else
                {
                    if (strRealValue.length < 9)
                    {
                        alert("Wrong Order Number. Order Number should have 9-18 digits.");
                        strRealValue = "";
                    }
                    blnDataCaptured = true;                    
                }
            }
            else
            {
                if (((strTempCharacter.toLowerCase() >= "a") && (strTempCharacter.toLowerCase() <= "z")) ||
                        (strTempCharacter == "("))
                {
                    if (trimAll(strRealValue) == "")
                    {
                        // NO VALUE IS AVAILABLE.
                        strDisplayErrorMsg = strDisplayErrorMsg + strOrdNumMsg + "\n";
                    }
                    blnDataCaptured = true;
                }
                else
                {
                    strRealValue = strRealValue + strTempCharacter;
                    if (strRealValue.length == 18)
                        blnDataCaptured = true;
                }
            }
            intPosition++;
        }
        if (trimAll(strRealValue) != "")
        {
            bxOrderID.value = trimAll(strRealValue);
        }
    }
    else
    {
        alert(strOrdNumMsg + strVerifyMsg + strMessage1 + strMessage2 + strMessage3 + strMessage4 + "\n\n" + strCommonMsg);
        return false;
    }
    // SHIPPING CHARGE COLUMN IN DOMS SCREEN:
    // FIELD NAME = Ship\Hand: - WE ARE USING ONLY "Hand:"
    // FIELD NAME WIDTH = 10 - OUR VALUE WIDTH IS 5
    // IF THE FOLLOWING CONDITION IS NOT NULL THEN COPY THE SHIPPING VALUE FROM THE CLIPBOARD STRING.
    
    // HERE WE COULD PUT THE FOLLOWING LOGIC BECAUSE OF THE SINGLE CHARACTER FLAG PRECEEDING THE ACTUAL SHIPPING VALUE.
    // # CHECK IF THE CHARACTER IS IN A-Z AND MARK A FLAG AS OCCURED_FIRST. IF THE NEXT CHARACTER ALSO FALLS IN A-Z THEN
    // # WE COULD CONCLUDE THAT WE CAPTURED THE VALUE BECAUSE IN THIS CASE THE CONTROL COULD BE CROSSED THE NUMERIC VALUES.
    // # IF THE NEXT CHARACTER (FURTHER CHARACTERS) ARE NOT IN CHARACTERS THEN WE COULD PROCEED FURTHER TO CAPTURE THE VALUES.
    var blnOccuredFirst = false;
    blnDataCaptured = false;
    strRealValue = "";
    var intMaximumNumberOfDigitsAfterDecimal = 2;
    if ((strClipboardData.match(strShipping) != null) || (strClipboardData.match(strShipping) == strShipping))
    {
        // INDEX OF strShipping + FIELD NAME WIDTH.
        intPosition = strClipboardData.indexOf(strShipping) + 5;
        while (!blnDataCaptured)
        {
            strTempCharacter = trimAll(strClipboardData.substr(intPosition, 1));
            if ((strTempCharacter == "") || (strTempCharacter == String.fromCharCode(9)))   // FOR SPACE AND TAB KEY.
                blnDataCaptured = false;
            else
            {
                if ((strTempCharacter.toLowerCase() >= "a") && (strTempCharacter.toLowerCase() <= "z"))
                {
                    if (blnOccuredFirst == false)
                    {
                        // THE CHARACTER IS APPEARING FIRST TIME. IN THIS CASE THE SCENARIO IS EITHER THE SHIPPING FLAG 
                        // HAS BEEN SET OR THE SHIPPING FIELD (INCLUDING THE FLAG) IS EMPTY.
                        blnOccuredFirst = true;
                    }
                    else
                    {
                        if (trimAll(strRealValue) == "")
                        {
                            // NO VALUE IS AVAILABLE.
                            strDisplayErrorMsg = strDisplayErrorMsg + strShipMsg + "\n";
                        }
                        blnDataCaptured = true;
                    }
                }
                else
                {
                    strRealValue = strRealValue + strTempCharacter;
                    if (strTempCharacter == ".")    // SINCE THIS VALUE IS THE FLOATING VALUE THIS CHECK IS REQUIRED.
                    {
                        strRealValue = strRealValue + trimAll(strClipboardData.substr((intPosition+1), intMaximumNumberOfDigitsAfterDecimal));
                        blnDataCaptured = true;
                    }
                }
            }
            intPosition++;
        }
        if (trimAll(strRealValue) != "")
        {
            bxShip.value = trimAll(strRealValue);
        }
    }
    else
    {
        alert(strShipMsg + strVerifyMsg + strMessage1 + strMessage2 + strMessage3 + strMessage4 + "\n\n" + strCommonMsg);
        return false;
    }
	// SALES TAX COLUMN IN DOMS SCREEN: 
	// FIELD NAME = Sales Tax:
	// FIELD NAME WIDTH = 10
    // IF THE FOLLOWING CONDITION IS NOT NULL THEN COPY THE SALES TAX VALUE FROM THE CLIPBOARD STRING.
    blnDataCaptured = false;
    strRealValue = "";
    if ((strClipboardData.match(strSalesTax) != null) || (strClipboardData.match(strSalesTax) == strSalesTax))
    {
        // INDEX OF strSalesTax + FIELD NAME WIDTH.
        intPosition = strClipboardData.indexOf(strSalesTax) + 10;
        while (!blnDataCaptured)
        {
            strTempCharacter = trimAll(strClipboardData.substr(intPosition, 1));
            if ((strTempCharacter == "") || (strTempCharacter == String.fromCharCode(9)))   // FOR SPACE AND TAB KEY.
                blnDataCaptured = false;
            else
            {
                if ((strTempCharacter.toLowerCase() >= "a") && (strTempCharacter.toLowerCase() <= "z"))
                {
                    if (trimAll(strRealValue) == "")
                    {
                        // NO VALUE IS AVAILABLE.
                        strDisplayErrorMsg = strDisplayErrorMsg + strTaxMsg + "\n";
                    }
                    blnDataCaptured = true;
                }
                else
                {
                    strRealValue = strRealValue + strTempCharacter;
                    if (strTempCharacter == ".")    // SINCE THIS VALUE IS THE FLOATING VALUE THIS CHECK IS REQUIRED.
                    {
                        strRealValue = strRealValue + trimAll(strClipboardData.substr((intPosition+1), intMaximumNumberOfDigitsAfterDecimal));
                        blnDataCaptured = true;
                    }
                }
            }
            intPosition++;
        }
        if (trimAll(strRealValue) != "")
        {
            bxTax.value = trimAll(strRealValue);
        }
    }
    else
    {
        alert(strTaxMsg + strVerifyMsg + strMessage1 + strMessage2 + strMessage3 + strMessage4 + "\n\n" + strCommonMsg);
        return false;
    }
    if (fee != "")
    {
        // SEF TOTAL COLUMN IN DOMS SCREEN:
        // FIELD NAME = SEF Total:
        // FIELD NAME WIDTH = 10
        // IF THE FOLLOWING CONDITION IS NOT NULL THEN COPY THE ORDER TOTAL VALUE FROM THE CLIPBOARD STRING.
        blnDataCaptured = false;
        strRealValue = "";
        if ((strClipboardData.match(strSEFTotal) != null) || (strClipboardData.match(strSEFTotal) == strSEFTotal))
        {
            // INDEX OF strSEFTotal + FIELD NAME WIDTH.
            intPosition = strClipboardData.indexOf(strSEFTotal) + 10;
            while (!blnDataCaptured)
            {
                strTempCharacter = trimAll(strClipboardData.substr(intPosition, 1));
                if ((strTempCharacter == "") || (strTempCharacter == String.fromCharCode(9)))   // FOR SPACE AND TAB KEY.
                    blnDataCaptured = false;
                else
                {
                    if ((strTempCharacter.toLowerCase() >= "a") && (strTempCharacter.toLowerCase() <= "z"))
                    {
                        if (trimAll(strRealValue) == "")
                        {
                            // NO VALUE IS AVAILABLE.
                            strDisplayErrorMsg = strDisplayErrorMsg + strSEFTotalMsg + "\n";
                        }
                        blnDataCaptured = true;
                    }
                    else
                    {
                        strRealValue = strRealValue + strTempCharacter;
                        if (strTempCharacter == ".")    // SINCE THIS VALUE IS THE FLOATING VALUE THIS CHECK IS REQUIRED.
                        {
                            strRealValue = strRealValue + trimAll(strClipboardData.substr((intPosition+1), intMaximumNumberOfDigitsAfterDecimal));
                            blnDataCaptured = true;
                        }
                    }
                }
                intPosition++;
            }
            if (trimAll(strRealValue) != "")
            {
                bxFee.value = trimAll(strRealValue);
            }
        }
        else
        {
            alert(strSEFTotalMsg + strVerifyMsg + strMessage1 + strMessage2 + strMessage3 + strMessage4 + "\n\n" + strCommonMsg);
            return false;
        }
    }
    // ORDER TOTAL COLUMN IN DOMS SCREEN:
    // FIELD NAME = Order Tot:
    // FIELD NAME WIDTH = 10
    // IF THE FOLLOWING CONDITION IS NOT NULL THEN COPY THE ORDER TOTAL VALUE FROM THE CLIPBOARD STRING.
    blnDataCaptured = false;
    strRealValue = "";
    if ((strClipboardData.match(strOrderTot) != null) || (strClipboardData.match(strOrderTot) == strOrderTot))
    {
        // INDEX OF strOrderTot + FIELD NAME WIDTH.
        intPosition = strClipboardData.indexOf(strOrderTot) + 10;
        while (!blnDataCaptured)
        {
            strTempCharacter = trimAll(strClipboardData.substr(intPosition, 1));
            if ((strTempCharacter == "") || (strTempCharacter == String.fromCharCode(9)))   // FOR SPACE AND TAB KEY.
                blnDataCaptured = false;
            else
            {
                if ((strTempCharacter.toLowerCase() >= "a") && (strTempCharacter.toLowerCase() <= "z"))
                {
                    if (trimAll(strRealValue) == "")
                    {
                        // NO VALUE IS AVAILABLE.
                        strDisplayErrorMsg = strDisplayErrorMsg + strTotalMsg + "\n";
                    }
                    blnDataCaptured = true;
                }
                else
                {
                    strRealValue = strRealValue + strTempCharacter;
                    if (strTempCharacter == ".")    // SINCE THIS VALUE IS THE FLOATING VALUE THIS CHECK IS REQUIRED.
                    {
                        strRealValue = strRealValue + trimAll(strClipboardData.substr((intPosition+1), intMaximumNumberOfDigitsAfterDecimal));
                        blnDataCaptured = true;
                    }
                }
            }
            intPosition++;
        }
        if (trimAll(strRealValue) != "")
        {
            bxTotal.value = trimAll(strRealValue);
        }
    }
    else
    {
        alert(strTotalMsg + strVerifyMsg + strMessage1 + strMessage2 + strMessage3 + strMessage4 + "\n\n" + strCommonMsg);
        return false;
    }
    // ESTIMATED SHIP DATE IN DOMS SCREEN:
    // FIELD NAME = EDD:
    // FIELD NAME WIDTH = 4
    // IF THE FOLLOWING CONDITION IS NOT NULL THEN COPY THE ORDER TOTAL VALUE FROM THE CLIPBOARD STRING.
    blnDataCaptured = false;
    strRealValue = "";
    if ((strClipboardData.match(strDeliveryDate) != null) || (strClipboardData.match(strDeliveryDate) == strDeliveryDate))
    {
        // INDEX OF strDeliveryDate + FIELD NAME WIDTH.
        intPosition = strClipboardData.indexOf(strDeliveryDate) + 4;
        while (!blnDataCaptured)
        {
            strTempCharacter = trimAll(strClipboardData.substr(intPosition, 1));
            if ((strTempCharacter == "") || (strTempCharacter == String.fromCharCode(9)))   // FOR SPACE AND TAB KEY.
            {
                if ((trimAll(strRealValue) != "") && (trimAll(strRealValue).length < 8))
                {
                    if (trimAll(strRealValue.substr(strRealValue.length-1, 1)) == "/")
                        strRealValue = strRealValue + "0";
                    else
                        strRealValue = strRealValue + "/";
                }                        
                else
                    blnDataCaptured = false;
            }
            else
            {
                if ((strTempCharacter.toLowerCase() >= "a") && (strTempCharacter.toLowerCase() <= "z"))
                {
                    if (trimAll(strRealValue) == "")
                    {
                        // NO VALUE IS AVAILABLE.
                        strDisplayErrorMsg = strDisplayErrorMsg + strDeliveryDateMsg + "\n";
                    }
                    blnDataCaptured = true;
                }
                else
                {
                    strRealValue = strRealValue + strTempCharacter;
                }
            }
            intPosition++;
        }
        if (trimAll(strRealValue) != "")
        {
            // This scenario will happen if the day field will have only one character in DOMS screen. At this time the 
            // earlier script will add additional "/" at the end.
            if (strRealValue.substr(strRealValue.length-1, 1) == "/")
            {
                strRealValue = "0" + strRealValue.substr(0, 7);
            }
            bxDeliveryDate.value = trimAll(strRealValue);
        }
    }
    else if ((strClipboardData.match(strShipDate) != null) || (strClipboardData.match(strShipDate) == strShipDate))
    {
        // INDEX OF strDeliveryDate + FIELD NAME WIDTH.
        intPosition = strClipboardData.indexOf(strShipDate) + 9;
        while (!blnDataCaptured)
        {
            strTempCharacter = trimAll(strClipboardData.substr(intPosition, 1));
            if ((strTempCharacter == "") || (strTempCharacter == String.fromCharCode(9)))   // FOR SPACE AND TAB KEY.
            {
                if ((trimAll(strRealValue) != "") && (trimAll(strRealValue).length < 8))
                {
                    if (trimAll(strRealValue.substr(strRealValue.length-1, 1)) == "/")
                        strRealValue = strRealValue + "0";
                    else
                        strRealValue = strRealValue + "/";
                }                        
                else
                    blnDataCaptured = false;
            }
            else
            {
                if ((strTempCharacter.toLowerCase() >= "a") && (strTempCharacter.toLowerCase() <= "z"))
                {
                    if (trimAll(strRealValue) == "")
                    {
                        // NO VALUE IS AVAILABLE.
                        strDisplayErrorMsg = strDisplayErrorMsg + strDeliveryDateMsg + "\n";
                    }
                    blnDataCaptured = true;
                }
                else
                {
                    strRealValue = strRealValue + strTempCharacter;
                }
            }
            intPosition++;
        }
        if (trimAll(strRealValue) != "")
        {
            // This scenario will happen if the day field will have only one character in DOMS screen. At this time the 
            // earlier script will add additional "/" at the end.
            if (strRealValue.substr(strRealValue.length-1, 1) == "/")
            {
                strRealValue = "0" + strRealValue.substr(0, 7);
            }
            bxDeliveryDate.value = trimAll(strRealValue);
        }
    }
    else
    {
        alert(strDeliveryDateMsg + strVerifyMsg + strMessage1 + strMessage2 + strMessage3 + strMessage4 + "\n\n" + strCommonMsg);
        return false;
    }
    if (trimAll(strDisplayErrorMsg) != "")
    {
        alert(strDisplayErrorMsg + strVerifyMsg + strMessage1 + strMessage2 + strMessage3 + strMessage4 + "\n\n" + strCommonMsg);
        return false;
    }
}
// FUNCTION TO COPY ORDER DETAILS FROM DOMS1200 SCREEN - ENDS HERE.

// FUNCTION TO COPY THE QUOTE NUMBER FROM DOMS1100 SCREEN - STARTS HERE.
function CopyQuoteNumFromDOMS(orderId, pasteLabel)
{
    pasteLabel.innerHTML = "&nbsp;"
    bxQuoteNum = document.getElementById(orderId);
    
    // COLUMN TO BE COPIED FROM DOMS SCREEN.
    var strQuoteNum = "Quote #:";
    
    // MESSAGE INSTRUCTIONS.
    var strCommonMsg = "DOMS1100 Screen -> Click 'Edit' and choose 'Select All' -> Click the 'Copy' button. Then click the 'Copy From OMS' button.";
    var strVerifyMsg = "Please verify the following:\n";
    var strMessage1 = "1. Wrong DOMS screen has been copied.\n";
    var strMessage2 = "2. Clipboard is empty.\n";
    var strMessage3 = "3. Clipboard contains some other copied information.";
    var strQuoteNumMsg = "Quote Number is not available.";
    
    // FETCH THE CLIPBOARD VALUE.
    var strClipboardData = window.clipboardData.getData('Text');

    var intPosition = 0;
    var blnDataCaptured = false;
    var strRealValue = "";
    // QUOTE NUMBER COLUMN IN DOMS SCREEN:
    // FIELD NAME = Quote #:
    // FIELD NAME WIDTH = 8
    // VALUE WIDTH = 9
    // IF THE FOLLOWING CONDITION IS NOT NULL THEN COPY THE QUOTE NUMBER VALUE FROM THE CLIPBOARD STRING.
    if ((strClipboardData.match(strQuoteNum) != null) || (strClipboardData.match(strQuoteNum) == strQuoteNum))
    {
        // INDEX OF strQuoteNum + FIELD NAME WIDTH + SPACE BETWEEN FIELD NAME AND VALUE WIDTH.
        intPosition = strClipboardData.indexOf(strQuoteNum) + 8;
        while (!blnDataCaptured)
        {
            strTempCharacter = trimAll(strClipboardData.substr(intPosition, 1));
            if ((strTempCharacter == "") || (strTempCharacter == String.fromCharCode(9)))   // FOR SPACE AND TAB KEY.
            {
                // THIS CHECK IS FOR, ORDER # SHOULD BE CONTINUOUS 9 DIGITS.
                if (trimAll(strRealValue) == "")
                    blnDataCaptured = false;
                else
                {
                    alert("Wrong Quote Number. Quote Number should have 9 digits.");
                    strRealValue = "";
                    blnDataCaptured = true;
                }
            }
            else
            {
                if ((strTempCharacter.toLowerCase() >= "a") && (strTempCharacter.toLowerCase() <= "z"))
                {
                    if (trimAll(strRealValue) == "")
                    {
                        // NO VALUE IS AVAILABLE.
                        alert(strQuoteNumMsg);
                        blnDataCaptured = true;
                        return false;
                    }
                    blnDataCaptured = true;
                }
                else
                {
                    strRealValue = strRealValue + strTempCharacter;
                    if (strRealValue.length == 9)
                        blnDataCaptured = true;
                }
            }
            intPosition++;
        }
        if (trimAll(strRealValue) != "")
        {
            bxQuoteNum.value = trimAll(strRealValue);
            pasteLabel.color = "blue";
            pasteLabel.innerHTML = "Quote Number copied from DOMS -- ready to submit.";
        }
    }
    else
    {
        alert(strQuoteNumMsg + strVerifyMsg + strMessage1 + strMessage2 + strMessage3 + "\n\n" + strCommonMsg);
        pasteLabel.color = "red";
        pasteLabel.innerHTML = "Please go to DOMS and click F6 to display DOMS1100 Quote Processing screen.<BR>" + strCommonMsg;
        return false;
    }
}
// FUNCTION TO COPY THE QUOTE NUMBER FROM DOMS1100 SCREEN - ENDS HERE.
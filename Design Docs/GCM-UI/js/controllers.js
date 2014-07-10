'use strict';
 

var gcmControllerModule =  angular.module('gcmApp.controllers', ['ui.bootstrap','ngProgress']);
 

gcmControllerModule.controller('gcmCtrl', function ($scope,$http,ngProgress) {
$scope.dpid;
$scope.test="sdsa";
$scope.updateList=[];
$scope.loading=false;
$scope.waiting=true;
$scope.saving=false;
$scope.iseditable="false";
$scope.formData;
$scope.form;
$scope.bcontact;
$scope.scontact;
$scope.shipInfo;
$scope.storeOwner;
$scope.accountName;
$scope.tacNumber;
$scope.copy;
$scope.result="not done";
/*$scope.formData= {
  "?xml": {
    "@version": "1.0"
  },
  "OrderGroup": {
    "@xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
    "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "DNCCacheVersion": "628eb970-fe2c-4707-ad9e-52a043c10a05",
    "CheckoutProfile": null,
    "OrderForms": {
      "OrderForm": {
        "Id": "a812cf30-d824-4417-8da6-b361503b5e95",
        "ShippingInformation": {
          "Id": "2abc2b22-6f67-429d-bb45-2cae92ef6f71",
          "hasDeliveryLoadingDock": "undefined",
          "DeliveryAboveFirstFloor": "undefined",
          "hasFreightElevator": "undefined",
          "ShippingContact": {
            "Name": {
              "MAGuid": "00000000-0000-0000-0000-000000000000"
            },
            "HasAddress": "false",
            "Id": "00000000-0000-0000-0000-000000000000",
            "CustomerType": "NONE",
            "EmailType": "Text",
            "OrganizationInfo": null,
            "Address": {
              "Id": "5c5668ef-9989-4eac-8338-e09a64d4f074",
              "Country": "us",
              "IsAddressVerified": "false",
              "IsValid": "false",
              "MAGuid": "00000000-0000-0000-0000-000000000000",
              "AddressType": "General",
              "AddressStatus": "Active"
            },
            "EmailAddress": {
              "Email": null
            },
            "RefEmailAddress": {
              "Email": null
            },
            "AdditionalEmails": null,
            "PhoneContacts": null,
            "OptInFlags": "0",
            "BestTimeToCall": "AnyTime",
            "ContactType": "UNDEFINED",
            "BackendCustomerNumber": "-1",
            "SequenceID": "0",
            "MAGuid": "00000000-0000-0000-0000-000000000000",
            "IsValid": "false"
          },
          "ShippingChoice": "LD",
          "ShippingOptions": {
            "ShippingOption": [
              {
                "AdjustedShippingTotal": "246.00",
                "UnAdjustedShippingTotal": "411.00",
                "Enabled": "true",
                "IsDiscounted": "true",
                "ShippingOptionId": "ND",
                "ShippingDiscountTotal": "165.00"
              },
              {
                "AdjustedShippingTotal": "142.00",
                "UnAdjustedShippingTotal": "307.00",
                "Enabled": "true",
                "IsDiscounted": "true",
                "ShippingOptionId": "2D",
                "ShippingDiscountTotal": "165.00"
              },
              {
                "AdjustedShippingTotal": "0.00",
                "UnAdjustedShippingTotal": "253.00",
                "Enabled": "true",
                "IsDiscounted": "true",
                "ShippingOptionId": "3D",
                "ShippingDiscountTotal": "253.00"
              },
              {
                "AdjustedShippingTotal": "223.00",
                "UnAdjustedShippingTotal": "253.00",
                "Enabled": "true",
                "IsDiscounted": "true",
                "ShippingOptionId": "LD",
                "ShippingDiscountTotal": "30.00"
              }
            ]
          },
          "PremiumShippingPrice": "0",
          "UsePremiumShipping": "false",
          "RollupPremiumShipping": "true",
          "ShippingAvailable": "false",
          "RequireShipping": "false",
          "UnadjustedShipping": "0",
          "AdjustedShipping": "0",
          "LeadTimeDays": "0",
          "DesignatedCarrierInfo": {
            "HandlingFee": "0",
            "HandlingFeeEnabled": "false"
          }
        },
        "Shipments": {
          "Shipment": {
            "ItemIds": {
              "guid": [
                "b99ad84e-4fa3-420e-894c-0065993719b9",
                "95e20818-fadf-404e-87f8-af756da31899"
              ]
            },
            "ShippingInformation": {
              "Id": "2abc2b22-6f67-429d-bb45-2cae92ef6f71",
              "hasDeliveryLoadingDock": "undefined",
              "DeliveryAboveFirstFloor": "undefined",
              "hasFreightElevator": "undefined",
              "ShippingContact": {
                "Name": {
                  "MAGuid": "00000000-0000-0000-0000-000000000000"
                },
                "HasAddress": "false",
                "Id": "00000000-0000-0000-0000-000000000000",
                "CustomerType": "NONE",
                "EmailType": "Text",
                "OrganizationInfo": null,
                "Address": {
                  "Id": "5c5668ef-9989-4eac-8338-e09a64d4f074",
                  "Country": "us",
                  "IsAddressVerified": "false",
                  "IsValid": "false",
                  "MAGuid": "00000000-0000-0000-0000-000000000000",
                  "AddressType": "General",
                  "AddressStatus": "Active"
                },
                "EmailAddress": {
                  "Email": null
                },
                "RefEmailAddress": {
                  "Email": null
                },
                "AdditionalEmails": null,
                "PhoneContacts": null,
                "OptInFlags": "0",
                "BestTimeToCall": "AnyTime",
                "ContactType": "UNDEFINED",
                "BackendCustomerNumber": "-1",
                "SequenceID": "0",
                "MAGuid": "00000000-0000-0000-0000-000000000000",
                "IsValid": "false"
              },
              "ShippingChoice": "LD",
              "ShippingOptions": {
                "ShippingOption": [
                  {
                    "AdjustedShippingTotal": "246.00",
                    "UnAdjustedShippingTotal": "411.00",
                    "Enabled": "true",
                    "IsDiscounted": "true",
                    "ShippingOptionId": "ND",
                    "ShippingDiscountTotal": "165.00"
                  },
                  {
                    "AdjustedShippingTotal": "142.00",
                    "UnAdjustedShippingTotal": "307.00",
                    "Enabled": "true",
                    "IsDiscounted": "true",
                    "ShippingOptionId": "2D",
                    "ShippingDiscountTotal": "165.00"
                  },
                  {
                    "AdjustedShippingTotal": "0.00",
                    "UnAdjustedShippingTotal": "253.00",
                    "Enabled": "true",
                    "IsDiscounted": "true",
                    "ShippingOptionId": "3D",
                    "ShippingDiscountTotal": "253.00"
                  },
                  {
                    "AdjustedShippingTotal": "223.00",
                    "UnAdjustedShippingTotal": "253.00",
                    "Enabled": "true",
                    "IsDiscounted": "true",
                    "ShippingOptionId": "LD",
                    "ShippingDiscountTotal": "30.00"
                  }
                ]
              },
              "PremiumShippingPrice": "0",
              "UsePremiumShipping": "false",
              "RollupPremiumShipping": "true",
              "ShippingAvailable": "false",
              "RequireShipping": "false",
              "UnadjustedShipping": "0",
              "AdjustedShipping": "0",
              "LeadTimeDays": "0",
              "DesignatedCarrierInfo": {
                "HandlingFee": "0",
                "HandlingFeeEnabled": "false"
              }
            },
            "IsDefault": "true",
            "Id": "b4f6b3e0-d128-40bd-a269-16bb7849222d",
            "MustArriveByDate": {
              "@xsi:nil": "true"
            }
          }
        },
        "IsValidQuote": "false",
        "Items": {
          "Item": [
            {
              "@xsi:type": "SNAItem",
              "Id": "b99ad84e-4fa3-420e-894c-0065993719b9",
              "CustomerSet": "19",
              "Quantity": "1",
              "UnitQuantity": "1",
              "Description": "Nikon 105 mm f/2.8G IF-ED AF-S VR Micro Zoom Nikkor Lens",
              "Categories": {
                "Category": [
                  {
                    "Name": "SNA",
                    "ID": "SNA"
                  },
                  {
                    "Name": "All",
                    "ID": "2999"
                  },
                  {
                    "Name": "SLR Lenses",
                    "ID": "6096",
                    "ParentCategoryID": "4005"
                  },
                  {
                    "Name": "Camera, Photo & Video",
                    "ID": "4005",
                    "ParentCategoryID": "2999"
                  },
                  {
                    "Name": "ProductLine",
                    "ID": "p"
                  },
                  {
                    "Name": "29/SNP",
                    "ID": "29/SNP"
                  },
                  {
                    "Name": "29",
                    "ID": "29"
                  }
                ]
              },
              "ValidationStatus": "Valid",
              "BuildTime": "0",
              "Weight": "2.45",
              "CatalogSystemURI": "SNA",
              "FullfilmentLocationId": "I1",
              "Frictionless": "true",
              "ProductID": "A2468469",
              "AllowChangeQuantity": "true",
              "AllowSave": "true",
              "AllowEmail": "true",
              "Image": "https://snp.cdn.dell.com/snp/images2/100/A2468469.jpg",
              "ValidationLocked": "false",
              "ValidationLockEndDate": "0001-01-01T00:00:00",
              "PriceMatrix": {
                "Price": {
                  "Map": {
                    "d": [
                      "979.99",
                      "0.00",
                      "0",
                      "914.67",
                      "914.67",
                      "8.00",
                      "0",
                      "0",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "0",
                      "0",
                      "0",
                      "-16.18",
                      "-2147483648",
                      "-2147483648",
                      "-147.00",
                      "-2147483648",
                      "-2147483648",
                      "-0.95",
                      "-2147483648",
                      "-2147483648"
                    ]
                  },
                  "Id": "Price",
                  "RowLength": "23",
                  "ColumnLength": "1",
                  "RowKeyIndexBinding": null,
                  "RowTypeIndexBinding": {
                    "RowType": [
                      {
                        "n": "BasePrice",
                        "t": "1",
                        "s": "0",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ListPriceAdjustment",
                        "t": "1",
                        "s": "5",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "StandardDiscount",
                        "t": "1",
                        "s": "6",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "UnitCost",
                        "t": "4",
                        "s": "21",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "DutyCost",
                        "t": "4",
                        "s": "22",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "Shipping",
                        "t": "2",
                        "s": "0",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ItemSurcharge",
                        "t": "3",
                        "s": "11",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ShippingSurcharge",
                        "t": "3",
                        "s": "12",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTax",
                        "t": "5",
                        "s": "31",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTax",
                        "t": "5",
                        "s": "32",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTax",
                        "t": "5",
                        "s": "53",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTaxBase",
                        "t": "6",
                        "s": "61",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTaxBase",
                        "t": "6",
                        "s": "62",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTaxBase",
                        "t": "6",
                        "s": "63",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "37401",
                        "t": "7",
                        "s": "71",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "37401",
                        "t": "5",
                        "s": "35",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "37401",
                        "t": "5",
                        "s": "36",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "27522",
                        "t": "7",
                        "s": "72",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "27522",
                        "t": "5",
                        "s": "37",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "27522",
                        "t": "5",
                        "s": "38",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "32192",
                        "t": "7",
                        "s": "75",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "32192",
                        "t": "5",
                        "s": "33",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "32192",
                        "t": "5",
                        "s": "34",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      }
                    ]
                  },
                  "ColumnKeyIndexBinding": null
                },
                "Selected": {
                  "Map": {
                    "d": "1"
                  },
                  "Id": "Selected",
                  "RowLength": "1",
                  "ColumnLength": "1",
                  "RowKeyIndexBinding": null,
                  "RowTypeIndexBinding": null,
                  "ColumnKeyIndexBinding": null
                },
                "Results": {
                  "PriceMap": {
                    "Map": {
                      "d": [
                        "979.99",
                        "0.00",
                        "0",
                        "914.67",
                        "914.67",
                        "8.00",
                        "0",
                        "0",
                        "-2147483648",
                        "-2147483648",
                        "-2147483648",
                        "0",
                        "0",
                        "0",
                        "-16.18",
                        "-2147483648",
                        "-2147483648",
                        "-147.00",
                        "-2147483648",
                        "-2147483648",
                        "-0.95",
                        "-2147483648",
                        "-2147483648"
                      ]
                    },
                    "Id": "Item Totals",
                    "RowLength": "23",
                    "ColumnLength": "1",
                    "RowKeyIndexBinding": null,
                    "RowTypeIndexBinding": {
                      "RowType": [
                        {
                          "n": "BasePrice",
                          "t": "1",
                          "s": "0",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "ListPriceAdjustment",
                          "t": "1",
                          "s": "5",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "StandardDiscount",
                          "t": "1",
                          "s": "6",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "UnitCost",
                          "t": "4",
                          "s": "21",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "DutyCost",
                          "t": "4",
                          "s": "22",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "Shipping",
                          "t": "2",
                          "s": "0",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "ItemSurcharge",
                          "t": "3",
                          "s": "11",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "ShippingSurcharge",
                          "t": "3",
                          "s": "12",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "31",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "32",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "53",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "61",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "62",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "63",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "7",
                          "s": "71",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "5",
                          "s": "35",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "5",
                          "s": "36",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "27522",
                          "t": "7",
                          "s": "72",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "27522",
                          "t": "5",
                          "s": "37",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "27522",
                          "t": "5",
                          "s": "38",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "7",
                          "s": "75",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "5",
                          "s": "33",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "5",
                          "s": "34",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        }
                      ]
                    },
                    "ColumnKeyIndexBinding": null
                  }
                },
                "Version": "2"
              },
              "ShippingPriceMatrix": {
                "Price": {
                  "Map": {
                    "d": [
                      "16.00",
                      "12.00",
                      "8.00",
                      "8.00",
                      "0",
                      "0",
                      "8.00",
                      "0.95",
                      "0",
                      "0",
                      "0",
                      "0"
                    ]
                  },
                  "Id": "Price",
                  "RowLength": "3",
                  "ColumnLength": "4",
                  "RowKeyIndexBinding": null,
                  "RowTypeIndexBinding": {
                    "RowType": [
                      {
                        "n": "Shipping",
                        "t": "2",
                        "s": "0",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ShippingDiscount",
                        "t": "2",
                        "s": "75",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ShippingTax",
                        "t": "2",
                        "s": "32",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      }
                    ]
                  },
                  "ColumnKeyIndexBinding": null
                },
                "ColumnIndexBinding": {
                  "ColumnIndex": [
                    {
                      "OptionId": "ND",
                      "Index": "0"
                    },
                    {
                      "OptionId": "2D",
                      "Index": "1"
                    },
                    {
                      "OptionId": "3D",
                      "Index": "2"
                    },
                    {
                      "OptionId": "LD",
                      "Index": "3"
                    }
                  ]
                }
              },
              "CreateDate": "0001-01-01T00:00:00",
              "Marketing": {
                "Upsells": {
                  "Upsell": [
                    {
                      "ImageUrl": "http://snpi.dell.com/snp/images2/{0}/CameraServicesPPP.jpg",
                      "Blurb": "Dell 2-Year Product Protection Plan for Cameras and Camcorders",
                      "FromModuleID": "0",
                      "ToModuleID": "0",
                      "ToOptionID": "926-3587",
                      "DeltaPrice": "83.99",
                      "DiscountAmount": "0.00",
                      "Id": "00000000-0000-0000-0000-000000000000",
                      "UpsellId": "0"
                    },
                    {
                      "ImageUrl": "http://snpi.dell.com/snp/images2/{0}/CameraServicesPPP.jpg",
                      "Blurb": "Dell 3-Year Product Protection Plan for Cameras and Camcorders",
                      "FromModuleID": "0",
                      "ToModuleID": "0",
                      "ToOptionID": "926-3737",
                      "DeltaPrice": "136.49",
                      "DiscountAmount": "0.00",
                      "Id": "00000000-0000-0000-0000-000000000000",
                      "UpsellId": "0"
                    }
                  ]
                },
                "CrossSells": null
              },
              "Selected": "true",
              "ParentItemID": "00000000-0000-0000-0000-000000000000",
              "Manufacturer": "Nikon",
              "ShippingCost": "0",
              "AssociatedItems": null,
              "PriceAdjustments": {
                "PriceAdjustment": [
                  {
                    "@xsi:type": "Promotion",
                    "UniqueId": "00000000-0000-0000-0000-000000000000",
                    "Selected": "true",
                    "IsPermanent": "false",
                    "Id": "27522",
                    "AdjustmentType": "ItemLevelDNC",
                    "AppliedOrder": "0",
                    "TotalImpact": "0",
                    "OfferType": "PercentageOff",
                    "OfferValue": "0.1500",
                    "IsTaxInclusive": "false",
                    "Behavior": "None",
                    "AdjustmentImpact": "146.998500",
                    "TotalAdjustment": "146.998500",
                    "ExtendedProperties": null,
                    "ShortDescription": "Item Level Discount of 15% for all SNP item",
                    "ShortMarketingDescription": null,
                    "DiscountApplyOrder": "During",
                    "CouponFlag": "Discount",
                    "CouponStatus": "NotCoupon",
                    "CouponType": "NotCoupon",
                    "DateStart": "2009-05-18T05:00:00",
                    "DateEnd": "2102-05-19T04:59:59",
                    "PromotionType": "ItemLevel",
                    "CanApplyCrossSegment": "false",
                    "TimesApplied": "0",
                    "PromotionTeaserDescription": null,
                    "DisplayShortDescription": "true",
                    "OfferAmount": "0.1500",
                    "TimesToApply": "1",
                    "ExpiryDescription": null,
                    "CampaignType": "Undefined",
                    "LegalDescription": null,
                    "AwardLimit": "0",
                    "CampaignId": "0",
                    "ClickURL": null,
                    "ImageURL": null,
                    "ShowOriginalPrice": "false",
                    "ApplicationsWhereRuleCanApply": {
                      "int": [
                        "1",
                        "2",
                        "3"
                      ]
                    },
                    "ConcessionValue": "15.0000",
                    "LastModifiedDate": "2009-06-19T16:49:45.98",
                    "MaximumTimesRuleCanApply": "1",
                    "PricingRuleBucketId": "0",
                    "ConcessionClauseType": "PercentOffDiscount",
                    "PricingRuleType": "ItemDiscount",
                    "PricingRuleUsage": "None",
                    "PricingRuleRank": "10",
                    "CountryCode": "us",
                    "LanguageCode": "en",
                    "LongDescription": "Item Level Discount of 15% for all SNP item",
                    "LongMarketingDescription": null,
                    "PricingRuleDescription": null,
                    "CouponRedemptionAttempted": "false",
                    "CouponUnRedemptionAttempted": "false",
                    "InternalItemIdentifiers": {
                      "guid": "b99ad84e-4fa3-420e-894c-0065993719b9"
                    },
                    "IsModified": "false"
                  },
                  {
                    "@xsi:type": "Promotion",
                    "UniqueId": "00000000-0000-0000-0000-000000000000",
                    "Selected": "true",
                    "IsPermanent": "false",
                    "Id": "32192",
                    "AdjustmentType": "ShippingDNC",
                    "AppliedOrder": "0",
                    "TotalImpact": "0",
                    "OfferType": "DollarsOff",
                    "OfferValue": "5.0000",
                    "IsTaxInclusive": "false",
                    "Behavior": "Default",
                    "AdjustmentImpact": "0.9486166007905138339920948630",
                    "TotalAdjustment": "0.9486166007905138339920948630",
                    "ExtendedProperties": null,
                    "ShortDescription": "tedst",
                    "ShortMarketingDescription": null,
                    "DiscountApplyOrder": "During",
                    "CouponFlag": "Discount",
                    "CouponStatus": "NotCoupon",
                    "CouponType": "NotCoupon",
                    "DateStart": "2014-04-22T05:00:00",
                    "DateEnd": "2014-07-31T04:59:59",
                    "PromotionType": "ShippingDiscount",
                    "CanApplyCrossSegment": "false",
                    "TimesApplied": "0",
                    "PromotionTeaserDescription": null,
                    "DisplayShortDescription": "true",
                    "OfferAmount": "0",
                    "TimesToApply": "1",
                    "ExpiryDescription": null,
                    "CampaignType": "Undefined",
                    "LegalDescription": null,
                    "AwardLimit": "0",
                    "CampaignId": "0",
                    "ClickURL": null,
                    "ImageURL": null,
                    "ShowOriginalPrice": "false",
                    "ApplicationsWhereRuleCanApply": {
                      "int": [
                        "1",
                        "2",
                        "3",
                        "6"
                      ]
                    },
                    "ConcessionValue": "5.0000",
                    "LastModifiedDate": "2014-04-23T14:44:28.81",
                    "MaximumTimesRuleCanApply": "0",
                    "PricingRuleBucketId": "0",
                    "ConcessionClauseType": "FixedAmountDiscount",
                    "PricingRuleType": "ShippingDiscount",
                    "PricingRuleUsage": "Default",
                    "PricingRuleRank": "10",
                    "CountryCode": "us",
                    "LanguageCode": "en",
                    "LongDescription": "tes5",
                    "LongMarketingDescription": null,
                    "PricingRuleDescription": null,
                    "CouponRedemptionAttempted": "false",
                    "CouponUnRedemptionAttempted": "false",
                    "InternalItemIdentifiers": {
                      "guid": "b99ad84e-4fa3-420e-894c-0065993719b9"
                    },
                    "IsModified": "false"
                  }
                ]
              },
              "MarketablePriceAdjustments": null,
              "SkipDiscount": "false",
              "Discountable": "false",
              "IsFixedOrderCode": "false",
              "ProductLineId": "0",
              "SalesReps": null,
              "IsMissingCostData": "false",
              "Language": "en",
              "AppliedHedgeRate": "0",
              "CatalogId": "29",
              "IsLeadTimeValid": "false",
              "Country": "US",
              "Currency": "USD",
              "CatalogCurrency": "USD",
              "Region": "us",
              "ExtendedProperties": {
                "GenericField": {
                  "FieldKey": "ApplyDiscountForClassX",
                  "FieldValue": "True",
                  "Namespace": null,
                  "ExtendedProperties": null
                }
              },
              "Personalization": null,
              "CloneSetId": "00000000-0000-0000-0000-000000000000",
              "Attributes": null,
              "ValidationResult": {
                "IsValid": "true"
              },
              "IsTied": "false",
              "IsAposItem": "false",
              "IsEligibleForManualServiceAdjustment": "false",
              "LeadTimeDetails": {
                "BaseDate": "2014-05-10T23:36:20.3180422+05:30",
                "ShiftEnabled": "false",
                "LeadTimeUnits": {
                  "LeadTimeUnit": [
                    {
                      "UnitType": "DellwareOrOptionOnly",
                      "UnitValue": "1"
                    },
                    {
                      "UnitType": "Financial",
                      "UnitValue": "0"
                    },
                    {
                      "UnitType": "Notification",
                      "UnitValue": "0"
                    },
                    {
                      "UnitType": "Shipping",
                      "UnitValue": "5"
                    },
                    {
                      "UnitType": "ManufacturingHoliday",
                      "UnitValue": "1"
                    },
                    {
                      "UnitType": "ShippingHoliday",
                      "UnitValue": "2"
                    }
                  ]
                }
              },
              "InventoryLevel": "Normal",
              "InventoryQuantity": "0",
              "ContractCode": null,
              "BuildToStock": "false",
              "FastTrack": "false",
              "IsFastTrackEligible": "false",
              "SkipValAndSplit": "false",
              "SnpDeliveryMessageId": {
                "@xsi:nil": "true"
              },
              "Version": "15.1",
              "ServiceDiscountSameAsBase": "false",
              "Sku": "A2468469",
              "DellBundleSku": "false",
              "SparePartFlag": "false",
              "MfgPartNumber": "2160",
              "SubClassDescription": "SLR Lenses [4512160300]",
              "SubClassCode": "595",
              "UNSPCCode": "4512160300",
              "Skus": {
                "Sku": {
                  "WtyPriceAmt": "0",
                  "RollupFlg": "false",
                  "RevAgencyFlg": "false",
                  "IsServiceSku": "false",
                  "PriceAdjustments": null,
                  "TaxTypesInfo": null,
                  "RecurringBillingFlag": "false",
                  "IncludeServiceTagInfo": "true",
                  "IsFuturistic": "false",
                  "IsHardware": "false",
                  "IsMobileBroadband": "false",
                  "Description": "Nikon 105 mm f/2.8G IF-ED AF-S VR Micro Zoom Nikkor Lens",
                  "IsHandledSeperately": "false",
                  "FulfillmentLocation": "I1",
                  "Quantity": "1",
                  "ManufacturingLeadTimeDays": "1",
                  "CfiLeadTimeDays": "0",
                  "ShipClass": null,
                  "DutyClass": null,
                  "TaxClass": "0",
                  "Class": "07",
                  "OriginalPrice": "979.9900",
                  "PlacedPrice": "979.9900",
                  "UnitWeight": "0",
                  "UnitCost": "914.6700",
                  "CompensationCost": "0",
                  "FpcCost": "0",
                  "Id": "A2468469",
                  "LegalEntity": null,
                  "DiscountClass": "X",
                  "IsSystemTied": "false",
                  "IsSparePart": "false",
                  "ContractTerminationDate": "0001-01-01T00:00:00",
                  "CustomFields": {
                    "KeyValuePair": {
                      "Key": "ListPriceAdjustments",
                      "Value": "0.0000"
                    }
                  },
                  "IsFlexi": "false",
                  "IsShipping": "false",
                  "IsDelivery": "false",
                  "SystemFlag": "false",
                  "Attributes": null,
                  "Status": "B",
                  "PriceVectorId": "0",
                  "OptionPriceVectorId": {
                    "@xsi:nil": "true"
                  }
                }
              },
              "IsLicensingProduct": "false",
              "SelectionTypeId": "0",
              "PricingOverride": {
                "PricingMethod": "None",
                "Value": "0"
              }
            },
            {
              "@xsi:type": "ConfigItem",
              "Id": "95e20818-fadf-404e-87f8-af756da31899",
              "CustomerSet": "19",
              "Quantity": "5",
              "UnitQuantity": "1",
              "ExternalName": "Inspiron 15 Non-Touch",
              "Description": "New Inspiron 15,3537",
              "Categories": {
                "Category": [
                  {
                    "Name": "CONFIG",
                    "ID": "root",
                    "ParentCategoryID": "-1",
                    "Description": "CONFIG"
                  },
                  {
                    "Name": "ProductLine",
                    "ID": "p2",
                    "ParentCategoryID": "root",
                    "Description": "Laptops"
                  },
                  {
                    "Name": "Brand",
                    "ID": "b7",
                    "ParentCategoryID": "p2",
                    "Description": "Dell Inspiron"
                  },
                  {
                    "Name": "Family",
                    "ID": "f10606",
                    "ParentCategoryID": "b7",
                    "Description": "Inspiron Oak 15 HSW Value 3537"
                  },
                  {
                    "Name": "Laptops",
                    "ID": "p2",
                    "ParentCategoryID": "root",
                    "Description": "Laptops"
                  },
                  {
                    "Name": "Dell Inspiron",
                    "ID": "b7",
                    "ParentCategoryID": "p2",
                    "Description": "Dell Inspiron"
                  },
                  {
                    "Name": "Inspiron Oak 15 HSW Value 3537",
                    "ID": "f10606",
                    "ParentCategoryID": "b7",
                    "Description": "Inspiron Oak 15 HSW Value 3537"
                  }
                ]
              },
              "ValidationStatus": "Valid",
              "BuildTime": "0",
              "Weight": "20.9",
              "CatalogSystemURI": "CFG",
              "FullfilmentLocationId": "00",
              "Frictionless": "true",
              "ProductID": "fncwc2132s",
              "AllowChangeQuantity": "true",
              "AllowSave": "true",
              "AllowEmail": "true",
              "Image": "inspiron-15-3521-right-fran-120x107.jpg",
              "ShipClass": null,
              "SplitClass": "7",
              "ItemCatalogSource": "classic",
              "ValidationLocked": "false",
              "ValidationLockEndDate": "0001-01-01T00:00:00",
              "PriceMatrix": {
                "Price": {
                  "Map": {
                    "d": [
                      "0.0",
                      "0.0",
                      "0.0",
                      "130.0",
                      "11.99",
                      "120.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "69.0",
                      "31.0",
                      "18.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.00",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.0",
                      "0.20",
                      "3.23",
                      "0",
                      "27.00",
                      "74.41",
                      "69.05",
                      "0",
                      "32.65",
                      "37.25",
                      "0",
                      "1",
                      "0.01",
                      "0.01",
                      "0.01",
                      "9.99",
                      "0.9",
                      "3.83",
                      "0",
                      "39.55",
                      "2.36",
                      "4.15",
                      "0.63",
                      "0",
                      "11.85",
                      "0",
                      "20.11",
                      "2.69",
                      "0",
                      "0",
                      "0.63",
                      "0.2",
                      "0.02",
                      "0",
                      "0",
                      "0",
                      "0.08",
                      "0.30",
                      "0.07",
                      "0.23",
                      "0.01",
                      "0.20",
                      "3.23",
                      "0",
                      "27.00",
                      "74.41",
                      "69.05",
                      "0",
                      "32.65",
                      "37.25",
                      "0",
                      "1",
                      "0.01",
                      "0.01",
                      "0.01",
                      "9.99",
                      "0.9",
                      "3.83",
                      "0",
                      "39.55",
                      "2.36",
                      "4.15",
                      "0.63",
                      "0",
                      "11.85",
                      "0",
                      "20.11",
                      "2.69",
                      "0",
                      "0",
                      "0.63",
                      "0.2",
                      "0.02",
                      "0",
                      "0",
                      "0",
                      "0.08",
                      "0.30",
                      "0.07",
                      "0.23",
                      "0.01",
                      "49.00",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "-0.58",
                      "-0.05",
                      "-0.53",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "0",
                      "0",
                      "0",
                      "-100.23",
                      "-9.24",
                      "-92.53",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-5.81",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "0",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648",
                      "-2147483648"
                    ]
                  },
                  "Id": "Price",
                  "RowLength": "23",
                  "ColumnLength": "40",
                  "RowKeyIndexBinding": null,
                  "RowTypeIndexBinding": {
                    "RowType": [
                      {
                        "n": "BasePrice",
                        "t": "1",
                        "s": "0",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ListPriceAdjustment",
                        "t": "1",
                        "s": "5",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "StandardDiscount",
                        "t": "1",
                        "s": "6",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "UnitCost",
                        "t": "4",
                        "s": "21",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "DutyCost",
                        "t": "4",
                        "s": "22",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "Shipping",
                        "t": "2",
                        "s": "0",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ItemSurcharge",
                        "t": "3",
                        "s": "11",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ShippingSurcharge",
                        "t": "3",
                        "s": "12",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTax",
                        "t": "5",
                        "s": "31",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTax",
                        "t": "5",
                        "s": "32",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTax",
                        "t": "5",
                        "s": "53",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTaxBase",
                        "t": "6",
                        "s": "61",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTaxBase",
                        "t": "6",
                        "s": "62",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "SalesUseTaxBase",
                        "t": "6",
                        "s": "63",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "37401",
                        "t": "7",
                        "s": "71",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "37401",
                        "t": "5",
                        "s": "35",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "37401",
                        "t": "5",
                        "s": "36",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "30755",
                        "t": "7",
                        "s": "72",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "30755",
                        "t": "5",
                        "s": "37",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "30755",
                        "t": "5",
                        "s": "38",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "32192",
                        "t": "7",
                        "s": "75",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "32192",
                        "t": "5",
                        "s": "33",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "32192",
                        "t": "5",
                        "s": "34",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      }
                    ]
                  },
                  "ColumnKeyIndexBinding": null
                },
                "Selected": {
                  "Map": {
                    "d": [
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1",
                      "1"
                    ]
                  },
                  "Id": "Selected",
                  "RowLength": "40",
                  "ColumnLength": "1",
                  "RowKeyIndexBinding": null,
                  "RowTypeIndexBinding": null,
                  "ColumnKeyIndexBinding": null
                },
                "RoundingAdjustments": {
                  "PriceMap": {
                    "Map": {
                      "d": [
                        "-0.02",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0"
                      ]
                    },
                    "Id": "ItemRoundingAdjustment",
                    "RowLength": "14",
                    "ColumnLength": "1",
                    "RowKeyIndexBinding": null,
                    "RowTypeIndexBinding": {
                      "RowType": [
                        {
                          "n": "37401",
                          "t": "7",
                          "s": "71",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "Shipping",
                          "t": "2",
                          "s": "0",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "31",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "32",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "53",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "61",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "62",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "63",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "5",
                          "s": "35",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "5",
                          "s": "36",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "30755",
                          "t": "5",
                          "s": "37",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "30755",
                          "t": "5",
                          "s": "38",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "5",
                          "s": "33",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "5",
                          "s": "34",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        }
                      ]
                    },
                    "ColumnKeyIndexBinding": {
                      "string": "95e20818-fadf-404e-87f8-af756da31899"
                    }
                  }
                },
                "Results": {
                  "PriceMap": {
                    "Map": {
                      "d": [
                        "379.99",
                        "0",
                        "0.00",
                        "342.42",
                        "342.42",
                        "49.00",
                        "0",
                        "0",
                        "-2147483648",
                        "-2147483648",
                        "-2147483648",
                        "0",
                        "0",
                        "0",
                        "-1.16",
                        "-2147483648",
                        "-2147483648",
                        "-202.00",
                        "-2147483648",
                        "-2147483648",
                        "-5.81",
                        "-2147483648",
                        "-2147483648"
                      ]
                    },
                    "Id": "Item Totals",
                    "RowLength": "23",
                    "ColumnLength": "1",
                    "RowKeyIndexBinding": null,
                    "RowTypeIndexBinding": {
                      "RowType": [
                        {
                          "n": "BasePrice",
                          "t": "1",
                          "s": "0",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "ListPriceAdjustment",
                          "t": "1",
                          "s": "5",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "StandardDiscount",
                          "t": "1",
                          "s": "6",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "UnitCost",
                          "t": "4",
                          "s": "21",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "DutyCost",
                          "t": "4",
                          "s": "22",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "Shipping",
                          "t": "2",
                          "s": "0",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "ItemSurcharge",
                          "t": "3",
                          "s": "11",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "ShippingSurcharge",
                          "t": "3",
                          "s": "12",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "31",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "32",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "53",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "61",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "62",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "63",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "7",
                          "s": "71",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "5",
                          "s": "35",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "5",
                          "s": "36",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "30755",
                          "t": "7",
                          "s": "72",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "30755",
                          "t": "5",
                          "s": "37",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "30755",
                          "t": "5",
                          "s": "38",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "7",
                          "s": "75",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "5",
                          "s": "33",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "5",
                          "s": "34",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        }
                      ]
                    },
                    "ColumnKeyIndexBinding": null
                  }
                },
                "Version": "2"
              },
              "ShippingPriceMatrix": {
                "Price": {
                  "Map": {
                    "d": [
                      "79.00",
                      "59.00",
                      "49.00",
                      "49.00",
                      "165.0000",
                      "165.0000",
                      "245.00",
                      "5.81",
                      "0",
                      "0",
                      "0",
                      "0"
                    ]
                  },
                  "Id": "Price",
                  "RowLength": "3",
                  "ColumnLength": "4",
                  "RowKeyIndexBinding": null,
                  "RowTypeIndexBinding": {
                    "RowType": [
                      {
                        "n": "Shipping",
                        "t": "2",
                        "s": "0",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ShippingDiscount",
                        "t": "2",
                        "s": "75",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      },
                      {
                        "n": "ShippingTax",
                        "t": "2",
                        "s": "32",
                        "b": {
                          "@xsi:nil": "true"
                        }
                      }
                    ]
                  },
                  "ColumnKeyIndexBinding": null
                },
                "ColumnIndexBinding": {
                  "ColumnIndex": [
                    {
                      "OptionId": "ND",
                      "Index": "0"
                    },
                    {
                      "OptionId": "2D",
                      "Index": "1"
                    },
                    {
                      "OptionId": "3D",
                      "Index": "2"
                    },
                    {
                      "OptionId": "LD",
                      "Index": "3"
                    }
                  ]
                }
              },
              "CreateDate": "0001-01-01T00:00:00",
              "Selected": "true",
              "ParentItemID": "00000000-0000-0000-0000-000000000000",
              "Manufacturer": "Dell",
              "ShippingCost": "0",
              "AssociatedItems": null,
              "PriceAdjustments": {
                "PriceAdjustment": [
                  {
                    "@xsi:type": "Promotion",
                    "UniqueId": "00000000-0000-0000-0000-000000000000",
                    "Selected": "true",
                    "IsPermanent": "false",
                    "Id": "30755",
                    "AdjustmentType": "ItemLevelDNC",
                    "AppliedOrder": "0",
                    "TotalImpact": "0",
                    "OfferType": "DollarsOff",
                    "OfferValue": "202.0000",
                    "IsTaxInclusive": "false",
                    "Behavior": "Optional",
                    "AdjustmentImpact": "202.00000",
                    "TotalAdjustment": "1010.0000",
                    "ExtendedProperties": null,
                    "ShortDescription": "Dell Inspiron-Lokesh",
                    "ShortMarketingDescription": null,
                    "DiscountApplyOrder": "During",
                    "CouponFlag": "Discount",
                    "CouponStatus": "NotCoupon",
                    "CouponType": "NotCoupon",
                    "DateStart": "2014-01-23T18:30:00",
                    "DateEnd": "2015-01-24T18:29:59",
                    "PromotionType": "ItemLevel",
                    "CanApplyCrossSegment": "false",
                    "TimesApplied": "0",
                    "PromotionTeaserDescription": null,
                    "DisplayShortDescription": "true",
                    "OfferAmount": "0",
                    "TimesToApply": "5",
                    "ExpiryDescription": null,
                    "CampaignType": "Undefined",
                    "LegalDescription": null,
                    "AwardLimit": "0",
                    "CampaignId": "0",
                    "ClickURL": null,
                    "ImageURL": null,
                    "ShowOriginalPrice": "false",
                    "ApplicationsWhereRuleCanApply": {
                      "int": [
                        "1",
                        "2",
                        "3",
                        "6"
                      ]
                    },
                    "ConcessionValue": "202.0000",
                    "LastModifiedDate": "2014-05-07T13:35:18.47",
                    "MaximumTimesRuleCanApply": "0",
                    "PricingRuleBucketId": "0",
                    "ConcessionClauseType": "FixedAmountDiscount",
                    "PricingRuleType": "ItemDiscount",
                    "PricingRuleUsage": "Optional",
                    "PricingRuleRank": "40",
                    "CountryCode": "us",
                    "LanguageCode": "en",
                    "LongDescription": "Dell Inspiron-Lokesh",
                    "LongMarketingDescription": null,
                    "PricingRuleDescription": null,
                    "CouponRedemptionAttempted": "false",
                    "CouponUnRedemptionAttempted": "false",
                    "InternalItemIdentifiers": {
                      "guid": "95e20818-fadf-404e-87f8-af756da31899"
                    },
                    "IsModified": "false"
                  },
                  {
                    "@xsi:type": "Promotion",
                    "UniqueId": "00000000-0000-0000-0000-000000000000",
                    "Selected": "true",
                    "IsPermanent": "false",
                    "Id": "32192",
                    "AdjustmentType": "ShippingDNC",
                    "AppliedOrder": "0",
                    "TotalImpact": "0",
                    "OfferType": "DollarsOff",
                    "OfferValue": "5.0000",
                    "IsTaxInclusive": "false",
                    "Behavior": "Default",
                    "AdjustmentImpact": "5.8102766798418972332015810274",
                    "TotalAdjustment": "29.051383399209486166007905137",
                    "ExtendedProperties": null,
                    "ShortDescription": "tedst",
                    "ShortMarketingDescription": null,
                    "DiscountApplyOrder": "During",
                    "CouponFlag": "Discount",
                    "CouponStatus": "NotCoupon",
                    "CouponType": "NotCoupon",
                    "DateStart": "2014-04-22T05:00:00",
                    "DateEnd": "2014-07-31T04:59:59",
                    "PromotionType": "ShippingDiscount",
                    "CanApplyCrossSegment": "false",
                    "TimesApplied": "0",
                    "PromotionTeaserDescription": null,
                    "DisplayShortDescription": "true",
                    "OfferAmount": "0",
                    "TimesToApply": "5",
                    "ExpiryDescription": null,
                    "CampaignType": "Undefined",
                    "LegalDescription": null,
                    "AwardLimit": "0",
                    "CampaignId": "0",
                    "ClickURL": null,
                    "ImageURL": null,
                    "ShowOriginalPrice": "false",
                    "ApplicationsWhereRuleCanApply": {
                      "int": [
                        "1",
                        "2",
                        "3",
                        "6"
                      ]
                    },
                    "ConcessionValue": "5.0000",
                    "LastModifiedDate": "2014-04-23T14:44:28.81",
                    "MaximumTimesRuleCanApply": "0",
                    "PricingRuleBucketId": "0",
                    "ConcessionClauseType": "FixedAmountDiscount",
                    "PricingRuleType": "ShippingDiscount",
                    "PricingRuleUsage": "Default",
                    "PricingRuleRank": "10",
                    "CountryCode": "us",
                    "LanguageCode": "en",
                    "LongDescription": "tes5",
                    "LongMarketingDescription": null,
                    "PricingRuleDescription": null,
                    "CouponRedemptionAttempted": "false",
                    "CouponUnRedemptionAttempted": "false",
                    "InternalItemIdentifiers": {
                      "guid": "95e20818-fadf-404e-87f8-af756da31899"
                    },
                    "IsModified": "false"
                  }
                ]
              },
              "MarketablePriceAdjustments": null,
              "SkipDiscount": "false",
              "Discountable": "false",
              "DisplayCurrencyCode": "USD",
              "IsFixedOrderCode": "false",
              "ProductLineId": "2",
              "SalesReps": null,
              "IsMissingCostData": "false",
              "Language": "en",
              "AppliedHedgeRate": "0",
              "CatalogId": "29",
              "IsLeadTimeValid": "false",
              "Country": "us",
              "Currency": "USD",
              "CatalogCurrency": "USD",
              "Region": "us",
              "ExtendedProperties": {
                "GenericField": [
                  {
                    "FieldKey": "config_image_source_code",
                    "FieldValue": "2",
                    "ExtendedProperties": null
                  },
                  {
                    "FieldKey": "IsFastTrackEligible",
                    "FieldValue": "True",
                    "ExtendedProperties": null
                  }
                ]
              },
              "Personalization": null,
              "CloneSetId": "00000000-0000-0000-0000-000000000000",
              "Attributes": {
                "ConfigAttribute": [
                  {
                    "Id": "CASE_WIDTH_INCH",
                    "FloatValue": "14.8",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "AD_WEIGHT_KG",
                    "FloatValue": "0",
                    "StringValue": "2.35",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_ICON3",
                    "FloatValue": "0",
                    "StringValue": "MEMRY:MEMRY_SIZE_GB|MEMRY_CATRY",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "HAS_PICTAFLEX",
                    "FloatValue": "0",
                    "StringValue": "N",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_MODULE_UPSELLS",
                    "FloatValue": "0",
                    "StringValue": "29|33|1002|1014|6905",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "AD_WEIGHT_LB",
                    "FloatValue": "0",
                    "StringValue": "5.18",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "DIRECTMEDIA_FLG",
                    "FloatValue": "0",
                    "StringValue": "N",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_MODULE_SNP_ESSENTIALS",
                    "FloatValue": "0",
                    "StringValue": "7004",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "VID_CNNCTR_TYP",
                    "FloatValue": "0",
                    "StringValue": "HDMI",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "CASE_DEPTH_CM",
                    "FloatValue": "25.9",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "CASE_MAX_HEIGHT_INCH",
                    "FloatValue": "1",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_LANG_FLVR",
                    "FloatValue": "0",
                    "StringValue": "EN",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_ICON1",
                    "FloatValue": "0",
                    "StringValue": "PROC:PROC_BRAND",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "RJ45_ETHRNT_PORT_CNT",
                    "FloatValue": "1",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_ICON4",
                    "FloatValue": "0",
                    "StringValue": "HDRV:HD_CAPACITY_GB|HD_CATRY",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "INTG_WEBCAM_FLG",
                    "FloatValue": "0",
                    "StringValue": "S10",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "USB30_CNNCTR_CNT",
                    "FloatValue": "2",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "CASE_MAX_HEIGHT_CM",
                    "FloatValue": "2.53",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "CASE_DEPTH_INCH",
                    "FloatValue": "10.2",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "MEDIACARD_SLOT_TYPE",
                    "FloatValue": "0",
                    "StringValue": "8N1",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_MODULE_SNP_UPSELLS",
                    "FloatValue": "0",
                    "StringValue": "6208:false|6545:false|6815:false|5400:false|5827:false|6490:false",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_ICON2",
                    "FloatValue": "0",
                    "StringValue": "OS:OS_BRAND|OS_VERSN",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "USB20_CNNCTR_CNT",
                    "FloatValue": "2",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "FORM_FACTOR",
                    "FloatValue": "0",
                    "StringValue": "DSKTP",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "AUDIO_IN_CNNCTR_CNT",
                    "FloatValue": "1",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_FASTTRACK",
                    "FloatValue": "0",
                    "StringValue": "Y",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "CHIPSET",
                    "FloatValue": "0",
                    "StringValue": "HM76",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "SECURTY_FEATURE",
                    "FloatValue": "0",
                    "StringValue": "LOCK",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "OC_MODULE_UPSELLS_HUB",
                    "FloatValue": "0",
                    "StringValue": "29|33|1002|1014|6905",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "OrderCodeCatalog",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "CASE_WIDTH_CM",
                    "FloatValue": "37.6",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "CASE_MIN_HEIGHT_INCH",
                    "FloatValue": "0.98",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "INTG_MICRPHNE_CNT",
                    "FloatValue": "1",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "AUDIO_OUT_CNNCTR_CNT",
                    "FloatValue": "1",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "PWR_SUPPLY_TYP",
                    "FloatValue": "0",
                    "StringValue": "AC",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "String",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  },
                  {
                    "Id": "CASE_MIN_HEIGHT_CM",
                    "FloatValue": "2.49",
                    "IsStringValue": "false",
                    "Consumable": "false",
                    "Type": "Float",
                    "InciteAtrributeType": "CoreProduct",
                    "IsMultiValued": "false"
                  }
                ]
              },
              "ValidationResult": {
                "IsValid": "true",
                "Messages": null
              },
              "IsTied": "false",
              "IsAposItem": "false",
              "IsEligibleForManualServiceAdjustment": "false",
              "LeadTimeDetails": {
                "BaseDate": "2014-05-10T23:36:21.0870422+05:30",
                "ShiftEnabled": "false",
                "LeadTimeUnits": {
                  "LeadTimeUnit": [
                    {
                      "UnitType": "ItemClass",
                      "UnitValue": "16"
                    },
                    {
                      "UnitType": "Financial",
                      "UnitValue": "0"
                    },
                    {
                      "UnitType": "Notification",
                      "UnitValue": "0"
                    },
                    {
                      "UnitType": "Shipping",
                      "UnitValue": "5"
                    },
                    {
                      "UnitType": "ManufacturingHoliday",
                      "UnitValue": "7"
                    },
                    {
                      "UnitType": "ShippingHoliday",
                      "UnitValue": "2"
                    }
                  ]
                }
              },
              "InventoryLevel": "Normal",
              "InventoryStatus": "InStock",
              "InventoryQuantity": "10474",
              "TaaComplianceStatus": {
                "TaaCompliant": {
                  "@xsi:nil": "true"
                },
                "GsaCompliant": {
                  "@xsi:nil": "true"
                },
                "ReplacementPart": {
                  "@xsi:nil": "true"
                }
              },
              "BuildToStock": "true",
              "FastTrack": "true",
              "IsFastTrackEligible": "true",
              "SkipValAndSplit": "false",
              "FixedGoodsId": "730-7846",
              "SnpDeliveryMessageId": {
                "@xsi:nil": "true"
              },
              "Version": "15.1",
              "ServiceDiscountSameAsBase": "false",
              "ConfigDetails": {
                "Id": "fncwc2132s",
                "UniqueId": "2b5123de-8456-4f39-90c2-08e8dae2b411",
                "CfiComments": null,
                "SINumber": null,
                "ParentModuleID": "0",
                "ChassisId": "1505",
                "CatalogId": "29",
                "CompanyNumber": "29",
                "BrandId": "7",
                "FamilyId": "10606",
                "MaxPage": "5172",
                "Modules": {
                  "Module": [
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "W81PMT",
                      "Description": "Additional Documentation",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m60/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Windows 8.1 Documentation",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Windows 8.1 Documentation",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "MN000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0.2046",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "343-BBCF",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "0",
                              "OptionPriceVectorId": "0"
                            }
                          },
                          "Id": "W81PMT",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "SOFTWARE_TYPE",
                              "FloatValue": "0",
                              "StringValue": "Windows_8.1",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "60",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "0",
                          "Required": "false"
                        }
                      },
                      "Id": "60",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "1",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "523224",
                      "Description": "Transportation from ODM to region",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m200080/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "BTS shipment",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "BTS/BTP shipment",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "1",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "AC000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "3.225",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "800-BBEY",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "Z",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "1",
                              "OptionPriceVectorId": "1"
                            }
                          },
                          "Id": "523224",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "FGA_PROXY",
                                "FloatValue": "0",
                                "StringValue": "BTS",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "RESOURCE_TYPE",
                                "FloatValue": "0",
                                "StringValue": "BTS",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "200080",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "1",
                          "Required": "false"
                        }
                      },
                      "Id": "200080",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "2",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "NODBRM",
                      "Description": "Operating System Recovery Options",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m200013/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Operating System Recovery Media Not Included",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "No Dedicated GPS",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "ZA000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "340-ACQQ",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "2",
                              "OptionPriceVectorId": "2"
                            }
                          },
                          "Id": "NODBRM",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "SOFTWARE_TYPE",
                                "FloatValue": "0",
                                "StringValue": "Windows_7",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_FAMILY",
                                "FloatValue": "0",
                                "StringValue": "*",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "200013",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "2",
                          "Required": "false"
                        }
                      },
                      "Id": "200013",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "false",
                      "Sequence": "3",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "OK3537",
                      "Description": "New Inspiron 15,3537",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m1/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "New Inspiron 15, 3537",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "16",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Inspiron 15 (3537) BTX Base",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "2",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "16",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": "NTBK",
                              "DutyClass": "NTBK",
                              "TaxClass": "S",
                              "Class": "G#002",
                              "OriginalPrice": "130.0",
                              "PlacedPrice": "130.0",
                              "UnitWeight": "20",
                              "UnitCost": "26.9978",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "210-AAVJ",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "S",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "true",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "3",
                              "OptionPriceVectorId": "3"
                            }
                          },
                          "Id": "OK3537",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "BASE_TYPE",
                              "FloatValue": "0",
                              "StringValue": "SMART_SELECTION",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "1",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "3",
                          "Required": "false"
                        }
                      },
                      "Id": "1",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "4",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "BASE"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "CRT7CD",
                      "Description": "Processor",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m146/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "4th Generation Intel® Celeron® processor 2955U (2M Cache, 1.40GHz)",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "4th Generation Intel Celeron Processor 2955U (2M Cache, 1.4 GHz), C1",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "PP000",
                              "OriginalPrice": "11.990",
                              "PlacedPrice": "11.990",
                              "UnitWeight": "0",
                              "UnitCost": "74.4112",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "338-BDPU",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.000"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "4",
                              "OptionPriceVectorId": "4"
                            }
                          },
                          "Id": "CRT7CD",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "PROC_FSB_SPEED_MHZ",
                                "FloatValue": "-1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "PROC_MODEL",
                                "FloatValue": "0",
                                "StringValue": "2955U",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "PROC_BRAND",
                                "FloatValue": "0",
                                "StringValue": "CEL_2",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "PROC_SPEED_GHZ",
                                "FloatValue": "0",
                                "StringValue": "1.40",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "PROC_PROD_CODE",
                                "FloatValue": "0",
                                "StringValue": "INTCEL2C_2955U",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "PROC_CORE_COUNT",
                                "FloatValue": "2",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "PROC_MANUFCT",
                                "FloatValue": "0",
                                "StringValue": "INT",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "AC_ADAPTER",
                                "FloatValue": "0",
                                "StringValue": "E4",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "PROC_CACHE_SIZE_MB",
                                "FloatValue": "2",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "LCD_DISPLAY_TYPE",
                                "FloatValue": "0",
                                "StringValue": "HIGHCOST_TOUCH",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "146",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "4",
                          "Required": "false"
                        }
                      },
                      "Id": "146",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "5",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "PROC"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "81N6E",
                      "Description": "Operating System",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m11/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Windows 8.1 (64Bit) English",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Windows 8.1 64-bit English",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "4",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "SE000",
                              "OriginalPrice": "120.0",
                              "PlacedPrice": "120.0",
                              "UnitWeight": "0",
                              "UnitCost": "69.0456",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "619-ADTB",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "5",
                              "OptionPriceVectorId": "5"
                            }
                          },
                          "Id": "81N6E",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "SOFTWARE_TYPE",
                                "FloatValue": "0",
                                "StringValue": "Windows_8.1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_BIT_COUNT",
                                "FloatValue": "64",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_DWNGRD_VERSN",
                                "FloatValue": "0",
                                "StringValue": "*",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_DWNGRD_BRAND",
                                "FloatValue": "0",
                                "StringValue": "*",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_VERSN",
                                "FloatValue": "0",
                                "StringValue": "W8_1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_PRODUCT_RED",
                                "FloatValue": "0",
                                "StringValue": "N",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_BRAND",
                                "FloatValue": "0",
                                "StringValue": "W8_1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_MANUFCT",
                                "FloatValue": "0",
                                "StringValue": "MS",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_FAMILY",
                                "FloatValue": "0",
                                "StringValue": "WIN_8.1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_DWNGRD",
                                "FloatValue": "0",
                                "StringValue": "N",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "11",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "5",
                          "Required": "false"
                        }
                      },
                      "Id": "11",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "6",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "OS"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "OHT13M",
                      "Description": "Office Productivity Software",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m1002/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Microsoft® Office Trial",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "7",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Software: Microsoft Office 2013 Trial, MUI",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": "NONE",
                              "DutyClass": "NONE",
                              "TaxClass": "S",
                              "Class": "SE000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "630-AAAV",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "6",
                              "OptionPriceVectorId": "6"
                            }
                          },
                          "Id": "OHT13M",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "LINUX_MOD_ALLOWED",
                              "FloatValue": "0",
                              "StringValue": "NO",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "1002",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "6",
                          "Required": "false"
                        }
                      },
                      "Id": "1002",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "true",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "7",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "PRODSW"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "4G1D3L",
                      "Description": "Memory",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m3/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "4GB Single Channel DDR3 1600MHz (4GBx1)",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "7",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "4GB Single Channel DDR3L 1600MHz (4GBx1)",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "IC000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "32.65",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "370-AACZ",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "7",
                              "OptionPriceVectorId": "7"
                            }
                          },
                          "Id": "4G1D3L",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "MEMRY_CATRY",
                                "FloatValue": "0",
                                "StringValue": "LAPTP",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "MEMRY_CHNNL",
                                "FloatValue": "0",
                                "StringValue": "S",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "MEMRY_SIZE_GB",
                                "FloatValue": "0",
                                "StringValue": "4",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "MEMRY_DIMM_COUNT",
                                "FloatValue": "0",
                                "StringValue": "1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "MEMRY_SPEED_MHZ",
                                "FloatValue": "0",
                                "StringValue": "1600",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "MEMRY_TYPE",
                                "FloatValue": "0",
                                "StringValue": "DDR3",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "3",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "7",
                          "Required": "false"
                        }
                      },
                      "Id": "3",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "9",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "MEMRY"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "320G54",
                      "Description": "Hard Drive",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m8/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "320GB 5400RPM SATA Hard Drive",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "2",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "320GB 5400RPM SATA Hard Drive",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "HD000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "37.25",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "400-AAOJ",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "8",
                              "OptionPriceVectorId": "8"
                            }
                          },
                          "Id": "320G54",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "HD_CAPACITY_GB",
                                "FloatValue": "0",
                                "StringValue": "320",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "HD_TYP",
                                "FloatValue": "0",
                                "StringValue": "SATA",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "HD_SPEED_RPM",
                                "FloatValue": "5400",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "HD_DRIVE_COUNT",
                                "FloatValue": "1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "HD_CATRY",
                                "FloatValue": "0",
                                "StringValue": "LAPTP",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "8",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "8",
                          "Required": "false"
                        }
                      },
                      "Id": "8",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "10",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "HDRV"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "UMA",
                      "Description": "Video Card",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m6/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Intel® HD Graphics 4400",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Intel(R) HD Graphics 4400",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "VB000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "490-BBJM",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "9",
                              "OptionPriceVectorId": "9"
                            }
                          },
                          "Id": "UMA",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "VID_BRAND",
                                "FloatValue": "0",
                                "StringValue": "HD",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "VID_PROD_CODE",
                                "FloatValue": "0",
                                "StringValue": "INTHD_4400",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "VID_INTGRTN",
                                "FloatValue": "0",
                                "StringValue": "Y",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "VID_MODEL",
                                "FloatValue": "0",
                                "StringValue": "4400",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "VID_CONFGTN",
                                "FloatValue": "0",
                                "StringValue": "S",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "VID_MANUFCT",
                                "FloatValue": "0",
                                "StringValue": "INTEL",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "6",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "9",
                          "Required": "false"
                        }
                      },
                      "Id": "6",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "false",
                      "Sequence": "11",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "VIDEO"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "NOODD",
                      "Description": "CD ROM/DVD ROM",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m16/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Optical drive not included (supports external USB optical drives sold separately)",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "2",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Optical drive not included (supports external USB optical drives sold separately)",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "DC000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "1",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "429-AALN",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "10",
                              "OptionPriceVectorId": "10"
                            }
                          },
                          "Id": "NOODD",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "OPTICAL_TYPE",
                              "FloatValue": "0",
                              "StringValue": "NONE",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "16",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "10",
                          "Required": "false"
                        }
                      },
                      "Id": "16",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "12",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "OPTDRV"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "Q1O90P",
                      "Description": "Support for Your PC",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m29/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "90 Days Premium Phone Support + 1 Year In-Home Service after Remote Diagnosis",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "2",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": [
                              {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "true",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "true",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "1 Year Limited Warranty",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "K",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": "NONE",
                                "DutyClass": "NONE",
                                "TaxClass": "97000",
                                "Class": "SJ000",
                                "OriginalPrice": "0.0",
                                "PlacedPrice": "0.0",
                                "UnitWeight": "0",
                                "UnitCost": "0.01",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "950-3337",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z1",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "ContractTypeCode": "AZ",
                                "ContractLaborCode": "L",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "11",
                                "OptionPriceVectorId": "11"
                              },
                              {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "true",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "true",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "No Warranty, Year 2 and 3",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "8",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": "NONE",
                                "DutyClass": "NONE",
                                "TaxClass": "97000",
                                "Class": "SJ000",
                                "OriginalPrice": "0.0",
                                "PlacedPrice": "0.0",
                                "UnitWeight": "0",
                                "UnitCost": "0.01",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "950-9797",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z1",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "ContractTypeCode": "AY",
                                "ContractLaborCode": "L",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "12",
                                "OptionPriceVectorId": "11"
                              },
                              {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "true",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "true",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "Warranty Support, Initial Year",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "8",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": "NONE",
                                "DutyClass": "NONE",
                                "TaxClass": "97700",
                                "Class": "SD000",
                                "OriginalPrice": "0.0",
                                "PlacedPrice": "0.0",
                                "UnitWeight": "0",
                                "UnitCost": "0.01",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "960-2780",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z1",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "ContractTypeCode": "9I",
                                "ContractLaborCode": "P",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "13",
                                "OptionPriceVectorId": "11"
                              },
                              {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "true",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "true",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "Dell Hardware Limited Warranty, Initial Year",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "8",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": null,
                                "DutyClass": null,
                                "TaxClass": "97620",
                                "Class": "SJ000",
                                "OriginalPrice": "69.0",
                                "PlacedPrice": "69.0",
                                "UnitWeight": "0",
                                "UnitCost": "9.99",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "990-8543",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z1",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "ContractTypeCode": "9I",
                                "ContractLaborCode": "S",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "14",
                                "OptionPriceVectorId": "11"
                              },
                              {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "false",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "true",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "Dell Limited Hardware Warranty Plus In-Home Service After Remote Diagnosis, Initial Year",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "8",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": null,
                                "DutyClass": null,
                                "TaxClass": "97522",
                                "Class": "Z0000",
                                "OriginalPrice": "31.0",
                                "PlacedPrice": "31.0",
                                "UnitWeight": "0",
                                "UnitCost": "0.9",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "990-8623",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z1",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "ContractTypeCode": "9I",
                                "ContractLaborCode": "C",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "15",
                                "OptionPriceVectorId": "11"
                              },
                              {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "false",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "true",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "Premium Phone Support, 90 days",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "I",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": null,
                                "DutyClass": null,
                                "TaxClass": "97700",
                                "Class": "SD000",
                                "OriginalPrice": "18.0",
                                "PlacedPrice": "18.0",
                                "UnitWeight": "0",
                                "UnitCost": "3.83",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "990-9223",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z1",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "ContractTypeCode": "9I",
                                "ContractLaborCode": "P",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "16",
                                "OptionPriceVectorId": "11"
                              }
                            ]
                          },
                          "Id": "Q1O90P",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "SERVICE",
                                "FloatValue": "1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "SHIP_TO_STATE",
                                "FloatValue": "0",
                                "StringValue": "ME",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "WRNTY_DURTN_YR",
                                "FloatValue": "1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "29",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "11",
                          "Required": "false"
                        }
                      },
                      "Id": "29",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "true",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "true",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "13",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "WRNTY"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "MCTP30D",
                      "Description": "Security Software",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m1014/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "McAfee LiveSafe 30 Day Trial",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "McAfee Live Safe 30 Day Trial",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "SE000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "461-AAAP",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "17",
                              "OptionPriceVectorId": "12"
                            }
                          },
                          "Id": "MCTP30D",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "OS_FAMILY",
                                "FloatValue": "0",
                                "StringValue": "WIN_8",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "SECSW_SUBDURTN_MO",
                                "FloatValue": "1",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "SECSW_MANUFCT",
                                "FloatValue": "0",
                                "StringValue": "MCAF",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "SECSW_BRAND",
                                "FloatValue": "0",
                                "StringValue": "LS",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "1014",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "12",
                          "Required": "false"
                        }
                      },
                      "Id": "1014",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "true",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "15",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "SECSW"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "LGDLCD",
                      "Description": "LCD",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m760/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "15.6 inch LED Backlit Display with Truelife and HD resolution (1366 x 768)",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "15.6 inch LED Backlit Display with Truelife and HD resolution (1366 x 768)",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": "NTBK",
                              "DutyClass": "NTBK",
                              "TaxClass": "S",
                              "Class": "MO100",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "39.55",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "391-BBEB",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "VIS",
                                    "Value": "39.624"
                                  },
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "18",
                              "OptionPriceVectorId": "13"
                            }
                          },
                          "Id": "LGDLCD",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "DISPLY_TYPE",
                                "FloatValue": "0",
                                "StringValue": "*",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "DISPLY_FINISH",
                                "FloatValue": "0",
                                "StringValue": "G",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "LCD_TYPE",
                                "FloatValue": "0",
                                "StringValue": "NON-TOUCH",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "DISPLY_ASPECT_RATIO",
                                "FloatValue": "0",
                                "StringValue": "16:9",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "DISPLY_RESOLTN",
                                "FloatValue": "0",
                                "StringValue": "1366x768",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "DISPLY_VIEWSIZE_CM",
                                "FloatValue": "40",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "DISPLY_ASPECT_TYPE",
                                "FloatValue": "0",
                                "StringValue": "*",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "DISPLY_VIEWSIZE_IN",
                                "FloatValue": "0",
                                "StringValue": "15.6",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "LCD_DISPLAY_TYPE",
                                "FloatValue": "0",
                                "StringValue": "*",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "760",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "13",
                          "Required": "false"
                        }
                      },
                      "Id": "760",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "19",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "DISPLY"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "DW1705",
                      "Description": "Wireless",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m19/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Dell Wireless-N + Bluetooth 4.0",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "7",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Dell Wireless-N 1705 @ 2.4GHz + Bluetooth 4.0",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": "NONE",
                              "DutyClass": "NONE",
                              "TaxClass": "S",
                              "Class": "SP000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "2.3648",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "555-BBCB",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "19",
                              "OptionPriceVectorId": "14"
                            }
                          },
                          "Id": "DW1705",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": null,
                          "CompositeItems": null,
                          "ParentModuleId": "19",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "14",
                          "Required": "false"
                        }
                      },
                      "Id": "19",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "21",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "WIRLSS"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "ENGKBD",
                      "Description": "Keyboard",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m4/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Dell Chiclet Keyboard with Multi-touch Touchpad, US English",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "0",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Dell Chiclet Keyboard with Multi-touch Touchpad, US English",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": null,
                              "Class": "KB000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "4.1525",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "331-9122",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "20",
                              "OptionPriceVectorId": "15"
                            }
                          },
                          "Id": "ENGKBD",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": null,
                          "CompositeItems": null,
                          "ParentModuleId": "4",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "15",
                          "Required": "false"
                        }
                      },
                      "Id": "4",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "22",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "KYBD"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "PWREN4",
                      "Description": "Cable",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m20/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Power Cord, 125V,1M,US",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "7",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Power Cord, 125V, 1M, US",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "CA000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0.9",
                              "UnitCost": "0.63",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "470-AACI",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "21",
                              "OptionPriceVectorId": "16"
                            }
                          },
                          "Id": "PWREN4",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "AC_ADAPTER",
                              "FloatValue": "0",
                              "StringValue": "E4",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "20",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "16",
                          "Required": "false"
                        }
                      },
                      "Id": "20",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "23",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "1705DR",
                      "Description": "Driver",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m7/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Software for Dell Wireless-N + Bluetooth 4.0",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Software for Dell Wireless-N + Bluetooth 4.0",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "SE000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "555-BBIT",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "22",
                              "OptionPriceVectorId": "17"
                            }
                          },
                          "Id": "1705DR",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": null,
                          "CompositeItems": null,
                          "ParentModuleId": "7",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "17",
                          "Required": "false"
                        }
                      },
                      "Id": "7",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "24",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "4BAT",
                      "Description": "Primary Battery",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m112/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "40 WHr, 4-Cell Battery",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "4-Cell (40WHr) Battery",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "BA000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "11.85",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "451-BBBF",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "23",
                              "OptionPriceVectorId": "18"
                            }
                          },
                          "Id": "4BAT",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "BTTRY_POWER_WHR",
                                "FloatValue": "40",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "BTTRY_CELL_CNT",
                                "FloatValue": "4",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "Float",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "BTTRY_TYPE",
                                "FloatValue": "0",
                                "StringValue": "LI",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "112",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "18",
                          "Required": "false"
                        }
                      },
                      "Id": "112",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "25",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "BTTRY"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "USNONE",
                      "Description": "Order Information",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m111/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Non-Canada Orders",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "0",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Non-Canada Orders only",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "1",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": "NONE",
                              "DutyClass": "NONE",
                              "TaxClass": null,
                              "Class": "OA000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "332-1286",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "Z",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "24",
                              "OptionPriceVectorId": "19"
                            }
                          },
                          "Id": "USNONE",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": null,
                          "CompositeItems": null,
                          "ParentModuleId": "111",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "19",
                          "Required": "false"
                        }
                      },
                      "Id": "111",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "26",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "BLACK",
                      "Description": "Color Choice",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m380/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Black Matte",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Black",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "CS000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "20.11",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "320-BBDF",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "25",
                              "OptionPriceVectorId": "20"
                            }
                          },
                          "Id": "BLACK",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "CASE_TRIM_COLOR",
                                "FloatValue": "0",
                                "StringValue": "*",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "CASE_COLOR",
                                "FloatValue": "0",
                                "StringValue": "BLACK",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "CoreProduct",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "LCD_TYPE",
                                "FloatValue": "0",
                                "StringValue": "NON-TOUCH",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "380",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "20",
                          "Required": "false"
                        }
                      },
                      "Id": "380",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "27",
                      "ModuleType": "Standard",
                      "ComponentTypeCodes": {
                        "string": "CASE"
                      },
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "SHPSTD",
                      "Description": "Packaging",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m465/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Shipping Material",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Packaging : Brown Box",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": "NONE",
                              "DutyClass": "NONE",
                              "TaxClass": "S",
                              "Class": "MN000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "2.693",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "328-BBDZ",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "26",
                              "OptionPriceVectorId": "21"
                            }
                          },
                          "Id": "SHPSTD",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "LCD_TYPE",
                              "FloatValue": "0",
                              "StringValue": "NON-TOUCH",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "465",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "21",
                          "Required": "false"
                        }
                      },
                      "Id": "465",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "28",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "NONE",
                      "Description": "Optical Software",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m597/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "No Optical Drive Software",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "None Required",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "AC000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "817-BBBP",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "27",
                              "OptionPriceVectorId": "22"
                            }
                          },
                          "Id": "NONE",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "OPTICAL_TYPE",
                                "FloatValue": "0",
                                "StringValue": "*",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_FAMILY",
                                "FloatValue": "0",
                                "StringValue": "WIN_8",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "597",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "22",
                          "Required": "false"
                        }
                      },
                      "Id": "597",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "29",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "CFINO",
                      "Description": "CFI Included (Smart Selection)",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m706/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "CFI Not Included",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "0",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "CFI Not Included",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "1",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": null,
                              "Class": "ZA000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "469-2486",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "Z",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "28",
                              "OptionPriceVectorId": "23"
                            }
                          },
                          "Id": "CFINO",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": null,
                          "CompositeItems": null,
                          "ParentModuleId": "706",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "23",
                          "Required": "false"
                        }
                      },
                      "Id": "706",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "30",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "C18CINE",
                      "Description": "Non-Microsoft Application Software",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m1003/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Additional Software",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Additional Software",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "SE000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0.63",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "658-BBUF",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "29",
                              "OptionPriceVectorId": "24"
                            }
                          },
                          "Id": "C18CINE",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "OS_FAMILY",
                                "FloatValue": "0",
                                "StringValue": "WIN_8",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "SOFTWARE_BUNDLE",
                                "FloatValue": "0",
                                "StringValue": "PEPE_FI",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "CIRRUS_CLIENT_SOFTWARE",
                                "FloatValue": "0",
                                "StringValue": "YES",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "MSSI_ALLOWED",
                                "FloatValue": "0",
                                "StringValue": "NO",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "PROVIDES_DBR_BASIC",
                                "FloatValue": "0",
                                "StringValue": "YES",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "1003",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "24",
                          "Required": "false"
                        }
                      },
                      "Id": "1003",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "31",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "QKSETC5",
                      "Description": "Systems Management",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m49/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "System Driver, 3537",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "7",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "System Driver, 5537",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "SE000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0.2",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "631-AABV",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "30",
                              "OptionPriceVectorId": "25"
                            }
                          },
                          "Id": "QKSETC5",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "OS_FAMILY",
                              "FloatValue": "0",
                              "StringValue": "WIN_8",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "49",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "25",
                          "Required": "false"
                        }
                      },
                      "Id": "49",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "32",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "ESTAR5",
                      "Description": "Energy Efficiency Options",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m122/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "ESTAR 5.0",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "0",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "ESTAR 5.0",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": null,
                              "Class": "LB000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0.0214",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "331-2724",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "31",
                              "OptionPriceVectorId": "26"
                            }
                          },
                          "Id": "ESTAR5",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": null,
                          "CompositeItems": null,
                          "ParentModuleId": "122",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "26",
                          "Required": "false"
                        }
                      },
                      "Id": "122",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "33",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "true",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "DRPBOX|REVEL90",
                      "Description": "Additional Settings",
                      "Options": {
                        "Option": [
                          {
                            "PriceAdjustments": null,
                            "CustomOptionSubtype": "Standard",
                            "InternalDNCIdentifierPrefix": "p2/b7/m626/",
                            "AllowMultiQuantity": "false",
                            "FilterType": "Show",
                            "PriorityBuildLeadTimeDays": "1",
                            "FromChassis": "false",
                            "Description": "Dropbox, Digital Delivery, 20GB for 1 Year Promotion",
                            "CfiFlag": "false",
                            "Selected": "true",
                            "IsVisible": "false",
                            "OriginalPrice": "0",
                            "LeadTimeDays": "0",
                            "UnitCost": "0",
                            "Skus": {
                              "Sku": {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "false",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "true",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "Dropbox, Digital Delivery, 20GB for 1 year Promotion",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "Y",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": null,
                                "DutyClass": null,
                                "TaxClass": null,
                                "Class": "SE750",
                                "OriginalPrice": "0.0",
                                "PlacedPrice": "0.0",
                                "UnitWeight": "0",
                                "UnitCost": "0",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "525-0016",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "ContractTypeCode": "9I",
                                "ContractLaborCode": "P",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "32",
                                "OptionPriceVectorId": "27"
                              }
                            },
                            "Id": "DRPBOX",
                            "BundleID": null,
                            "IsUpsell": "false",
                            "IsHero": "false",
                            "Quantity": "1",
                            "IsExtendedOption": "false",
                            "Attributes": null,
                            "CompositeItems": null,
                            "ParentModuleId": "626",
                            "CustomizationId": "0",
                            "IsCustomizable": "false",
                            "CustomizationOptionType": "Standard",
                            "IsDefault": "true",
                            "PriceVectorId": "27",
                            "Required": "false"
                          },
                          {
                            "PriceAdjustments": null,
                            "CustomOptionSubtype": "Standard",
                            "InternalDNCIdentifierPrefix": "p2/b7/m626/",
                            "AllowMultiQuantity": "false",
                            "FilterType": "Show",
                            "PriorityBuildLeadTimeDays": "1",
                            "FromChassis": "false",
                            "Description": "Adobe Revel 1.1 Premium Digital Delivery",
                            "CfiFlag": "false",
                            "Selected": "true",
                            "IsVisible": "false",
                            "OriginalPrice": "0",
                            "LeadTimeDays": "0",
                            "UnitCost": "0",
                            "Skus": {
                              "Sku": {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "false",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "true",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "Adobe Revel 1.1 Premium Digital Delivery",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "Y",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": null,
                                "DutyClass": null,
                                "TaxClass": null,
                                "Class": "SE750",
                                "OriginalPrice": "0.0",
                                "PlacedPrice": "0.0",
                                "UnitWeight": "0",
                                "UnitCost": "0",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "525-0029",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "ContractTypeCode": "9I",
                                "ContractLaborCode": "P",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "33",
                                "OptionPriceVectorId": "28"
                              }
                            },
                            "Id": "REVEL90",
                            "BundleID": null,
                            "IsUpsell": "false",
                            "IsHero": "false",
                            "Quantity": "1",
                            "IsExtendedOption": "false",
                            "Attributes": {
                              "ConfigAttribute": [
                                {
                                  "Id": "OS_FAMILY",
                                  "FloatValue": "0",
                                  "StringValue": "WIN_8",
                                  "IsStringValue": "false",
                                  "Consumable": "false",
                                  "Type": "String",
                                  "InciteAtrributeType": "Validation",
                                  "IsMultiValued": "false"
                                },
                                {
                                  "Id": "LINUX_MOD_ALLOWED",
                                  "FloatValue": "0",
                                  "StringValue": "NO",
                                  "IsStringValue": "false",
                                  "Consumable": "false",
                                  "Type": "String",
                                  "InciteAtrributeType": "Validation",
                                  "IsMultiValued": "false"
                                },
                                {
                                  "Id": "WIN7_MOD_ALLOWED",
                                  "FloatValue": "0",
                                  "StringValue": "NO",
                                  "IsStringValue": "false",
                                  "Consumable": "false",
                                  "Type": "String",
                                  "InciteAtrributeType": "Validation",
                                  "IsMultiValued": "false"
                                },
                                {
                                  "Id": "WIN_8_ALLOWED",
                                  "FloatValue": "0",
                                  "StringValue": "YES",
                                  "IsStringValue": "false",
                                  "Consumable": "false",
                                  "Type": "String",
                                  "InciteAtrributeType": "Validation",
                                  "IsMultiValued": "false"
                                },
                                {
                                  "Id": "WIN_8_REQUIRED",
                                  "FloatValue": "0",
                                  "StringValue": "YES",
                                  "IsStringValue": "false",
                                  "Consumable": "false",
                                  "Type": "String",
                                  "InciteAtrributeType": "Validation",
                                  "IsMultiValued": "false"
                                },
                                {
                                  "Id": "SOFTWARE_VERSION",
                                  "FloatValue": "0",
                                  "StringValue": "NO_MSSI",
                                  "IsStringValue": "false",
                                  "Consumable": "false",
                                  "Type": "String",
                                  "InciteAtrributeType": "Validation",
                                  "IsMultiValued": "false"
                                }
                              ]
                            },
                            "CompositeItems": null,
                            "ParentModuleId": "626",
                            "CustomizationId": "0",
                            "IsCustomizable": "false",
                            "CustomizationOptionType": "Standard",
                            "IsDefault": "true",
                            "PriceVectorId": "28",
                            "Required": "false"
                          }
                        ]
                      },
                      "Id": "626",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "false",
                      "Sequence": "35",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "RTLSW8",
                      "Description": "Retail Software",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m61/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Retail Software - All WIN8",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": [
                              {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "false",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "false",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "Retail Registration 2.0",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "1",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": null,
                                "DutyClass": null,
                                "TaxClass": "S",
                                "Class": "SE000",
                                "OriginalPrice": "0.0",
                                "PlacedPrice": "0.0",
                                "UnitWeight": "0",
                                "UnitCost": "0",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "810-BBBN",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "Z",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "34",
                                "OptionPriceVectorId": "29"
                              },
                              {
                                "WtyPriceAmt": "0.0",
                                "RollupFlg": "false",
                                "RevAgencyFlg": "false",
                                "IsServiceSku": "false",
                                "PriceAdjustments": null,
                                "TaxTypesInfo": null,
                                "RecurringBillingFlag": "false",
                                "IncludeServiceTagInfo": "true",
                                "IsFuturistic": "false",
                                "IsHardware": "false",
                                "IsMobileBroadband": "false",
                                "Description": "Retail Label, Dell, RETURNPOL",
                                "IsHandledSeperately": "false",
                                "TaxCode": null,
                                "TaxRollupCode": null,
                                "ItemTypeCode": "3",
                                "FulfillmentLocation": "00",
                                "Quantity": "1",
                                "ManufacturingLeadTimeDays": "0",
                                "CfiLeadTimeDays": "0",
                                "ShipClass": null,
                                "DutyClass": null,
                                "TaxClass": "S",
                                "Class": "LB000",
                                "OriginalPrice": "0.0",
                                "PlacedPrice": "0.0",
                                "UnitWeight": "0",
                                "UnitCost": "0.0819",
                                "CompensationCost": "0",
                                "FpcCost": "0",
                                "CostCurrency": "USD",
                                "Id": "811-BBBC",
                                "LegalEntity": "DCSLP",
                                "DiscountClass": "V",
                                "IsSystemTied": "false",
                                "IsSparePart": "false",
                                "ContractTerminationDate": "0001-01-01T00:00:00",
                                "CustomFields": {
                                  "KeyValuePair": [
                                    {
                                      "Key": "RPLCMNTPRT",
                                      "Value": "False"
                                    },
                                    {
                                      "Key": "StandardAdjustments",
                                      "Value": "0.0"
                                    }
                                  ]
                                },
                                "IsFlexi": "false",
                                "IsShipping": "false",
                                "IsDelivery": "false",
                                "SystemFlag": "false",
                                "Attributes": null,
                                "Status": "B",
                                "PriceVectorId": "35",
                                "OptionPriceVectorId": "29"
                              }
                            ]
                          },
                          "Id": "RTLSW8",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "MOD",
                                "FloatValue": "0",
                                "StringValue": "FF5Y4",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "WIN_8_REQUIRED",
                                "FloatValue": "0",
                                "StringValue": "YES",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "61",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "29",
                          "Required": "false"
                        }
                      },
                      "Id": "61",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "36",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "W81EFD",
                      "Description": "Documentation/Disks",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m21/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Documentation, English-French",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Safety/Environment and Regulatory Guide (English/French/Dutch)",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "MN000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0.3002",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "340-AGIK",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "36",
                              "OptionPriceVectorId": "30"
                            }
                          },
                          "Id": "W81EFD",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "SOFTWARE_TYPE",
                              "FloatValue": "0",
                              "StringValue": "Windows_8.1",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "21",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "30",
                          "Required": "false"
                        }
                      },
                      "Id": "21",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "37",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "RTLPOD",
                      "Description": "Packaging Label",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m292/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Retail POD",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "2",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "POD Label",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "SH000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0.0716",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "340-AARH",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "37",
                              "OptionPriceVectorId": "31"
                            }
                          },
                          "Id": "RTLPOD",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "MOD",
                              "FloatValue": "0",
                              "StringValue": "RKK5H",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "292",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "31",
                          "Required": "false"
                        }
                      },
                      "Id": "292",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "38",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "PLMEN",
                      "Description": "Labels",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m750/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "Palmrest Sticker : English",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "2",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Palmrest Sticker : English",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "3",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": "S",
                              "Class": "LB000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0.2266",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "389-BCEI",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "V",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "38",
                              "OptionPriceVectorId": "32"
                            }
                          },
                          "Id": "PLMEN",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": [
                              {
                                "Id": "LCD_TYPE",
                                "FloatValue": "0",
                                "StringValue": "NON-TOUCH",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              },
                              {
                                "Id": "OS_FAMILY",
                                "FloatValue": "0",
                                "StringValue": "WIN_8",
                                "IsStringValue": "false",
                                "Consumable": "false",
                                "Type": "String",
                                "InciteAtrributeType": "Validation",
                                "IsMultiValued": "false"
                              }
                            ]
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "750",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "true",
                          "PriceVectorId": "32",
                          "Required": "false"
                        }
                      },
                      "Id": "750",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "39",
                      "ModuleType": "Standard",
                      "IsBaseModule": "false"
                    },
                    {
                      "IsMobileBroadband": "false",
                      "IsSubscriptionBilling": "false",
                      "CanContainHiddenOptions": "false",
                      "IsFlavoredDriver": "false",
                      "MultiSelect": "false",
                      "HasOptionLevelDNC": "false",
                      "DefaultOption": "NOFGA",
                      "Description": "FGA Module",
                      "Options": {
                        "Option": {
                          "PriceAdjustments": null,
                          "CustomOptionSubtype": "Standard",
                          "InternalDNCIdentifierPrefix": "p2/b7/m572/",
                          "AllowMultiQuantity": "false",
                          "FilterType": "Show",
                          "PriorityBuildLeadTimeDays": "1",
                          "FromChassis": "false",
                          "Description": "OAK15V1501_2132/BTS",
                          "CfiFlag": "false",
                          "Selected": "true",
                          "IsVisible": "false",
                          "OriginalPrice": "0",
                          "LeadTimeDays": "1",
                          "UnitCost": "0",
                          "Skus": {
                            "Sku": {
                              "WtyPriceAmt": "0.0",
                              "RollupFlg": "false",
                              "RevAgencyFlg": "false",
                              "IsServiceSku": "false",
                              "PriceAdjustments": null,
                              "TaxTypesInfo": null,
                              "RecurringBillingFlag": "false",
                              "IncludeServiceTagInfo": "true",
                              "IsFuturistic": "false",
                              "IsHardware": "false",
                              "IsMobileBroadband": "false",
                              "Description": "Fixed Hardware Configuration",
                              "IsHandledSeperately": "false",
                              "TaxCode": null,
                              "TaxRollupCode": null,
                              "ItemTypeCode": "R",
                              "FulfillmentLocation": "00",
                              "Quantity": "1",
                              "ManufacturingLeadTimeDays": "0",
                              "CfiLeadTimeDays": "0",
                              "ShipClass": null,
                              "DutyClass": null,
                              "TaxClass": null,
                              "Class": "ZA000",
                              "OriginalPrice": "0.0",
                              "PlacedPrice": "0.0",
                              "UnitWeight": "0",
                              "UnitCost": "0.011",
                              "CompensationCost": "0",
                              "FpcCost": "0",
                              "CostCurrency": "USD",
                              "Id": "730-7846",
                              "LegalEntity": "DCSLP",
                              "DiscountClass": "Z",
                              "IsSystemTied": "false",
                              "IsSparePart": "false",
                              "ContractTerminationDate": "0001-01-01T00:00:00",
                              "CustomFields": {
                                "KeyValuePair": [
                                  {
                                    "Key": "RPLCMNTPRT",
                                    "Value": "False"
                                  },
                                  {
                                    "Key": "StandardAdjustments",
                                    "Value": "0.0"
                                  }
                                ]
                              },
                              "IsFlexi": "false",
                              "IsShipping": "false",
                              "IsDelivery": "false",
                              "SystemFlag": "false",
                              "Attributes": null,
                              "Status": "B",
                              "PriceVectorId": "39",
                              "OptionPriceVectorId": "33"
                            }
                          },
                          "Id": "FG0035",
                          "BundleID": null,
                          "IsUpsell": "false",
                          "IsHero": "false",
                          "Quantity": "1",
                          "IsExtendedOption": "false",
                          "Attributes": {
                            "ConfigAttribute": {
                              "Id": "FGA_PROXY",
                              "FloatValue": "0",
                              "StringValue": "BTS",
                              "IsStringValue": "false",
                              "Consumable": "false",
                              "Type": "String",
                              "InciteAtrributeType": "Validation",
                              "IsMultiValued": "false"
                            }
                          },
                          "CompositeItems": null,
                          "ParentModuleId": "572",
                          "CustomizationId": "0",
                          "IsCustomizable": "false",
                          "CustomizationOptionType": "Standard",
                          "IsDefault": "false",
                          "PriceVectorId": "33",
                          "Required": "false"
                        }
                      },
                      "Id": "572",
                      "CategoryPageNum": "0",
                      "IsTied": "true",
                      "IsVisible": "false",
                      "AllowsDiscount": "true",
                      "IsServiceModule": "false",
                      "IsIncludedInPrice": "true",
                      "IsRequired": "true",
                      "Sequence": "42",
                      "ModuleType": "FixedGoodsAssemblies",
                      "IsBaseModule": "false"
                    }
                  ]
                },
                "language_id": "en",
                "ValidationMessages": null,
                "OutsideConnectedInfos": null,
                "BundleGroups": null
              },
              "OrderCode": "fncwc2132s",
              "FamilyName": "New Inspiron 15",
              "OriginalPrice": "379.99",
              "DisplayActiveUpsell": "false",
              "SourceConfigurator": "eConfig",
              "PriorityBuildable": "false",
              "PriorityBuildLeadTime": "0",
              "SkipMfgValidation": "false",
              "IsDefaultConfiguration": "false",
              "ConfigItemType": "Regular",
              "IsDellwareOnly": "false",
              "IsDummyConfig": "false",
              "AssociationType": "Default",
              "SlotLocation": "0",
              "ProductType": "Notebook",
              "IsExistingProduct": "false",
              "FixedOrderCodeAdjustment": "0",
              "CanSkip": "false",
              "CanChangeCFI": "true",
              "HasMobileBroadband": "false",
              "ConfigValidationErrorsExist": "false",
              "TiedBuildTime": "0",
              "TiedPBBuildTime": "0",
              "NonTiedBuildTime": "0",
              "QualifiesForContractDiscount": "false",
              "StoreOrderCodeGroupId": "0",
              "ForceValidation": "false",
              "WasValidationRun": "false",
              "BaseDiscountClassCode": "S"
            }
          ]
        },
        "LeadTimes": null,
        "SkipFlags": null,
        "ExtendedProperties": null,
        "Selected": "false",
        "FulfillmentUnits": {
          "FulfillmentUnit": [
            {
              "Id": "bd827ed4-ccd0-494a-8c23-65e40dac4b1c",
              "ComplexConfigId": "0",
              "IRN": "-0",
              "IsComplex": "false",
              "BackendResponses": null,
              "DispositionCode": "INW",
              "PaymentImpacts": null,
              "FulfillmentItemInformation": {
                "FulfillmentItemInformation": [
                  {
                    "ItemId": "95e20818-fadf-404e-87f8-af756da31899",
                    "Quantity": "1",
                    "FulfillmentSkuInformation": null,
                    "StartTieGroup": "0",
                    "IsConfigTiedSku": "false"
                  },
                  {
                    "ItemId": "b99ad84e-4fa3-420e-894c-0065993719b9",
                    "Quantity": "1",
                    "FulfillmentSkuInformation": null,
                    "StartTieGroup": "0",
                    "IsConfigTiedSku": "false"
                  }
                ]
              },
              "StopAtQuote": "false",
              "Frictionless": "true",
              "Results": null
            },
            {
              "Id": "41994b2b-94ae-493a-8e67-41c26631164d",
              "ComplexConfigId": "0",
              "IRN": "-1",
              "IsComplex": "false",
              "BackendResponses": null,
              "DispositionCode": "INW",
              "PaymentImpacts": null,
              "FulfillmentItemInformation": {
                "FulfillmentItemInformation": {
                  "ItemId": "95e20818-fadf-404e-87f8-af756da31899",
                  "Quantity": "2",
                  "FulfillmentSkuInformation": null,
                  "StartTieGroup": "0",
                  "IsConfigTiedSku": "false",
                  "RoundingAdjustment": {
                    "Map": {
                      "d": [
                        "-0.02",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0",
                        "0"
                      ]
                    },
                    "Id": "FulfillmentUnitRoundingAdjustment95e20818-fadf-404e-87f8-af756da31899",
                    "RowLength": "14",
                    "ColumnLength": "1",
                    "RowKeyIndexBinding": null,
                    "RowTypeIndexBinding": {
                      "RowType": [
                        {
                          "n": "37401",
                          "t": "7",
                          "s": "71",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "Shipping",
                          "t": "2",
                          "s": "0",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "31",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "32",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTax",
                          "t": "5",
                          "s": "53",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "61",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "62",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "SalesUseTaxBase",
                          "t": "6",
                          "s": "63",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "5",
                          "s": "35",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "37401",
                          "t": "5",
                          "s": "36",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "30755",
                          "t": "5",
                          "s": "37",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "30755",
                          "t": "5",
                          "s": "38",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "5",
                          "s": "33",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        },
                        {
                          "n": "32192",
                          "t": "5",
                          "s": "34",
                          "b": {
                            "@xsi:nil": "true"
                          }
                        }
                      ]
                    },
                    "ColumnKeyIndexBinding": {
                      "string": "95e20818-fadf-404e-87f8-af756da31899"
                    }
                  }
                }
              },
              "StopAtQuote": "false",
              "Frictionless": "true",
              "Results": null
            },
            {
              "Id": "e226d73c-914c-4a26-b9e7-a808568f8b83",
              "ComplexConfigId": "0",
              "IRN": "-2",
              "IsComplex": "false",
              "BackendResponses": null,
              "DispositionCode": "INW",
              "PaymentImpacts": null,
              "FulfillmentItemInformation": {
                "FulfillmentItemInformation": {
                  "ItemId": "95e20818-fadf-404e-87f8-af756da31899",
                  "Quantity": "2",
                  "FulfillmentSkuInformation": null,
                  "StartTieGroup": "0",
                  "IsConfigTiedSku": "false"
                }
              },
              "StopAtQuote": "false",
              "Frictionless": "true",
              "Results": null
            }
          ]
        },
        "PODateReceived": "0001-01-01T00:00:00"
      }
    },
    "Id": "02f2fd2e-473d-4523-bdae-ae6647fa008b",
    "LinkToReenteredDpid": "0",
    "PaymentMethods": null,
    "PriceAdjustments": {
      "PriceAdjustment": {
        "@xsi:type": "Promotion",
        "UniqueId": "00000000-0000-0000-0000-000000000000",
        "Selected": "true",
        "IsPermanent": "false",
        "Id": "37401",
        "AdjustmentType": "OrderLevelDNC",
        "AppliedOrder": "0",
        "TotalImpact": "0",
        "OfferType": "DollarsOff",
        "OfferValue": "22.0000",
        "IsTaxInclusive": "false",
        "Behavior": "None",
        "AdjustmentImpact": "22.0000",
        "TotalAdjustment": "22.0000",
        "ExtendedProperties": null,
        "ShortDescription": "aa",
        "ShortMarketingDescription": null,
        "DiscountApplyOrder": "During",
        "CouponFlag": "Discount",
        "CouponStatus": "NotCoupon",
        "CouponType": "NotCoupon",
        "DateStart": "2014-05-07T18:30:00",
        "DateEnd": "2016-05-08T18:29:59",
        "PromotionType": "OrderLevel",
        "CanApplyCrossSegment": "false",
        "TimesApplied": "0",
        "PromotionTeaserDescription": null,
        "DisplayShortDescription": "true",
        "OfferAmount": "0",
        "TimesToApply": "1",
        "ExpiryDescription": null,
        "CampaignType": "Undefined",
        "LegalDescription": null,
        "AwardLimit": "0",
        "CampaignId": "0",
        "ClickURL": null,
        "ImageURL": null,
        "ShowOriginalPrice": "true",
        "ApplicationsWhereRuleCanApply": {
          "int": [
            "1",
            "2"
          ]
        },
        "ConcessionValue": "22.0000",
        "LastModifiedDate": "2014-05-08T13:27:31",
        "MaximumTimesRuleCanApply": "1",
        "PricingRuleBucketId": "0",
        "ConcessionClauseType": "FixedAmountDiscount",
        "PricingRuleType": "QuoteDiscount",
        "PricingRuleUsage": "None",
        "PricingRuleRank": "10",
        "CountryCode": "us",
        "LanguageCode": "en",
        "LongDescription": "aa",
        "LongMarketingDescription": null,
        "PricingRuleDescription": null,
        "CouponRedemptionAttempted": "false",
        "CouponUnRedemptionAttempted": "false",
        "InternalItemIdentifiers": null,
        "IsModified": "false"
      }
    },
    "ExportIntent": "Yes",
    "ReceiveConfirmationEmail": "true",
    "DateCreated": "2014-05-10T23:33:46.0910422+05:30",
    "DateModified": "2014-05-10T23:33:46.0910422+05:30",
    "ExpirationDays": "30",
    "RetentionDays": "90",
    "CartType": "A",
    "QuoteVersionNumber": "1",
    "QuoteStatus": "QUOTED",
    "QuoteValidityDays": "0",
    "ProcessStatus": null,
    "SolutionVersion": "0",
    "CatalogId": "0",
    "IsServiceEnabled": "false",
    "ProcessingResults": null,
    "RequestType": "Submit",
    "RequestID": "c743f3fb-548a-4922-8fec-7204c81550c4",
    "CommerceContext": {
      "ID": "00000000-0000-0000-0000-000000000000",
      "ExtendedProperties": null,
      "TaxInformation": {
        "TaxOverrideRate": null,
        "OverrideAllTaxType": "false",
        "TaxIncludedState": "include",
        "ExtendedProperties": null,
        "TaxExemptions": {
          "TaxExemption": {
            "TaxType": "SalesUseTax",
            "IsExempt": "false"
          }
        },
        "RequireTax": "true"
      },
      "Band": "1",
      "IsConfigured": "true",
      "CartType": "A",
      "CartSessionId": "5c77597c-390b-4d9d-8d36-3400790225ff",
      "Country": "us",
      "Currency": "USD",
      "DisplayCurrency": null,
      "ActiveHedgeRate": "1",
      "CustomerHedgeRate": "1",
      "DisableInternalCurrencyConversion": "false",
      "Language": "en",
      "CustomerSet": "19",
      "CompanyNumber": "29",
      "Segment": "dhs",
      "Region": "us",
      "Debug": "false",
      "Secure": "false",
      "SourceApplicationName": "OLRECOMM",
      "TransactionType": "CustomerOrder",
      "DefaultShipMethod": "LD",
      "DefaultShipDestinationCode": "us",
      "SuppressTax": "false",
      "EnableTaxInclusiveDNCCalculations": "false",
      "EnableDNCSpreadingToServiceSkus": "false",
      "EnableOptionalPromotions": "false",
      "EnableMarketableDiscountForFinancingPaymentOnly": "true",
      "IsGlobalPortal": "false",
      "NonStandardTransaction": "false",
      "CdcEnabled": "false",
      "CustomerAccountId": "0",
      "RoundingMethod": "RoundTowardLarger",
      "Precision": "2",
      "DNCRoundingMethod": "RoundTowardLarger",
      "DNCPrecision": "2",
      "BusinessUnitId": "11",
      "DncApplicationID": "1",
      "EnableShippingRules": "false",
      "EnableDNC": "true",
      "ShowUpliftInCart": "false",
      "UseReseller": "false",
      "ItemDncApplied": "true",
      "ShippingDncApplied": "true",
      "DutyDncApplied": "false",
      "HedgeRateAtQuote": "1",
      "SuppressEcoFee": "false"
    },
    "Service": null,
    "CouponStorage": null,
    "NonAppliedCouponStorage": null,
    "MarketablePriceAdjustments": null,
    "OrderType": "Normal",
    "DPIDList": null,
    "EquoteIdList": null,
    "Contacts": null,
    "IsCPF": "false",
    "CartState": "0",
    "ParentEquoteId": "0",
    "HoldReasons": null,
    "Version": "15.1",
    "OpportunityID": null
  }
}
*/
/*$scope.formData=
{"OrderGroup":{"@xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","@xmlns:xsd":"http://www.w3.org/2001/XMLSchema","DNCCacheVersion":"5e4e516b-bbd5-4f5b-a0de-19a018e5d40a","CheckoutProfile":null,"OrderForms":{"OrderForm":{"Id":"4643b1d1-bc4f-47ff-8cf0-932342dc083a","ShippingInformation":{"Id":"c4be75ea-69a8-4d10-9767-6c58de4bb1d9","hasDeliveryLoadingDock":"undefined","DeliveryAboveFirstFloor":"undefined","hasFreightElevator":"undefined","ShippingContact":{"Name":{"Prefix":"JR","First":"ANANYA","Last":"BALAJI","Suffix":null,"MAGuid":"00000000-0000-0000-0000-000000000000"},"Language":"ES","Currency":"MXN","HasAddress":"true","Id":"53d14f55-0721-44d5-ab6c-a9ee20a101ca","CustomerType":"NONE","EmailType":"Text","OrganizationInfo":{"Name":"ANANYA BALAJI "},"CompanyName":"ANANYA BALAJI ","Address":{"Id":"4ae9068a-a6c1-4250-b9aa-613e6085c40f","AddressId":"1078470","Line1":"mavely","Line2":"sjdksjdkj","Line3":"MNDSMFCSNDF","Region":"AGS","City":"BNAGALORE","PostalCode":"19879877","Country":"MX","IsAddressVerified":"true","IsValid":"false","MAGuid":"00000000-0000-0000-0000-000000000000","AddressType":"General","AddressStatus":"Active","SequenceNumber":"1"},"EmailAddress":{"Email":null},"RefEmailAddress":{"Email":null},"AdditionalEmails":null,"PhoneContacts":{"PhoneNumber":[{"MediaType":"PHW","CountryCode":"52","AreaCode":"444","Number":"3383034","ID":"a0ce577d-8fb8-4815-b14c-1bb9514926d0","SequenceID":"2021045","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},{"MediaType":"FAXW","CountryCode":"52","AreaCode":"444","Number":"3383034","ID":"9355e370-8415-4a6d-b2bb-9a6d321ba837","SequenceID":"2021046","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"}]},"OptIn":"false","BestTimeToCall":"AnyTime","ContactType":"UNDEFINED","ContactId":"1048318","BackendCustomerNumber":"6368","SequenceID":"0","MAGuid":"00000000-0000-0000-0000-000000000000","IsValid":"true","TaxIdPrimary":"1234567890"},"ShippingChoice":"DD","ShippingOptions":{"ShippingOption":{"AdjustedShippingTotal":"0","UnAdjustedShippingTotal":"0","Enabled":"false","HandlingFee":"0","IsDiscounted":"false","ShippingOptionId":"DD","HandlingFeeEnabled":"false"}},"ShippingDescription":"International","PremiumShippingPrice":"0","UsePremiumShipping":"false","RollupPremiumShipping":"true","ShippingInstruction":null,"ShippingAvailable":"false","RequireShipping":"false","UnadjustedShipping":"2708.5806000000000","AdjustedShipping":"0","ShippingRulesEnabled":"false","LeadTimeDays":"0"},"BillingContact":{"Name":{"Prefix":"JR","First":"ANANYA","Last":"BALAJI","Suffix":null,"MAGuid":"00000000-0000-0000-0000-000000000000"},"Language":"ES","Currency":"MXN","HasAddress":"true","Id":"4830de97-4da1-48a6-a4e9-43046f93bb46","CustomerType":"NONE","EmailType":"Text","OrganizationInfo":{"Name":"ANANYA BALAJI"},"CompanyName":"ANANYA BALAJI","Address":{"Id":"d38b3ff4-31a6-4a7d-933a-c29aa1b7f65a","AddressId":"1076695","Line1":"1","Line2":"2","Line3":null,"Region":"MEX","City":"CHENNAI","PostalCode":"56789","Country":"MX","IsAddressVerified":"true","IsValid":"false","MAGuid":"00000000-0000-0000-0000-000000000000","AddressType":"General","AddressStatus":"Active"},"EmailAddress":{"Email":null},"RefEmailAddress":{"Email":null},"AdditionalEmails":null,"PhoneContacts":{"PhoneNumber":[{"MediaType":"PHW","CountryCode":"52","AreaCode":"444","Number":"3383034","ID":"77e4bd01-6aa0-430c-9ecb-7eb0b90e2ad9","SequenceID":"2021043","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},{"MediaType":"FAXW","CountryCode":"52","AreaCode":"444","Number":"3383034","ID":"4d0f2b48-b89e-4c5b-a8d8-e5dc9bee9260","SequenceID":"2021044","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"}]},"OptIn":"false","BestTimeToCall":"AnyTime","ContactType":"UNDEFINED","ContactId":"1048317","BackendCustomerNumber":"6368","SequenceID":"0","MAGuid":"00000000-0000-0000-0000-000000000000","IsValid":"true","TaxIdPrimary":"1234567890"},"IsValidQuote":"false","Items":{"Item":[{"@xsi:type":"ConfigItem","Id":"98ce44ed-72ee-4da9-9aca-0349c592eb1e","CustomerSet":"mxdhs1s","Quantity":"1","UnitQuantity":"1","Description":"Optiplex 160 OptiPlex 160 Single Core Tiny Computadora Up to 87 Percent Efficient PSU","UnitCost":"6999.55","Categories":{"Category":[{"Name":"CONFIG","ID":"root","ParentCategoryID":"-1","Description":"CONFIG"},{"Name":"ProductLine","ID":"p1","ParentCategoryID":"root","Description":"Desktops"},{"Name":"Brand","ID":"b2","ParentCategoryID":"p1","Description":"Dell OptiPlex"},{"Name":"Family","ID":"f1774","ParentCategoryID":"b2","Description":"Eagle PC (160)"},{"Name":"Desktops","ID":"p1","ParentCategoryID":"root","Description":"Desktops"},{"Name":"Dell OptiPlex","ID":"b2","ParentCategoryID":"p1","Description":"Dell OptiPlex"},{"Name":"Eagle PC (160)","ID":"f1774","ParentCategoryID":"b2","Description":"Eagle PC (160)"}]},"EditItemUrl":null,"ValidatorUrl":null,"ValidationStatus":"Valid","BuildTime":"0","Weight":"40.079","CatalogSystemURI":"CFG","AdvertisementCode":"OTH","FullfilmentLocationId":"00","Frictionless":"true","ProductID":"lo160ues","AllowChangeQuantity":"true","AllowSave":"true","AllowEmail":"true","Image":"desktop-optiplex-160-120x107.jpg","ShipClass":null,"SplitClass":"2","ItemCatalogSource":"classic","ValidationLocked":"false","ValidationLockEndDate":"0001-01-01T00:00:00","PriceMatrix":{"Price":{"Map":{"d":["-1733.99","2236.96","0","954.8","1500.4","2046","2032.36","0","0","0","0","0","0","136.4","68.2","0","0","0","0","317.94","826.34","0","0","76.45","76.06","0.01","40.40","18.37","26.24","52.56","0.00","2.61","0.00","0.00","0.00","0.00","2.89","0.96","0.66","0.37","0.28","0.00","0.00","0.00","0.00","9.97","1354.29","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","-277.44","357.91","0.00","152.77","240.06","327.36","325.18","0.00","0.00","0.00","0.00","0.00","0.00","21.82","10.91","0.00","0.00","0.00","0.00","50.87","132.21","0.00","0.00","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","556.93","1901.53","0.16","1009.91","459.37","655.96","1313.94","0","65.16","0","0","0","0","72.32","23.89","16.47","9.27","6.93","0.13","220.76","437.32","0.13","249.37","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","216.69","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","12.23","12.17","0.00","6.46","2.94","4.20","8.41","0.00","0.42","0.00","0.00","0.00","0.00","0.46","0.15","0.11","0.06","0.04","0.00","0.00","0.00","0.00","1.60","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]},"Id":"Price","RowLength":"39","ColumnLength":"23"},"Selected":{"Map":{"d":["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]},"Id":"Selected","RowLength":"23","ColumnLength":"1"},"RoundingAdjustment":{"Map":{"d":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]},"Id":"Selected","RowLength":"23","ColumnLength":"1"},"Results":null},"CreateDate":"0001-01-01T00:00:00","Marketing":{"Upsells":null,"CrossSells":null},"Selected":"true","ParentItemID":"00000000-0000-0000-0000-000000000000","Manufacturer":"Dell","ShippingCost":"0","AssociatedItems":null,"PriceAdjustments":null,"MarketablePriceAdjustments":null,"SkipDiscount":"false","Discountable":"false","DisplayCurrencyCode":"MXN","IsFixedOrderCode":"false","ProductLineId":"1","PriceAdjustmentsToPreapply":null,"SalesReps":null,"IsMissingCostData":"false","Language":"ES","ShippingInformationId":"00000000-0000-0000-0000-000000000000","BillingContactId":"00000000-0000-0000-0000-000000000000","AppliedHedgeRate":"0","AppliedUplift":"0","CatalogId":"323223","BusinessUnitID":"3232","IsLeadTimeValid":"false","Country":"MX","Currency":"MXN","Region":"la","ExtendedProperties":null,"Personalization":null,"CloneSetId":"00000000-0000-0000-0000-000000000000","Attributes":null,"ValidationResult":{"IsValid":"true","Messages":null},"IsTied":"false","IsAPOSSku":"false","IsEligibleForManualServiceAdjustment":"false","LeadTimeDetails":{"BaseDate":"2010-10-05T19:51:16.6603377+05:30","LeadTimeUnits":{"LeadTimeUnit":[{"UnitType":"CustKitOpt","UnitValue":"3"},{"UnitType":"Financial","UnitValue":"0"},{"UnitType":"Notification","UnitValue":"0"},{"UnitType":"ManufacturingHoliday","UnitValue":"0"}]}},"Service":null,"ConfigDetails":{"Id":"lo160ues","UniqueId":"d360b70b-dde0-4ccf-9c6d-b8e3702524e2","CfiComments":null,"SINumber":null,"ParentModuleID":"0","CustomerSetId":"mxdhs1s","Currency":"MXN","Language":"21","ChassisId":"3733","CatalogId":"323223","CompanyNumber":"23","BrandId":"2","FamilyId":"1774","MaxPage":"33757","Modules":{"Module":[{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"OptiPlex  160","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m1/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"OptiPlex 160 Single Core Tiny Computadora Up to 87 Percent Efficient PSU","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"-1733.99364151724","Value":"-1733.99","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"556.93","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"556.93","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"1354.2903000000000","Value":"1354.29","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"54.171612000000000","Value":"54.17","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"8.66745792000000000","Value":"8.67","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"54.171612000000000","Type":"IVA","Amount":"8.67","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"216.686448000000000","Value":"216.69","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"1354.2903000000000","Type":"IVA","Amount":"216.69","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"22.2770380352","Value":"22.28","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"3.564326085632","Value":"3.56","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"22.2770380352","Type":"IVA","Amount":"3.56","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"-277.4389826427584","Value":"-277.44","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"-1733.99364151724","Type":"IVA","Amount":"-277.44","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"2","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"ODSKTP","DutyClass":"ODSKTP","TaxClass":null,"Class":"E|002","OriginalPrice":"682","PlacedPrice":"-1733.99364151724","UnitWeight":"11","UnitCost":"556.92595088","CompensationCost":"0","Id":"224-3406","LegalEntity":"DMLP ","DiscountClass":"A","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"true","Attributes":null,"Status":"B","PriceVectorId":"0"}},"Id":"FX16PEL","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"1","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"1","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"1","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Procesador","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m2/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Intel&#174; Atom&#153; 230 Single Core","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"2236.96","Value":"2236.96","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"1901.53","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"1901.53","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"76.061365952","Value":"76.06","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"12.16981855232","Value":"12.17","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"76.061365952","Type":"IVA","Amount":"12.17","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"357.9136","Value":"357.91","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"2236.96","Type":"IVA","Amount":"357.91","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"PP000","OriginalPrice":"2236.96","PlacedPrice":"2236.96","UnitWeight":"4","UnitCost":"1901.5341488","CompensationCost":"0","Id":"311-9802","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"1"}},"Id":"23016PC","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"2","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"2","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"2","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Sistema Operativo","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m11/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Windows® 7 Home Premium Original, con medios, edición de 32 bits, en Español","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":[{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0.16","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0.16","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.006299904","Value":"0.01","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00100798464","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.006299904","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":null,"DutyClass":null,"TaxClass":null,"Class":"LB000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0.1574976","CompensationCost":"0","Id":"330-8896","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"2"},{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"954.8","Value":"954.8","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"1009.91","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"1009.91","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"40.3964544256","Value":"40.40","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"6.463432708096","Value":"6.46","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"40.3964544256","Type":"IVA","Amount":"6.46","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"152.768","Value":"152.77","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"954.8","Type":"IVA","Amount":"152.77","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":null,"DutyClass":null,"TaxClass":null,"Class":"SE000","OriginalPrice":"954.8","PlacedPrice":"954.8","UnitWeight":"1.01","UnitCost":"1009.91136064","CompensationCost":"0","Id":"421-1925","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"3"}]},"Id":"W7HP3S","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"11","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"11","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"3","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Memoria","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m3/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"2GB DDR2 Non-ECC SDRAM,800MHz, (1 DIMM)","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"1500.4","Value":"1500.4","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"459.37","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"459.37","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"18.37472","Value":"18.37","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"2.9399552","Value":"2.94","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"18.37472","Type":"IVA","Amount":"2.94","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"240.064","Value":"240.06","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"1500.4","Type":"IVA","Amount":"240.06","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"IC000","OriginalPrice":"1500.4","PlacedPrice":"1500.4","UnitWeight":"0.6","UnitCost":"459.368","CompensationCost":"0","Id":"311-7443","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"4"}},"Id":"2G2N81","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"3","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"3","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"4","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Disco Duro","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m8/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Disco Duro SATA 2.5\" de 160GB  -  16MB DataBurst Caché&#153;","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"2046","Value":"2046","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"655.96","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"655.96","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"26.2385226688","Value":"26.24","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"4.198163627008","Value":"4.20","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"26.2385226688","Type":"IVA","Amount":"4.20","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"327.36","Value":"327.36","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"2046","Type":"IVA","Amount":"327.36","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"HD000","OriginalPrice":"2046","PlacedPrice":"2046","UnitWeight":"1.209","UnitCost":"655.96306672","CompensationCost":"0","Id":"341-8342","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"5"}},"Id":"160S102","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"8","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"8","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"5","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Monitor","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m5/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Monitor Dell E170SB, Pantalla Plana de 17\"","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"2032.36","Value":"2032.36","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"1313.94","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"1313.94","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"52.5576841088","Value":"52.56","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"8.409229457408","Value":"8.41","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"52.5576841088","Type":"IVA","Amount":"8.41","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"325.1776","Value":"325.18","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"2032.36","Type":"IVA","Amount":"325.18","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"5","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"FPMON","DutyClass":"FPMON","TaxClass":null,"Class":"MO000","OriginalPrice":"2032.36","PlacedPrice":"2032.36","UnitWeight":"15.21","UnitCost":"1313.94210272","CompensationCost":"0","Id":"320-8083","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":{"KeyValuePair":{"Key":"VIS","Value":"43.18"}},"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"6"}},"Id":"E170SB","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"5","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"5","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"6","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Dell Energy Smart","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m25/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Dell Energy Smart habilitado","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"AC000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0","CompensationCost":"0","Id":"330-4830","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"7"}},"Id":"ESMART","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"25","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"25","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"8","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Ship Packaging Options","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m41/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Shipping Material for System, Tiny Computadora, OptiPlex","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":[{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"65.16","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"65.16","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"2.6063752832","Value":"2.61","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.417020045312","Value":"0.42","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"2.6063752832","Type":"IVA","Amount":"0.42","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"MN000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"1","UnitCost":"65.15938208","CompensationCost":"0","Id":"311-9163","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"8"},{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":null,"DutyClass":null,"TaxClass":null,"Class":"AC000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0","CompensationCost":"0","Id":"330-7422","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"9"}]},"Id":"TINYSHP","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"41","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"41","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"9","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Tarjeta de Video","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m6/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"SIS&#174; Mirage 3, Video Integrado","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"VB000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0","CompensationCost":"0","Id":"320-7038","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"10"}},"Id":"INTVID","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"6","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"6","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"10","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Security Software","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m37/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Trend Micro Internet Security en español, 30 días","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":null,"DutyClass":null,"TaxClass":null,"Class":"SA000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0.05","UnitCost":"0","CompensationCost":"0","Id":"410-2903","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"11"}},"Id":"TREN30S","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"37","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"37","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"false","Sequence":"11","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Bocinas","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m18/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Sin Bocinas","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"GM000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0","CompensationCost":"0","Id":"313-4825","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"12"}},"Id":"NSPK","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"18","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"18","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"12","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Teclado","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m4/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Teclado Dell USB Silencioso, Español","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"136.4","Value":"136.4","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"72.32","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"72.32","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"2.89270592","Value":"2.89","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.4628329472","Value":"0.46","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"2.89270592","Type":"IVA","Amount":"0.46","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"21.824","Value":"21.82","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"136.4","Type":"IVA","Amount":"21.82","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"KB000","OriginalPrice":"136.4","PlacedPrice":"136.4","UnitWeight":"2","UnitCost":"72.317648","CompensationCost":"0","Id":"330-1992","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"13"}},"Id":"QUSBS","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"4","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"4","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"13","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Mouse","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m12/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Mouse Dell Óptico USB con Scroll","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"68.2","Value":"68.2","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"23.89","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"23.89","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.95548544","Value":"0.96","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.1528776704","Value":"0.15","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.95548544","Type":"IVA","Amount":"0.15","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"10.912","Value":"10.91","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"68.2","Type":"IVA","Amount":"10.91","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"EG000","OriginalPrice":"68.2","PlacedPrice":"68.2","UnitWeight":"2","UnitCost":"23.887136","CompensationCost":"0","Id":"330-2733","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"14"}},"Id":"USBOBLK","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"12","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"12","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"14","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Recursos","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m27/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"DVD de Recursos contiene Diagnósticos y Drivers","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"16.47","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"16.47","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.6587599616","Value":"0.66","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.105401593856","Value":"0.11","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.6587599616","Type":"IVA","Amount":"0.11","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"MN000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0.5","UnitCost":"16.46899904","CompensationCost":"0","Id":"330-3686","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"15"}},"Id":"RDVD","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"27","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"27","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"16","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Documentación","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m21/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Cable de Corriente 125 Voltios y Documentación en Español","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":[{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"9.27","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"9.27","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.370644352","Value":"0.37","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.05930309632","Value":"0.06","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.370644352","Type":"IVA","Amount":"0.06","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"CA000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"1","UnitCost":"9.2661088","CompensationCost":"0","Id":"330-1711","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"16"},{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"6.93","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"6.93","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.2770382784","Value":"0.28","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.044326124544","Value":"0.04","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.2770382784","Type":"IVA","Amount":"0.04","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"MN000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0.5","UnitCost":"6.92595696","CompensationCost":"0","Id":"330-1713","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"17"}]},"Id":"DOCSNA","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"21","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"21","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"19","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Soporte de Hardware","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m29/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"3  Año de garantía limitada, Servicio en el sitio con respuesta el siguiente día laborable.","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":[{"WtyPriceAmt":"1","RollupFlg":"true","RevAgencyFlg":"false","IsServiceSku":"true","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0.13","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0.13","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0","Value":"0","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"8","FulfillmentLocation":"LX","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"SJ000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0.131248","CompensationCost":"0","Id":"916-8318","LegalEntity":"DELL","DiscountClass":"Z","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","ContractTypeCode":"9E","ContractLaborCode":"S","Attributes":null,"Status":"B","PriceVectorId":"18"},{"WtyPriceAmt":"12","RollupFlg":"true","RevAgencyFlg":"false","IsServiceSku":"true","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"317.936124","Value":"317.94","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"220.76","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"168.26","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0","Value":"0","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"50.86977984","Value":"50.87","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"317.936124","Type":"IVA","Amount":"50.87","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"8","FulfillmentLocation":"LX","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"SJ000","OriginalPrice":"317.936124","PlacedPrice":"317.936124","UnitWeight":"0","UnitCost":"168.259936","CompensationCost":"220.759136","Id":"949-0937","LegalEntity":"DELL","DiscountClass":"Z","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","ContractTypeCode":"9I","ContractLaborCode":"S","Attributes":null,"Status":"B","PriceVectorId":"19"},{"WtyPriceAmt":"29","RollupFlg":"true","RevAgencyFlg":"false","IsServiceSku":"true","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"826.335752","Value":"826.34","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"437.32","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"437.32","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0","Value":"0","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"132.21372032","Value":"132.21","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"826.335752","Type":"IVA","Amount":"132.21","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"8","FulfillmentLocation":"LX","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"ZV020","OriginalPrice":"826.335752","PlacedPrice":"826.335752","UnitWeight":"0","UnitCost":"437.318336","CompensationCost":"0","Id":"949-3542","LegalEntity":"UNY","DiscountClass":"Z","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","ContractTypeCode":"9E","ContractLaborCode":"C","Attributes":null,"Status":"B","PriceVectorId":"20"},{"WtyPriceAmt":"1","RollupFlg":"true","RevAgencyFlg":"false","IsServiceSku":"true","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0.13","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0.13","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0","Value":"0","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"8","FulfillmentLocation":"LX","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"ZV000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0.131248","CompensationCost":"0","Id":"949-7910","LegalEntity":"UNY","DiscountClass":"Z","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","ContractTypeCode":"9I","ContractLaborCode":"C","Attributes":null,"Status":"B","PriceVectorId":"21"}]},"Id":"L3OS","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"29","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"29","CategoryPageNum":"3","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"true","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"20","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Procesamiento Internacional","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m30/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Procesamiento Internacional","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"249.37","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"249.37","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"9.974848","Value":"9.97","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"1.59597568","Value":"1.60","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"9.974848","Type":"IVA","Amount":"1.60","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"1","FulfillmentLocation":"LX   ","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"OA000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"249.3712","CompensationCost":"0","Id":"499-9994","LegalEntity":"DMLP ","DiscountClass":"X","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"22"}},"Id":"INTER","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"30","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"30","CategoryPageNum":"3","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"true","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"25","ModuleType":"Standard"}]},"country":"MX","language_id":"ES","ValidationMessages":null,"OutsideConnectedInfos":null,"BundleGroups":null},"OrderCode":"lo160ues","Title":"Optiplex 160","FamilyName":"Optiplex 160","OriginalPrice":"8385.41","DisplayActiveUpsell":"false","SourceConfigurator":"eConfig","PriorityBuildable":"false","PriorityBuildLeadTime":"0","SkipMfgValidation":"false","IsDefaultConfiguration":"false","ConfigItemType":"Regular","IsDellwareOnly":"false","IsDummyConfig":"false","AssociationType":"Default","SlotLocation":"0","ProductType":"Desktop","IsExistingProduct":"false","FixedOrderCodeAdjustment":"0","CanSkip":"false","CanChangeCFI":"true","HasMobileBroadband":"false","IsConfigValidated":"false","IsDOMSValidated":"false","MappingExceptions":null,"ConfigValidationErrorsExist":"false","TiedBuildTime":"0","TiedPBBuildTime":"0","NonTiedBuildTime":"0","PriorityBuildTime":"0","PriorityBuildEnabled":"false","PriorityApplied":"false","QualifiesForContractDiscount":"false","SegmentName":"DHS"},{"@xsi:type":"ConfigItem","Id":"70780881-f945-4b60-8562-81df96b2cd43","CustomerSet":"mxdhs1s","Quantity":"1","UnitQuantity":"1","Description":"Optiplex 160 OptiPlex 160 Single Core Tiny Computadora Up to 87 Percent Efficient PSU","UnitCost":"5256.63","Categories":{"Category":[{"Name":"CONFIG","ID":"root","ParentCategoryID":"-1","Description":"CONFIG"},{"Name":"ProductLine","ID":"p1","ParentCategoryID":"root","Description":"Desktops"},{"Name":"Brand","ID":"b2","ParentCategoryID":"p1","Description":"Dell OptiPlex"},{"Name":"Family","ID":"f1774","ParentCategoryID":"b2","Description":"Eagle PC (160)"},{"Name":"Desktops","ID":"p1","ParentCategoryID":"root","Description":"Desktops"},{"Name":"Dell OptiPlex","ID":"b2","ParentCategoryID":"p1","Description":"Dell OptiPlex"},{"Name":"Eagle PC (160)","ID":"f1774","ParentCategoryID":"b2","Description":"Eagle PC (160)"}]},"EditItemUrl":null,"ValidatorUrl":null,"ValidationStatus":"Valid","BuildTime":"0","Weight":"26.66","CatalogSystemURI":"CFG","AdvertisementCode":"OTH","FullfilmentLocationId":"00","Frictionless":"true","ProductID":"lo160bes","AllowChangeQuantity":"true","AllowSave":"true","AllowEmail":"true","Image":"desktop-optiplex-160-120x107.jpg","ShipClass":null,"SplitClass":"2","ItemCatalogSource":"classic","ValidationLocked":"false","ValidationLockEndDate":"0001-01-01T00:00:00","PriceMatrix":{"Price":{"Map":{"d":["-1271.84","2152.47","0","918.74","787.49","1968.72","0","0","0","0","0","0","0","131.25","65.62","0","0","0","0","305.93","795.12","0","0","75.63","73.28","0.01","38.92","8.85","25.28","0.00","0.00","2.51","0.00","0.00","0.00","0.00","2.79","0.92","0.63","0.36","0.27","0.00","0.00","0.00","0.00","9.61","1354.29","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","-203.49","344.39","0.00","147.00","126.00","315.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","21.00","10.50","0.00","0.00","0.00","0.00","48.95","127.22","0.00","0.00","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","536.58","1832.08","0.15","973.02","221.29","632.00","0.01","0","62.78","0","0","0","0","69.68","23.01","15.87","8.93","6.67","0.13","212.70","421.34","0.13","240.26","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","216.69","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0.00","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","12.10","11.73","0.00","6.23","1.42","4.04","0.00","0.00","0.40","0.00","0.00","0.00","0.00","0.45","0.15","0.10","0.06","0.04","0.00","0.00","0.00","0.00","1.54","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]},"Id":"Price","RowLength":"39","ColumnLength":"23"},"Selected":{"Map":{"d":["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]},"Id":"Selected","RowLength":"23","ColumnLength":"1"},"RoundingAdjustment":{"Map":{"d":["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]},"Id":"Selected","RowLength":"23","ColumnLength":"1"},"Results":null},"CreateDate":"0001-01-01T00:00:00","Marketing":{"Upsells":null,"CrossSells":null},"Selected":"true","ParentItemID":"00000000-0000-0000-0000-000000000000","Manufacturer":"Dell","ShippingCost":"0","AssociatedItems":null,"PriceAdjustments":null,"MarketablePriceAdjustments":null,"SkipDiscount":"false","Discountable":"false","DisplayCurrencyCode":"MXN","IsFixedOrderCode":"false","ProductLineId":"1","PriceAdjustmentsToPreapply":null,"SalesReps":null,"IsMissingCostData":"false","Language":"ES","ShippingInformationId":"00000000-0000-0000-0000-000000000000","BillingContactId":"00000000-0000-0000-0000-000000000000","AppliedHedgeRate":"0","AppliedUplift":"0","CatalogId":"323223","BusinessUnitID":"3232","IsLeadTimeValid":"false","Country":"MX","Currency":"MXN","Region":"la","ExtendedProperties":null,"Personalization":null,"CloneSetId":"00000000-0000-0000-0000-000000000000","Attributes":null,"ValidationResult":{"IsValid":"true","Messages":null},"IsTied":"false","IsAPOSSku":"false","IsEligibleForManualServiceAdjustment":"false","LeadTimeDetails":{"BaseDate":"2010-10-05T19:51:29.5503377+05:30","LeadTimeUnits":{"LeadTimeUnit":[{"UnitType":"CustKitOpt","UnitValue":"3"},{"UnitType":"Financial","UnitValue":"0"},{"UnitType":"Notification","UnitValue":"0"},{"UnitType":"ManufacturingHoliday","UnitValue":"0"}]}},"Service":null,"ConfigDetails":{"Id":"lo160bes","UniqueId":"f27f0131-4ca4-4f08-9dd8-3d84a5119c35","CfiComments":null,"SINumber":null,"ParentModuleID":"0","CustomerSetId":"mxdhs1s","Currency":"MXN","Language":"21","ChassisId":"3733","CatalogId":"323223","CompanyNumber":"23","BrandId":"2","FamilyId":"1774","MaxPage":"33757","Modules":{"Module":[{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"OptiPlex  160","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m1/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"OptiPlex 160 Single Core Tiny Computadora Up to 87 Percent Efficient PSU","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"-1271.83893894069","Value":"-1271.84","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"536.58","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"536.58","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"1354.2903000000000","Value":"1354.29","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"54.171612000000000","Value":"54.17","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"8.66745792000000000","Value":"8.67","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"54.171612000000000","Type":"IVA","Amount":"8.67","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"216.686448000000000","Value":"216.69","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"1354.2903000000000","Type":"IVA","Amount":"216.69","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"21.4633409096","Value":"21.46","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"3.434134545536","Value":"3.43","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"21.4633409096","Type":"IVA","Amount":"3.43","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"-203.4942302305104","Value":"-203.49","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"-1271.83893894069","Type":"IVA","Amount":"-203.49","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"2","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"ODSKTP","DutyClass":"ODSKTP","TaxClass":null,"Class":"E|002","OriginalPrice":"656.24","PlacedPrice":"-1271.83893894069","UnitWeight":"11","UnitCost":"536.58352274","CompensationCost":"0","Id":"224-3406","LegalEntity":"DMLP ","DiscountClass":"A","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"true","Attributes":null,"Status":"B","PriceVectorId":"0"}},"Id":"FX16PEL","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"1","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"1","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"1","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Procesador","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m2/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Intel&#174; Atom&#153; 230 Single Core","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"2152.4672","Value":"2152.47","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"1832.08","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"1832.08","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"73.283127896","Value":"73.28","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"11.72530046336","Value":"11.73","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"73.283127896","Type":"IVA","Amount":"11.73","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"344.394752","Value":"344.39","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"2152.4672","Type":"IVA","Amount":"344.39","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"PP000","OriginalPrice":"2152.4672","PlacedPrice":"2152.4672","UnitWeight":"4","UnitCost":"1832.0781974","CompensationCost":"0","Id":"311-9802","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"1"}},"Id":"23016PC","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"2","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"2","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"2","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Sistema Operativo","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m11/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Windows® 7 Home Premium Original, con medios, edición de 32 bits, en Español","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":[{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0.15","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0.15","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.006069792","Value":"0.01","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00097116672","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.006069792","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":null,"DutyClass":null,"TaxClass":null,"Class":"LB000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0.1517448","CompensationCost":"0","Id":"330-8896","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"2"},{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"918.736","Value":"918.74","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"973.02","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"973.02","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"38.9209225888","Value":"38.92","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"6.227347614208","Value":"6.23","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"38.9209225888","Type":"IVA","Amount":"6.23","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"146.99776","Value":"147.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"918.736","Type":"IVA","Amount":"147.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":null,"DutyClass":null,"TaxClass":null,"Class":"SE000","OriginalPrice":"918.736","PlacedPrice":"918.736","UnitWeight":"1.01","UnitCost":"973.02306472","CompensationCost":"0","Id":"421-1925","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"3"}]},"Id":"W7HP3S","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"11","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"11","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"3","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Memoria","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m3/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"1.0GB DDR2 Non-ECC SDRAM, 800MHz, (1DIMM)","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"787.488","Value":"787.49","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"221.29","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"221.29","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"8.851780","Value":"8.85","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"1.41628480","Value":"1.42","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"8.851780","Type":"IVA","Amount":"1.42","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"125.99808","Value":"126.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"787.488","Type":"IVA","Amount":"126.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"IC000","OriginalPrice":"787.488","PlacedPrice":"787.488","UnitWeight":"0.6","UnitCost":"221.2945","CompensationCost":"0","Id":"311-7348","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"4"}},"Id":"1G2N81","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"3","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"3","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"4","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Disco Duro","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m8/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Disco Duro SATA 2.5\" de 80GB  -  8MB DataBurst Caché&#153;","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"1968.72","Value":"1968.72","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"632.00","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"632.00","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"25.2801272824","Value":"25.28","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"4.044820365184","Value":"4.04","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"25.2801272824","Type":"IVA","Amount":"4.04","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"314.9952","Value":"315.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"1968.72","Type":"IVA","Amount":"315.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"HD000","OriginalPrice":"1968.72","PlacedPrice":"1968.72","UnitWeight":"3","UnitCost":"632.00318206","CompensationCost":"0","Id":"341-7498","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"5"}},"Id":"80S102","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"8","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"8","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"5","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Monitor","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m5/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Sin Monitor","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0.01","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0.01","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.000505816","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00008093056","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.000505816","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00   ","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"MO000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0.0126454","CompensationCost":"0","Id":"320-3704","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"6"}},"Id":"NMON","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"5","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"5","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"6","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Dell Energy Smart","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m25/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Dell Energy Smart habilitado","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"AC000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0","CompensationCost":"0","Id":"330-4830","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"7"}},"Id":"ESMART","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"25","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"25","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"8","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Ship Packaging Options","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m41/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Shipping Material for System, Tiny Computadora, OptiPlex","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":[{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"62.78","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"62.78","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"2.5111741136","Value":"2.51","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.401787858176","Value":"0.40","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"2.5111741136","Type":"IVA","Amount":"0.40","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"MN000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"1","UnitCost":"62.77935284","CompensationCost":"0","Id":"311-9163","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"8"},{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":null,"DutyClass":null,"TaxClass":null,"Class":"AC000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0","CompensationCost":"0","Id":"330-7422","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"9"}]},"Id":"TINYSHP","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"41","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"41","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"9","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Tarjeta de Video","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m6/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"SIS&#174; Mirage 3, Video Integrado","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"VB000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0","CompensationCost":"0","Id":"320-7038","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"10"}},"Id":"INTVID","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"6","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"6","CategoryPageNum":"1","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"11","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Security Software","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m37/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Trend Micro Internet Security en español, 30 días","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":null,"DutyClass":null,"TaxClass":null,"Class":"SA000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0.05","UnitCost":"0","CompensationCost":"0","Id":"410-2903","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"11"}},"Id":"TREN30S","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"37","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"37","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"false","Sequence":"12","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Bocinas","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m18/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Sin Bocinas","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"GM000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0","CompensationCost":"0","Id":"313-4825","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"12"}},"Id":"NSPK","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"18","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"18","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"13","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Teclado","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m4/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Teclado Dell USB Silencioso, Español","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"131.248","Value":"131.25","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"69.68","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"69.68","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"2.78704616","Value":"2.79","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.4459273856","Value":"0.45","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"2.78704616","Type":"IVA","Amount":"0.45","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"20.99968","Value":"21.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"131.248","Type":"IVA","Amount":"21.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"KB000","OriginalPrice":"131.248","PlacedPrice":"131.248","UnitWeight":"2","UnitCost":"69.676154","CompensationCost":"0","Id":"330-1992","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"13"}},"Id":"QUSBS","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"4","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"4","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"14","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Mouse","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m12/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Mouse Dell Óptico USB con Scroll","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"65.624","Value":"65.62","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"23.01","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"23.01","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.92058512","Value":"0.92","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.1472936192","Value":"0.15","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.92058512","Type":"IVA","Amount":"0.15","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"10.49984","Value":"10.50","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"65.624","Type":"IVA","Amount":"10.50","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"EG000","OriginalPrice":"65.624","PlacedPrice":"65.624","UnitWeight":"2","UnitCost":"23.014628","CompensationCost":"0","Id":"330-2733","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"14"}},"Id":"USBOBLK","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"12","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"12","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"15","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Recursos","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m27/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"DVD de Recursos contiene Diagnósticos y Drivers","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"15.87","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"15.87","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.6346979168","Value":"0.63","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.101551666688","Value":"0.10","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.6346979168","Type":"IVA","Amount":"0.10","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"MN000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0.5","UnitCost":"15.86744792","CompensationCost":"0","Id":"330-3686","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"15"}},"Id":"RDVD","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"27","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"27","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"17","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Documentación","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m21/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Cable de Corriente 125 Voltios y Documentación en Español","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":[{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"8.93","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"8.93","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.357106096","Value":"0.36","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.05713697536","Value":"0.06","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.357106096","Type":"IVA","Amount":"0.06","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"CA000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"1","UnitCost":"8.9276524","CompensationCost":"0","Id":"330-1711","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"16"},{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"6.67","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"6.67","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0.2669191032","Value":"0.27","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.042707056512","Value":"0.04","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0.2669191032","Type":"IVA","Amount":"0.04","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"3","FulfillmentLocation":"00","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"MN000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0.5","UnitCost":"6.67297758","CompensationCost":"0","Id":"330-1713","LegalEntity":"DMLP ","DiscountClass":"V","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"17"}]},"Id":"DOCSNA","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"21","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"21","CategoryPageNum":"2","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"false","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"20","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Soporte de Hardware","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m29/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"3  Año de garantía limitada, Servicio en el sitio con respuesta el siguiente día laborable.","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":[{"WtyPriceAmt":"1","RollupFlg":"true","RevAgencyFlg":"false","IsServiceSku":"true","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0.13","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0.13","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0","Value":"0","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"8","FulfillmentLocation":"LX","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"SJ000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0.126454","CompensationCost":"0","Id":"916-8318","LegalEntity":"DELL","DiscountClass":"Z","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","ContractTypeCode":"9E","ContractLaborCode":"S","Attributes":null,"Status":"B","PriceVectorId":"18"},{"WtyPriceAmt":"12","RollupFlg":"true","RevAgencyFlg":"false","IsServiceSku":"true","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"305.92727568","Value":"305.93","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"212.70","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"162.11","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0","Value":"0","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"48.9483641088","Value":"48.95","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"305.92727568","Type":"IVA","Amount":"48.95","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"8","FulfillmentLocation":"LX","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"SJ000","OriginalPrice":"305.92727568","PlacedPrice":"305.92727568","UnitWeight":"0","UnitCost":"162.114028","CompensationCost":"212.695628","Id":"949-0937","LegalEntity":"DELL","DiscountClass":"Z","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","ContractTypeCode":"9I","ContractLaborCode":"S","Attributes":null,"Status":"B","PriceVectorId":"19"},{"WtyPriceAmt":"29","RollupFlg":"true","RevAgencyFlg":"false","IsServiceSku":"true","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"795.12400864","Value":"795.12","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"421.34","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"421.34","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0","Value":"0","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"127.2198413824","Value":"127.22","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"795.12400864","Type":"IVA","Amount":"127.22","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"8","FulfillmentLocation":"LX","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"ZV020","OriginalPrice":"795.12400864","PlacedPrice":"795.12400864","UnitWeight":"0","UnitCost":"421.344728","CompensationCost":"0","Id":"949-3542","LegalEntity":"UNY","DiscountClass":"Z","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","ContractTypeCode":"9E","ContractLaborCode":"C","Attributes":null,"Status":"B","PriceVectorId":"20"},{"WtyPriceAmt":"1","RollupFlg":"true","RevAgencyFlg":"false","IsServiceSku":"true","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"0.13","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"0.13","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"0","Value":"0","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"8","FulfillmentLocation":"LX","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"ZV000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"0.126454","CompensationCost":"0","Id":"949-7910","LegalEntity":"UNY","DiscountClass":"Z","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","ContractTypeCode":"9I","ContractLaborCode":"C","Attributes":null,"Status":"B","PriceVectorId":"21"}]},"Id":"L3OS","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"29","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"29","CategoryPageNum":"3","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"true","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"21","ModuleType":"Standard"},{"IsMobileBroadband":"false","IsSubscriptionBilling":"false","CanContainHiddenOptions":"false","IsFlavoredDriver":"false","Description":"Procesamiento Internacional","Options":{"Option":{"PriceAdjustments":null,"InternalDNCIdentifierPrefix":"p1/b2/m30/","AllowMultiQuantity":"false","FilterType":"Show","PriorityBuildLeadTimeDays":"1","FromChassis":"false","Description":"Procesamiento Internacional","CfiFlag":"false","Selected":"true","IsVisible":"false","OriginalPrice":"0","LeadTimeDays":"0","UnitCost":"0","Skus":{"Sku":{"WtyPriceAmt":"0","RollupFlg":"false","RevAgencyFlg":"false","IsServiceSku":"false","RecurringBillingFlag":"false","IncludeServiceTagInfo":"true","IsFuturistic":"false","IsHardware":"false","IsMobileBroadband":"false","Price":{"UnRoundedValue":"0","Value":"0","PriceType":"BasePrice","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":[{"Name":"CostPrice","Value":"240.26","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"},{"Name":"DutyCost","Value":"240.26","PriceVariableType":"DerivedValue","Equation":null,"IsCachable":"true","IsPrice":"true"}]},"AssociatedPrices":{"Price":[{"UnRoundedValue":"0","Value":"0","PriceType":"Shipping","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":[{"UnRoundedValue":"0.00","Value":"0.00","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.0000","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Description":"USD --> MXN Hedge Rate: 13.679700000","Id":"Shipping"},{"UnRoundedValue":"9.610504","Value":"9.61","PriceType":"Surcharge","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":null,"AssociatedPrices":{"Price":{"@xsi:type":"TaxTypeOf","UnRoundedValue":"1.53768064","Value":"1.54","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"9.610504","Type":"IVA","Amount":"1.54","Rate":"0.16","AssociatedTaxes":null}},"Description":"DUTY","Id":"SurchargeDUTY"},{"@xsi:type":"TaxTypeOf","UnRoundedValue":"0.00","Value":"0.00","PriceType":"Tax","RoundingMethod":"RoundTowardLarger","IsHedgeRateApplied":"false","AssoicatedVariables":{"PriceVariable":{"Name":"IVARate","Value":"0.16","PriceVariableType":"Value","Equation":null,"IsCachable":"true","IsPrice":"false"}},"AssociatedPrices":null,"Id":"|TAX","TaxableAmount":"0","Type":"IVA","Amount":"0.00","Rate":"0.16","AssociatedTaxes":null}]},"Id":"BasePrice"},"IsHandledSeperately":"false","TaxCode":null,"TaxRollupCode":null,"ItemTypeCode":"1","FulfillmentLocation":"LX   ","Quantity":"1","ManufacturingLeadTimeDays":"0","CfiLeadTimeDays":"0","ShipClass":"NONE","DutyClass":"NONE","TaxClass":null,"Class":"OA000","OriginalPrice":"0","PlacedPrice":"0","UnitWeight":"0","UnitCost":"240.2626","CompensationCost":"0","Id":"499-9994","LegalEntity":"DMLP ","DiscountClass":"X","IsSystemTied":"false","IsSparePart":"false","ContractTerminationDate":"0001-01-01T00:00:00","CustomFields":null,"IsFlexi":"false","IsShipping":"false","IsDelivery":"false","SystemFlag":"false","Attributes":null,"Status":"B","PriceVectorId":"22"}},"Id":"INTER","BundleID":null,"IsUpsell":"false","IsHero":"false","Quantity":"1","IsExtendedOption":"false","Attributes":null,"CompositeItems":null,"ParentModuleId":"30","EmbeddedModules":null,"CustomizationId":"0","IsCustomizable":"false","CustomizationOptionType":"Standard"}},"Id":"30","CategoryPageNum":"3","IsTied":"true","IsVisible":"true","AllowsDiscount":"true","IsServiceModule":"true","IsIncludedInPrice":"true","IsRequired":"true","Sequence":"26","ModuleType":"Standard"}]},"country":"MX","language_id":"ES","ValidationMessages":null,"OutsideConnectedInfos":null,"BundleGroups":null},"OrderCode":"lo160bes","Title":"Optiplex 160","FamilyName":"Optiplex 160","OriginalPrice":"5853.5","DisplayActiveUpsell":"false","SourceConfigurator":"eConfig","PriorityBuildable":"false","PriorityBuildLeadTime":"0","SkipMfgValidation":"false","IsDefaultConfiguration":"false","ConfigItemType":"Regular","IsDellwareOnly":"false","IsDummyConfig":"false","AssociationType":"Default","SlotLocation":"0","ProductType":"Desktop","IsExistingProduct":"false","FixedOrderCodeAdjustment":"0","CanSkip":"false","CanChangeCFI":"true","HasMobileBroadband":"false","IsConfigValidated":"false","IsDOMSValidated":"false","MappingExceptions":null,"ConfigValidationErrorsExist":"false","TiedBuildTime":"0","TiedPBBuildTime":"0","NonTiedBuildTime":"0","PriorityBuildTime":"0","PriorityBuildEnabled":"false","PriorityApplied":"false","QualifiesForContractDiscount":"false","SegmentName":"DHS"}]},"LeadTimes":null,"SkipFlags":null,"ExtendedProperties":{"GenericField":[{"FieldKey":"ActiveItemId","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"IsBasketQuoted","FieldValue":"true","ExtendedProperties":null},{"FieldKey":"EnableItemLevel","FieldValue":"false","ExtendedProperties":null},{"FieldKey":"IsBasketValid","FieldValue":"True","ExtendedProperties":null},{"FieldKey":"QuoteNotes","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"PaymentMethod","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"ProductUsage","FieldValue":"Home","ExtendedProperties":null},{"FieldKey":"EndUserCountry","FieldValue":"Mexico","ExtendedProperties":null},{"FieldKey":"NFMirror","FieldValue":"NO","ExtendedProperties":null},{"FieldKey":"OrderActivity","FieldValue":"OrderCreate","ExtendedProperties":null},{"FieldKey":"SpecialInstructions","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"AdditionalNotes","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"BillAddressVerified","FieldValue":"True","ExtendedProperties":null},{"FieldKey":"ShipAddressVerified","FieldValue":"True","ExtendedProperties":null},{"FieldKey":"NFcustomerNumber","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"NFType","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"NFSequenceNumber","ExtendedProperties":null},{"FieldKey":"EmailFormat","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"EmailType","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"EmailAdress","FieldValue":null,"ExtendedProperties":null},{"FieldKey":"IsPoValueEdited","FieldValue":"true","ExtendedProperties":null}]},"ValidationResult":{"IsValid":"true","Messages":null},"Selected":"false","FulfillmentUnits":{"FulfillmentUnit":[{"Id":"21bb2240-7312-4d5e-aff6-06d173a794a7","ComplexConfigId":"0","IRN":"-0","IsComplex":"false","BackendResponses":{"BackendResponse":{"DPID":"2000001108743","OrderFormId":"4643b1d1-bc4f-47ff-8cf0-932342dc083a","OrderRequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","BusinessUnitId":"3232","OmsSystemId":"LSAL","Success":"false","EDDInfos":null,"BackendSalesRep":{"SalesRepNum":"9999","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0","UpdateSystem":"GCM"},"BackendQuote":{"QuoteNum":"739390","TranCurrencyCode":"MXN","SubtotalTranAmt":"0","ShippingChgTranAmt":"0.00","TotalFeeTranAmt":"0.00","SalesTaxTranAmt":"0","TotalTranAmt":"0","BackendQuoteShipByDate":"0001-01-01T00:00:00","LeadTimeDate":"0001-01-01T00:00:00","ShippingSequenceNum":"0","StopAtQuote":"false","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0","UpdateSystem":"GCM","ByPassDiscountApproval":"false","TotalMarginAmt":"0"},"BackendOrders":null,"BackendErrors":{"BackendError":[{"ErrorType":"UnknownError","ErrorSourceFlag":"D","ErrorModuleName":"DOMS4020","ErrorFieldName":"                      421-1925","ErrorFieldIndex":"00","ErrorDesc":"An unrecognizable item has been entered into order                                                                      ","ErrorTypeCode":"W","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0"},{"ErrorType":"UnknownError","ErrorSourceFlag":"D","ErrorModuleName":"DOMS129A","ErrorCode":"DM129A06","ErrorFieldIndex":"00","ErrorDesc":"DOMS exchange-rate doesn't mach requested exchange-rate                                                                 ","ErrorTypeCode":"W","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0"},{"ErrorType":"UnknownError","ErrorSourceFlag":"D","ErrorModuleName":"DOMS1200","ErrorFieldName":"PAYMENT-TERM-CODE             ","ErrorFieldIndex":"01","ErrorDesc":"Invalid Payment Term for this Paycode                                                                                   ","ErrorTypeCode":"E","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0"}]},"CreateDate":"2010-10-05T09:23:28","ModifyDate":"0001-01-01T00:00:00"}},"DispositionCode":"AVL","PaymentImpacts":{"PaymentMethodImpact":{"PaymentMethodId":"eedf37ac-bd0e-4321-b195-eee29ed6d7c0","Impact":"11655.12"}},"FulfillmentItemInformation":{"FulfillmentItemInformation":{"ItemId":"98ce44ed-72ee-4da9-9aca-0349c592eb1e","Quantity":"1","FulfillmentSkuInformation":null,"StartTieGroup":"1"}},"StopAtQuote":"false","Frictionless":"true","TaskCodesToBeAdded":null,"TaskCodesToBeReleased":null,"Selected":{"PriceMap":{"Map":{"d":["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]},"Id":"98ce44ed-72ee-4da9-9aca-0349c592eb1e","RowLength":"23","ColumnLength":"1"}},"Results":{"PriceMap":{"Map":{"d":["8385.41","307.83","1354.29","1341.65","0","0","0","6999.55","0","0","216.69","0","0","49.25","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]},"Id":"Fulfillment Unit Totals","RowLength":"39","ColumnLength":"1"}}},{"Id":"7340c591-454a-4965-a5e1-c4f9b7ca1e51","ComplexConfigId":"0","IRN":"-1","IsComplex":"false","BackendResponses":{"BackendResponse":{"DPID":"2000001108743","OrderFormId":"4643b1d1-bc4f-47ff-8cf0-932342dc083a","OrderRequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","BusinessUnitId":"3232","OmsSystemId":"LSAL","Success":"false","BackendSalesRep":{"SalesRepNum":"9999","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0","UpdateSystem":"GCM"},"BackendQuote":{"QuoteNum":"739391","TranCurrencyCode":"MXN","SubtotalTranAmt":"0","ShippingChgTranAmt":"0.00","TotalFeeTranAmt":"0.00","SalesTaxTranAmt":"0","TotalTranAmt":"0","BackendQuoteShipByDate":"0001-01-01T00:00:00","LeadTimeDate":"0001-01-01T00:00:00","ShippingSequenceNum":"0","StopAtQuote":"false","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0","UpdateSystem":"GCM","ByPassDiscountApproval":"false","TotalMarginAmt":"0"},"BackendErrors":{"BackendError":[{"ErrorType":"UnknownError","ErrorSourceFlag":"D","ErrorModuleName":"DOMS4020","ErrorFieldIndex":"00","ErrorDesc":"An unrecognizable item has been entered into order                                                                      ","ErrorTypeCode":"W","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0"},{"ErrorType":"UnknownError","ErrorSourceFlag":"D","ErrorModuleName":"DOMS129A","ErrorCode":"DM129A06","ErrorFieldIndex":"00","ErrorDesc":"DOMS exchange-rate doesn't mach requested exchange-rate                                                                 ","ErrorTypeCode":"W","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0"},{"ErrorType":"UnknownError","ErrorSourceFlag":"D","ErrorModuleName":"DOMS1200","ErrorFieldName":"PAYMENT-TERM-CODE             ","ErrorFieldIndex":"01","ErrorDesc":"Invalid Payment Term for this Paycode                                                                                   ","ErrorTypeCode":"E","CreateDate":"0001-01-01T00:00:00","ModifyDate":"0001-01-01T00:00:00","UpdateBy":"0"}]},"CreateDate":"2010-10-05T09:23:33","ModifyDate":"0001-01-01T00:00:00"}},"DispositionCode":"AVL","PaymentImpacts":{"PaymentMethodImpact":{"PaymentMethodId":"eedf37ac-bd0e-4321-b195-eee29ed6d7c0","Impact":"8638.37"}},"FulfillmentItemInformation":{"FulfillmentItemInformation":{"ItemId":"70780881-f945-4b60-8562-81df96b2cd43","Quantity":"1","FulfillmentSkuInformation":null,"StartTieGroup":"1"}},"StopAtQuote":"false","Frictionless":"true","TaskCodesToBeAdded":null,"TaskCodesToBeReleased":null,"Selected":{"PriceMap":{"Map":{"d":["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]},"Id":"70780881-f945-4b60-8562-81df96b2cd43","RowLength":"23","ColumnLength":"1"}},"Results":{"PriceMap":{"Map":{"d":["5853.50","239.06","1354.29","936.57","0","0","0","5256.63","0","0","216.69","0","0","38.26","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]},"Id":"Fulfillment Unit Totals","RowLength":"39","ColumnLength":"1"}}}]},"PONumber":null,"PODateReceived":"2010-10-05T19:49:47+05:30"}},"Id":"f33f4558-9c99-4d66-818d-3b942fbe6d3e","DPID":"2000001108743","LinkToCancelledDPID":"0","PaymentMethods":{"BasicPaymentMethod":{"@xsi:type":"LaCreditCardPayment","ID":"eedf37ac-bd0e-4321-b195-eee29ed6d7c0","PaymentType":"CC","TypeOfFunds":"Business","Amount":"20293.49","Terms":"AT","MAGuid":"00000000-0000-0000-0000-000000000000","BackendPaycode":"V","ExtendedProperties":null,"IsValid":"false","DisplayCID":"true","CCID_Illegible":"false","CardNumber":"xxxxxxxxxxxx1111","CardType":"VISA","CardID":null,"BillingContact":{"Name":{"First":"ANANYA","MI":null,"Last":"BALAJI","MAGuid":"00000000-0000-0000-0000-000000000000"},"HasAddress":"false","Id":"5920885e-2ac8-49f5-a063-6e0dbcd585ab","CustomerType":"NONE","EmailType":"Text","OrganizationInfo":null,"Address":{"Id":"ca91e502-9c6a-44fc-8641-d44abfeaffce","Line1":"1","Line2":"2","Region":"MEX","City":"CHENNAI","PostalCode":"56789","Country":"MX","IsAddressVerified":"false","IsValid":"false","MAGuid":"00000000-0000-0000-0000-000000000000","AddressType":"General","AddressStatus":"Active"},"EmailAddress":{"Email":null},"RefEmailAddress":{"Email":null},"AdditionalEmails":null,"PhoneContacts":{"PhoneNumber":{"MediaType":"PHH","CountryCode":"52","AreaCode":"444","Number":"3383034","Extension":null,"ID":"923465a5-7d94-4d0a-912f-41bd9d81612c","SequenceID":"0","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"}},"OptIn":"false","BestTimeToCall":"AnyTime","ContactType":"UNDEFINED","BackendCustomerNumber":"-1","SequenceID":"0","MAGuid":"00000000-0000-0000-0000-000000000000","IsValid":"false"},"CardPhone":{"MediaType":"PHH","ID":"e87f465b-86a0-4988-9a3d-3eb83257cda4","SequenceID":"0","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},"DailyLimit":"0","ExpMonth":"3","ExpYear":"2015","AvailableBalance":"0","RemainingBalance":"0","Percent":"0","SaveCCInfo":"false","CAVV":null,"InstallmentValue":"0","NumberOfInstallments":"1","BankName":null,"CompanyName":null,"PromoCode":"NOPRMO"}},"OrderContact":{"Name":{"Prefix":"JR","First":"ANANYA","Last":"BALAJI","Suffix":null,"MAGuid":"00000000-0000-0000-0000-000000000000"},"Language":"ES","Currency":"MXN","HasAddress":"true","Id":"70926aa6-2f89-4f95-9d22-38df7dc4b743","CustomerType":"NONE","EmailType":"Text","OrganizationInfo":{"Name":"ANANYA BALAJI"},"CompanyName":"ANANYA BALAJI","Address":{"Id":"b5057d6c-ce52-4b1a-a7aa-8023b3b5ca63","AddressId":"1076695","Line1":"1","Line2":"2","Line3":null,"Region":"MEX","City":"CHENNAI","PostalCode":"56789","Country":"MX","IsAddressVerified":"true","IsValid":"false","MAGuid":"00000000-0000-0000-0000-000000000000","AddressType":"General","AddressStatus":"Active"},"EmailAddress":{"Email":null},"RefEmailAddress":{"Email":null},"AdditionalEmails":null,"PhoneContacts":{"PhoneNumber":[{"MediaType":"PHW","CountryCode":"52","AreaCode":"444","Number":"3383034","ID":"d6e06326-d932-451d-8df7-6600d95bfb05","SequenceID":"2021043","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},{"MediaType":"FAXW","CountryCode":"52","AreaCode":"444","Number":"3383034","ID":"744f62e2-bcf9-44b8-bad2-29c21886345c","SequenceID":"2021044","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"}]},"OptIn":"false","BestTimeToCall":"AnyTime","ContactType":"UNDEFINED","ContactId":"1048317","BackendCustomerNumber":"6368","SequenceID":"0","MAGuid":"00000000-0000-0000-0000-000000000000","IsValid":"true","TaxIdPrimary":"1234567890"},"PriceAdjustments":null,"ExportForm":{"Contact":{"Name":{"Prefix":"JR","First":"ANANYA","Last":"BALAJI","Suffix":null,"MAGuid":"00000000-0000-0000-0000-000000000000"},"Language":"ES","Currency":"MXN","HasAddress":"true","Id":"3c440a25-6646-4b78-80d0-83bea0861d81","CustomerType":"NONE","EmailType":"Text","OrganizationInfo":{"Name":"ANANYA BALAJI "},"CompanyName":"ANANYA BALAJI ","Address":{"Id":"015a94b9-a2db-4923-adc8-8e0ee8f5d117","AddressId":"1078470","Line1":"mavely","Line2":"sjdksjdkj","Line3":"MNDSMFCSNDF","Region":"AGS","City":"BNAGALORE","PostalCode":"19879877","Country":"MX","IsAddressVerified":"true","IsValid":"false","MAGuid":"00000000-0000-0000-0000-000000000000","AddressType":"General","AddressStatus":"Active"},"EmailAddress":{"Email":null},"RefEmailAddress":{"Email":null},"AdditionalEmails":null,"PhoneContacts":{"PhoneNumber":[{"MediaType":"PHW","CountryCode":"52","AreaCode":"444","Number":"3383034","ID":"ec6c47f2-3d49-4c4d-84ed-32ce8ba61686","SequenceID":"2021045","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},{"MediaType":"FAXW","CountryCode":"52","AreaCode":"444","Number":"3383034","ID":"5743ca18-b2e5-4e38-9c6f-bd9a71c7a97d","SequenceID":"2021046","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"}]},"OptIn":"false","BestTimeToCall":"AnyTime","ContactType":"UNDEFINED","ContactId":"1048318","BackendCustomerNumber":"6368","SequenceID":"0","MAGuid":"00000000-0000-0000-0000-000000000000","IsValid":"true","TaxIdPrimary":"1234567890"},"Questions":{"Question":[{"ID":"country","QuestionText":"Country?","QuestionFormat":"SingleChoice","Answer":"Mexico"},{"ID":"intended_use","QuestionText":"How will these products be used?","QuestionFormat":"SingleChoice","Answer":"Home"}]},"SameAddressAsShipping":"false"},"ExportIntent":"Yes","ReceiveConfirmationEmail":"false","DateCreated":"2010-10-05T19:51:53.5003377+05:30","DateModified":"2010-10-05T19:51:53.5003377+05:30","ExpirationDays":"90","RetentionDays":"90","Creator":"LA-9999","CartType":"O","QuoteNumber":"1000011282927","QuoteVersionNumber":"1","InternalQuoteId":"1000011282927","QuoteStatus":"QUOTED","QuoteValidityDays":"7","ProcessStatus":"A","SolutionVersion":"0","SalesReps":{"SalesRepInfo":[{"Name":{"First":"Sushmitha","Last":"Mogula","MAGuid":"00000000-0000-0000-0000-000000000000"},"ID":"723861","SalesPersonNumber":"9999","Phone":{"MediaType":"PHH","Extension":"78193","ID":"7deef712-d3f5-476e-9892-e1be9bb16384","SequenceID":"0","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},"Extension":"78193","FaxNumber":{"MediaType":"PHH","ID":"1087c6b6-5c2a-4031-a1b2-1f0a6a55bbf6","SequenceID":"0","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},"Source":"Customer","Email":{"Email":"Sushmitha_Mogula@DellTeam.com","MailToName":"Sushmitha_Mogula","Host":"DellTeam.com"},"SalesRepType":"Processor"},{"Name":{"First":"Sushmitha","Last":"Mogula","MAGuid":"00000000-0000-0000-0000-000000000000"},"ID":"723861","SalesPersonNumber":"9999","Phone":{"MediaType":"PHH","Extension":"78193","ID":"7deef712-d3f5-476e-9892-e1be9bb16384","SequenceID":"0","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},"Extension":"78193","FaxNumber":{"MediaType":"PHH","ID":"1087c6b6-5c2a-4031-a1b2-1f0a6a55bbf6","SequenceID":"0","Required":"false","MAGuid":"00000000-0000-0000-0000-000000000000"},"Source":"Customer","Email":{"Email":"Sushmitha_Mogula@DellTeam.com","MailToName":"Sushmitha_Mogula","Host":"DellTeam.com"},"SalesRepType":"Primary"}]},"CatalogId":"0","CountryCode":"MX","IsServiceEnabled":"false","Connections":null,"Attributes":null,"ProcessingResults":{"ProcessingResult":[{"ResultSource":"GCM_Pipeline","ResultType":"Informational","ErrorCategory":"I","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"CreateOrder","LongDesc":"CreateOrder request received.","ResultData":{"KeyValuePair":[{"Key":"AllowICodedSkus","Value":"False"},{"Key":"PromotionGracePeriod","Value":"2"},{"Key":"SkipPipelineForQuote","Value":"False"},{"Key":"AllowDCodedSkus","Value":"False"},{"Key":"AccountStatus","Value":"Current"},{"Key":"CurrentUserLogon","Value":"sushmitha_mogula"},{"Key":"FulfillmentUnitID1","Value":"795bfa35-f7e9-4d35-b1cb-9e1287112b43"},{"Key":"FulfillmentUnitID2","Value":"ed419a77-6dee-41be-9956-fc136461a3ca"},{"Key":"ReasonCode","Value":null},{"Key":"Comment","Value":null},{"Key":"Disposition","Value":null},{"Key":"CurrentOwner","Value":null},{"Key":"UserRole","Value":null}]},"ProcessedUTCTime":"2010-10-05T14:21:55.5220183Z"},{"ResultSource":"Dell.Commerce.GCM.OrderStatus.OrderStatusManager","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"f33f4558-9c99-4d66-818d-3b942fbe6d3e","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"SUCCESS","LongDesc":"SUCCESS","ResultData":null,"ProcessedUTCTime":"0001-01-01T00:00:00"},{"ResultSource":"Order Validator","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = ORDVLD","LongDesc":"GCM Audit: ActionCode = ORDVLD; Comment = Order validated.","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"ORDVLD"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"Order validated."},{"Key":"dispositionCode","Value":"INW"},{"Key":"currentOwner","Value":"System"},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"-1"}]},"ProcessedUTCTime":"2010-10-05T14:21:55.6001463Z"},{"ResultSource":"Product.Validator","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"Product Validator Passed","ResultData":null,"ProcessedUTCTime":"2010-10-05T14:21:55.9907863Z"},{"ResultSource":"Product Validator","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"GCM ProductValidator passed.","LongDesc":"GCM ProductValidator passed.","ResultData":null,"ProcessedUTCTime":"2010-10-05T14:21:56.0064119Z"},{"ResultSource":"Price Validator","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = PRVAL","LongDesc":"GCM Audit: ActionCode = PRVAL; Comment = Price validation bypassed for request CreateOrder.","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"PRVAL"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"Price validation bypassed for request CreateOrder."},{"Key":"dispositionCode","Value":"INW"},{"Key":"currentOwner","Value":"System"},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"-1"}]},"ProcessedUTCTime":"2010-10-05T14:21:56.0064119Z"},{"ResultSource":"Order Persister","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = OGSVD","LongDesc":"GCM Audit: ActionCode = OGSVD; Comment = Saved OrderGroup in Sales Order database. Called by Order Persister.","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"OGSVD"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"Saved OrderGroup in Sales Order database. Called by Order Persister."},{"Key":"dispositionCode","Value":"INW"},{"Key":"currentOwner","Value":"System"},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"2000001108743"}]},"ProcessedUTCTime":"2010-10-05T14:21:58.4283799Z"},{"ResultSource":"Order Persister","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"Order Persister passed.","LongDesc":"Order Persister passed.","ResultData":null,"ProcessedUTCTime":"2010-10-05T14:22:03.1629367Z"},{"ResultSource":"Order Persister","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = ORDPER","LongDesc":"GCM Audit: ActionCode = ORDPER; Comment = Order Persister finished processing.","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"ORDPER"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"Order Persister finished processing."},{"Key":"dispositionCode","Value":"INW"},{"Key":"currentOwner","Value":"System"},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"2000001108743"}]},"ProcessedUTCTime":"2010-10-05T14:22:03.1629367Z"},{"ResultSource":"Splitting","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"ORDSPLIT","LongDesc":"Match found in split category. Item is: 98ce44ed-72ee-4da9-9aca-0349c592eb1e and Split Bucket ID: NEWOPTI&CatalogID&323223","ResultData":{"KeyValuePair":{"Key":"ActionCode","Value":"ORDSPLIT"}},"ProcessedUTCTime":"2010-10-05T14:22:04.2567287Z"},{"ResultSource":"Splitting","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"ORDSPLIT","LongDesc":"Match found in split category. Item is: 70780881-f945-4b60-8562-81df96b2cd43 and Split Bucket ID: NEWOPTI&CatalogID&323223","ResultData":{"KeyValuePair":{"Key":"ActionCode","Value":"ORDSPLIT"}},"ProcessedUTCTime":"2010-10-05T14:22:04.2567287Z"},{"ResultSource":"Splitting","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"ORDSPLIT","LongDesc":"Splitting on Max Line Items because Item Count and DoQtySplit is true and greater than MaxItems.","ResultData":{"KeyValuePair":{"Key":"ActionCode","Value":"ORDSPLIT"}},"ProcessedUTCTime":"2010-10-05T14:22:04.2567287Z"},{"ResultSource":"OrderGroup.Update()","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = OG_UPDATED","LongDesc":"GCM Audit: ActionCode = OG_UPDATED; Comment = Updated OrderGroup xml in Sales Order database. Called by Dell.Commerce.GCM.Pipeline.SplitManager.SplitManager.Process()","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"OG_UPDATED"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"Updated OrderGroup xml in Sales Order database. Called by Dell.Commerce.GCM.Pipeline.SplitManager.SplitManager.Process()"},{"Key":"dispositionCode","Value":"INW"},{"Key":"currentOwner","Value":"System"},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"2000001108743"}]},"ProcessedUTCTime":"2010-10-05T14:22:05.3661463Z"},{"ResultSource":"Splitting","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = ORDSPLIT","LongDesc":"GCM Audit: ActionCode = ORDSPLIT; Comment = SuccessContinuePipeline","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"ORDSPLIT"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"SuccessContinuePipeline"},{"Key":"dispositionCode","Value":"INW"},{"Key":"currentOwner","Value":"System"},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"2000001108743"}]},"ProcessedUTCTime":"2010-10-05T14:22:05.9911703Z"},{"ResultSource":"Tie Group","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = TG_PASS","LongDesc":"GCM Audit: ActionCode = TG_PASS; Comment = Tie Group Assigned","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"TG_PASS"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"Tie Group Assigned"},{"Key":"dispositionCode","Value":"INW"},{"Key":"currentOwner","Value":"System"},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"2000001108743"}]},"ProcessedUTCTime":"2010-10-05T14:22:06.3661847Z"},{"ResultSource":"Customer.ShipSequence","ResultType":"Informational","OrderFormId":"4643b1d1-bc4f-47ff-8cf0-932342dc083a","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = CUSTVAL","LongDesc":"GCM Audit: ActionCode = CUSTVAL; Comment = Shipping sequence retrieved for this order form: 1","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"CUSTVAL"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"Shipping sequence retrieved for this order form: 1"},{"Key":"dispositionCode","Value":"INW"},{"Key":"currentOwner","Value":"System"},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"2000001108743"},{"Key":"OmsShipSequence","Value":"1"}]},"ProcessedUTCTime":"2010-10-05T14:22:26.7263415Z"},{"ResultSource":"GCM_Pipeline","ResultType":"Informational","ErrorCategory":"I","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"BackendOrderCreateResponse","LongDesc":"BackendOrderCreateResponse request received.","ResultData":{"KeyValuePair":[{"Key":"AllowICodedSkus","Value":"False"},{"Key":"PromotionGracePeriod","Value":"0"},{"Key":"SkipPipelineForQuote","Value":"False"},{"Key":"AllowDCodedSkus","Value":"False"},{"Key":"AccountStatus","Value":"Current"},{"Key":"CurrentUserLogon","Value":null},{"Key":"FulfillmentUnitID1","Value":"21bb2240-7312-4d5e-aff6-06d173a794a7"},{"Key":"FulfillmentUnitID2","Value":"7340c591-454a-4965-a5e1-c4f9b7ca1e51"},{"Key":"ReasonCode","Value":null},{"Key":"Comment","Value":null},{"Key":"Disposition","Value":"INW"},{"Key":"CurrentOwner","Value":"System"},{"Key":"UserRole","Value":null}]},"ProcessedUTCTime":"2010-10-05T14:23:34.7758295Z"},{"ResultSource":"App Controller","ResultType":"Error","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"21bb2240-7312-4d5e-aff6-06d173a794a7","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"An unrecognizable item has been entered into order                                                                       Error","LongDesc":"An unrecognizable item has been entered into order                                                                      ","ResultData":null,"ProcessedUTCTime":"2010-10-05T14:23:34.8695831Z"},{"ResultSource":"App Controller","ResultType":"Error","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"21bb2240-7312-4d5e-aff6-06d173a794a7","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"DOMS exchange-rate doesn't mach requested exchange-rate                                                                  Error","LongDesc":"DOMS exchange-rate doesn't mach requested exchange-rate                                                                 ","ResultData":null,"ProcessedUTCTime":"2010-10-05T14:23:34.8695831Z"},{"ResultSource":"App Controller","ResultType":"Error","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"21bb2240-7312-4d5e-aff6-06d173a794a7","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"Invalid Payment Term for this Paycode                                                                                    Error","LongDesc":"Invalid Payment Term for this Paycode                                                                                   ","ResultData":null,"ProcessedUTCTime":"2010-10-05T14:23:34.8695831Z"},{"ResultSource":"App Controller","ResultType":"Error","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"21bb2240-7312-4d5e-aff6-06d173a794a7","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"Order create failed Error","LongDesc":"Invalid Payment Term for this Paycode                                                                                   ","ResultData":null,"ProcessedUTCTime":"2010-10-05T14:23:34.8695831Z"},{"ResultSource":"Dell.Commerce.GCM.OrderStatus.OrderStatusManager","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"f33f4558-9c99-4d66-818d-3b942fbe6d3e","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"Fulfillment Unit 21bb2240-7312-4d5e-aff6-06d173a794a7 Disposition is modified to AVL","LongDesc":"Fulfillment Disposition Change SUCCESS","ResultData":null,"ProcessedUTCTime":"0001-01-01T00:00:00"},{"ResultSource":"GCM_Pipeline","ResultType":"Informational","ErrorCategory":"I","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"BackendOrderCreateResponse","LongDesc":"BackendOrderCreateResponse request received.","ResultData":{"KeyValuePair":[{"Key":"AllowICodedSkus","Value":"False"},{"Key":"PromotionGracePeriod","Value":"0"},{"Key":"SkipPipelineForQuote","Value":"False"},{"Key":"AllowDCodedSkus","Value":"False"},{"Key":"AccountStatus","Value":"Current"},{"Key":"CurrentUserLogon","Value":null},{"Key":"FulfillmentUnitID1","Value":"21bb2240-7312-4d5e-aff6-06d173a794a7"},{"Key":"FulfillmentUnitID2","Value":"7340c591-454a-4965-a5e1-c4f9b7ca1e51"},{"Key":"ReasonCode","Value":null},{"Key":"Comment","Value":null},{"Key":"Disposition","Value":"INW"},{"Key":"CurrentOwner","Value":"System"},{"Key":"UserRole","Value":null}]},"ProcessedUTCTime":"2010-10-05T14:23:41.4323351Z"},{"ResultSource":"App Controller","ResultType":"Error","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"7340c591-454a-4965-a5e1-c4f9b7ca1e51","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"An unrecognizable item has been entered into order                                                                       Error","LongDesc":"An unrecognizable item has been entered into order                                                                      ","ProcessedUTCTime":"2010-10-05T14:23:41.5104631Z"},{"ResultSource":"App Controller","ResultType":"Error","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"7340c591-454a-4965-a5e1-c4f9b7ca1e51","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"DOMS exchange-rate doesn't mach requested exchange-rate                                                                  Error","LongDesc":"DOMS exchange-rate doesn't mach requested exchange-rate                                                                 ","ProcessedUTCTime":"2010-10-05T14:23:41.5104631Z"},{"ResultSource":"App Controller","ResultType":"Error","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"7340c591-454a-4965-a5e1-c4f9b7ca1e51","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"Invalid Payment Term for this Paycode                                                                                    Error","LongDesc":"Invalid Payment Term for this Paycode                                                                                   ","ProcessedUTCTime":"2010-10-05T14:23:41.5104631Z"},{"ResultSource":"App Controller","ResultType":"Error","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"7340c591-454a-4965-a5e1-c4f9b7ca1e51","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"Order create failed Error","LongDesc":"Invalid Payment Term for this Paycode                                                                                   ","ProcessedUTCTime":"2010-10-05T14:23:41.5104631Z"},{"ResultSource":"Dell.Commerce.GCM.OrderStatus.OrderStatusManager","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"f33f4558-9c99-4d66-818d-3b942fbe6d3e","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"Fulfillment Unit 7340c591-454a-4965-a5e1-c4f9b7ca1e51 Disposition is modified to AVL","LongDesc":"Fulfillment Disposition Change SUCCESS","ProcessedUTCTime":"0001-01-01T00:00:00"},{"ResultSource":"Dell.Commerce.GCM.OrderStatus.OrderStatusManager","ResultType":"Informational","OrderFormId":"f33f4558-9c99-4d66-818d-3b942fbe6d3e","ItemId":"f33f4558-9c99-4d66-818d-3b942fbe6d3e","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = IPNAK","LongDesc":"GCM Audit: ActionCode = IPNAK; Comment = Invalid Payment Term for this Paycode                                                                                   ","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"IPNAK"},{"Key":"actionReasonCode","Value":"IPMNAK"},{"Key":"reasonComment","Value":"Invalid Payment Term for this Paycode                                                                                   "},{"Key":"dispositionCode","Value":"AVL"},{"Key":"currentOwner","Value":null},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"2000001108743"}]},"ProcessedUTCTime":"2010-10-05T14:23:42.0261079Z"},{"ResultSource":"Dell.Commerce.GCM.OrderStatus.OrderStatusManager","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"f33f4558-9c99-4d66-818d-3b942fbe6d3e","RequestId":"00000000-0000-0000-0000-000000000000","ShortDesc":"SUCCESS","LongDesc":"SUCCESS","ProcessedUTCTime":"0001-01-01T00:00:00"},{"ResultSource":"OrderGroup.Update()","ResultType":"Informational","OrderFormId":"00000000-0000-0000-0000-000000000000","ItemId":"00000000-0000-0000-0000-000000000000","RequestId":"4904855a-5cf7-48fc-873e-df3cadda7c6d","ShortDesc":"GCM Audit: ActionCode = OG_UPDATED","LongDesc":"GCM Audit: ActionCode = OG_UPDATED; Comment = Updated OrderGroup xml in Sales Order database. Called by Dell.Commerce.QMS.SALReponseService.ProcessSalesOrderResponse()","ResultData":{"KeyValuePair":[{"Key":"actionCode","Value":"OG_UPDATED"},{"Key":"actionReasonCode","Value":null},{"Key":"reasonComment","Value":"Updated OrderGroup xml in Sales Order database. Called by Dell.Commerce.QMS.SALReponseService.ProcessSalesOrderResponse()"},{"Key":"dispositionCode","Value":"AVL"},{"Key":"currentOwner","Value":null},{"Key":"orderGroupId","Value":"f33f4558-9c99-4d66-818d-3b942fbe6d3e"},{"Key":"queueCode","Value":"LADHS"},{"Key":"channel","Value":"7037"},{"Key":"customerSet","Value":"mxdhs1s"},{"Key":"businsessUnit","Value":"3232"},{"Key":"dpid","Value":"2000001108743"}]},"ProcessedUTCTime":"2010-10-05T14:23:42.7605111Z"}]},"RequestType":"Submit","RequestID":"4904855a-5cf7-48fc-873e-df3cadda7c6d","CommerceContext":{"ID":"00000000-0000-0000-0000-000000000000","ExtendedProperties":null,"TaxInformation":{"TaxOverrideRate":null,"OverrideAllTaxType":"false","FEDTaxable":"Y","STATETaxable":"N","TaxIdPrimary":"1234567890","ReducedTaxRate":"0","TaxExemptCode":null,"TaxCategory":null,"ResaleClass":null,"TaxIncludedState":"include","ExtendedProperties":null,"RequireTax":"true"},"IsConfigured":"true","Country":"mx","Currency":"MXN","DisplayCurrency":"MXN","ActiveHedgeRate":"1","DisableInternalCurrencyConversion":"false","Language":"ES","CustomerSet":"mxdhs1s","CompanyNumber":"23","Segment":"DHS","Region":"la","ApplicationName":"OTHER","Debug":"false","Secure":"false","SourceApplicationName":"USP","ChannelID":"7037","CurrentSystem":"GCM","DestinationSystem":"LSAL","QueueCode":"LADHS","TransactionType":"CustomerOrder","StateForItemTaxCalculation":"AGS","CalculateTax":"false","SuppressTax":"false","EnableTaxInclusiveDNCCalculations":"true","EnableDNCSpreadingToServiceSkus":"false","EnableOptionalPromotions":"true","EnableMarketableDiscountForFinancingPaymentOnly":"false","IsGlobalPortal":"false","IsResellerPage":"false","OMSCustomerID":"6368","CustomerAccountOmsMapId":"1026321","DepartmentCode":"MXDHSF","AccountTeam":null,"NonStandardTransaction":"false","CdcEnabled":"false","CustomerAccountId":"1020300","RoundingMethod":"RoundTowardLarger","Precision":"2","BusinessUnitId":"3232","EnableException":"false","DncApplicationID":"4"},"DispositionCode":"AVL","CurrentOwner":null,"ValidationResult":{"IsValid":"true","Messages":null},"Service":null,"CouponStorage":null,"NonAppliedCouponStorage":null,"MarketablePriceAdjustments":null,"FraudFlag":"false","OrderType":"Normal"}};
*/

/*$scope.formData = {
  "DNCCacheVersion": null,
  "CheckoutProfile": 1,
  "OrderForms": [
    {
      "Id": "4badaf23-b178-45bc-bce0-ba7c492e2a30",
      "ShippingInformation": {
        "Id": "b43f8fea-8cb5-4e0e-9180-863e29c6a1dc",
        "hasDeliveryLoadingDock": 0,
        "DeliveryAboveFirstFloor": 0,
        "hasFreightElevator": 0,
        "ShippingContact": {
          "Name": {
            "Prefix": null,
            "First": "Akshay",
            "MI": "",
            "Last": "Shetty",
            "Suffix": null,
            "Title": "Title",
            "MAGuid": "00000000-0000-0000-0000-000000000000"
          },
          "SecondaryName": null,
          "Language": null,
          "Currency": null,
          "HasAddress": false,
          "Id": "f79bead4-f6fd-4e95-bfce-7a0a1d754394",
          "CustomerType": 0,
          "EmailType": 0,
          "LinkNumber": null,
          "EmployeeNum": null,
          "OrganizationInfo": {
            "Title": null,
            "SecondaryName": null,
            "BranchName": null,
            "CompanyRegistrationNo": null,
            "CompanyRegistrationDate": null,
            "Fields": [
              
            ],
            "ID": null,
            "Department": null,
            "Name": "Dell",
            "Type": null
          },
          "CompanyName": "Dell",
          "Address": {
            "Id": "8eacb953-8178-4af2-80b9-9821d5c8b28e",
            "AddressId": "f2f51667-af1c-44b5-9eed-462dabe446f9",
            "BackendAddressId": null,
            "Line1": "Testing",
            "Line2": "",
            "Line3": "",
            "Line4": "",
            "Line5": "",
            "Other1": "svalbard",
            "Other2": "",
            "Other3": "",
            "Other4": "",
            "Other5": "",
            "Region": "",
            "City": "London",
            "PostalCode": "sw1a 2aa",
            "Country": "uk",
            "IsAddressVerified": false,
            "IsValid": false,
            "MAGuid": "00000000-0000-0000-0000-000000000000",
            "Source": null,
            "AddressType": 0,
            "AddressStatus": 0,
            "SequenceNumber": null
          },
          "EmailAddress": {
            "Email": "akshay@dell.com",
            "MailToName": "akshay",
            "Host": "dell.com",
            "Type": null
          },
          "RefEmailAddress": {
            "Email": "",
            "MailToName": null,
            "Host": null,
            "Type": null
          },
          "AdditionalEmails": [
            
          ],
          "PhoneContacts": [
            
          ],
          "OptInFlags": 1,
          "BestTimeToCall": 0,
          "ContactType": 1,
          "ContactId": "5f241cab-ef64-4259-a808-4f883c039876",
          "Position": null,
          "BackendCustomerNumber": -1,
          "SequenceID": 0,
          "MAGuid": "00000000-0000-0000-0000-000000000000",
          "Fields": [
            {
              "FieldKey": "CustomerNumber",
              "FieldValue": "-1",
              "Namespace": "",
              "ExtendedProperties": [
                
              ],
              "ValueFrom": null,
              "Dell.Commerce.Pipeline.IField.FieldKey": "CustomerNumber",
              "Dell.Commerce.Pipeline.IField.FieldValue": "-1"
            }
          ],
          "IsValid": false,
          "TaxIdPrimary": null,
          "TaxIdSecondary": null,
          "TaxCategory": null,
          "TAACompliant": null
        },
        "ShippingChoice": "ES",
        "ShippingOptions": [
          {
            "AdjustedShippingTotal": 111.0000,
            "UnAdjustedShippingTotal": 111.0000,
            "DisableRule": null,
            "Enabled": true,
            "HandlingFee": 0.0,
            "IsDiscounted": false,
            "ShippingOptionId": "ES",
            "ShippingTax": null,
            "HandlingFeeEnabled": false,
            "ShippingDiscountTotal": 0.0000
          }
        ],
        "ShippingDescription": null,
        "PremiumShippingPrice": 0.0,
        "UsePremiumShipping": false,
        "RollupPremiumShipping": true,
        "CarrierName": null,
        "CarrierAccount": null,
        "MethodOfDelivery": null,
        "ShippingInstruction": null,
        "ShippingAvailable": true,
        "RequireShipping": true,
        "UnadjustedShipping": 111.0000,
        "AdjustedShipping": 111.0000,
        "LeadTimeDays": 0,
        "DesignatedCarrierInfo": {
          "CarrierName": null,
          "CarrierAccount": null,
          "MethodOfDelivery": null,
          "HandlingFee": 0.0,
          "HandlingFeeEnabled": false
        }
      },
      "Shipments": [
        
      ],
      "BillingContact": {
        "Name": {
          "Prefix": null,
          "First": "Akshay",
          "MI": "",
          "Last": "Shetty",
          "Suffix": null,
          "Title": "Title",
          "MAGuid": "00000000-0000-0000-0000-000000000000"
        },
        "SecondaryName": null,
        "Language": null,
        "Currency": null,
        "HasAddress": false,
        "Id": "191f571a-e207-4ba3-8b44-0ecf4857f4ca",
        "CustomerType": 0,
        "EmailType": 0,
        "LinkNumber": "-1",
        "EmployeeNum": null,
        "OrganizationInfo": {
          "Title": null,
          "SecondaryName": null,
          "BranchName": null,
          "CompanyRegistrationNo": null,
          "CompanyRegistrationDate": null,
          "Fields": [
            
          ],
          "ID": null,
          "Department": null,
          "Name": "Dell",
          "Type": null
        },
        "CompanyName": "Dell",
        "Address": {
          "Id": "24b14b32-0e8b-42cf-8357-fc38aefe3ff8",
          "AddressId": "f2f51667-af1c-44b5-9eed-462dabe446f9",
          "BackendAddressId": null,
          "Line1": "Testing",
          "Line2": "",
          "Line3": "",
          "Line4": "",
          "Line5": "",
          "Other1": "",
          "Other2": "",
          "Other3": "",
          "Other4": "",
          "Other5": "",
          "Region": "",
          "City": "London",
          "PostalCode": "sw1a 2aa",
          "Country": "uk",
          "IsAddressVerified": false,
          "IsValid": false,
          "MAGuid": "00000000-0000-0000-0000-000000000000",
          "Source": null,
          "AddressType": 0,
          "AddressStatus": 0,
          "SequenceNumber": null
        },
        "EmailAddress": {
          "Email": "akshay@dell.com",
          "MailToName": "akshay",
          "Host": "dell.com",
          "Type": null
        },
        "RefEmailAddress": {
          "Email": "",
          "MailToName": null,
          "Host": null,
          "Type": null
        },
        "AdditionalEmails": [
          
        ],
        "PhoneContacts": [
          
        ],
        "OptInFlags": 1,
        "BestTimeToCall": 0,
        "ContactType": 2,
        "ContactId": "5f241cab-ef64-4259-a808-4f883c039876",
        "Position": null,
        "BackendCustomerNumber": -1,
        "SequenceID": 0,
        "MAGuid": "00000000-0000-0000-0000-000000000000",
        "Fields": [
          {
            "FieldKey": "CustomerNumber",
            "FieldValue": "-1",
            "Namespace": "",
            "ExtendedProperties": [
              
            ],
            "ValueFrom": null,
            "Dell.Commerce.Pipeline.IField.FieldKey": "CustomerNumber",
            "Dell.Commerce.Pipeline.IField.FieldValue": "-1"
          },
          {
            "FieldKey": "TaxIdPrimary",
            "FieldValue": null,
            "Namespace": "",
            "ExtendedProperties": [
              
            ],
            "ValueFrom": null,
            "Dell.Commerce.Pipeline.IField.FieldKey": "TaxIdPrimary",
            "Dell.Commerce.Pipeline.IField.FieldValue": null
          },
          {
            "FieldKey": "TaxIdSecondary",
            "FieldValue": null,
            "Namespace": "",
            "ExtendedProperties": [
              
            ],
            "ValueFrom": null,
            "Dell.Commerce.Pipeline.IField.FieldKey": "TaxIdSecondary",
            "Dell.Commerce.Pipeline.IField.FieldValue": null
          },
          {
            "FieldKey": "TaxCategory",
            "FieldValue": null,
            "Namespace": "",
            "ExtendedProperties": [
              
            ],
            "ValueFrom": null,
            "Dell.Commerce.Pipeline.IField.FieldKey": "TaxCategory",
            "Dell.Commerce.Pipeline.IField.FieldValue": null
          }
        ],
        "IsValid": false,
        "TaxIdPrimary": null,
        "TaxIdSecondary": null,
        "TaxCategory": null,
        "TAACompliant": null
      },
      "SequenceNumber": null,
      "IsValidQuote": false,
      "Items": [
        {
          "ConfigDetails": {
            "Id": "2355dn",
            "UniqueId": "22d27a82-5eaa-4af1-8b67-9cf58c150f1c",
            "BuyerPartNumber": null,
            "CfiComments": [
              
            ],
            "SINumber": "",
            "ParentModuleID": 0,
            "ParentOptionID": null,
            "ParentModuleName": null,
            "ParentOptionName": null,
            "ContractCode": null,
            "ChassisId": 16141,
            "CatalogId": 202,
            "CompanyNumber": "01",
            "BrandId": 85,
            "FamilyId": 9521,
            "MaxPage": 1,
            "InternalName": null,
            "Title": null,
            "ConfigBlurb": null,
            "Modules": [
              {
                "ModuleOperationResult": {
                  "ID": 0,
                  "OptionOperationResults": [
                    
                  ]
                },
                "IsMobileBroadband": false,
                "IsSubscriptionBilling": false,
                "CanContainHiddenOptions": false,
                "IsFlavoredDriver": false,
                "CustomAttributes": null,
                "CategoryId": null,
                "CategoryName": null,
                "LearnMoreUrl": null,
                "MultiSelect": false,
                "HasOptionLevelDNC": false,
                "ElDoradoBannerURL": null,
                "ElDoradoImage": null,
                "ConfigValidationErrorMessage": null,
                "DefaultOption": null,
                "InternalName": null,
                "ExternalName": null,
                "ParentOptionId": null,
                "Description": "Base",
                "Options": [
                  {
                    "PriceAdjustments": [
                      
                    ],
                    "OptionOperationResult": {
                      "ID": "468917",
                      "AdjustedSubTotalWithOrderContext": 359.0,
                      "AdjustedTotalTotal": 564.0000,
                      "UnadjustedSubTotal": 359.0
                    },
                    "CustomOptionSubtype": 0,
                    "InternalDNCIdentifierPrefix": null,
                    "AllowMultiQuantity": false,
                    "DisplayMode": null,
                    "EndOfLife": null,
                    "ExternalName": null,
                    "FilterType": 1,
                    "PriorityBuildable": false,
                    "PriorityBuildLeadTimeDays": 0,
                    "FromChassis": false,
                    "Description": "Dell 2355dn Multifunction Laser Printer",
                    "ShortDescription": null,
                    "CfiFlag": false,
                    "Selected": true,
                    "IsVisible": false,
                    "OriginalPrice": 359.0,
                    "LeadTimeDays": 1,
                    "UnitCost": 218.06,
                    "Skus": [
                      {
                        "SkuOperationResult": {
                          "ID": "210-34529",
                          "AdjustedSubTotalWithOrderContext": 359.0,
                          "Tax": {
                            "VATTax": {
                              "TaxAmount": "71.80",
                              "ERPTaxCode": "GBVAT",
                              "TaxRateCode": "SR",
                              "Rate": "0.2"
                            }
                          },
                          "EcoFeeTotal": 0.0
                        },
                        "WtyPriceAmt": 0.0,
                        "RollupFlg": false,
                        "RevAgencyFlg": false,
                        "IsServiceSku": false,
                        "PriceAdjustments": [
                          
                        ],
                        "RecurringBillingFlag": false,
                        "IncludeServiceTagInfo": true,
                        "IsFuturistic": false,
                        "IsHardware": false,
                        "IsMobileBroadband": false,
                        "Price": {
                          "UnRoundedValue": 0.0,
                          "Value": 359.0,
                          "PriceType": 1,
                          "RoundingMethod": 0,
                          "IsHedgeRateApplied": false,
                          "AssoicatedVariables": [
                            {
                              "Name": "CostPrice",
                              "Value": 218.06,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            },
                            {
                              "Name": "DutyCost",
                              "Value": 218.06,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            }
                          ],
                          "AssociatedPrices": [
                            {
                              "TaxableAmount": 359.00,
                              "Type": "S",
                              "Amount": 71.80,
                              "Rate": 0.2,
                              "Value": 71.80,
                              "Id": "VATTax",
                              "AssociatedTaxes": [
                                
                              ],
                              "UnRoundedValue": -2147483648.0,
                              "PriceType": 16,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                {
                                  "Name": "ERPTaxCode",
                                  "Value": 0.0,
                                  "StringValue": "GBVAT",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 71.80,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                },
                                {
                                  "Name": "TaxRateCode",
                                  "Value": 0.0,
                                  "StringValue": "SR",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 71.80,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                }
                              ],
                              "AssociatedPrices": [
                                
                              ],
                              "Description": null,
                              "Band": 0
                            },
                            {
                              "UnRoundedValue": -2147483648.0,
                              "Value": 111.0000,
                              "PriceType": 2,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                
                              ],
                              "AssociatedPrices": [
                                {
                                  "TaxableAmount": 111.00,
                                  "Type": "S",
                                  "Amount": 22.20,
                                  "Rate": 0.2,
                                  "Value": 22.20,
                                  "Id": "VATTax",
                                  "AssociatedTaxes": [
                                    
                                  ],
                                  "UnRoundedValue": -2147483648.0,
                                  "PriceType": 16,
                                  "RoundingMethod": 0,
                                  "IsHedgeRateApplied": false,
                                  "AssoicatedVariables": [
                                    {
                                      "Name": "ERPTaxCode",
                                      "Value": 0.0,
                                      "StringValue": "GBVAT",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 22.20,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    },
                                    {
                                      "Name": "TaxRateCode",
                                      "Value": 0.0,
                                      "StringValue": "SR",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 22.20,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    }
                                  ],
                                  "AssociatedPrices": [
                                    
                                  ],
                                  "Description": null,
                                  "Band": 0
                                }
                              ],
                              "Description": null,
                              "Id": "Shipping",
                              "Band": 0
                            }
                          ],
                          "Description": null,
                          "Id": "BasePrice",
                          "Band": 0
                        },
                        "Description": null,
                        "IsHandledSeperately": false,
                        "TaxCode": "",
                        "TaxRollupCode": "",
                        "IVACode": null,
                        "MediaTypeCode": null,
                        "ItemTypeCode": "2",
                        "FulfillmentLocation": "EF",
                        "Quantity": 1,
                        "LeadTimeDays": 0,
                        "ManufacturingLeadTimeDays": 0,
                        "CfiLeadTimeDays": 0,
                        "ShipClass": "",
                        "DutyClass": "",
                        "TaxClass": "95400",
                        "EcoClass": null,
                        "Class": "0^227",
                        "OriginalPrice": 359.0,
                        "Tax": null,
                        "PlacedPrice": 359.0,
                        "FinalPrice": 0.0,
                        "UnitWeight": 0.0,
                        "UnitCost": 218.06,
                        "CompensationCost": 0.0,
                        "FpcCost": 0.0,
                        "CostCurrency": null,
                        "Id": "210-34529",
                        "LegalEntity": "EMEA ",
                        "DiscountClass": "",
                        "IsSystemTied": false,
                        "IsSparePart": false,
                        "ContractTerminationDate": "0001-01-01T00:00:00",
                        "CustomFields": [
                          
                        ],
                        "IsFlexi": false,
                        "IsShipping": false,
                        "IsDelivery": false,
                        "SystemFlag": false,
                        "LineOfBusiness": "",
                        "ContractTypeCode": null,
                        "InitialContractCode": "",
                        "ContractLaborCode": "",
                        "TaxProductCode": null,
                        "Attributes": [
                          
                        ],
                        "Status": 0,
                        "PriceVectorId": 0,
                        "OptionPriceVectorId": null,
                        "DellSkuExists": null,
                        "ReplacementPart": false
                      }
                    ],
                    "Id": "468917",
                    "BundleID": "",
                    "IsUpsell": false,
                    "IsHero": false,
                    "Quantity": 1,
                    "IsExtendedOption": false,
                    "Attributes": [
                      
                    ],
                    "CompositeItems": [
                      
                    ],
                    "ParentOptionId": null,
                    "ParentModuleId": null,
                    "CustomizationId": 0,
                    "IsCustomizable": false,
                    "CustomizationData": null,
                    "CustomizationOptionType": 1,
                    "IsDefault": false,
                    "OptionPricing": null,
                    "PriceVectorId": 0,
                    "Required": false
                  }
                ],
                "Id": 1,
                "CategoryPageNum": 1,
                "IsTied": true,
                "IsVisible": true,
                "AllowsDiscount": true,
                "IsServiceModule": false,
                "IsIncludedInPrice": true,
                "IsRequired": true,
                "Sequence": 1,
                "ModuleType": 0,
                "ComponentTypeCodes": [
                  
                ],
                "IsBaseModule": false
              },
              {
                "ModuleOperationResult": {
                  "ID": 0,
                  "OptionOperationResults": [
                    
                  ]
                },
                "IsMobileBroadband": false,
                "IsSubscriptionBilling": false,
                "CanContainHiddenOptions": false,
                "IsFlavoredDriver": false,
                "CustomAttributes": null,
                "CategoryId": null,
                "CategoryName": null,
                "LearnMoreUrl": null,
                "MultiSelect": false,
                "HasOptionLevelDNC": false,
                "ElDoradoBannerURL": null,
                "ElDoradoImage": null,
                "ConfigValidationErrorMessage": null,
                "DefaultOption": null,
                "InternalName": null,
                "ExternalName": null,
                "ParentOptionId": null,
                "Description": "Cables",
                "Options": [
                  {
                    "PriceAdjustments": [
                      
                    ],
                    "OptionOperationResult": {
                      "ID": "92344",
                      "AdjustedSubTotalWithOrderContext": 0.0,
                      "AdjustedTotalTotal": 0.0,
                      "UnadjustedSubTotal": 0.0
                    },
                    "CustomOptionSubtype": 0,
                    "InternalDNCIdentifierPrefix": null,
                    "AllowMultiQuantity": false,
                    "DisplayMode": null,
                    "EndOfLife": null,
                    "ExternalName": null,
                    "FilterType": 1,
                    "PriorityBuildable": false,
                    "PriorityBuildLeadTimeDays": 0,
                    "FromChassis": false,
                    "Description": "No Printer Cable Selected",
                    "ShortDescription": null,
                    "CfiFlag": false,
                    "Selected": true,
                    "IsVisible": false,
                    "OriginalPrice": 0.0,
                    "LeadTimeDays": 1,
                    "UnitCost": 0.0,
                    "Skus": [
                      {
                        "SkuOperationResult": {
                          "ID": "470-10470",
                          "AdjustedSubTotalWithOrderContext": 0.0,
                          "Tax": {
                            "VATTax": {
                              "TaxAmount": "0",
                              "ERPTaxCode": "GBVAT",
                              "TaxRateCode": "SR",
                              "Rate": "0.2"
                            }
                          },
                          "EcoFeeTotal": 0.0
                        },
                        "WtyPriceAmt": 0.0,
                        "RollupFlg": false,
                        "RevAgencyFlg": false,
                        "IsServiceSku": false,
                        "PriceAdjustments": [
                          
                        ],
                        "RecurringBillingFlag": false,
                        "IncludeServiceTagInfo": true,
                        "IsFuturistic": false,
                        "IsHardware": false,
                        "IsMobileBroadband": false,
                        "Price": {
                          "UnRoundedValue": 0.0,
                          "Value": 0.0,
                          "PriceType": 1,
                          "RoundingMethod": 0,
                          "IsHedgeRateApplied": false,
                          "AssoicatedVariables": [
                            {
                              "Name": "CostPrice",
                              "Value": 0.0,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            },
                            {
                              "Name": "DutyCost",
                              "Value": 0.0,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            }
                          ],
                          "AssociatedPrices": [
                            {
                              "TaxableAmount": 359.00,
                              "Type": "S",
                              "Amount": 0.0,
                              "Rate": 0.2,
                              "Value": 0.0,
                              "Id": "VATTax",
                              "AssociatedTaxes": [
                                
                              ],
                              "UnRoundedValue": -2147483648.0,
                              "PriceType": 16,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                {
                                  "Name": "ERPTaxCode",
                                  "Value": 0.0,
                                  "StringValue": "GBVAT",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                },
                                {
                                  "Name": "TaxRateCode",
                                  "Value": 0.0,
                                  "StringValue": "SR",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                }
                              ],
                              "AssociatedPrices": [
                                
                              ],
                              "Description": null,
                              "Band": 0
                            },
                            {
                              "UnRoundedValue": -2147483648.0,
                              "Value": 0.0,
                              "PriceType": 2,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                
                              ],
                              "AssociatedPrices": [
                                {
                                  "TaxableAmount": 111.00,
                                  "Type": "S",
                                  "Amount": 0.0,
                                  "Rate": 0.2,
                                  "Value": 0.0,
                                  "Id": "VATTax",
                                  "AssociatedTaxes": [
                                    
                                  ],
                                  "UnRoundedValue": -2147483648.0,
                                  "PriceType": 16,
                                  "RoundingMethod": 0,
                                  "IsHedgeRateApplied": false,
                                  "AssoicatedVariables": [
                                    {
                                      "Name": "ERPTaxCode",
                                      "Value": 0.0,
                                      "StringValue": "GBVAT",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    },
                                    {
                                      "Name": "TaxRateCode",
                                      "Value": 0.0,
                                      "StringValue": "SR",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    }
                                  ],
                                  "AssociatedPrices": [
                                    
                                  ],
                                  "Description": null,
                                  "Band": 0
                                }
                              ],
                              "Description": null,
                              "Id": "Shipping",
                              "Band": 0
                            }
                          ],
                          "Description": null,
                          "Id": "BasePrice",
                          "Band": 0
                        },
                        "Description": null,
                        "IsHandledSeperately": false,
                        "TaxCode": "",
                        "TaxRollupCode": "",
                        "IVACode": null,
                        "MediaTypeCode": null,
                        "ItemTypeCode": "1",
                        "FulfillmentLocation": "EF",
                        "Quantity": 1,
                        "LeadTimeDays": 0,
                        "ManufacturingLeadTimeDays": 0,
                        "CfiLeadTimeDays": 0,
                        "ShipClass": "",
                        "DutyClass": "",
                        "TaxClass": "95900",
                        "EcoClass": null,
                        "Class": "NA000",
                        "OriginalPrice": 0.0,
                        "Tax": null,
                        "PlacedPrice": 0.0,
                        "FinalPrice": 0.0,
                        "UnitWeight": 1.0,
                        "UnitCost": 0.0,
                        "CompensationCost": 0.0,
                        "FpcCost": 0.0,
                        "CostCurrency": null,
                        "Id": "470-10470",
                        "LegalEntity": "EMEA ",
                        "DiscountClass": "",
                        "IsSystemTied": false,
                        "IsSparePart": false,
                        "ContractTerminationDate": "0001-01-01T00:00:00",
                        "CustomFields": [
                          
                        ],
                        "IsFlexi": false,
                        "IsShipping": false,
                        "IsDelivery": false,
                        "SystemFlag": false,
                        "LineOfBusiness": "",
                        "ContractTypeCode": null,
                        "InitialContractCode": "",
                        "ContractLaborCode": "",
                        "TaxProductCode": null,
                        "Attributes": [
                          
                        ],
                        "Status": 0,
                        "PriceVectorId": 0,
                        "OptionPriceVectorId": null,
                        "DellSkuExists": null,
                        "ReplacementPart": false
                      }
                    ],
                    "Id": "92344",
                    "BundleID": "",
                    "IsUpsell": false,
                    "IsHero": false,
                    "Quantity": 1,
                    "IsExtendedOption": false,
                    "Attributes": [
                      
                    ],
                    "CompositeItems": [
                      
                    ],
                    "ParentOptionId": null,
                    "ParentModuleId": null,
                    "CustomizationId": 0,
                    "IsCustomizable": false,
                    "CustomizationData": null,
                    "CustomizationOptionType": 1,
                    "IsDefault": false,
                    "OptionPricing": null,
                    "PriceVectorId": 0,
                    "Required": false
                  }
                ],
                "Id": 20,
                "CategoryPageNum": 1,
                "IsTied": true,
                "IsVisible": true,
                "AllowsDiscount": true,
                "IsServiceModule": false,
                "IsIncludedInPrice": true,
                "IsRequired": true,
                "Sequence": 3,
                "ModuleType": 0,
                "ComponentTypeCodes": [
                  
                ],
                "IsBaseModule": false
              },
              {
                "ModuleOperationResult": {
                  "ID": 0,
                  "OptionOperationResults": [
                    
                  ]
                },
                "IsMobileBroadband": false,
                "IsSubscriptionBilling": false,
                "CanContainHiddenOptions": false,
                "IsFlavoredDriver": false,
                "CustomAttributes": null,
                "CategoryId": null,
                "CategoryName": null,
                "LearnMoreUrl": null,
                "MultiSelect": false,
                "HasOptionLevelDNC": false,
                "ElDoradoBannerURL": null,
                "ElDoradoImage": null,
                "ConfigValidationErrorMessage": null,
                "DefaultOption": null,
                "InternalName": null,
                "ExternalName": null,
                "ParentOptionId": null,
                "Description": "Standard Warranty",
                "Options": [
                  {
                    "PriceAdjustments": [
                      
                    ],
                    "OptionOperationResult": {
                      "ID": "261737",
                      "AdjustedSubTotalWithOrderContext": 0.0,
                      "AdjustedTotalTotal": 0.0,
                      "UnadjustedSubTotal": 0.0
                    },
                    "CustomOptionSubtype": 0,
                    "InternalDNCIdentifierPrefix": null,
                    "AllowMultiQuantity": false,
                    "DisplayMode": null,
                    "EndOfLife": null,
                    "ExternalName": null,
                    "FilterType": 1,
                    "PriorityBuildable": false,
                    "PriorityBuildLeadTimeDays": 0,
                    "FromChassis": false,
                    "Description": "1Yr Basic Warranty - Next Business Day",
                    "ShortDescription": null,
                    "CfiFlag": false,
                    "Selected": true,
                    "IsVisible": false,
                    "OriginalPrice": 0.0,
                    "LeadTimeDays": 1,
                    "UnitCost": 15.99,
                    "Skus": [
                      {
                        "SkuOperationResult": {
                          "ID": "709-10425",
                          "AdjustedSubTotalWithOrderContext": 0.0,
                          "Tax": {
                            "VATTax": {
                              "TaxAmount": "0",
                              "ERPTaxCode": "GBVAT",
                              "TaxRateCode": "SR",
                              "Rate": "0.2"
                            }
                          },
                          "EcoFeeTotal": 0.0
                        },
                        "WtyPriceAmt": 0.0,
                        "RollupFlg": false,
                        "RevAgencyFlg": false,
                        "IsServiceSku": false,
                        "PriceAdjustments": [
                          
                        ],
                        "RecurringBillingFlag": false,
                        "IncludeServiceTagInfo": true,
                        "IsFuturistic": false,
                        "IsHardware": false,
                        "IsMobileBroadband": false,
                        "Price": {
                          "UnRoundedValue": 0.0,
                          "Value": 0.0,
                          "PriceType": 1,
                          "RoundingMethod": 0,
                          "IsHedgeRateApplied": false,
                          "AssoicatedVariables": [
                            {
                              "Name": "CostPrice",
                              "Value": 0.0,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            },
                            {
                              "Name": "DutyCost",
                              "Value": 0.0,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            }
                          ],
                          "AssociatedPrices": [
                            {
                              "TaxableAmount": 359.00,
                              "Type": "S",
                              "Amount": 0.0,
                              "Rate": 0.2,
                              "Value": 0.0,
                              "Id": "VATTax",
                              "AssociatedTaxes": [
                                
                              ],
                              "UnRoundedValue": -2147483648.0,
                              "PriceType": 16,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                {
                                  "Name": "ERPTaxCode",
                                  "Value": 0.0,
                                  "StringValue": "GBVAT",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                },
                                {
                                  "Name": "TaxRateCode",
                                  "Value": 0.0,
                                  "StringValue": "SR",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                }
                              ],
                              "AssociatedPrices": [
                                
                              ],
                              "Description": null,
                              "Band": 0
                            },
                            {
                              "UnRoundedValue": -2147483648.0,
                              "Value": 0.0,
                              "PriceType": 2,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                
                              ],
                              "AssociatedPrices": [
                                {
                                  "TaxableAmount": 111.00,
                                  "Type": "S",
                                  "Amount": 0.0,
                                  "Rate": 0.2,
                                  "Value": 0.0,
                                  "Id": "VATTax",
                                  "AssociatedTaxes": [
                                    
                                  ],
                                  "UnRoundedValue": -2147483648.0,
                                  "PriceType": 16,
                                  "RoundingMethod": 0,
                                  "IsHedgeRateApplied": false,
                                  "AssoicatedVariables": [
                                    {
                                      "Name": "ERPTaxCode",
                                      "Value": 0.0,
                                      "StringValue": "GBVAT",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    },
                                    {
                                      "Name": "TaxRateCode",
                                      "Value": 0.0,
                                      "StringValue": "SR",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    }
                                  ],
                                  "AssociatedPrices": [
                                    
                                  ],
                                  "Description": null,
                                  "Band": 0
                                }
                              ],
                              "Description": null,
                              "Id": "Shipping",
                              "Band": 0
                            }
                          ],
                          "Description": null,
                          "Id": "BasePrice",
                          "Band": 0
                        },
                        "Description": null,
                        "IsHandledSeperately": false,
                        "TaxCode": "",
                        "TaxRollupCode": "",
                        "IVACode": null,
                        "MediaTypeCode": null,
                        "ItemTypeCode": "1",
                        "FulfillmentLocation": "EF",
                        "Quantity": 1,
                        "LeadTimeDays": 0,
                        "ManufacturingLeadTimeDays": 0,
                        "CfiLeadTimeDays": 0,
                        "ShipClass": "",
                        "DutyClass": "",
                        "TaxClass": "97500",
                        "EcoClass": null,
                        "Class": "NA000",
                        "OriginalPrice": 0.0,
                        "Tax": null,
                        "PlacedPrice": 0.0,
                        "FinalPrice": 0.0,
                        "UnitWeight": 0.0,
                        "UnitCost": 0.0,
                        "CompensationCost": 0.0,
                        "FpcCost": 0.0,
                        "CostCurrency": null,
                        "Id": "709-10425",
                        "LegalEntity": "EMEA ",
                        "DiscountClass": "",
                        "IsSystemTied": false,
                        "IsSparePart": false,
                        "ContractTerminationDate": "0001-01-01T00:00:00",
                        "CustomFields": [
                          
                        ],
                        "IsFlexi": false,
                        "IsShipping": false,
                        "IsDelivery": false,
                        "SystemFlag": false,
                        "LineOfBusiness": "",
                        "ContractTypeCode": null,
                        "InitialContractCode": "",
                        "ContractLaborCode": "",
                        "TaxProductCode": null,
                        "Attributes": [
                          
                        ],
                        "Status": 0,
                        "PriceVectorId": 0,
                        "OptionPriceVectorId": null,
                        "DellSkuExists": null,
                        "ReplacementPart": false
                      },
                      {
                        "SkuOperationResult": {
                          "ID": "709-10426",
                          "AdjustedSubTotalWithOrderContext": 0.0,
                          "Tax": {
                            "VATTax": {
                              "TaxAmount": "0",
                              "ERPTaxCode": "GBVAT",
                              "TaxRateCode": "SR",
                              "Rate": "0.2"
                            }
                          },
                          "EcoFeeTotal": 0.0
                        },
                        "WtyPriceAmt": 0.0,
                        "RollupFlg": false,
                        "RevAgencyFlg": false,
                        "IsServiceSku": false,
                        "PriceAdjustments": [
                          
                        ],
                        "RecurringBillingFlag": false,
                        "IncludeServiceTagInfo": true,
                        "IsFuturistic": false,
                        "IsHardware": false,
                        "IsMobileBroadband": false,
                        "Price": {
                          "UnRoundedValue": 0.0,
                          "Value": 0.0,
                          "PriceType": 1,
                          "RoundingMethod": 0,
                          "IsHedgeRateApplied": false,
                          "AssoicatedVariables": [
                            {
                              "Name": "CostPrice",
                              "Value": 15.99,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            },
                            {
                              "Name": "DutyCost",
                              "Value": 15.99,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            }
                          ],
                          "AssociatedPrices": [
                            {
                              "TaxableAmount": 359.00,
                              "Type": "S",
                              "Amount": 0.0,
                              "Rate": 0.2,
                              "Value": 0.0,
                              "Id": "VATTax",
                              "AssociatedTaxes": [
                                
                              ],
                              "UnRoundedValue": -2147483648.0,
                              "PriceType": 16,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                {
                                  "Name": "ERPTaxCode",
                                  "Value": 0.0,
                                  "StringValue": "GBVAT",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                },
                                {
                                  "Name": "TaxRateCode",
                                  "Value": 0.0,
                                  "StringValue": "SR",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                }
                              ],
                              "AssociatedPrices": [
                                
                              ],
                              "Description": null,
                              "Band": 0
                            },
                            {
                              "UnRoundedValue": -2147483648.0,
                              "Value": 0.0,
                              "PriceType": 2,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                
                              ],
                              "AssociatedPrices": [
                                {
                                  "TaxableAmount": 111.00,
                                  "Type": "S",
                                  "Amount": 0.0,
                                  "Rate": 0.2,
                                  "Value": 0.0,
                                  "Id": "VATTax",
                                  "AssociatedTaxes": [
                                    
                                  ],
                                  "UnRoundedValue": -2147483648.0,
                                  "PriceType": 16,
                                  "RoundingMethod": 0,
                                  "IsHedgeRateApplied": false,
                                  "AssoicatedVariables": [
                                    {
                                      "Name": "ERPTaxCode",
                                      "Value": 0.0,
                                      "StringValue": "GBVAT",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    },
                                    {
                                      "Name": "TaxRateCode",
                                      "Value": 0.0,
                                      "StringValue": "SR",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    }
                                  ],
                                  "AssociatedPrices": [
                                    
                                  ],
                                  "Description": null,
                                  "Band": 0
                                }
                              ],
                              "Description": null,
                              "Id": "Shipping",
                              "Band": 0
                            }
                          ],
                          "Description": null,
                          "Id": "BasePrice",
                          "Band": 0
                        },
                        "Description": null,
                        "IsHandledSeperately": false,
                        "TaxCode": "",
                        "TaxRollupCode": "",
                        "IVACode": null,
                        "MediaTypeCode": null,
                        "ItemTypeCode": "1",
                        "FulfillmentLocation": "EF",
                        "Quantity": 1,
                        "LeadTimeDays": 0,
                        "ManufacturingLeadTimeDays": 0,
                        "CfiLeadTimeDays": 0,
                        "ShipClass": "",
                        "DutyClass": "",
                        "TaxClass": "97500",
                        "EcoClass": null,
                        "Class": "NA000",
                        "OriginalPrice": 0.0,
                        "Tax": null,
                        "PlacedPrice": 0.0,
                        "FinalPrice": 0.0,
                        "UnitWeight": 0.0,
                        "UnitCost": 15.99,
                        "CompensationCost": 0.0,
                        "FpcCost": 0.0,
                        "CostCurrency": null,
                        "Id": "709-10426",
                        "LegalEntity": "EMEA ",
                        "DiscountClass": "",
                        "IsSystemTied": false,
                        "IsSparePart": false,
                        "ContractTerminationDate": "0001-01-01T00:00:00",
                        "CustomFields": [
                          
                        ],
                        "IsFlexi": false,
                        "IsShipping": false,
                        "IsDelivery": false,
                        "SystemFlag": false,
                        "LineOfBusiness": "",
                        "ContractTypeCode": null,
                        "InitialContractCode": "",
                        "ContractLaborCode": "",
                        "TaxProductCode": null,
                        "Attributes": [
                          
                        ],
                        "Status": 0,
                        "PriceVectorId": 0,
                        "OptionPriceVectorId": null,
                        "DellSkuExists": null,
                        "ReplacementPart": false
                      }
                    ],
                    "Id": "261737",
                    "BundleID": "",
                    "IsUpsell": false,
                    "IsHero": false,
                    "Quantity": 1,
                    "IsExtendedOption": false,
                    "Attributes": [
                      
                    ],
                    "CompositeItems": [
                      
                    ],
                    "ParentOptionId": null,
                    "ParentModuleId": null,
                    "CustomizationId": 0,
                    "IsCustomizable": false,
                    "CustomizationData": null,
                    "CustomizationOptionType": 1,
                    "IsDefault": false,
                    "OptionPricing": null,
                    "PriceVectorId": 0,
                    "Required": false
                  }
                ],
                "Id": 29,
                "CategoryPageNum": 1,
                "IsTied": true,
                "IsVisible": true,
                "AllowsDiscount": true,
                "IsServiceModule": true,
                "IsIncludedInPrice": true,
                "IsRequired": true,
                "Sequence": 4,
                "ModuleType": 0,
                "ComponentTypeCodes": [
                  
                ],
                "IsBaseModule": false
              },
              {
                "ModuleOperationResult": {
                  "ID": 0,
                  "OptionOperationResults": [
                    
                  ]
                },
                "IsMobileBroadband": false,
                "IsSubscriptionBilling": false,
                "CanContainHiddenOptions": false,
                "IsFlavoredDriver": false,
                "CustomAttributes": null,
                "CategoryId": null,
                "CategoryName": null,
                "LearnMoreUrl": null,
                "MultiSelect": false,
                "HasOptionLevelDNC": false,
                "ElDoradoBannerURL": null,
                "ElDoradoImage": null,
                "ConfigValidationErrorMessage": null,
                "DefaultOption": null,
                "InternalName": null,
                "ExternalName": null,
                "ParentOptionId": null,
                "Description": "Support Services",
                "Options": [
                  {
                    "PriceAdjustments": [
                      
                    ],
                    "OptionOperationResult": {
                      "ID": "262807",
                      "AdjustedSubTotalWithOrderContext": 0.0,
                      "AdjustedTotalTotal": 0.0,
                      "UnadjustedSubTotal": 0.0
                    },
                    "CustomOptionSubtype": 0,
                    "InternalDNCIdentifierPrefix": null,
                    "AllowMultiQuantity": false,
                    "DisplayMode": null,
                    "EndOfLife": null,
                    "ExternalName": null,
                    "FilterType": 1,
                    "PriorityBuildable": false,
                    "PriorityBuildLeadTimeDays": 0,
                    "FromChassis": false,
                    "Description": "1Yr Parts Only Warranty - No Upgrade Selected",
                    "ShortDescription": null,
                    "CfiFlag": false,
                    "Selected": true,
                    "IsVisible": false,
                    "OriginalPrice": 0.0,
                    "LeadTimeDays": 1,
                    "UnitCost": 0.0,
                    "Skus": [
                      {
                        "SkuOperationResult": {
                          "ID": "710-17036",
                          "AdjustedSubTotalWithOrderContext": 0.0,
                          "Tax": {
                            "VATTax": {
                              "TaxAmount": "0",
                              "ERPTaxCode": "GBVAT",
                              "TaxRateCode": "SR",
                              "Rate": "0.2"
                            }
                          },
                          "EcoFeeTotal": 0.0
                        },
                        "WtyPriceAmt": 0.0,
                        "RollupFlg": false,
                        "RevAgencyFlg": false,
                        "IsServiceSku": false,
                        "PriceAdjustments": [
                          
                        ],
                        "RecurringBillingFlag": false,
                        "IncludeServiceTagInfo": true,
                        "IsFuturistic": false,
                        "IsHardware": false,
                        "IsMobileBroadband": false,
                        "Price": {
                          "UnRoundedValue": 0.0,
                          "Value": 0.0,
                          "PriceType": 1,
                          "RoundingMethod": 0,
                          "IsHedgeRateApplied": false,
                          "AssoicatedVariables": [
                            {
                              "Name": "CostPrice",
                              "Value": 0.0,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            },
                            {
                              "Name": "DutyCost",
                              "Value": 0.0,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            }
                          ],
                          "AssociatedPrices": [
                            {
                              "TaxableAmount": 359.00,
                              "Type": "S",
                              "Amount": 0.0,
                              "Rate": 0.2,
                              "Value": 0.0,
                              "Id": "VATTax",
                              "AssociatedTaxes": [
                                
                              ],
                              "UnRoundedValue": -2147483648.0,
                              "PriceType": 16,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                {
                                  "Name": "ERPTaxCode",
                                  "Value": 0.0,
                                  "StringValue": "GBVAT",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                },
                                {
                                  "Name": "TaxRateCode",
                                  "Value": 0.0,
                                  "StringValue": "SR",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                }
                              ],
                              "AssociatedPrices": [
                                
                              ],
                              "Description": null,
                              "Band": 0
                            },
                            {
                              "UnRoundedValue": -2147483648.0,
                              "Value": 0.0,
                              "PriceType": 2,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                
                              ],
                              "AssociatedPrices": [
                                {
                                  "TaxableAmount": 111.00,
                                  "Type": "S",
                                  "Amount": 0.0,
                                  "Rate": 0.2,
                                  "Value": 0.0,
                                  "Id": "VATTax",
                                  "AssociatedTaxes": [
                                    
                                  ],
                                  "UnRoundedValue": -2147483648.0,
                                  "PriceType": 16,
                                  "RoundingMethod": 0,
                                  "IsHedgeRateApplied": false,
                                  "AssoicatedVariables": [
                                    {
                                      "Name": "ERPTaxCode",
                                      "Value": 0.0,
                                      "StringValue": "GBVAT",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    },
                                    {
                                      "Name": "TaxRateCode",
                                      "Value": 0.0,
                                      "StringValue": "SR",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    }
                                  ],
                                  "AssociatedPrices": [
                                    
                                  ],
                                  "Description": null,
                                  "Band": 0
                                }
                              ],
                              "Description": null,
                              "Id": "Shipping",
                              "Band": 0
                            }
                          ],
                          "Description": null,
                          "Id": "BasePrice",
                          "Band": 0
                        },
                        "Description": null,
                        "IsHandledSeperately": false,
                        "TaxCode": "",
                        "TaxRollupCode": "",
                        "IVACode": null,
                        "MediaTypeCode": null,
                        "ItemTypeCode": "1",
                        "FulfillmentLocation": "EF",
                        "Quantity": 1,
                        "LeadTimeDays": 0,
                        "ManufacturingLeadTimeDays": 0,
                        "CfiLeadTimeDays": 0,
                        "ShipClass": "",
                        "DutyClass": "",
                        "TaxClass": "97500",
                        "EcoClass": null,
                        "Class": "NA000",
                        "OriginalPrice": 0.0,
                        "Tax": null,
                        "PlacedPrice": 0.0,
                        "FinalPrice": 0.0,
                        "UnitWeight": 0.0,
                        "UnitCost": 0.0,
                        "CompensationCost": 0.0,
                        "FpcCost": 0.0,
                        "CostCurrency": null,
                        "Id": "710-17036",
                        "LegalEntity": "EMEA ",
                        "DiscountClass": "",
                        "IsSystemTied": false,
                        "IsSparePart": false,
                        "ContractTerminationDate": "0001-01-01T00:00:00",
                        "CustomFields": [
                          
                        ],
                        "IsFlexi": false,
                        "IsShipping": false,
                        "IsDelivery": false,
                        "SystemFlag": false,
                        "LineOfBusiness": "",
                        "ContractTypeCode": null,
                        "InitialContractCode": "",
                        "ContractLaborCode": "",
                        "TaxProductCode": null,
                        "Attributes": [
                          
                        ],
                        "Status": 0,
                        "PriceVectorId": 0,
                        "OptionPriceVectorId": null,
                        "DellSkuExists": null,
                        "ReplacementPart": false
                      }
                    ],
                    "Id": "262807",
                    "BundleID": "",
                    "IsUpsell": false,
                    "IsHero": false,
                    "Quantity": 1,
                    "IsExtendedOption": false,
                    "Attributes": [
                      
                    ],
                    "CompositeItems": [
                      
                    ],
                    "ParentOptionId": null,
                    "ParentModuleId": null,
                    "CustomizationId": 0,
                    "IsCustomizable": false,
                    "CustomizationData": null,
                    "CustomizationOptionType": 1,
                    "IsDefault": false,
                    "OptionPricing": null,
                    "PriceVectorId": 0,
                    "Required": false
                  }
                ],
                "Id": 30,
                "CategoryPageNum": 1,
                "IsTied": true,
                "IsVisible": true,
                "AllowsDiscount": true,
                "IsServiceModule": true,
                "IsIncludedInPrice": true,
                "IsRequired": false,
                "Sequence": 7,
                "ModuleType": 0,
                "ComponentTypeCodes": [
                  
                ],
                "IsBaseModule": false
              },
              {
                "ModuleOperationResult": {
                  "ID": 0,
                  "OptionOperationResults": [
                    
                  ]
                },
                "IsMobileBroadband": false,
                "IsSubscriptionBilling": false,
                "CanContainHiddenOptions": false,
                "IsFlavoredDriver": false,
                "CustomAttributes": null,
                "CategoryId": null,
                "CategoryName": null,
                "LearnMoreUrl": null,
                "MultiSelect": false,
                "HasOptionLevelDNC": false,
                "ElDoradoBannerURL": null,
                "ElDoradoImage": null,
                "ConfigValidationErrorMessage": null,
                "DefaultOption": null,
                "InternalName": null,
                "ExternalName": null,
                "ParentOptionId": null,
                "Description": "Documentation",
                "Options": [
                  {
                    "PriceAdjustments": [
                      
                    ],
                    "OptionOperationResult": {
                      "ID": "184654",
                      "AdjustedSubTotalWithOrderContext": 0.0,
                      "AdjustedTotalTotal": 0.0,
                      "UnadjustedSubTotal": 0.0
                    },
                    "CustomOptionSubtype": 0,
                    "InternalDNCIdentifierPrefix": null,
                    "AllowMultiQuantity": false,
                    "DisplayMode": null,
                    "EndOfLife": null,
                    "ExternalName": null,
                    "FilterType": 1,
                    "PriorityBuildable": false,
                    "PriorityBuildLeadTimeDays": 0,
                    "FromChassis": false,
                    "Description": "Dell 2355dn Printer Order - United Kingdom",
                    "ShortDescription": null,
                    "CfiFlag": false,
                    "Selected": true,
                    "IsVisible": false,
                    "OriginalPrice": 0.0,
                    "LeadTimeDays": 1,
                    "UnitCost": 2.54,
                    "Skus": [
                      {
                        "SkuOperationResult": {
                          "ID": "450-10870",
                          "AdjustedSubTotalWithOrderContext": 0.0,
                          "Tax": {
                            "VATTax": {
                              "TaxAmount": "0",
                              "ERPTaxCode": "GBVAT",
                              "TaxRateCode": "SR",
                              "Rate": "0.2"
                            }
                          },
                          "EcoFeeTotal": 0.0
                        },
                        "WtyPriceAmt": 0.0,
                        "RollupFlg": false,
                        "RevAgencyFlg": false,
                        "IsServiceSku": false,
                        "PriceAdjustments": [
                          
                        ],
                        "RecurringBillingFlag": false,
                        "IncludeServiceTagInfo": true,
                        "IsFuturistic": false,
                        "IsHardware": false,
                        "IsMobileBroadband": false,
                        "Price": {
                          "UnRoundedValue": 0.0,
                          "Value": 0.0,
                          "PriceType": 1,
                          "RoundingMethod": 0,
                          "IsHedgeRateApplied": false,
                          "AssoicatedVariables": [
                            {
                              "Name": "CostPrice",
                              "Value": 1.7,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            },
                            {
                              "Name": "DutyCost",
                              "Value": 1.7,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            }
                          ],
                          "AssociatedPrices": [
                            {
                              "TaxableAmount": 359.00,
                              "Type": "S",
                              "Amount": 0.0,
                              "Rate": 0.2,
                              "Value": 0.0,
                              "Id": "VATTax",
                              "AssociatedTaxes": [
                                
                              ],
                              "UnRoundedValue": -2147483648.0,
                              "PriceType": 16,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                {
                                  "Name": "ERPTaxCode",
                                  "Value": 0.0,
                                  "StringValue": "GBVAT",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                },
                                {
                                  "Name": "TaxRateCode",
                                  "Value": 0.0,
                                  "StringValue": "SR",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                }
                              ],
                              "AssociatedPrices": [
                                
                              ],
                              "Description": null,
                              "Band": 0
                            },
                            {
                              "UnRoundedValue": -2147483648.0,
                              "Value": 0.0,
                              "PriceType": 2,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                
                              ],
                              "AssociatedPrices": [
                                {
                                  "TaxableAmount": 111.00,
                                  "Type": "S",
                                  "Amount": 0.0,
                                  "Rate": 0.2,
                                  "Value": 0.0,
                                  "Id": "VATTax",
                                  "AssociatedTaxes": [
                                    
                                  ],
                                  "UnRoundedValue": -2147483648.0,
                                  "PriceType": 16,
                                  "RoundingMethod": 0,
                                  "IsHedgeRateApplied": false,
                                  "AssoicatedVariables": [
                                    {
                                      "Name": "ERPTaxCode",
                                      "Value": 0.0,
                                      "StringValue": "GBVAT",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    },
                                    {
                                      "Name": "TaxRateCode",
                                      "Value": 0.0,
                                      "StringValue": "SR",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    }
                                  ],
                                  "AssociatedPrices": [
                                    
                                  ],
                                  "Description": null,
                                  "Band": 0
                                }
                              ],
                              "Description": null,
                              "Id": "Shipping",
                              "Band": 0
                            }
                          ],
                          "Description": null,
                          "Id": "BasePrice",
                          "Band": 0
                        },
                        "Description": null,
                        "IsHandledSeperately": false,
                        "TaxCode": "",
                        "TaxRollupCode": "",
                        "IVACode": null,
                        "MediaTypeCode": null,
                        "ItemTypeCode": "1",
                        "FulfillmentLocation": "EF",
                        "Quantity": 1,
                        "LeadTimeDays": 0,
                        "ManufacturingLeadTimeDays": 0,
                        "CfiLeadTimeDays": 0,
                        "ShipClass": "",
                        "DutyClass": "",
                        "TaxClass": "95824",
                        "EcoClass": null,
                        "Class": "NA000",
                        "OriginalPrice": 0.0,
                        "Tax": null,
                        "PlacedPrice": 0.0,
                        "FinalPrice": 0.0,
                        "UnitWeight": 2.0,
                        "UnitCost": 1.7,
                        "CompensationCost": 0.0,
                        "FpcCost": 0.0,
                        "CostCurrency": null,
                        "Id": "450-10870",
                        "LegalEntity": "EMEA ",
                        "DiscountClass": "",
                        "IsSystemTied": false,
                        "IsSparePart": false,
                        "ContractTerminationDate": "0001-01-01T00:00:00",
                        "CustomFields": [
                          
                        ],
                        "IsFlexi": false,
                        "IsShipping": false,
                        "IsDelivery": false,
                        "SystemFlag": false,
                        "LineOfBusiness": "",
                        "ContractTypeCode": null,
                        "InitialContractCode": "",
                        "ContractLaborCode": "",
                        "TaxProductCode": null,
                        "Attributes": [
                          
                        ],
                        "Status": 0,
                        "PriceVectorId": 0,
                        "OptionPriceVectorId": null,
                        "DellSkuExists": null,
                        "ReplacementPart": false
                      },
                      {
                        "SkuOperationResult": {
                          "ID": "530-11219",
                          "AdjustedSubTotalWithOrderContext": 0.0,
                          "Tax": {
                            "VATTax": {
                              "TaxAmount": "0",
                              "ERPTaxCode": "GBVAT",
                              "TaxRateCode": "SR",
                              "Rate": "0.2"
                            }
                          },
                          "EcoFeeTotal": 0.0
                        },
                        "WtyPriceAmt": 0.0,
                        "RollupFlg": false,
                        "RevAgencyFlg": false,
                        "IsServiceSku": false,
                        "PriceAdjustments": [
                          
                        ],
                        "RecurringBillingFlag": false,
                        "IncludeServiceTagInfo": true,
                        "IsFuturistic": false,
                        "IsHardware": false,
                        "IsMobileBroadband": false,
                        "Price": {
                          "UnRoundedValue": 0.0,
                          "Value": 0.0,
                          "PriceType": 1,
                          "RoundingMethod": 0,
                          "IsHedgeRateApplied": false,
                          "AssoicatedVariables": [
                            {
                              "Name": "CostPrice",
                              "Value": 0.84,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            },
                            {
                              "Name": "DutyCost",
                              "Value": 0.84,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            }
                          ],
                          "AssociatedPrices": [
                            {
                              "TaxableAmount": 359.00,
                              "Type": "S",
                              "Amount": 0.0,
                              "Rate": 0.2,
                              "Value": 0.0,
                              "Id": "VATTax",
                              "AssociatedTaxes": [
                                
                              ],
                              "UnRoundedValue": -2147483648.0,
                              "PriceType": 16,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                {
                                  "Name": "ERPTaxCode",
                                  "Value": 0.0,
                                  "StringValue": "GBVAT",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                },
                                {
                                  "Name": "TaxRateCode",
                                  "Value": 0.0,
                                  "StringValue": "SR",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                }
                              ],
                              "AssociatedPrices": [
                                
                              ],
                              "Description": null,
                              "Band": 0
                            },
                            {
                              "UnRoundedValue": -2147483648.0,
                              "Value": 0.0,
                              "PriceType": 2,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                
                              ],
                              "AssociatedPrices": [
                                {
                                  "TaxableAmount": 111.00,
                                  "Type": "S",
                                  "Amount": 0.0,
                                  "Rate": 0.2,
                                  "Value": 0.0,
                                  "Id": "VATTax",
                                  "AssociatedTaxes": [
                                    
                                  ],
                                  "UnRoundedValue": -2147483648.0,
                                  "PriceType": 16,
                                  "RoundingMethod": 0,
                                  "IsHedgeRateApplied": false,
                                  "AssoicatedVariables": [
                                    {
                                      "Name": "ERPTaxCode",
                                      "Value": 0.0,
                                      "StringValue": "GBVAT",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    },
                                    {
                                      "Name": "TaxRateCode",
                                      "Value": 0.0,
                                      "StringValue": "SR",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    }
                                  ],
                                  "AssociatedPrices": [
                                    
                                  ],
                                  "Description": null,
                                  "Band": 0
                                }
                              ],
                              "Description": null,
                              "Id": "Shipping",
                              "Band": 0
                            }
                          ],
                          "Description": null,
                          "Id": "BasePrice",
                          "Band": 0
                        },
                        "Description": null,
                        "IsHandledSeperately": false,
                        "TaxCode": "",
                        "TaxRollupCode": "",
                        "IVACode": null,
                        "MediaTypeCode": null,
                        "ItemTypeCode": "1",
                        "FulfillmentLocation": "EF",
                        "Quantity": 1,
                        "LeadTimeDays": 0,
                        "ManufacturingLeadTimeDays": 0,
                        "CfiLeadTimeDays": 0,
                        "ShipClass": "",
                        "DutyClass": "",
                        "TaxClass": "95900",
                        "EcoClass": null,
                        "Class": "NA000",
                        "OriginalPrice": 0.0,
                        "Tax": null,
                        "PlacedPrice": 0.0,
                        "FinalPrice": 0.0,
                        "UnitWeight": 1.0,
                        "UnitCost": 0.84,
                        "CompensationCost": 0.0,
                        "FpcCost": 0.0,
                        "CostCurrency": null,
                        "Id": "530-11219",
                        "LegalEntity": "EMEA ",
                        "DiscountClass": "",
                        "IsSystemTied": false,
                        "IsSparePart": false,
                        "ContractTerminationDate": "0001-01-01T00:00:00",
                        "CustomFields": [
                          
                        ],
                        "IsFlexi": false,
                        "IsShipping": false,
                        "IsDelivery": false,
                        "SystemFlag": false,
                        "LineOfBusiness": "",
                        "ContractTypeCode": null,
                        "InitialContractCode": "",
                        "ContractLaborCode": "",
                        "TaxProductCode": null,
                        "Attributes": [
                          
                        ],
                        "Status": 0,
                        "PriceVectorId": 0,
                        "OptionPriceVectorId": null,
                        "DellSkuExists": null,
                        "ReplacementPart": false
                      },
                      {
                        "SkuOperationResult": {
                          "ID": "800-12092",
                          "AdjustedSubTotalWithOrderContext": 0.0,
                          "Tax": {
                            "VATTax": {
                              "TaxAmount": "0",
                              "ERPTaxCode": "GBVAT",
                              "TaxRateCode": "SR",
                              "Rate": "0.2"
                            }
                          },
                          "EcoFeeTotal": 0.0
                        },
                        "WtyPriceAmt": 0.0,
                        "RollupFlg": false,
                        "RevAgencyFlg": false,
                        "IsServiceSku": false,
                        "PriceAdjustments": [
                          
                        ],
                        "RecurringBillingFlag": false,
                        "IncludeServiceTagInfo": true,
                        "IsFuturistic": false,
                        "IsHardware": false,
                        "IsMobileBroadband": false,
                        "Price": {
                          "UnRoundedValue": 0.0,
                          "Value": 0.0,
                          "PriceType": 1,
                          "RoundingMethod": 0,
                          "IsHedgeRateApplied": false,
                          "AssoicatedVariables": [
                            {
                              "Name": "CostPrice",
                              "Value": 0.0,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            },
                            {
                              "Name": "DutyCost",
                              "Value": 0.0,
                              "StringValue": null,
                              "PriceVariableType": 1,
                              "Equation": "",
                              "IsCachable": true,
                              "IsPrice": true
                            }
                          ],
                          "AssociatedPrices": [
                            {
                              "TaxableAmount": 359.00,
                              "Type": "S",
                              "Amount": 0.0,
                              "Rate": 0.2,
                              "Value": 0.0,
                              "Id": "VATTax",
                              "AssociatedTaxes": [
                                
                              ],
                              "UnRoundedValue": -2147483648.0,
                              "PriceType": 16,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                {
                                  "Name": "ERPTaxCode",
                                  "Value": 0.0,
                                  "StringValue": "GBVAT",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                },
                                {
                                  "Name": "TaxRateCode",
                                  "Value": 0.0,
                                  "StringValue": "SR",
                                  "PriceVariableType": 2,
                                  "Equation": "",
                                  "IsCachable": true,
                                  "IsPrice": false
                                },
                                {
                                  "Name": "VATTax",
                                  "Value": 0.0,
                                  "StringValue": null,
                                  "PriceVariableType": 0,
                                  "Equation": null,
                                  "IsCachable": false,
                                  "IsPrice": true
                                }
                              ],
                              "AssociatedPrices": [
                                
                              ],
                              "Description": null,
                              "Band": 0
                            },
                            {
                              "UnRoundedValue": -2147483648.0,
                              "Value": 0.0,
                              "PriceType": 2,
                              "RoundingMethod": 0,
                              "IsHedgeRateApplied": false,
                              "AssoicatedVariables": [
                                
                              ],
                              "AssociatedPrices": [
                                {
                                  "TaxableAmount": 111.00,
                                  "Type": "S",
                                  "Amount": 0.0,
                                  "Rate": 0.2,
                                  "Value": 0.0,
                                  "Id": "VATTax",
                                  "AssociatedTaxes": [
                                    
                                  ],
                                  "UnRoundedValue": -2147483648.0,
                                  "PriceType": 16,
                                  "RoundingMethod": 0,
                                  "IsHedgeRateApplied": false,
                                  "AssoicatedVariables": [
                                    {
                                      "Name": "ERPTaxCode",
                                      "Value": 0.0,
                                      "StringValue": "GBVAT",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    },
                                    {
                                      "Name": "TaxRateCode",
                                      "Value": 0.0,
                                      "StringValue": "SR",
                                      "PriceVariableType": 2,
                                      "Equation": "",
                                      "IsCachable": true,
                                      "IsPrice": false
                                    },
                                    {
                                      "Name": "VATTax",
                                      "Value": 0.0,
                                      "StringValue": null,
                                      "PriceVariableType": 0,
                                      "Equation": null,
                                      "IsCachable": false,
                                      "IsPrice": true
                                    }
                                  ],
                                  "AssociatedPrices": [
                                    
                                  ],
                                  "Description": null,
                                  "Band": 0
                                }
                              ],
                              "Description": null,
                              "Id": "Shipping",
                              "Band": 0
                            }
                          ],
                          "Description": null,
                          "Id": "BasePrice",
                          "Band": 0
                        },
                        "Description": null,
                        "IsHandledSeperately": false,
                        "TaxCode": "",
                        "TaxRollupCode": "",
                        "IVACode": null,
                        "MediaTypeCode": null,
                        "ItemTypeCode": "1",
                        "FulfillmentLocation": "EF",
                        "Quantity": 1,
                        "LeadTimeDays": 0,
                        "ManufacturingLeadTimeDays": 0,
                        "CfiLeadTimeDays": 0,
                        "ShipClass": "",
                        "DutyClass": "",
                        "TaxClass": "97962",
                        "EcoClass": null,
                        "Class": "NA000",
                        "OriginalPrice": 0.0,
                        "Tax": null,
                        "PlacedPrice": 0.0,
                        "FinalPrice": 0.0,
                        "UnitWeight": 1.0,
                        "UnitCost": 0.0,
                        "CompensationCost": 0.0,
                        "FpcCost": 0.0,
                        "CostCurrency": null,
                        "Id": "800-12092",
                        "LegalEntity": "EMEA ",
                        "DiscountClass": "",
                        "IsSystemTied": false,
                        "IsSparePart": false,
                        "ContractTerminationDate": "0001-01-01T00:00:00",
                        "CustomFields": [
                          
                        ],
                        "IsFlexi": false,
                        "IsShipping": false,
                        "IsDelivery": false,
                        "SystemFlag": false,
                        "LineOfBusiness": "",
                        "ContractTypeCode": null,
                        "InitialContractCode": "",
                        "ContractLaborCode": "",
                        "TaxProductCode": null,
                        "Attributes": [
                          
                        ],
                        "Status": 0,
                        "PriceVectorId": 0,
                        "OptionPriceVectorId": null,
                        "DellSkuExists": null,
                        "ReplacementPart": false
                      }
                    ],
                    "Id": "184654",
                    "BundleID": "",
                    "IsUpsell": false,
                    "IsHero": false,
                    "Quantity": 1,
                    "IsExtendedOption": false,
                    "Attributes": [
                      
                    ],
                    "CompositeItems": [
                      
                    ],
                    "ParentOptionId": null,
                    "ParentModuleId": null,
                    "CustomizationId": 0,
                    "IsCustomizable": false,
                    "CustomizationData": null,
                    "CustomizationOptionType": 1,
                    "IsDefault": false,
                    "OptionPricing": null,
                    "PriceVectorId": 0,
                    "Required": false
                  }
                ],
                "Id": 84,
                "CategoryPageNum": 1,
                "IsTied": true,
                "IsVisible": true,
                "AllowsDiscount": true,
                "IsServiceModule": false,
                "IsIncludedInPrice": true,
                "IsRequired": true,
                "Sequence": 2,
                "ModuleType": 0,
                "ComponentTypeCodes": [
                  
                ],
                "IsBaseModule": false
              }
            ],
            "country": null,
            "language_id": "en",
            "ValidationMessages": [
              
            ],
            "OutsideConnectedInfos": [
              
            ],
            "BundleGroups": [
              
            ]
          },
          "lease": null,
          "OrderCode": "2355dn",
          "Title": null,
          "FamilyName": "Dellb 2355dn Multifunction Laser Printer",
          "OriginalPrice": 359.0,
          "DisplayActiveUpsell": false,
          "SourceConfigurator": "eConfig",
          "PriorityBuildable": false,
          "PriorityBuildLeadTime": 0,
          "SkipMfgValidation": true,
          "IsDefaultConfiguration": true,
          "ConfigItemType": 0,
          "IsDellwareOnly": false,
          "IsDummyConfig": false,
          "AssociationType": 0,
          "SlotLocation": 0,
          "ProductType": 0,
          "IsExistingProduct": false,
          "FixedOrderCodeAdjustment": 0.0,
          "CanSkip": false,
          "CanChangeCFI": true,
          "HasMobileBroadband": false,
          "MappingExceptions": [
            
          ],
          "ConfigValidationErrorsExist": false,
          "TiedBuildTime": 0,
          "TiedPBBuildTime": 0,
          "NonTiedBuildTime": 0,
          "PriorityBuildTime": 0,
          "PriorityBuildEnabled": false,
          "PriorityApplied": false,
          "QualifiesForContractDiscount": false,
          "SegmentName": null,
          "Id": "4ed70aee-19c2-4296-a658-17f70630f6b9",
          "CustomerSet": "ukbsdt1",
          "Quantity": 1,
          "UnitQuantity": 1,
          "ExternalName": "Dellb 2355dn Multifunction Laser Printer",
          "Description": "Dell 2355dn Multifunction Laser Printer",
          "Categories": [
            {
              "Name": "CONFIG",
              "ID": "root",
              "ParentCategoryID": "-1",
              "Description": "CONFIG"
            },
            {
              "Name": "ProductLine",
              "ID": "p85",
              "ParentCategoryID": "root",
              "Description": "Imaging"
            },
            {
              "Name": "Brand",
              "ID": "b85",
              "ParentCategoryID": "p85",
              "Description": "Imaging"
            },
            {
              "Name": "Family",
              "ID": "f9521",
              "ParentCategoryID": "b85",
              "Description": "Frontier HI (2355dn)"
            },
            {
              "Name": "Imaging",
              "ID": "p85",
              "ParentCategoryID": "root",
              "Description": "Imaging"
            },
            {
              "Name": "Imaging",
              "ID": "b85",
              "ParentCategoryID": "p85",
              "Description": "Imaging"
            },
            {
              "Name": "Frontier HI (2355dn)",
              "ID": "f9521",
              "ParentCategoryID": "b85",
              "Description": "Frontier HI (2355dn)"
            }
          ],
          "EditItemUrl": "http://previewconfigure.euro.dell.com/dellstore/config.aspx?reconfigure=true&vw=icon",
          "ProductDetailUrl": null,
          "ValidatorUrl": "http://previewconfigure.euro.dell.com/dellstore/xml/configservice.asmx",
          "ValidationStatus": 0,
          "BuildTime": 0,
          "Weight": 0.0,
          "CatalogSystemURI": "CFG",
          "AdvertisementCode": null,
          "FullfilmentLocationId": "EF",
          "FactoryGEOCode": null,
          "OrderSplittingId": null,
          "Frictionless": true,
          "ItemOperationResult": {
            "ID": "4ed70aee-19c2-4296-a658-17f70630f6b9",
            "AdjustedTotalTotal": 564.0000,
            "AdjustedSubTotal": 359.0,
            "TaxTotal": 0.0,
            "AdjustedSnpFreightTotal": 564.0000,
            "ApproximateTotalTotal": 0.0,
            "EstimatedShipDate": "0001-01-01T00:00:00",
            "AdjustedShippingTotal": 111.0000,
            "MarginTotal": 0.0,
            "MarginPercentage": 34.097493036211699164345403900,
            "UnadjustedSubTotal": 359.0,
            "AllDiscountTotal": 0.0,
            "UnadjustedShippingTotal": 0.0,
            "ShippingDiscountTotal": 0.0,
            "AdjustedSurchargeTotal": 0.0,
            "CostTotal": 236.59
          },
          "ProductID": "2355dn",
          "AllowChangeQuantity": true,
          "AllowSave": true,
          "AllowEmail": true,
          "Image": "http://i.dell.com/images/global/configurator/chassis/emea/printer-dell-2355dn-150x150.jpg",
          "ShipClass": "PRNT",
          "EcoClass": null,
          "SplitClass": "85",
          "ItemCatalogSource": "icon",
          "ValidationLocked": false,
          "ValidationLockEndDate": "0001-01-01T00:00:00",
          "Price": {
            "UnRoundedValue": 359.0,
            "Value": 359.0,
            "PriceType": 1,
            "RoundingMethod": 0,
            "IsHedgeRateApplied": false,
            "AssoicatedVariables": [
              
            ],
            "AssociatedPrices": [
              {
                "TaxableAmount": 359.00,
                "Type": "S",
                "Amount": 71.80,
                "Rate": 0.2,
                "Value": 71.80,
                "Id": "VATTax",
                "AssociatedTaxes": [
                  
                ],
                "UnRoundedValue": 71.80,
                "PriceType": 16,
                "RoundingMethod": 0,
                "IsHedgeRateApplied": false,
                "AssoicatedVariables": [
                  
                ],
                "AssociatedPrices": [
                  
                ],
                "Description": null,
                "Band": 0
              },
              {
                "UnRoundedValue": 111.0000,
                "Value": 111.0000,
                "PriceType": 2,
                "RoundingMethod": 0,
                "IsHedgeRateApplied": false,
                "AssoicatedVariables": [
                  
                ],
                "AssociatedPrices": [
                  {
                    "TaxableAmount": 111.00,
                    "Type": "S",
                    "Amount": 22.20,
                    "Rate": 0.2,
                    "Value": 22.20,
                    "Id": "VATTax",
                    "AssociatedTaxes": [
                      
                    ],
                    "UnRoundedValue": 22.20,
                    "PriceType": 16,
                    "RoundingMethod": 0,
                    "IsHedgeRateApplied": false,
                    "AssoicatedVariables": [
                      
                    ],
                    "AssociatedPrices": [
                      
                    ],
                    "Description": null,
                    "Band": 0
                  }
                ],
                "Description": null,
                "Id": "Shipping",
                "Band": 0
              }
            ],
            "Description": null,
            "Id": "BasePrice",
            "Band": 0
          },
          "PriceMatrix": null,
          "PersonalizedDescription": null,
          "CreateDate": "2014-02-12T05:14:57.90625",
          "Marketing": null,
          "Selected": true,
          "ParentItemID": "00000000-0000-0000-0000-000000000000",
          "SolutionContext": null,
          "Manufacturer": "Dell",
          "ShippingCost": 0.0,
          "AssociatedItems": [
            
          ],
          "Accessories": [
            
          ],
          "Services": [
            
          ],
          "AccessoryBundles": [
            
          ],
          "PriceAdjustmentImpacts": [
            
          ],
          "PriceAdjustments": [
            
          ],
          "MarketablePriceAdjustments": [
            
          ],
          "SkipDiscount": false,
          "TaxClass": null,
          "Discountable": false,
          "DisplayCurrencyCode": null,
          "IsFixedOrderCode": false,
          "ProductLineId": 0,
          "PriceAdjustmentsToPreapply": [
            
          ],
          "SalesReps": [
            
          ],
          "IsMissingCostData": false,
          "Language": "en",
          "AppliedHedgeRate": 0.0,
          "CatalogId": 202,
          "DellPaysShippingCode": null,
          "IsLeadTimeValid": false,
          "Country": "uk",
          "Currency": null,
          "CatalogCurrency": null,
          "Region": "EMEA",
          "MyConfigName": null,
          "ExtendedProperties": [
            {
              "FieldKey": "TaxRateCodes",
              "FieldValue": "SR|0.2",
              "Namespace": "OBFL",
              "ExtendedProperties": [
                
              ],
              "ValueFrom": null,
              "Dell.Commerce.Pipeline.IField.FieldKey": "TaxRateCodes",
              "Dell.Commerce.Pipeline.IField.FieldValue": "SR|0.2"
            },
            {
              "FieldKey": "FixedPriceDifference",
              "FieldValue": "0",
              "Namespace": "FC",
              "ExtendedProperties": [
                
              ],
              "ValueFrom": null,
              "Dell.Commerce.Pipeline.IField.FieldKey": "FixedPriceDifference",
              "Dell.Commerce.Pipeline.IField.FieldValue": "0"
            }
          ],
          "Personalization": [
            
          ],
          "CloneSetId": "00000000-0000-0000-0000-000000000000",
          "Attributes": [
            
          ],
          "ValidationResult": null,
          "IsTied": false,
          "IsAposItem": false,
          "IsEligibleForManualServiceAdjustment": false,
          "LeadTimeDetails": {
            "BaseDate": "2014-02-12T00:00:00",
            "ShiftEnabled": false,
            "LeadTimeUnits": [
              {
                "UnitType": 524288,
                "UnitValue": 1
              }
            ]
          },
          "InventoryLevel": "Normal",
          "InventoryStatus": null,
          "InventoryQuantity": 0,
          "MoBro": {
            "ActivationID": null,
            "CouponCode": null,
            "CarrierChosen": null,
            "ServiceContractType": null,
            "CarrierRatePlanDescription": null,
            "CarrierRatePlanInfo": null,
            "ServiceType": null,
            "Status": null,
            "StatusCode": null,
            "HasMobroSKU": false,
            "MobroSubsidyAmount": null
          },
          "ProductInitialPrice": null,
          "ContractCode": null,
          "ContractDescription": null,
          "TaaComplianceStatus": null,
          "StoreOrderCodeGroupId": 0,
          "ForceValidation": false,
          "WasValidationRun": false,
          "BaseDiscountClassCode": null,
          "SpecialPricingAuthId": null,
          "OpportunityLineId": null,
          "BuildToStock": false,
          "FastTrack": false,
          "FixedGoodsId": null,
          "StockReservationId": null,
          "TAACompliant": null,
          "SnpDeliveryMessageId": null,
          "UnitIds": [
            
          ],
          "Version": "14.4"
        }
      ],
      "LeadTimes": [
        
      ],
      "SkipFlags": [
        
      ],
      "ExtendedProperties": [
        {
          "FieldKey": "ShippingStatus",
          "FieldValue": "[ShipMethod:ES|Charge:111.0000|ShippingCharge(IncludedBaseCharge):111.0000] | shippingChoice=ES",
          "Namespace": "ShippingService",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "ShippingStatus",
          "Dell.Commerce.Pipeline.IField.FieldValue": "[ShipMethod:ES|Charge:111.0000|ShippingCharge(IncludedBaseCharge):111.0000] | shippingChoice=ES"
        },
        {
          "FieldKey": "SourceTaxService",
          "FieldValue": "SabrixTax",
          "Namespace": "Sabrix",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "SourceTaxService",
          "Dell.Commerce.Pipeline.IField.FieldValue": "SabrixTax"
        },
        {
          "FieldKey": "minimum_chkout",
          "FieldValue": "True",
          "Namespace": "Ecomm:ExpressCheckout",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "minimum_chkout",
          "Dell.Commerce.Pipeline.IField.FieldValue": "True"
        },
        {
          "FieldKey": "IsSabrixTaxExempt",
          "FieldValue": "False",
          "Namespace": "Sabrix",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "IsSabrixTaxExempt",
          "Dell.Commerce.Pipeline.IField.FieldValue": "False"
        },
        {
          "FieldKey": "TaxCalculationStatus",
          "FieldValue": "True",
          "Namespace": "TaxService",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "TaxCalculationStatus",
          "Dell.Commerce.Pipeline.IField.FieldValue": "True"
        },
        {
          "FieldKey": "NonTaxableSkuTotal",
          "FieldValue": "0",
          "Namespace": "ECOMM",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "NonTaxableSkuTotal",
          "Dell.Commerce.Pipeline.IField.FieldValue": "0"
        },
        {
          "FieldKey": "OgRefreshTrace",
          "FieldValue": " Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:12:56 |  Band=1, PriceCalcAction=NoAction @ 2/11/2014 11:14:57 PM |  Band=1, PriceCalcAction=CalcPrice @ 11/02/2014 23:14:57 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:02 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:17 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:25 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:25 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:13 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:14 |  Band=1, PriceCalcAction=CalcDiscount @ 11/02/2014 23:16:17 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:37 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:04 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:08 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:41",
          "Namespace": "ECOMMTrace",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "OgRefreshTrace",
          "Dell.Commerce.Pipeline.IField.FieldValue": " Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:12:56 |  Band=1, PriceCalcAction=NoAction @ 2/11/2014 11:14:57 PM |  Band=1, PriceCalcAction=CalcPrice @ 11/02/2014 23:14:57 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:02 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:17 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:25 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:25 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:13 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:14 |  Band=1, PriceCalcAction=CalcDiscount @ 11/02/2014 23:16:17 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:37 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:04 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:08 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:41"
        },
        {
          "FieldKey": "OgPriceTrace",
          "FieldValue": " Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:12:56 Ship=0 tax=0 |  Band=1, PriceCalcAction=NoAction @ 2/11/2014 11:14:57 PM Ship=0 tax=0 |  Band=1, PriceCalcAction=CalcPrice @ 11/02/2014 23:14:57 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:02 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:17 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:25 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:25 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:13 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:14 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=CalcDiscount @ 11/02/2014 23:16:17 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:37 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:04 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:08 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:41 Ship=111.0000 tax=94.00",
          "Namespace": "ECOMMTrace",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "OgPriceTrace",
          "Dell.Commerce.Pipeline.IField.FieldValue": " Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:12:56 Ship=0 tax=0 |  Band=1, PriceCalcAction=NoAction @ 2/11/2014 11:14:57 PM Ship=0 tax=0 |  Band=1, PriceCalcAction=CalcPrice @ 11/02/2014 23:14:57 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:02 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:17 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:25 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:15:25 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:13 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:14 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=CalcDiscount @ 11/02/2014 23:16:17 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:16:37 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:04 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:08 Ship=111.0000 tax=94.00 |  Band=1, PriceCalcAction=NoAction @ 11/02/2014 23:17:41 Ship=111.0000 tax=94.00"
        }
      ],
      "ValidationResult": null,
      "Selected": false,
      "FulfillmentUnits": [
        {
          "Id": "366d922c-2f3f-4783-a143-2cae8778e759",
          "ComplexConfigId": 0,
          "IRN": "GB0061-2243-62435",
          "IsComplex": false,
          "BackendResponses": [
            {
              "DPID": 0,
              "IRN": null,
              "OrderFormId": null,
              "OrderGroupId": null,
              "OrderRequestId": null,
              "BusinessUnitId": 0,
              "OmsSystemId": null,
              "Success": false,
              "EDDInfos": [
                
              ],
              "BackendCustomer": {
                "CustomerNum": 0,
                "CompanyNum": null,
                "ExistingCustFlag": null,
                "CustomerReference": null,
                "FrictionlessCode": null,
                "CreateDate": "0001-01-01T00:00:00",
                "ModifyDate": "0001-01-01T00:00:00",
                "UpdateBy": 0,
                "UpdateSystem": null,
                "BillingContact": null,
                "OmsCustomerId": ""
              },
              "BackendSalesRep": null,
              "BackendQuote": {
                "QuoteNum": -1,
                "TranCurrencyCode": null,
                "SubtotalTranAmt": 0.0,
                "ShippingChgTranAmt": 0.0,
                "TotalFeeTranAmt": 0.0,
                "SalesTaxTranAmt": 0.0,
                "TotalTranAmt": 0.0,
                "BackendQuoteShipByDate": "0001-01-01T00:00:00",
                "LeadTimeDate": "0001-01-01T00:00:00",
                "ShippingSequenceNum": 0,
                "FrictionlessCode": null,
                "StopAtQuote": false,
                "CreateDate": "0001-01-01T00:00:00",
                "ModifyDate": "0001-01-01T00:00:00",
                "UpdateBy": 0,
                "UpdateSystem": null,
                "DiscountApprovalStatus": null,
                "ByPassDiscountApproval": false,
                "DiscountApprovals": null,
                "DiscountDetails": [
                  
                ],
                "Bids": [
                  
                ],
                "DiscountApprovalLink": null,
                "DiscountApprovalRequestID": null,
                "TotalMarginAmt": 0.0
              },
              "BackendOrders": [
                
              ],
              "BackendErrors": [
                
              ],
              "CreateDate": "0001-01-01T00:00:00",
              "ModifyDate": "0001-01-01T00:00:00"
            }
          ],
          "DispositionCode": null,
          "FulFillmentOperationResult": {
            "ID": "00000000-0000-0000-0000-000000000000",
            "AdjustedShippingTotal": 0.0,
            "AdjustedSurchargeTotal": 0.0,
            "AdjustedSubTotal": 0.0,
            "TaxTotal": 0.0,
            "AdjustedTotalTotal": 0.0,
            "AllDiscountTotal": 0.0,
            "TotalImpact": 0.0,
            "UnadjustedSubTotal": 0.0,
            "UnadjustedShippingTotal": 0.0,
            "EstimatedShipDate": "0001-01-01T00:00:00",
            "EstimatedDeliveryDate": "0001-01-01T00:00:00"
          },
          "PaymentImpacts": [
            
          ],
          "FulfillmentItemInformation": [
            
          ],
          "SelectedDeliveryShift": null,
          "StopAtQuote": false,
          "Frictionless": true,
          "TaskCodesToBeAdded": [
            
          ],
          "TaskCodesToBeReleased": [
            
          ],
          "ReasonComment": null,
          "Selected": [
            
          ],
          "Results": [
            
          ],
          "WTMOrderNum": null
        }
      ],
      "PONumber": null,
      "PODateReceived": "0001-01-01T00:00:00",
      "BankAccountID": null
    }
  ],
  "Id": "9bc0c5d7-2c19-4bda-b889-a527862ef64a",
  "DPID": 2001484237207,
  "LinkToCancelledDPID": 0,
  "LinkToCancelledOrder": null,
  "LinkToReenteredDpid": 0,
  "PaymentMethods": [
    {
      "BankName": null,
      "AccountNumber": null,
      "TransferDate": "0001-01-01T00:00:00",
      "PurchaseOrderNumber": "123",
      "ReferenceNumber": "",
      "ID": "d5f8ee58-2df9-4d01-a17b-9f1f51acf515",
      "GlobalPaymentID": null,
      "PaymentType": "WT",
      "TypeOfFunds": 0,
      "PaymentDescription": "Wire Transfer",
      "Amount": 382.80,
      "Terms": null,
      "MAGuid": "00000000-0000-0000-0000-000000000000",
      "BackendPaycode": null,
      "ExtendedProperties": [
        
      ],
      "IsValid": false,
      "BillingContact": null
    }
  ],
  "OrderContact": {
    "Name": {
      "Prefix": null,
      "First": "Akshay",
      "MI": null,
      "Last": "Shetty",
      "Suffix": null,
      "Title": "Title",
      "MAGuid": "00000000-0000-0000-0000-000000000000"
    },
    "SecondaryName": null,
    "Language": null,
    "Currency": null,
    "HasAddress": false,
    "Id": "eae2a120-a2df-4db3-8e06-1f99ec4f96b9",
    "CustomerType": 0,
    "EmailType": 0,
    "LinkNumber": null,
    "EmployeeNum": null,
    "OrganizationInfo": {
      "Title": null,
      "SecondaryName": null,
      "BranchName": null,
      "CompanyRegistrationNo": null,
      "CompanyRegistrationDate": null,
      "Fields": [
        
      ],
      "ID": null,
      "Department": null,
      "Name": null,
      "Type": null
    },
    "CompanyName": null,
    "Address": {
      "Id": "a0ac63b5-9b89-4d7a-ba43-5ea1ea4c1c92",
      "AddressId": "94fe0363-f416-4623-841b-bb2f7099e07f",
      "BackendAddressId": null,
      "Line1": "",
      "Line2": "",
      "Line3": "",
      "Line4": "",
      "Line5": "",
      "Other1": "",
      "Other2": "",
      "Other3": "",
      "Other4": "",
      "Other5": "",
      "Region": "",
      "City": "",
      "PostalCode": "",
      "Country": "uk",
      "IsAddressVerified": false,
      "IsValid": false,
      "MAGuid": "00000000-0000-0000-0000-000000000000",
      "Source": null,
      "AddressType": 0,
      "AddressStatus": 0,
      "SequenceNumber": null
    },
    "EmailAddress": {
      "Email": "akshay@dell.com",
      "MailToName": "akshay",
      "Host": "dell.com",
      "Type": null
    },
    "RefEmailAddress": {
      "Email": "",
      "MailToName": null,
      "Host": null,
      "Type": null
    },
    "AdditionalEmails": [
      
    ],
    "PhoneContacts": [
      
    ],
    "OptInFlags": 1,
    "BestTimeToCall": 0,
    "ContactType": 0,
    "ContactId": null,
    "Position": null,
    "BackendCustomerNumber": -1,
    "SequenceID": 0,
    "MAGuid": "00000000-0000-0000-0000-000000000000",
    "Fields": [
      {
        "FieldKey": "CustomerNumber",
        "FieldValue": "-1",
        "Namespace": "",
        "ExtendedProperties": [
          
        ],
        "ValueFrom": null,
        "Dell.Commerce.Pipeline.IField.FieldKey": "CustomerNumber",
        "Dell.Commerce.Pipeline.IField.FieldValue": "-1"
      }
    ],
    "IsValid": false,
    "TaxIdPrimary": null,
    "TaxIdSecondary": null,
    "TaxCategory": null,
    "TAACompliant": null
  },
  "IRN": "GB0061-2243-62435",
  "PriceAdjustments": [
    
  ],
  "ExplicitPromotions": [
    
  ],
  "ExportForm": {
    "Contact": {
      "Name": {
        "Prefix": null,
        "First": null,
        "MI": null,
        "Last": null,
        "Suffix": null,
        "Title": null,
        "MAGuid": "00000000-0000-0000-0000-000000000000"
      },
      "SecondaryName": null,
      "Language": null,
      "Currency": null,
      "HasAddress": false,
      "Id": "581ef503-95df-4ec4-8fc9-bfd4b0272032",
      "CustomerType": 0,
      "EmailType": 0,
      "LinkNumber": null,
      "EmployeeNum": null,
      "OrganizationInfo": {
        "Title": null,
        "SecondaryName": null,
        "BranchName": null,
        "CompanyRegistrationNo": null,
        "CompanyRegistrationDate": null,
        "Fields": [
          
        ],
        "ID": null,
        "Department": null,
        "Name": null,
        "Type": null
      },
      "CompanyName": null,
      "Address": {
        "Id": "581cf6d1-55a4-4424-8590-7ba35a6307d5",
        "AddressId": "4a090172-77ec-43ce-9436-778c6452116a",
        "BackendAddressId": null,
        "Line1": "",
        "Line2": "",
        "Line3": "",
        "Line4": "",
        "Line5": "",
        "Other1": "",
        "Other2": "",
        "Other3": "",
        "Other4": "",
        "Other5": "",
        "Region": "",
        "City": "",
        "PostalCode": "",
        "Country": "uk",
        "IsAddressVerified": false,
        "IsValid": false,
        "MAGuid": "00000000-0000-0000-0000-000000000000",
        "Source": null,
        "AddressType": 0,
        "AddressStatus": 0,
        "SequenceNumber": null
      },
      "EmailAddress": {
        "Email": "",
        "MailToName": null,
        "Host": null,
        "Type": null
      },
      "RefEmailAddress": {
        "Email": "",
        "MailToName": null,
        "Host": null,
        "Type": null
      },
      "AdditionalEmails": [
        
      ],
      "PhoneContacts": [
        
      ],
      "OptInFlags": 0,
      "BestTimeToCall": 0,
      "ContactType": 0,
      "ContactId": null,
      "Position": null,
      "BackendCustomerNumber": -1,
      "SequenceID": 0,
      "MAGuid": "00000000-0000-0000-0000-000000000000",
      "Fields": [
        {
          "FieldKey": "CustomerNumber",
          "FieldValue": "-1",
          "Namespace": "",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "CustomerNumber",
          "Dell.Commerce.Pipeline.IField.FieldValue": "-1"
        }
      ],
      "IsValid": false,
      "TaxIdPrimary": null,
      "TaxIdSecondary": null,
      "TaxCategory": null,
      "TAACompliant": null
    },
    "Questions": [
      {
        "ID": "country",
        "QuestionText": null,
        "QuestionFormat": 0,
        "Answer": null,
        "Answers": [
          
        ]
      },
      {
        "ID": "intended_use",
        "QuestionText": "1)  How will these products be used?",
        "QuestionFormat": 0,
        "Answer": "HM:Home",
        "Answers": [
          
        ]
      },
      {
        "ID": "same_address_as_shipping",
        "QuestionText": "2)  Where will these products be used?",
        "QuestionFormat": 0,
        "Answer": "Y:These products will be used at the listed bill-to and/or ship-to address",
        "Answers": [
          
        ]
      }
    ],
    "SameAddressAsShipping": true,
    "RequiresExportReview": false
  },
  "ExportIntent": 2,
  "ReceiveConfirmationEmail": true,
  "AdvertisementCode": null,
  "LegacyCartInfo": [
    
  ],
  "DateCreated": "2014-02-12T05:12:49.609375",
  "DateModified": "2014-03-26T14:46:14.7726543+05:30",
  "ExpirationDays": 30,
  "RetentionDays": 90,
  "Creator": null,
  "CartType": "O",
  "Name": null,
  "Notes": null,
  "Description": null,
  "QuoteNumber": 0,
  "QuoteVersionNumber": 1,
  "InternalQuoteId": -1,
  "QuoteStatus": 0,
  "QuoteValidityDays": 0,
  "ProcessStatus": null,
  "SolutionId": -1,
  "SolutionVersion": -1,
  "SolutionName": "",
  "CustomCheckoutFields": [
    
  ],
  "SalesReps": [
    {
      "Fields": [
        
      ],
      "Name": {
        "Prefix": null,
        "First": "",
        "MI": null,
        "Last": "",
        "Suffix": null,
        "Title": null,
        "MAGuid": "00000000-0000-0000-0000-000000000000"
      },
      "ID": -1,
      "SalesPersonNumber": 0,
      "Phone": null,
      "EmployeeId": null,
      "FaxNumber": null,
      "Source": 0,
      "Email": null,
      "SalesRepType": 0
    }
  ],
  "CatalogId": 0,
  "IsServiceEnabled": false,
  "Connections": [
    
  ],
  "Attributes": [
    
  ],
  "ProcessingResults": [
    
  ],
  "RequestType": 1,
  "RequestID": "9bc0c5d7-2c19-4bda-b889-a527862ef64a",
  "CommerceContext": {
    "ExtendedProperties": [
      {
        "FieldKey": "DateSubmitted",
        "FieldValue": "02/12/2014 05:17:42",
        "Namespace": "FC",
        "ExtendedProperties": [
          
        ],
        "ValueFrom": null,
        "Dell.Commerce.Pipeline.IField.FieldKey": "DateSubmitted",
        "Dell.Commerce.Pipeline.IField.FieldValue": "02/12/2014 05:17:42"
      },
      {
        "FieldKey": "IsSplitOrder",
        "FieldValue": "False",
        "Namespace": "FC",
        "ExtendedProperties": [
          
        ],
        "ValueFrom": null,
        "Dell.Commerce.Pipeline.IField.FieldKey": "IsSplitOrder",
        "Dell.Commerce.Pipeline.IField.FieldValue": "False"
      }
    ],
    "TaxInformation": {
      "TaxOverrideRate": "",
      "OverrideAllTaxType": false,
      "FEDTaxable": null,
      "STATETaxable": null,
      "TaxIdPrimary": null,
      "ReducedTaxRate": null,
      "TaxExemptCode": null,
      "TaxCategory": null,
      "ResaleClass": null,
      "GIROComercial": null,
      "TaxIncludedState": 0,
      "ExtendedProperties": [
        
      ],
      "TaxExemptions": [
        {
          "TaxNumber": null,
          "TaxType": "S",
          "IsExempt": false,
          "ExemptReason": "",
          "ExemptCertificateNumber": "",
          "LicenseNumber": null
        }
      ],
      "TaxIdSecondary": null,
      "RequireTax": true
    },
    "ShipToCountry": null,
    "Band": 1,
    "IsConfigured": false,
    "CartType": null,
    "CartSessionId": null,
    "Country": "uk",
    "Currency": "GBP",
    "DisplayCurrency": "GBP",
    "ActiveHedgeRate": 1.0,
    "DisableInternalCurrencyConversion": false,
    "Language": "en",
    "CustomerSet": "ukbsdt1",
    "CompanyNumber": "29",
    "Segment": "",
    "Region": "EMEA",
    "Debug": false,
    "Secure": false,
    "AccessGroup": null,
    "SourceApplicationName": "ECOMM",
    "SourceApplicationVersion": "2013.11.29.239",
    "SourceMachineName": "U3VMGQECM8",
    "BrowserIP": "10.32.85.135",
    "UserAgent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; InfoPath.2; .NET4.0C; .NET4.0E; .NET CLR 3.5.30729; .NET CLR 3.0.30729)",
    "SiteServerID": "unknown_cookie",
    "ChannelID": "15181",
    "NonWestern": null,
    "CurrentSystem": null,
    "DestinationSystem": null,
    "QueueCode": "",
    "TransactionType": 0,
    "DefaultShipMethod": null,
    "DefaultShipDestinationCode": null,
    "ClassCode": null,
    "StateForItemTaxCalculation": null,
    "CalculateTax": true,
    "SuppressTax": false,
    "EnableTaxInclusiveDNCCalculations": false,
    "EnableDNCSpreadingToServiceSkus": false,
    "EnableOptionalPromotions": true,
    "PaymentOptions": null,
    "EnableMarketableDiscountForFinancingPaymentOnly": false,
    "IsGlobalPortal": false,
    "OMSCustomerID": "-1",
    "CustomerAccountOmsMapId": null,
    "DepartmentCode": "UKBSDT",
    "StoreTitle": null,
    "AccountTeam": [
      
    ],
    "NonStandardTransaction": false,
    "CdcEnabled": false,
    "CustomerAccountId": 0,
    "RoundingMethod": 3,
    "Precision": 2,
    "DNCRoundingMethod": 3,
    "DNCPrecision": 2,
    "BusinessUnitId": 0,
    "DncApplicationID": 0,
    "FraudFlag": null,
    "FraudNumber": null,
    "FraudType": null,
    "SimpleProfile": {
      "PartyID": "00000000-0000-0000-0000-000000000000",
      "PersonID": "00000000-0000-0000-0000-000000000000",
      "AccountID": "00000000-0000-0000-0000-000000000000",
      "OrgID": "00000000-0000-0000-0000-000000000000",
      "RelationID": "00000000-0000-0000-0000-000000000000",
      "Role": null,
      "CustomerSet": null,
      "Segment": null,
      "PremierPageID": null,
      "ICUCustomerID": null,
      "PremierAccountName": null,
      "UpdateProfileInfo": false
    },
    "CalculateShipping": true,
    "EnableShippingRules": false,
    "EnableDNC": true,
    "ShowUpliftInCart": false,
    "UseReseller": false,
    "Culture": null,
    "IovationBlackBox": "0400mTR4Z7+BQcwNf94lis1ztjXGwoPOvePAPe3tG+3O8rrXDuUVDWUXIDISvgfPaxdsl8JMxMmeOeEcx9q03TAuBoZ1nRnsAm5BWBQpSGJ/OL8/yoVIBnjain3l6hbzqbSTjyylda8tv/p+hOVDTbnr7BCIp0wtRbmoh0ylJGfM1m7wkXCb73sJSrfE6hIm6XmwZVPhLBCBmerDKjz4F9VtlLK/Htggh04QYa9UON4lCK2OZTYvnKL0JZsrXuKYdy0a56xmbGxq0eVV3lJlQpwsvZ5+glsulYgqIk58X3QGmlnCzrg4rEj1eRM7vRstse68s+u7ochn4W0O8nAEuGqAHulqWhTCsvxKZ1TWMz9ZXdDDJHzHkD8s4INYU/TI6xDHIk58X3QGmlmLdJz+8QdD4smlQQUWsxc2lU99UoH2xkkL1HsMnBcPcNtDaM/mmeQi/pgCQT4xw662BkFwrZ1pgLW7GyD04jLCAXv8pIgox3hfq3bGwE2owHGL9SBAEfPHvXTdi12xhAhLXs1sHayzrCqMZNLQW9UFvsXDIQWneTDvUSbJ+Ltz3RU23OhAhlgiAuHxUJ0EidcKvjzpEn3i29T16TeM5diEHf7WUtiodkTkA+8/joBQyE2ZeBKJ1fg2DtPq/jlyS0stH5CLMJiFqNsezWDjDReYZ3ickyxF24hP4ehBV15lxEJ9p9DAJOHN+snP9+SWhwxVxvHWf/uK445lNi+covQlHroB1MVbmjRYLMRJxdEc6U1w7kldV48ZCNfxyKzoRclY2KXJ0r5ewQq0AVkBtcxvhLiYlQv6i61bwQb0B3pps/Iqo4O34c+TMr8O3MhREjLCNXwbI9tooQP5fR0EmOYw7Q53oLCzs+1FKvtImCASTAq0AVkBtcxvHkT6Wv8hqpDGwV/YaNCL12ONlKQFMFWI4/P6K9PkFaQZhZzwCZq88FWG5D3KIVEHGW7vo6r7e4s9mCZ9C4UUZLPKreG9QU9vArJItkHztoJch2U+BdJXDvBgxlw3bTDc+kQSaojpxPvRaTXakeq9JYgU9Mojl1i3RkVRsRdOCEpVJUiLP0GDKuqDNsDFptohyMunic1pM7AlInCIoy/cLjRhnUZof6XsJ+JnK2a4v1NDY7OINv1BCfaS0wgph8rz9NvWUFh2IoRZwIMZlC6mTmV5fCPP2Ni8ZcBbGh2B2n8jAfnGr5+skFtLbOG9WzIxiuv6Xcf4KsIalwCbudP4Vj3u9vhCa4aagPqZCxOeq/ybbQczon5vG7yGMRiMzXwaSTqWiLyQjCtFQnLgM2I5gWsBNv9PR2FVveCl99r31K+IAL2T+/hUiwCORh1OKbYN/fEueDEvlIr+h0XDEqyejpQL8E0wyEGvaU9EmVIawHmQ7a0CUrxNj4pgSvBSl9bG6LEtcYEgIDV3nAprYw6t72sBNv9PR2FVveCl99r31K+IAL2T+/hUiwCORh1OKbYN/fEueDEvlIr+h0XDEqyejpQL8E0wyEGvMzFiJduKej+sp9031dgMpADmrZyXWBKtASIdNxqn/hAT9DjJzgzYxybNd2bSnf7+Q4C7x7a50tDy8MKbzB2G1NWxHsT1AyG5s0b8ryba4m+D8I4wviNo/6ctybQIGfx01T5fQ7j6Xvz2X+MO8qBC6HQcCRrFsoquX0lfUyzCsNZjw0DyuKakOx06GUQ1dXYh5NGPesZ1XgH0aWg07/HAI+SbWuBf/j+wNyvZ9ZR5AUsoP5rJ0GjrWUpG1cAzj2yIEakVQAHVXaW5Rs8wyq/zoFtA8/C2v9sYbAv0OYu7whXXYKRYYeJsSw3LEW0UCKY1q3zorkFD5ThxAykKOmk/9yTV7L+WpHJhAei4UKmXJgp78qr5WU7pB8ZxTmF+/qbk",
    "HedgeRateAtQuote": 1.0
  },
  "DispositionCode": null,
  "CurrentOwner": null,
  "ValidationResult": {
    "IsValid": true,
    "Messages": [
      
    ]
  },
  "Service": [
    
  ],
  "CouponStorage": [
    
  ],
  "NonAppliedCouponStorage": [
    
  ],
  "MarketablePriceAdjustments": [
    
  ],
  "OrderType": 0,
  "DPIDList": [
    
  ],
  "EquoteIdList": [
    
  ],
  "Contacts": [
    {
      "Name": {
        "Prefix": null,
        "First": null,
        "MI": null,
        "Last": null,
        "Suffix": null,
        "Title": null,
        "MAGuid": "00000000-0000-0000-0000-000000000000"
      },
      "SecondaryName": null,
      "Language": null,
      "Currency": null,
      "HasAddress": false,
      "Id": "fd1bfbe2-e856-4246-a9bb-c2b0d5ecb30f",
      "CustomerType": 0,
      "EmailType": 0,
      "LinkNumber": null,
      "EmployeeNum": null,
      "OrganizationInfo": {
        "Title": null,
        "SecondaryName": null,
        "BranchName": null,
        "CompanyRegistrationNo": null,
        "CompanyRegistrationDate": null,
        "Fields": [
          
        ],
        "ID": null,
        "Department": null,
        "Name": null,
        "Type": null
      },
      "CompanyName": null,
      "Address": {
        "Id": "2600c5de-aec9-4b06-9819-9ac04d5b8856",
        "AddressId": "300b9379-d015-44cf-a608-f0d209d0cd7c",
        "BackendAddressId": null,
        "Line1": "",
        "Line2": "",
        "Line3": "",
        "Line4": "",
        "Line5": "",
        "Other1": "",
        "Other2": "",
        "Other3": "",
        "Other4": "",
        "Other5": "",
        "Region": "",
        "City": "",
        "PostalCode": "",
        "Country": "uk",
        "IsAddressVerified": false,
        "IsValid": false,
        "MAGuid": "00000000-0000-0000-0000-000000000000",
        "Source": null,
        "AddressType": 0,
        "AddressStatus": 0,
        "SequenceNumber": null
      },
      "EmailAddress": {
        "Email": "",
        "MailToName": null,
        "Host": null,
        "Type": null
      },
      "RefEmailAddress": {
        "Email": "",
        "MailToName": null,
        "Host": null,
        "Type": null
      },
      "AdditionalEmails": [
        
      ],
      "PhoneContacts": [
        
      ],
      "OptInFlags": 0,
      "BestTimeToCall": 0,
      "ContactType": 21,
      "ContactId": null,
      "Position": null,
      "BackendCustomerNumber": -1,
      "SequenceID": 0,
      "MAGuid": "00000000-0000-0000-0000-000000000000",
      "Fields": [
        {
          "FieldKey": "CustomerNumber",
          "FieldValue": "-1",
          "Namespace": "",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "CustomerNumber",
          "Dell.Commerce.Pipeline.IField.FieldValue": "-1"
        }
      ],
      "IsValid": false,
      "TaxIdPrimary": null,
      "TaxIdSecondary": null,
      "TaxCategory": null,
      "TAACompliant": null
    },
    {
      "Name": {
        "Prefix": null,
        "First": null,
        "MI": null,
        "Last": null,
        "Suffix": null,
        "Title": null,
        "MAGuid": "00000000-0000-0000-0000-000000000000"
      },
      "SecondaryName": null,
      "Language": null,
      "Currency": null,
      "HasAddress": false,
      "Id": "9cdf524c-71fd-4c32-bc45-669852a0721a",
      "CustomerType": 0,
      "EmailType": 0,
      "LinkNumber": null,
      "EmployeeNum": null,
      "OrganizationInfo": {
        "Title": null,
        "SecondaryName": null,
        "BranchName": null,
        "CompanyRegistrationNo": null,
        "CompanyRegistrationDate": null,
        "Fields": [
          
        ],
        "ID": null,
        "Department": null,
        "Name": null,
        "Type": null
      },
      "CompanyName": null,
      "Address": {
        "Id": "e302bf73-483c-4b35-b2cb-8318053cc76b",
        "AddressId": "2ac117cd-d9a6-410a-8f79-e6f96b2d64c8",
        "BackendAddressId": null,
        "Line1": "",
        "Line2": "",
        "Line3": "",
        "Line4": "",
        "Line5": "",
        "Other1": "",
        "Other2": "",
        "Other3": "",
        "Other4": "",
        "Other5": "",
        "Region": "",
        "City": "",
        "PostalCode": "",
        "Country": "uk",
        "IsAddressVerified": false,
        "IsValid": false,
        "MAGuid": "00000000-0000-0000-0000-000000000000",
        "Source": null,
        "AddressType": 0,
        "AddressStatus": 0,
        "SequenceNumber": null
      },
      "EmailAddress": {
        "Email": "",
        "MailToName": null,
        "Host": null,
        "Type": null
      },
      "RefEmailAddress": {
        "Email": "",
        "MailToName": null,
        "Host": null,
        "Type": null
      },
      "AdditionalEmails": [
        
      ],
      "PhoneContacts": [
        
      ],
      "OptInFlags": 0,
      "BestTimeToCall": 0,
      "ContactType": 22,
      "ContactId": null,
      "Position": null,
      "BackendCustomerNumber": -1,
      "SequenceID": 0,
      "MAGuid": "00000000-0000-0000-0000-000000000000",
      "Fields": [
        {
          "FieldKey": "CustomerNumber",
          "FieldValue": "-1",
          "Namespace": "",
          "ExtendedProperties": [
            
          ],
          "ValueFrom": null,
          "Dell.Commerce.Pipeline.IField.FieldKey": "CustomerNumber",
          "Dell.Commerce.Pipeline.IField.FieldValue": "-1"
        }
      ],
      "IsValid": false,
      "TaxIdPrimary": null,
      "TaxIdSecondary": null,
      "TaxCategory": null,
      "TAACompliant": null
    }
  ],
  "IsCPF": false,
  "TermsAndConditions": null,
  "PurchaseOption": null,
  "CartState": 0,
  "ParentEquoteId": 0,
  "HoldReasons": [
    
  ],
  "OGOperationResult": {
    "AdjustedTotalTotal": 359.0,
    "AdjustedSubTotal": 564.0000,
    "TaxTotal": 94.00,
    "AdjustedSnpFreightTotal": 0.0,
    "ApproximateTotalTotal": 564.0000,
    "AdjustedShippingTotal": 111.0000,
    "MarginTotal": 122.41,
    "MarginPercentage": 34.097493036211699164345403900,
    "UnadjustedSubTotal": 359.0,
    "AllDiscountTotal": 0.0,
    "UnadjustedShippingTotal": 111.0000,
    "ShippingDiscountTotal": 0.0000,
    "AdjustedSurchargeTotal": 0.0,
    "EstimatedShipDate": "0001-01-01T00:00:00"
  },
  "Version": "14.4",
  "OpportunityID": ""
}
*/
$scope.submit=function(){
  $scope.waiting=false;
  $scope.loading=true;
  ngProgress.start();
  $http.get('http://wn7x64-1gmw5z1/DellAPI/api/Home/GetOrderGroup/'+$scope.dpid).success(function(data) {
    $scope.formData = data;
  //$scope.loading=false;
  $scope.loading=false;
  ngProgress.complete();
  });  
}

/*
$scope.editField = function(new_val,id){
var update = {
				'id': id,
				'old_val': $scope.copy,
				'new_val': new_val,
				'action': 'E' 
			 }
			 
$scope.updateList.push(update);
}

$scope.createCopy=function(old_val,id,field){
$scope.copy = old_val;
$(field).focusout(function(){
$scope.test="hai";
$scope.editField(field,id);
});

}
*/
$scope.changeEditState=function(){
if($scope.iseditable==true)
{
//$scope.loading = true;
$scope.saving = true;
var dat = JSON.stringify($scope.formData);
$http({
            url: 'http://WN7X64-1GMW5Z1/DellAPI/api/Home/SaveOrderGroup/',
            method: "POST",
            data: dat,
            headers: {'Content-Type': 'text/plain'}
        }).success(function (data, status, headers, config) {
				//$scope.loading = false;
				$scope.saving = false;
				$scope.iseditable=false;
				$scope.loading=true;
				  ngProgress.start();
				  $http.get('http://wn7x64-1gmw5z1/DellAPI/api/Home/GetOrderGroup/'+$scope.dpid).success(function(data) {
					$scope.formData = data;
				  //$scope.loading=false;
				  $scope.loading=false;
				  ngProgress.complete();});
				
            }).error(function (data, status, headers, config) {
				//$scope.loading=false;
				$scope.saving=false;
				$scope.iseditable=false;
            });
			

}
else
$scope.iseditable=true;
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
	if(x==null)
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
	var x=$scope.createArray($scope.formData.OrderForms.$values[0].FulfillmentUnits.$values);
	//return(x[0].ComplexConfigId);
	for(var i=0,len1=x.length;i<len1;i++)
	{
	  y=$scope.createArray(x[i].FulfillmentItemInformation.$values);
	  for(var j=0,len2=y.length;j<len2;j++)
	  {
	    if(y[j].ItemId==itemId)
		{return(x[i]);}
	  }
	
	}
 }
 
 $scope.getItem=function(itemId){
  var x=$scope.createArray($scope.formData.OrderForms.$values[0].Items.$values);
  for(var i=0,len1=x.length;i<len1;i++)
	{
		if(x[i].Id==itemId)
		{return x[i];}
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
	var of = $scope.formData.OrderForms.$values[0];
	$scope.accountName=null;
     for(var i=0,len=of.ExtendedProperties.$values.length; i < len ;i++)
        {
            if (of.ExtendedProperties.$values[i] == "AccountName")
            {
                $scope.accountName = of.ExtendedProperties.$values[i].FieldValue;
            }
        }
 }
 
 $scope.getTACNumber=function(fraudNumber){
 $scope.tacNumber = null;
	 if(fraudNumber != null)
	 {
		
	 
	 }
 
 }
 
 $scope.getTotalImpact=function(promo){
 if (promo.TotalImpact > 0)
 return promo.TotalImpact;
 else if(promo.TotalAdjustment>0)
 return promo.TotalAdjustment;
 else
 return null;
  }
 
 $scope.deleteModule=function(item,modNumber){
 var x=$scope.createArray(item.ConfigDetails.Modules.$values);
  for(var i=0,len=x.length;i<len;i++)
	{
		if(x[i].Sequence==modNumber)
		{
		x.splice(i,1);
		break;
		}
	}
 
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
	if($scope.isnull(item.ConfigDetails.Modules.$values)||$scope.isnull(unit)||unit.ComplexConfigId!="0")
	{return true;}
	else
	{return false;}
	}
});
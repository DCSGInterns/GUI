var GcmEmeaApp = angular.module('gcmEmeaApp', []);

GcmEmeaApp.controller('ItemCtrl', function ($scope) {
	$scope.formData= {
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
	$scope.getFulfillmentUnit=function(itemId) {
	var x=$scope.formData.OrderGroup.OrderForms.OrderForm.FulfillmentUnits.FulfillmentUnit;
	//return(x[0].ComplexConfigId);
	for(var i=0,len1=x.length;i<len1;i++)
	{
	  y=x[i].FulfillmentItemInformation.FulfillmentItemInformation;
	  for(var j=0,len2=y.length;j<len2;j++)
	  {
	    if(y[j].ItemId==itemId)
		{return(x[i]);}
	  }
	
	}
	
	
	}
	
	});
  
 GcmEmeaApp.controller('ctrl2',function($scope) {
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
} });
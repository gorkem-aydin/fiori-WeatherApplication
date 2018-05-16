/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller" , 
	"sap/ui/model/json/JSONModel",
	"sap/m/UploadCollectionParameter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/m/Link',
	'sap/m/MessagePopover',
	'sap/m/MessagePopoverItem'
	
], function(Controller,JSONModel,UploadCollectionParameter, Filter, formatter, MessagePopoverItem, MessagePopover, Link,FilterOperator) {
	"use strict";

	return Controller.extend("mydemodemo.controller.View1", {
			
		
				  
		onInit: function() {
		
			this._loadForecast();
			this._loadForecast1();
			this._loadForecast2();
	
		},

		_formatDate: function(date) {
			var d = new Date(date),
				month = '' + (d.getMonth() + 1),
				day = '' + d.getDate(),
				year = d.getFullYear();

			if (month.length < 2) {
				month = '0' + month;
			}
			if (day.length < 2){
				day = '0' + day;	
			} 
			return [year, month, day].join('-');
		},

		_mapResults: function(results) {
			
			var oModel = this.getView().getModel();
			oModel.setProperty("/city", results.city.name);
		
			oModel.setProperty("/country", results.city.country);
		

			var aForecastResults = [];
		
			for (var i = 0; i < results.list.length; i++) {
				var oTemp = results.list[i].temp;
				var date = this._formatDate(results.list[i].dt * 1000);
				aForecastResults.push({
					date: date,
					temp: oTemp.day,
					units: "Celsius",
					humidity: results.list[i].humidity
				});
			}
		
			

			oModel.setProperty("/items", aForecastResults);
		},
		_mapResults1: function(results1) {
			var oModel = this.getView().getModel();
			oModel.setProperty("/city1", results1.city.name);
		
			oModel.setProperty("/country1", results1.city.country);
		

			var aForecastResults = [];
		
			for (var i = 0; i < results1.list.length; i++) {
				var oTemp = results1.list[i].temp;
				var date = this._formatDate(results1.list[i].dt * 1000);
				aForecastResults.push({
					date: date,
					temp: oTemp.day,
					units: "Celsius",
					humidity: results1.list[i].humidity
				});
			}
		
			

			oModel.setProperty("/items1", aForecastResults);
		},
			
			_mapResults2: function(results2) {
			var oModel = this.getView().getModel();
			oModel.setProperty("/city2", results2.city.name);
		
			oModel.setProperty("/country2", results2.city.country);
		

			var aForecastResults = [];
		
			for (var i = 0; i < results2.list.length; i++) {
				var oTemp = results2.list[i].temp;
				var date = this._formatDate(results2.list[i].dt * 1000);
				aForecastResults.push({
					date: date,
					temp: oTemp.day,
					units: "Celsius",
					humidity: results2.list[i].humidity
				});
			}
		
			

			oModel.setProperty("/items2", aForecastResults);
		},
		

		_loadForecast: function() {
			var oView = this.getView();
		
				var oParams = {
				q: "Istanbul",  // Get the weather in london
				units: "metric", 
				appid: "81b8ac9c533cfa9b791544a4ab15b524",  // replace with your API key
				cnt: 1,  // get weather for the next 16 days
				mode: "json"  // get it in JSON format 
			};
			
			var sUrl = "/OpenWeather/data/2.5/forecast/daily";
			oView.setBusy(true);

			var self = this;

			
				$.get(sUrl, oParams)
				.done(function(results) {
					oView.setBusy(false);
					self._mapResults(results);
				})	.fail(function(err) {
					oView.setBusy(false);
					if (err !== undefined) {
						var oErrorResponse = $.parseJSON(err.responseText);
						sap.m.MessageToast.show(oErrorResponse.message, {
							duration: 6000
						});
					} else {
						sap.m.MessageToast.show("Unknown error!");
					}
				});
		}  ,	
		
		
		_loadForecast1: function() {
			var oView = this.getView();
			var oParams = {
				q: "Kocaeli",  // Get the weather in london
				units: "metric", 
				appid: "81b8ac9c533cfa9b791544a4ab15b524",  // replace with your API key
				cnt: 1,  // get weather for the next 16 days
				mode: "json"  // get it in JSON format 
			};
			
			
			var sUrl = "/OpenWeather/data/2.5/forecast/daily";
			oView.setBusy(true);

			var self = this;

			$.get(sUrl, oParams)
				.done(function(results1) {
					oView.setBusy(false);
					self._mapResults1(results1);
				})
				.fail(function(err) {
					oView.setBusy(false);
					if (err !== undefined) {
						var oErrorResponse = $.parseJSON(err.responseText);
						sap.m.MessageToast.show(oErrorResponse.message, {
							duration: 6000
						});
					} else {
						sap.m.MessageToast.show("Unknown error!");
					}
				});
				
		}  ,
			_loadForecast2: function() {
			var oView = this.getView();
			var oParams = {
				q: "Ankara",  // Get the weather in london
				units: "metric", 
				appid: "81b8ac9c533cfa9b791544a4ab15b524",  // replace with your API key
				cnt: 1,  // get weather for the next 16 days
				mode: "json"  // get it in JSON format 
			};
			
			
			var sUrl = "/OpenWeather/data/2.5/forecast/daily";
			oView.setBusy(true);

			var self = this;

			$.get(sUrl, oParams)
				.done(function(results2) {
					oView.setBusy(false);
					self._mapResults2(results2);
				})
				.fail(function(err) {
					oView.setBusy(false);
					if (err !== undefined) {
						var oErrorResponse = $.parseJSON(err.responseText);
						sap.m.MessageToast.show(oErrorResponse.message, {
							duration: 6000
						});
					} else {
						sap.m.MessageToast.show("Unknown error!");
					}
				});
				
		}  
				  
				  
				  
				  
				  
				  
				  
				  

				
				
				
				
				
				
				
				
	});
});
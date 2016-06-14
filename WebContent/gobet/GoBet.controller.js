sap.ui.controller("gobet.GoBet", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf gobet.GoBet
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf gobet.GoBet
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf gobet.GoBet
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf gobet.GoBet
*/
//	onExit: function() {
//
//	}
    _toPlayerDetail: function(oEvent) {
        var item = oEvent.getSource();
        var oData = item.getModel().getObject(item.getBindingContextPath());
        var app = sap.ui.getCore().byId("app");
        if (app.getPage("PlayerProfile")) {
            app.to("PlayerProfile");
        } else {
            var view = new sap.ui.view({
                id : "PlayerProfile",
                viewName : "gobet.PlayerProfile",
                type : sap.ui.core.mvc.ViewType.JS
            });
            view.setModel(new sap.ui.model.json.JSONModel(oData));
            app.addPage(view);
            app.to("PlayerProfile");
        }
    }
});
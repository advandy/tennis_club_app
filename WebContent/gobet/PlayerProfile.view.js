sap.ui.jsview("gobet.PlayerProfile", {

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf gobet.PlayerProfile
     */
    getControllerName: function() {
        return "gobet.PlayerProfile";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away. 
     * @memberOf gobet.PlayerProfile
     */
    createContent: function(oController) {
        jQuery.sap.require("sap.ui.layout.form.SimpleForm");
        var oPanel = new sap.m.Panel({
            headerText: "Enter Data",
            expandable: true,
            expanded: true
        });
        var oLayout = new sap.ui.layout.form.SimpleForm();

        var oLabelFirstName = new sap.m.Label({
            text: "First Name"
        });
        var oTextFieldFirstName = new sap.m.Input({
            value: "{/name}"
        });

        var oLabelLastName = new sap.m.Label({
            text: "Points"
        });
        var oTextFieldLastName = new sap.m.Input({
            enabled: false,
            value: "{/points}"
        });

        var oSubmitButton = new sap.m.Button({
            text: "Submit "
        });
        oLayout.addContent(oLabelFirstName);
        oLayout.addContent(oTextFieldFirstName);
        oLayout.addContent(oLabelLastName);
        oLayout.addContent(oTextFieldLastName);
        oPanel.addContent(oLayout);
        oPanel.addContent(oSubmitButton);

        oSubmitButton.attachPress({
            firstName: oTextFieldFirstName,
            lastName: oTextFieldLastName
        }, oController.onPress);

        return new sap.m.Page({
            title: {
                path:"/name",
                formatter: function(name) {
                    return name+ "´s Profile";
                }
            },
            content: [oPanel],
            showNavButton: true,
            navButtonTap: oController._navBack
        });
    }

});

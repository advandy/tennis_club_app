sap.ui.jsview("gobet.GoBet", {

    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf gobet.GoBet
     */
    getControllerName: function() {
        return "gobet.GoBet";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away. 
     * @memberOf gobet.GoBet
     */
    createContent: function(oController) {
        var oData = { participants: [{ name: "n1", points: 10 }, { name: "n2", points: 0 }, { name: "n3", points: 20 }, { name: "n4", points: 0 }, { name: "n5", points: 20 }, { name: "n6", points: 0 }] };
        oData.count = oData.participants.length;
        var oModel = new sap.ui.model.json.JSONModel(oData);
        var oLeaderBoardTab = new sap.m.IconTabFilter({
            text: "Leadboard",
            count: "{/count}",
            content: [
                new sap.m.Table({
                    columns: [
                        new sap.m.Column({
                            header: new sap.m.Label({ text: "Name" }),
                            sortProperty: "points"
                        }),
                        new sap.m.Column({
                            header: new sap.m.Label({ text: "Score" }),
                        })
                    ],
                    items: {
                        path: "/participants",
                        template: new sap.m.ColumnListItem({
                            type: "Active",
                            press: oController._toPlayerDetail,

                            cells: [
                                new sap.m.Text({ text: "{name}" }),
                                new sap.m.Text({ text: "{points}" })
                            ]
                        }),
                        sorter: {
                            path: "points"
                        }
                    }
                })
            ]
        });

        oLeaderBoardTab.setModel(oModel);
        oLeaderBoardTab.getContent()[0].getBinding("items").sort(new sap.ui.model.Sorter("points", true));

        return new sap.m.Page({
            title: "Title",
            content: [
                new sap.m.IconTabBar({
                    upperCase: false,
                    design: sap.m.IconTabFilterDesign.Horizontal,
                    expanded: true,
                    items: [
                        oLeaderBoardTab,
                        new sap.m.IconTabFilter({
                            text: "Match",
                            content: [
                                new sap.m.Table({})
                            ]
                        })
                    ]
                })
            ]
        });
    }

});

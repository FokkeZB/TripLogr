function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "ti.ux.iconfont/" + s : s.substring(0, index) + "/ti.ux.iconfont/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.9001,
    key: "Window",
    style: {}
}, {
    isApi: true,
    priority: 1000.9004,
    key: "Label",
    style: {
        font: {
            fontFamily: Alloy.CFG.normalFont,
            fontSize: "14dp"
        },
        color: "#111"
    }
}, {
    isApi: true,
    priority: 1000.9005,
    key: "TableView",
    style: {
        backgroundColor: "#fff"
    }
}, {
    isApi: true,
    priority: 1000.9005999999999,
    key: "TableViewRow",
    style: {
        backgroundColor: "#fff",
        height: Ti.UI.SIZE,
        font: {
            fontFamily: Alloy.CFG.fontNormal,
            fontSize: 16
        }
    }
}, {
    isApi: true,
    priority: 1000.9007,
    key: "ListView",
    style: {
        backgroundColor: "transparent"
    }
}, {
    isApi: true,
    priority: 1000.9008,
    key: "ListViewItem",
    style: {
        backgroundColor: "#3fff"
    }
}, {
    isApi: true,
    priority: 1000.9009,
    key: "ActivityIndicator",
    style: {
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#d999",
        color: "#fff",
        font: {
            fontFamily: Alloy.CFG.boldFont,
            fontSize: "12dp",
            fontWeight: "bold"
        },
        zIndex: 999
    }
}, {
    isApi: true,
    priority: 1000.9012,
    key: "TextArea",
    style: {
        height: "60dp",
        left: "10dp",
        right: "10dp",
        backgroundColor: "#fff",
        suppressReturn: false,
        font: {
            fontFamily: Alloy.CFG.normalFont,
            fontSize: "16dp"
        },
        color: "#333",
        borderWidth: 2,
        borderColor: "#999",
        borderRadius: 6
    }
}, {
    isApi: true,
    priority: 1000.9013,
    key: "TextField",
    style: {
        height: "40dp",
        left: "10dp",
        right: "10dp",
        font: {
            fontFamily: Alloy.CFG.boldFont,
            fontSize: "16dp"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#333",
        borderRadius: 3
    }
}, {
    isApi: true,
    priority: 1101.9002,
    key: "Window",
    style: {
        barColor: "#fff",
        navTintColor: "#000",
        translucent: false
    }
}, {
    isApi: true,
    priority: 1101.9003000000002,
    key: "NavigationWindow",
    style: {}
}, {
    isApi: true,
    priority: 1101.901,
    key: "ActivityIndicator",
    style: {
        style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK
    }
}, {
    isClass: true,
    priority: 10000.9015,
    key: "view-row-separator",
    style: {
        height: .5,
        backgroundColor: "#eee",
        bottom: 0
    }
}, {
    isClass: true,
    priority: 10000.9016,
    key: "view-height-fit",
    style: {
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.9017,
    key: "view-height-width-fit",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.9018,
    key: "view-width-height-fit",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.901899999999,
    key: "tableviewrow-form-row",
    style: {
        height: "50",
        backgroundColor: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.902,
    key: "tableviewrow-rowitem",
    style: {
        height: "50",
        backgroundColor: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.9021,
    key: "label-paragraph",
    style: {
        left: "10dp",
        right: "10dp",
        color: "#000",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP,
        font: {
            fontFamily: Alloy.CFG.normalFont,
            fontSize: "12dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.9022,
    key: "label-row-title",
    style: {
        left: 35
    }
}, {
    isClass: true,
    priority: 10000.9023,
    key: "label-row-subtitle",
    style: {
        textAlign: "right",
        right: "35",
        color: "#666"
    }
}, {
    isClass: true,
    priority: 10000.902399999999,
    key: "label-row-count",
    style: {
        backgroundColor: "#bbb",
        color: "#fff",
        textAlign: "center",
        borderRadius: "8",
        height: "20",
        visible: "false",
        right: "35"
    }
}, {
    isClass: true,
    priority: 10000.9025,
    key: "label-H1",
    style: {
        left: "10dp",
        right: "10dp",
        color: "#333",
        font: {
            fontFamily: Alloy.CFG.fontNormal,
            fontSize: "22dp"
        },
        textAlign: "left",
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.9026,
    key: "label-H2",
    style: {
        color: "#333",
        font: {
            fontFamily: Alloy.CFG.fontBold,
            fontSize: "14dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.902699999999,
    key: "label-H3",
    style: {
        color: "#333",
        font: {
            fontFamily: Alloy.CFG.fontBold,
            fontSize: "14dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.9028,
    key: "label-H4",
    style: {
        color: "#333",
        font: {
            fontFamily: Alloy.CFG.fontBold,
            fontSize: "12dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.9029,
    key: "label-H5",
    style: {
        color: "#333",
        font: {
            fontFamily: Alloy.CFG.fontItalic,
            fontSize: "12dp"
        }
    }
}, {
    isClass: true,
    priority: 10000.903,
    key: "button-linkButton",
    style: {
        left: "20dp",
        right: "20dp",
        height: "30dp",
        backgroundColor: "#fff",
        color: "#fff",
        selectedColor: "#333",
        backgroundImage: "none",
        borderRadius: "5dp",
        borderColor: "#ccc",
        borderWidth: "1dp",
        font: {
            fontFamily: Alloy.CFG.fontBold,
            fontSize: "16dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.9031,
    key: "fa-row-haschild",
    style: {
        right: "10",
        icon: "fa-angle-right"
    }
}, {
    isClass: true,
    priority: 10000.903199999999,
    key: "fa-row-icon",
    style: {
        left: 10,
        size: 24,
        iconColor: "#333"
    }
}, {
    isClass: true,
    priority: 10000.9033,
    key: "textfield-row-control",
    style: {
        height: "40dp",
        left: "43dp",
        right: "10dp",
        font: {
            fontFamily: Alloy.CFG.boldFont,
            fontSize: "16dp"
        },
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        color: "#333"
    }
}, {
    isClass: true,
    priority: 10000.9034,
    key: "view-headerview-form",
    style: {
        backgroundColor: "#dfff",
        height: "35dp"
    }
}, {
    isClass: true,
    priority: 10000.9035,
    key: "label-tableviewsection-header",
    style: {
        left: "10",
        color: "#777",
        shadowColor: "#fff",
        shadowOffset: {
            x: .5,
            y: .5
        },
        font: {
            fontFamily: Alloy.CFG.fontNormal,
            fontSize: 16
        }
    }
}, {
    isClass: true,
    priority: 10000.9036,
    key: "view-forms-text-container",
    style: {
        left: 20,
        right: 20,
        top: 20,
        height: "100dp",
        borderColor: "#66c0ee",
        borderWidth: "1",
        backgroundColor: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.903699999999,
    key: "label-forms-text-title",
    style: {
        top: "5",
        left: "10",
        color: "#66c0ee",
        height: 40,
        font: {
            fontFamily: Alloy.CFG.fontLight,
            fontSize: 24
        }
    }
}, {
    isClass: true,
    priority: 10000.9038,
    key: "view-forms-text-separator",
    style: {
        height: "1",
        left: "10",
        right: "10",
        backgroundColor: "#66c0ee"
    }
}, {
    isClass: true,
    priority: 10000.9039,
    key: "label-forms-text-tiptext",
    style: {
        top: 130,
        color: "#666",
        font: {
            fontFamily: Alloy.CFG.fontNormal,
            fontSize: 12
        }
    }
}, {
    isClass: true,
    priority: 10000.904,
    key: "label-forms-text-errortext",
    style: {
        top: "130dp",
        color: "#f00",
        font: {
            fontFamily: Alloy.CFG.fontBold,
            fontSize: 12
        }
    }
}, {
    isClass: true,
    priority: 10000.9041,
    key: "image-forms-text-alert",
    style: {
        top: 14,
        right: 15,
        height: 26,
        width: 28,
        visible: false,
        image: WPATH("warning.png")
    }
}, {
    isClass: true,
    priority: 10000.904199999999,
    key: "activityindicator-forms-text",
    style: {
        right: 10,
        top: 10,
        width: 30,
        height: 30,
        message: "",
        backgroundColor: "transparent"
    }
}, {
    isClass: true,
    priority: 10000.9043,
    key: "textfield-forms-text",
    style: {
        bottom: 5,
        borderWidth: 0,
        font: {
            fontFamily: Alloy.CFG.fontNormal,
            fontSize: 18
        }
    }
}, {
    isClass: true,
    priority: 10000.9046,
    key: "icon-iconlabel",
    style: {
        left: 5,
        size: 20,
        textAlign: "left"
    }
}, {
    isClass: true,
    priority: 10000.9047,
    key: "label-iconlabel",
    style: {
        left: "30",
        font: {
            fontFamily: Alloy.CFG.fontBold,
            fontSize: 14
        },
        textAlign: "left"
    }
}, {
    isClass: true,
    priority: 10000.9048,
    key: "view-iconvalue",
    style: {
        top: 5,
        height: "50",
        width: "80"
    }
}, {
    isClass: true,
    priority: 10000.9049,
    key: "icon-iconvalue",
    style: {
        top: 0,
        size: 24,
        textAlign: "center"
    }
}, {
    isClass: true,
    priority: 10000.904999999999,
    key: "label-iconvalue",
    style: {
        bottom: 3,
        textAlign: "center",
        font: {
            fontFamily: Alloy.CFG.fontBold,
            fontSize: 10
        }
    }
}, {
    isClass: true,
    priority: 10000.9051,
    key: "view-pagingcontrol",
    style: {
        height: "10",
        zIndex: "999",
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.9052,
    key: "view-pagingcontrol-dot",
    style: {
        height: 4,
        width: 4,
        borderRadius: 2
    }
}, {
    isClass: true,
    priority: 10000.9053,
    key: "view-pagingcontrol-dot-active",
    style: {
        backgroundColor: "#000"
    }
}, {
    isClass: true,
    priority: 10000.9054,
    key: "view-pagingcontrol-dot-inactive",
    style: {
        backgroundColor: "#999"
    }
}, {
    isClass: true,
    priority: 10000.905499999999,
    key: "tableviewrow-scrollableview",
    style: {
        backgroundColor: "#fff"
    }
}, {
    isClass: true,
    priority: 10000.9056,
    key: "detailview-scrollableview",
    style: {
        height: "60",
        top: "10",
        backgroundColor: "#fff",
        disableBounce: "true"
    }
}, {
    isClass: true,
    priority: 10000.9057,
    key: "actionButton",
    style: {
        backgroundColor: "#B399",
        color: "#fff",
        font: {
            fontFamily: Alloy.CFG.fontBold,
            fontSize: 14
        },
        left: "0",
        right: "0",
        height: "50"
    }
}, {
    isClass: true,
    priority: 10101.9044,
    key: "textfield-forms-text",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
        clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
        suppressReturn: true
    }
}, {
    isId: true,
    priority: 100000.0065,
    key: "view",
    style: {
        top: 0,
        height: "54dp",
        backgroundColor: Alloy.CFG.barColor
    }
}, {
    isId: true,
    priority: 100000.0066,
    key: "img",
    style: {
        top: "5dp",
        height: "40dp",
        image: "/images/headerLogo.png"
    }
}, {
    isId: true,
    priority: 100000.0067,
    key: "line",
    style: {
        bottom: 0,
        height: "2dp",
        backgroundColor: "#6000"
    }
} ];
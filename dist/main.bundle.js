define(["esri/config", "dojo/on", "dojo/dom", "esri/WebScene", "dojo/dom-construct", "esri/geometry/Point", "esri/geometry/Polyline", "esri/geometry/geometryEngine", "esri/request", "esri/layers/FeatureLayer", "esri/Graphic", "esri/renderers/UniqueValueRenderer", "esri/symbols/PointSymbol3D", "esri/symbols/IconSymbol3DLayer", "dojo/promise/all", "dojo/Deferred", "esri/views/SceneView", "esri/tasks/support/Query", "esri/symbols/LineSymbol3D", "esri/symbols/LineSymbol3DLayer", "esri/symbols/LabelSymbol3D", "esri/layers/support/LabelClass", "esri/symbols/TextSymbol3DLayer", "esri/core/Accessor", "esri/core/accessorSupport/decorators"], function (t, e, i, s, a, r, n, o, h, l, d, u, c, p, m, f, g, v, b, x, y, C, N, w, M) {
    return function (t) {
        function e(s) {
            if (i[s]) return i[s].exports;
            var a = i[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return t[s].call(a.exports, a, a.exports, e), a.l = !0, a.exports
        }
        var i = {};
        return e.m = t, e.c = i, e.d = function (t, i, s) {
            e.o(t, i) || Object.defineProperty(t, i, {
                configurable: !1,
                enumerable: !0,
                get: s
            })
        }, e.n = function (t) {
            var i = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(i, "a", i), i
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 10)
    }([function (t, e) {
        t.exports = i
    }, function (t, e) {
        t.exports = a
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            scene: {
                websceneItemId: "74a4f190d34e468a8c95178c997a43bb"
            },
            data: {
                trailsServiceUrl: "https://services.arcgis.com/XTtANUDT8Va4DLwI/arcgis/rest/services/FiordlandNationalParkTramps/FeatureServer",
                trailAttributes: {
                    name: "Name",
                    id: "RouteId",
                    difficulty: "Difficulty",
                    category: "Category",
                    walktime: "Hiketime",
                    status: "Status",
                    ascent: "Ascent",
                    description: "Description"
                },
                filterOptions: {
                    singleChoice: ["difficulty", "category"],
                    range: ["walktime", "ascent"]
                }
            },
            colors: {
                defaultTrail: "#db5353",
                selectedTrail: "#f9a352"
            }
        }
    }, function (t, i) {
        t.exports = e
    }, function (e, i) {
        e.exports = t
    }, function (t, e) {
        t.exports = u
    }, function (t, e) {
        t.exports = s
    }, function (t, e) {
        t.exports = l
    }, function (t, e) {
        t.exports = m
    }, function (t, e) {
        t.exports = r
    }, function (t, e, i) {
        t.exports = i(11)
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), i(12), i(13), i(4).request.useIdentity = !1;
        var s = i(14),
            a = i(17),
            r = i(18),
            n = i(19),
            o = i(29),
            h = i(31),
            l = i(40),
            d = i(53);
        "serviceWorker" in navigator && d.register();
        var u = new s.default;
        a.default.init(u);
        new r.default(u), new o.default(u);
        new n.default(u).getZEnrichedTrails().then(function (t) {
            u.trails = t.map(function (t) {
                return new h.default(t)
            }), new l.default(u.trails, u)
        })
    }, function (t, e) {}, function (t, e) {}, function (t, e, i) {
        "use strict";
        var s = this && this.__extends || function () {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                };
                return function (e, i) {
                    function s() {
                        this.constructor = e
                    }
                    t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
                }
            }(),
            a = this && this.__assign || Object.assign || function (t) {
                for (var e, i = 1, s = arguments.length; i < s; i++) {
                    e = arguments[i];
                    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
                }
                return t
            },
            r = this && this.__decorate || function (t, e, i, s) {
                var a, r = arguments.length,
                    n = r < 3 ? e : null === s ? s = Object.getOwnPropertyDescriptor(e, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, s);
                else
                    for (var o = t.length - 1; o >= 0; o--)(a = t[o]) && (n = (r < 3 ? a(n) : r > 3 ? a(e, i, n) : a(e, i)) || n);
                return r > 3 && n && Object.defineProperty(e, i, n), n
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(15),
            o = i(16),
            h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.displayLoading = !0, e.selectedTrailId = null, e.filteredTrailIds = [], e.filters = {
                        walktime: null,
                        ascent: null,
                        category: null,
                        difficulty: null
                    }, e.device = null, e.currentBasemapId = null, e.view = null, e.trails = null, e.online = !0, e
                }
                return s(e, t), e.prototype.setSelectedTrailId = function (t) {
                    this.selectedTrailId = t, this.selectedTrailId && "detailPanel" !== this.visiblePanel && (this.visiblePanel = "detailPanel")
                }, e.prototype.setFilteredTrailIds = function (t) {
                    this.filteredTrailIds = t, -1 === this.filteredTrailIds.indexOf(this.selectedTrailId) && (this.selectedTrailId = null)
                }, e.prototype.setFilter = function (t, e) {
                    this.filters = a({}, this.filters), this.filters[t] = e
                }, r([o.property()], e.prototype, "displayLoading", void 0), r([o.property()], e.prototype, "selectedTrailId", void 0), r([o.property()], e.prototype, "filteredTrailIds", void 0), r([o.property()], e.prototype, "filters", void 0), r([o.property()], e.prototype, "visiblePanel", void 0), r([o.property()], e.prototype, "device", void 0), r([o.property()], e.prototype, "currentBasemapId", void 0), r([o.property()], e.prototype, "view", void 0), r([o.property()], e.prototype, "trails", void 0), r([o.property()], e.prototype, "online", void 0), e = r([o.subclass()], e)
            }(o.declared(n));
        e.default = h
    }, function (t, e) {
        t.exports = w
    }, function (t, e) {
        t.exports = M
    }, function (t, e, i) {
        "use strict";

        function s() {
            return a.matches ? "desktop" : "mobilePortrait"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = window.matchMedia("(min-width: 601px)");
        e.default = {
            init: function (t) {
                function e(e) {
                    var i = s();
                    t.device = i
                }
                a.addListener(e), e(a)
            }
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(1),
            a = function () {
                function t(t) {
                    var e = this;
                    window.addEventListener("load", function () {
                        function e(e) {
                            t.online = !!navigator.onLine
                        }
                        window.addEventListener("online", e), window.addEventListener("offline", e)
                    }), this.messageContainer = s.create("div", {}, document.body), t.watch("online", function (t) {
                        console.log(t), t ? e.createOnlineMessage() : e.createOfflineMessage()
                    })
                }
                return t.prototype.createOfflineMessage = function () {
                    this.setMessage("You seem to be offline. This application has limited functionality.", !1)
                }, t.prototype.createOnlineMessage = function () {
                    this.setMessage("You are back online.", !0)
                }, t.prototype.setMessage = function (t, e) {
                    var i = this;
                    this.messageContainer.innerHTML = t, this.messageContainer.classList.add("connectionMessage"), e ? (this.messageContainer.classList.add("online"), this.messageContainer.classList.remove("offline"), window.setTimeout(function () {
                        i.messageContainer.innerHTML = "", i.messageContainer.classList.remove("online", "connectionMessage")
                    }, 3e3)) : (this.messageContainer.classList.remove("online"), this.messageContainer.classList.add("offline"))
                }, t
            }();
        e.default = a
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(2),
            a = i(20),
            r = i(1),
            n = i(0),
            o = i(3),
            h = i(6),
            l = i(26),
            d = i(7),
            u = i(27),
            c = i(8),
            p = i(4);
        i(28), p.request.corsEnabledServers.push("wtb.maptiles.arcgis.com");
        var m = function () {
            function t(t) {
                var e = this;
                this.state = t, this.view = this.initView(), this.state.view = this.view, this.trailsLayer = this.initTrailsLayer(), this.view.when(function () {
                    e.view.map.add(e.trailsLayer)
                }), this.addEventListeners(), window.view = this.view, t.watch("selectedTrailId", function (t, i) {
                    i && e.unselectFeature(i), t && e.selectFeature(t)
                }), t.watch("filteredTrailIds", function (t) {
                    e.view.map instanceof h && e.view.goTo(e.view.map.initialViewProperties.viewpoint);
                    var i = t.map(function (t) {
                        return "RouteId = " + t
                    });
                    0 === t.length ? e.trailsLayer.definitionExpression = "1=0" : e.trailsLayer.definitionExpression = i.join(" OR ")
                }), t.watch("currentBasemapId", function (t) {
                    e.setCurrentBasemap(t)
                })
            }
            return t.prototype.setCurrentBasemap = function (t) {
                this.view.map.layers.filter(function (t) {
                    return "Basemap" === t.title
                }).getItemAt(0).layers.filter(function (e) {
                    return e.id === t
                }).getItemAt(0).visible = !0
            }, t.prototype.showLoadingIcon = function (t) {
                r.create("span", {
                    class: "fa fa-spinner fa-spin",
                    id: "loadingIcon",
                    style: {
                        position: "absolute",
                        fontSize: "30px",
                        top: t.screenPoint.y - 15 + "px",
                        left: t.screenPoint.x - 15 + "px"
                    }
                }, document.body)
            }, t.prototype.removeLoadingIcon = function () {
                r.destroy("loadingIcon")
            }, t.prototype.addEventListeners = function () {
                var t = this;
                this.view.on("click", function (e) {
                    t.state.online && (t.showLoadingIcon(e), t.view.hitTest(e).then(function (i) {
                        var s = i.results[0];
                        if (s.graphic) "Flickr" === s.graphic.layer.title ? (t.removeLoadingIcon(), t.showImage(s.graphic, e)) : (t.removeLoadingIcon(), "Hiking trails" === s.graphic.layer.title && t.state.setSelectedTrailId(s.graphic.attributes.RouteId));
                        else {
                            var a = t.trailsLayer.createQuery();
                            a.geometry = s.mapPoint, a.distance = 200, a.units = "meters", a.spatialRelationship = "intersects", t.trailsLayer.queryFeatures(a).then(function (e) {
                                e.features.length > 0 ? t.state.setSelectedTrailId(e.features[0].attributes.RouteId) : t.state.setSelectedTrailId(null), t.removeLoadingIcon()
                            }).otherwise(function (t) {
                                return console.log(t)
                            })
                        }
                    }))
                })
            }, t.prototype.showImage = function (t, e) {
                var i = this;
                this.removeImage();
                var s = r.create("div", {
                        innerHTML: '<img id="flickrImage" src="' + t.attributes.image + '"\n        style="left: ' + (e.screenPoint.x - 25) + "px; top: " + (e.screenPoint.y - 25) + 'px;">',
                        id: "flickrContainer"
                    }, document.body),
                    a = n.byId("flickrImage");
                window.setTimeout(function () {
                    a.style.top = "50%", a.style.left = "50%", a.style.transform = "translate(-50%, -50%)"
                }, 0), window.setTimeout(function () {
                    a.style.maxWidth = "90%"
                }, 200), o(s, "click", function () {
                    i.removeImage()
                })
            }, t.prototype.removeImage = function () {
                n.byId("flickrContainer") && r.destroy("flickrContainer")
            }, t.prototype.initView = function () {
                var t = new h({
                    portalItem: {
                        id: s.default.scene.websceneItemId
                    }
                });
                return new l({
                    container: "scenePanel",
                    map: t,
                    constraints: {
                        tilt: {
                            max: 80,
                            mode: "manual"
                        }
                    },
                    qualityProfile: "high",
                    environment: {
                        lighting: {
                            directShadowsEnabled: !0,
                            ambientOcclusionEnabled: !0
                        },
                        atmosphereEnabled: !0,
                        atmosphere: {
                            quality: "high"
                        },
                        starsEnabled: !1
                    },
                    ui: {
                        components: ["attribution"]
                    },
                    popup: {
                        dockEnabled: !1,
                        collapsed: !0
                    }
                })
            }, t.prototype.setViewPadding = function () {
                "mobilePortrait" === this.state.device ? this.view.padding = {
                    left: 0
                } : this.view.padding = {
                    left: 350
                }
            }, t.prototype.initTrailsLayer = function () {
                return new d({
                    url: s.default.data.trailsServiceUrl,
                    title: "Hiking trails",
                    outFields: ["*"],
                    renderer: a.getTrailRenderer(),
                    elevationInfo: {
                        mode: "on-the-ground"
                    },
                    labelsVisible: !0,
                    popupEnabled: !1,
                    labelingInfo: a.getLabelingInfo({
                        selection: null
                    })
                })
            }, t.prototype.selectFeature = function (t) {
                var e = this,
                    i = this.trailsLayer.renderer.clone();
                i.uniqueValueInfos = a.getUniqueValueInfos({
                    selection: t
                }), this.trailsLayer.renderer = i, this.trailsLayer.labelingInfo = a.getLabelingInfo({
                    selection: t
                });
                var s = this.state.trails.filter(function (e) {
                    return e.id === t
                })[0];
                this.view.goTo({
                    target: s.geometry,
                    tilt: 60
                }, {
                    speedFactor: .5
                }), this.state.online && s.flickrLayer.loadImages().then(function () {
                    e.view.map.add(s.flickrLayer)
                })
            }, t.prototype.unselectFeature = function (t) {
                var e = this.trailsLayer.renderer.clone();
                e.uniqueValueInfos = [], this.trailsLayer.renderer = e, this.trailsLayer.labelingInfo = a.getLabelingInfo({
                    selection: null
                });
                var i = this.state.trails.filter(function (e) {
                    return e.id === t
                })[0];
                this.view.map.remove(i.flickrLayer), this.removeImage()
            }, t.prototype.queryTrails = function () {
                var t = this.trailsLayer,
                    e = new u({
                        outFields: ["*"],
                        where: "1=1",
                        returnGeometry: !0,
                        outSpatialReference: {
                            wkid: 4326
                        }
                    });
                return t.when(function () {
                    return t.queryFeatures(e)
                })
            }, t.prototype.getZEnrichedTrails = function () {
                var t = this,
                    e = this.view;
                return this.queryTrails().then(function (i) {
                    t.trails = i.features;
                    var s = i.features.map(function (t) {
                        return e.map.ground.queryElevation(t.geometry).then(function (e) {
                            return t.geometry = e.geometry, t
                        })
                    });
                    return c(s)
                })
            }, t
        }();
        e.default = m
    }, function (t, e, i) {
        "use strict";

        function s() {
            return new l({
                field: h.default.data.trailAttributes.id,
                defaultSymbol: a({
                    selection: null
                }),
                uniqueValueInfos: []
            })
        }

        function a(t) {
            var e = t.selection ? h.default.colors.selectedTrail : h.default.colors.defaultTrail,
                i = t.selection ? 4 : 2;
            return new d({
                symbolLayers: [new u({
                    material: {
                        color: e
                    },
                    size: i
                })]
            })
        }

        function r(t) {
            if (t.selection) return [{
                value: t.selection,
                symbol: a(t)
            }]
        }

        function n(t) {
            return t.selection ? [o(t), o({})] : [o({})]
        }

        function o(t) {
            var e = t.selection ? h.default.colors.selectedTrail : h.default.colors.defaultTrail,
                i = new p({
                    symbol: new c({
                        symbolLayers: [new m({
                            material: {
                                color: "white"
                            },
                            halo: {
                                color: e,
                                size: 1
                            },
                            font: {
                                family: "Open Sans Condensed",
                                weight: "bold"
                            },
                            size: 13
                        })],
                        verticalOffset: {
                            screenLength: 80,
                            maxWorldLength: 3e3,
                            minWorldLength: 200
                        },
                        callout: {
                            type: "line",
                            size: 1,
                            color: "white",
                            border: {
                                color: e
                            }
                        }
                    }),
                    labelPlacement: "above-center",
                    labelExpressionInfo: {
                        expression: "$feature." + h.default.data.trailAttributes.name
                    }
                });
            return t.selection && (i.where = h.default.data.trailAttributes.id + " = " + t.selection), i
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var h = i(2),
            l = i(5),
            d = i(21),
            u = i(22),
            c = i(23),
            p = i(24),
            m = i(25);
        e.getTrailRenderer = s, e.getUniqueValueInfos = r, e.getLabelingInfo = n, e.createLabelClass = o
    }, function (t, e) {
        t.exports = b
    }, function (t, e) {
        t.exports = x
    }, function (t, e) {
        t.exports = y
    }, function (t, e) {
        t.exports = C
    }, function (t, e) {
        t.exports = N
    }, function (t, e) {
        t.exports = g
    }, function (t, e) {
        t.exports = v
    }, function (t, e) {}, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(0),
            a = i(3);
        i(30);
        var r = function () {
            function t(t) {
                var e = this;
                this.container = s.byId("starterPage"), this.state = t, t.watch("displayLoading", function (t) {
                    e.container.style.display = t ? "table" : "none"
                }), a(s.byId("showMap"), "click", function () {
                    t.displayLoading = !1
                })
            }
            return t
        }();
        e.default = r
    }, function (t, e) {}, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(2),
            a = i(32),
            r = i(33),
            n = i(34),
            o = function () {
                function t(t) {
                    this.geometry = t.geometry;
                    var e = s.default.data.trailAttributes;
                    for (var i in e) this[i] = t.attributes[e[i]];
                    var a;
                    r = this.getProperties(t.geometry), this.profileData = r[0], a = r[1], this.flickrLayer = new n.default(a);
                    var r
                }
                return t.prototype.getProperties = function (t) {
                    var e, i = [],
                        s = 0,
                        a = 0,
                        r = t.paths[0],
                        n = [r[0]],
                        o = 0;
                    for (i.push({
                            point: r[0],
                            length: s,
                            value: Math.round(r[0][2])
                        }); o < r.length;) {
                        for (e = o + 1; e < r.length; e++) {
                            var h = this.computeLength(r.slice(o, e + 1));
                            if ((a += h) > 2e3) {
                                this.computeLength([n[n.length - 1], r[e]]) > 1e3 && (n.push(r[e]), a = 0)
                            }
                            if (h > 10) {
                                s += h, i.push({
                                    point: r[e],
                                    length: Math.round(s / 100) / 10,
                                    value: Math.round(r[o][2])
                                });
                                break
                            }
                        }
                        o = e
                    }
                    return [i, n]
                }, t.prototype.computeLength = function (t) {
                    return r.geodesicLength(new a({
                        paths: [t],
                        hasZ: !0,
                        spatialReference: {
                            wkid: 4326
                        }
                    }), "meters")
                }, t
            }();
        e.default = o
    }, function (t, e) {
        t.exports = n
    }, function (t, e) {
        t.exports = o
    }, function (t, e, i) {
        "use strict";

        function s(t) {
            for (var e = [], i = t.photoList, s = 0; s < t.photoList.length; s++) {
                var a = i[s];
                e.push(n("https://api.flickr.com/services/rest/?\n      method=flickr.photos.geo.getLocation&\n      api_key=d2eeadac35a3dfc3fb64a92e7c792de0&\n      photo_id=" + a.getAttribute("id"), {
                    responseType: "xml"
                }))
            }
            return p(e).then(function (e) {
                for (var s = [], a = 0; a < e.length; a++) {
                    var r = e[a],
                        n = i[a],
                        o = r.data.getElementsByTagName("location")[0];
                    if (o) {
                        var d = "https://farm" + n.getAttribute("farm") + ".staticflickr.com/" + n.getAttribute("server") + "/" + n.getAttribute("id") + "_" + n.getAttribute("secret") + ".jpg",
                            p = new u({
                                symbolLayers: [new c({
                                    size: 50,
                                    resource: {
                                        href: d
                                    },
                                    outline: {
                                        color: "white",
                                        size: "5px"
                                    }
                                })],
                                verticalOffset: {
                                    screenLength: 50,
                                    maxWorldLength: 3e3,
                                    minWorldLength: 20
                                },
                                callout: {
                                    type: "line",
                                    size: 1,
                                    color: "white"
                                }
                            });
                        t.renderer.addUniqueValueInfo({
                            value: a,
                            symbol: p
                        });
                        var m = new h({
                                latitude: o.getAttribute("latitude"),
                                longitude: o.getAttribute("longitude")
                            }),
                            f = new l({
                                geometry: m,
                                attributes: {
                                    ObjectID: a,
                                    image: d
                                }
                            });
                        s.push(f)
                    }
                }
                return s
            }).then(function (e) {
                t.source = e
            }).otherwise(function (t) {
                return console.log(t)
            })
        }
        var a = this && this.__extends || function () {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            };
            return function (e, i) {
                function s() {
                    this.constructor = e
                }
                t(e, i), e.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype, new s)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = i(4),
            n = i(35),
            o = i(7),
            h = i(9),
            l = i(36),
            d = i(5),
            u = i(37),
            c = i(38),
            p = i(8),
            m = i(39),
            f = function (t) {
                function e(e) {
                    var i = t.call(this, {
                        elevationInfo: {
                            mode: "relative-to-scene"
                        },
                        title: "Flickr",
                        fields: [{
                            name: "ObjectID",
                            type: "oid"
                        }, {
                            name: "image",
                            type: "string"
                        }],
                        geometryType: "point",
                        spatialReference: {
                            wkid: 4326
                        },
                        objectIdField: "ObjectID",
                        source: [],
                        featureReduction: {
                            type: "selection"
                        },
                        renderer: new d({
                            field: "ObjectID",
                            defaultSymbol: new u({
                                symbolLayers: [new c({
                                    size: 40,
                                    resource: {
                                        primitive: "circle"
                                    },
                                    outline: {
                                        color: "white",
                                        size: "5px"
                                    }
                                })]
                            })
                        })
                    }) || this;
                    i.photoList = [], i.imagesLoaded = !1, r.request.corsEnabledServers.push("https://api.flickr.com/");
                    for (var s = 1; s <= 9; s++) r.request.corsEnabledServers.push("https://farm" + s + ".staticflickr.com/");
                    var a = [];
                    return e.forEach(function (t) {
                        var e = "https://api.flickr.com/services/rest/?\n        method=flickr.photos.search&api_key=d2eeadac35a3dfc3fb64a92e7c792de0&privacy_filter=1&accuracy=16\n        &has_geo=true&lon=" + t[0] + "&lat=" + t[1] + "&radius=0.5\n        &per_page=1\n        &content_type=1\n        &license=1,2,3,4,5,6,7,8,9";
                        a.push(n(e, {
                            responseType: "xml"
                        }))
                    }), p(a).then(function (t) {
                        t.forEach(function (t) {
                            var e = t.data.getElementsByTagName("photo");
                            e.length > 0 && i.photoList.push(e[0])
                        })
                    }), i
                }
                return a(e, t), e.prototype.loadImages = function () {
                    if (this.imagesLoaded) {
                        var t = new m;
                        return t.resolve(1), t.promise
                    }
                    return this.imagesLoaded = !0, s(this)
                }, e
            }(o);
        e.default = f
    }, function (t, e) {
        t.exports = h
    }, function (t, e) {
        t.exports = d
    }, function (t, e) {
        t.exports = c
    }, function (t, e) {
        t.exports = p
    }, function (t, e) {
        t.exports = f
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(3),
            a = i(0),
            r = i(41),
            n = i(46),
            o = i(50),
            h = i(6);
        i(52);
        var l = function () {
            function t(t, e) {
                var i = this;
                this.state = e, this.container = document.querySelector(".menuPanel");
                var l = new n.default(t, e),
                    d = new r.default(t, e),
                    u = new o.default(e),
                    c = {
                        selectionPanel: l,
                        detailPanel: d,
                        basemapPanel: u
                    };
                this.initVisiblePanel(c), e.watch("visiblePanel", function (t, e) {
                    document.querySelector('[data-tab="' + t + '"]').classList.add("active"), c[t].container.style.display = "block", document.querySelector('[data-tab="' + e + '"]').classList.remove("active"), c[e].container.style.display = "none"
                }), s(document.querySelector(".menuTabs"), "click", function (t) {
                    i.state.visiblePanel = t.target.dataset.tab
                }), s(document.querySelector("#home"), "click", function (t) {
                    var e = i.state.view;
                    e.map instanceof h && (e.goTo(e.map.initialViewProperties.viewpoint), i.state.selectedTrailId = null)
                }), s(a.byId("about"), "click", function () {
                    a.byId("credentialsPanel").style.display = "inline"
                }), s(a.byId("close"), "click", function () {
                    a.byId("credentialsPanel").style.display = "none"
                }), e.watch("device", function () {
                    "mobilePortrait" === i.state.device ? (i.state.visiblePanel = "detailPanel", i.state.selectedTrailId ? i.container.style.display = "flex" : i.container.style.display = "none") : i.container.style.display = "flex"
                }), e.watch("selectedTrailId", function () {
                    "mobilePortrait" === i.state.device && (i.state.selectedTrailId ? i.container.style.display = "flex" : i.container.style.display = "none")
                }), s(document.querySelector("#details"), "click", function (t) {
                    var e = i.container.style.display;
                    console.log(e), i.container.style.display = "none" === e || "" === e ? "flex" : "none"
                })
            }
            return t.prototype.initVisiblePanel = function (t) {
                "mobilePortrait" === this.state.device ? this.state.visiblePanel = "detailPanel" : this.state.visiblePanel = "selectionPanel", t[this.state.visiblePanel].container.style.display = "block"
            }, t
        }();
        e.default = l
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(9),
            a = i(0),
            r = i(1),
            n = i(2);
        i(42), i(43), i(44), i(45);
        var o = function () {
            function t(t, e) {
                var i = this;
                this.state = e, this.trails = t, this.container = a.byId("detailPanel"), this.detailTitle = a.byId("detailTitle"), this.detailInfograph = a.byId("detailInfograph"), this.detailDescription = a.byId("detailDescription"), this.detailElevationProfile = a.byId("detailElevationProfile"), this.emptyDetails(), e.watch("selectedTrailId", function (t) {
                    if (t) {
                        var e = i.trails.filter(function (e) {
                            return e.id === t
                        })[0];
                        i.displayInfo(e)
                    } else i.emptyDetails()
                }), e.watch("device", function () {
                    i.state.selectedTrailId || i.displayAppInfo()
                })
            }
            return t.prototype.emptyDetails = function () {
                r.empty(this.detailTitle), r.empty(this.detailDescription), r.empty(this.detailInfograph), r.empty(this.detailElevationProfile), this.displayAppInfo()
            }, t.prototype.displayAppInfo = function () {
                "mobilePortrait" === this.state.device ? this.detailInfograph.innerHTML = "This app shows the hikes in the Swiss National Park. Select a hike on the map to find out more about it." : this.detailInfograph.innerHTML = "Select a hike in the map or in the Hikes panel to see more details about it."
            }, t.prototype.displayInfo = function (t) {
                this.detailTitle.innerHTML = t.name, this.createInfograph(t), this.detailDescription.innerHTML = t.description, this.createChart(t.profileData)
            }, t.prototype.createInfograph = function (t) {
                var e = [{
                    icon: "fa fa-calendar-times-o",
                    text: "Closed"
                }, {
                    icon: "fa fa-calendar-check-o",
                    text: "Open"
                }];
                this.detailInfograph.innerHTML = '\n      <span class="infograph"><span class="fa fa-line-chart" aria-hidden="true"></span> ' + t.ascent + ' m</span>\n      <span class="infograph"><span class="fa fa-wrench" aria-hidden="true"></span> ' + t.difficulty + '</span>\n      <span class="infograph"><span class="fa fa-clock-o" aria-hidden="true"></span> ' + t.walktime + ' hr</span>\n      <span class="infograph"><span class="' + e[t.status].icon + '" aria-hidden="true"></span> ' + e[t.status].text + "</span>\n    "
            }, t.prototype.createChart = function (t) {
                var e = AmCharts.makeChart(this.detailElevationProfile, {
                        type: "serial",
                        theme: "light",
                        dataProvider: t,
                        color: "#4b4b4b",
                        fontFamily: "Open Sans Condensed",
                        balloon: {
                            borderAlpha: 0,
                            fillAlpha: .8,
                            fillColor: n.default.colors.selectedTrail,
                            shadowAlpha: 0
                        },
                        graphs: [{
                            id: "g1",
                            balloonText: "Distance: <b>[[category]] km</b><br>Elevation:<b>[[value]] m</b>",
                            fillAlphas: .2,
                            bulletAlpha: 0,
                            lineColor: n.default.colors.selectedTrail,
                            lineThickness: 1,
                            valueField: "value"
                        }],
                        chartCursor: {
                            limitToGraph: "g1",
                            categoryBalloonEnabled: !1,
                            zoomable: !1
                        },
                        categoryField: "length",
                        categoryAxis: {
                            gridThickness: 0,
                            axisThickness: .1
                        },
                        valueAxes: [{
                            strictMinMax: !0,
                            autoGridCount: !1,
                            minimum: 1e3,
                            maximum: 3500,
                            axisThickness: 0,
                            tickLength: 0
                        }]
                    }),
                    i = this.state.view.popup;
                e.addListener("changed", function (t) {
                    if (t.index) {
                        var e = t.chart.dataProvider[t.index];
                        i.dockEnabled = !1, i.open({
                            title: e.value + " m",
                            location: new s({
                                spatialReference: {
                                    wkid: 4326
                                },
                                longitude: e.point[0],
                                latitude: e.point[1],
                                z: e.point[2]
                            })
                        })
                    } else i.close()
                })
            }, t
        }();
        e.default = o
    }, function (t, e) {
        ! function () {
            var t;
            window.AmCharts ? t = window.AmCharts : (t = {}, window.AmCharts = t, t.themes = {}, t.maps = {}, t.inheriting = {}, t.charts = [], t.onReadyArray = [], t.useUTC = !1, t.updateRate = 60, t.uid = 0, t.lang = {}, t.translations = {}, t.mapTranslations = {}, t.windows = {}, t.initHandlers = [], t.amString = "am", t.pmString = "pm"), t.Class = function (e) {
                var i = function () {
                    arguments[0] !== t.inheriting && (this.events = {}, this.construct.apply(this, arguments))
                };
                e.inherits ? (i.prototype = new e.inherits(t.inheriting), i.base = e.inherits.prototype, delete e.inherits) : (i.prototype.createEvents = function () {
                    for (var t = 0; t < arguments.length; t++) this.events[arguments[t]] = []
                }, i.prototype.listenTo = function (t, e, i) {
                    this.removeListener(t, e, i), t.events[e].push({
                        handler: i,
                        scope: this
                    })
                }, i.prototype.addListener = function (t, e, i) {
                    this.removeListener(this, t, e), t && this.events[t] && this.events[t].push({
                        handler: e,
                        scope: i
                    })
                }, i.prototype.removeListener = function (t, e, i) {
                    if (t && t.events && (t = t.events[e]))
                        for (e = t.length - 1; 0 <= e; e--) t[e].handler === i && t.splice(e, 1)
                }, i.prototype.fire = function (t) {
                    for (var e = this.events[t.type], i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.handler.call(s.scope, t)
                    }
                });
                for (var s in e) i.prototype[s] = e[s];
                return i
            }, t.addChart = function (e) {
                window.requestAnimationFrame ? t.animationRequested || (t.animationRequested = !0, window.requestAnimationFrame(t.update)) : t.updateInt || (t.updateInt = setInterval(function () {
                    t.update()
                }, Math.round(1e3 / t.updateRate))), t.charts.push(e)
            }, t.removeChart = function (e) {
                for (var i = t.charts, s = i.length - 1; 0 <= s; s--) i[s] == e && i.splice(s, 1);
                0 === i.length && (t.requestAnimation && (window.cancelAnimationFrame(t.requestAnimation), t.animationRequested = !1), t.updateInt && (clearInterval(t.updateInt), t.updateInt = NaN))
            }, t.isModern = !0, t.getIEVersion = function () {
                var t, e, i = 0;
                return "Microsoft Internet Explorer" == navigator.appName && (t = navigator.userAgent, e = /MSIE ([0-9]{1,}[.0-9]{0,})/, null !== e.exec(t) && (i = parseFloat(RegExp.$1))), i
            }, t.applyLang = function (e, i) {
                var s = t.translations;
                i.dayNames = t.extend({}, t.dayNames), i.shortDayNames = t.extend({}, t.shortDayNames), i.monthNames = t.extend({}, t.monthNames), i.shortMonthNames = t.extend({}, t.shortMonthNames), i.amString = "am", i.pmString = "pm", s && (s = s[e]) && (t.lang = s, i.langObj = s, s.monthNames && (i.dayNames = t.extend({}, s.dayNames), i.shortDayNames = t.extend({}, s.shortDayNames), i.monthNames = t.extend({}, s.monthNames), i.shortMonthNames = t.extend({}, s.shortMonthNames)), s.am && (i.amString = s.am), s.pm && (i.pmString = s.pm)), t.amString = i.amString, t.pmString = i.pmString
            }, t.IEversion = t.getIEVersion(), 9 > t.IEversion && 0 < t.IEversion && (t.isModern = !1, t.isIE = !0), t.dx = 0, t.dy = 0, (document.addEventListener || window.opera) && (t.isNN = !0, t.isIE = !1, t.dx = .5, t.dy = .5), document.attachEvent && (t.isNN = !1, t.isIE = !0, t.isModern || (t.dx = 0, t.dy = 0)), window.chrome && (t.chrome = !0), t.handleMouseUp = function (e) {
                for (var i = t.charts, s = 0; s < i.length; s++) {
                    var a = i[s];
                    a && a.handleReleaseOutside && a.handleReleaseOutside(e)
                }
            }, t.handleMouseMove = function (e) {
                for (var i = t.charts, s = 0; s < i.length; s++) {
                    var a = i[s];
                    a && a.handleMouseMove && a.handleMouseMove(e)
                }
            }, t.handleWheel = function (e) {
                for (var i = t.charts, s = 0; s < i.length; s++) {
                    var a = i[s];
                    if (a && a.mouseIsOver) {
                        (a.mouseWheelScrollEnabled || a.mouseWheelZoomEnabled) && a.handleWheel && a.handleWheel(e);
                        break
                    }
                }
            }, t.resetMouseOver = function () {
                for (var e = t.charts, i = 0; i < e.length; i++) {
                    var s = e[i];
                    s && (s.mouseIsOver = !1)
                }
            }, t.ready = function (e) {
                t.onReadyArray.push(e)
            }, t.handleLoad = function () {
                t.isReady = !0;
                for (var e = t.onReadyArray, i = 0; i < e.length; i++) {
                    var s = e[i];
                    isNaN(t.processDelay) ? s() : setTimeout(s, t.processDelay * i)
                }
                t.onReadyArray = []
            }, t.addInitHandler = function (e, i) {
                t.initHandlers.push({
                    method: e,
                    types: i
                })
            }, t.callInitHandler = function (e) {
                var i = t.initHandlers;
                if (t.initHandlers)
                    for (var s = 0; s < i.length; s++) {
                        var a = i[s];
                        a.types ? t.isInArray(a.types, e.type) && a.method(e) : a.method(e)
                    }
            }, t.getUniqueId = function () {
                return "AmChartsEl-" + ++t.uid
            }, t.isNN && (document.addEventListener("mousemove", t.handleMouseMove), document.addEventListener("mouseup", t.handleMouseUp, !0), window.addEventListener("load", t.handleLoad, !0)), t.isIE && (document.attachEvent("onmousemove", t.handleMouseMove), document.attachEvent("onmouseup", t.handleMouseUp), window.attachEvent("onload", t.handleLoad)), t.addWheelListeners = function () {
                t.wheelIsListened || (t.isNN && (window.addEventListener("DOMMouseScroll", t.handleWheel, !0), document.addEventListener("mousewheel", t.handleWheel, !0)), t.isIE && document.attachEvent("onmousewheel", t.handleWheel)), t.wheelIsListened = !0
            }, t.clear = function () {
                var e = t.charts;
                if (e)
                    for (var i = e.length - 1; 0 <= i; i--) e[i].clear();
                t.updateInt && clearInterval(t.updateInt), t.requestAnimation && window.cancelAnimationFrame(t.requestAnimation), t.charts = [], t.isNN && (document.removeEventListener("mousemove", t.handleMouseMove, !0), document.removeEventListener("mouseup", t.handleMouseUp, !0), window.removeEventListener("load", t.handleLoad, !0), window.removeEventListener("DOMMouseScroll", t.handleWheel, !0), document.removeEventListener("mousewheel", t.handleWheel, !0)), t.isIE && (document.detachEvent("onmousemove", t.handleMouseMove), document.detachEvent("onmouseup", t.handleMouseUp), window.detachEvent("onload", t.handleLoad))
            }, t.makeChart = function (e, i, s) {
                var a = i.type,
                    r = i.theme;
                t.isString(r) && (r = t.themes[r], i.theme = r);
                var n;
                switch (a) {
                    case "serial":
                        n = new t.AmSerialChart(r);
                        break;
                    case "xy":
                        n = new t.AmXYChart(r);
                        break;
                    case "pie":
                        n = new t.AmPieChart(r);
                        break;
                    case "radar":
                        n = new t.AmRadarChart(r);
                        break;
                    case "gauge":
                        n = new t.AmAngularGauge(r);
                        break;
                    case "funnel":
                        n = new t.AmFunnelChart(r);
                        break;
                    case "map":
                        n = new t.AmMap(r);
                        break;
                    case "stock":
                        n = new t.AmStockChart(r);
                        break;
                    case "gantt":
                        n = new t.AmGanttChart(r)
                }
                return t.extend(n, i), t.isReady ? isNaN(s) ? n.write(e) : setTimeout(function () {
                    t.realWrite(n, e)
                }, s) : t.ready(function () {
                    isNaN(s) ? n.write(e) : setTimeout(function () {
                        t.realWrite(n, e)
                    }, s)
                }), n
            }, t.realWrite = function (t, e) {
                t.write(e)
            }, t.updateCount = 0, t.validateAt = Math.round(t.updateRate / 10), t.update = function () {
                var e = t.charts;
                t.updateCount++;
                var i = !1;
                if (t.updateCount == t.validateAt && (i = !0, t.updateCount = 0), e)
                    for (var s = e.length - 1; 0 <= s; s--) e[s].update && e[s].update(), i && (e[s].autoResize ? e[s].validateSize && e[s].validateSize() : e[s].premeasure && e[s].premeasure());
                window.requestAnimationFrame && (t.requestAnimation = window.requestAnimationFrame(t.update))
            }, "complete" == document.readyState && t.handleLoad()
        }(),
        function () {
            var t = window.AmCharts;
            t.toBoolean = function (t, e) {
                if (void 0 === t) return e;
                switch (String(t).toLowerCase()) {
                    case "true":
                    case "yes":
                    case "1":
                        return !0;
                    case "false":
                    case "no":
                    case "0":
                    case null:
                        return !1;
                    default:
                        return !!t
                }
            }, t.removeFromArray = function (t, e) {
                var i;
                if (void 0 !== e && void 0 !== t)
                    for (i = t.length - 1; 0 <= i; i--) t[i] == e && t.splice(i, 1)
            }, t.getPath = function () {
                var t = document.getElementsByTagName("script");
                if (t)
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e].src;
                        if (-1 !== i.search(/\/(amcharts|ammap)\.js/)) return i.replace(/\/(amcharts|ammap)\.js.*/, "/")
                    }
            }, t.normalizeUrl = function (t) {
                return "" !== t && -1 === t.search(/\/$/) ? t + "/" : t
            }, t.isAbsolute = function (t) {
                return 0 === t.search(/^http[s]?:|^\//)
            }, t.isInArray = function (t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] == e) return !0;
                return !1
            }, t.getDecimals = function (t) {
                var e = 0;
                return isNaN(t) || (t = String(t), -1 != t.indexOf("e-") ? e = Number(t.split("-")[1]) : -1 != t.indexOf(".") && (e = t.split(".")[1].length)), e
            }, t.wordwrap = function (e, i, s, a) {
                var r, n, o, h;
                if (e += "", 1 > i) return e;
                for (r = -1, e = (h = e.split(/\r\n|\n|\r/)).length; ++r < e; h[r] += o) {
                    for (o = h[r], h[r] = ""; o.length > i; h[r] += t.trim(o.slice(0, n)) + ((o = o.slice(n)).length ? s : "")) n = 2 == a || (n = o.slice(0, i + 1).match(/\S*(\s)?$/))[1] ? i : n.input.length - n[0].length || 1 == a && i || n.input.length + (n = o.slice(i).match(/^\S*/))[0].length;
                    o = t.trim(o)
                }
                return h.join(s)
            }, t.trim = function (t) {
                return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }, t.wrappedText = function (e, i, s, a, r, n, o, h) {
                var l = t.text(e, i, s, a, r, n, o);
                if (l) {
                    var d = l.getBBox();
                    if (d.width > h) {
                        var u = "\n";
                        t.isModern || (u = "<br>"), h = Math.floor(h / (d.width / i.length)), 2 < h && (h -= 2), i = t.wordwrap(i, h, u, !0), l.remove(), l = t.text(e, i, s, a, r, n, o)
                    }
                }
                return l
            }, t.getStyle = function (t, e) {
                var i = "";
                if (document.defaultView && document.defaultView.getComputedStyle) try {
                    i = document.defaultView.getComputedStyle(t, "").getPropertyValue(e)
                } catch (t) {} else t.currentStyle && (e = e.replace(/\-(\w)/g, function (t, e) {
                    return e.toUpperCase()
                }), i = t.currentStyle[e]);
                return i
            }, t.removePx = function (t) {
                if (void 0 !== t) return Number(t.substring(0, t.length - 2))
            }, t.getURL = function (e, i) {
                if (e)
                    if ("_self" != i && i)
                        if ("_top" == i && window.top) window.top.location.href = e;
                        else if ("_parent" == i && window.parent) window.parent.location.href = e;
                else if ("_blank" == i) window.open(e);
                else {
                    var s = document.getElementsByName(i)[0];
                    s ? s.src = e : (s = t.windows[i]) && s.opener && !s.opener.closed ? s.location.href = e : t.windows[i] = window.open(e)
                } else window.location.href = e
            }, t.ifArray = function (t) {
                return !!(t && "object" == typeof t && 0 < t.length)
            }, t.callMethod = function (t, e) {
                var i;
                for (i = 0; i < e.length; i++) {
                    var s = e[i];
                    if (s) {
                        s[t] && s[t]();
                        var a = s.length;
                        if (0 < a) {
                            var r;
                            for (r = 0; r < a; r++) {
                                var n = s[r];
                                n && n[t] && n[t]()
                            }
                        }
                    }
                }
            }, t.toNumber = function (t) {
                return "number" == typeof t ? t : Number(String(t).replace(/[^0-9\-.]+/g, ""))
            }, t.toColor = function (t) {
                if ("" !== t && void 0 !== t)
                    if (-1 != t.indexOf(",")) {
                        t = t.split(",");
                        var e;
                        for (e = 0; e < t.length; e++) {
                            var i = t[e].substring(t[e].length - 6, t[e].length);
                            t[e] = "#" + i
                        }
                    } else t = t.substring(t.length - 6, t.length), t = "#" + t;
                return t
            }, t.toCoordinate = function (t, e, i) {
                var s;
                return void 0 !== t && (t = String(t), i && i < e && (e = i), s = Number(t), -1 != t.indexOf("!") && (s = e - Number(t.substr(1))), -1 != t.indexOf("%") && (s = e * Number(t.substr(0, t.length - 1)) / 100)), s
            }, t.fitToBounds = function (t, e, i) {
                return t < e && (t = e), t > i && (t = i), t
            }, t.isDefined = function (t) {
                return void 0 !== t
            }, t.stripNumbers = function (t) {
                return t.replace(/[0-9]+/g, "")
            }, t.roundTo = function (t, e) {
                if (0 > e) return t;
                var i = Math.pow(10, e);
                return Math.round(t * i) / i
            }, t.toFixed = function (t, e) {
                var i = !1;
                0 > t && (i = !0, t = Math.abs(t));
                var s = String(Math.round(t * Math.pow(10, e)));
                if (0 < e) {
                    var a = s.length;
                    if (a < e) {
                        var r;
                        for (r = 0; r < e - a; r++) s = "0" + s
                    }
                    return a = s.substring(0, s.length - e), "" === a && (a = 0), s = a + "." + s.substring(s.length - e, s.length), i ? "-" + s : s
                }
                return String(s)
            }, t.formatDuration = function (e, i, s, a, r, n) {
                var o = t.intervals,
                    h = n.decimalSeparator;
                if (e >= o[i].contains) {
                    var l = e - Math.floor(e / o[i].contains) * o[i].contains;
                    return "ss" == i ? (l = t.formatNumber(l, n), 1 == l.split(h)[0].length && (l = "0" + l)) : l = t.roundTo(l, n.precision), ("mm" == i || "hh" == i) && 10 > l && (l = "0" + l), s = l + "" + a[i] + s, e = Math.floor(e / o[i].contains), i = o[i].nextInterval, t.formatDuration(e, i, s, a, r, n)
                }
                if ("ss" == i && (e = t.formatNumber(e, n), 1 == e.split(h)[0].length && (e = "0" + e)), "mm" == i && (e = t.roundTo(e, n.precision)), ("mm" == i || "hh" == i) && 10 > e && (e = "0" + e), s = e + "" + a[i] + s, o[r].count > o[i].count)
                    for (e = o[i].count; e < o[r].count; e++) i = o[i].nextInterval, "ss" == i || "mm" == i || "hh" == i ? s = "00" + a[i] + s : "DD" == i && (s = "0" + a[i] + s);
                return ":" == s.charAt(s.length - 1) && (s = s.substring(0, s.length - 1)), s
            }, t.formatNumber = function (e, i, s, a, r) {
                e = t.roundTo(e, i.precision), isNaN(s) && (s = i.precision);
                var n = i.decimalSeparator;
                i = i.thousandsSeparator, void 0 == n && (n = ","), void 0 == i && (i = " ");
                var o;
                o = 0 > e ? "-" : "", e = Math.abs(e);
                var h = String(e),
                    l = !1; - 1 != h.indexOf("e") && (l = !0), 0 <= s && !l && (h = t.toFixed(e, s));
                var d = "";
                if (l) d = h;
                else {
                    var u, h = h.split("."),
                        l = String(h[0]);
                    for (u = l.length; 0 <= u; u -= 3) d = u != l.length ? 0 !== u ? l.substring(u - 3, u) + i + d : l.substring(u - 3, u) + d : l.substring(u - 3, u);
                    void 0 !== h[1] && (d = d + n + h[1]), void 0 !== s && 0 < s && "0" != d && (d = t.addZeroes(d, n, s))
                }
                return d = o + d, "" === o && !0 === a && 0 !== e && (d = "+" + d), !0 === r && (d += "%"), d
            }, t.addZeroes = function (e, i, s) {
                return e = e.split(i), void 0 === e[1] && 0 < s && (e[1] = "0"), e[1].length < s ? (e[1] += "0", t.addZeroes(e[0] + i + e[1], i, s)) : void 0 !== e[1] ? e[0] + i + e[1] : e[0]
            }, t.scientificToNormal = function (t) {
                var e;
                t = String(t).split("e");
                var i;
                if ("-" == t[1].substr(0, 1)) {
                    for (e = "0.", i = 0; i < Math.abs(Number(t[1])) - 1; i++) e += "0";
                    e += t[0].split(".").join("")
                } else {
                    var s = 0;
                    for (e = t[0].split("."), e[1] && (s = e[1].length), e = t[0].split(".").join(""), i = 0; i < Math.abs(Number(t[1])) - s; i++) e += "0"
                }
                return e
            }, t.toScientific = function (t, e) {
                if (0 === t) return "0";
                var i = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E),
                    s = String(s).split(".").join(e);
                return String(s) + "e" + i
            }, t.randomColor = function () {
                return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6)
            }, t.hitTest = function (e, i, s) {
                var a = !1,
                    r = e.x,
                    n = e.x + e.width,
                    o = e.y,
                    h = e.y + e.height,
                    l = t.isInRectangle;
                return a || (a = l(r, o, i)), a || (a = l(r, h, i)), a || (a = l(n, o, i)), a || (a = l(n, h, i)), a || !0 === s || (a = t.hitTest(i, e, !0)), a
            }, t.isInRectangle = function (t, e, i) {
                return t >= i.x - 5 && t <= i.x + i.width + 5 && e >= i.y - 5 && e <= i.y + i.height + 5
            }, t.isPercents = function (t) {
                if (-1 != String(t).indexOf("%")) return !0
            }, t.formatValue = function (e, i, s, a, r, n, o, h) {
                if (i) {
                    void 0 === r && (r = "");
                    var l;
                    for (l = 0; l < s.length; l++) {
                        var d = s[l],
                            u = i[d];
                        void 0 !== u && (u = n ? t.addPrefix(u, h, o, a) : t.formatNumber(u, a), e = e.replace(new RegExp("\\[\\[" + r + d + "\\]\\]", "g"), u))
                    }
                }
                return e
            }, t.formatDataContextValue = function (t, e) {
                if (t) {
                    var i, s = t.match(/\[\[.*?\]\]/g);
                    for (i = 0; i < s.length; i++) {
                        var a = s[i],
                            a = a.substr(2, a.length - 4);
                        void 0 !== e[a] && (t = t.replace(new RegExp("\\[\\[" + a + "\\]\\]", "g"), e[a]))
                    }
                }
                return t
            }, t.massReplace = function (t, e) {
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        var s = e[i];
                        void 0 === s && (s = ""), t = t.replace(i, s)
                    }
                return t
            }, t.cleanFromEmpty = function (t) {
                return t.replace(/\[\[[^\]]*\]\]/g, "")
            }, t.addPrefix = function (e, i, s, a, r) {
                var n, o, h, l = t.formatNumber(e, a),
                    d = "";
                if (0 === e) return "0";
                if (0 > e && (d = "-"), 1 < (e = Math.abs(e))) {
                    for (n = i.length - 1; - 1 < n; n--)
                        if (e >= i[n].number && (o = e / i[n].number, h = Number(a.precision), 1 > h && (h = 1), s = t.roundTo(o, h), h = t.formatNumber(s, {
                                precision: -1,
                                decimalSeparator: a.decimalSeparator,
                                thousandsSeparator: a.thousandsSeparator
                            }), !r || o == s)) {
                            l = d + "" + h + i[n].prefix;
                            break
                        }
                } else
                    for (n = 0; n < s.length; n++)
                        if (e <= s[n].number) {
                            o = e / s[n].number, h = Math.abs(Math.floor(Math.log(o) * Math.LOG10E)), o = t.roundTo(o, h), l = d + "" + o + s[n].prefix;
                            break
                        } return l
            }, t.remove = function (t) {
                t && t.remove()
            }, t.getEffect = function (t) {
                return ">" == t && (t = "easeOutSine"), "<" == t && (t = "easeInSine"), "elastic" == t && (t = "easeOutElastic"), t
            }, t.getObjById = function (t, e) {
                var i, s;
                for (s = 0; s < t.length; s++) {
                    var a = t[s];
                    if (a.id == e) {
                        i = a;
                        break
                    }
                }
                return i
            }, t.applyTheme = function (e, i, s) {
                i || (i = t.theme);
                try {
                    i = JSON.parse(JSON.stringify(i))
                } catch (t) {}
                i && i[s] && t.extend(e, i[s])
            }, t.isString = function (t) {
                return "string" == typeof t
            }, t.extend = function (t, e, i) {
                var s;
                t || (t = {});
                for (s in e) i ? t.hasOwnProperty(s) || (t[s] = e[s]) : t[s] = e[s];
                return t
            }, t.copyProperties = function (t, e) {
                for (var i in t) t.hasOwnProperty(i) && "events" != i && void 0 !== t[i] && "function" != typeof t[i] && "cname" != i && (e[i] = t[i])
            }, t.processObject = function (e, i, s, a) {
                if (!1 == e instanceof i && (e = a ? t.extend(new i(s), e) : t.extend(e, new i(s), !0), e.listeners))
                    for (var r in e.listeners) i = e.listeners[r], e.addListener(i.event, i.method);
                return e
            }, t.fixNewLines = function (t) {
                var e = RegExp("\\n", "g");
                return t && (t = t.replace(e, "<br />")), t
            }, t.fixBrakes = function (e) {
                if (t.isModern) {
                    var i = RegExp("<br>", "g");
                    e && (e = e.replace(i, "\n"))
                } else e = t.fixNewLines(e);
                return e
            }, t.deleteObject = function (e, i) {
                if (e && (void 0 !== i && null !== i || (i = 20), 0 !== i))
                    if ("[object Array]" === Object.prototype.toString.call(e))
                        for (var s = 0; s < e.length; s++) t.deleteObject(e[s], i - 1), e[s] = null;
                    else if (e && !e.tagName) try {
                    for (s in e.theme = null, e) e[s] && ("object" == typeof e[s] && t.deleteObject(e[s], i - 1), "function" != typeof e[s] && (e[s] = null))
                } catch (t) {}
            }, t.bounce = function (t, e, i, s, a) {
                return (e /= a) < 1 / 2.75 ? 7.5625 * s * e * e + i : e < 2 / 2.75 ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
            }, t.easeInOutQuad = function (t, e, i, s, a) {
                return 1 > (e /= a / 2) ? s / 2 * e * e + i : (e--, -s / 2 * (e * (e - 2) - 1) + i)
            }, t.easeInSine = function (t, e, i, s, a) {
                return -s * Math.cos(e / a * (Math.PI / 2)) + s + i
            }, t.easeOutSine = function (t, e, i, s, a) {
                return s * Math.sin(e / a * (Math.PI / 2)) + i
            }, t.easeOutElastic = function (t, e, i, s, a) {
                t = 1.70158;
                var r = 0,
                    n = s;
                return 0 === e ? i : 1 == (e /= a) ? i + s : (r || (r = .3 * a), n < Math.abs(s) ? (n = s, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(s / n), n * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - t) * Math.PI / r) + s + i)
            }, t.fixStepE = function (e) {
                e = e.toExponential(0).split("e");
                var i = Number(e[1]);
                return 9 == Number(e[0]) && i++, t.generateNumber(1, i)
            }, t.generateNumber = function (t, e) {
                var i, s = "";
                i = 0 > e ? Math.abs(e) - 1 : Math.abs(e);
                var a;
                for (a = 0; a < i; a++) s += "0";
                return 0 > e ? Number("0." + s + String(t)) : Number(String(t) + s)
            }, t.setCN = function (t, e, i, s) {
                if (t.addClassNames && e && (e = e.node) && i) {
                    var a = e.getAttribute("class");
                    t = t.classNamePrefix + "-", s && (t = ""), a ? e.setAttribute("class", a + " " + t + i) : e.setAttribute("class", t + i)
                }
            }, t.removeCN = function (t, e, i) {
                e && (e = e.node) && i && (e = e.classList) && e.remove(t.classNamePrefix + "-" + i)
            }, t.parseDefs = function (e, i) {
                for (var s in e) {
                    var a = typeof e[s];
                    if (0 < e[s].length && "object" == a)
                        for (var r = 0; r < e[s].length; r++) a = document.createElementNS(t.SVG_NS, s), i.appendChild(a), t.parseDefs(e[s][r], a);
                    else "object" == a ? (a = document.createElementNS(t.SVG_NS, s), i.appendChild(a), t.parseDefs(e[s], a)) : i.setAttribute(s, e[s])
                }
            }
        }(),
        function () {
            var t = window.AmCharts;
            t.AxisBase = t.Class({
                construct: function (e) {
                    this.createEvents("clickItem", "rollOverItem", "rollOutItem", "rollOverGuide", "rollOutGuide", "clickGuide"), this.titleDY = this.y = this.x = this.dy = this.dx = 0, this.axisThickness = 1, this.axisColor = "#000000", this.axisAlpha = 1, this.gridCount = this.tickLength = 5, this.gridAlpha = .15, this.gridThickness = 1, this.gridColor = "#000000", this.dashLength = 0, this.labelFrequency = 1, this.showLastLabel = this.showFirstLabel = !0, this.fillColor = "#FFFFFF", this.fillAlpha = 0, this.labelsEnabled = !0, this.labelRotation = 0, this.autoGridCount = !0, this.offset = 0, this.guides = [], this.visible = !0, this.counter = 0, this.guides = [], this.ignoreAxisWidth = this.inside = !1, this.minHorizontalGap = 75, this.minVerticalGap = 35, this.titleBold = !0, this.minorGridEnabled = !1, this.minorGridAlpha = .07, this.autoWrap = !1, this.titleAlign = "middle", this.labelOffset = 0, this.bcn = "axis-", this.centerLabels = !1, this.firstDayOfWeek = 1, this.centerLabelOnFullPeriod = this.markPeriodChange = this.boldPeriodBeginning = !0, this.titleWidth = 0, this.periods = [{
                        period: "fff",
                        count: 1
                    }, {
                        period: "fff",
                        count: 5
                    }, {
                        period: "fff",
                        count: 10
                    }, {
                        period: "fff",
                        count: 50
                    }, {
                        period: "fff",
                        count: 100
                    }, {
                        period: "fff",
                        count: 500
                    }, {
                        period: "ss",
                        count: 1
                    }, {
                        period: "ss",
                        count: 5
                    }, {
                        period: "ss",
                        count: 10
                    }, {
                        period: "ss",
                        count: 30
                    }, {
                        period: "mm",
                        count: 1
                    }, {
                        period: "mm",
                        count: 5
                    }, {
                        period: "mm",
                        count: 10
                    }, {
                        period: "mm",
                        count: 30
                    }, {
                        period: "hh",
                        count: 1
                    }, {
                        period: "hh",
                        count: 3
                    }, {
                        period: "hh",
                        count: 6
                    }, {
                        period: "hh",
                        count: 12
                    }, {
                        period: "DD",
                        count: 1
                    }, {
                        period: "DD",
                        count: 2
                    }, {
                        period: "DD",
                        count: 3
                    }, {
                        period: "DD",
                        count: 4
                    }, {
                        period: "DD",
                        count: 5
                    }, {
                        period: "WW",
                        count: 1
                    }, {
                        period: "MM",
                        count: 1
                    }, {
                        period: "MM",
                        count: 2
                    }, {
                        period: "MM",
                        count: 3
                    }, {
                        period: "MM",
                        count: 6
                    }, {
                        period: "YYYY",
                        count: 1
                    }, {
                        period: "YYYY",
                        count: 2
                    }, {
                        period: "YYYY",
                        count: 5
                    }, {
                        period: "YYYY",
                        count: 10
                    }, {
                        period: "YYYY",
                        count: 50
                    }, {
                        period: "YYYY",
                        count: 100
                    }], this.dateFormats = [{
                        period: "fff",
                        format: "NN:SS.QQQ"
                    }, {
                        period: "ss",
                        format: "JJ:NN:SS"
                    }, {
                        period: "mm",
                        format: "JJ:NN"
                    }, {
                        period: "hh",
                        format: "JJ:NN"
                    }, {
                        period: "DD",
                        format: "MMM DD"
                    }, {
                        period: "WW",
                        format: "MMM DD"
                    }, {
                        period: "MM",
                        format: "MMM"
                    }, {
                        period: "YYYY",
                        format: "YYYY"
                    }], this.nextPeriod = {
                        fff: "ss",
                        ss: "mm",
                        mm: "hh",
                        hh: "DD",
                        DD: "MM",
                        MM: "YYYY"
                    }, t.applyTheme(this, e, "AxisBase")
                },
                zoom: function (t, e) {
                    this.start = t, this.end = e, this.dataChanged = !0, this.draw()
                },
                fixAxisPosition: function () {
                    var t = this.position;
                    "H" == this.orientation ? ("left" == t && (t = "bottom"), "right" == t && (t = "top")) : ("bottom" == t && (t = "left"), "top" == t && (t = "right")), this.position = t
                },
                init: function () {
                    this.createBalloon()
                },
                draw: function () {
                    var t = this.chart;
                    this.prevBY = this.prevBX = NaN, this.allLabels = [], this.counter = 0, this.destroy(), this.fixAxisPosition(), this.setBalloonBounds(), this.labels = [];
                    var e = t.container,
                        i = e.set();
                    t.gridSet.push(i), this.set = i, e = e.set(), t.axesLabelsSet.push(e), this.labelsSet = e, this.axisLine = new this.axisRenderer(this), this.autoGridCount ? ("V" == this.orientation ? 3 > (t = this.height / this.minVerticalGap) && (t = 3) : t = this.width / this.minHorizontalGap, this.gridCountR = Math.max(t, 1)) : this.gridCountR = this.gridCount, this.axisWidth = this.axisLine.axisWidth, this.addTitle()
                },
                setOrientation: function (t) {
                    this.orientation = t ? "H" : "V"
                },
                addTitle: function () {
                    var e = this.title;
                    if (this.titleLabel = null, e) {
                        var i = this.chart,
                            s = this.titleColor;
                        void 0 === s && (s = i.color);
                        var a = this.titleFontSize;
                        isNaN(a) && (a = i.fontSize + 1), e = t.text(i.container, e, s, i.fontFamily, a, this.titleAlign, this.titleBold), t.setCN(i, e, this.bcn + "title"), this.titleLabel = e
                    }
                },
                positionTitle: function () {
                    var e = this.titleLabel;
                    if (e) {
                        var i, s, a = this.labelsSet,
                            r = {};
                        0 < a.length() ? r = a.getBBox() : (r.x = 0, r.y = 0, r.width = this.width, r.height = this.height, t.VML && (r.y += this.y, r.x += this.x)), a.push(e);
                        var a = r.x,
                            n = r.y;
                        t.VML && (n -= this.y, a -= this.x);
                        var o = r.width,
                            r = r.height,
                            h = this.width,
                            l = this.height,
                            d = 0,
                            u = e.getBBox().height / 2,
                            c = this.inside,
                            p = this.titleAlign;
                        switch (this.position) {
                            case "top":
                                i = "left" == p ? -1 : "right" == p ? h : h / 2, s = n - 10 - u;
                                break;
                            case "bottom":
                                i = "left" == p ? -1 : "right" == p ? h : h / 2, s = n + r + 10 + u;
                                break;
                            case "left":
                                i = a - 10 - u, c && (i -= 5), d = -90, s = ("left" == p ? l + 1 : "right" == p ? -1 : l / 2) + this.titleDY, this.titleWidth = u + 10;
                                break;
                            case "right":
                                i = a + o + 10 + u, c && (i += 7), s = ("left" == p ? l + 2 : "right" == p ? -2 : l / 2) + this.titleDY, this.titleWidth = u + 10, d = -90
                        }
                        this.marginsChanged ? (e.translate(i, s), this.tx = i, this.ty = s) : e.translate(this.tx, this.ty), this.marginsChanged = !1, isNaN(this.titleRotation) || (d = this.titleRotation), 0 !== d && e.rotate(d)
                    }
                },
                pushAxisItem: function (t, e) {
                    var i = this,
                        s = t.graphics();
                    0 < s.length() && (e ? i.labelsSet.push(s) : i.set.push(s)), (s = t.getLabel()) && (i.labelsSet.push(s), s.click(function (e) {
                        i.handleMouse(e, t, "clickItem")
                    }).touchend(function (e) {
                        i.handleMouse(e, t, "clickItem")
                    }).mouseover(function (e) {
                        i.handleMouse(e, t, "rollOverItem")
                    }).mouseout(function (e) {
                        i.handleMouse(e, t, "rollOutItem")
                    }))
                },
                handleMouse: function (t, e, i) {
                    this.fire({
                        type: i,
                        value: e.value,
                        serialDataItem: e.serialDataItem,
                        axis: this,
                        target: e.label,
                        chart: this.chart,
                        event: t
                    })
                },
                addGuide: function (e) {
                    for (var i = this.guides, s = !1, a = i.length, r = 0; r < i.length; r++) i[r] == e && (s = !0, a = r);
                    e = t.processObject(e, t.Guide, this.theme), e.id || (e.id = "guideAuto" + a + "_" + (new Date).getTime()), s || i.push(e)
                },
                removeGuide: function (t) {
                    var e, i = this.guides;
                    for (e = 0; e < i.length; e++) i[e] == t && i.splice(e, 1)
                },
                handleGuideOver: function (t) {
                    clearTimeout(this.chart.hoverInt);
                    var e = t.graphics.getBBox(),
                        i = this.x + e.x + e.width / 2,
                        e = this.y + e.y + e.height / 2,
                        s = t.fillColor;
                    void 0 === s && (s = t.lineColor), this.chart.showBalloon(t.balloonText, s, !0, i, e), this.fire({
                        type: "rollOverGuide",
                        guide: t,
                        chart: this.chart
                    })
                },
                handleGuideOut: function (t) {
                    this.chart.hideBalloon(), this.fire({
                        type: "rollOutGuide",
                        guide: t,
                        chart: this.chart
                    })
                },
                handleGuideClick: function (t) {
                    this.chart.hideBalloon(), this.fire({
                        type: "clickGuide",
                        guide: t,
                        chart: this.chart
                    })
                },
                addEventListeners: function (t, e) {
                    var i = this;
                    t.mouseover(function () {
                        i.handleGuideOver(e)
                    }), t.mouseup(function () {
                        i.handleGuideClick(e)
                    }), t.touchstart(function () {
                        i.handleGuideOver(e)
                    }), t.mouseout(function () {
                        i.handleGuideOut(e)
                    })
                },
                getBBox: function () {
                    var e;
                    return this.labelsSet && (e = this.labelsSet.getBBox()), e ? t.VML || (e = {
                        x: e.x + this.x,
                        y: e.y + this.y,
                        width: e.width,
                        height: e.height
                    }) : e = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }, e
                },
                destroy: function () {
                    t.remove(this.set), t.remove(this.labelsSet);
                    var e = this.axisLine;
                    e && t.remove(e.axisSet), t.remove(this.grid0)
                },
                chooseMinorFrequency: function (t) {
                    for (var e = 10; 0 < e; e--)
                        if (t / e == Math.round(t / e)) return t / e
                },
                parseDatesDraw: function () {
                    var e, i, s, a, r, n, o, h = this.chart,
                        l = this.showFirstLabel,
                        d = this.showLastLabel,
                        u = "",
                        c = t.extractPeriod(this.minPeriod),
                        p = t.getPeriodDuration(c.period, c.count),
                        m = this.firstDayOfWeek,
                        f = this.boldPeriodBeginning;
                    e = this.minorGridEnabled;
                    var g, v, b = this.gridAlpha,
                        x = this.choosePeriod(0),
                        y = x.period,
                        x = x.count,
                        C = t.getPeriodDuration(y, x);
                    C < p && (y = c.period, x = c.count, C = p), c = y, "WW" == c && (c = "DD"), this.stepWidth = this.getStepWidth(this.timeDifference);
                    var N = Math.ceil(this.timeDifference / C) + 5,
                        w = s = t.resetDateToMin(new Date(this.startTime - C), y, x, m).getTime();
                    (c == y && 1 == x && this.centerLabelOnFullPeriod || this.autoWrap || this.centerLabels) && (r = C * this.stepWidth, this.autoWrap && !this.centerLabels && (r = -r)), this.cellWidth = p * this.stepWidth, n = Math.round(s / C), p = -1, n / 2 == Math.round(n / 2) && (p = -2, s -= C), n = this.firstTime;
                    var M = 0,
                        A = 0;
                    if (e && 1 < x && (g = this.chooseMinorFrequency(x), v = t.getPeriodDuration(y, g), "DD" == y && (v += t.getPeriodDuration("hh")), "fff" == y && (v = 1)), 0 < this.gridCountR)
                        for (N - 5 - p > this.autoRotateCount && !isNaN(this.autoRotateAngle) && (this.labelRotationR = this.autoRotateAngle), e = p; e <= N; e++) {
                            if (o = n + C * (e + Math.floor((w - n) / C)) - M, "DD" == y && (o += 36e5), o = t.resetDateToMin(new Date(o), y, x, m).getTime(), "MM" == y && (i = (o - s) / C, 1.5 <= (o - s) / C && (o = o - (i - 1) * C + t.getPeriodDuration("DD", 3), o = t.resetDateToMin(new Date(o), y, 1).getTime(), M += C)), i = (o - this.startTime) * this.stepWidth, "radar" == h.type) {
                                if (0 > (i = this.axisWidth - i) || i > this.axisWidth) continue
                            } else this.rotate ? "date" == this.type && "middle" == this.gridPosition && (A = -C * this.stepWidth / 2) : "date" == this.type && (i = this.axisWidth - i);
                            if (u = !1, this.nextPeriod[c] && (u = this.checkPeriodChange(this.nextPeriod[c], 1, o, s, c)), s = !1, u && this.markPeriodChange ? (u = this.dateFormatsObject[this.nextPeriod[c]], this.twoLineMode && (u = this.dateFormatsObject[c] + "\n" + u, u = t.fixBrakes(u)), s = !0) : u = this.dateFormatsObject[c], f || (s = !1), this.currentDateFormat = u, u = t.formatDate(new Date(o), u, h), (e == p && !l || e == N && !d) && (u = " "), this.labelFunction && (u = this.labelFunction(u, new Date(o), this, y, x, a).toString()), this.boldLabels && (s = !0), a = new this.axisItemRenderer(this, i, u, !1, r, A, !1, s), this.pushAxisItem(a), a = s = o, !isNaN(g))
                                for (i = 1; i < x; i += g) this.gridAlpha = this.minorGridAlpha, u = o + v * i, u = t.resetDateToMin(new Date(u), y, g, m).getTime(), u = new this.axisItemRenderer(this, (u - this.startTime) * this.stepWidth, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), this.pushAxisItem(u);
                            this.gridAlpha = b
                        }
                },
                choosePeriod: function (e) {
                    var i = t.getPeriodDuration(this.periods[e].period, this.periods[e].count),
                        s = this.periods;
                    return this.timeDifference < i && 0 < e ? s[e - 1] : Math.ceil(this.timeDifference / i) <= this.gridCountR ? s[e] : e + 1 < s.length ? this.choosePeriod(e + 1) : s[e]
                },
                getStepWidth: function (t) {
                    var e;
                    return this.startOnAxis ? (e = this.axisWidth / (t - 1), 1 == t && (e = this.axisWidth)) : e = this.axisWidth / t, e
                },
                timeZoom: function (t, e) {
                    this.startTime = t, this.endTime = e
                },
                minDuration: function () {
                    var e = t.extractPeriod(this.minPeriod);
                    return t.getPeriodDuration(e.period, e.count)
                },
                checkPeriodChange: function (e, i, s, a, r) {
                    s = new Date(s);
                    var n = new Date(a),
                        o = this.firstDayOfWeek;
                    return a = i, "DD" == e && (i = 1), s = t.resetDateToMin(s, e, i, o).getTime(), i = t.resetDateToMin(n, e, i, o).getTime(), !("DD" == e && "hh" != r && s - i < t.getPeriodDuration(e, a) - t.getPeriodDuration("hh", 1)) && s != i
                },
                generateDFObject: function () {
                    this.dateFormatsObject = {};
                    var t;
                    for (t = 0; t < this.dateFormats.length; t++) {
                        var e = this.dateFormats[t];
                        this.dateFormatsObject[e.period] = e.format
                    }
                },
                hideBalloon: function () {
                    this.balloon && this.balloon.hide && this.balloon.hide(), this.prevBY = this.prevBX = NaN
                },
                formatBalloonText: function (t) {
                    return t
                },
                showBalloon: function (t, e, i, s) {
                    var a = this.offset;
                    switch (this.position) {
                        case "bottom":
                            e = this.height + a;
                            break;
                        case "top":
                            e = -a;
                            break;
                        case "left":
                            t = -a;
                            break;
                        case "right":
                            t = this.width + a
                    }
                    if (i || (i = this.currentDateFormat), "V" == this.orientation) {
                        if (0 > e || e > this.height) return;
                        if (isNaN(e)) return void this.hideBalloon();
                        e = this.adjustBalloonCoordinate(e, s), s = this.coordinateToValue(e)
                    } else {
                        if (0 > t || t > this.width) return;
                        if (isNaN(t)) return void this.hideBalloon();
                        t = this.adjustBalloonCoordinate(t, s), s = this.coordinateToValue(t)
                    }
                    var r;
                    (a = this.chart.chartCursor) && (r = a.index), this.balloon && void 0 !== s && this.balloon.enabled && (this.balloonTextFunction ? ("date" != this.type && !0 !== this.parseDates || (s = new Date(s)), s = this.balloonTextFunction(s)) : this.balloonText ? s = this.formatBalloonText(this.balloonText, r, i) : isNaN(s) || (s = this.formatValue(s, i)), t == this.prevBX && e == this.prevBY || (this.balloon.setPosition(t, e), this.prevBX = t, this.prevBY = e, s && this.balloon.showBalloon(s)))
                },
                adjustBalloonCoordinate: function (t) {
                    return t
                },
                createBalloon: function () {
                    var e = this.chart,
                        i = e.chartCursor;
                    i && (i = i.cursorPosition, "mouse" != i && (this.stickBalloonToCategory = !0), "start" == i && (this.stickBalloonToStart = !0), "ValueAxis" == this.cname && (this.stickBalloonToCategory = !1)), this.balloon && (this.balloon.destroy && this.balloon.destroy(), t.extend(this.balloon, e.balloon, !0))
                },
                setBalloonBounds: function () {
                    var t = this.balloon;
                    if (t) {
                        var e = this.chart;
                        t.cornerRadius = 0, t.shadowAlpha = 0, t.borderThickness = 1, t.borderAlpha = 1, t.adjustBorderColor = !1, t.showBullet = !1, this.balloon = t, t.chart = e, t.mainSet = e.plotBalloonsSet, t.pointerWidth = this.tickLength, (this.parseDates || "date" == this.type) && (t.pointerWidth = 0), t.className = this.id, e = "V", "V" == this.orientation && (e = "H"), this.stickBalloonToCategory || (t.animationDuration = 0);
                        var i, s, a, r, n = this.inside,
                            o = this.width,
                            h = this.height;
                        switch (this.position) {
                            case "bottom":
                                i = 0, s = o, n ? (a = 0, r = h) : (a = h, r = h + 1e3);
                                break;
                            case "top":
                                i = 0, s = o, n ? (a = 0, r = h) : (a = -1e3, r = 0);
                                break;
                            case "left":
                                a = 0, r = h, n ? (i = 0, s = o) : (i = -1e3, s = 0);
                                break;
                            case "right":
                                a = 0, r = h, n ? (i = 0, s = o) : (i = o, s = o + 1e3)
                        }
                        t.drop || (t.pointerOrientation = e), t.setBounds(i, a, s, r)
                    }
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.ValueAxis = t.Class({
                inherits: t.AxisBase,
                construct: function (e) {
                    this.cname = "ValueAxis", this.createEvents("axisChanged", "logarithmicAxisFailed", "axisZoomed", "axisIntZoomed"), t.ValueAxis.base.construct.call(this, e), this.dataChanged = !0, this.stackType = "none", this.position = "left", this.unitPosition = "right", this.includeAllValues = this.recalculateToPercents = this.includeHidden = this.includeGuidesInMinMax = this.integersOnly = !1, this.durationUnits = {
                        DD: "d. ",
                        hh: ":",
                        mm: ":",
                        ss: ""
                    }, this.scrollbar = !1, this.baseValue = 0, this.radarCategoriesEnabled = !0, this.axisFrequency = 1, this.gridType = "polygons", this.useScientificNotation = !1, this.axisTitleOffset = 10, this.pointPosition = "axis", this.minMaxMultiplier = 1, this.logGridLimit = 2, this.totalTextOffset = this.treatZeroAs = 0, this.minPeriod = "ss", this.relativeStart = 0, this.relativeEnd = 1, t.applyTheme(this, e, this.cname)
                },
                updateData: function () {
                    0 >= this.gridCountR && (this.gridCountR = 1), this.totals = [], this.data = this.chart.chartData;
                    var e = this.chart;
                    "xy" != e.type && (this.stackGraphs("smoothedLine"), this.stackGraphs("line"), this.stackGraphs("column"), this.stackGraphs("step")), this.recalculateToPercents && this.recalculate(), this.synchronizationMultiplier && this.synchronizeWith ? (t.isString(this.synchronizeWith) && (this.synchronizeWith = e.getValueAxisById(this.synchronizeWith)), this.synchronizeWith && (this.synchronizeWithAxis(this.synchronizeWith), this.foundGraphs = !0)) : (this.foundGraphs = !1, this.getMinMax(), (0 === this.start && this.end == this.data.length - 1 && isNaN(this.minZoom) && isNaN(this.maxZoom) || isNaN(this.fullMin) && isNaN(this.fullMax)) && (this.fullMin = this.min, this.fullMax = this.max, "date" != this.type && this.strictMinMax && (isNaN(this.minimum) || (this.fullMin = this.minimum), isNaN(this.maximum) || (this.fullMax = this.maximum)), this.logarithmic && (this.fullMin = this.logMin, 0 === this.fullMin && (this.fullMin = this.treatZeroAs)), "date" == this.type && (this.minimumDate || (this.fullMin = this.minRR), this.maximumDate || (this.fullMax = this.maxRR), this.strictMinMax && (this.minimumDate && (this.fullMin = this.minimumDate.getTime()), this.maximumDate && (this.fullMax = this.maximumDate.getTime())))))
                },
                draw: function () {
                    t.ValueAxis.base.draw.call(this);
                    var e = this.chart,
                        i = this.set;
                    this.labelRotationR = this.labelRotation, t.setCN(e, this.set, "value-axis value-axis-" + this.id), t.setCN(e, this.labelsSet, "value-axis value-axis-" + this.id), t.setCN(e, this.axisLine.axisSet, "value-axis value-axis-" + this.id);
                    var s = this.type;
                    if ("duration" == s && (this.duration = "ss"), !0 === this.dataChanged && (this.updateData(), this.dataChanged = !1), "date" == s && (this.logarithmic = !1, this.min = this.minRR, this.max = this.maxRR, this.reversed = !1, this.getDateMinMax()), this.logarithmic) {
                        var a = this.treatZeroAs,
                            r = this.getExtremes(0, this.data.length - 1).min;
                        if (!isNaN(this.minimum) && this.minimum < r && (r = this.minimum), this.logMin = r, this.minReal < r && (this.minReal = r), isNaN(this.minReal) && (this.minReal = r), 0 < a && 0 === r && (this.minReal = r = a), 0 >= r || 0 >= this.minimum) return void this.fire({
                            type: "logarithmicAxisFailed",
                            chart: e
                        })
                    }
                    this.grid0 = null;
                    var n, o, h = e.dx,
                        l = e.dy,
                        a = !1,
                        r = this.logarithmic;
                    if (isNaN(this.min) || isNaN(this.max) || !this.foundGraphs || 1 / 0 == this.min || -1 / 0 == this.max) a = !0;
                    else {
                        "date" == this.type && this.min == this.max && (this.max += this.minDuration(), this.min -= this.minDuration());
                        var d = this.labelFrequency,
                            u = this.showFirstLabel,
                            c = this.showLastLabel,
                            p = 1,
                            m = 0;
                        if (this.minCalc = this.min, this.maxCalc = this.max, this.strictMinMax && (isNaN(this.minimum) || (this.min = this.minimum), isNaN(this.maximum) || (this.max = this.maximum), this.min == this.max)) return;
                        if (isNaN(this.minZoom) || (this.minReal = this.min = this.minZoom), isNaN(this.maxZoom) || (this.max = this.maxZoom), this.logarithmic) {
                            o = this.fullMin;
                            var f = this.fullMax;
                            isNaN(this.minimum) || (o = this.minimum), isNaN(this.maximum) || (f = this.maximum);
                            var f = Math.log(f) * Math.LOG10E - Math.log(o) * Math.LOG10E,
                                g = Math.log(this.max) / Math.LN10 - Math.log(o) * Math.LOG10E;
                            this.relativeStart = t.roundTo((Math.log(this.minReal) / Math.LN10 - Math.log(o) * Math.LOG10E) / f, 5), this.relativeEnd = t.roundTo(g / f, 5)
                        } else this.relativeStart = t.roundTo(t.fitToBounds((this.min - this.fullMin) / (this.fullMax - this.fullMin), 0, 1), 5), this.relativeEnd = t.roundTo(t.fitToBounds((this.max - this.fullMin) / (this.fullMax - this.fullMin), 0, 1), 5);
                        var v, f = Math.round((this.maxCalc - this.minCalc) / this.step) + 1;
                        !0 === r ? (v = Math.log(this.max) * Math.LOG10E - Math.log(this.minReal) * Math.LOG10E, this.stepWidth = this.axisWidth / v, v > this.logGridLimit && (f = Math.ceil(Math.log(this.max) * Math.LOG10E) + 1, m = Math.round(Math.log(this.minReal) * Math.LOG10E), f > this.gridCountR && (p = Math.ceil(f / this.gridCountR)))) : this.stepWidth = this.axisWidth / (this.max - this.min);
                        var b = 0;
                        1 > this.step && -1 < this.step && (b = t.getDecimals(this.step)), this.integersOnly && (b = 0), b > this.maxDecCount && (b = this.maxDecCount), g = this.precision, isNaN(g) || (b = g), isNaN(this.maxZoom) && (this.max = t.roundTo(this.max, this.maxDecCount), this.min = t.roundTo(this.min, this.maxDecCount)), o = {}, o.precision = b, o.decimalSeparator = e.nf.decimalSeparator, o.thousandsSeparator = e.nf.thousandsSeparator, this.numberFormatter = o;
                        var x;
                        for (this.exponential = !1, o = m; o < f; o += p) {
                            var y = t.roundTo(this.step * o + this.min, b); - 1 != String(y).indexOf("e") && (this.exponential = !0)
                        }
                        this.duration && (this.maxInterval = t.getMaxInterval(this.max, this.duration));
                        var C, b = this.step,
                            y = this.minorGridAlpha;
                        if (this.minorGridEnabled && (C = this.getMinorGridStep(b, this.stepWidth * b)), this.autoGridCount || 0 !== this.gridCount)
                            if ("date" == s) this.generateDFObject(), this.timeDifference = this.max - this.min, this.maxTime = this.lastTime = this.max, this.startTime = this.firstTime = this.min, this.parseDatesDraw();
                            else
                                for (f >= this.autoRotateCount && !isNaN(this.autoRotateAngle) && (this.labelRotationR = this.autoRotateAngle), s = this.minCalc, r && (f++, s = this.maxCalc - f * b), this.gridCountReal = f, o = this.startCount = m; o < f; o += p)
                                    if (m = b * o + s, m = t.roundTo(m, this.maxDecCount + 1), (!this.integersOnly || Math.round(m) == m) && (isNaN(g) || Number(t.toFixed(m, g)) == m)) {
                                        if (!0 === r)
                                            if (v > this.logGridLimit) {
                                                if ((m = Math.pow(10, o)) > this.max) continue
                                            } else if (0 >= m && 0 >= (m = s + b * o + b / 2)) continue;
                                        x = this.formatValue(m, !1, o), Math.round(o / d) != o / d && (x = void 0), (0 === o && !u || o == f - 1 && !c) && (x = " "), n = this.getCoordinate(m);
                                        var N;
                                        if (this.rotate && this.autoWrap && (N = this.stepWidth * b - 10), x = new this.axisItemRenderer(this, n, x, void 0, N, void 0, void 0, this.boldLabels), this.pushAxisItem(x), m == this.baseValue && "radar" != e.type) {
                                            var w, M, A = this.width,
                                                S = this.height;
                                            "H" == this.orientation ? 0 <= n && n <= A + 1 && (w = [n, n, n + h], M = [S, 0, l]) : 0 <= n && n <= S + 1 && (w = [0, A, A + h], M = [n, n, n + l]), w && (n = t.fitToBounds(2 * this.gridAlpha, 0, 1), isNaN(this.zeroGridAlpha) || (n = this.zeroGridAlpha), n = t.line(e.container, w, M, this.gridColor, n, 1, this.dashLength), n.translate(this.x, this.y), this.grid0 = n, e.axesSet.push(n), n.toBack(), t.setCN(e, n, this.bcn + "zero-grid-" + this.id), t.setCN(e, n, this.bcn + "zero-grid"))
                                        }
                                        if (!isNaN(C) && 0 < y && o < f - 1) {
                                            for (n = b / C, r && (C = b * (o + p) + this.minCalc, C = t.roundTo(C, this.maxDecCount + 1), v > this.logGridLimit && (C = Math.pow(10, o + p)), n = 9, C = (C - m) / n), A = this.gridAlpha, this.gridAlpha = this.minorGridAlpha, S = 1; S < n; S++) {
                                                var T = this.getCoordinate(m + C * S),
                                                    T = new this.axisItemRenderer(this, T, "", !1, 0, 0, !1, !1, 0, !0);
                                                this.pushAxisItem(T)
                                            }
                                            this.gridAlpha = A
                                        }
                                    }
                        if (v = this.guides, 0 < (N = v.length)) {
                            for (w = this.fillAlpha, o = this.fillAlpha = 0; o < N; o++) M = v[o], h = NaN, C = M.above, isNaN(M.toValue) || (h = this.getCoordinate(M.toValue), x = new this.axisItemRenderer(this, h, "", !0, NaN, NaN, M), this.pushAxisItem(x, C)), l = NaN, isNaN(M.value) || (l = this.getCoordinate(M.value), x = new this.axisItemRenderer(this, l, M.label, !0, NaN, (h - l) / 2, M), this.pushAxisItem(x, C)), isNaN(h) && (l -= 3, h = l + 3), x && (d = x.label) && this.addEventListeners(d, M), isNaN(h - l) || 0 > l && 0 > h || (h = new this.guideFillRenderer(this, l, h, M), this.pushAxisItem(h, C), C = h.graphics(), M.graphics = C, this.addEventListeners(C, M));
                            this.fillAlpha = w
                        }
                        x = this.baseValue, this.min > this.baseValue && this.max > this.baseValue && (x = this.min), this.min < this.baseValue && this.max < this.baseValue && (x = this.max), r && x < this.minReal && (x = this.minReal), this.baseCoord = this.getCoordinate(x, !0), x = {
                            type: "axisChanged",
                            target: this,
                            chart: e
                        }, x.min = r ? this.minReal : this.min, x.max = this.max, this.fire(x), this.axisCreated = !0
                    }
                    r = this.axisLine.set, x = this.labelsSet, i.translate(this.x, this.y), x.translate(this.x, this.y), this.positionTitle(), "radar" != e.type && r.toFront(), !this.visible || a ? (i.hide(), r.hide(), x.hide()) : (i.show(), r.show(), x.show()), this.axisY = this.y, this.axisX = this.x
                },
                getDateMinMax: function () {
                    this.minimumDate && (this.minimumDate instanceof Date || (this.minimumDate = t.getDate(this.minimumDate, this.chart.dataDateFormat, "fff")), this.min = this.minimumDate.getTime()), this.maximumDate && (this.maximumDate instanceof Date || (this.maximumDate = t.getDate(this.maximumDate, this.chart.dataDateFormat, "fff")), this.max = this.maximumDate.getTime())
                },
                formatValue: function (e, i, s) {
                    var a = this.exponential,
                        r = this.logarithmic,
                        n = this.numberFormatter,
                        o = this.chart;
                    if (n) return !0 === this.logarithmic && (a = -1 != String(e).indexOf("e")), this.useScientificNotation && (a = !0), this.usePrefixes && (a = !1), a ? (s = -1 == String(e).indexOf("e") ? e.toExponential(15) : String(e), a = s.split("e"), s = Number(a[0]), a = Number(a[1]), s = t.roundTo(s, 14), i || isNaN(this.precision) || (s = t.roundTo(s, this.precision)), 10 == s && (s = 1, a += 1), s = s + "e" + a, 0 === e && (s = "0"), 1 == e && (s = "1")) : (r && (a = String(e).split("."), a[1] ? (n.precision = a[1].length, 0 > s && (n.precision = Math.abs(s)), i && 1 < e && (n.precision = 0), i || isNaN(this.precision) || (n.precision = this.precision)) : n.precision = -1), s = this.usePrefixes ? t.addPrefix(e, o.prefixesOfBigNumbers, o.prefixesOfSmallNumbers, n, !i) : t.formatNumber(e, n, n.precision)), this.duration && (i && (n.precision = 0), s = t.formatDuration(e, this.duration, "", this.durationUnits, this.maxInterval, n)), "date" == this.type && (s = t.formatDate(new Date(e), this.currentDateFormat, o)), this.recalculateToPercents ? s += "%" : (i = this.unit) && (s = "left" == this.unitPosition ? i + s : s + i), this.labelFunction && (s = "date" == this.type ? this.labelFunction(s, new Date(e), this).toString() : this.labelFunction(e, s, this).toString()), s
                },
                getMinorGridStep: function (t, e) {
                    var i = [5, 4, 2];
                    60 > e && i.shift();
                    for (var s = Math.floor(Math.log(Math.abs(t)) * Math.LOG10E), a = 0; a < i.length; a++) {
                        var r = t / i[a],
                            n = Math.floor(Math.log(Math.abs(r)) * Math.LOG10E);
                        if (!(1 < Math.abs(s - n)))
                            if (1 > t) {
                                if ((n = Math.pow(10, -n) * r) == Math.round(n)) return r
                            } else if (r == Math.round(r)) return r
                    }
                },
                stackGraphs: function (e) {
                    var i = this.stackType;
                    "stacked" == i && (i = "regular"), "line" == i && (i = "none"), "100% stacked" == i && (i = "100%"), this.stackType = i;
                    var s, a, r, n, o, h, l = [],
                        d = [],
                        u = [],
                        c = [],
                        p = this.chart.graphs,
                        m = this.baseValue,
                        f = !1;
                    if ("line" != e && "step" != e && "smoothedLine" != e || (f = !0), f && ("regular" == i || "100%" == i))
                        for (o = 0; o < p.length; o++) n = p[o], n.stackGraph = null, n.hidden || (r = n.type, n.chart == this.chart && n.valueAxis == this && e == r && n.stackable && (a && (n.stackGraph = a), a = n));
                    for (n = this.start - 10, a = this.end + 10, o = this.data.length - 1, n = t.fitToBounds(n, 0, o), a = t.fitToBounds(a, 0, o), h = n; h <= a; h++) {
                        var g = 0;
                        for (o = 0; o < p.length; o++)
                            if (n = p[o], n.hidden) n.newStack && (u[h] = NaN, d[h] = NaN);
                            else if (r = n.type, n.chart == this.chart && n.valueAxis == this && e == r && n.stackable)
                            if (r = this.data[h].axes[this.id].graphs[n.id], s = r.values.value, isNaN(s)) n.newStack && (u[h] = NaN, d[h] = NaN);
                            else {
                                var v = t.getDecimals(s);
                                g < v && (g = v), isNaN(c[h]) ? c[h] = Math.abs(s) : c[h] += Math.abs(s), c[h] = t.roundTo(c[h], g), v = n.fillToGraph, f && v && (v = this.data[h].axes[this.id].graphs[v.id]) && (r.values.open = v.values.value), "regular" == i && (f && (isNaN(l[h]) ? (l[h] = s, r.values.close = s, r.values.open = this.baseValue) : (isNaN(s) ? r.values.close = l[h] : r.values.close = s + l[h], r.values.open = l[h], l[h] = r.values.close)), "column" == e && (n.newStack && (u[h] = NaN, d[h] = NaN), r.values.close = s, 0 > s ? (r.values.close = s, isNaN(d[h]) ? r.values.open = m : (r.values.close += d[h], r.values.open = d[h]), d[h] = r.values.close) : (r.values.close = s, isNaN(u[h]) ? r.values.open = m : (r.values.close += u[h], r.values.open = u[h]), u[h] = r.values.close)))
                            }
                    }
                    for (h = this.start; h <= this.end; h++)
                        for (o = 0; o < p.length; o++) n = p[o], n.hidden ? n.newStack && (u[h] = NaN, d[h] = NaN) : (r = n.type, n.chart == this.chart && n.valueAxis == this && e == r && n.stackable && (r = this.data[h].axes[this.id].graphs[n.id], s = r.values.value, isNaN(s) || (l = s / c[h] * 100, r.values.percents = l, r.values.total = c[h], n.newStack && (u[h] = NaN, d[h] = NaN), "100%" == i && (isNaN(d[h]) && (d[h] = 0), isNaN(u[h]) && (u[h] = 0), 0 > l ? (r.values.close = t.fitToBounds(l + d[h], -100, 100), r.values.open = d[h], d[h] = r.values.close) : (r.values.close = t.fitToBounds(l + u[h], -100, 100), r.values.open = u[h], u[h] = r.values.close)))))
                },
                recalculate: function () {
                    var e, i = this.chart,
                        s = i.graphs;
                    for (e = 0; e < s.length; e++) {
                        var a = s[e];
                        if (a.valueAxis == this) {
                            var r = "value";
                            "candlestick" != a.type && "ohlc" != a.type || (r = "open");
                            var n, o, h = this.end + 2,
                                h = t.fitToBounds(this.end + 1, 0, this.data.length - 1),
                                l = this.start;
                            0 < l && l--;
                            var d;
                            if (o = this.start, a.compareFromStart && (o = 0), !isNaN(i.startTime) && (d = i.categoryAxis)) {
                                var u = d.minDuration(),
                                    u = new Date(i.startTime + u / 2),
                                    c = t.resetDateToMin(new Date(i.startTime), d.minPeriod).getTime();
                                t.resetDateToMin(new Date(u), d.minPeriod).getTime() > c && o++
                            }
                            for ((d = i.recalculateFromDate) && (d = t.getDate(d, i.dataDateFormat, "fff"), o = i.getClosestIndex(i.chartData, "time", d.getTime(), !0, 0, i.chartData.length), h = i.chartData.length - 1), d = o; d <= h && (o = this.data[d].axes[this.id].graphs[a.id], n = o.values[r], a.recalculateValue && (n = o.dataContext[a.valueField + a.recalculateValue]), isNaN(n)); d++);
                            for (this.recBaseValue = n, r = l; r <= h; r++) {
                                o = this.data[r].axes[this.id].graphs[a.id], o.percents = {};
                                var p, l = o.values;
                                for (p in l) o.percents[p] = "percents" != p ? l[p] / n * 100 - 100 : l[p]
                            }
                        }
                    }
                },
                getMinMax: function () {
                    var e, i = !1,
                        s = this.chart,
                        a = s.graphs;
                    for (e = 0; e < a.length; e++) {
                        var r = a[e].type;
                        ("line" == r || "step" == r || "smoothedLine" == r) && this.expandMinMax && (i = !0)
                    }
                    if (i && (0 < this.start && this.start--, this.end < this.data.length - 1 && this.end++), "serial" == s.type && (!0 !== s.categoryAxis.parseDates || i || this.end < this.data.length - 1 && this.end++), this.includeAllValues && (this.start = 0, this.end = this.data.length - 1), i = this.minMaxMultiplier, s = this.getExtremes(this.start, this.end), this.min = s.min, this.max = s.max, this.minRR = this.min, this.maxRR = this.max, i = (this.max - this.min) * (i - 1), this.min -= i, this.max += i, i = this.guides.length, this.includeGuidesInMinMax && 0 < i)
                        for (s = 0; s < i; s++) a = this.guides[s], a.toValue < this.min && (this.min = a.toValue), a.value < this.min && (this.min = a.value), a.toValue > this.max && (this.max = a.toValue), a.value > this.max && (this.max = a.value);
                    isNaN(this.minimum) || (this.min = this.minimum), isNaN(this.maximum) || (this.max = this.maximum), "date" == this.type && this.getDateMinMax(), this.min > this.max && (i = this.max, this.max = this.min, this.min = i), isNaN(this.minZoom) || (this.min = this.minZoom), isNaN(this.maxZoom) || (this.max = this.maxZoom), this.minCalc = this.min, this.maxCalc = this.max, this.minReal = this.min, this.maxReal = this.max, 0 === this.min && 0 === this.max && (this.max = 9), this.min > this.max && (this.min = this.max - 1), i = this.min, s = this.max, a = this.max - this.min, e = 0 === a ? Math.pow(10, Math.floor(Math.log(Math.abs(this.max)) * Math.LOG10E)) / 10 : Math.pow(10, Math.floor(Math.log(Math.abs(a)) * Math.LOG10E)) / 10, isNaN(this.maximum) && (this.max = Math.ceil(this.max / e) * e + e), isNaN(this.minimum) && (this.min = Math.floor(this.min / e) * e - e), 0 > this.min && 0 <= i && (this.min = 0), 0 < this.max && 0 >= s && (this.max = 0), "100%" == this.stackType && (this.min = 0 > this.min ? -100 : 0, this.max = 0 > this.max ? 0 : 100), a = this.max - this.min, e = Math.pow(10, Math.floor(Math.log(Math.abs(a)) * Math.LOG10E)) / 10, this.step = Math.ceil(a / this.gridCountR / e) * e, a = Math.pow(10, Math.floor(Math.log(Math.abs(this.step)) * Math.LOG10E)), a = t.fixStepE(a), e = Math.ceil(this.step / a), 5 < e && (e = 10), 5 >= e && 2 < e && (e = 5), this.step = Math.ceil(this.step / (a * e)) * a * e, isNaN(this.setStep) || (this.step = this.setStep), 1 > a ? (this.maxDecCount = Math.abs(Math.log(Math.abs(a)) * Math.LOG10E), this.maxDecCount = Math.round(this.maxDecCount), this.step = t.roundTo(this.step, this.maxDecCount + 1)) : this.maxDecCount = 0, this.min = this.step * Math.floor(this.min / this.step), this.max = this.step * Math.ceil(this.max / this.step), 0 > this.min && 0 <= i && (this.min = 0), 0 < this.max && 0 >= s && (this.max = 0), 1 < this.minReal && 1 < this.max - this.minReal && (this.minReal = Math.floor(this.minReal)), a = Math.pow(10, Math.floor(Math.log(Math.abs(this.minReal)) * Math.LOG10E)), 0 === this.min && (this.minReal = a), 0 === this.min && 1 < this.minReal && (this.minReal = 1), 0 < this.min && 0 < this.minReal - this.step && (this.minReal = this.min + this.step < this.minReal ? this.min + this.step : this.min), this.logarithmic && (2 < Math.log(s) * Math.LOG10E - Math.log(i) * Math.LOG10E ? (this.minReal = this.min = Math.pow(10, Math.floor(Math.log(Math.abs(i)) * Math.LOG10E)), this.maxReal = this.max = Math.pow(10, Math.ceil(Math.log(Math.abs(s)) * Math.LOG10E))) : (i = Math.pow(10, Math.floor(Math.log(Math.abs(i)) * Math.LOG10E)) / 10, Math.pow(10, Math.floor(Math.log(Math.abs(this.min)) * Math.LOG10E)) / 10 < i && (this.minReal = this.min = 10 * i)))
                },
                getExtremes: function (t, e) {
                    var i, s, a;
                    for (a = t; a <= e; a++) {
                        var r, n = this.data[a].axes[this.id].graphs;
                        for (r in n)
                            if (n.hasOwnProperty(r)) {
                                var o = this.chart.graphsById[r];
                                if (o.includeInMinMax && (!o.hidden || this.includeHidden)) {
                                    isNaN(i) && (i = 1 / 0), isNaN(s) && (s = -1 / 0), this.foundGraphs = !0, o = n[r].values, this.recalculateToPercents && (o = n[r].percents);
                                    var h;
                                    if (this.minMaxField) h = o[this.minMaxField], h < i && (i = h), h > s && (s = h);
                                    else
                                        for (var l in o) o.hasOwnProperty(l) && "percents" != l && "total" != l && "error" != l && (h = o[l], h < i && (i = h), h > s && (s = h))
                                }
                            }
                    }
                    return {
                        min: i,
                        max: s
                    }
                },
                zoomOut: function (t) {
                    this.maxZoom = this.minZoom = NaN, this.zoomToRelativeValues(0, 1, t)
                },
                zoomToRelativeValues: function (t, e, i) {
                    if (this.reversed) {
                        var s = t;
                        t = 1 - e, e = 1 - s
                    }
                    var a = this.fullMax,
                        s = this.fullMin,
                        r = s + (a - s) * t,
                        n = s + (a - s) * e;
                    return 0 <= this.minimum && 0 > r && (r = 0), this.logarithmic && (isNaN(this.minimum) || (s = this.minimum), isNaN(this.maximum) || (a = this.maximum), a = Math.log(a) * Math.LOG10E - Math.log(s) * Math.LOG10E, r = Math.pow(10, a * t + Math.log(s) * Math.LOG10E), n = Math.pow(10, a * e + Math.log(s) * Math.LOG10E)), this.zoomToValues(r, n, i)
                },
                zoomToValues: function (e, i, s) {
                    if (i < e) {
                        var a = i;
                        i = e, e = a
                    }
                    var r = this.fullMax,
                        a = this.fullMin;
                    if (this.relativeStart = t.roundTo((e - a) / (r - a), 9), this.relativeEnd = t.roundTo((i - a) / (r - a), 9), this.logarithmic) {
                        isNaN(this.minimum) || (a = this.minimum), isNaN(this.maximum) || (r = this.maximum);
                        var r = Math.log(r) * Math.LOG10E - Math.log(a) * Math.LOG10E,
                            n = Math.log(i) / Math.LN10 - Math.log(a) * Math.LOG10E;
                        this.relativeStart = t.roundTo((Math.log(e) / Math.LN10 - Math.log(a) * Math.LOG10E) / r, 9), this.relativeEnd = t.roundTo(n / r, 9)
                    }
                    if (this.minZoom != e || this.maxZoom != i) return this.minZoom = e, this.maxZoom = i, a = {
                        type: "axisZoomed"
                    }, a.chart = this.chart, a.valueAxis = this, a.startValue = e, a.endValue = i, a.relativeStart = this.relativeStart, a.relativeEnd = this.relativeEnd, this.prevStartValue == e && this.prevEndValue == i || this.fire(a), this.prevStartValue = e, this.prevEndValue = i, s || (e = {}, t.copyProperties(a, e), e.type = "axisIntZoomed", this.fire(e)), 0 === this.relativeStart && 1 == this.relativeEnd && (this.maxZoom = this.minZoom = NaN), !0
                },
                coordinateToValue: function (t) {
                    if (isNaN(t)) return NaN;
                    var e = this.axisWidth,
                        i = this.stepWidth,
                        s = this.reversed,
                        a = this.rotate,
                        r = this.min,
                        n = this.minReal;
                    return !0 === this.logarithmic ? Math.pow(10, (a ? !0 === s ? (e - t) / i : t / i : !0 === s ? t / i : (e - t) / i) + Math.log(n) * Math.LOG10E) : !0 === s ? a ? r - (t - e) / i : t / i + r : a ? t / i + r : r - (t - e) / i
                },
                getCoordinate: function (t, e) {
                    if (isNaN(t)) return NaN;
                    var i = this.rotate,
                        s = this.reversed,
                        a = this.axisWidth,
                        r = this.stepWidth,
                        n = this.min,
                        o = this.minReal;
                    return !0 === this.logarithmic ? (0 === t && (t = this.treatZeroAs), n = Math.log(t) * Math.LOG10E - Math.log(o) * Math.LOG10E, i = i ? !0 === s ? a - r * n : r * n : !0 === s ? r * n : a - r * n) : i = !0 === s ? i ? a - r * (t - n) : r * (t - n) : i ? r * (t - n) : a - r * (t - n), 1e7 < Math.abs(i) && (i = i / Math.abs(i) * 1e7), e || (i = Math.round(i)), i
                },
                synchronizeWithAxis: function (t) {
                    this.synchronizeWith = t, this.listenTo(this.synchronizeWith, "axisChanged", this.handleSynchronization)
                },
                handleSynchronization: function () {
                    if (this.synchronizeWith) {
                        t.isString(this.synchronizeWith) && (this.synchronizeWith = this.chart.getValueAxisById(this.synchronizeWith));
                        var e = this.synchronizeWith,
                            i = e.min,
                            s = e.max,
                            e = e.step,
                            a = this.synchronizationMultiplier;
                        a && (this.min = i * a, this.max = s * a, this.step = e * a, i = Math.abs(Math.log(Math.abs(Math.pow(10, Math.floor(Math.log(Math.abs(this.step)) * Math.LOG10E)))) * Math.LOG10E), this.maxDecCount = i = Math.round(i), this.draw())
                    }
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.RecAxis = t.Class({
                construct: function (e) {
                    var i = e.chart,
                        s = e.axisThickness,
                        a = e.axisColor,
                        r = e.axisAlpha,
                        n = e.offset,
                        o = e.dx,
                        h = e.dy,
                        l = e.x,
                        d = e.y,
                        u = e.height,
                        c = e.width,
                        p = i.container;
                    "H" == e.orientation ? (a = t.line(p, [0, c], [0, 0], a, r, s), this.axisWidth = e.width, "bottom" == e.position ? (h = s / 2 + n + u + d - 1, s = l) : (h = -s / 2 - n + d + h, s = o + l)) : (this.axisWidth = e.height, "right" == e.position ? (a = t.line(p, [0, 0, -o], [0, u, u - h], a, r, s), h = d + h, s = s / 2 + n + o + c + l - 1) : (a = t.line(p, [0, 0], [0, u], a, r, s), h = d, s = -s / 2 - n + l)), a.translate(s, h), s = i.container.set(), s.push(a), i.axesSet.push(s), t.setCN(i, a, e.bcn + "line"), this.axisSet = s, this.set = a
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.RecItem = t.Class({
                construct: function (e, i, s, a, r, n, o, h, l, d, u, c) {
                    i = Math.round(i);
                    var p = e.chart;
                    this.value = s, void 0 == s && (s = ""), l || (l = 0), void 0 == a && (a = !0);
                    var m = p.fontFamily,
                        f = e.fontSize;
                    void 0 == f && (f = p.fontSize);
                    var g = e.color;
                    void 0 == g && (g = p.color), void 0 !== u && (g = u);
                    var v = e.chart.container,
                        b = v.set();
                    this.set = b;
                    var x = e.axisThickness,
                        y = e.axisColor,
                        C = e.axisAlpha,
                        N = e.tickLength,
                        w = e.gridAlpha,
                        M = e.gridThickness,
                        A = e.gridColor,
                        S = e.dashLength,
                        T = e.fillColor,
                        D = e.fillAlpha,
                        L = e.labelsEnabled;
                    u = e.labelRotationR;
                    var k, B, O = e.counter,
                        R = e.inside,
                        I = e.labelOffset,
                        E = e.dx,
                        P = e.dy,
                        F = e.orientation,
                        z = e.position,
                        G = e.previousCoord,
                        W = e.height,
                        V = e.width,
                        H = e.offset;
                    o ? (void 0 !== o.id && (c = p.classNamePrefix + "-guide-" + o.id), L = !0, isNaN(o.tickLength) || (N = o.tickLength), void 0 != o.lineColor && (A = o.lineColor), void 0 != o.color && (g = o.color), isNaN(o.lineAlpha) || (w = o.lineAlpha), isNaN(o.dashLength) || (S = o.dashLength), isNaN(o.lineThickness) || (M = o.lineThickness), !0 === o.inside && (R = !0, 0 < H && (H = 0)), isNaN(o.labelRotation) || (u = o.labelRotation), isNaN(o.fontSize) || (f = o.fontSize), o.position && (z = o.position), void 0 !== o.boldLabel && (h = o.boldLabel), isNaN(o.labelOffset) || (I = o.labelOffset)) : "" === s && (N = 0), d && !isNaN(e.minorTickLength) && (N = e.minorTickLength);
                    var Y = "start";
                    0 < r && (Y = "middle"), e.centerLabels && (Y = "middle");
                    var X, j, Z = u * Math.PI / 180,
                        U = 0,
                        q = 0,
                        _ = 0,
                        K = X = 0,
                        J = 0;
                    "V" == F && (u = 0);
                    var Q;
                    L && "" !== s && (Q = e.autoWrap && 0 === u ? t.wrappedText(v, s, g, m, f, Y, h, Math.abs(r), 0) : t.text(v, s, g, m, f, Y, h), Y = Q.getBBox(), K = Y.width, J = Y.height), "H" == F ? (0 <= i && i <= V + 1 && (0 < N && 0 < C && i + l <= V + 1 && (k = t.line(v, [i + l, i + l], [0, N], y, C, M), b.push(k)), 0 < w && (B = t.line(v, [i, i + E, i + E], [W, W + P, P], A, w, M, S), b.push(B))), q = 0, U = i, o && 90 == u && R && (U -= f), !1 === a ? (Y = "start", q = "bottom" == z ? R ? q + N : q - N : R ? q - N : q + N, U += 3, 0 < r && (U += r / 2 - 3, Y = "middle"), 0 < u && (Y = "middle")) : Y = "middle", 1 == O && 0 < D && !o && !d && G < V && (a = t.fitToBounds(i, 0, V), G = t.fitToBounds(G, 0, V), 0 < (X = a - G) && (j = t.rect(v, X, e.height, T, D), j.translate(a - X + E, P), b.push(j))), "bottom" == z ? (q += W + f / 2 + H, R ? (0 < u ? (q = W - K / 2 * Math.sin(Z) - N - 3, e.centerRotatedLabels || (U += K / 2 * Math.cos(Z) - 4 + 2)) : 0 > u ? (q = W + K * Math.sin(Z) - N - 3 + 2, U += -K * Math.cos(Z) - J * Math.sin(Z) - 4) : q -= N + f + 3 + 3, q -= I) : (0 < u ? (q = W + K / 2 * Math.sin(Z) + N + 3, e.centerRotatedLabels || (U -= K / 2 * Math.cos(Z))) : 0 > u ? (q = W + N + 3 - K / 2 * Math.sin(Z) + 2, U += K / 2 * Math.cos(Z)) : q += N + x + 3 + 3, q += I)) : (q += P + f / 2 - H, U += E, R ? (0 < u ? (q = K / 2 * Math.sin(Z) + N + 3, e.centerRotatedLabels || (U -= K / 2 * Math.cos(Z))) : q += N + 3, q += I) : (0 < u ? (q = -K / 2 * Math.sin(Z) - N - 6, e.centerRotatedLabels || (U += K / 2 * Math.cos(Z))) : q -= N + f + 3 + x + 3, q -= I)), "bottom" == z ? X = (R ? W - N - 1 : W + x - 1) + H : (_ = E, X = (R ? P : P - N - x + 1) - H), n && (U += n), f = U, 0 < u && (f += K / 2 * Math.cos(Z)), Q && (n = 0, R && (n = K / 2 * Math.cos(Z)), f + n > V + 2 || 0 > f) && (Q.remove(), Q = null)) : (0 <= i && i <= W + 1 && (0 < N && 0 < C && i + l <= W + 1 && (k = t.line(v, [0, N + 1], [i + l, i + l], y, C, M), b.push(k)), 0 < w && (B = t.line(v, [0, E, V + E], [i, i + P, i + P], A, w, M, S), b.push(B))), Y = "end", (!0 === R && "left" == z || !1 === R && "right" == z) && (Y = "start"), q = i - J / 2 + 2, 1 == O && 0 < D && !o && !d && (a = t.fitToBounds(i, 0, W), G = t.fitToBounds(G, 0, W), Z = a - G, j = t.polygon(v, [0, e.width, e.width, 0], [0, 0, Z, Z], T, D), j.translate(E, a - Z + P), b.push(j)), q += f / 2, "right" == z ? (U += E + V + H, q += P, R ? (n || (q -= f / 2 + 3), U = U - (N + 4) - I) : (U += N + 4 + x, q -= 2, U += I)) : R ? (U += N + 4 - H, n || (q -= f / 2 + 3), o && (U += E, q += P), U += I) : (U += -N - x - 4 - 2 - H, q -= 2, U -= I), k && ("right" == z ? (_ += E + H + V - 1, X += P, _ = R ? _ - x : _ + x) : (_ -= H, R || (_ -= N + x))), n && (q += n), R = -3, "right" == z && (R += P), Q && (q > W + 1 || q < R - f / 10) && (Q.remove(), Q = null)), k && (k.translate(_, X), t.setCN(p, k, e.bcn + "tick"), t.setCN(p, k, c, !0), o && t.setCN(p, k, "guide")), !1 === e.visible && (k && k.remove(), Q && (Q.remove(), Q = null)), Q && (Q.attr({
                        "text-anchor": Y
                    }), Q.translate(U, q, NaN, !0), 0 !== u && Q.rotate(-u, e.chart.backgroundColor), e.allLabels.push(Q), this.label = Q, t.setCN(p, Q, e.bcn + "label"), t.setCN(p, Q, c, !0), o && t.setCN(p, Q, "guide")), B && (t.setCN(p, B, e.bcn + "grid"), t.setCN(p, B, c, !0), o && t.setCN(p, B, "guide")), j && (t.setCN(p, j, e.bcn + "fill"), t.setCN(p, j, c, !0)), d ? B && t.setCN(p, B, e.bcn + "grid-minor") : (e.counter = 0 === O ? 1 : 0, e.previousCoord = i), 0 === this.set.node.childNodes.length && this.set.remove()
                },
                graphics: function () {
                    return this.set
                },
                getLabel: function () {
                    return this.label
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.RecFill = t.Class({
                construct: function (e, i, s, a) {
                    var r = e.dx,
                        n = e.dy,
                        o = e.orientation,
                        h = 0;
                    if (s < i) {
                        var l = i;
                        i = s, s = l
                    }
                    var d = a.fillAlpha;
                    isNaN(d) && (d = 0);
                    var l = e.chart.container,
                        u = a.fillColor;
                    "V" == o ? (i = t.fitToBounds(i, 0, e.height), s = t.fitToBounds(s, 0, e.height)) : (i = t.fitToBounds(i, 0, e.width), s = t.fitToBounds(s, 0, e.width)), s -= i, isNaN(s) && (s = 4, h = 2, d = 0), 0 > s && "object" == typeof u && (u = u.join(",").split(",").reverse()), "V" == o ? (o = t.rect(l, e.width, s, u, d), o.translate(r, i - h + n)) : (o = t.rect(l, s, e.height, u, d), o.translate(i - h + r, n)), t.setCN(e.chart, o, "guide-fill"), a.id && t.setCN(e.chart, o, "guide-fill-" + a.id), this.set = l.set([o])
                },
                graphics: function () {
                    return this.set
                },
                getLabel: function () {}
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.AmChart = t.Class({
                construct: function (e) {
                    this.svgIcons = this.tapToActivate = !0, this.theme = e, this.classNamePrefix = "amcharts", this.addClassNames = !1, this.version = "3.21.12", t.addChart(this), this.createEvents("buildStarted", "dataUpdated", "init", "rendered", "drawn", "failed", "resized", "animationFinished"), this.height = this.width = "100%", this.dataChanged = !0, this.chartCreated = !1, this.previousWidth = this.previousHeight = 0, this.backgroundColor = "#FFFFFF", this.borderAlpha = this.backgroundAlpha = 0, this.color = this.borderColor = "#000000", this.fontFamily = "Verdana", this.fontSize = 11, this.usePrefixes = !1, this.autoResize = !0, this.autoDisplay = !1, this.addCodeCredits = this.accessible = !0, this.touchStartTime = this.touchClickDuration = 0, this.precision = -1, this.percentPrecision = 2, this.decimalSeparator = ".", this.thousandsSeparator = ",", this.labels = [], this.allLabels = [], this.titles = [], this.marginRight = this.marginLeft = this.autoMarginOffset = 0, this.timeOuts = [], this.creditsPosition = "top-left";
                    var i = document.createElement("div"),
                        s = i.style;
                    s.overflow = "hidden", s.position = "relative", s.textAlign = "left", this.chartDiv = i, i = document.createElement("div"), s = i.style, s.overflow = "hidden", s.position = "relative", s.textAlign = "left", this.legendDiv = i, this.titleHeight = 0, this.hideBalloonTime = 150, this.handDrawScatter = 2, this.cssScale = this.handDrawThickness = 1, this.cssAngle = 0, this.prefixesOfBigNumbers = [{
                        number: 1e3,
                        prefix: "k"
                    }, {
                        number: 1e6,
                        prefix: "M"
                    }, {
                        number: 1e9,
                        prefix: "G"
                    }, {
                        number: 1e12,
                        prefix: "T"
                    }, {
                        number: 1e15,
                        prefix: "P"
                    }, {
                        number: 1e18,
                        prefix: "E"
                    }, {
                        number: 1e21,
                        prefix: "Z"
                    }, {
                        number: 1e24,
                        prefix: "Y"
                    }], this.prefixesOfSmallNumbers = [{
                        number: 1e-24,
                        prefix: "y"
                    }, {
                        number: 1e-21,
                        prefix: "z"
                    }, {
                        number: 1e-18,
                        prefix: "a"
                    }, {
                        number: 1e-15,
                        prefix: "f"
                    }, {
                        number: 1e-12,
                        prefix: "p"
                    }, {
                        number: 1e-9,
                        prefix: "n"
                    }, {
                        number: 1e-6,
                        prefix: "μ"
                    }, {
                        number: .001,
                        prefix: "m"
                    }], this.panEventsEnabled = !0, this.product = "amcharts", this.animations = [], this.balloon = new t.AmBalloon(this.theme), this.balloon.chart = this, this.processTimeout = 0, this.processCount = 1e3, this.animatable = [], this.langObj = {}, t.applyTheme(this, e, "AmChart")
                },
                drawChart: function () {
                    0 < this.realWidth && 0 < this.realHeight && (this.drawBackground(), this.redrawLabels(), this.drawTitles(), this.brr(), this.renderFix(), this.chartDiv && (this.boundingRect = this.chartDiv.getBoundingClientRect()))
                },
                makeAccessible: function (t, e, i) {
                    this.accessible && t && (i && t.setAttr("role", i), t.setAttr("aria-label", e))
                },
                drawBackground: function () {
                    t.remove(this.background);
                    var e = this.container,
                        i = this.backgroundColor,
                        s = this.backgroundAlpha,
                        a = this.set;
                    t.isModern || 0 !== s || (s = .001);
                    var r = this.updateWidth();
                    this.realWidth = r;
                    var n = this.updateHeight();
                    this.realHeight = n, i = t.polygon(e, [0, r - 1, r - 1, 0], [0, 0, n - 1, n - 1], i, s, 1, this.borderColor, this.borderAlpha), t.setCN(this, i, "bg"), this.background = i, a.push(i), (i = this.backgroundImage) && (e = e.image(i, 0, 0, r, n), t.setCN(this, i, "bg-image"), this.bgImg = e, a.push(e))
                },
                drawTitles: function (e) {
                    var i = this.titles;
                    if (this.titleHeight = 0, t.ifArray(i)) {
                        var s, a = 20;
                        for (s = 0; s < i.length; s++) {
                            var r = i[s],
                                r = t.processObject(r, t.Title, this.theme);
                            if (!1 !== r.enabled) {
                                var n = r.color;
                                void 0 === n && (n = this.color);
                                var o = r.size;
                                isNaN(o) && (o = this.fontSize + 2), isNaN(r.alpha);
                                var h = this.marginLeft,
                                    l = !0;
                                void 0 !== r.bold && (l = r.bold), n = t.wrappedText(this.container, r.text, n, this.fontFamily, o, "middle", l, this.realWidth - 35 - this.marginRight - h), n.translate(h + (this.realWidth - this.marginRight - h) / 2, a), n.node.style.pointerEvents = "none", r.sprite = n, void 0 !== r.tabIndex && n.setAttr("tabindex", r.tabIndex), t.setCN(this, n, "title"), r.id && t.setCN(this, n, "title-" + r.id), n.attr({
                                    opacity: r.alpha
                                }), a += n.getBBox().height + 5, e ? n.remove() : this.freeLabelsSet.push(n)
                            }
                        }
                        this.titleHeight = a - 10
                    }
                },
                write: function (t) {
                    var e = this;
                    if (e.listeners)
                        for (var i = 0; i < e.listeners.length; i++) {
                            var s = e.listeners[i];
                            e.addListener(s.event, s.method)
                        }
                    e.fire({
                        type: "buildStarted",
                        chart: e
                    }), e.afterWriteTO && clearTimeout(e.afterWriteTO), 0 < e.processTimeout ? e.afterWriteTO = setTimeout(function () {
                        e.afterWrite.call(e, t)
                    }, e.processTimeout) : e.afterWrite(t)
                },
                afterWrite: function (e) {
                    var i;
                    if (i = "object" != typeof e ? document.getElementById(e) : e) {
                        for (; i.firstChild;) i.removeChild(i.firstChild);
                        this.div = i, i.style.overflow = "hidden", i.style.textAlign = "left", e = this.chartDiv;
                        var s = this.legendDiv,
                            a = this.legend,
                            r = s.style,
                            n = e.style;
                        this.measure(), this.previousHeight = this.divRealHeight, this.previousWidth = this.divRealWidth;
                        var o, h = document.createElement("div");
                        if (o = h.style, o.position = "relative", this.containerDiv = h, h.className = this.classNamePrefix + "-main-div", e.className = this.classNamePrefix + "-chart-div", i.appendChild(h), (i = this.exportConfig) && t.AmExport && !this.AmExport && (this.AmExport = new t.AmExport(this, i)), this.amExport && t.AmExport && (this.AmExport = t.extend(this.amExport, new t.AmExport(this), !0)), this.AmExport && this.AmExport.init && this.AmExport.init(), a) {
                            if (a = this.addLegend(a, a.divId), a.enabled) switch (r.left = null, r.top = null, r.right = null, n.left = null, n.right = null, n.top = null, r.position = "relative", n.position = "relative", o.width = "100%", o.height = "100%", a.position) {
                                case "bottom":
                                    h.appendChild(e), h.appendChild(s);
                                    break;
                                case "top":
                                    h.appendChild(s), h.appendChild(e);
                                    break;
                                case "absolute":
                                    r.position = "absolute", n.position = "absolute", void 0 !== a.left && (r.left = a.left + "px"), void 0 !== a.right && (r.right = a.right + "px"), void 0 !== a.top && (r.top = a.top + "px"), void 0 !== a.bottom && (r.bottom = a.bottom + "px"), a.marginLeft = 0, a.marginRight = 0, h.appendChild(e), h.appendChild(s);
                                    break;
                                case "right":
                                    r.position = "relative", n.position = "absolute", h.appendChild(e), h.appendChild(s);
                                    break;
                                case "left":
                                    r.position = "absolute", n.position = "relative", h.appendChild(e), h.appendChild(s);
                                    break;
                                case "outside":
                                    h.appendChild(e)
                            } else h.appendChild(e);
                            this.prevLegendPosition = a.position
                        } else h.appendChild(e);
                        this.listenersAdded || (this.addListeners(), this.listenersAdded = !0), (this.mouseWheelScrollEnabled || this.mouseWheelZoomEnabled) && t.addWheelListeners(), this.initChart()
                    }
                },
                createLabelsSet: function () {
                    t.remove(this.labelsSet), this.labelsSet = this.container.set(), this.freeLabelsSet.push(this.labelsSet)
                },
                initChart: function () {
                    this.balloon = t.processObject(this.balloon, t.AmBalloon, this.theme), window.AmCharts_path && (this.path = window.AmCharts_path), void 0 === this.path && (this.path = t.getPath()), void 0 === this.path && (this.path = "amcharts/"), this.path = t.normalizeUrl(this.path), void 0 === this.pathToImages && (this.pathToImages = this.path + "images/"), this.initHC || (t.callInitHandler(this), this.initHC = !0), t.applyLang(this.language, this);
                    var e = this.numberFormatter;
                    e && (isNaN(e.precision) || (this.precision = e.precision), void 0 !== e.thousandsSeparator && (this.thousandsSeparator = e.thousandsSeparator), void 0 !== e.decimalSeparator && (this.decimalSeparator = e.decimalSeparator)), (e = this.percentFormatter) && !isNaN(e.precision) && (this.percentPrecision = e.precision), this.nf = {
                        precision: this.precision,
                        thousandsSeparator: this.thousandsSeparator,
                        decimalSeparator: this.decimalSeparator
                    }, this.pf = {
                        precision: this.percentPrecision,
                        thousandsSeparator: this.thousandsSeparator,
                        decimalSeparator: this.decimalSeparator
                    }, this.destroy(), (e = this.container) ? (e.container.innerHTML = "", e.width = this.realWidth, e.height = this.realHeight, e.addDefs(this), this.chartDiv.appendChild(e.container)) : e = new t.AmDraw(this.chartDiv, this.realWidth, this.realHeight, this), this.container = e, this.extension = ".png", this.svgIcons && t.SVG && (this.extension = ".svg"), this.checkDisplay(), this.checkTransform(this.div), e.chart = this, t.VML || t.SVG ? (e.handDrawn = this.handDrawn, e.handDrawScatter = this.handDrawScatter, e.handDrawThickness = this.handDrawThickness, t.remove(this.set), this.set = e.set(), t.remove(this.gridSet), this.gridSet = e.set(), t.remove(this.cursorLineSet), this.cursorLineSet = e.set(), t.remove(this.graphsBehindSet), this.graphsBehindSet = e.set(), t.remove(this.bulletBehindSet), this.bulletBehindSet = e.set(), t.remove(this.columnSet), this.columnSet = e.set(), t.remove(this.graphsSet), this.graphsSet = e.set(), t.remove(this.trendLinesSet), this.trendLinesSet = e.set(), t.remove(this.axesSet), this.axesSet = e.set(), t.remove(this.cursorSet), this.cursorSet = e.set(), t.remove(this.scrollbarsSet), this.scrollbarsSet = e.set(), t.remove(this.bulletSet), this.bulletSet = e.set(), t.remove(this.freeLabelsSet), this.freeLabelsSet = e.set(), t.remove(this.axesLabelsSet), this.axesLabelsSet = e.set(), t.remove(this.balloonsSet), this.balloonsSet = e.set(), t.remove(this.plotBalloonsSet), this.plotBalloonsSet = e.set(), t.remove(this.zoomButtonSet), this.zoomButtonSet = e.set(), t.remove(this.zbSet), this.zbSet = null, t.remove(this.linkSet), this.linkSet = e.set()) : this.fire({
                        type: "failed",
                        chart: this
                    })
                },
                premeasure: function () {
                    var t = this.div;
                    if (t) {
                        try {
                            this.boundingRect = this.chartDiv.getBoundingClientRect()
                        } catch (t) {}
                        var e = t.offsetWidth,
                            i = t.offsetHeight;
                        t.clientHeight && (e = t.clientWidth, i = t.clientHeight), e == this.mw && i == this.mh || (this.mw = e, this.mh = i, this.measure())
                    }
                },
                measure: function () {
                    var e = this.div;
                    if (e) {
                        var i = this.chartDiv,
                            s = e.offsetWidth,
                            a = e.offsetHeight,
                            r = this.container;
                        e.clientHeight && (s = e.clientWidth, a = e.clientHeight);
                        var a = Math.round(a),
                            s = Math.round(s),
                            e = Math.round(t.toCoordinate(this.width, s)),
                            n = Math.round(t.toCoordinate(this.height, a));
                        (s != this.previousWidth || a != this.previousHeight) && 0 < e && 0 < n && (i.style.width = e + "px", i.style.height = n + "px", i.style.padding = 0, r && r.setSize(e, n), this.balloon = t.processObject(this.balloon, t.AmBalloon, this.theme)), this.balloon && this.balloon.setBounds && this.balloon.setBounds(2, 2, e - 2, n), this.updateWidth(), this.balloon.chart = this, this.realWidth = e, this.realHeight = n, this.divRealWidth = s, this.divRealHeight = a
                    }
                },
                checkDisplay: function () {
                    if (this.autoDisplay && this.container) {
                        var e = t.rect(this.container, 10, 10),
                            i = e.getBBox();
                        0 === i.width && 0 === i.height && (this.divRealHeight = this.divRealWidth = this.realHeight = this.realWidth = 0, this.previousWidth = this.previousHeight = NaN), e.remove()
                    }
                },
                checkTransform: function (t) {
                    if (this.autoTransform && window.getComputedStyle && t) {
                        if (t.style) {
                            var e = window.getComputedStyle(t, null);
                            if (e && (e = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform") || e.getPropertyValue("transform")) && "none" !== e) {
                                var i = e.split("(")[1].split(")")[0].split(","),
                                    e = i[0],
                                    i = i[1],
                                    e = Math.sqrt(e * e + i * i);
                                isNaN(e) || (this.cssScale *= e)
                            }
                        }
                        t.parentNode && this.checkTransform(t.parentNode)
                    }
                },
                destroy: function () {
                    this.chartDiv.innerHTML = "", this.clearTimeOuts(), this.legend && this.legend.destroy()
                },
                clearTimeOuts: function () {
                    var t = this.timeOuts;
                    if (t) {
                        var e;
                        for (e = 0; e < t.length; e++) clearTimeout(t[e])
                    }
                    this.timeOuts = []
                },
                clear: function (e) {
                    try {
                        document.removeEventListener("touchstart", this.docfn1, !0), document.removeEventListener("touchend", this.docfn2, !0)
                    } catch (t) {}
                    if (t.callMethod("clear", [this.chartScrollbar, this.scrollbarV, this.scrollbarH, this.chartCursor]), this.chartCursor = this.scrollbarH = this.scrollbarV = this.chartScrollbar = null, this.clearTimeOuts(), this.container && (this.container.remove(this.chartDiv), this.container.remove(this.legendDiv)), e || t.removeChart(this), e = this.div)
                        for (; e.firstChild;) e.removeChild(e.firstChild);
                    this.legend && this.legend.destroy(), this.AmExport && this.AmExport.clear && this.AmExport.clear()
                },
                setMouseCursor: function (e) {
                    "auto" == e && t.isNN && (e = "default"), this.chartDiv.style.cursor = e, this.legendDiv.style.cursor = e
                },
                redrawLabels: function () {
                    this.labels = [];
                    var t = this.allLabels;
                    this.createLabelsSet();
                    var e;
                    for (e = 0; e < t.length; e++) this.drawLabel(t[e])
                },
                drawLabel: function (e) {
                    var i = this;
                    if (i.container && !1 !== e.enabled) {
                        e = t.processObject(e, t.Label, i.theme);
                        var s = e.y,
                            a = e.text,
                            r = e.align,
                            n = e.size,
                            o = e.color,
                            h = e.rotation,
                            l = e.alpha,
                            d = e.bold,
                            u = t.toCoordinate(e.x, i.realWidth),
                            s = t.toCoordinate(s, i.realHeight);
                        u || (u = 0), s || (s = 0), void 0 === o && (o = i.color), isNaN(n) && (n = i.fontSize), r || (r = "start"), "left" == r && (r = "start"), "right" == r && (r = "end"), "center" == r && (r = "middle", h ? s = i.realHeight - s + s / 2 : u = i.realWidth / 2 - u), void 0 === l && (l = 1), void 0 === h && (h = 0), s += n / 2, a = t.text(i.container, a, o, i.fontFamily, n, r, d, l), a.translate(u, s), void 0 !== e.tabIndex && a.setAttr("tabindex", e.tabIndex), t.setCN(i, a, "label"), e.id && t.setCN(i, a, "label-" + e.id), 0 !== h && a.rotate(h), e.url ? (a.setAttr("cursor", "pointer"), a.click(function () {
                            t.getURL(e.url, i.urlTarget)
                        })) : a.node.style.pointerEvents = "none", i.labelsSet.push(a), i.labels.push(a)
                    }
                },
                addLabel: function (t, e, i, s, a, r, n, o, h, l) {
                    t = {
                        x: t,
                        y: e,
                        text: i,
                        align: s,
                        size: a,
                        color: r,
                        alpha: o,
                        rotation: n,
                        bold: h,
                        url: l,
                        enabled: !0
                    }, this.container && this.drawLabel(t), this.allLabels.push(t)
                },
                clearLabels: function () {
                    var t, e = this.labels;
                    for (t = e.length - 1; 0 <= t; t--) e[t].remove();
                    this.labels = [], this.allLabels = []
                },
                updateHeight: function () {
                    var t = this.divRealHeight,
                        e = this.legend;
                    if (e) {
                        var i = this.legendDiv.offsetHeight,
                            e = e.position;
                        "top" != e && "bottom" != e || (t -= i, (0 > t || isNaN(t)) && (t = 0), this.chartDiv.style.height = t + "px")
                    }
                    return t
                },
                updateWidth: function () {
                    var t = this.divRealWidth,
                        e = this.divRealHeight,
                        i = this.legend;
                    if (i) {
                        var s = this.legendDiv,
                            a = s.offsetWidth;
                        isNaN(i.width) || (a = i.width), i.ieW && (a = i.ieW);
                        var r = s.offsetHeight,
                            s = s.style,
                            n = this.chartDiv.style,
                            o = i.position;
                        "right" != o && "left" != o || void 0 !== i.divId || (t -= a, (0 > t || isNaN(t)) && (t = 0), n.width = t + "px", this.balloon && this.balloon.setBounds && this.balloon.setBounds(2, 2, t - 2, this.realHeight), "left" == o ? (n.left = a + "px", s.left = "0px") : (n.left = "0px", s.left = t + "px"), e > r && (s.top = (e - r) / 2 + "px"))
                    }
                    return t
                },
                getTitleHeight: function () {
                    return this.drawTitles(!0), this.titleHeight
                },
                addTitle: function (t, e, i, s, a) {
                    return isNaN(e) && (e = this.fontSize + 2), t = {
                        text: t,
                        size: e,
                        color: i,
                        alpha: s,
                        bold: a,
                        enabled: !0
                    }, this.titles.push(t), t
                },
                handleWheel: function (t) {
                    var e = 0;
                    t || (t = window.event), t.wheelDelta ? e = t.wheelDelta / 120 : t.detail && (e = -t.detail / 3), e && this.handleWheelReal(e, t.shiftKey), t.preventDefault && t.preventDefault()
                },
                handleWheelReal: function () {},
                handleDocTouchStart: function () {
                    this.handleMouseMove(), this.tmx = this.mouseX, this.tmy = this.mouseY, this.touchStartTime = (new Date).getTime()
                },
                handleDocTouchEnd: function () {
                    -.5 < this.tmx && this.tmx < this.divRealWidth + 1 && 0 < this.tmy && this.tmy < this.divRealHeight ? (this.handleMouseMove(), 4 > Math.abs(this.mouseX - this.tmx) && 4 > Math.abs(this.mouseY - this.tmy) ? (this.tapped = !0, this.panRequired && this.panEventsEnabled && this.chartDiv && (this.chartDiv.style.msTouchAction = "none", this.chartDiv.style.touchAction = "none")) : this.mouseIsOver || this.resetTouchStyle()) : (this.tapped = !1, this.resetTouchStyle())
                },
                resetTouchStyle: function () {
                    this.panEventsEnabled && this.chartDiv && (this.chartDiv.style.msTouchAction = "auto", this.chartDiv.style.touchAction = "auto")
                },
                checkTouchDuration: function (t) {
                    var e = this,
                        i = (new Date).getTime();
                    if (t)
                        if (t.touches) e.isTouchEvent = !0;
                        else if (!e.isTouchEvent) return !0;
                    if (i - e.touchStartTime > e.touchClickDuration) return !0;
                    setTimeout(function () {
                        e.resetTouchDuration()
                    }, 300)
                },
                resetTouchDuration: function () {
                    this.isTouchEvent = !1
                },
                checkTouchMoved: function () {
                    if (4 < Math.abs(this.mouseX - this.tmx) || 4 < Math.abs(this.mouseY - this.tmy)) return !0
                },
                addListeners: function () {
                    var t = this,
                        e = t.chartDiv;
                    document.addEventListener ? ("ontouchstart" in document.documentElement && (e.addEventListener("touchstart", function (e) {
                        t.handleTouchStart.call(t, e)
                    }, !0), e.addEventListener("touchmove", function (e) {
                        t.handleMouseMove.call(t, e)
                    }, !0), e.addEventListener("touchend", function (e) {
                        t.handleTouchEnd.call(t, e)
                    }, !0), t.docfn1 = function (e) {
                        t.handleDocTouchStart.call(t, e)
                    }, t.docfn2 = function (e) {
                        t.handleDocTouchEnd.call(t, e)
                    }, document.addEventListener("touchstart", t.docfn1, !0), document.addEventListener("touchend", t.docfn2, !0)), e.addEventListener("mousedown", function (e) {
                        t.mouseIsOver = !0, t.handleMouseMove.call(t, e), t.handleMouseDown.call(t, e), t.handleDocTouchStart.call(t, e)
                    }, !0), e.addEventListener("mouseover", function (e) {
                        t.handleMouseOver.call(t, e)
                    }, !0), e.addEventListener("mouseout", function (e) {
                        t.handleMouseOut.call(t, e)
                    }, !0), e.addEventListener("mouseup", function (e) {
                        t.handleDocTouchEnd.call(t, e)
                    }, !0)) : (e.attachEvent("onmousedown", function (e) {
                        t.handleMouseDown.call(t, e)
                    }), e.attachEvent("onmouseover", function (e) {
                        t.handleMouseOver.call(t, e)
                    }), e.attachEvent("onmouseout", function (e) {
                        t.handleMouseOut.call(t, e)
                    }))
                },
                dispDUpd: function () {
                    this.skipEvents || (this.dispatchDataUpdated && (this.dispatchDataUpdated = !1, this.fire({
                        type: "dataUpdated",
                        chart: this
                    })), this.chartCreated || (this.chartCreated = !0, this.fire({
                        type: "init",
                        chart: this
                    })), this.chartRendered || (this.fire({
                        type: "rendered",
                        chart: this
                    }), this.chartRendered = !0), this.fire({
                        type: "drawn",
                        chart: this
                    })), this.skipEvents = !1
                },
                validateSize: function () {
                    var t = this;
                    if (t.premeasure(), t.checkDisplay(), t.cssScale = 1, t.cssAngle = 0, t.checkTransform(t.div), t.divRealWidth != t.previousWidth || t.divRealHeight != t.previousHeight) {
                        var e = t.legend;
                        if (0 < t.realWidth && 0 < t.realHeight) {
                            if (t.sizeChanged = !0, e) {
                                t.legendInitTO && clearTimeout(t.legendInitTO);
                                var i = setTimeout(function () {
                                    e.invalidateSize()
                                }, 10);
                                t.timeOuts.push(i), t.legendInitTO = i
                            }
                            t.marginsUpdated = !1, clearTimeout(t.initTO), i = setTimeout(function () {
                                t.initChart()
                            }, 10), t.timeOuts.push(i), t.initTO = i
                        }
                        t.renderFix(), e && e.renderFix && e.renderFix(), t.positionCred(), clearTimeout(t.resizedTO), t.resizedTO = setTimeout(function () {
                            t.fire({
                                type: "resized",
                                chart: t
                            })
                        }, 10), t.previousHeight = t.divRealHeight, t.previousWidth = t.divRealWidth
                    }
                },
                invalidateSize: function () {
                    this.previousHeight = this.previousWidth = NaN, this.invalidateSizeReal()
                },
                invalidateSizeReal: function () {
                    var t = this;
                    t.marginsUpdated = !1, clearTimeout(t.validateTO);
                    var e = setTimeout(function () {
                        t.validateSize()
                    }, 5);
                    t.timeOuts.push(e), t.validateTO = e
                },
                validateData: function (t) {
                    this.chartCreated && (this.dataChanged = !0, this.marginsUpdated = !1, this.initChart(t))
                },
                validateNow: function (t, e) {
                    this.initTO && clearTimeout(this.initTO), t && (this.dataChanged = !0, this.marginsUpdated = !1), this.skipEvents = e, this.chartRendered = !1;
                    var i = this.legend;
                    i && i.position != this.prevLegendPosition && (this.previousWidth = this.mw = 0, i.invalidateSize && (i.invalidateSize(), this.validateSize())), this.write(this.div)
                },
                showItem: function (t) {
                    t.hidden = !1, this.initChart()
                },
                hideItem: function (t) {
                    t.hidden = !0, this.initChart()
                },
                hideBalloon: function () {
                    var t = this;
                    clearTimeout(t.hoverInt), clearTimeout(t.balloonTO), t.hoverInt = setTimeout(function () {
                        t.hideBalloonReal.call(t)
                    }, t.hideBalloonTime)
                },
                cleanChart: function () {},
                hideBalloonReal: function () {
                    var t = this.balloon;
                    t && t.hide && t.hide()
                },
                showBalloon: function (t, e, i, s, a) {
                    var r = this;
                    clearTimeout(r.balloonTO), clearTimeout(r.hoverInt), r.balloonTO = setTimeout(function () {
                        r.showBalloonReal.call(r, t, e, i, s, a)
                    }, 1)
                },
                showBalloonReal: function (t, e, i, s, a) {
                    this.handleMouseMove();
                    var r = this.balloon;
                    r.enabled && (r.followCursor(!1), r.changeColor(e), !i || r.fixedPosition ? (r.setPosition(s, a), isNaN(s) || isNaN(a) ? r.followCursor(!0) : r.followCursor(!1)) : r.followCursor(!0), t && r.showBalloon(t))
                },
                handleMouseOver: function () {
                    this.outTO && clearTimeout(this.outTO), t.resetMouseOver(), this.mouseIsOver = !0
                },
                handleMouseOut: function () {
                    var e = this;
                    t.resetMouseOver(), e.outTO && clearTimeout(e.outTO), e.outTO = setTimeout(function () {
                        e.handleMouseOutReal()
                    }, 10)
                },
                handleMouseOutReal: function () {
                    this.mouseIsOver = !1
                },
                handleMouseMove: function (t) {
                    t || (t = window.event), this.mouse2Y = this.mouse2X = NaN;
                    var e, i, s, a;
                    if (t) {
                        if (t.touches) {
                            var r = t.touches.item(1);
                            if (r && this.panEventsEnabled && this.boundingRect && (s = r.clientX - this.boundingRect.left, a = r.clientY - this.boundingRect.top), !(t = t.touches.item(0))) return
                        } else this.wasTouched = !1;
                        this.boundingRect && t.clientX && (e = t.clientX - this.boundingRect.left, i = t.clientY - this.boundingRect.top), isNaN(s) ? this.mouseX = e : (this.mouseX = Math.min(e, s), this.mouse2X = Math.max(e, s)), isNaN(a) ? this.mouseY = i : (this.mouseY = Math.min(i, a), this.mouse2Y = Math.max(i, a)), this.autoTransform && (this.mouseX /= this.cssScale, this.mouseY /= this.cssScale)
                    }
                },
                handleTouchStart: function (t) {
                    this.hideBalloonReal(), t && (t.touches && this.tapToActivate && !this.tapped || !this.panRequired) || (this.handleMouseMove(t), this.handleMouseDown(t))
                },
                handleTouchEnd: function (e) {
                    this.wasTouched = !0, this.handleMouseMove(e), t.resetMouseOver(), this.handleReleaseOutside(e)
                },
                handleReleaseOutside: function () {
                    this.handleDocTouchEnd.call(this)
                },
                handleMouseDown: function (e) {
                    t.resetMouseOver(), this.mouseIsOver = !0, e && e.preventDefault && (this.panEventsEnabled ? e.preventDefault() : e.touches || e.preventDefault())
                },
                addLegend: function (e, i) {
                    e = t.processObject(e, t.AmLegend, this.theme), e.divId = i, e.ieW = 0;
                    var s;
                    return s = "object" != typeof i && i ? document.getElementById(i) : i, this.legend = e, e.chart = this, s ? (e.div = s, e.position = "outside", e.autoMargins = !1) : e.div = this.legendDiv, e
                },
                removeLegend: function () {
                    this.legend = void 0, this.previousWidth = 0, this.legendDiv.innerHTML = ""
                },
                handleResize: function () {
                    (t.isPercents(this.width) || t.isPercents(this.height)) && this.invalidateSizeReal(), this.renderFix()
                },
                renderFix: function () {
                    if (!t.VML) {
                        var e = this.container;
                        e && e.renderFix()
                    }
                },
                getSVG: function () {
                    if (t.hasSVG) return this.container
                },
                animate: function (e, i, s, a, r, n, o) {
                    return e["an_" + i] && t.removeFromArray(this.animations, e["an_" + i]), s = {
                        obj: e,
                        frame: 0,
                        attribute: i,
                        from: s,
                        to: a,
                        time: r,
                        effect: n,
                        suffix: o
                    }, e["an_" + i] = s, this.animations.push(s), s
                },
                setLegendData: function (t) {
                    var e = this.legend;
                    e && e.setData(t)
                },
                stopAnim: function (e) {
                    t.removeFromArray(this.animations, e)
                },
                updateAnimations: function () {
                    var e;
                    if (this.container && this.container.update(), this.animations)
                        for (e = this.animations.length - 1; 0 <= e; e--) {
                            var i = this.animations[e],
                                s = t.updateRate * i.time,
                                a = i.frame + 1,
                                r = i.obj,
                                n = i.attribute;
                            if (a <= s) {
                                i.frame++;
                                var o = Number(i.from),
                                    h = Number(i.to) - o,
                                    s = t[i.effect](0, a, o, h, s);
                                0 === h ? (this.animations.splice(e, 1), r.node.style[n] = Number(i.to) + i.suffix) : r.node.style[n] = s + i.suffix
                            } else r.node.style[n] = Number(i.to) + i.suffix, r.animationFinished = !0, this.animations.splice(e, 1)
                        }
                },
                update: function () {
                    this.updateAnimations();
                    var t = this.animatable;
                    if (0 < t.length) {
                        for (var e = !0, i = t.length - 1; 0 <= i; i--) {
                            var s = t[i];
                            s && (s.animationFinished ? t.splice(i, 1) : e = !1)
                        }
                        e && (this.fire({
                            type: "animationFinished",
                            chart: this
                        }), this.animatable = [])
                    }
                },
                inIframe: function () {
                    try {
                        return window.self !== window.top
                    } catch (t) {
                        return !0
                    }
                },
                brr: function () {
                    if (!this.hideCredits) {
                        var t, e = "amcharts.com",
                            i = window.location.hostname.split(".");
                        if (2 <= i.length && (t = i[i.length - 2] + "." + i[i.length - 1]), this.amLink && (i = this.amLink.parentNode) && i.removeChild(this.amLink), t != e || !0 === this.inIframe()) {
                            t = e = "http://www." + e;
                            var i = "JavaScript charts",
                                s = "JS chart by amCharts";
                            "ammap" == this.product && (t = e + "/javascript-maps/", i = "Interactive JavaScript maps", s = "JS map by amCharts"), e = document.createElement("a"), s = document.createTextNode(s), e.setAttribute("href", t), e.setAttribute("title", i), this.urlTarget && e.setAttribute("target", this.urlTarget), e.appendChild(s), this.chartDiv.appendChild(e), this.amLink = e, e = e.style, e.position = "absolute", e.textDecoration = "none", e.color = this.color, e.fontFamily = this.fontFamily, e.fontSize = "11px", e.opacity = .7, e.display = "block", this.positionCred()
                        }
                    }
                },
                positionCred: function () {
                    var t = this.amLink;
                    if (t) {
                        var e = this.creditsPosition,
                            i = t.style,
                            s = t.offsetWidth,
                            t = t.offsetHeight,
                            a = 0,
                            r = 0,
                            n = this.realWidth,
                            o = this.realHeight,
                            h = this.type;
                        "serial" != h && "xy" != h && "gantt" != h || (a = this.marginLeftReal, r = this.marginTopReal, n = a + this.plotAreaWidth, o = r + this.plotAreaHeight);
                        var h = 5 + a,
                            l = r + 5;
                        "bottom-left" == e && (h = 5 + a, l = o - t - 3), "bottom-right" == e && (h = n - s - 5, l = o - t - 3), "top-right" == e && (h = n - s - 5, l = r + 5), i.left = h + "px", i.top = l + "px"
                    }
                }
            }), t.Slice = t.Class({
                construct: function () {}
            }), t.SerialDataItem = t.Class({
                construct: function () {}
            }), t.GraphDataItem = t.Class({
                construct: function () {}
            }), t.Guide = t.Class({
                construct: function (e) {
                    this.cname = "Guide", t.applyTheme(this, e, this.cname)
                }
            }), t.Title = t.Class({
                construct: function (e) {
                    this.cname = "Title", t.applyTheme(this, e, this.cname)
                }
            }), t.Label = t.Class({
                construct: function (e) {
                    this.cname = "Label", t.applyTheme(this, e, this.cname)
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.AmGraph = t.Class({
                construct: function (e) {
                    this.cname = "AmGraph", this.createEvents("rollOverGraphItem", "rollOutGraphItem", "clickGraphItem", "doubleClickGraphItem", "rightClickGraphItem", "clickGraph", "rollOverGraph", "rollOutGraph"), this.type = "line", this.stackable = !0, this.columnCount = 1, this.columnIndex = 0, this.centerCustomBullets = this.showBalloon = !0, this.maxBulletSize = 50, this.minBulletSize = 4, this.balloonText = "[[value]]", this.hidden = this.scrollbar = this.animationPlayed = !1, this.pointPosition = "middle", this.depthCount = 1, this.includeInMinMax = !0, this.negativeBase = 0, this.visibleInLegend = !0, this.showAllValueLabels = !1, this.showBulletsAt = this.showBalloonAt = "close", this.lineThickness = 1, this.dashLength = 0, this.connect = !0, this.lineAlpha = 1, this.bullet = "none", this.bulletBorderThickness = 2, this.bulletBorderAlpha = 0, this.bulletAlpha = 1, this.bulletSize = 8, this.cornerRadiusTop = this.hideBulletsCount = this.bulletOffset = 0, this.cursorBulletAlpha = 1, this.gradientOrientation = "vertical", this.dy = this.dx = 0, this.periodValue = "", this.clustered = !0, this.periodSpan = 1, this.accessibleLabel = "[[title]] [[category]] [[value]]", this.accessibleSkipText = "Press enter to skip [[title]]", this.y = this.x = 0, this.switchable = !0, this.minDistance = .8, this.tcc = 1, this.labelRotation = 0, this.labelAnchor = "auto", this.labelOffset = 3, this.bcn = "graph-", this.dateFormat = "MMM DD, YYYY", this.noRounding = !0, t.applyTheme(this, e, this.cname)
                },
                init: function () {
                    this.createBalloon()
                },
                draw: function () {
                    var e = this.chart;
                    e.isRolledOverBullet = !1;
                    var i = e.type;
                    if (e.drawGraphs) {
                        isNaN(this.precision) || (this.numberFormatter ? this.numberFormatter.precision = this.precision : this.numberFormatter = {
                            precision: this.precision,
                            decimalSeparator: e.decimalSeparator,
                            thousandsSeparator: e.thousandsSeparator
                        });
                        var s = e.container;
                        this.container = s, this.destroy();
                        var a = s.set();
                        this.set = a, a.translate(this.x, this.y);
                        var r = s.set();
                        this.bulletSet = r, r.translate(this.x, this.y), this.behindColumns ? (e.graphsBehindSet.push(a), e.bulletBehindSet.push(r)) : (e.graphsSet.push(a), e.bulletSet.push(r));
                        var n = this.bulletAxis;
                        t.isString(n) && (this.bulletAxis = e.getValueAxisById(n)), s = s.set(), t.remove(this.columnsSet), this.columnsSet = s, t.setCN(e, a, "graph-" + this.type), t.setCN(e, a, "graph-" + this.id), t.setCN(e, r, "graph-" + this.type), t.setCN(e, r, "graph-" + this.id), this.columnsArray = [], this.ownColumns = [], this.allBullets = [], this.animationArray = [], r = this.labelPosition, r || (n = this.valueAxis.stackType, r = "top", "column" == this.type && (e.rotate && (r = "right"), "100%" == n || "regular" == n) && (r = "middle"), this.labelPosition = r), t.ifArray(this.data) && (e = !1, "xy" == i ? this.xAxis.axisCreated && this.yAxis.axisCreated && (e = !0) : this.valueAxis.axisCreated && (e = !0), !this.hidden && e && this.createGraph()), a.push(s)
                    }
                },
                createGraph: function () {
                    var e = this,
                        i = e.chart;
                    e.startAlpha = i.startAlpha, e.seqAn = i.sequencedAnimation, e.baseCoord = e.valueAxis.baseCoord, void 0 === e.fillAlphas && (e.fillAlphas = 0), e.bulletColorR = e.bulletColor, void 0 === e.bulletColorR && (e.bulletColorR = e.lineColorR, e.bulletColorNegative = e.negativeLineColor), void 0 === e.bulletAlpha && (e.bulletAlpha = e.lineAlpha), ("step" == s || t.VML) && (e.noRounding = !1);
                    var s = i.type;
                    if ("gantt" == s && (s = "serial"), clearTimeout(e.playedTO), !isNaN(e.valueAxis.min) && !isNaN(e.valueAxis.max)) {
                        switch (s) {
                            case "serial":
                                e.categoryAxis && (e.createSerialGraph(), "candlestick" == e.type && 1 > e.valueAxis.minMaxMultiplier && e.positiveClip(e.set));
                                break;
                            case "radar":
                                e.createRadarGraph();
                                break;
                            case "xy":
                                e.createXYGraph()
                        }
                        e.playedTO = setTimeout(function () {
                            e.setAnimationPlayed.call(e)
                        }, 500 * e.chart.startDuration)
                    }
                },
                setAnimationPlayed: function () {
                    this.animationPlayed = !0
                },
                createXYGraph: function () {
                    var t = [],
                        e = [],
                        i = this.xAxis,
                        s = this.yAxis;
                    this.pmh = s.height, this.pmw = i.width, this.pmy = this.pmx = 0;
                    var a;
                    for (a = this.start; a <= this.end; a++) {
                        var r = this.data[a].axes[i.id].graphs[this.id],
                            n = r.values,
                            o = n.x,
                            h = n.y,
                            n = i.getCoordinate(o, this.noRounding),
                            l = s.getCoordinate(h, this.noRounding);
                        if (!isNaN(o) && !isNaN(h) && (t.push(n), e.push(l), r.x = n, r.y = l, o = this.createBullet(r, n, l, a), h = this.labelText)) {
                            var h = this.createLabel(r, h),
                                d = 0;
                            o && (d = o.size), this.positionLabel(r, n, l, h, d)
                        }
                    }
                    this.drawLineGraph(t, e), this.launchAnimation()
                },
                createRadarGraph: function () {
                    var t, e, i, s, a, r = this.valueAxis.stackType,
                        n = [],
                        o = [],
                        h = [],
                        l = [];
                    for (a = this.start; a <= this.end; a++) {
                        var d, u, c = this.data[a].axes[this.valueAxis.id].graphs[this.id];
                        if ("none" == r || "3d" == r ? d = c.values.value : (d = c.values.close, u = c.values.open), isNaN(d)) this.connect || (this.drawLineGraph(n, o, h, l), n = [], o = [], h = [], l = []);
                        else {
                            var p = this.valueAxis.getCoordinate(d, this.noRounding) - this.height,
                                p = p * this.valueAxis.rMultiplier,
                                m = -360 / (this.end - this.start + 1) * a;
                            if ("middle" == this.valueAxis.pointPosition && (m -= 180 / (this.end - this.start + 1)), d = p * Math.sin(m / 180 * Math.PI), p *= Math.cos(m / 180 * Math.PI), n.push(d), o.push(p), !isNaN(u)) {
                                var f = this.valueAxis.getCoordinate(u, this.noRounding) - this.height,
                                    f = f * this.valueAxis.rMultiplier,
                                    g = f * Math.sin(m / 180 * Math.PI),
                                    m = f * Math.cos(m / 180 * Math.PI);
                                h.push(g), l.push(m), isNaN(i) && (i = g), isNaN(s) && (s = m)
                            }
                            m = this.createBullet(c, d, p, a), c.x = d, c.y = p, (g = this.labelText) && (g = this.createLabel(c, g), f = 0, m && (f = m.size), this.positionLabel(c, d, p, g, f)), isNaN(t) && (t = d), isNaN(e) && (e = p)
                        }
                    }
                    n.push(t), o.push(e), isNaN(i) || (h.push(i), l.push(s)), this.drawLineGraph(n, o, h, l), this.launchAnimation()
                },
                positionLabel: function (t, e, i, s, a) {
                    if (s) {
                        var r = this.chart,
                            n = this.valueAxis,
                            o = "middle",
                            h = !1,
                            l = this.labelPosition,
                            d = s.getBBox(),
                            u = this.chart.rotate,
                            c = t.isNegative,
                            p = this.fontSize;
                        switch (void 0 === p && (p = this.chart.fontSize), i -= d.height / 2 - p / 2 - 1, void 0 !== t.labelIsNegative && (c = t.labelIsNegative), l) {
                            case "right":
                                l = u && c ? "left" : "right";
                                break;
                            case "top":
                                l = u ? "top" : c ? "bottom" : "top";
                                break;
                            case "bottom":
                                l = u ? "bottom" : c ? "top" : "bottom";
                                break;
                            case "left":
                                l = u && c ? "right" : "left"
                        }
                        var p = t.columnGraphics,
                            m = 0,
                            f = 0;
                        p && (m = p.x, f = p.y);
                        var g = this.labelOffset;
                        switch (l) {
                            case "right":
                                o = "start", e += a / 2 + g;
                                break;
                            case "top":
                                i = n.reversed ? i + (a / 2 + d.height / 2 + g) : i - (a / 2 + d.height / 2 + g);
                                break;
                            case "bottom":
                                i = n.reversed ? i - (a / 2 + d.height / 2 + g) : i + (a / 2 + d.height / 2 + g);
                                break;
                            case "left":
                                o = "end", e -= a / 2 + g;
                                break;
                            case "inside":
                                "column" == this.type && (h = !0, u ? c ? (o = "end", e = m - 3 - g) : (o = "start", e = m + 3 + g) : i = c ? f + 7 + g : f - 10 - g);
                                break;
                            case "middle":
                                "column" == this.type && (h = !0, u ? e -= (e - m) / 2 + g - 3 : i -= (i - f) / 2 + g - 3)
                        }
                        return "auto" != this.labelAnchor && (o = this.labelAnchor), s.attr({
                            "text-anchor": o
                        }), this.labelRotation && s.rotate(this.labelRotation), s.translate(e, i), !this.showAllValueLabels && p && h && (d = s.getBBox(), d.height > t.columnHeight || d.width > t.columnWidth) && (s.remove(), s = null), s && "radar" != r.type && (u ? ((0 > i || i > this.height) && (s.remove(), s = null), !this.showAllValueLabels && s && (0 > e || e > this.width) && (s.remove(), s = null)) : ((0 > e || e > this.width) && (s.remove(), s = null), !this.showAllValueLabels && s && (0 > i || i > this.height) && (s.remove(), s = null))), s && this.allBullets.push(s), s
                    }
                },
                getGradRotation: function () {
                    var t = 270;
                    return "horizontal" == this.gradientOrientation && (t = 0), this.gradientRotation = t
                },
                createSerialGraph: function () {
                    this.dashLengthSwitched = this.fillColorsSwitched = this.lineColorSwitched = void 0;
                    var e = this.chart,
                        i = this.id,
                        s = this.index,
                        a = this.data,
                        r = this.chart.container,
                        n = this.valueAxis,
                        o = this.type,
                        h = this.columnWidthReal,
                        l = this.showBulletsAt;
                    isNaN(this.columnWidth) || (h = this.columnWidth), isNaN(h) && (h = .8);
                    var d, u, c, p, m, f = this.useNegativeColorIfDown,
                        g = this.width,
                        v = this.height,
                        b = this.y,
                        x = this.rotate,
                        y = this.columnCount,
                        C = t.toCoordinate(this.cornerRadiusTop, h / 2),
                        N = this.connect,
                        w = [],
                        M = [],
                        A = this.chart.graphs.length,
                        S = this.dx / this.tcc,
                        T = this.dy / this.tcc,
                        D = n.stackType,
                        L = this.start,
                        k = this.end,
                        B = this.scrollbar,
                        O = "graph-column-";
                    B && (O = "scrollbar-graph-column-");
                    var R, I = this.categoryAxis,
                        E = this.baseCoord,
                        P = this.negativeBase,
                        F = this.columnIndex,
                        z = this.lineThickness,
                        G = this.lineAlpha,
                        W = this.lineColorR,
                        V = this.dashLength,
                        H = this.set,
                        Y = this.getGradRotation(),
                        X = this.chart.columnSpacing,
                        j = I.cellWidth,
                        Z = (j * h - y) / y;
                    X > Z && (X = Z);
                    var U, q, _, K = v,
                        J = g,
                        Q = 0,
                        $ = 0,
                        tt = 0,
                        et = 0,
                        it = 0,
                        st = 0,
                        at = this.fillColorsR,
                        rt = this.negativeFillColors,
                        nt = this.negativeLineColor,
                        ot = this.fillAlphas,
                        ht = this.negativeFillAlphas;
                    "object" == typeof ot && (ot = ot[0]), "object" == typeof ht && (ht = ht[0]);
                    var lt = this.noRounding;
                    "step" == o && (lt = !1);
                    var dt = n.getCoordinate(n.min);
                    if (n.logarithmic && (dt = n.getCoordinate(n.minReal)), this.minCoord = dt, this.resetBullet && (this.bullet = "none"), !(B || "line" != o && "smoothedLine" != o && "step" != o || (1 == a.length && "step" != o && "none" == this.bullet && (this.bullet = "round", this.resetBullet = !0), !rt && void 0 == nt || f))) {
                        var ut = P;
                        ut > n.max && (ut = n.max), ut < n.min && (ut = n.min), n.logarithmic && (ut = n.minReal);
                        var ct = n.getCoordinate(ut) + .5,
                            pt = n.getCoordinate(n.max);
                        x ? (K = v, J = Math.abs(pt - ct), tt = v, et = Math.abs(dt - ct), st = $ = 0, n.reversed ? (Q = 0, it = ct) : (Q = ct, it = 0)) : (J = g, K = Math.abs(pt - ct), et = g, tt = Math.abs(dt - ct), it = Q = 0, n.reversed ? (st = b, $ = ct) : st = ct)
                    }
                    var mt = Math.round;
                    this.pmx = mt(Q), this.pmy = mt($), this.pmh = mt(K), this.pmw = mt(J), this.nmx = mt(it), this.nmy = mt(st), this.nmh = mt(tt), this.nmw = mt(et), t.isModern || (this.nmy = this.nmx = 0, this.nmh = this.height), this.clustered || (y = 1), 1 > (h = "column" == o ? (j * h - X * (y - 1)) / y : j * h) && (h = 1);
                    var ft = this.fixedColumnWidth;
                    isNaN(ft) || (h = ft);
                    var gt;
                    if ("line" == o || "step" == o || "smoothedLine" == o) {
                        if (0 < L) {
                            for (gt = L - 1; - 1 < gt; gt--)
                                if (U = a[gt], q = U.axes[n.id].graphs[i], _ = q.values.value, !isNaN(_)) {
                                    L = gt;
                                    break
                                }
                            if (this.lineColorField)
                                for (gt = L; - 1 < gt; gt--)
                                    if (U = a[gt], q = U.axes[n.id].graphs[i], q.lineColor) {
                                        this.lineColorSwitched = q.lineColor, void 0 === this.bulletColor && (this.bulletColorSwitched = this.lineColorSwitched);
                                        break
                                    }
                            if (this.fillColorsField)
                                for (gt = L; - 1 < gt; gt--)
                                    if (U = a[gt], q = U.axes[n.id].graphs[i], q.fillColors) {
                                        this.fillColorsSwitched = q.fillColors;
                                        break
                                    }
                            if (this.dashLengthField)
                                for (gt = L; - 1 < gt; gt--)
                                    if (U = a[gt], q = U.axes[n.id].graphs[i], !isNaN(q.dashLength)) {
                                        this.dashLengthSwitched = q.dashLength;
                                        break
                                    }
                        }
                        if (k < a.length - 1)
                            for (gt = k + 1; gt < a.length; gt++)
                                if (U = a[gt], q = U.axes[n.id].graphs[i], _ = q.values.value, !isNaN(_)) {
                                    k = gt;
                                    break
                                }
                    }
                    k < a.length - 1 && k++;
                    var vt = [],
                        bt = [],
                        xt = !1;
                    "line" != o && "step" != o && "smoothedLine" != o || (this.stackable && "regular" == D || "100%" == D || this.fillToGraph) && (xt = !0);
                    var yt = this.noStepRisers,
                        Ct = -1e3,
                        Nt = -1e3,
                        wt = this.minDistance,
                        Mt = !0,
                        At = !1;
                    for (gt = L; gt <= k; gt++) {
                        U = a[gt], q = U.axes[n.id].graphs[i], q.index = gt;
                        var St, Tt = NaN;
                        if (f && void 0 == this.openField)
                            for (var Dt = gt + 1; Dt < a.length && (!a[Dt] || !(St = a[gt + 1].axes[n.id].graphs[i]) || !St.values || (Tt = St.values.value, isNaN(Tt))); Dt++);
                        var Lt, kt, Bt, Ot, Rt, It, Et = NaN,
                            Pt = NaN,
                            Ft = NaN,
                            zt = NaN,
                            Gt = NaN,
                            Wt = NaN,
                            Vt = NaN,
                            Ht = NaN,
                            Yt = NaN,
                            Xt = NaN,
                            jt = NaN,
                            Zt = NaN,
                            Ut = NaN,
                            qt = NaN,
                            _t = NaN,
                            Kt = NaN,
                            Jt = NaN,
                            Qt = void 0,
                            $t = at,
                            te = ot,
                            ee = W,
                            ie = this.proCandlesticks,
                            se = this.topRadius,
                            ae = v - 1,
                            re = g - 1,
                            ne = this.pattern;
                        void 0 != q.pattern && (ne = q.pattern), isNaN(q.alpha) || (te = q.alpha), isNaN(q.dashLength) || (V = q.dashLength);
                        var oe = q.values;
                        if (n.recalculateToPercents && (oe = q.percents), "none" == D && (F = isNaN(q.columnIndex) ? this.columnIndex : q.columnIndex), oe) {
                            if (qt = this.stackable && "none" != D && "3d" != D ? oe.close : oe.value, "candlestick" != o && "ohlc" != o || (qt = oe.close, Kt = oe.low, Vt = n.getCoordinate(Kt), _t = oe.high, Yt = n.getCoordinate(_t)), Jt = oe.open, Ft = n.getCoordinate(qt, lt), isNaN(Jt) || (Gt = n.getCoordinate(Jt, lt), f && "regular" != D && "100%" != D && (Tt = Jt, Jt = Gt = NaN)), f && (void 0 == this.openField ? St && (St.isNegative = Tt < qt, isNaN(Tt) && (q.isNegative = !Mt)) : q.isNegative = Tt > qt), !B) switch (this.showBalloonAt) {
                                case "close":
                                    q.y = Ft;
                                    break;
                                case "open":
                                    q.y = Gt;
                                    break;
                                case "high":
                                    q.y = Yt;
                                    break;
                                case "low":
                                    q.y = Vt
                            }
                            var Et = U.x[I.id],
                                he = this.periodSpan - 1;
                            "step" != o || isNaN(U.cellWidth) || (j = U.cellWidth);
                            var le = Math.floor(j / 2) + Math.floor(he * j / 2),
                                de = le,
                                ue = 0;
                            if ("left" == this.stepDirection && (ue = (2 * j + he * j) / 2, Et -= ue), "center" == this.stepDirection && (ue = j / 2, Et -= ue), "start" == this.pointPosition && (Et -= j / 2 + Math.floor(he * j / 2), le = 0, de = Math.floor(j) + Math.floor(he * j)), "end" == this.pointPosition && (Et += j / 2 + Math.floor(he * j / 2), le = Math.floor(j) + Math.floor(he * j), de = 0), yt) {
                                var ce = this.columnWidth;
                                isNaN(ce) || (le *= ce, de *= ce)
                            }
                            B || (q.x = Et), -1e5 > Et && (Et = -1e5), Et > g + 1e5 && (Et = g + 1e5), x ? (Pt = Ft, zt = Gt, Gt = Ft = Et, isNaN(Jt) && !this.fillToGraph && (zt = E), Wt = Vt, Ht = Yt) : (zt = Pt = Et, isNaN(Jt) && !this.fillToGraph && (Gt = E)), (!ie && qt < Jt || ie && qt < R) && (q.isNegative = !0, rt && ($t = rt), ht && (te = ht), void 0 != nt && (ee = nt)), At = !1, isNaN(qt) || (f ? qt > Tt ? (Mt && (At = !0), Mt = !1) : (Mt || (At = !0), Mt = !0) : q.isNegative = qt < P, R = qt);
                            var pe = !1;
                            switch (B && e.chartScrollbar.ignoreCustomColors && (pe = !0), pe || (void 0 != q.color && ($t = q.color), q.fillColors && ($t = q.fillColors)), Ft = t.fitToBounds(Ft, -3e4, 3e4), o) {
                                case "line":
                                    isNaN(qt) ? N || (this.drawLineGraph(w, M, vt, bt), w = [], M = [], vt = [], bt = []) : ((Math.abs(Pt - Ct) >= wt || Math.abs(Ft - Nt) >= wt) && (w.push(Pt), M.push(Ft), Ct = Pt, Nt = Ft), Xt = Pt, jt = Ft, Zt = Pt, Ut = Ft, !xt || isNaN(Gt) || isNaN(zt) || (vt.push(zt), bt.push(Gt)), (At || void 0 != q.lineColor && q.lineColor != this.lineColorSwitched || void 0 != q.fillColors && q.fillColors != this.fillColorsSwitched || !isNaN(q.dashLength)) && (this.drawLineGraph(w, M, vt, bt), w = [Pt], M = [Ft], vt = [], bt = [], !xt || isNaN(Gt) || isNaN(zt) || (vt.push(zt), bt.push(Gt)), f ? (Mt ? (this.lineColorSwitched = W, this.fillColorsSwitched = at) : (this.lineColorSwitched = nt, this.fillColorsSwitched = rt), void 0 === this.bulletColor && (this.bulletColorSwitched = W)) : (this.lineColorSwitched = q.lineColor, this.fillColorsSwitched = q.fillColors, void 0 === this.bulletColor && (this.bulletColorSwitched = this.lineColorSwitched)), this.dashLengthSwitched = q.dashLength), q.gap && (this.drawLineGraph(w, M, vt, bt), w = [], M = [], vt = [], bt = [], Nt = Ct = -1e3));
                                    break;
                                case "smoothedLine":
                                    isNaN(qt) ? N || (this.drawSmoothedGraph(w, M, vt, bt), w = [], M = [], vt = [], bt = []) : ((Math.abs(Pt - Ct) >= wt || Math.abs(Ft - Nt) >= wt) && (w.push(Pt), M.push(Ft), Ct = Pt, Nt = Ft), Xt = Pt, jt = Ft, Zt = Pt, Ut = Ft, !xt || isNaN(Gt) || isNaN(zt) || (vt.push(zt), bt.push(Gt)), (At || void 0 != q.lineColor && q.lineColor != this.lineColorSwitched || void 0 != q.fillColors && q.fillColors != this.fillColorsSwitched || !isNaN(q.dashLength)) && (this.drawSmoothedGraph(w, M, vt, bt), w = [Pt], M = [Ft], vt = [], bt = [], !xt || isNaN(Gt) || isNaN(zt) || (vt.push(zt), bt.push(Gt)), this.lineColorSwitched = q.lineColor, this.fillColorsSwitched = q.fillColors, this.dashLengthSwitched = q.dashLength), q.gap && (this.drawSmoothedGraph(w, M, vt, bt), w = [], M = [], vt = [], bt = []));
                                    break;
                                case "step":
                                    if (isNaN(qt)) N || ((1 >= this.periodSpan || 1 < this.periodSpan && Pt - d > le + de) && (d = u = NaN), this.drawLineGraph(w, M, vt, bt), w = [], M = [], vt = [], bt = []);
                                    else {
                                        if (x ? (isNaN(d) || (w.push(d), M.push(Ft - le)), M.push(Ft - le), w.push(Pt), M.push(Ft + de), w.push(Pt), !xt || isNaN(Gt) || isNaN(zt) || (isNaN(c) || (vt.push(c), bt.push(Gt - le)), vt.push(zt), bt.push(Gt - le), vt.push(zt), bt.push(Gt + de))) : (isNaN(u) || (M.push(u), w.push(Pt - le)), w.push(Pt - le), M.push(Ft), w.push(Pt + de), M.push(Ft), !xt || isNaN(Gt) || isNaN(zt) || (isNaN(p) || (vt.push(zt - le), bt.push(p)), vt.push(zt - le), bt.push(Gt), vt.push(zt + de), bt.push(Gt))), d = Pt, u = Ft, c = zt, p = Gt, Xt = Pt, jt = Ft, Zt = Pt, Ut = Ft, At || void 0 != q.lineColor || void 0 != q.fillColors || !isNaN(q.dashLength)) {
                                            var me = w[w.length - 2],
                                                fe = M[M.length - 2];
                                            w.pop(), M.pop(), vt.pop(), bt.pop(), this.drawLineGraph(w, M, vt, bt), w = [me], M = [fe], vt = [], bt = [], xt && (vt = [me, me + le + de], bt = [p, p]), x ? (M.push(Ft + de), w.push(Pt)) : (w.push(Pt + de), M.push(Ft)), this.lineColorSwitched = q.lineColor, this.fillColorsSwitched = q.fillColors, this.dashLengthSwitched = q.dashLength, f && (Mt ? (this.lineColorSwitched = W, this.fillColorsSwitched = at) : (this.lineColorSwitched = nt, this.fillColorsSwitched = rt))
                                        }(yt || q.gap) && (d = u = NaN, this.drawLineGraph(w, M, vt, bt), w = [], M = [], vt = [], bt = [])
                                    }
                                    break;
                                case "column":
                                    if (Rt = ee, void 0 != q.lineColor && (Rt = q.lineColor), !isNaN(qt)) {
                                        f || (q.isNegative = qt < P), q.isNegative && (rt && ($t = rt), void 0 != nt && (Rt = nt));
                                        var ge = n.min,
                                            ve = n.max,
                                            be = Jt;
                                        if (isNaN(be) && (be = P), !(qt < ge && be < ge || qt > ve && be > ve)) {
                                            var xe;
                                            if (x) {
                                                "3d" == D ? (kt = Ft - (y / 2 - this.depthCount + 1) * (h + X) + X / 2 + T * F, Lt = zt + S * F, xe = F) : (kt = Math.floor(Ft - (y / 2 - F) * (h + X) + X / 2), Lt = zt, xe = 0), Bt = h, Xt = Pt, jt = kt + h / 2, Zt = Pt, Ut = kt + h / 2, kt + Bt > v + xe * T && (Bt = v - kt + xe * T), kt < xe * T && (Bt += kt, kt = xe * T), Ot = Pt - zt;
                                                var ye = Lt;
                                                Lt = t.fitToBounds(Lt, 0, g), Ot += ye - Lt, Ot = t.fitToBounds(Ot, -Lt, g - Lt + S * F), q.labelIsNegative = 0 > Ot, 0 === Ot && 1 / qt == -1 / 0 && (q.labelIsNegative = !0), isNaN(U.percentWidthValue) || (Bt = this.height * U.percentWidthValue / 100, kt = Et - Bt / 2, jt = kt + Bt / 2), Bt = t.roundTo(Bt, 2), Ot = t.roundTo(Ot, 2), kt < v && 0 < Bt && (Qt = new t.Cuboid(r, Ot, Bt, S - e.d3x, T - e.d3y, $t, te, z, Rt, G, Y, C, x, V, ne, se, O), q.columnWidth = Math.abs(Ot), q.columnHeight = Math.abs(Bt))
                                            } else {
                                                "3d" == D ? (Lt = Pt - (y / 2 - this.depthCount + 1) * (h + X) + X / 2 + S * F, kt = Gt + T * F, xe = F) : (Lt = Pt - (y / 2 - F) * (h + X) + X / 2, kt = Gt, xe = 0), Bt = h, Xt = Lt + h / 2, jt = Ft, Zt = Lt + h / 2, Ut = Ft, Lt + Bt > g + xe * S && (Bt = g - Lt + xe * S), Lt < xe * S && (Bt += Lt - xe * S, Lt = xe * S), Ot = Ft - Gt, q.labelIsNegative = 0 < Ot, 0 === Ot && 1 / qt != 1 / Math.abs(qt) && (q.labelIsNegative = !0);
                                                var Ce = kt;
                                                kt = t.fitToBounds(kt, this.dy, v), Ot += Ce - kt, Ot = t.fitToBounds(Ot, T * xe - kt, v - kt), isNaN(U.percentWidthValue) || (Bt = this.width * U.percentWidthValue / 100, Lt = Et - Bt / 2, Xt = Lt + Bt / 2), Bt = t.roundTo(Bt, 2), Ot = t.roundTo(Ot, 2), Lt < g + F * S && 0 < Bt && (this.showOnAxis && (kt -= T / 2), Qt = new t.Cuboid(r, Bt, Ot, S - e.d3x, T - e.d3y, $t, te, z, Rt, this.lineAlpha, Y, C, x, V, ne, se, O), q.columnHeight = Math.abs(Ot), q.columnWidth = Math.abs(Bt))
                                            }
                                        }
                                        Qt && (It = Qt.set, t.setCN(e, Qt.set, "graph-" + this.type), t.setCN(e, Qt.set, "graph-" + this.id), q.className && t.setCN(e, Qt.set, q.className, !0), q.columnGraphics = It, Lt = t.roundTo(Lt, 2), kt = t.roundTo(kt, 2), It.translate(Lt, kt), (q.url || this.showHandOnHover) && It.setAttr("cursor", "pointer"), B || ("none" == D && (m = x ? (this.end + 1 - gt) * A - s : A * gt + s), "3d" == D && (x ? (m = (this.end + 1 - gt) * A - s - 1e3 * this.depthCount, Xt += S * F, Zt += S * F, q.y += S * F) : (m = (A - s) * (gt + 1) + 1e3 * this.depthCount, jt += T * F, Ut += T * F, q.y += T * F)), "regular" != D && "100%" != D || (m = x ? 0 < oe.value ? (this.end + 1 - gt) * A + s : (this.end + 1 - gt) * A - s : 0 < oe.value ? A * gt + s : A * gt - s), this.columnsArray.push({
                                            column: Qt,
                                            depth: m
                                        }), q.x = x ? kt + Bt / 2 : Lt + Bt / 2, this.ownColumns.push(Qt), this.animateColumns(Qt, gt, Pt, zt, Ft, Gt), this.addListeners(It, q), void 0 !== this.tabIndex && It.setAttr("tabindex", this.tabIndex)), this.columnsSet.push(It))
                                    }
                                    break;
                                case "candlestick":
                                    if (!isNaN(Jt) && !isNaN(qt)) {
                                        var Ne, we;
                                        if (Rt = ee, void 0 != q.lineColor && (Rt = q.lineColor), Xt = Pt, Ut = jt = Ft, Zt = Pt, x) {
                                            if ("open" == l && (Zt = zt), "high" == l && (Zt = Ht), "low" == l && (Zt = Wt), Pt = t.fitToBounds(Pt, 0, re), zt = t.fitToBounds(zt, 0, re), Wt = t.fitToBounds(Wt, 0, re), Ht = t.fitToBounds(Ht, 0, re), 0 === Pt && 0 === zt && 0 === Wt && 0 === Ht) continue;
                                            if (Pt == re && zt == re && Wt == re && Ht == re) continue;
                                            if (kt = Ft - h / 2, Lt = zt, Bt = h, kt + Bt > v && (Bt = v - kt), 0 > kt && (Bt += kt, kt = 0), kt < v && 0 < Bt) {
                                                var Me, Ae;
                                                qt > Jt ? (Me = [Pt, Ht], Ae = [zt, Wt]) : (Me = [zt, Ht], Ae = [Pt, Wt]), !isNaN(Ht) && !isNaN(Wt) && Ft < v && 0 < Ft && (Ne = t.line(r, Me, [Ft, Ft], Rt, G, z), we = t.line(r, Ae, [Ft, Ft], Rt, G, z)), Ot = Pt - zt, Qt = new t.Cuboid(r, Ot, Bt, S, T, $t, ot, z, Rt, G, Y, C, x, V, ne, se, O)
                                            }
                                        } else {
                                            if ("open" == l && (Ut = Gt), "high" == l && (Ut = Yt), "low" == l && (Ut = Vt), Ft = t.fitToBounds(Ft, 0, ae), Gt = t.fitToBounds(Gt, 0, ae), Vt = t.fitToBounds(Vt, 0, ae), Yt = t.fitToBounds(Yt, 0, ae), 0 === Ft && 0 === Gt && 0 === Vt && 0 === Yt) continue;
                                            if (Ft == ae && Gt == ae && Vt == ae && Yt == ae) continue;
                                            if (Lt = Pt - h / 2, kt = Gt + z / 2, Bt = h, Lt + Bt > g && (Bt = g - Lt), 0 > Lt && (Bt += Lt, Lt = 0), Ot = Ft - Gt, Lt < g && 0 < Bt) {
                                                ie && qt >= Jt && (te = 0);
                                                var Se, Te, Qt = new t.Cuboid(r, Bt, Ot, S, T, $t, te, z, Rt, G, Y, C, x, V, ne, se, O);
                                                qt > Jt ? (Se = [Ft, Yt], Te = [Gt, Vt]) : (Se = [Gt, Yt], Te = [Ft, Vt]), !isNaN(Yt) && !isNaN(Vt) && Pt < g && 0 < Pt && (Ne = t.line(r, [Pt, Pt], Se, Rt, G, z), we = t.line(r, [Pt, Pt], Te, Rt, G, z), t.setCN(e, Ne, this.bcn + "line-high"), q.className && t.setCN(e, Ne, q.className, !0), t.setCN(e, we, this.bcn + "line-low"), q.className && t.setCN(e, we, q.className, !0))
                                            }
                                        }
                                        Qt && (It = Qt.set, q.columnGraphics = It, H.push(It), It.translate(Lt, kt - z / 2), (q.url || this.showHandOnHover) && It.setAttr("cursor", "pointer"), Ne && (H.push(Ne), H.push(we)), B || (q.x = x ? kt + Bt / 2 : Lt + Bt / 2, this.animateColumns(Qt, gt, Pt, zt, Ft, Gt), this.addListeners(It, q), void 0 !== this.tabIndex && It.setAttr("tabindex", this.tabIndex)))
                                    }
                                    break;
                                case "ohlc":
                                    if (!(isNaN(Jt) || isNaN(_t) || isNaN(Kt) || isNaN(qt))) {
                                        var De = r.set();
                                        H.push(De), qt < Jt && (q.isNegative = !0, void 0 != nt && (ee = nt)), void 0 != q.lineColor && (ee = q.lineColor);
                                        var Le, ke, Be;
                                        if (x) {
                                            if (Ut = Ft, Zt = Pt, "open" == l && (Zt = zt), "high" == l && (Zt = Ht), "low" == l && (Zt = Wt), Wt = t.fitToBounds(Wt, 0, re), Ht = t.fitToBounds(Ht, 0, re), 0 === Pt && 0 === zt && 0 === Wt && 0 === Ht) continue;
                                            if (Pt == re && zt == re && Wt == re && Ht == re) continue;
                                            var Oe = Ft - h / 2,
                                                Oe = t.fitToBounds(Oe, 0, v),
                                                Re = t.fitToBounds(Ft, 0, v),
                                                Ie = Ft + h / 2,
                                                Ie = t.fitToBounds(Ie, 0, v);
                                            0 <= zt && zt <= re && (ke = t.line(r, [zt, zt], [Oe, Re], ee, G, z, V)), 0 < Ft && Ft < v && (Le = t.line(r, [Wt, Ht], [Ft, Ft], ee, G, z, V)), 0 <= Pt && Pt <= re && (Be = t.line(r, [Pt, Pt], [Re, Ie], ee, G, z, V))
                                        } else {
                                            Ut = Ft, "open" == l && (Ut = Gt), "high" == l && (Ut = Yt), "low" == l && (Ut = Vt);
                                            var Zt = Pt,
                                                Vt = t.fitToBounds(Vt, 0, ae),
                                                Yt = t.fitToBounds(Yt, 0, ae),
                                                Ee = Pt - h / 2,
                                                Ee = t.fitToBounds(Ee, 0, g),
                                                Pe = t.fitToBounds(Pt, 0, g),
                                                Fe = Pt + h / 2,
                                                Fe = t.fitToBounds(Fe, 0, g);
                                            0 <= Gt && Gt <= ae && (ke = t.line(r, [Ee, Pe], [Gt, Gt], ee, G, z, V)), 0 < Pt && Pt < g && (Le = t.line(r, [Pt, Pt], [Vt, Yt], ee, G, z, V)), 0 <= Ft && Ft <= ae && (Be = t.line(r, [Pe, Fe], [Ft, Ft], ee, G, z, V))
                                        }
                                        H.push(ke), H.push(Le), H.push(Be), t.setCN(e, ke, this.bcn + "stroke-open"), t.setCN(e, Be, this.bcn + "stroke-close"), t.setCN(e, Le, this.bcn + "stroke"), q.className && t.setCN(e, De, q.className, !0), Le && this.addListeners(Le, q), Be && this.addListeners(Be, q), ke && this.addListeners(ke, q), Xt = Pt, jt = Ft
                                    }
                            }
                            if (!B && !isNaN(qt)) {
                                var ze = this.hideBulletsCount;
                                if (this.end - this.start <= ze || 0 === ze) {
                                    var Ge = this.createBullet(q, Zt, Ut, gt),
                                        We = this.labelText;
                                    if (We && !isNaN(Xt) && !isNaN(Xt)) {
                                        var Ve = this.createLabel(q, We),
                                            He = 0;
                                        Ge && (He = Ge.size), this.positionLabel(q, Xt, jt, Ve, He)
                                    }
                                    if ("regular" == D || "100%" == D) {
                                        var Ye = n.totalText;
                                        if (Ye) {
                                            var Xe = this.createLabel(q, Ye, n.totalTextColor);
                                            if (t.setCN(e, Xe, this.bcn + "label-total"), this.allBullets.push(Xe), Xe) {
                                                var je, Ze, Ue = Xe.getBBox(),
                                                    qe = Ue.width,
                                                    _e = Ue.height,
                                                    Ke = n.totalTextOffset,
                                                    Je = n.totals[gt];
                                                Je && Je.remove();
                                                var Qe = 0;
                                                "column" != o && (Qe = this.bulletSize), x ? (Ze = jt, je = 0 > qt ? Pt - qe / 2 - 2 - Qe - Ke : Pt + qe / 2 + 3 + Qe + Ke) : (je = Xt, Ze = 0 > qt ? Ft + _e / 2 + Qe + Ke : Ft - _e / 2 - 3 - Qe - Ke), Xe.translate(je, Ze), n.totals[gt] = Xe, x ? (0 > Ze || Ze > v) && Xe.remove() : (0 > je || je > g) && Xe.remove()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this.lastDataItem = q, "line" != o && "step" != o && "smoothedLine" != o || ("smoothedLine" == o ? this.drawSmoothedGraph(w, M, vt, bt) : this.drawLineGraph(w, M, vt, bt), B || this.launchAnimation()), this.bulletsHidden && this.hideBullets(), this.customBulletsHidden && this.hideCustomBullets()
                },
                animateColumns: function (t, e) {
                    var i = this,
                        s = i.chart.startDuration;
                    0 < s && !i.animationPlayed && (i.seqAn ? (t.set.hide(), i.animationArray.push(t), s = setTimeout(function () {
                        i.animate.call(i)
                    }, s / (i.end - i.start + 1) * (e - i.start) * 1e3), i.timeOuts.push(s)) : i.animate(t), i.chart.animatable.push(t))
                },
                createLabel: function (e, i, s) {
                    var a = this.chart,
                        r = e.labelColor;
                    r || (r = this.color), r || (r = a.color), s && (r = s), void 0 === (s = this.fontSize) && (this.fontSize = s = a.fontSize);
                    var n = this.labelFunction;
                    if (i = a.formatString(i, e), i = t.cleanFromEmpty(i), n && (i = n(e, i)), void 0 !== i && "" !== i) return e = t.text(this.container, i, r, a.fontFamily, s), e.node.style.pointerEvents = "none", t.setCN(a, e, this.bcn + "label"), this.bulletSet.push(e), e
                },
                positiveClip: function (t) {
                    t.clipRect(this.pmx, this.pmy, this.pmw, this.pmh)
                },
                negativeClip: function (t) {
                    t.clipRect(this.nmx, this.nmy, this.nmw, this.nmh)
                },
                drawLineGraph: function (e, i, s, a) {
                    var r = this;
                    if (1 < e.length) {
                        var n = r.noRounding,
                            o = r.set,
                            h = r.chart,
                            l = r.container,
                            d = l.set(),
                            u = l.set();
                        o.push(u), o.push(d);
                        var c = r.lineAlpha,
                            p = r.lineThickness,
                            o = r.fillAlphas,
                            m = r.lineColorR,
                            f = r.negativeLineAlpha;
                        isNaN(f) && (f = c);
                        var g = r.lineColorSwitched;
                        g && (m = g);
                        var g = r.fillColorsR,
                            v = r.fillColorsSwitched;
                        v && (g = v);
                        var b = r.dashLength;
                        (v = r.dashLengthSwitched) && (b = v);
                        var v = r.negativeLineColor,
                            x = r.negativeFillColors,
                            y = r.negativeFillAlphas,
                            C = r.baseCoord;
                        0 !== r.negativeBase && (C = r.valueAxis.getCoordinate(r.negativeBase, n), C > r.height && (C = r.height), 0 > C && (C = 0)), c = t.line(l, e, i, m, c, p, b, !1, !1, n), c.node.setAttribute("stroke-linejoin", "round"), t.setCN(h, c, r.bcn + "stroke"), d.push(c), d.click(function (t) {
                            r.handleGraphEvent(t, "clickGraph")
                        }).mouseover(function (t) {
                            r.handleGraphEvent(t, "rollOverGraph")
                        }).mouseout(function (t) {
                            r.handleGraphEvent(t, "rollOutGraph")
                        }).touchmove(function (t) {
                            r.chart.handleMouseMove(t)
                        }).touchend(function (t) {
                            r.chart.handleTouchEnd(t)
                        }), void 0 === v || r.useNegativeColorIfDown || (p = t.line(l, e, i, v, f, p, b, !1, !1, n), p.node.setAttribute("stroke-linejoin", "round"), t.setCN(h, p, r.bcn + "stroke"), t.setCN(h, p, r.bcn + "stroke-negative"), u.push(p)), (0 < o || 0 < y) && (p = e.join(";").split(";"), f = i.join(";").split(";"), c = h.type, "serial" == c || "radar" == c ? 0 < s.length ? (s.reverse(), a.reverse(), p = e.concat(s), f = i.concat(a)) : "radar" == c ? (f.push(0), p.push(0)) : r.rotate ? (f.push(f[f.length - 1]), p.push(C), f.push(f[0]), p.push(C), f.push(f[0]), p.push(p[0])) : (p.push(p[p.length - 1]), f.push(C), p.push(p[0]), f.push(C), p.push(e[0]), f.push(f[0])) : "xy" == c && (i = r.fillToAxis) && (t.isString(i) && (i = h.getValueAxisById(i)), "H" == i.orientation ? (C = "top" == i.position ? 0 : i.height, p.push(p[p.length - 1]), f.push(C), p.push(p[0]), f.push(C), p.push(e[0]), f.push(f[0])) : (C = "left" == i.position ? 0 : i.width, f.push(f[f.length - 1]), p.push(C), f.push(f[0]), p.push(C), f.push(f[0]), p.push(p[0]))), e = r.gradientRotation, 0 < o && (i = t.polygon(l, p, f, g, o, 1, "#000", 0, e, n), i.pattern(r.pattern, NaN, h.path), t.setCN(h, i, r.bcn + "fill"), d.push(i)), (x || void 0 !== v) && (isNaN(y) && (y = o), x || (x = v), n = t.polygon(l, p, f, x, y, 1, "#000", 0, e, n), t.setCN(h, n, r.bcn + "fill"), t.setCN(h, n, r.bcn + "fill-negative"), n.pattern(r.pattern, NaN, h.path), u.push(n), u.click(function (t) {
                            r.handleGraphEvent(t, "clickGraph")
                        }).mouseover(function (t) {
                            r.handleGraphEvent(t, "rollOverGraph")
                        }).mouseout(function (t) {
                            r.handleGraphEvent(t, "rollOutGraph")
                        }).touchmove(function (t) {
                            r.chart.handleMouseMove(t)
                        }).touchend(function (t) {
                            r.chart.handleTouchEnd(t)
                        }))), r.applyMask(u, d)
                    }
                },
                applyMask: function (t, e) {
                    var i = t.length();
                    "serial" != this.chart.type || this.scrollbar || (this.positiveClip(e), 0 < i && this.negativeClip(t))
                },
                drawSmoothedGraph: function (e, i, s, a) {
                    if (1 < e.length) {
                        var r = this.set,
                            n = this.chart,
                            o = this.container,
                            h = o.set(),
                            l = o.set();
                        r.push(l), r.push(h);
                        var d = this.lineAlpha,
                            u = this.lineThickness,
                            r = this.dashLength,
                            c = this.fillAlphas,
                            p = this.lineColorR,
                            m = this.fillColorsR,
                            f = this.negativeLineColor,
                            g = this.negativeFillColors,
                            v = this.negativeFillAlphas,
                            b = this.baseCoord,
                            x = this.lineColorSwitched;
                        x && (p = x), (x = this.fillColorsSwitched) && (m = x);
                        var y = this.negativeLineAlpha;
                        isNaN(y) && (y = d), x = this.getGradRotation(), d = new t.Bezier(o, e, i, p, d, u, m, 0, r, void 0, x), t.setCN(n, d, this.bcn + "stroke"), h.push(d.path), void 0 !== f && (u = new t.Bezier(o, e, i, f, y, u, m, 0, r, void 0, x), t.setCN(n, u, this.bcn + "stroke"), t.setCN(n, u, this.bcn + "stroke-negative"), l.push(u.path)), 0 < c && (u = e.join(";").split(";"), d = i.join(";").split(";"), p = "", 0 < s.length ? (s.push("M"), a.push("M"), s.reverse(), a.reverse(), u = e.concat(s), d = i.concat(a)) : (this.rotate ? (p += " L" + b + "," + i[i.length - 1], p += " L" + b + "," + i[0]) : (p += " L" + e[e.length - 1] + "," + b, p += " L" + e[0] + "," + b), p += " L" + e[0] + "," + i[0]), e = new t.Bezier(o, u, d, NaN, 0, 0, m, c, r, p, x), t.setCN(n, e, this.bcn + "fill"), e.path.pattern(this.pattern, NaN, n.path), h.push(e.path), g || void 0 !== f) && (v || (v = c), g || (g = f), o = new t.Bezier(o, u, d, NaN, 0, 0, g, v, r, p, x), o.path.pattern(this.pattern, NaN, n.path), t.setCN(n, o, this.bcn + "fill"), t.setCN(n, o, this.bcn + "fill-negative"), l.push(o.path)), this.applyMask(l, h)
                    }
                },
                launchAnimation: function () {
                    var e = this,
                        i = e.chart.startDuration;
                    if (0 < i && !e.animationPlayed) {
                        var s = e.set,
                            a = e.bulletSet;
                        t.VML || (s.attr({
                            opacity: e.startAlpha
                        }), a.attr({
                            opacity: e.startAlpha
                        })), s.hide(), a.hide(), e.seqAn ? (i = setTimeout(function () {
                            e.animateGraphs.call(e)
                        }, e.index * i * 1e3), e.timeOuts.push(i)) : e.animateGraphs()
                    }
                },
                animateGraphs: function () {
                    var t = this.chart,
                        e = this.set,
                        i = this.bulletSet,
                        s = this.x,
                        a = this.y;
                    e.show(), i.show();
                    var r = t.startDuration,
                        n = t.startEffect;
                    e && (this.rotate ? (e.translate(-1e3, a), i.translate(-1e3, a)) : (e.translate(s, -1e3), i.translate(s, -1e3)), e.animate({
                        opacity: 1,
                        translate: s + "," + a
                    }, r, n), i.animate({
                        opacity: 1,
                        translate: s + "," + a
                    }, r, n), t.animatable.push(e))
                },
                animate: function (e) {
                    var i = this.chart,
                        s = this.animationArray;
                    !e && 0 < s.length && (e = s[0], s.shift()), s = t[t.getEffect(i.startEffect)], i = i.startDuration, e && (this.rotate ? e.animateWidth(i, s) : e.animateHeight(i, s), e.set.show())
                },
                legendKeyColor: function () {
                    var t = this.legendColor,
                        e = this.lineAlpha;
                    return void 0 === t && (t = this.lineColorR, 0 === e && (e = this.fillColorsR) && (t = "object" == typeof e ? e[0] : e)), t
                },
                legendKeyAlpha: function () {
                    var t = this.legendAlpha;
                    return void 0 === t && (t = this.lineAlpha, this.fillAlphas > t && (t = this.fillAlphas), 0 === t && (t = this.bulletAlpha), 0 === t && (t = 1)), t
                },
                createBullet: function (e, i, s) {
                    if (!isNaN(i) && !isNaN(s) && ("none" != this.bullet || this.customBullet || e.bullet || e.customBullet)) {
                        var a = this.chart,
                            r = this.container,
                            n = this.bulletOffset,
                            o = this.bulletSize;
                        isNaN(e.bulletSize) || (o = e.bulletSize);
                        var h = e.values.value,
                            l = this.maxValue,
                            d = this.minValue,
                            u = this.maxBulletSize,
                            c = this.minBulletSize;
                        isNaN(l) || (isNaN(h) || (o = (h - d) / (l - d) * (u - c) + c), d == l && (o = u)), l = o, this.bulletAxis && (o = e.values.error, isNaN(o) || (h = o), o = this.bulletAxis.stepWidth * h), o < this.minBulletSize && (o = this.minBulletSize), this.rotate ? i = e.isNegative ? i - n : i + n : s = e.isNegative ? s + n : s - n, c = this.bulletColorR, e.lineColor && void 0 === this.bulletColor && (this.bulletColorSwitched = e.lineColor), this.bulletColorSwitched && (c = this.bulletColorSwitched), e.isNegative && void 0 !== this.bulletColorNegative && (c = this.bulletColorNegative), void 0 !== e.color && (c = e.color);
                        var p;
                        "xy" == a.type && this.valueField && (p = this.pattern, e.pattern && (p = e.pattern)), n = this.bullet, e.bullet && (n = e.bullet);
                        var h = this.bulletBorderThickness,
                            d = this.bulletBorderColorR,
                            u = this.bulletBorderAlpha,
                            m = this.bulletAlpha;
                        d || (d = c), this.useLineColorForBulletBorder && (d = this.lineColorR, e.isNegative && this.negativeLineColor && (d = this.negativeLineColor), this.lineColorSwitched && (d = this.lineColorSwitched));
                        var f = e.alpha;
                        return isNaN(f) || (m = f), p = t.bullet(r, n, o, c, m, h, d, u, l, 0, p, a.path), l = this.customBullet, e.customBullet && (l = e.customBullet), l && (p && p.remove(), "function" == typeof l ? (l = new l, l.chart = a, e.bulletConfig && (l.availableSpace = s, l.graph = this, l.graphDataItem = e, l.bulletY = s, e.bulletConfig.minCoord = this.minCoord - s, l.bulletConfig = e.bulletConfig), l.write(r), p && l.showBullet && l.set.push(p), e.customBulletGraphics = l.cset, p = l.set) : (p = r.set(), l = r.image(l, 0, 0, o, o), p.push(l), this.centerCustomBullets && l.translate(-o / 2, -o / 2))), p && ((e.url || this.showHandOnHover) && p.setAttr("cursor", "pointer"), "serial" != a.type && "gantt" != a.type || (-.5 > i || i > this.width || s < -o / 2 || s > this.height) && (p.remove(), p = null), p && (this.bulletSet.push(p), p.translate(i, s), this.addListeners(p, e), this.allBullets.push(p)), e.bx = i, e.by = s, t.setCN(a, p, this.bcn + "bullet"), e.className && t.setCN(a, p, e.className, !0)), p ? (p.size = o || 0, (a = this.bulletHitAreaSize) && (r = t.circle(r, a, "#FFFFFF", .001, 0), r.translate(i, s), e.hitBullet = r, this.bulletSet.push(r), this.addListeners(r, e)), e.bulletGraphics = p, void 0 !== this.tabIndex && p.setAttr("tabindex", this.tabIndex)) : p = {
                            size: 0
                        }, p.graphDataItem = e, p
                    }
                },
                showBullets: function () {
                    var t, e = this.allBullets;
                    for (this.bulletsHidden = !1, t = 0; t < e.length; t++) e[t].show()
                },
                hideBullets: function () {
                    var t, e = this.allBullets;
                    for (this.bulletsHidden = !0, t = 0; t < e.length; t++) e[t].hide()
                },
                showCustomBullets: function () {
                    var t, e = this.allBullets;
                    for (this.customBulletsHidden = !1, t = 0; t < e.length; t++) {
                        var i = e[t].graphDataItem;
                        i && i.customBulletGraphics && i.customBulletGraphics.show()
                    }
                },
                hideCustomBullets: function () {
                    var t, e = this.allBullets;
                    for (this.customBulletsHidden = !0, t = 0; t < e.length; t++) {
                        var i = e[t].graphDataItem;
                        i && i.customBulletGraphics && i.customBulletGraphics.hide()
                    }
                },
                addListeners: function (t, e) {
                    var i = this;
                    t.mouseover(function (t) {
                        i.handleRollOver(e, t)
                    }).mouseout(function (t) {
                        i.handleRollOut(e, t)
                    }).touchend(function (t) {
                        i.handleRollOver(e, t), i.chart.panEventsEnabled && i.handleClick(e, t)
                    }).touchstart(function (t) {
                        i.handleRollOver(e, t)
                    }).click(function (t) {
                        i.handleClick(e, t)
                    }).dblclick(function (t) {
                        i.handleDoubleClick(e, t)
                    }).contextmenu(function (t) {
                        i.handleRightClick(e, t)
                    });
                    var s = i.chart;
                    if (s.accessible && i.accessibleLabel) {
                        var a = s.formatString(i.accessibleLabel, e);
                        s.makeAccessible(t, a)
                    }
                },
                handleRollOver: function (t, e) {
                    if (this.handleGraphEvent(e, "rollOverGraph"), t) {
                        var i = this.chart;
                        t.bulletConfig && (i.isRolledOverBullet = !0);
                        var s = {
                            type: "rollOverGraphItem",
                            item: t,
                            index: t.index,
                            graph: this,
                            target: this,
                            chart: this.chart,
                            event: e
                        };
                        this.fire(s), i.fire(s), clearTimeout(i.hoverInt), (i = i.chartCursor) && i.valueBalloonsEnabled || this.showGraphBalloon(t, "V", !0)
                    }
                },
                handleRollOut: function (t, e) {
                    var i = this.chart;
                    if (t) {
                        var s = {
                            type: "rollOutGraphItem",
                            item: t,
                            index: t.index,
                            graph: this,
                            target: this,
                            chart: this.chart,
                            event: e
                        };
                        this.fire(s), i.fire(s), i.isRolledOverBullet = !1
                    }
                    this.handleGraphEvent(e, "rollOutGraph"), (i = i.chartCursor) && i.valueBalloonsEnabled || this.hideBalloon()
                },
                handleClick: function (e, i) {
                    if (!this.chart.checkTouchMoved() && this.chart.checkTouchDuration(i)) {
                        if (e) {
                            var s = {
                                type: "clickGraphItem",
                                item: e,
                                index: e.index,
                                graph: this,
                                target: this,
                                chart: this.chart,
                                event: i
                            };
                            this.fire(s), this.chart.fire(s), t.getURL(e.url, this.urlTarget)
                        }
                        this.handleGraphEvent(i, "clickGraph")
                    }
                },
                handleGraphEvent: function (t, e) {
                    var i = {
                        type: e,
                        graph: this,
                        target: this,
                        chart: this.chart,
                        event: t
                    };
                    this.fire(i), this.chart.fire(i)
                },
                handleRightClick: function (t, e) {
                    if (t) {
                        var i = {
                            type: "rightClickGraphItem",
                            item: t,
                            index: t.index,
                            graph: this,
                            target: this,
                            chart: this.chart,
                            event: e
                        };
                        this.fire(i), this.chart.fire(i)
                    }
                },
                handleDoubleClick: function (t, e) {
                    if (t) {
                        var i = {
                            type: "doubleClickGraphItem",
                            item: t,
                            index: t.index,
                            graph: this,
                            target: this,
                            chart: this.chart,
                            event: e
                        };
                        this.fire(i), this.chart.fire(i)
                    }
                },
                zoom: function (t, e) {
                    this.start = t, this.end = e, this.draw()
                },
                changeOpacity: function (t) {
                    var e = this.set;
                    if (e && e.setAttr("opacity", t), e = this.ownColumns) {
                        var i;
                        for (i = 0; i < e.length; i++) {
                            var s = e[i].set;
                            s && s.setAttr("opacity", t)
                        }
                    }(e = this.bulletSet) && e.setAttr("opacity", t)
                },
                destroy: function () {
                    t.remove(this.set), t.remove(this.bulletSet);
                    var e = this.timeOuts;
                    if (e) {
                        var i;
                        for (i = 0; i < e.length; i++) clearTimeout(e[i])
                    }
                    this.timeOuts = []
                },
                createBalloon: function () {
                    var e = this.chart;
                    this.balloon ? this.balloon.destroy && this.balloon.destroy() : this.balloon = {};
                    var i = this.balloon;
                    t.extend(i, e.balloon, !0), i.chart = e, i.mainSet = e.plotBalloonsSet, i.className = this.id
                },
                hideBalloon: function () {
                    var t = this,
                        e = t.chart;
                    e.chartCursor ? e.chartCursor.valueBalloonsEnabled || e.hideBalloon() : e.hideBalloon(), clearTimeout(t.hoverInt), t.hoverInt = setTimeout(function () {
                        t.hideBalloonReal.call(t)
                    }, e.hideBalloonTime)
                },
                hideBalloonReal: function () {
                    this.balloon && this.balloon.hide(), this.fixBulletSize()
                },
                fixBulletSize: function () {
                    if (t.isModern) {
                        var e = this.resizedDItem;
                        if (e) {
                            var i = e.bulletGraphics;
                            if (i && !i.doNotScale) {
                                i.translate(e.bx, e.by, 1);
                                var s = this.bulletAlpha;
                                isNaN(e.alpha) || (s = e.alpha), i.setAttr("fill-opacity", s), i.setAttr("stroke-opacity", this.bulletBorderAlpha)
                            }
                        }
                        this.resizedDItem = null
                    }
                },
                showGraphBalloon: function (e, i, s, a, r) {
                    if (e) {
                        var n = this.chart,
                            o = this.balloon,
                            h = 0,
                            l = 0,
                            d = n.chartCursor,
                            u = !0;
                        if (d ? d.valueBalloonsEnabled || (o = n.balloon, h = this.x, l = this.y, u = !1) : (o = n.balloon, h = this.x, l = this.y, u = !1), clearTimeout(this.hoverInt), n.chartCursor && (this.currentDataItem = e, "serial" == n.type && n.isRolledOverBullet && n.chartCursor.valueBalloonsEnabled)) return void this.hideBalloonReal();
                        if (this.resizeBullet(e, a, r), o && o.enabled && this.showBalloon && !this.hidden) {
                            var d = n.formatString(this.balloonText, e, !0),
                                c = this.balloonFunction;
                            c && (d = c(e, e.graph)), d && (d = t.cleanFromEmpty(d)), d && "" !== d ? (a = n.getBalloonColor(this, e), o.drop || (o.pointerOrientation = i), i = e.x, r = e.y, n.rotate && (i = e.y, r = e.x), i += h, r += l, isNaN(i) || isNaN(r) ? this.hideBalloonReal() : (e = this.width, c = this.height, u && o.setBounds(h, l, e + h, c + l), o.changeColor(a), o.setPosition(i, r), o.fixPrevious(), o.fixedPosition && (s = !1), !s && "radar" != n.type && (i < h - .5 || i > e + h || r < l - .5 || r > c + l) ? (o.showBalloon(d), o.hide(0)) : (o.followCursor(s), o.showBalloon(d)))) : (this.hideBalloonReal(), o.hide(), this.resizeBullet(e, a, r))
                        } else this.hideBalloonReal()
                    }
                },
                resizeBullet: function (e, i, s) {
                    if (this.fixBulletSize(), e && t.isModern && (1 != i || !isNaN(s))) {
                        var a = e.bulletGraphics;
                        a && !a.doNotScale && (a.translate(e.bx, e.by, i), isNaN(s) || (a.setAttr("fill-opacity", s), a.setAttr("stroke-opacity", s)), this.resizedDItem = e)
                    }
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.ChartCursor = t.Class({
                construct: function (e) {
                    this.cname = "ChartCursor", this.createEvents("changed", "zoomed", "onHideCursor", "onShowCursor", "draw", "selected", "moved", "panning", "zoomStarted"), this.enabled = !0, this.cursorAlpha = 1, this.selectionAlpha = .2, this.cursorColor = "#CC0000", this.categoryBalloonAlpha = 1, this.color = "#FFFFFF", this.type = "cursor", this.zoomed = !1, this.zoomable = !0, this.pan = !1, this.categoryBalloonDateFormat = "MMM DD, YYYY", this.categoryBalloonText = "[[category]]", this.categoryBalloonEnabled = this.valueBalloonsEnabled = !0, this.rolledOver = !1, this.cursorPosition = "middle", this.bulletsEnabled = this.skipZoomDispatch = !1, this.bulletSize = 8, this.selectWithoutZooming = this.oneBalloonOnly = !1, this.graphBulletSize = 1.7, this.animationDuration = .3, this.zooming = !1, this.adjustment = 0, this.avoidBalloonOverlapping = !0, this.leaveCursor = !1, this.leaveAfterTouch = !0, this.valueZoomable = !1, this.balloonPointerOrientation = "horizontal", this.hLineEnabled = this.vLineEnabled = !0, this.vZoomEnabled = this.hZoomEnabled = !1, t.applyTheme(this, e, this.cname)
                },
                draw: function () {
                    this.destroy();
                    var e = this.chart;
                    e.panRequired = !0;
                    var i = e.container;
                    this.rotate = e.rotate, this.container = i, this.prevLineHeight = this.prevLineWidth = NaN, i = i.set(), i.translate(this.x, this.y), this.set = i, e.cursorSet.push(i), this.createElements(), t.isString(this.limitToGraph) && (this.limitToGraph = t.getObjById(e.graphs, this.limitToGraph), this.fullWidth = !1, this.cursorPosition = "middle"), this.pointer = this.balloonPointerOrientation.substr(0, 1).toUpperCase(), this.isHidden = !1, this.hideLines(), this.valueLineAxis || (this.valueLineAxis = e.valueAxes[0])
                },
                createElements: function () {
                    var e, i, s = this,
                        a = s.chart,
                        r = a.dx,
                        n = a.dy,
                        o = s.width,
                        h = s.height,
                        l = s.cursorAlpha,
                        d = s.valueLineAlpha;
                    s.rotate ? (e = d, i = l) : (i = d, e = l), "xy" == a.type && (i = l, void 0 !== d && (i = d), e = l), s.vvLine = t.line(s.container, [r, 0, 0], [n, 0, h], s.cursorColor, e, 1), t.setCN(a, s.vvLine, "cursor-line"), t.setCN(a, s.vvLine, "cursor-line-vertical"), s.hhLine = t.line(s.container, [0, o, o + r], [0, 0, n], s.cursorColor, i, 1), t.setCN(a, s.hhLine, "cursor-line"), t.setCN(a, s.hhLine, "cursor-line-horizontal"), s.vLine = s.rotate ? s.vvLine : s.hhLine, s.set.push(s.vvLine), s.set.push(s.hhLine), s.set.node.style.pointerEvents = "none", s.fullLines = s.container.set(), a = a.cursorLineSet, a.push(s.fullLines), a.translate(s.x, s.y), a.clipRect(-1, -1, o + 2, h + 2), void 0 !== s.tabIndex && (a.setAttr("tabindex", s.tabIndex), a.keyup(function (t) {
                        s.handleKeys(t)
                    }).focus(function (t) {
                        s.showCursor()
                    }).blur(function (t) {
                        s.hideCursor()
                    })), s.set.clipRect(0, 0, o, h)
                },
                handleKeys: function (e) {
                    var i = this.prevIndex,
                        s = this.chart;
                    if (s) {
                        var a = s.chartData;
                        a && (isNaN(i) && (i = a.length - 1), 37 != e.keyCode && 40 != e.keyCode || i--, 39 != e.keyCode && 38 != e.keyCode || i++, i = t.fitToBounds(i, s.startIndex, s.endIndex), (e = this.chart.chartData[i]) && this.setPosition(e.x.categoryAxis), this.prevIndex = i)
                    }
                },
                update: function () {
                    var t = this.chart;
                    if (t) {
                        var e = t.mouseX - this.x,
                            i = t.mouseY - this.y;
                        this.mouseX = e, this.mouseY = i, this.mouse2X = t.mouse2X - this.x, this.mouse2Y = t.mouse2Y - this.y;
                        var s;
                        if (t.chartData && 0 < t.chartData.length) {
                            if (this.mouseIsOver() ? (this.hideGraphBalloons = !1, this.rolledOver = s = !0, this.updateDrawing(), this.vvLine && isNaN(this.fx) && (t.rotate || !this.limitToGraph) && this.vvLine.translate(e, 0), !this.hhLine || !isNaN(this.fy) || t.rotate && this.limitToGraph || this.hhLine.translate(0, i), isNaN(this.mouse2X) ? this.dispatchMovedEvent(e, i) : s = !1) : this.forceShow || this.hideCursor(), this.zooming) {
                                if (!isNaN(this.mouse2X)) return void(isNaN(this.mouse2X0) || this.dispatchPanEvent());
                                if (this.pan) return void this.dispatchPanEvent();
                                (this.hZoomEnabled || this.vZoomEnabled) && this.zooming && this.updateSelection()
                            }
                            s && this.showCursor()
                        }
                    }
                },
                updateDrawing: function () {
                    if (this.drawing && this.chart.setMouseCursor("crosshair"), this.drawingNow && (t.remove(this.drawingLine), 1 < Math.abs(this.drawStartX - this.mouseX) || 1 < Math.abs(this.drawStartY - this.mouseY))) {
                        var e = this.chart,
                            i = e.marginTop,
                            e = e.marginLeft;
                        this.drawingLine = t.line(this.container, [this.drawStartX + e, this.mouseX + e], [this.drawStartY + i, this.mouseY + i], this.cursorColor, 1, 1)
                    }
                },
                fixWidth: function (e) {
                    if (this.fullWidth && this.prevLineWidth != e) {
                        var i = this.vvLine,
                            s = 0;
                        i && (i.remove(), s = i.x), i = this.container.set(), i.translate(s, 0), s = t.rect(this.container, e, this.height, this.cursorColor, this.cursorAlpha, this.cursorAlpha, this.cursorColor), t.setCN(this.chart, s, "cursor-fill"), s.translate(-e / 2 - 1, 0), i.push(s), this.vvLine = i, this.fullLines.push(i), this.prevLineWidth = e
                    }
                },
                fixHeight: function (e) {
                    if (this.fullWidth && this.prevLineHeight != e) {
                        var i = this.hhLine,
                            s = 0;
                        i && (i.remove(), s = i.y), i = this.container.set(), i.translate(0, s), s = t.rect(this.container, this.width, e, this.cursorColor, this.cursorAlpha), s.translate(0, -e / 2), i.push(s), this.fullLines.push(i), this.hhLine = i, this.prevLineHeight = e
                    }
                },
                fixVLine: function (t, e) {
                    if (!isNaN(t)) {
                        if (isNaN(this.prevLineX)) {
                            var i = 0,
                                s = this.mouseX;
                            if (this.limitToGraph) {
                                var a = this.chart.categoryAxis;
                                a && (this.chart.rotate || (i = "bottom" == a.position ? this.height : -this.height), s = t)
                            }
                            this.vvLine.translate(s, i)
                        } else this.prevLineX != t && this.vvLine.translate(this.prevLineX, this.prevLineY);
                        this.fx = t, this.prevLineX != t && (i = this.animationDuration, this.zooming && (i = 0), this.vvLine.stop(), this.vvLine.animate({
                            translate: t + "," + e
                        }, i, "easeOutSine"), this.prevLineX = t, this.prevLineY = e)
                    }
                },
                fixHLine: function (t, e) {
                    if (!isNaN(t)) {
                        if (isNaN(this.prevLineY)) {
                            var i = 0,
                                s = this.mouseY;
                            if (this.limitToGraph) {
                                var a = this.chart.categoryAxis;
                                a && (this.chart.rotate && (i = "right" == a.position ? this.width : -this.width), s = t)
                            }
                            this.hhLine.translate(i, s)
                        } else this.prevLineY != t && this.hhLine.translate(this.prevLineX, this.prevLineY);
                        this.fy = t, this.prevLineY != t && (i = this.animationDuration, this.zooming && (i = 0), this.hhLine.stop(), this.hhLine.animate({
                            translate: e + "," + t
                        }, i, "easeOutSine"), this.prevLineY = t, this.prevLineX = e)
                    }
                },
                hideCursor: function (t) {
                    this.forceShow = !1, this.chart.wasTouched && this.leaveAfterTouch || this.isHidden || this.leaveCursor || (this.hideCursorReal(), t ? this.chart.handleCursorHide() : this.fire({
                        target: this,
                        chart: this.chart,
                        type: "onHideCursor"
                    }), this.chart.setMouseCursor("auto"))
                },
                hideCursorReal: function () {
                    this.hideLines(), this.isHidden = !0, this.index = this.prevLineY = this.prevLineX = this.mouseY0 = this.mouseX0 = this.fy = this.fx = NaN
                },
                hideLines: function () {
                    this.vvLine && this.vvLine.hide(), this.hhLine && this.hhLine.hide(), this.fullLines && this.fullLines.hide(), this.isHidden = !0, this.chart.handleCursorHide()
                },
                showCursor: function (t) {
                    !this.drawing && this.enabled && (this.vLineEnabled && this.vvLine && this.vvLine.show(), this.hLineEnabled && this.hhLine && this.hhLine.show(), this.isHidden = !1, this.updateFullLine(), t || this.fire({
                        target: this,
                        chart: this.chart,
                        type: "onShowCursor"
                    }), this.pan && this.chart.setMouseCursor("move"))
                },
                updateFullLine: function () {
                    this.zooming && this.fullWidth && this.selection && (this.rotate ? 0 < this.selection.height && this.hhLine.hide() : 0 < this.selection.width && this.vvLine.hide())
                },
                updateSelection: function () {
                    if (!this.pan && this.enabled) {
                        var e = this.mouseX,
                            i = this.mouseY;
                        isNaN(this.fx) || (e = this.fx), isNaN(this.fy) || (i = this.fy), this.clearSelection();
                        var s, a = this.mouseX0,
                            r = this.mouseY0,
                            n = this.width,
                            o = this.height,
                            e = t.fitToBounds(e, 0, n),
                            i = t.fitToBounds(i, 0, o);
                        e < a && (s = e, e = a, a = s), i < r && (s = i, i = r, r = s), this.hZoomEnabled ? n = e - a : a = 0, this.vZoomEnabled ? o = i - r : r = 0, isNaN(this.mouse2X) && 0 < Math.abs(n) && 0 < Math.abs(o) && (e = this.chart, i = t.rect(this.container, n, o, this.cursorColor, this.selectionAlpha), t.setCN(e, i, "cursor-selection"), i.width = n, i.height = o, i.translate(a, r), this.set.push(i), this.selection = i), this.updateFullLine()
                    }
                },
                mouseIsOver: function () {
                    var t = this.mouseX,
                        e = this.mouseY;
                    return this.justReleased ? (this.justReleased = !1, !0) : !!this.mouseIsDown || (this.chart.mouseIsOver ? 0 < t && t < this.width && 0 < e && e < this.height || void this.handleMouseOut() : (this.handleMouseOut(), !1))
                },
                fixPosition: function () {
                    this.prevY = this.prevX = NaN
                },
                handleMouseDown: function () {
                    if (this.update(), this.mouseIsOver())
                        if (this.mouseIsDown = !0, this.mouseX0 = this.mouseX, this.mouseY0 = this.mouseY, this.mouse2X0 = this.mouse2X, this.mouse2Y0 = this.mouse2Y, this.drawing) this.drawStartY = this.mouseY, this.drawStartX = this.mouseX, this.drawingNow = !0;
                        else if (this.dispatchMovedEvent(this.mouseX, this.mouseY), !this.pan && isNaN(this.mouse2X0) && (isNaN(this.fx) || (this.mouseX0 = this.fx), isNaN(this.fy) || (this.mouseY0 = this.fy)), this.hZoomEnabled || this.vZoomEnabled) {
                        this.zooming = !0;
                        var t = {
                            chart: this.chart,
                            target: this,
                            type: "zoomStarted"
                        };
                        t.x = this.mouseX / this.width, t.y = this.mouseY / this.height, this.index0 = t.index = this.index, this.timestamp0 = this.timestamp, this.fire(t)
                    }
                },
                registerInitialMouse: function () {},
                handleReleaseOutside: function () {
                    if (this.mouseIsDown = !1, this.drawingNow) {
                        this.drawingNow = !1, t.remove(this.drawingLine);
                        var e = this.drawStartX,
                            i = this.drawStartY,
                            s = this.mouseX,
                            a = this.mouseY,
                            r = this.chart;
                        (2 < Math.abs(e - s) || 2 < Math.abs(i - a)) && this.fire({
                            type: "draw",
                            target: this,
                            chart: r,
                            initialX: e,
                            initialY: i,
                            finalX: s,
                            finalY: a
                        })
                    }
                    this.zooming && (this.zooming = !1, this.selectWithoutZooming ? this.dispatchZoomEvent("selected") : (this.hZoomEnabled || this.vZoomEnabled) && this.dispatchZoomEvent("zoomed"), this.rolledOver && this.dispatchMovedEvent(this.mouseX, this.mouseY)), this.mouse2Y0 = this.mouse2X0 = this.mouseY0 = this.mouseX0 = NaN
                },
                dispatchZoomEvent: function (t) {
                    if (!this.pan) {
                        var e = this.selection;
                        if (e && 3 < Math.abs(e.width) && 3 < Math.abs(e.height)) {
                            var i = Math.min(this.index, this.index0),
                                s = Math.max(this.index, this.index0),
                                a = i,
                                r = s,
                                n = this.chart,
                                o = n.chartData,
                                h = n.categoryAxis;
                            h && h.parseDates && !h.equalSpacing && (a = o[i] ? o[i].time : Math.min(this.timestamp0, this.timestamp), r = o[s] ? n.getEndTime(o[s].time) : Math.max(this.timestamp0, this.timestamp));
                            var l, e = {
                                type: t,
                                chart: this.chart,
                                target: this,
                                end: r,
                                start: a,
                                startIndex: i,
                                endIndex: s,
                                selectionHeight: e.height,
                                selectionWidth: e.width,
                                selectionY: e.y,
                                selectionX: e.x
                            };
                            this.hZoomEnabled && 4 < Math.abs(this.mouseX0 - this.mouseX) && (e.startX = this.mouseX0 / this.width, e.endX = this.mouseX / this.width, l = !0), this.vZoomEnabled && 4 < Math.abs(this.mouseY0 - this.mouseY) && (e.startY = 1 - this.mouseY0 / this.height, e.endY = 1 - this.mouseY / this.height, l = !0), l && (this.prevY = this.prevX = NaN, this.fire(e), "selected" != t && this.clearSelection()), this.hideCursor()
                        }
                    }
                },
                dispatchMovedEvent: function (t, e, i, s) {
                    if (t = Math.round(t), e = Math.round(e), !this.isHidden && (t != this.prevX || e != this.prevY || "changed" == i)) {
                        i || (i = "moved");
                        var a = this.fx,
                            r = this.fy;
                        isNaN(a) && (a = t), isNaN(r) && (r = e);
                        var n = !1;
                        this.zooming && this.pan && (n = !0), n = {
                            hidden: this.isHidden,
                            type: i,
                            chart: this.chart,
                            target: this,
                            x: t,
                            y: e,
                            finalX: a,
                            finalY: r,
                            zooming: this.zooming,
                            panning: n,
                            mostCloseGraph: this.mostCloseGraph,
                            index: this.index,
                            skip: s,
                            hideBalloons: this.hideGraphBalloons
                        }, this.prevIndex = this.index, this.rotate ? (n.position = e, n.finalPosition = r) : (n.position = t, n.finalPosition = a), this.prevX = t, this.prevY = e, s ? this.chart.handleCursorMove(n) : (this.fire(n), "changed" == i && this.chart.fire(n))
                    }
                },
                dispatchPanEvent: function () {
                    if (this.mouseIsDown) {
                        var e = t.roundTo((this.mouseX - this.mouseX0) / this.width, 3),
                            i = t.roundTo((this.mouseY - this.mouseY0) / this.height, 3),
                            s = t.roundTo((this.mouse2X - this.mouse2X0) / this.width, 3),
                            a = t.roundTo((this.mouse2Y - this.mouse2Y0) / this.height, 2),
                            r = !1;
                        0 !== Math.abs(e) && 0 !== Math.abs(i) && (r = !0), this.prevDeltaX != e && this.prevDeltaY != i || (r = !1), isNaN(s) || isNaN(a) || (0 !== Math.abs(s) && 0 !== Math.abs(a) && (r = !0), this.prevDelta2X != s && this.prevDelta2Y != a) || (r = !1), r && (this.hideLines(), this.fire({
                            type: "panning",
                            chart: this.chart,
                            target: this,
                            deltaX: e,
                            deltaY: i,
                            delta2X: s,
                            delta2Y: a,
                            index: this.index
                        }), this.prevDeltaX = e, this.prevDeltaY = i, this.prevDelta2X = s, this.prevDelta2Y = a)
                    }
                },
                clearSelection: function () {
                    var t = this.selection;
                    t && (t.width = 0, t.height = 0, t.remove())
                },
                destroy: function () {
                    this.clear(), t.remove(this.selection), this.selection = null, clearTimeout(this.syncTO), t.remove(this.set)
                },
                clear: function () {},
                setTimestamp: function (t) {
                    this.timestamp = t
                },
                setIndex: function (t, e) {
                    t != this.index && (this.index = t, e || this.isHidden || this.dispatchMovedEvent(this.mouseX, this.mouseY, "changed"))
                },
                handleMouseOut: function () {
                    this.enabled && this.rolledOver && (this.leaveCursor || this.setIndex(void 0), this.forceShow = !1, this.hideCursor(), this.rolledOver = !1)
                },
                showCursorAt: function (t) {
                    var e = this.chart.categoryAxis;
                    e && this.setPosition(e.categoryToCoordinate(t), t)
                },
                setPosition: function (t, e) {
                    var i = this.chart,
                        s = i.categoryAxis;
                    if (s) {
                        var a, r;
                        void 0 === e && (e = s.coordinateToValue(t)), s.showBalloonAt(e, t), this.forceShow = !0, s.stickBalloonToCategory ? i.rotate ? this.fixHLine(t, 0) : this.fixVLine(t, 0) : (this.showCursor(), i.rotate ? this.hhLine.translate(0, t) : this.vvLine.translate(t, 0)), i.rotate ? a = t : r = t, i.rotate ? (this.vvLine && this.vvLine.hide(), this.hhLine && this.hhLine.show()) : (this.hhLine && this.hhLine.hide(), this.vvLine && this.vvLine.show()), this.updateFullLine(), this.isHidden = !1, this.dispatchMovedEvent(r, a, "moved", !0)
                    }
                },
                enableDrawing: function (t) {
                    this.enabled = !t, this.hideCursor(), this.drawing = t
                },
                syncWithCursor: function (t, e) {
                    clearTimeout(this.syncTO), t && (t.isHidden ? this.hideCursor(!0) : this.syncWithCursorReal(t, e))
                },
                isZooming: function (t) {
                    this.zooming = t
                },
                syncWithCursorReal: function (t, e) {
                    var i = t.vvLine,
                        s = t.hhLine;
                    this.index = t.index, this.forceShow = !0, this.zooming && this.pan || this.showCursor(!0), this.hideGraphBalloons = e, this.justReleased = t.justReleased, this.zooming = t.zooming, this.index0 = t.index0, this.mouseX0 = t.mouseX0, this.mouseY0 = t.mouseY0, this.mouse2X0 = t.mouse2X0, this.mouse2Y0 = t.mouse2Y0, this.timestamp0 = t.timestamp0, this.prevDeltaX = t.prevDeltaX, this.prevDeltaY = t.prevDeltaY, this.prevDelta2X = t.prevDelta2X, this.prevDelta2Y = t.prevDelta2Y, this.fx = t.fx, this.fy = t.fy, t.zooming && this.updateSelection();
                    var a = t.mouseX,
                        r = t.mouseY;
                    this.rotate ? (a = NaN, this.vvLine && this.vvLine.hide(), this.hhLine && s && (isNaN(t.fy) ? this.hhLine.translate(0, t.mouseY) : this.fixHLine(t.fy, 0))) : (r = NaN, this.hhLine && this.hhLine.hide(), this.vvLine && i && (isNaN(t.fx) ? this.vvLine.translate(t.mouseX, 0) : this.fixVLine(t.fx, 0))), this.dispatchMovedEvent(a, r, "moved", !0)
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.SimpleChartScrollbar = t.Class({
                construct: function (e) {
                    this.createEvents("zoomed", "zoomStarted", "zoomEnded"), this.backgroundColor = "#D4D4D4", this.backgroundAlpha = 1, this.selectedBackgroundColor = "#EFEFEF", this.scrollDuration = this.selectedBackgroundAlpha = 1, this.resizeEnabled = !0, this.hideResizeGrips = !1, this.scrollbarHeight = 20, this.updateOnReleaseOnly = !1, 9 > document.documentMode && (this.updateOnReleaseOnly = !0), this.dragIconHeight = this.dragIconWidth = 35, this.dragIcon = "dragIconRoundBig", this.dragCursorHover = "cursor: move; cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;", this.dragCursorDown = "cursor: move; cursor: grab; cursor: -moz-grabbing; cursor: -webkit-grabbing;", this.vResizeCursor = "ns-resize", this.hResizeCursor = "ew-resize", this.enabled = !0, this.percentStart = this.offset = 0, this.percentEnd = 1, t.applyTheme(this, e, "SimpleChartScrollbar")
                },
                getPercents: function () {
                    var t = this.getDBox(),
                        e = t.x,
                        i = t.y,
                        s = t.width,
                        t = t.height;
                    this.rotate ? (e = 1 - i / this.height, i = 1 - (i + t) / this.height) : (i = e / this.width, e = (e + s) / this.width), this.percentStart = i, this.percentEnd = e
                },
                draw: function () {
                    var e = this;
                    if (e.destroy(), e.enabled) {
                        var i = e.chart.container,
                            s = e.rotate,
                            a = e.chart;
                        a.panRequired = !0;
                        var r = i.set();
                        e.set = r, s ? t.setCN(a, r, "scrollbar-vertical") : t.setCN(a, r, "scrollbar-horizontal"), a.scrollbarsSet.push(r);
                        var n, o;
                        if (s ? (n = e.scrollbarHeight, o = a.plotAreaHeight) : (o = e.scrollbarHeight, n = a.plotAreaWidth), e.width = n, (e.height = o) && n) {
                            var h = t.rect(i, n, o, e.backgroundColor, e.backgroundAlpha, 1, e.backgroundColor, e.backgroundAlpha);
                            t.setCN(a, h, "scrollbar-bg"), e.bg = h, r.push(h), h = t.rect(i, n, o, "#000", .005), r.push(h), e.invisibleBg = h, h.click(function () {
                                e.handleBgClick()
                            }).mouseover(function () {
                                e.handleMouseOver()
                            }).mouseout(function () {
                                e.handleMouseOut()
                            }).touchend(function () {
                                e.handleBgClick()
                            }), h = t.rect(i, n, o, e.selectedBackgroundColor, e.selectedBackgroundAlpha), t.setCN(a, h, "scrollbar-bg-selected"), e.selectedBG = h, r.push(h), n = t.rect(i, n, o, "#000", .005), e.dragger = n, r.push(n), n.mousedown(function (t) {
                                e.handleDragStart(t)
                            }).mouseup(function () {
                                e.handleDragStop()
                            }).mouseover(function () {
                                e.handleDraggerOver()
                            }).mouseout(function () {
                                e.handleMouseOut()
                            }).touchstart(function (t) {
                                e.handleDragStart(t)
                            }).touchend(function () {
                                e.handleDragStop()
                            }), o = a.pathToImages;
                            var l, h = e.dragIcon.replace(/\.[a-z]*$/i, "");
                            t.isAbsolute(h) && (o = ""), s ? (l = o + h + "H" + a.extension, o = e.dragIconWidth, s = e.dragIconHeight) : (l = o + h + a.extension, s = e.dragIconWidth, o = e.dragIconHeight), h = i.image(l, 0, 0, s, o), t.setCN(a, h, "scrollbar-grip-left"), l = i.image(l, 0, 0, s, o), t.setCN(a, l, "scrollbar-grip-right");
                            var d = 10,
                                u = 20;
                            a.panEventsEnabled && (d = 25, u = e.scrollbarHeight);
                            var c = t.rect(i, d, u, "#000", .005),
                                p = t.rect(i, d, u, "#000", .005);
                            p.translate(-(d - s) / 2, -(u - o) / 2), c.translate(-(d - s) / 2, -(u - o) / 2), s = i.set([h, p]), i = i.set([l, c]), e.iconLeft = s, r.push(e.iconLeft), e.iconRight = i, r.push(i), e.updateGripCursor(!1), a.makeAccessible(s, e.accessibleLabel), a.makeAccessible(i, e.accessibleLabel), a.makeAccessible(n, e.accessibleLabel), s.setAttr("role", "menuitem"), i.setAttr("role", "menuitem"), n.setAttr("role", "menuitem"), void 0 !== e.tabIndex && (s.setAttr("tabindex", e.tabIndex), s.keyup(function (t) {
                                e.handleKeys(t, 1, 0)
                            })), void 0 !== e.tabIndex && (n.setAttr("tabindex", e.tabIndex), n.keyup(function (t) {
                                e.handleKeys(t, 1, 1)
                            })), void 0 !== e.tabIndex && (i.setAttr("tabindex", e.tabIndex), i.keyup(function (t) {
                                e.handleKeys(t, 0, 1)
                            })), s.mousedown(function () {
                                e.leftDragStart()
                            }).mouseup(function () {
                                e.leftDragStop()
                            }).mouseover(function () {
                                e.iconRollOver()
                            }).mouseout(function () {
                                e.iconRollOut()
                            }).touchstart(function () {
                                e.leftDragStart()
                            }).touchend(function () {
                                e.leftDragStop()
                            }), i.mousedown(function () {
                                e.rightDragStart()
                            }).mouseup(function () {
                                e.rightDragStop()
                            }).mouseover(function () {
                                e.iconRollOver()
                            }).mouseout(function () {
                                e.iconRollOut()
                            }).touchstart(function () {
                                e.rightDragStart()
                            }).touchend(function () {
                                e.rightDragStop()
                            }), t.ifArray(a.chartData) ? r.show() : r.hide(), e.hideDragIcons(), e.clipDragger(!1)
                        }
                        r.translate(e.x, e.y), r.node.style.msTouchAction = "none", r.node.style.touchAction = "none"
                    }
                },
                handleKeys: function (t, e, i) {
                    this.getPercents();
                    var s = this.percentStart,
                        a = this.percentEnd;
                    if (this.rotate) var r = a,
                        a = s,
                        s = r;
                    37 != t.keyCode && 40 != t.keyCode || (s -= .02 * e, a -= .02 * i), 39 != t.keyCode && 38 != t.keyCode || (s += .02 * e, a += .02 * i), this.rotate && (t = a, a = s, s = t), isNaN(a) || isNaN(s) || this.percentZoom(s, a, !0)
                },
                updateScrollbarSize: function (t, e) {
                    if (!isNaN(t) && !isNaN(e)) {
                        t = Math.round(t), e = Math.round(e);
                        var i, s, a, r, n, o = this.dragger;
                        this.rotate ? (i = 0, s = t, a = this.width + 1, r = e - t, o.setAttr("height", e - t), o.setAttr("y", s)) : (i = t, s = 0, a = e - t, r = this.height + 1, n = e - t, o.setAttr("x", i), o.setAttr("width", n)), this.clipAndUpdate(i, s, a, r)
                    }
                },
                update: function () {
                    var t, e, i, s = !1,
                        a = this.x,
                        r = this.y,
                        n = this.dragger,
                        o = this.getDBox();
                    if (o) {
                        e = o.x + a, i = o.y + r;
                        var h = o.width,
                            o = o.height,
                            l = this.rotate,
                            d = this.chart,
                            u = this.width,
                            c = this.height,
                            p = d.mouseX,
                            d = d.mouseY;
                        if (t = this.initialMouse, this.forceClip && this.clipDragger(!0), this.dragging) {
                            var m = this.initialCoord;
                            l ? (t = m + (d - t), 0 > t && (t = 0), m = c - o, t > m && (t = m), n.setAttr("y", t)) : (t = m + (p - t), 0 > t && (t = 0), m = u - h, (t > m || isNaN(t)) && (t = m), n.setAttr("x", t)), this.clipDragger(!0)
                        }
                        this.resizingRight && (l ? (t = d - i, !isNaN(this.maxHeight) && t > this.maxHeight && (t = this.maxHeight), t + i > c + r && (t = c - i + r), 0 > t ? (this.resizingRight = !1, s = this.resizingLeft = !0) : ((0 === t || isNaN(t)) && (t = .1), n.setAttr("height", t))) : (t = p - e, !isNaN(this.maxWidth) && t > this.maxWidth && (t = this.maxWidth), t + e > u + a && (t = u - e + a), 0 > t ? (this.resizingRight = !1, s = this.resizingLeft = !0) : ((0 === t || isNaN(t)) && (t = .1), n.setAttr("width", t))), this.clipDragger(!0)), this.resizingLeft && (l ? (e = i, i = d, i < r && (i = r), isNaN(i) && (i = r), i > c + r && (i = c + r), t = !0 === s ? e - i : o + e - i, !isNaN(this.maxHeight) && t > this.maxHeight && (t = this.maxHeight, i = e), 0 > t ? (this.resizingRight = !0, this.resizingLeft = !1, n.setAttr("y", e + o - r)) : ((0 === t || isNaN(t)) && (t = .1), n.setAttr("y", i - r), n.setAttr("height", t))) : (i = p, i < a && (i = a), isNaN(i) && (i = a), i > u + a && (i = u + a), t = !0 === s ? e - i : h + e - i, !isNaN(this.maxWidth) && t > this.maxWidth && (t = this.maxWidth, i = e), 0 > t ? (this.resizingRight = !0, this.resizingLeft = !1, n.setAttr("x", e + h - a)) : ((0 === t || isNaN(t)) && (t = .1), n.setAttr("x", i - a), n.setAttr("width", t))), this.clipDragger(!0))
                    }
                },
                stopForceClip: function () {
                    this.animating = this.forceClip = !1
                },
                clipDragger: function (t) {
                    var e = this.getDBox();
                    if (e) {
                        var i = e.x,
                            s = e.y,
                            a = e.width,
                            e = e.height,
                            r = !1;
                        this.rotate ? (i = 0, a = this.width + 1, (this.clipY != s || this.clipH != e) && (r = !0)) : (s = 0, e = this.height + 1, (this.clipX != i || this.clipW != a) && (r = !0)), r && this.clipAndUpdate(i, s, a, e), t && (this.updateOnReleaseOnly || this.dispatchScrollbarEvent())
                    }
                },
                maskGraphs: function () {},
                clipAndUpdate: function (t, e, i, s) {
                    this.clipX = t, this.clipY = e, this.clipW = i, this.clipH = s, this.selectedBG.setAttr("width", i), this.selectedBG.setAttr("height", s), this.selectedBG.translate(t, e), this.updateDragIconPositions(), this.maskGraphs(t, e, i, s)
                },
                dispatchScrollbarEvent: function () {
                    if (this.skipEvent) this.skipEvent = !1;
                    else {
                        var t = this.chart;
                        t.hideBalloon();
                        var e = this.getDBox(),
                            i = e.x,
                            s = e.y,
                            a = e.width,
                            e = e.height;
                        this.getPercents(), this.rotate ? (i = s, a = this.height / e) : a = this.width / a, t = {
                            type: "zoomed",
                            position: i,
                            chart: t,
                            target: this,
                            multiplier: a,
                            relativeStart: this.percentStart,
                            relativeEnd: this.percentEnd
                        }, this.percentStart == this.prevPercentStart && this.percentEnd == this.prevPercentEnd && this.prevMultiplier == a || (this.fire(t), this.prevPercentStart = this.percentStart, this.prevPercentEnd = this.percentEnd, this.prevMultiplier = a)
                    }
                },
                updateDragIconPositions: function () {
                    var t, e, i = this.getDBox(),
                        s = i.x,
                        a = i.y,
                        r = this.iconLeft,
                        n = this.iconRight,
                        o = this.scrollbarHeight;
                    this.rotate ? (t = this.dragIconWidth, e = this.dragIconHeight, r.translate((o - e) / 2, a - t / 2), n.translate((o - e) / 2, a + i.height - t / 2)) : (t = this.dragIconHeight, e = this.dragIconWidth, r.translate(s - e / 2, (o - t) / 2), n.translate(s - e / 2 + i.width, (o - t) / 2))
                },
                showDragIcons: function () {
                    this.resizeEnabled && (this.iconLeft.show(), this.iconRight.show())
                },
                hideDragIcons: function () {
                    this.resizingLeft || this.resizingRight || this.dragging || (!this.hideResizeGrips && this.resizeEnabled || (this.iconLeft.hide(), this.iconRight.hide()), this.removeCursors())
                },
                removeCursors: function () {
                    this.chart.setMouseCursor("auto")
                },
                fireZoomEvent: function (t) {
                    this.fire({
                        type: t,
                        chart: this.chart,
                        target: this
                    })
                },
                percentZoom: function (e, i, s) {
                    if (e = t.fitToBounds(e, 0, i), i = t.fitToBounds(i, e, 1), this.dragger && this.enabled) {
                        this.dragger.stop(), isNaN(e) && (e = 0), isNaN(i) && (i = 1);
                        var a, r;
                        this.rotate ? (a = this.height, i = a - a * i, r = a - a * e) : (a = this.width, r = a * i, i = a * e), this.updateScrollbarSize(i, r), this.clipDragger(!1), this.getPercents(), s && this.dispatchScrollbarEvent()
                    }
                },
                destroy: function () {
                    this.clear(), t.remove(this.set), t.remove(this.iconRight), t.remove(this.iconLeft)
                },
                clear: function () {},
                handleDragStart: function () {
                    if (this.enabled) {
                        this.fireZoomEvent("zoomStarted");
                        var e = this.chart;
                        this.dragger.stop(), this.removeCursors(), t.isModern && (this.dragger.node.style.cssText = this.dragCursorDown), this.dragging = !0;
                        var i = this.getDBox();
                        this.rotate ? (this.initialCoord = i.y, this.initialMouse = e.mouseY) : (this.initialCoord = i.x, this.initialMouse = e.mouseX)
                    }
                },
                handleDragStop: function () {
                    this.updateOnReleaseOnly && (this.update(), this.skipEvent = !1, this.dispatchScrollbarEvent()), this.dragging = !1, this.mouseIsOver && this.removeCursors(), t.isModern && (this.dragger.node.style.cssText = this.dragCursorHover), this.update(), this.fireZoomEvent("zoomEnded")
                },
                handleDraggerOver: function () {
                    this.handleMouseOver(), t.isModern && (this.dragger.node.style.cssText = this.dragCursorHover)
                },
                leftDragStart: function () {
                    this.fireZoomEvent("zoomStarted"), this.dragger.stop(), this.resizingLeft = !0, this.updateGripCursor(!0)
                },
                updateGripCursor: function (e) {
                    t.isModern && (e = this.rotate ? e ? this.vResizeCursorDown : this.vResizeCursorHover : e ? this.hResizeCursorDown : this.hResizeCursorHover) && (this.iconRight && (this.iconRight.node.style.cssText = e), this.iconLeft && (this.iconLeft.node.style.cssText = e))
                },
                leftDragStop: function () {
                    this.resizingLeft && (this.resizingLeft = !1, this.mouseIsOver || this.removeCursors(), this.updateOnRelease(), this.fireZoomEvent("zoomEnded")), this.updateGripCursor(!1)
                },
                rightDragStart: function () {
                    this.fireZoomEvent("zoomStarted"), this.dragger.stop(), this.resizingRight = !0, this.updateGripCursor(!0)
                },
                rightDragStop: function () {
                    this.resizingRight && (this.resizingRight = !1, this.mouseIsOver || this.removeCursors(), this.updateOnRelease(), this.fireZoomEvent("zoomEnded")), this.updateGripCursor(!1)
                },
                iconRollOut: function () {
                    this.removeCursors()
                },
                iconRollOver: function () {
                    this.rotate ? this.vResizeCursor && this.chart.setMouseCursor(this.vResizeCursor) : this.hResizeCursor && this.chart.setMouseCursor(this.hResizeCursor), this.handleMouseOver()
                },
                getDBox: function () {
                    if (this.dragger) return this.dragger.getBBox()
                },
                handleBgClick: function () {
                    var e = this;
                    if (!e.resizingRight && !e.resizingLeft) {
                        e.zooming = !0;
                        var i, s, a = e.scrollDuration,
                            r = e.dragger;
                        i = e.getDBox();
                        var n = i.height,
                            o = i.width;
                        s = e.chart;
                        var h = e.y,
                            l = e.x,
                            d = e.rotate;
                        d ? (i = "y", s = s.mouseY - n / 2 - h, s = t.fitToBounds(s, 0, e.height - n)) : (i = "x", s = s.mouseX - o / 2 - l, s = t.fitToBounds(s, 0, e.width - o)), e.updateOnReleaseOnly ? (e.skipEvent = !1, r.setAttr(i, s), e.dispatchScrollbarEvent(), e.clipDragger()) : (e.animating = !0, s = Math.round(s), d ? r.animate({
                            y: s
                        }, a, ">") : r.animate({
                            x: s
                        }, a, ">"), e.forceClip = !0, clearTimeout(e.forceTO), e.forceTO = setTimeout(function () {
                            e.stopForceClip.call(e)
                        }, 5e3 * a))
                    }
                },
                updateOnRelease: function () {
                    this.updateOnReleaseOnly && (this.update(), this.skipEvent = !1, this.dispatchScrollbarEvent())
                },
                handleReleaseOutside: function () {
                    this.set && ((this.resizingLeft || this.resizingRight || this.dragging) && (this.dragging = this.resizingRight = this.resizingLeft = !1, this.updateOnRelease(), this.removeCursors()), this.animating = this.mouseIsOver = !1, this.hideDragIcons(), this.update())
                },
                handleMouseOver: function () {
                    this.mouseIsOver = !0, this.showDragIcons()
                },
                handleMouseOut: function () {
                    this.mouseIsOver = !1, this.hideDragIcons(), this.removeCursors()
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.ChartScrollbar = t.Class({
                inherits: t.SimpleChartScrollbar,
                construct: function (e) {
                    this.cname = "ChartScrollbar", t.ChartScrollbar.base.construct.call(this, e), this.graphLineColor = "#BBBBBB", this.graphLineAlpha = 0, this.graphFillColor = "#BBBBBB", this.graphFillAlpha = 1, this.selectedGraphLineColor = "#888888", this.selectedGraphLineAlpha = 0, this.selectedGraphFillColor = "#888888", this.selectedGraphFillAlpha = 1, this.gridCount = 0, this.gridColor = "#FFFFFF", this.gridAlpha = .7, this.skipEvent = this.autoGridCount = !1, this.color = "#FFFFFF", this.scrollbarCreated = !1, this.oppositeAxis = !0, this.accessibleLabel = "Zoom chart using cursor arrows", t.applyTheme(this, e, this.cname)
                },
                init: function () {
                    var e = this.categoryAxis,
                        i = this.chart,
                        s = this.gridAxis;
                    e || ("CategoryAxis" == this.gridAxis.cname ? (this.catScrollbar = !0, e = new t.CategoryAxis, e.id = "scrollbar") : (e = new t.ValueAxis, e.data = i.chartData, e.id = s.id, e.type = s.type, e.maximumDate = s.maximumDate, e.minimumDate = s.minimumDate, e.minPeriod = s.minPeriod, e.minMaxField = s.minMaxField), this.categoryAxis = e), e.chart = i;
                    var a = i.categoryAxis;
                    a && (e.firstDayOfWeek = a.firstDayOfWeek), e.dateFormats = s.dateFormats, e.markPeriodChange = s.markPeriodChange, e.boldPeriodBeginning = s.boldPeriodBeginning, e.labelFunction = s.labelFunction, e.axisItemRenderer = t.RecItem, e.axisRenderer = t.RecAxis, e.guideFillRenderer = t.RecFill, e.inside = !0, e.fontSize = this.fontSize, e.tickLength = 0, e.axisAlpha = 0, t.isString(this.graph) && (this.graph = t.getObjById(i.graphs, this.graph)), (e = this.graph) && this.catScrollbar && (s = this.valueAxis, s || (this.valueAxis = s = new t.ValueAxis, s.visible = !1, s.scrollbar = !0, s.axisItemRenderer = t.RecItem, s.axisRenderer = t.RecAxis, s.guideFillRenderer = t.RecFill, s.labelsEnabled = !1, s.chart = i), i = this.unselectedGraph, i || (i = new t.AmGraph, i.scrollbar = !0, this.unselectedGraph = i, i.negativeBase = e.negativeBase, i.noStepRisers = e.noStepRisers), (i = this.selectedGraph) || (i = new t.AmGraph, i.scrollbar = !0, this.selectedGraph = i, i.negativeBase = e.negativeBase, i.noStepRisers = e.noStepRisers)), this.scrollbarCreated = !0
                },
                draw: function () {
                    var e = this;
                    if (t.ChartScrollbar.base.draw.call(e), e.enabled) {
                        e.scrollbarCreated || e.init();
                        var i = e.chart,
                            s = i.chartData,
                            a = e.categoryAxis,
                            r = e.rotate,
                            n = e.x,
                            o = e.y,
                            h = e.width,
                            l = e.height,
                            d = e.gridAxis,
                            u = e.set;
                        if (a.setOrientation(!r), a.parseDates = d.parseDates, "ValueAxis" == e.categoryAxis.cname && (a.rotate = !r), a.equalSpacing = d.equalSpacing, a.minPeriod = d.minPeriod, a.startOnAxis = d.startOnAxis, a.width = h - 1, a.height = l, a.gridCount = e.gridCount, a.gridColor = e.gridColor, a.gridAlpha = e.gridAlpha, a.color = e.color, a.tickLength = 0, a.axisAlpha = 0, a.autoGridCount = e.autoGridCount, a.parseDates && !a.equalSpacing && a.timeZoom(i.firstTime, i.lastTime), a.minimum = e.gridAxis.fullMin, a.maximum = e.gridAxis.fullMax, a.strictMinMax = !0, a.zoom(0, s.length - 1), (d = e.graph) && e.catScrollbar) {
                            var c = e.valueAxis,
                                p = d.valueAxis;
                            c.id = p.id, c.rotate = r, c.setOrientation(r), c.width = h, c.height = l, c.dataProvider = s, c.reversed = p.reversed, c.logarithmic = p.logarithmic, c.gridAlpha = 0, c.axisAlpha = 0, u.push(c.set), r ? (c.y = o, c.x = 0) : (c.x = n, c.y = 0);
                            var m, n = 1 / 0,
                                o = -1 / 0;
                            for (m = 0; m < s.length; m++) {
                                var f, g = s[m].axes[p.id].graphs[d.id].values;
                                for (f in g)
                                    if (g.hasOwnProperty(f) && "percents" != f && "total" != f) {
                                        var v = g[f];
                                        v < n && (n = v), v > o && (o = v)
                                    }
                            }
                            1 / 0 != n && (c.minimum = n), -1 / 0 != o && (c.maximum = o + .1 * (o - n)), n == o && (--c.minimum, c.maximum += 1), void 0 !== e.minimum && (c.minimum = e.minimum), void 0 !== e.maximum && (c.maximum = e.maximum), c.zoom(0, s.length - 1), f = e.unselectedGraph, f.id = d.id, f.bcn = "scrollbar-graph-", f.rotate = r, f.chart = i, f.data = s, f.valueAxis = c, f.chart = d.chart, f.categoryAxis = e.categoryAxis, f.periodSpan = d.periodSpan, f.valueField = d.valueField, f.openField = d.openField, f.closeField = d.closeField, f.highField = d.highField, f.lowField = d.lowField, f.lineAlpha = e.graphLineAlpha, f.lineColorR = e.graphLineColor, f.fillAlphas = e.graphFillAlpha, f.fillColorsR = e.graphFillColor, f.connect = d.connect, f.hidden = d.hidden, f.width = h, f.height = l, f.pointPosition = d.pointPosition, f.stepDirection = d.stepDirection, f.periodSpan = d.periodSpan, p = e.selectedGraph, p.id = d.id, p.bcn = f.bcn + "selected-", p.rotate = r, p.chart = i, p.data = s, p.valueAxis = c, p.chart = d.chart, p.categoryAxis = a, p.periodSpan = d.periodSpan, p.valueField = d.valueField, p.openField = d.openField, p.closeField = d.closeField, p.highField = d.highField, p.lowField = d.lowField, p.lineAlpha = e.selectedGraphLineAlpha, p.lineColorR = e.selectedGraphLineColor, p.fillAlphas = e.selectedGraphFillAlpha, p.fillColorsR = e.selectedGraphFillColor, p.connect = d.connect, p.hidden = d.hidden, p.width = h, p.height = l, p.pointPosition = d.pointPosition, p.stepDirection = d.stepDirection, p.periodSpan = d.periodSpan, i = e.graphType, i || (i = d.type), f.type = i, p.type = i, s = s.length - 1, f.zoom(0, s), p.zoom(0, s), p.set.click(function () {
                                e.handleBackgroundClick()
                            }).mouseover(function () {
                                e.handleMouseOver()
                            }).mouseout(function () {
                                e.handleMouseOut()
                            }), f.set.click(function () {
                                e.handleBackgroundClick()
                            }).mouseover(function () {
                                e.handleMouseOver()
                            }).mouseout(function () {
                                e.handleMouseOut()
                            }), u.push(f.set), u.push(p.set)
                        }
                        u.push(a.set), u.push(a.labelsSet), e.bg.toBack(), e.invisibleBg.toFront(), e.dragger.toFront(), e.iconLeft.toFront(), e.iconRight.toFront()
                    }
                },
                timeZoom: function (e, i, s) {
                    this.startTime = e, this.endTime = i, this.timeDifference = i - e, this.skipEvent = !t.toBoolean(s), this.zoomScrollbar(), this.dispatchScrollbarEvent()
                },
                zoom: function (t, e) {
                    this.start = t, this.end = e, this.skipEvent = !0, this.zoomScrollbar()
                },
                dispatchScrollbarEvent: function () {
                    if (this.categoryAxis && "ValueAxis" == this.categoryAxis.cname) t.ChartScrollbar.base.dispatchScrollbarEvent.call(this);
                    else if (this.skipEvent) this.skipEvent = !1;
                    else {
                        var e, i, s = this.chart.chartData,
                            a = this.dragger.getBBox();
                        e = a.x;
                        var r = a.y,
                            n = a.width,
                            a = a.height,
                            o = this.chart;
                        this.rotate ? (e = r, i = a) : i = n, n = {
                            type: "zoomed",
                            target: this
                        }, n.chart = o;
                        var h = this.categoryAxis,
                            l = this.stepWidth,
                            r = o.minSelectedTime,
                            a = o.maxSelectedTime,
                            d = !1;
                        h.parseDates && !h.equalSpacing ? (s = o.lastTime, o = o.firstTime, h = Math.round(e / l) + o, e = this.dragging ? h + this.timeDifference : Math.round((e + i) / l) + o, h > e && (h = e), 0 < r && e - h < r && (e = Math.round(h + (e - h) / 2), d = Math.round(r / 2), h = e - d, e += d, d = !0), 0 < a && e - h > a && (e = Math.round(h + (e - h) / 2), d = Math.round(a / 2), h = e - d, e += d, d = !0), e > s && (e = s), e - r < h && (h = e - r), h < o && (h = o), h + r > e && (e = h + r), (h != this.startTime || e != this.endTime) && (this.startTime = h, this.endTime = e, n.start = h, n.end = e, n.startDate = new Date(h), n.endDate = new Date(e), this.fire(n))) : (h.startOnAxis || (e += l / 2), i -= this.stepWidth / 2, r = h.xToIndex(e), e = h.getCoordinate(r) - this.stepWidth / 2, e = h.xToIndex(e + i), r == this.start && this.end == e || (h.startOnAxis && (this.resizingRight && r == e && e++, this.resizingLeft && r == e && (0 < r ? r-- : e = 1)), this.start = r, this.end = this.dragging ? this.start + this.difference : e, n.start = this.start, n.end = this.end, h.parseDates && (s[this.start] && (n.startDate = new Date(s[this.start].time)), s[this.end] && (n.endDate = new Date(s[this.end].time))), this.fire(n)), this.percentStart = r, this.percentEnd = e), d && this.zoomScrollbar(!0)
                    }
                },
                zoomScrollbar: function (t) {
                    if ((!(this.dragging || this.resizingLeft || this.resizingRight || this.animating) || t) && this.dragger && this.enabled) {
                        var e, i, s = this.chart;
                        t = s.chartData;
                        var a = this.categoryAxis;
                        a.parseDates && !a.equalSpacing ? (t = a.stepWidth, i = s.firstTime, e = t * (this.startTime - i), i = t * (this.endTime - i)) : (t[this.start] && (e = t[this.start].x[a.id]), t[this.end] && (i = t[this.end].x[a.id]), t = a.stepWidth, a.startOnAxis || (s = t / 2, e -= s, i += s)), this.stepWidth = t, isNaN(e) || isNaN(i) || this.updateScrollbarSize(e, i)
                    }
                },
                maskGraphs: function (t, e, i, s) {
                    var a = this.selectedGraph;
                    a && a.set.clipRect(t, e, i, s)
                },
                handleDragStart: function () {
                    t.ChartScrollbar.base.handleDragStart.call(this), this.difference = this.end - this.start, this.timeDifference = this.endTime - this.startTime, 0 > this.timeDifference && (this.timeDifference = 0)
                },
                handleBackgroundClick: function () {
                    t.ChartScrollbar.base.handleBackgroundClick.call(this), this.dragging || (this.difference = this.end - this.start, this.timeDifference = this.endTime - this.startTime, 0 > this.timeDifference && (this.timeDifference = 0))
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.AmBalloon = t.Class({
                construct: function (e) {
                    this.cname = "AmBalloon", this.enabled = !0, this.fillColor = "#FFFFFF", this.fillAlpha = .8, this.borderThickness = 2, this.borderColor = "#FFFFFF", this.borderAlpha = 1, this.cornerRadius = 0, this.maxWidth = 220, this.horizontalPadding = 8, this.verticalPadding = 4, this.pointerWidth = 6, this.pointerOrientation = "V", this.color = "#000000", this.adjustBorderColor = !0, this.show = this.follow = this.showBullet = !1, this.bulletSize = 3, this.shadowAlpha = .4, this.shadowColor = "#000000", this.fadeOutDuration = this.animationDuration = .3, this.fixedPosition = !0, this.offsetY = 6, this.offsetX = 1, this.textAlign = "center", this.disableMouseEvents = !0, this.deltaSignX = this.deltaSignY = 1, t.isModern || (this.offsetY *= 1.5), this.sdy = this.sdx = 0, t.applyTheme(this, e, this.cname)
                },
                draw: function () {
                    var e = this.pointToX,
                        i = this.pointToY;
                    t.isModern || (this.drop = !1);
                    var s = this.chart;
                    if (t.VML && (this.fadeOutDuration = 0), this.xAnim && s.stopAnim(this.xAnim), this.yAnim && s.stopAnim(this.yAnim), this.sdy = this.sdx = 0, !isNaN(e)) {
                        var a = this.follow,
                            r = s.container,
                            n = this.set;
                        if (t.remove(n), this.removeDiv(), n = r.set(), n.node.style.pointerEvents = "none", this.set = n, this.mainSet ? (this.mainSet.push(this.set), this.sdx = this.mainSet.x, this.sdy = this.mainSet.y) : s.balloonsSet.push(n), this.show) {
                            var o = this.l,
                                h = this.t,
                                l = this.r,
                                d = this.b,
                                u = this.balloonColor,
                                c = this.fillColor,
                                p = this.borderColor,
                                m = c;
                            void 0 != u && (this.adjustBorderColor ? m = p = u : c = u);
                            var f = this.horizontalPadding,
                                g = this.verticalPadding,
                                v = this.pointerWidth,
                                b = this.pointerOrientation,
                                x = this.cornerRadius,
                                y = s.fontFamily,
                                C = this.fontSize;
                            void 0 == C && (C = s.fontSize);
                            var u = document.createElement("div"),
                                N = s.classNamePrefix;
                            u.className = N + "-balloon-div", this.className && (u.className = u.className + " " + N + "-balloon-div-" + this.className), N = u.style, this.disableMouseEvents && (N.pointerEvents = "none"), N.position = "absolute";
                            var w = this.minWidth,
                                M = document.createElement("div");
                            u.appendChild(M);
                            var A = M.style;
                            isNaN(w) || (A.minWidth = w - 2 * f + "px"), A.textAlign = this.textAlign, A.maxWidth = this.maxWidth + "px", A.fontSize = C + "px", A.color = this.color, A.fontFamily = y, M.innerHTML = this.text, s.chartDiv.appendChild(u), this.textDiv = u;
                            var A = u.offsetWidth,
                                S = u.offsetHeight;
                            u.clientHeight && (A = u.clientWidth, S = u.clientHeight), y = S + 2 * g, M = A + 2 * f, !isNaN(w) && M < w && (M = w), window.opera && (y += 2);
                            var T = !1,
                                C = this.offsetY;
                            s.handDrawn && (C += s.handDrawScatter + 2), "H" != b ? (w = e - M / 2, i < h + y + 10 && "down" != b ? (T = !0, a && (i += C), C = i + v, this.deltaSignY = -1) : (a && (i -= C), C = i - y - v, this.deltaSignY = 1)) : (2 * v > y && (v = y / 2), C = i - y / 2, e < o + (l - o) / 2 ? (w = e + v, this.deltaSignX = -1) : (w = e - M - v, this.deltaSignX = 1)), C + y >= d && (C = d - y), C < h && (C = h), w < o && (w = o), w + M > l && (w = l - M);
                            var D, h = C + g,
                                d = w + f,
                                L = this.shadowAlpha,
                                k = this.shadowColor,
                                f = this.borderThickness,
                                B = this.bulletSize,
                                g = this.fillAlpha,
                                O = this.borderAlpha;
                            this.showBullet && (D = t.circle(r, B, m, g), n.push(D)), this.drop ? (o = M / 1.6, l = 0, "V" == b && (b = "down"), "H" == b && (b = "left"), "down" == b && (w = e + 1, C = i - o - o / 3), "up" == b && (l = 180, w = e + 1, C = i + o + o / 3), "left" == b && (l = 270, w = e + o + o / 3 + 2, C = i), "right" == b && (l = 90, w = e - o - o / 3 + 2, C = i), h = C - S / 2 + 1, d = w - A / 2 - 1, c = t.drop(r, o, l, c, g, f, p, O)) : 0 < x || 0 === v ? (0 < L && (e = t.rect(r, M, y, c, 0, f + 1, k, L, x), t.isModern ? e.translate(1, 1) : e.translate(4, 4), n.push(e)), c = t.rect(r, M, y, c, g, f, p, O, x)) : (m = [], x = [], "H" != b ? (o = e - w, o > M - v && (o = M - v), o < v && (o = v), m = [0, o - v, e - w, o + v, M, M, 0, 0], x = T ? [0, 0, i - C, 0, 0, y, y, 0] : [y, y, i - C, y, y, 0, 0, y]) : (b = i - C, b > y - v && (b = y - v), b < v && (b = v), x = [0, b - v, i - C, b + v, y, y, 0, 0], m = e < o + (l - o) / 2 ? [0, 0, w < e ? 0 : e - w, 0, 0, M, M, 0] : [M, M, w + M > e ? M : e - w, M, M, 0, 0, M]), 0 < L && (e = t.polygon(r, m, x, c, 0, f, k, L), e.translate(1, 1), n.push(e)), c = t.polygon(r, m, x, c, g, f, p, O)), this.bg = c, n.push(c), c.toFront(), t.setCN(s, c, "balloon-bg"), this.className && t.setCN(s, c, "balloon-bg-" + this.className), r = 1 * this.deltaSignX, d += this.sdx, h += this.sdy, N.left = d + "px", N.top = h + "px", n.translate(w - r, C, 1, !0), c = c.getBBox(), this.bottom = C + y + 1, this.yPos = c.y + C, D && D.translate(this.pointToX - w + r, i - C), i = this.animationDuration, 0 < this.animationDuration && !a && !isNaN(this.prevX) && (n.translate(this.prevX, this.prevY, NaN, !0), n.animate({
                                translate: w - r + "," + C
                            }, i, "easeOutSine"), u && (N.left = this.prevTX + "px", N.top = this.prevTY + "px", this.xAnim = s.animate({
                                node: u
                            }, "left", this.prevTX, d, i, "easeOutSine", "px"), this.yAnim = s.animate({
                                node: u
                            }, "top", this.prevTY, h, i, "easeOutSine", "px"))), this.prevX = w - r, this.prevY = C, this.prevTX = d, this.prevTY = h
                        }
                    }
                },
                fixPrevious: function () {
                    this.rPrevX = this.prevX, this.rPrevY = this.prevY, this.rPrevTX = this.prevTX, this.rPrevTY = this.prevTY
                },
                restorePrevious: function () {
                    this.prevX = this.rPrevX, this.prevY = this.rPrevY, this.prevTX = this.rPrevTX, this.prevTY = this.rPrevTY
                },
                followMouse: function () {
                    if (this.follow && this.show) {
                        var t = this.chart.mouseX - this.offsetX * this.deltaSignX - this.sdx,
                            e = this.chart.mouseY - this.sdy;
                        if (this.pointToX = t, this.pointToY = e, t != this.previousX || e != this.previousY)
                            if (this.previousX = t, this.previousY = e, 0 === this.cornerRadius) this.draw();
                            else {
                                var i = this.set;
                                if (i) {
                                    var s = i.getBBox(),
                                        t = t - s.width / 2,
                                        a = e - s.height - 10;
                                    t < this.l && (t = this.l), t > this.r - s.width && (t = this.r - s.width), a < this.t && (a = e + 10), i.translate(t, a), e = this.textDiv.style, e.left = t + this.horizontalPadding + "px", e.top = a + this.verticalPadding + "px"
                                }
                            }
                    }
                },
                changeColor: function (t) {
                    this.balloonColor = t
                },
                setBounds: function (t, e, i, s) {
                    this.l = t, this.t = e, this.r = i, this.b = s, this.destroyTO && clearTimeout(this.destroyTO)
                },
                showBalloon: function (t) {
                    (this.text != t || this.positionChanged) && (this.text = t, this.isHiding = !1, this.show = !0, this.destroyTO && clearTimeout(this.destroyTO), t = this.chart, this.fadeAnim1 && t.stopAnim(this.fadeAnim1), this.fadeAnim2 && t.stopAnim(this.fadeAnim2), this.draw(), this.positionChanged = !1)
                },
                hide: function (t) {
                    var e = this;
                    e.text = void 0, isNaN(t) && (t = e.fadeOutDuration);
                    var i = e.chart;
                    if (0 < t && !e.isHiding) {
                        e.isHiding = !0, e.destroyTO && clearTimeout(e.destroyTO), e.destroyTO = setTimeout(function () {
                            e.destroy.call(e)
                        }, 1e3 * t), e.follow = !1, e.show = !1;
                        var s = e.set;
                        s && (s.setAttr("opacity", e.fillAlpha), e.fadeAnim1 = s.animate({
                            opacity: 0
                        }, t, "easeInSine")), e.textDiv && (e.fadeAnim2 = i.animate({
                            node: e.textDiv
                        }, "opacity", 1, 0, t, "easeInSine", ""))
                    } else e.show = !1, e.follow = !1, e.destroy()
                },
                setPosition: function (t, e) {
                    t == this.pointToX && e == this.pointToY || (this.previousX = this.pointToX, this.previousY = this.pointToY, this.pointToX = t, this.pointToY = e, this.positionChanged = !0)
                },
                followCursor: function (t) {
                    var e = this;
                    e.follow = t, clearInterval(e.interval);
                    var i = e.chart.mouseX - e.sdx,
                        s = e.chart.mouseY - e.sdy;
                    !isNaN(i) && t && (e.pointToX = i - e.offsetX * e.deltaSignX, e.pointToY = s, e.followMouse(), e.interval = setInterval(function () {
                        e.followMouse.call(e)
                    }, 40))
                },
                removeDiv: function () {
                    if (this.textDiv) {
                        var t = this.textDiv.parentNode;
                        t && t.removeChild(this.textDiv)
                    }
                },
                destroy: function () {
                    clearInterval(this.interval), t.remove(this.set), this.removeDiv(), this.set = null
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.AmCoordinateChart = t.Class({
                inherits: t.AmChart,
                construct: function (e) {
                    t.AmCoordinateChart.base.construct.call(this, e), this.theme = e, this.createEvents("rollOverGraphItem", "rollOutGraphItem", "clickGraphItem", "doubleClickGraphItem", "rightClickGraphItem", "clickGraph", "rollOverGraph", "rollOutGraph"), this.startAlpha = 1, this.startDuration = 0, this.startEffect = "elastic", this.sequencedAnimation = !0, this.colors = "#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" "), this.balloonDateFormat = "MMM DD, YYYY", this.valueAxes = [], this.graphs = [], this.guides = [], this.gridAboveGraphs = !1, t.applyTheme(this, e, "AmCoordinateChart")
                },
                initChart: function () {
                    t.AmCoordinateChart.base.initChart.call(this), this.drawGraphs = !0;
                    var e = this.categoryAxis;
                    e && (this.categoryAxis = t.processObject(e, t.CategoryAxis, this.theme)), this.processValueAxes(), this.createValueAxes(), this.processGraphs(), this.processGuides(), t.VML && (this.startAlpha = 1), this.setLegendData(this.graphs), this.gridAboveGraphs && (this.gridSet.toFront(), this.bulletSet.toFront(), this.balloonsSet.toFront())
                },
                createValueAxes: function () {
                    if (0 === this.valueAxes.length) {
                        var e = new t.ValueAxis;
                        this.addValueAxis(e)
                    }
                },
                parseData: function () {
                    this.processValueAxes(), this.processGraphs()
                },
                parseSerialData: function (t) {
                    if (this.chartData = [], t)
                        if (0 < this.processTimeout) {
                            1 > this.processCount && (this.processCount = 1);
                            var e = t.length / this.processCount;
                            this.parseCount = Math.ceil(e) - 1;
                            for (var i = 0; i < e; i++) this.delayParseSerialData(t, i)
                        } else this.parseCount = 0, this.parsePartSerialData(t, 0, t.length, 0);
                    else this.onDataUpdated()
                },
                delayParseSerialData: function (t, e) {
                    var i = this,
                        s = i.processCount;
                    setTimeout(function () {
                        i.parsePartSerialData.call(i, t, e * s, (e + 1) * s, e)
                    }, i.processTimeout)
                },
                parsePartSerialData: function (e, i, s, a) {
                    s > e.length && (s = e.length);
                    var r = this.graphs,
                        n = {},
                        o = this.seriesIdField;
                    o || (o = this.categoryField);
                    var h, l, d, u, c = !1,
                        p = this.categoryAxis;
                    p && (c = p.parseDates, l = p.forceShowField, u = p.classNameField, d = p.labelColorField, h = p.categoryFunction);
                    var m, f, g, v = {};
                    c && (m = t.extractPeriod(p.minPeriod), f = m.period, m = m.count, g = t.getPeriodDuration(f, m));
                    var b = {};
                    this.lookupTable = b;
                    var x, y = this.dataDateFormat,
                        C = {};
                    for (x = i; x < s; x++) {
                        var N = {},
                            w = e[x];
                        if (i = w[this.categoryField], N.dataContext = w, N.category = h ? h(i, w, p) : String(i), l && (N.forceShow = w[l]), u && (N.className = w[u]), d && (N.labelColor = w[d]), b[w[o]] = N, !c || (p.categoryFunction ? i = p.categoryFunction(i, w, p) : (!y || i instanceof Date || (i = i.toString() + " |"), i = t.getDate(i, y, p.minPeriod)), i = t.resetDateToMin(i, f, m, p.firstDayOfWeek), N.category = i, N.time = i.getTime(), !isNaN(N.time))) {
                            var M = this.valueAxes;
                            N.axes = {}, N.x = {};
                            var A;
                            for (A = 0; A < M.length; A++) {
                                var S = M[A].id;
                                N.axes[S] = {}, N.axes[S].graphs = {};
                                var T;
                                for (T = 0; T < r.length; T++) {
                                    i = r[T];
                                    var D = i.id,
                                        L = 1.1;
                                    isNaN(i.gapPeriod) || (L = i.gapPeriod);
                                    var k = i.periodValue;
                                    if (i.valueAxis.id == S) {
                                        N.axes[S].graphs[D] = {};
                                        var B = {};
                                        B.index = x;
                                        var O = w;
                                        if (i.dataProvider && (O = n), B.values = this.processValues(O, i, k), !i.connect || i.forceGap && !isNaN(i.gapPeriod))
                                            if (C && C[D] && 0 < L && N.time - v[D] >= g * L && (C[D].gap = !0), i.forceGap) {
                                                var R, L = 0;
                                                for (R in B.values) L++;
                                                0 < L && (v[D] = N.time, C[D] = B)
                                            } else v[D] = N.time, C[D] = B;
                                        this.processFields(i, B, O), B.category = N.category, B.serialDataItem = N, B.graph = i, N.axes[S].graphs[D] = B
                                    }
                                }
                            }
                            this.chartData[x] = N
                        }
                    }
                    if (this.parseCount == a) {
                        for (e = 0; e < r.length; e++) i = r[e], i.dataProvider && this.parseGraphData(i);
                        this.dataChanged = !1, this.dispatchDataUpdated = !0, this.onDataUpdated()
                    }
                },
                processValues: function (e, i, s) {
                    var a, r = {},
                        n = !1;
                    "candlestick" != i.type && "ohlc" != i.type || "" === s || (n = !0);
                    for (var o = "value error open close low high".split(" "), h = 0; h < o.length; h++) {
                        var l = o[h];
                        "value" != l && "error" != l && n && (s = l.charAt(0).toUpperCase() + l.slice(1));
                        var d = e[i[l + "Field"] + s];
                        null !== d && (a = Number(d), isNaN(a) || (r[l] = a), "date" == i.valueAxis.type && void 0 !== d && (a = t.getDate(d, i.chart.dataDateFormat), r[l] = a.getTime()))
                    }
                    return r
                },
                parseGraphData: function (t) {
                    var e = t.dataProvider,
                        i = t.seriesIdField;
                    i || (i = this.seriesIdField), i || (i = this.categoryField);
                    var s;
                    for (s = 0; s < e.length; s++) {
                        var a = e[s],
                            r = this.lookupTable[String(a[i])],
                            n = t.valueAxis.id;
                        r && (n = r.axes[n].graphs[t.id], n.serialDataItem = r, n.values = this.processValues(a, t, t.periodValue), this.processFields(t, n, a))
                    }
                },
                addValueAxis: function (t) {
                    t.chart = this, this.valueAxes.push(t), this.validateData()
                },
                removeValueAxesAndGraphs: function () {
                    var t, e = this.valueAxes;
                    for (t = e.length - 1; - 1 < t; t--) this.removeValueAxis(e[t])
                },
                removeValueAxis: function (t) {
                    var e, i = this.graphs;
                    for (e = i.length - 1; 0 <= e; e--) {
                        var s = i[e];
                        s && s.valueAxis == t && this.removeGraph(s)
                    }
                    for (i = this.valueAxes, e = i.length - 1; 0 <= e; e--) i[e] == t && i.splice(e, 1);
                    this.validateData()
                },
                addGraph: function (t) {
                    this.graphs.push(t), this.chooseGraphColor(t, this.graphs.length - 1), this.validateData()
                },
                removeGraph: function (t) {
                    var e, i = this.graphs;
                    for (e = i.length - 1; 0 <= e; e--) i[e] == t && (i.splice(e, 1), t.destroy());
                    this.validateData()
                },
                handleValueAxisZoom: function () {},
                processValueAxes: function () {
                    var e, i = this.valueAxes;
                    for (e = 0; e < i.length; e++) {
                        var s = i[e],
                            s = t.processObject(s, t.ValueAxis, this.theme);
                        i[e] = s, s.chart = this, s.init(), this.listenTo(s, "axisIntZoomed", this.handleValueAxisZoom), s.id || (s.id = "valueAxisAuto" + e + "_" + (new Date).getTime()), void 0 === s.usePrefixes && (s.usePrefixes = this.usePrefixes)
                    }
                },
                processGuides: function () {
                    var e = this.guides,
                        i = this.categoryAxis;
                    if (e)
                        for (var s = 0; s < e.length; s++) {
                            var a = e[s];
                            (void 0 !== a.category || void 0 !== a.date) && i && i.addGuide(a), a.id || (a.id = "guideAuto" + s + "_" + (new Date).getTime());
                            var r = a.valueAxis;
                            r ? (t.isString(r) && (r = this.getValueAxisById(r)), r ? r.addGuide(a) : this.valueAxes[0].addGuide(a)) : isNaN(a.value) || this.valueAxes[0].addGuide(a)
                        }
                },
                processGraphs: function () {
                    var e, i = this.graphs;
                    for (this.graphsById = {}, e = 0; e < i.length; e++) {
                        var s = i[e],
                            s = t.processObject(s, t.AmGraph, this.theme);
                        i[e] = s, this.chooseGraphColor(s, e), s.chart = this, s.init(), t.isString(s.valueAxis) && (s.valueAxis = this.getValueAxisById(s.valueAxis)), s.valueAxis || (s.valueAxis = this.valueAxes[0]), s.id || (s.id = "graphAuto" + e + "_" + (new Date).getTime()), this.graphsById[s.id] = s
                    }
                },
                formatString: function (e, i, s) {
                    var a = i.graph,
                        r = a.valueAxis;
                    return r.duration && i.values.value && (r = t.formatDuration(i.values.value, r.duration, "", r.durationUnits, r.maxInterval, r.numberFormatter), e = e.split("[[value]]").join(r)), e = t.massReplace(e, {
                        "[[title]]": a.title,
                        "[[description]]": i.description
                    }), e = s ? t.fixNewLines(e) : t.fixBrakes(e), e = t.cleanFromEmpty(e)
                },
                getBalloonColor: function (e, i, s) {
                    var a = e.lineColor,
                        r = e.balloonColor;
                    return s && (r = a), s = e.fillColorsR, "object" == typeof s ? a = s[0] : void 0 !== s && (a = s), i.isNegative && (s = e.negativeLineColor, e = e.negativeFillColors, "object" == typeof e ? s = e[0] : void 0 !== e && (s = e), void 0 !== s && (a = s)), void 0 !== i.color && (a = i.color), void 0 !== i.lineColor && (a = i.lineColor), i = i.fillColors, void 0 !== i && (a = i, t.ifArray(i) && (a = i[0])), void 0 === r && (r = a), r
                },
                getGraphById: function (e) {
                    return t.getObjById(this.graphs, e)
                },
                getValueAxisById: function (e) {
                    return t.getObjById(this.valueAxes, e)
                },
                processFields: function (e, i, s) {
                    if (e.itemColors) {
                        var a = e.itemColors,
                            r = i.index;
                        i.color = r < a.length ? a[r] : t.randomColor()
                    }
                    for (a = "lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className columnIndex".split(" "), r = 0; r < a.length; r++) {
                        var n = a[r],
                            o = e[n + "Field"];
                        o && (o = s[o], t.isDefined(o) && (i[n] = o))
                    }
                    i.dataContext = s
                },
                chooseGraphColor: function (e, i) {
                    if (e.lineColor) e.lineColorR = e.lineColor;
                    else {
                        var s;
                        s = this.colors.length > i ? this.colors[i] : e.lineColorR ? e.lineColorR : t.randomColor(), e.lineColorR = s
                    }
                    e.fillColorsR = e.fillColors ? e.fillColors : e.lineColorR, e.bulletBorderColorR = e.bulletBorderColor ? e.bulletBorderColor : e.useLineColorForBulletBorder ? e.lineColorR : e.bulletColor, e.bulletColorR = e.bulletColor ? e.bulletColor : e.lineColorR, (s = this.patterns) && (e.pattern = s[i])
                },
                handleLegendEvent: function (t) {
                    var e = t.type;
                    if (t = t.dataItem) {
                        var i = t.hidden,
                            s = t.showBalloon;
                        switch (e) {
                            case "clickMarker":
                                this.textClickEnabled && (s ? this.hideGraphsBalloon(t) : this.showGraphsBalloon(t));
                                break;
                            case "clickLabel":
                                s ? this.hideGraphsBalloon(t) : this.showGraphsBalloon(t);
                                break;
                            case "rollOverItem":
                                i || this.highlightGraph(t);
                                break;
                            case "rollOutItem":
                                i || this.unhighlightGraph();
                                break;
                            case "hideItem":
                                this.hideGraph(t);
                                break;
                            case "showItem":
                                this.showGraph(t)
                        }
                    }
                },
                highlightGraph: function (t) {
                    var e = this.graphs;
                    if (e) {
                        var i, s = .2;
                        if (this.legend && (s = this.legend.rollOverGraphAlpha), 1 != s)
                            for (i = 0; i < e.length; i++) {
                                var a = e[i];
                                a != t && a.changeOpacity(s)
                            }
                    }
                },
                unhighlightGraph: function () {
                    var t;
                    if (this.legend && (t = this.legend.rollOverGraphAlpha), 1 != t) {
                        t = this.graphs;
                        var e;
                        for (e = 0; e < t.length; e++) t[e].changeOpacity(1)
                    }
                },
                showGraph: function (t) {
                    t.switchable && (t.hidden = !1, this.dataChanged = !0, "xy" != this.type && (this.marginsUpdated = !1), this.chartCreated && this.initChart())
                },
                hideGraph: function (t) {
                    t.switchable && (this.dataChanged = !0, "xy" != this.type && (this.marginsUpdated = !1), t.hidden = !0, this.chartCreated && this.initChart())
                },
                hideGraphsBalloon: function (t) {
                    t.showBalloon = !1, this.updateLegend()
                },
                showGraphsBalloon: function (t) {
                    t.showBalloon = !0, this.updateLegend()
                },
                updateLegend: function () {
                    this.legend && this.legend.invalidateSize()
                },
                resetAnimation: function () {
                    this.animatable = [];
                    var t = this.graphs;
                    if (t) {
                        var e;
                        for (e = 0; e < t.length; e++) t[e].animationPlayed = !1
                    }
                },
                animateAgain: function () {
                    this.resetAnimation(), this.validateNow()
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.TrendLine = t.Class({
                construct: function (e) {
                    this.cname = "TrendLine", this.createEvents("click", "rollOver", "rollOut"), this.isProtected = !1, this.dashLength = 0, this.lineColor = "#00CC00", this.lineThickness = this.lineAlpha = 1, t.applyTheme(this, e, this.cname)
                },
                draw: function () {
                    var e = this;
                    e.destroy();
                    var i, s, a, r, n = e.chart,
                        o = n.container,
                        h = e.categoryAxis,
                        l = e.initialDate,
                        d = e.initialCategory,
                        u = e.finalDate,
                        c = e.finalCategory,
                        p = e.valueAxis,
                        m = e.valueAxisX,
                        f = e.initialXValue,
                        g = e.finalXValue,
                        v = e.initialValue,
                        b = e.finalValue,
                        x = p.recalculateToPercents,
                        y = n.dataDateFormat;
                    h && (l && (l = t.getDate(l, y, "fff"), e.initialDate = l, i = h.dateToCoordinate(l)), d && (i = h.categoryToCoordinate(d)), u && (u = t.getDate(u, y, "fff"), e.finalDate = u, s = h.dateToCoordinate(u)), c && (s = h.categoryToCoordinate(c))), m && !x && (isNaN(f) || (i = m.getCoordinate(f)), isNaN(g) || (s = m.getCoordinate(g))), p && !x && (isNaN(v) || (a = p.getCoordinate(v)), isNaN(b) || (r = p.getCoordinate(b))), isNaN(i) || isNaN(s) || isNaN(a) || isNaN(a) || (n.rotate ? (h = [a, r], r = [i, s]) : (h = [i, s], r = [a, r]), a = t.line(o, h, r, e.lineColor, e.lineAlpha, e.lineThickness, e.dashLength), i = h, s = r, u = h[1] - h[0], c = r[1] - r[0], 0 === u && (u = .01), 0 === c && (c = .01), l = u / Math.abs(u), d = c / Math.abs(c), c = 90 * Math.PI / 180 - Math.asin(u / (u * c / Math.abs(u * c) * Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2)))), u = Math.abs(5 * Math.cos(c)), c = Math.abs(5 * Math.sin(c)), i.push(h[1] - l * c, h[0] - l * c), s.push(r[1] + d * u, r[0] + d * u), r = t.polygon(o, i, s, "#ffffff", .005, 0), o = o.set([r, a]), o.translate(n.marginLeftReal, n.marginTopReal), n.trendLinesSet.push(o), t.setCN(n, a, "trend-line"), t.setCN(n, a, "trend-line-" + e.id), e.line = a, e.set = o, (a = e.initialImage) && (a = t.processObject(a, t.Image, e.theme), a.chart = n, a.draw(), a.translate(i[0] + a.offsetX, s[0] + a.offsetY), o.push(a.set)), (a = e.finalImage) && (a = t.processObject(a, t.Image, e.theme), a.chart = n, a.draw(), a.translate(i[1] + a.offsetX, s[1] + a.offsetY), o.push(a.set)), o.mouseup(function () {
                        e.handleLineClick()
                    }).mouseover(function () {
                        e.handleLineOver()
                    }).mouseout(function () {
                        e.handleLineOut()
                    }), o.touchend && o.touchend(function () {
                        e.handleLineClick()
                    }), o.clipRect(0, 0, n.plotAreaWidth, n.plotAreaHeight))
                },
                handleLineClick: function () {
                    this.fire({
                        type: "click",
                        trendLine: this,
                        chart: this.chart
                    })
                },
                handleLineOver: function () {
                    var t = this.rollOverColor;
                    void 0 !== t && this.line.attr({
                        stroke: t
                    }), this.balloonText && (clearTimeout(this.chart.hoverInt), t = this.line.getBBox(), this.chart.showBalloon(this.balloonText, this.lineColor, !0, this.x + t.x + t.width / 2, this.y + t.y + t.height / 2)), this.fire({
                        type: "rollOver",
                        trendLine: this,
                        chart: this.chart
                    })
                },
                handleLineOut: function () {
                    this.line.attr({
                        stroke: this.lineColor
                    }), this.balloonText && this.chart.hideBalloon(), this.fire({
                        type: "rollOut",
                        trendLine: this,
                        chart: this.chart
                    })
                },
                destroy: function () {
                    t.remove(this.set)
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.Image = t.Class({
                construct: function (e) {
                    this.cname = "Image", this.height = this.width = 20, this.rotation = this.offsetY = this.offsetX = 0, this.balloonColor = this.color = "#000000", this.opacity = 1, t.applyTheme(this, e, this.cname)
                },
                draw: function () {
                    var t = this;
                    t.set && t.set.remove();
                    var e = t.chart.container;
                    t.set = e.set();
                    var i, s;
                    t.url ? (i = e.image(t.url, 0, 0, t.width, t.height), s = 1) : t.svgPath && (i = e.path(t.svgPath), i.setAttr("fill", t.color), i.setAttr("stroke", t.outlineColor), e = i.getBBox(), s = Math.min(t.width / e.width, t.height / e.height)), i && (i.setAttr("opacity", t.opacity), t.set.rotate(t.rotation), i.translate(-t.width / 2, -t.height / 2, s), t.balloonText && i.mouseover(function () {
                        t.chart.showBalloon(t.balloonText, t.balloonColor, !0)
                    }).mouseout(function () {
                        t.chart.hideBalloon()
                    }).touchend(function () {
                        t.chart.hideBalloon()
                    }).touchstart(function () {
                        t.chart.showBalloon(t.balloonText, t.balloonColor, !0)
                    }), t.set.push(i))
                },
                translate: function (t, e) {
                    this.set && this.set.translate(t, e)
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.circle = function (e, i, s, a, r, n, o, h, l) {
                return 0 >= i && (i = .001), void 0 != r && 0 !== r || (r = .01), void 0 === n && (n = "#000000"), void 0 === o && (o = 0), a = {
                    fill: s,
                    stroke: n,
                    "fill-opacity": a,
                    "stroke-width": r,
                    "stroke-opacity": o
                }, e = isNaN(l) ? e.circle(0, 0, i).attr(a) : e.ellipse(0, 0, i, l).attr(a), h && e.gradient("radialGradient", [s, t.adjustLuminosity(s, -.6)]), e
            }, t.text = function (e, i, s, a, r, n, o, h) {
                return n || (n = "middle"), "right" == n && (n = "end"), "left" == n && (n = "start"), isNaN(h) && (h = 1), void 0 !== i && (i = String(i), t.isIE && !t.isModern && (i = i.replace("&amp;", "&"), i = i.replace("&", "&amp;"))), s = {
                    fill: s,
                    "font-family": a,
                    "font-size": r + "px",
                    opacity: h
                }, !0 === o && (s["font-weight"] = "bold"), s["text-anchor"] = n, e.text(i, s)
            }, t.polygon = function (e, i, s, a, r, n, o, h, l, d, u) {
                isNaN(n) && (n = .01), isNaN(h) && (h = r);
                var c = a,
                    p = !1;
                for ("object" == typeof c && 1 < c.length && (p = !0, c = c[0]), void 0 === o && (o = c), r = {
                        fill: c,
                        stroke: o,
                        "fill-opacity": r,
                        "stroke-width": n,
                        "stroke-opacity": h
                    }, void 0 !== u && 0 < u && (r["stroke-dasharray"] = u), u = t.dx, n = t.dy, e.handDrawn && (s = t.makeHD(i, s, e.handDrawScatter), i = s[0], s = s[1]), o = Math.round, d && (o = Number), h = "M" + (o(i[0]) + u) + "," + (o(s[0]) + n), c = 1; c < i.length; c++) d && (i[c] = t.roundTo(i[c], 5), s[c] = t.roundTo(s[c], 5)), h += " L" + (o(i[c]) + u) + "," + (o(s[c]) + n);
                return e = e.path(h + " Z").attr(r), p && e.gradient("linearGradient", a, l), e
            }, t.rect = function (e, i, s, a, r, n, o, h, l, d, u) {
                if (isNaN(i) || isNaN(s)) return e.set();
                isNaN(n) && (n = 0), void 0 === l && (l = 0), void 0 === d && (d = 270), isNaN(r) && (r = 0);
                var c = a,
                    p = !1;
                "object" == typeof c && (c = c[0], p = !0), void 0 === o && (o = c), void 0 === h && (h = r), i = Math.round(i), s = Math.round(s);
                var m = 0,
                    f = 0;
                return 0 > i && (i = Math.abs(i), m = -i), 0 > s && (s = Math.abs(s), f = -s), m += t.dx, f += t.dy, r = {
                    fill: c,
                    stroke: o,
                    "fill-opacity": r,
                    "stroke-opacity": h
                }, void 0 !== u && 0 < u && (r["stroke-dasharray"] = u), e = e.rect(m, f, i, s, l, n).attr(r), p && e.gradient("linearGradient", a, d), e
            }, t.bullet = function (e, i, s, a, r, n, o, h, l, d, u, c, p) {
                var m;
                switch ("circle" == i && (i = "round"), i) {
                    case "round":
                        m = t.circle(e, s / 2, a, r, n, o, h);
                        break;
                    case "square":
                        m = t.polygon(e, [-s / 2, s / 2, s / 2, -s / 2], [s / 2, s / 2, -s / 2, -s / 2], a, r, n, o, h, d - 180, void 0, p);
                        break;
                    case "rectangle":
                        m = t.polygon(e, [-s, s, s, -s], [s / 2, s / 2, -s / 2, -s / 2], a, r, n, o, h, d - 180, void 0, p);
                        break;
                    case "diamond":
                        m = t.polygon(e, [-s / 2, 0, s / 2, 0], [0, -s / 2, 0, s / 2], a, r, n, o, h);
                        break;
                    case "triangleUp":
                        m = t.triangle(e, s, 0, a, r, n, o, h);
                        break;
                    case "triangleDown":
                        m = t.triangle(e, s, 180, a, r, n, o, h);
                        break;
                    case "triangleLeft":
                        m = t.triangle(e, s, 270, a, r, n, o, h);
                        break;
                    case "triangleRight":
                        m = t.triangle(e, s, 90, a, r, n, o, h);
                        break;
                    case "bubble":
                        m = t.circle(e, s / 2, a, r, n, o, h, !0);
                        break;
                    case "line":
                        m = t.line(e, [-s / 2, s / 2], [0, 0], a, r, n, o, h);
                        break;
                    case "yError":
                        m = e.set(), m.push(t.line(e, [0, 0], [-s / 2, s / 2], a, r, n)), m.push(t.line(e, [-l, l], [-s / 2, -s / 2], a, r, n)), m.push(t.line(e, [-l, l], [s / 2, s / 2], a, r, n));
                        break;
                    case "xError":
                        m = e.set(), m.push(t.line(e, [-s / 2, s / 2], [0, 0], a, r, n)), m.push(t.line(e, [-s / 2, -s / 2], [-l, l], a, r, n)), m.push(t.line(e, [s / 2, s / 2], [-l, l], a, r, n))
                }
                return m && m.pattern(u, NaN, c), m
            }, t.triangle = function (t, e, i, s, a, r, n, o) {
                void 0 !== r && 0 !== r || (r = 1), void 0 === n && (n = "#000"), void 0 === o && (o = 0), s = {
                    fill: s,
                    stroke: n,
                    "fill-opacity": a,
                    "stroke-width": r,
                    "stroke-opacity": o
                }, e /= 2;
                var h;
                return 0 === i && (h = " M" + -e + "," + e + " L0," + -e + " L" + e + "," + e + " Z"), 180 == i && (h = " M" + -e + "," + -e + " L0," + e + " L" + e + "," + -e + " Z"), 90 == i && (h = " M" + -e + "," + -e + " L" + e + ",0 L" + -e + "," + e + " Z"), 270 == i && (h = " M" + -e + ",0 L" + e + "," + e + " L" + e + "," + -e + " Z"), t.path(h).attr(s)
            }, t.line = function (e, i, s, a, r, n, o, h, l, d, u) {
                if (e.handDrawn && !u) return t.handDrawnLine(e, i, s, a, r, n, o, h, l, d, u);
                for (n = {
                        fill: "none",
                        "stroke-width": n
                    }, void 0 !== o && 0 < o && (n["stroke-dasharray"] = o), isNaN(r) || (n["stroke-opacity"] = r), a && (n.stroke = a), a = Math.round, d && (a = Number, i[0] = t.roundTo(i[0], 5), s[0] = t.roundTo(s[0], 5)), d = t.dx, r = t.dy, o = "M" + (a(i[0]) + d) + "," + (a(s[0]) + r), h = 1; h < i.length; h++) i[h] = t.roundTo(i[h], 5), s[h] = t.roundTo(s[h], 5), o += " L" + (a(i[h]) + d) + "," + (a(s[h]) + r);
                return t.VML ? e.path(o, void 0, !0).attr(n) : (l && (o += " M0,0 L0,0"), e.path(o).attr(n))
            }, t.makeHD = function (t, e, i) {
                for (var s = [], a = [], r = 1; r < t.length; r++)
                    for (var n = Number(t[r - 1]), o = Number(e[r - 1]), h = Number(t[r]), l = Number(e[r]), d = Math.round(Math.sqrt(Math.pow(h - n, 2) + Math.pow(l - o, 2)) / 50) + 1, h = (h - n) / d, l = (l - o) / d, u = 0; u <= d; u++) {
                        var c = o + u * l + Math.random() * i;
                        s.push(n + u * h + Math.random() * i), a.push(c)
                    }
                return [s, a]
            }, t.handDrawnLine = function (e, i, s, a, r, n, o, h, l, d) {
                var u, c = e.set();
                for (u = 1; u < i.length; u++)
                    for (var p = [i[u - 1], i[u]], m = [s[u - 1], s[u]], m = t.makeHD(p, m, e.handDrawScatter), p = m[0], m = m[1], f = 1; f < p.length; f++) c.push(t.line(e, [p[f - 1], p[f]], [m[f - 1], m[f]], a, r, n + Math.random() * e.handDrawThickness - e.handDrawThickness / 2, o, h, l, d, !0));
                return c
            }, t.doNothing = function (t) {
                return t
            }, t.drop = function (t, e, i, s, a, r, n, o) {
                var h = 1 / 180 * Math.PI,
                    l = i - 20,
                    d = Math.sin(l * h) * e,
                    u = Math.cos(l * h) * e,
                    c = Math.sin((l + 40) * h) * e,
                    p = Math.cos((l + 40) * h) * e,
                    m = .8 * e,
                    f = -e / 3,
                    g = e / 3;
                return 0 === i && (f = -f, g = 0), 180 == i && (g = 0), 90 == i && (f = 0), 270 == i && (f = 0, g = -g), i = {
                    fill: s,
                    stroke: n,
                    "stroke-width": r,
                    "stroke-opacity": o,
                    "fill-opacity": a
                }, e = "M" + d + "," + u + " A" + e + "," + e + ",0,1,1," + c + "," + p + " A" + m + "," + m + ",0,0,0," + (Math.sin((l + 20) * h) * e + g) + "," + (Math.cos((l + 20) * h) * e + f), e += " A" + m + "," + m + ",0,0,0," + d + "," + u, t.path(e, void 0, void 0, "1000,1000").attr(i)
            }, t.wedge = function (e, i, s, a, r, n, o, h, l, d, u, c, p, m) {
                var f = Math.round;
                n = f(n), o = f(o), h = f(h);
                var g = f(o / n * h),
                    v = t.VML,
                    b = 359.5 + n / 100;
                359.94 < b && (b = 359.94), r >= b && (r = b);
                var x = 1 / 180 * Math.PI,
                    b = i + Math.sin(a * x) * h,
                    y = s - Math.cos(a * x) * g,
                    C = i + Math.sin(a * x) * n,
                    N = s - Math.cos(a * x) * o,
                    w = i + Math.sin((a + r) * x) * n,
                    M = s - Math.cos((a + r) * x) * o,
                    A = i + Math.sin((a + r) * x) * h,
                    x = s - Math.cos((a + r) * x) * g,
                    S = {
                        fill: t.adjustLuminosity(d.fill, -.2),
                        "stroke-opacity": 0,
                        "fill-opacity": d["fill-opacity"]
                    },
                    T = 0;
                180 < Math.abs(r) && (T = 1), a = e.set();
                var D;
                v && (b = f(10 * b), C = f(10 * C), w = f(10 * w), A = f(10 * A), y = f(10 * y), N = f(10 * N), M = f(10 * M), x = f(10 * x), i = f(10 * i), l = f(10 * l), s = f(10 * s), n *= 10, o *= 10, h *= 10, g *= 10, 1 > Math.abs(r) && 1 >= Math.abs(w - C) && 1 >= Math.abs(M - N) && (D = !0)), r = "";
                var L;
                if (c && (S["fill-opacity"] = 0, S["stroke-opacity"] = d["stroke-opacity"] / 2, S.stroke = d.stroke), 0 < l) {
                    L = " M" + b + "," + (y + l) + " L" + C + "," + (N + l), v ? (D || (L += " A" + (i - n) + "," + (l + s - o) + "," + (i + n) + "," + (l + s + o) + "," + C + "," + (N + l) + "," + w + "," + (M + l)), L += " L" + A + "," + (x + l), 0 < h && (D || (L += " B" + (i - h) + "," + (l + s - g) + "," + (i + h) + "," + (l + s + g) + "," + A + "," + (l + x) + "," + b + "," + (l + y)))) : (L += " A" + n + "," + o + ",0," + T + ",1," + w + "," + (M + l) + " L" + A + "," + (x + l), 0 < h && (L += " A" + h + "," + g + ",0," + T + ",0," + b + "," + (y + l))), L += " Z";
                    var k = l;
                    v && (k /= 10);
                    for (var B = 0; B < k; B += 10) {
                        var O = e.path(L, void 0, void 0, "1000,1000").attr(S);
                        a.push(O), O.translate(0, -B)
                    }
                    L = e.path(" M" + b + "," + y + " L" + b + "," + (y + l) + " L" + C + "," + (N + l) + " L" + C + "," + N + " L" + b + "," + y + " Z", void 0, void 0, "1000,1000").attr(S), l = e.path(" M" + w + "," + M + " L" + w + "," + (M + l) + " L" + A + "," + (x + l) + " L" + A + "," + x + " L" + w + "," + M + " Z", void 0, void 0, "1000,1000").attr(S), a.push(L), a.push(l)
                }
                if (v ? (D || (r = " A" + f(i - n) + "," + f(s - o) + "," + f(i + n) + "," + f(s + o) + "," + f(C) + "," + f(N) + "," + f(w) + "," + f(M)), o = " M" + f(b) + "," + f(y) + " L" + f(C) + "," + f(N) + r + " L" + f(A) + "," + f(x)) : o = " M" + b + "," + y + " L" + C + "," + N + " A" + n + "," + o + ",0," + T + ",1," + w + "," + M + " L" + A + "," + x, 0 < h && (v ? D || (o += " B" + (i - h) + "," + (s - g) + "," + (i + h) + "," + (s + g) + "," + A + "," + x + "," + b + "," + y) : o += " A" + h + "," + g + ",0," + T + ",0," + b + "," + y), e.handDrawn && (h = t.line(e, [b, C], [y, N], d.stroke, d.thickness * Math.random() * e.handDrawThickness, d["stroke-opacity"]), a.push(h)), e = e.path(o + " Z", void 0, void 0, "1000,1000").attr(d), u) {
                    for (h = [], g = 0; g < u.length; g++) h.push(t.adjustLuminosity(d.fill, u[g]));
                    "radial" != m || t.isModern || (h = []), 0 < h.length && e.gradient(m + "Gradient", h)
                }
                return t.isModern && "radial" == m && e.grad && (e.grad.setAttribute("gradientUnits", "userSpaceOnUse"), e.grad.setAttribute("r", n), e.grad.setAttribute("cx", i), e.grad.setAttribute("cy", s)), e.pattern(c, NaN, p), a.wedge = e, a.push(e), a
            }, t.rgb2hex = function (t) {
                return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
            }, t.adjustLuminosity = function (e, i) {
                e && -1 != e.indexOf("rgb") && (e = t.rgb2hex(e)), e = String(e).replace(/[^0-9a-f]/gi, ""), 6 > e.length && (e = String(e[0]) + String(e[0]) + String(e[1]) + String(e[1]) + String(e[2]) + String(e[2])), i = i || 0;
                var s, a, r = "#";
                for (a = 0; 3 > a; a++) s = parseInt(e.substr(2 * a, 2), 16), s = Math.round(Math.min(Math.max(0, s + s * i), 255)).toString(16), r += ("00" + s).substr(s.length);
                return r
            }
        }(),
        function () {
            var t = window.AmCharts;
            t.Bezier = t.Class({
                construct: function (e, i, s, a, r, n, o, h, l, d, u) {
                    var c = e.chart,
                        p = t.bezierX,
                        m = t.bezierY;
                    isNaN(c.bezierX) || (p = c.bezierX), isNaN(c.bezierY) || (m = c.bezierY), isNaN(p) && (c.rotate ? (p = 20, m = 4) : (m = 20, p = 4));
                    var f, g;
                    for ("object" == typeof o && 1 < o.length && (g = !0, f = o, o = o[0]), "object" == typeof h && (h = h[0]), 0 === h && (o = "none"), n = {
                            fill: o,
                            "fill-opacity": h,
                            "stroke-width": n
                        }, void 0 !== l && 0 < l && (n["stroke-dasharray"] = l), isNaN(r) || (n["stroke-opacity"] = r), a && (n.stroke = a), a = "M" + Math.round(i[0]) + "," + Math.round(s[0]) + " ", r = [], l = 0; l < i.length; l++) isNaN(i[l]) || isNaN(s[l]) ? (a += this.drawSegment(r, p, m), l < i.length - 1 && (a += "L" + i[l + 1] + "," + s[l + 1] + " "), r = []) : r.push({
                        x: Number(i[l]),
                        y: Number(s[l])
                    });
                    a += this.drawSegment(r, p, m), d && (a += d), this.path = e.path(a).attr(n), this.node = this.path.node, g && this.path.gradient("linearGradient", f, u)
                },
                drawSegment: function (t, e, i) {
                    var s = "";
                    if (2 < t.length)
                        for (var a = 0; a < t.length - 1; a++) {
                            var r = [],
                                n = t[a - 1],
                                o = t[a],
                                h = t[a + 1],
                                l = t[a + 2];
                            0 === a ? (r.push({
                                x: o.x,
                                y: o.y
                            }), r.push({
                                x: o.x,
                                y: o.y
                            }), r.push({
                                x: h.x,
                                y: h.y
                            }), r.push({
                                x: l.x,
                                y: l.y
                            })) : a >= t.length - 2 ? (r.push({
                                x: n.x,
                                y: n.y
                            }), r.push({
                                x: o.x,
                                y: o.y
                            }), r.push({
                                x: h.x,
                                y: h.y
                            }), r.push({
                                x: h.x,
                                y: h.y
                            })) : (r.push({
                                x: n.x,
                                y: n.y
                            }), r.push({
                                x: o.x,
                                y: o.y
                            }), r.push({
                                x: h.x,
                                y: h.y
                            }), r.push({
                                x: l.x,
                                y: l.y
                            })), n = [], o = Math.round, n.push({
                                x: o(r[1].x),
                                y: o(r[1].y)
                            }), n.push({
                                x: o((-r[0].x + e * r[1].x + r[2].x) / e),
                                y: o((-r[0].y + i * r[1].y + r[2].y) / i)
                            }), n.push({
                                x: o((r[1].x + e * r[2].x - r[3].x) / e),
                                y: o((r[1].y + i * r[2].y - r[3].y) / i)
                            }), n.push({
                                x: o(r[2].x),
                                y: o(r[2].y)
                            }), s += "C" + n[1].x + "," + n[1].y + "," + n[2].x + "," + n[2].y + "," + n[3].x + "," + n[3].y + " "
                        } else 1 < t.length && (s += "L" + t[1].x + "," + t[1].y);
                    return s
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.AmDraw = t.Class({
                construct: function (e, i, s, a) {
                    t.SVG_NS = "http://www.w3.org/2000/svg", t.SVG_XLINK = "http://www.w3.org/1999/xlink", t.hasSVG = !!document.createElementNS && !!document.createElementNS(t.SVG_NS, "svg").createSVGRect, 1 > i && (i = 10), 1 > s && (s = 10), this.div = e, this.width = i, this.height = s, this.rBin = document.createElement("div"), t.hasSVG ? (t.SVG = !0, i = this.createSvgElement("svg"), e.appendChild(i), this.container = i, this.addDefs(a), this.R = new t.SVGRenderer(this)) : t.isIE && t.VMLRenderer && (t.VML = !0, t.vmlStyleSheet || (document.namespaces.add("amvml", "urn:schemas-microsoft-com:vml"), 31 > document.styleSheets.length ? (i = document.createStyleSheet(), i.addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true"), t.vmlStyleSheet = i) : document.styleSheets[0].addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true")), this.container = e, this.R = new t.VMLRenderer(this, a), this.R.disableSelection(e))
                },
                createSvgElement: function (e) {
                    return document.createElementNS(t.SVG_NS, e)
                },
                circle: function (e, i, s, a) {
                    var r = new t.AmDObject("circle", this);
                    return r.attr({
                        r: s,
                        cx: e,
                        cy: i
                    }), this.addToContainer(r.node, a), r
                },
                ellipse: function (e, i, s, a, r) {
                    var n = new t.AmDObject("ellipse", this);
                    return n.attr({
                        rx: s,
                        ry: a,
                        cx: e,
                        cy: i
                    }), this.addToContainer(n.node, r), n
                },
                setSize: function (t, e) {
                    0 < t && 0 < e && (this.container.style.width = t + "px", this.container.style.height = e + "px")
                },
                rect: function (e, i, s, a, r, n, o) {
                    var h = new t.AmDObject("rect", this);
                    return t.VML && (r = Math.round(100 * r / Math.min(s, a)), s += 2 * n, a += 2 * n, h.bw = n, h.node.style.marginLeft = -n, h.node.style.marginTop = -n), 1 > s && (s = 1), 1 > a && (a = 1), h.attr({
                        x: e,
                        y: i,
                        width: s,
                        height: a,
                        rx: r,
                        ry: r,
                        "stroke-width": n
                    }), this.addToContainer(h.node, o), h
                },
                image: function (e, i, s, a, r, n) {
                    var o = new t.AmDObject("image", this);
                    return o.attr({
                        x: i,
                        y: s,
                        width: a,
                        height: r
                    }), this.R.path(o, e), this.addToContainer(o.node, n), o
                },
                addToContainer: function (t, e) {
                    e || (e = this.container), e.appendChild(t)
                },
                text: function (t, e, i) {
                    return this.R.text(t, e, i)
                },
                path: function (e, i, s, a) {
                    var r = new t.AmDObject("path", this);
                    return a || (a = "100,100"), r.attr({
                        cs: a
                    }), s ? r.attr({
                        dd: e
                    }) : r.attr({
                        d: e
                    }), this.addToContainer(r.node, i), r
                },
                set: function (t) {
                    return this.R.set(t)
                },
                remove: function (t) {
                    if (t) {
                        var e = this.rBin;
                        e.appendChild(t), e.innerHTML = ""
                    }
                },
                renderFix: function () {
                    var t = this.container,
                        e = t.style;
                    e.top = "0px", e.left = "0px";
                    try {
                        var i = t.getBoundingClientRect(),
                            s = i.left - Math.round(i.left),
                            a = i.top - Math.round(i.top);
                        s && (e.left = s + "px"), a && (e.top = a + "px")
                    } catch (t) {}
                },
                update: function () {
                    this.R.update()
                },
                addDefs: function (e) {
                    if (t.hasSVG) {
                        var i = this.createSvgElement("desc"),
                            s = this.container;
                        if (s.setAttribute("version", "1.1"), s.style.position = "absolute", this.setSize(this.width, this.height), e.accessibleTitle) {
                            var a = this.createSvgElement("text");
                            s.appendChild(a), a.innerHTML = e.accessibleTitle, a.style.opacity = 0
                        }
                        t.rtl && (s.setAttribute("direction", "rtl"), s.style.left = "auto", s.style.right = "0px"), e && (e.addCodeCredits && i.appendChild(document.createTextNode("JavaScript chart by amCharts " + e.version)), e.accessibleDescription && (i.innerHTML = "", i.appendChild(document.createTextNode(e.accessibleDescription))), s.appendChild(i), e.defs && (i = this.createSvgElement("defs"), s.appendChild(i), t.parseDefs(e.defs, i), this.defs = i))
                    }
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.AmDObject = t.Class({
                construct: function (t, e) {
                    this.D = e, this.R = e.R, this.node = this.R.create(this, t), this.y = this.x = 0, this.scale = 1
                },
                attr: function (t) {
                    return this.R.attr(this, t), this
                },
                getAttr: function (t) {
                    return this.node.getAttribute(t)
                },
                setAttr: function (t, e) {
                    return this.R.setAttr(this, t, e), this
                },
                clipRect: function (t, e, i, s) {
                    this.R.clipRect(this, t, e, i, s)
                },
                translate: function (t, e, i, s) {
                    s || (t = Math.round(t), e = Math.round(e)), this.R.move(this, t, e, i), this.x = t, this.y = e, this.scale = i, this.angle && this.rotate(this.angle)
                },
                rotate: function (t, e) {
                    this.R.rotate(this, t, e), this.angle = t
                },
                animate: function (e, i, s) {
                    for (var a in e)
                        if (e.hasOwnProperty(a)) {
                            var r = a,
                                n = e[a];
                            s = t.getEffect(s), this.R.animate(this, r, n, i, s)
                        }
                },
                push: function (t) {
                    if (t) {
                        var e = this.node;
                        e.appendChild(t.node);
                        var i = t.clipPath;
                        i && e.appendChild(i), (t = t.grad) && e.appendChild(t)
                    }
                },
                text: function (t) {
                    this.R.setText(this, t)
                },
                remove: function () {
                    this.stop(), this.R.remove(this)
                },
                clear: function () {
                    var t = this.node;
                    if (t.hasChildNodes())
                        for (; 1 <= t.childNodes.length;) t.removeChild(t.firstChild)
                },
                hide: function () {
                    this.setAttr("visibility", "hidden")
                },
                show: function () {
                    this.setAttr("visibility", "visible")
                },
                getBBox: function () {
                    return this.R.getBBox(this)
                },
                toFront: function () {
                    var t = this.node;
                    if (t) {
                        this.prevNextNode = t.nextSibling;
                        var e = t.parentNode;
                        e && e.appendChild(t)
                    }
                },
                toPrevious: function () {
                    var t = this.node;
                    t && this.prevNextNode && (t = t.parentNode) && t.insertBefore(this.prevNextNode, null)
                },
                toBack: function () {
                    var t = this.node;
                    if (t) {
                        this.prevNextNode = t.nextSibling;
                        var e = t.parentNode;
                        if (e) {
                            var i = e.firstChild;
                            i && e.insertBefore(t, i)
                        }
                    }
                },
                mouseover: function (t) {
                    return this.R.addListener(this, "mouseover", t), this
                },
                mouseout: function (t) {
                    return this.R.addListener(this, "mouseout", t), this
                },
                click: function (t) {
                    return this.R.addListener(this, "click", t), this
                },
                dblclick: function (t) {
                    return this.R.addListener(this, "dblclick", t), this
                },
                mousedown: function (t) {
                    return this.R.addListener(this, "mousedown", t), this
                },
                mouseup: function (t) {
                    return this.R.addListener(this, "mouseup", t), this
                },
                touchmove: function (t) {
                    return this.R.addListener(this, "touchmove", t), this
                },
                touchstart: function (t) {
                    return this.R.addListener(this, "touchstart", t), this
                },
                touchend: function (t) {
                    return this.R.addListener(this, "touchend", t), this
                },
                keyup: function (t) {
                    return this.R.addListener(this, "keyup", t), this
                },
                focus: function (t) {
                    return this.R.addListener(this, "focus", t), this
                },
                blur: function (t) {
                    return this.R.addListener(this, "blur", t), this
                },
                contextmenu: function (t) {
                    return this.node.addEventListener ? this.node.addEventListener("contextmenu", t, !0) : this.R.addListener(this, "contextmenu", t), this
                },
                stop: function () {
                    t.removeFromArray(this.R.animations, this.an_translate), t.removeFromArray(this.R.animations, this.an_y), t.removeFromArray(this.R.animations, this.an_x)
                },
                length: function () {
                    return this.node.childNodes.length
                },
                gradient: function (t, e, i) {
                    this.R.gradient(this, t, e, i)
                },
                pattern: function (t, e, i) {
                    t && this.R.pattern(this, t, e, i)
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.VMLRenderer = t.Class({
                construct: function (t, e) {
                    this.chart = e, this.D = t, this.cNames = {
                        circle: "oval",
                        ellipse: "oval",
                        rect: "roundrect",
                        path: "shape"
                    }, this.styleMap = {
                        x: "left",
                        y: "top",
                        width: "width",
                        height: "height",
                        "font-family": "fontFamily",
                        "font-size": "fontSize",
                        visibility: "visibility"
                    }
                },
                create: function (t, e) {
                    var i;
                    if ("group" == e) i = document.createElement("div"), t.type = "div";
                    else if ("text" == e) i = document.createElement("div"), t.type = "text";
                    else if ("image" == e) i = document.createElement("img"), t.type = "image";
                    else {
                        t.type = "shape", t.shapeType = this.cNames[e], i = document.createElement("amvml:" + this.cNames[e]);
                        var s = document.createElement("amvml:stroke");
                        i.appendChild(s), t.stroke = s;
                        var a = document.createElement("amvml:fill");
                        i.appendChild(a), t.fill = a, a.className = "amvml", s.className = "amvml", i.className = "amvml"
                    }
                    return i.style.position = "absolute", i.style.top = 0, i.style.left = 0, i
                },
                path: function (t, e) {
                    t.node.setAttribute("src", e)
                },
                setAttr: function (e, i, s) {
                    if (void 0 !== s) {
                        var a;
                        8 === document.documentMode && (a = !0);
                        var r = e.node,
                            n = e.type,
                            o = r.style;
                        "r" == i && (o.width = 2 * s, o.height = 2 * s), "oval" == e.shapeType && ("rx" == i && (o.width = 2 * s), "ry" == i && (o.height = 2 * s)), "roundrect" == e.shapeType && ("width" != i && "height" != i || --s), "cursor" == i && (o.cursor = s), "cx" == i && (o.left = s - t.removePx(o.width) / 2), "cy" == i && (o.top = s - t.removePx(o.height) / 2);
                        var h = this.styleMap[i];
                        if ("width" == h && 0 > s && (s = 0), void 0 !== h && (o[h] = s), "text" == n && ("text-anchor" == i && (e.anchor = s, h = r.clientWidth, "end" == s && (o.marginLeft = -h + "px"), "middle" == s && (o.marginLeft = -h / 2 + "px", o.textAlign = "center"), "start" == s && (o.marginLeft = "0px")), "fill" == i && (o.color = s), "font-weight" == i && (o.fontWeight = s)), o = e.children)
                            for (h = 0; h < o.length; h++) o[h].setAttr(i, s);
                        "shape" == n && ("cs" == i && (r.style.width = "100px", r.style.height = "100px", r.setAttribute("coordsize", s)), "d" == i && r.setAttribute("path", this.svgPathToVml(s)), "dd" == i && r.setAttribute("path", s), n = e.stroke, e = e.fill, "stroke" == i && (a ? n.color = s : n.setAttribute("color", s)), "stroke-width" == i && (a ? n.weight = s : n.setAttribute("weight", s)), "stroke-opacity" == i && (a ? n.opacity = s : n.setAttribute("opacity", s)), "stroke-dasharray" == i && (o = "solid", 0 < s && 3 > s && (o = "dot"), 3 <= s && 6 >= s && (o = "dash"), 6 < s && (o = "longdash"), a ? n.dashstyle = o : n.setAttribute("dashstyle", o)), "fill-opacity" != i && "opacity" != i || (0 === s ? a ? e.on = !1 : e.setAttribute("on", !1) : a ? e.opacity = s : e.setAttribute("opacity", s)), "fill" == i && (a ? e.color = s : e.setAttribute("color", s)), "rx" == i && (a ? r.arcSize = s + "%" : r.setAttribute("arcsize", s + "%")))
                    }
                },
                attr: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && this.setAttr(t, i, e[i])
                },
                text: function (e, i, s) {
                    var a = new t.AmDObject("text", this.D),
                        r = a.node;
                    return r.style.whiteSpace = "pre", r.innerHTML = e, this.D.addToContainer(r, s), this.attr(a, i), a
                },
                getBBox: function (t) {
                    return this.getBox(t.node)
                },
                getBox: function (t) {
                    var e, i = t.offsetLeft,
                        s = t.offsetTop,
                        a = t.offsetWidth,
                        r = t.offsetHeight;
                    if (t.hasChildNodes()) {
                        var n, o, h;
                        for (h = 0; h < t.childNodes.length; h++) {
                            e = this.getBox(t.childNodes[h]);
                            var l = e.x;
                            isNaN(l) || (isNaN(n) ? n = l : l < n && (n = l));
                            var d = e.y;
                            isNaN(d) || (isNaN(o) ? o = d : d < o && (o = d)), l = e.width + l, isNaN(l) || (a = Math.max(a, l)), e = e.height + d, isNaN(e) || (r = Math.max(r, e))
                        }
                        0 > n && (i += n), 0 > o && (s += o)
                    }
                    return {
                        x: i,
                        y: s,
                        width: a,
                        height: r
                    }
                },
                setText: function (t, e) {
                    var i = t.node;
                    i && (i.innerHTML = e), this.setAttr(t, "text-anchor", t.anchor)
                },
                addListener: function (t, e, i) {
                    t.node["on" + e] = i
                },
                move: function (e, i, s) {
                    var a = e.node,
                        r = a.style;
                    "text" == e.type && (s -= t.removePx(r.fontSize) / 2 - 1), "oval" == e.shapeType && (i -= t.removePx(r.width) / 2, s -= t.removePx(r.height) / 2), e = e.bw, isNaN(e) || (i -= e, s -= e), isNaN(i) || isNaN(s) || (a.style.left = i + "px", a.style.top = s + "px")
                },
                svgPathToVml: function (t) {
                    var e = t.split(" ");
                    t = "";
                    var i, s, a = Math.round;
                    for (s = 0; s < e.length; s++) {
                        var r = e[s],
                            n = r.substring(0, 1),
                            r = r.substring(1),
                            o = r.split(","),
                            h = a(o[0]) + "," + a(o[1]);
                        if ("M" == n && (t += " m " + h), "L" == n && (t += " l " + h), "Z" == n && (t += " x e"), "Q" == n) {
                            var l = i.length,
                                d = i[l - 1],
                                u = o[0],
                                c = o[1],
                                h = o[2],
                                p = o[3];
                            i = a(i[l - 2] / 3 + 2 / 3 * u), d = a(d / 3 + 2 / 3 * c), u = a(2 / 3 * u + h / 3), c = a(2 / 3 * c + p / 3), t += " c " + i + "," + d + "," + u + "," + c + "," + h + "," + p
                        }
                        "C" == n && (t += " c " + o[0] + "," + o[1] + "," + o[2] + "," + o[3] + "," + o[4] + "," + o[5]), "A" == n && (t += " wa " + r), "B" == n && (t += " at " + r), i = o
                    }
                    return t
                },
                animate: function (t, e, i, s, a) {
                    var r = t.node,
                        n = this.chart;
                    if (t.animationFinished = !1, "translate" == e) {
                        e = i.split(","), i = e[1];
                        var o = r.offsetTop;
                        n.animate(t, "left", r.offsetLeft, e[0], s, a, "px"), n.animate(t, "top", o, i, s, a, "px")
                    }
                },
                clipRect: function (t, e, i, s, a) {
                    t = t.node, 0 === e && 0 === i ? (t.style.width = s + "px", t.style.height = a + "px", t.style.overflow = "hidden") : t.style.clip = "rect(" + i + "px " + (e + s) + "px " + (i + a) + "px " + e + "px)"
                },
                rotate: function (e, i, s) {
                    if (0 !== Number(i)) {
                        var a = e.node;
                        e = a.style, s || (s = this.getBGColor(a.parentNode)), e.backgroundColor = s, e.paddingLeft = 1, s = i * Math.PI / 180;
                        var r = Math.cos(s),
                            n = Math.sin(s),
                            o = t.removePx(e.left),
                            h = t.removePx(e.top),
                            l = a.offsetWidth,
                            a = a.offsetHeight;
                        i /= Math.abs(i), e.left = o + l / 2 - l / 2 * Math.cos(s) - i * a / 2 * Math.sin(s) + 3, e.top = h - i * l / 2 * Math.sin(s) + i * a / 2 * Math.sin(s), e.cssText = e.cssText + "; filter:progid:DXImageTransform.Microsoft.Matrix(M11='" + r + "', M12='" + -n + "', M21='" + n + "', M22='" + r + "', sizingmethod='auto expand');"
                    }
                },
                getBGColor: function (t) {
                    var e = "#FFFFFF";
                    if (t.style) {
                        var i = t.style.backgroundColor;
                        "" !== i ? e = i : t.parentNode && (e = this.getBGColor(t.parentNode))
                    }
                    return e
                },
                set: function (e) {
                    var i = new t.AmDObject("group", this.D);
                    if (this.D.container.appendChild(i.node), e) {
                        var s;
                        for (s = 0; s < e.length; s++) i.push(e[s])
                    }
                    return i
                },
                gradient: function (t, e, i, s) {
                    var a = "";
                    "radialGradient" == e && (e = "gradientradial", i.reverse()), "linearGradient" == e && (e = "gradient");
                    var r;
                    for (r = 0; r < i.length; r++) a += Math.round(100 * r / (i.length - 1)) + "% " + i[r], r < i.length - 1 && (a += ",");
                    t = t.fill, 90 == s ? s = 0 : 270 == s ? s = 180 : 180 == s ? s = 90 : 0 === s && (s = 270), 8 === document.documentMode ? (t.type = e, t.angle = s) : (t.setAttribute("type", e), t.setAttribute("angle", s)), a && (t.colors.value = a)
                },
                remove: function (t) {
                    t.clipPath && this.D.remove(t.clipPath), this.D.remove(t.node)
                },
                disableSelection: function (t) {
                    t.onselectstart = function () {
                        return !1
                    }, t.style.cursor = "default"
                },
                pattern: function (e, i, s, a) {
                    s = e.node, e = e.fill;
                    var r = "none";
                    i.color && (r = i.color), s.fillColor = r, i = i.url, t.isAbsolute(i) || (i = a + i), 8 === document.documentMode ? (e.type = "tile", e.src = i) : (e.setAttribute("type", "tile"), e.setAttribute("src", i))
                },
                update: function () {}
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.SVGRenderer = t.Class({
                construct: function (t) {
                    this.D = t, this.animations = []
                },
                create: function (e, i) {
                    return document.createElementNS(t.SVG_NS, i)
                },
                attr: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && this.setAttr(t, i, e[i])
                },
                setAttr: function (t, e, i) {
                    void 0 !== i && t.node.setAttribute(e, i)
                },
                animate: function (e, i, s, a, r) {
                    e.animationFinished = !1;
                    var n = e.node;
                    e["an_" + i] && t.removeFromArray(this.animations, e["an_" + i]), "translate" == i ? (n = (n = n.getAttribute("transform")) ? String(n).substring(10, n.length - 1) : "0,0", n = n.split(", ").join(" "), 0 === (n = n.split(" ").join(",")) && (n = "0,0")) : n = Number(n.getAttribute(i)), s = {
                        obj: e,
                        frame: 0,
                        attribute: i,
                        from: n,
                        to: s,
                        time: a,
                        effect: r
                    }, this.animations.push(s), e["an_" + i] = s
                },
                update: function () {
                    var e, i = this.animations;
                    for (e = i.length - 1; 0 <= e; e--) {
                        var s, a, r, n = i[e],
                            o = n.time * t.updateRate,
                            h = n.frame + 1,
                            l = n.obj,
                            d = n.attribute;
                        if (h <= o) {
                            if (n.frame++, "translate" == d) {
                                if (s = n.from.split(","), d = Number(s[0]), s = Number(s[1]), isNaN(s) && (s = 0), a = n.to.split(","), r = Number(a[0]), a = Number(a[1]), r = 0 == r - d ? r : Math.round(t[n.effect](0, h, d, r - d, o)), n = 0 == a - s ? a : Math.round(t[n.effect](0, h, s, a - s, o)), d = "transform", isNaN(r) || isNaN(n)) continue;
                                n = "translate(" + r + "," + n + ")"
                            } else a = Number(n.from), s = Number(n.to), r = s - a, n = t[n.effect](0, h, a, r, o), isNaN(n) && (n = s), 0 === r && this.animations.splice(e, 1);
                            this.setAttr(l, d, n)
                        } else "translate" == d ? (a = n.to.split(","), r = Number(a[0]), a = Number(a[1]), l.translate(r, a)) : (s = Number(n.to), this.setAttr(l, d, s)), l.animationFinished = !0, this.animations.splice(e, 1)
                    }
                },
                getBBox: function (t) {
                    if (t = t.node) try {
                        return t.getBBox()
                    } catch (t) {}
                    return {
                        width: 0,
                        height: 0,
                        x: 0,
                        y: 0
                    }
                },
                path: function (e, i) {
                    e.node.setAttributeNS(t.SVG_XLINK, "xlink:href", i)
                },
                clipRect: function (e, i, s, a, r) {
                    var n = e.node,
                        o = e.clipPath;
                    o && this.D.remove(o);
                    var h = n.parentNode;
                    h && (n = document.createElementNS(t.SVG_NS, "clipPath"), o = t.getUniqueId(), n.setAttribute("id", o), this.D.rect(i, s, a, r, 0, 0, n), h.appendChild(n), i = "#", t.baseHref && !t.isIE && (i = this.removeTarget(window.location.href) + i), this.setAttr(e, "clip-path", "url(" + i + o + ")"), this.clipPathC++, e.clipPath = n)
                },
                text: function (e, i, s) {
                    var a = new t.AmDObject("text", this.D);
                    e = String(e).split("\n");
                    var r, n = t.removePx(i["font-size"]);
                    for (r = 0; r < e.length; r++) {
                        var o = this.create(null, "tspan");
                        o.appendChild(document.createTextNode(e[r])), o.setAttribute("y", (n + 2) * r + Math.round(n / 2)), o.setAttribute("x", 0), a.node.appendChild(o)
                    }
                    return a.node.setAttribute("y", Math.round(n / 2)), this.attr(a, i), this.D.addToContainer(a.node, s), a
                },
                setText: function (t, e) {
                    var i = t.node;
                    i && (i.removeChild(i.firstChild), i.appendChild(document.createTextNode(e)))
                },
                move: function (t, e, i, s) {
                    isNaN(e) && (e = 0), isNaN(i) && (i = 0), e = "translate(" + e + "," + i + ")", s && (e = e + " scale(" + s + ")"), this.setAttr(t, "transform", e)
                },
                rotate: function (t, e) {
                    var i = t.node.getAttribute("transform"),
                        s = "rotate(" + e + ")";
                    i && (s = i + " " + s), this.setAttr(t, "transform", s)
                },
                set: function (e) {
                    var i = new t.AmDObject("g", this.D);
                    if (this.D.container.appendChild(i.node), e) {
                        var s;
                        for (s = 0; s < e.length; s++) i.push(e[s])
                    }
                    return i
                },
                addListener: function (t, e, i) {
                    t.node["on" + e] = i
                },
                gradient: function (e, i, s, a) {
                    var r = e.node,
                        n = e.grad;
                    if (n && this.D.remove(n), i = document.createElementNS(t.SVG_NS, i), n = t.getUniqueId(), i.setAttribute("id", n), !isNaN(a)) {
                        var o = 0,
                            h = 0,
                            l = 0,
                            d = 0;
                        90 == a ? l = 100 : 270 == a ? d = 100 : 180 == a ? o = 100 : 0 === a && (h = 100), i.setAttribute("x1", o + "%"), i.setAttribute("x2", h + "%"), i.setAttribute("y1", l + "%"), i.setAttribute("y2", d + "%")
                    }
                    for (a = 0; a < s.length; a++) o = document.createElementNS(t.SVG_NS, "stop"), h = 100 * a / (s.length - 1), 0 === a && (h = 0), o.setAttribute("offset", h + "%"), o.setAttribute("stop-color", s[a]), i.appendChild(o);
                    r.parentNode.appendChild(i), s = "#", t.baseHref && !t.isIE && (s = this.removeTarget(window.location.href) + s), r.setAttribute("fill", "url(" + s + n + ")"), e.grad = i
                },
                removeTarget: function (t) {
                    return t.split("#")[0]
                },
                pattern: function (e, i, s, a) {
                    var r = e.node;
                    isNaN(s) && (s = 1);
                    var n = e.patternNode;
                    n && this.D.remove(n);
                    var n = document.createElementNS(t.SVG_NS, "pattern"),
                        o = t.getUniqueId(),
                        h = i;
                    i.url && (h = i.url), t.isAbsolute(h) || -1 != h.indexOf("data:image") || (h = a + h), a = Number(i.width), isNaN(a) && (a = 4);
                    var l = Number(i.height);
                    isNaN(l) && (l = 4), a /= s, l /= s, s = i.x, isNaN(s) && (s = 0);
                    var d = -Math.random() * Number(i.randomX);
                    isNaN(d) || (s = d), d = i.y, isNaN(d) && (d = 0);
                    var u = -Math.random() * Number(i.randomY);
                    isNaN(u) || (d = u), n.setAttribute("id", o), n.setAttribute("width", a), n.setAttribute("height", l), n.setAttribute("patternUnits", "userSpaceOnUse"), n.setAttribute("xlink:href", h), i.color && (u = document.createElementNS(t.SVG_NS, "rect"), u.setAttributeNS(null, "height", a), u.setAttributeNS(null, "width", l), u.setAttributeNS(null, "fill", i.color), n.appendChild(u)), this.D.image(h, 0, 0, a, l, n).translate(s, d), h = "#", t.baseHref && !t.isIE && (h = this.removeTarget(window.location.href) + h), r.setAttribute("fill", "url(" + h + o + ")"), e.patternNode = n, r.parentNode.appendChild(n)
                },
                remove: function (t) {
                    t.clipPath && this.D.remove(t.clipPath), t.grad && this.D.remove(t.grad), t.patternNode && this.D.remove(t.patternNode), this.D.remove(t.node)
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.AmLegend = t.Class({
                construct: function (e) {
                    this.enabled = !0, this.cname = "AmLegend", this.createEvents("rollOverMarker", "rollOverItem", "rollOutMarker", "rollOutItem", "showItem", "hideItem", "clickMarker", "clickLabel"), this.position = "bottom", this.borderColor = this.color = "#000000", this.borderAlpha = 0, this.markerLabelGap = 5, this.verticalGap = 10, this.align = "left", this.horizontalGap = 0, this.spacing = 10, this.markerDisabledColor = "#AAB3B3", this.markerType = "square", this.markerSize = 16, this.markerBorderThickness = this.markerBorderAlpha = 1, this.marginBottom = this.marginTop = 0, this.marginLeft = this.marginRight = 20, this.autoMargins = !0, this.valueWidth = 50, this.switchable = !0, this.switchType = "x", this.switchColor = "#FFFFFF", this.rollOverColor = "#CC0000", this.reversedOrder = !1, this.labelText = "[[title]]", this.valueText = "[[value]]", this.accessibleLabel = "[[title]]", this.useMarkerColorForLabels = !1, this.rollOverGraphAlpha = 1, this.textClickEnabled = !1, this.equalWidths = !0, this.backgroundColor = "#FFFFFF", this.backgroundAlpha = 0, this.useGraphSettings = !1, this.showEntries = !0, this.labelDx = 0, t.applyTheme(this, e, this.cname)
                },
                setData: function (t) {
                    this.legendData = t, this.invalidateSize()
                },
                invalidateSize: function () {
                    this.destroy(), this.entries = [], this.valueLabels = [];
                    var e = this.legendData;
                    this.enabled && (t.ifArray(e) || t.ifArray(this.data)) && this.drawLegend()
                },
                drawLegend: function () {
                    var e = this.chart,
                        i = this.position,
                        s = this.width,
                        a = e.divRealWidth,
                        r = e.divRealHeight,
                        n = this.div,
                        o = this.legendData;
                    if (this.data && (o = this.combineLegend ? this.legendData.concat(this.data) : this.data), isNaN(this.fontSize) && (this.fontSize = e.fontSize), this.maxColumnsReal = this.maxColumns, "right" == i || "left" == i) this.maxColumnsReal = 1, this.autoMargins && (this.marginLeft = this.marginRight = 10);
                    else if (this.autoMargins) {
                        this.marginRight = e.marginRight, this.marginLeft = e.marginLeft;
                        var h = e.autoMarginOffset;
                        "bottom" == i ? (this.marginBottom = h, this.marginTop = 0) : (this.marginTop = h, this.marginBottom = 0)
                    }
                    if (s = void 0 !== s ? t.toCoordinate(s, a) : "right" != i && "left" != i ? e.realWidth : 0 < this.ieW ? this.ieW : e.realWidth, "outside" == i ? (s = n.offsetWidth, r = n.offsetHeight, n.clientHeight && (s = n.clientWidth, r = n.clientHeight)) : (isNaN(s) || (n.style.width = s + "px"), n.className = "amChartsLegend " + e.classNamePrefix + "-legend-div"), this.divWidth = s, (i = this.container) ? (i.container.innerHTML = "", n.appendChild(i.container), i.width = s, i.height = r, i.setSize(s, r), i.addDefs(e)) : i = new t.AmDraw(n, s, r, e), this.container = i, this.lx = 0, this.ly = 8, r = this.markerSize, r > this.fontSize && (this.ly = r / 2 - 1), 0 < r && (this.lx += r + this.markerLabelGap), this.titleWidth = 0, (r = this.title) && (r = t.text(this.container, r, this.color, e.fontFamily, this.fontSize, "start", !0), t.setCN(e, r, "legend-title"), r.translate(this.marginLeft, this.marginTop + this.verticalGap + this.ly + 1), e = r.getBBox(), this.titleWidth = e.width + 15, this.titleHeight = e.height + 6), this.index = this.maxLabelWidth = 0, this.showEntries) {
                        for (e = 0; e < o.length; e++) this.createEntry(o[e]);
                        for (e = this.index = 0; e < o.length; e++) this.createValue(o[e])
                    }
                    this.arrangeEntries(), this.updateValues()
                },
                arrangeEntries: function () {
                    var e = this.position,
                        i = this.marginLeft + this.titleWidth,
                        s = this.marginRight,
                        a = this.marginTop,
                        r = this.marginBottom,
                        n = this.horizontalGap,
                        o = this.div,
                        h = this.divWidth,
                        l = this.maxColumnsReal,
                        d = this.verticalGap,
                        u = this.spacing,
                        c = h - s - i,
                        p = 0,
                        m = 0,
                        f = this.container;
                    this.set && this.set.remove();
                    var g = f.set();
                    this.set = g;
                    var v = f.set();
                    g.push(v);
                    var b, x, y = this.entries;
                    for (x = 0; x < y.length; x++) {
                        b = y[x].getBBox();
                        var C = b.width;
                        C > p && (p = C), b = b.height, b > m && (m = b)
                    }
                    var C = m = 0,
                        N = n,
                        w = 0,
                        M = 0;
                    for (x = 0; x < y.length; x++) {
                        var A = y[x];
                        this.reversedOrder && (A = y[y.length - x - 1]), b = A.getBBox();
                        var S;
                        this.equalWidths ? S = C * (p + u + this.markerLabelGap) : (S = N, N = N + b.width + n + u), S + b.width > c && 0 < x && 0 !== C && (m++, S = C = 0, N = S + b.width + n + u, w = w + M + d, M = 0), b.height > M && (M = b.height), A.translate(S, w), C++, !isNaN(l) && C >= l && (C = 0, m++, w = w + M + d, N = n, M = 0), v.push(A)
                    }
                    b = v.getBBox(), l = b.height + 2 * d - 1, "left" == e || "right" == e ? (u = b.width + 2 * n, h = u + i + s, o.style.width = h + "px", this.ieW = h) : u = h - i - s - 1, s = t.polygon(this.container, [0, u, u, 0], [0, 0, l, l], this.backgroundColor, this.backgroundAlpha, 1, this.borderColor, this.borderAlpha), t.setCN(this.chart, s, "legend-bg"), g.push(s), g.translate(i, a), s.toBack(), i = n, "top" != e && "bottom" != e && "absolute" != e && "outside" != e || ("center" == this.align ? i = n + (u - b.width) / 2 : "right" == this.align && (i = n + u - b.width)), v.translate(i, d + 1), this.titleHeight > l && (l = this.titleHeight), a = l + a + r + 1, 0 > a && (a = 0), "absolute" != e && "outside" != e && a > this.chart.divRealHeight && (o.style.top = "0px"), o.style.height = Math.round(a) + "px", f.setSize(this.divWidth, a)
                },
                createEntry: function (e) {
                    if (!1 !== e.visibleInLegend && !e.hideFromLegend) {
                        var i = this,
                            s = i.chart,
                            a = i.useGraphSettings,
                            r = e.markerType;
                        r && (a = !1), e.legendEntryWidth = i.markerSize, r || (r = i.markerType);
                        var n = e.color,
                            o = e.alpha;
                        e.legendKeyColor && (n = e.legendKeyColor()), e.legendKeyAlpha && (o = e.legendKeyAlpha());
                        var h;
                        !0 === e.hidden && (h = n = i.markerDisabledColor);
                        var l, d = e.pattern,
                            u = e.customMarker;
                        u || (u = i.customMarker);
                        var c = i.container,
                            p = i.markerSize,
                            m = 0,
                            f = 0,
                            g = p / 2;
                        if (a) a = e.type, i.switchType = void 0, "line" == a || "step" == a || "smoothedLine" == a || "ohlc" == a ? (l = c.set(), e.hidden || (n = e.lineColorR, h = e.bulletBorderColorR), m = t.line(c, [0, 2 * p], [p / 2, p / 2], n, e.lineAlpha, e.lineThickness, e.dashLength), t.setCN(s, m, "graph-stroke"), l.push(m), e.bullet && (e.hidden || (n = e.bulletColorR), m = t.bullet(c, e.bullet, e.bulletSize, n, e.bulletAlpha, e.bulletBorderThickness, h, e.bulletBorderAlpha)) && (t.setCN(s, m, "graph-bullet"), m.translate(p + 1, p / 2), l.push(m)), g = 0, m = p, f = p / 3) : (e.getGradRotation && 0 === (l = e.getGradRotation()) && (l = 180), m = e.fillColorsR, !0 === e.hidden && (m = n), (l = i.createMarker("rectangle", m, e.fillAlphas, e.lineThickness, n, e.lineAlpha, l, d, e.dashLength)) && (g = p, l.translate(g, p / 2)), m = p), t.setCN(s, l, "graph-" + a), t.setCN(s, l, "graph-" + e.id);
                        else if (u) l = c.image(u, 0, 0, p, p);
                        else {
                            var v;
                            isNaN(i.gradientRotation) || (v = 180 + i.gradientRotation), (l = i.createMarker(r, n, o, void 0, void 0, void 0, v, d)) && l.translate(p / 2, p / 2)
                        }
                        t.setCN(s, l, "legend-marker"), i.addListeners(l, e), c = c.set([l]), i.switchable && e.switchable && c.setAttr("cursor", "pointer"), void 0 !== e.id && t.setCN(s, c, "legend-item-" + e.id), t.setCN(s, c, e.className, !0), h = i.switchType;
                        var b;
                        h && "none" != h && 0 < p && ("x" == h ? (b = i.createX(), b.translate(p / 2, p / 2)) : b = i.createV(), b.dItem = e, !0 !== e.hidden ? "x" == h ? b.hide() : b.show() : "x" != h && b.hide(), i.switchable || b.hide(), i.addListeners(b, e), e.legendSwitch = b, c.push(b), t.setCN(s, b, "legend-switch")), h = i.color, e.showBalloon && i.textClickEnabled && void 0 !== i.selectedColor && (h = i.selectedColor), i.useMarkerColorForLabels && !d && (h = n), !0 === e.hidden && (h = i.markerDisabledColor), n = t.massReplace(i.labelText, {
                            "[[title]]": e.title
                        }), void 0 !== i.tabIndex && (c.setAttr("tabindex", i.tabIndex), c.setAttr("role", "menuitem"), c.keyup(function (t) {
                            13 == t.keyCode && i.clickMarker(e, t)
                        })), s.accessible && i.accessibleLabel && (d = t.massReplace(i.accessibleLabel, {
                            "[[title]]": e.title
                        }), s.makeAccessible(c, d)), d = i.fontSize, l && (p <= d && (p = p / 2 + i.ly - d / 2 + (d + 2 - p) / 2 - f, l.translate(g, p), b && b.translate(b.x, p)), e.legendEntryWidth = l.getBBox().width);
                        var x;
                        n && (n = t.fixBrakes(n), e.legendTextReal = n, x = i.labelWidth, x = isNaN(x) ? t.text(i.container, n, h, s.fontFamily, d, "start") : t.wrappedText(i.container, n, h, s.fontFamily, d, "start", !1, x, 0), t.setCN(s, x, "legend-label"), x.translate(i.lx + m, i.ly), c.push(x), i.labelDx = m, s = x.getBBox().width, i.maxLabelWidth < s && (i.maxLabelWidth = s)), i.entries[i.index] = c, e.legendEntry = i.entries[i.index], e.legendMarker = l, e.legendLabel = x, i.index++
                    }
                },
                addListeners: function (t, e) {
                    var i = this;
                    t && t.mouseover(function (t) {
                        i.rollOverMarker(e, t)
                    }).mouseout(function (t) {
                        i.rollOutMarker(e, t)
                    }).click(function (t) {
                        i.clickMarker(e, t)
                    })
                },
                rollOverMarker: function (t, e) {
                    this.switchable && this.dispatch("rollOverMarker", t, e), this.dispatch("rollOverItem", t, e)
                },
                rollOutMarker: function (t, e) {
                    this.switchable && this.dispatch("rollOutMarker", t, e), this.dispatch("rollOutItem", t, e)
                },
                clickMarker: function (t, e) {
                    this.switchable && (!0 === t.hidden ? this.dispatch("showItem", t, e) : this.dispatch("hideItem", t, e)), this.dispatch("clickMarker", t, e)
                },
                rollOverLabel: function (t, e) {
                    t.hidden || this.textClickEnabled && t.legendLabel && t.legendLabel.attr({
                        fill: this.rollOverColor
                    }), this.dispatch("rollOverItem", t, e)
                },
                rollOutLabel: function (t, e) {
                    if (!t.hidden && this.textClickEnabled && t.legendLabel) {
                        var i = this.color;
                        void 0 !== this.selectedColor && t.showBalloon && (i = this.selectedColor), this.useMarkerColorForLabels && void 0 === (i = t.lineColor) && (i = t.color), t.legendLabel.attr({
                            fill: i
                        })
                    }
                    this.dispatch("rollOutItem", t, e)
                },
                clickLabel: function (t, e) {
                    this.textClickEnabled ? t.hidden || this.dispatch("clickLabel", t, e) : this.switchable && (!0 === t.hidden ? this.dispatch("showItem", t, e) : this.dispatch("hideItem", t, e))
                },
                dispatch: function (t, e, i) {
                    t = {
                        type: t,
                        dataItem: e,
                        target: this,
                        event: i,
                        chart: this.chart
                    }, this.chart && this.chart.handleLegendEvent(t), this.fire(t)
                },
                createValue: function (e) {
                    var i = this,
                        s = i.fontSize,
                        a = i.chart;
                    if (!1 !== e.visibleInLegend && !e.hideFromLegend) {
                        var r = i.maxLabelWidth;
                        i.forceWidth && (r = i.labelWidth), i.equalWidths || (i.valueAlign = "left"), "left" == i.valueAlign && e.legendLabel && (r = e.legendLabel.getBBox().width);
                        var n = r;
                        if (i.valueText && 0 < i.valueWidth) {
                            var o = i.color;
                            i.useMarkerColorForValues && (o = e.color, e.legendKeyColor && (o = e.legendKeyColor())), !0 === e.hidden && (o = i.markerDisabledColor);
                            var h = i.valueText,
                                r = r + i.lx + i.labelDx + i.markerLabelGap + i.valueWidth,
                                l = "end";
                            "left" == i.valueAlign && (r -= i.valueWidth, l = "start"), o = t.text(i.container, h, o, i.chart.fontFamily, s, l), t.setCN(a, o, "legend-value"), o.translate(r, i.ly), i.entries[i.index].push(o), n += i.valueWidth + 2 * i.markerLabelGap, o.dItem = e, i.valueLabels.push(o)
                        }
                        i.index++, a = i.markerSize, a < s + 7 && (a = s + 7, t.VML && (a += 3)), s = i.container.rect(e.legendEntryWidth, 0, n, a, 0, 0).attr({
                            stroke: "none",
                            fill: "#fff",
                            "fill-opacity": .005
                        }), s.dItem = e, i.entries[i.index - 1].push(s), s.mouseover(function (t) {
                            i.rollOverLabel(e, t)
                        }).mouseout(function (t) {
                            i.rollOutLabel(e, t)
                        }).click(function (t) {
                            i.clickLabel(e, t)
                        })
                    }
                },
                createV: function () {
                    var e = this.markerSize;
                    return t.polygon(this.container, [e / 5, e / 2, e - e / 5, e / 2], [e / 3, e - e / 5, e / 5, e / 1.7], this.switchColor)
                },
                createX: function () {
                    var e = (this.markerSize - 4) / 2,
                        i = {
                            stroke: this.switchColor,
                            "stroke-width": 3
                        },
                        s = this.container,
                        a = t.line(s, [-e, e], [-e, e]).attr(i),
                        e = t.line(s, [-e, e], [e, -e]).attr(i);
                    return this.container.set([a, e])
                },
                createMarker: function (e, i, s, a, r, n, o, h, l) {
                    var d = this.markerSize,
                        u = this.container;
                    return r || (r = this.markerBorderColor), r || (r = i), isNaN(a) && (a = this.markerBorderThickness), isNaN(n) && (n = this.markerBorderAlpha), t.bullet(u, e, d, i, s, a, r, n, d, o, h, this.chart.path, l)
                },
                validateNow: function () {
                    this.invalidateSize()
                },
                updateValues: function () {
                    var e, i = this.valueLabels,
                        s = this.chart,
                        a = this.data;
                    if (i)
                        for (e = 0; e < i.length; e++) {
                            var r = i[e],
                                n = r.dItem;
                            n.periodDataItem = void 0, n.periodPercentDataItem = void 0;
                            var o = " ";
                            if (a) n.value ? r.text(n.value) : r.text("");
                            else {
                                var h = null;
                                if (void 0 !== n.type) {
                                    var h = n.currentDataItem,
                                        l = this.periodValueText;
                                    n.legendPeriodValueText && (l = n.legendPeriodValueText), n.legendPeriodValueTextR && (l = n.legendPeriodValueTextR), h ? (o = this.valueText, n.legendValueText && (o = n.legendValueText), n.legendValueTextR && (o = n.legendValueTextR), o = s.formatString(o, h)) : l && s.formatPeriodString && (l = t.massReplace(l, {
                                        "[[title]]": n.title
                                    }), o = s.formatPeriodString(l, n))
                                } else o = s.formatString(this.valueText, n);
                                l = n, h && (l = h);
                                var d = this.valueFunction;
                                d && (o = d(l, o, s.periodDataItem));
                                var u;
                                this.useMarkerColorForLabels && !h && n.lastDataItem && (h = n.lastDataItem), h ? u = s.getBalloonColor(n, h) : n.legendKeyColor && (u = n.legendKeyColor()), n.legendColorFunction && (u = n.legendColorFunction(l, o, n.periodDataItem, n.periodPercentDataItem)), r.text(o), !n.pattern && (this.useMarkerColorForValues && r.setAttr("fill", u), this.useMarkerColorForLabels) && ((r = n.legendMarker) && (r.setAttr("fill", u), r.setAttr("stroke", u)), (r = n.legendLabel) && (n.hidden ? r.setAttr("fill", this.markerDisabledColor) : r.setAttr("fill", u)))
                            }
                        }
                },
                renderFix: function () {
                    if (!t.VML && this.enabled) {
                        var e = this.container;
                        e && e.renderFix()
                    }
                },
                destroy: function () {
                    this.div.innerHTML = "", t.remove(this.set)
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.formatMilliseconds = function (t, e) {
                if (-1 != t.indexOf("fff")) {
                    var i = e.getMilliseconds(),
                        s = String(i);
                    10 > i && (s = "00" + i), 10 <= i && 100 > i && (s = "0" + i), t = t.replace(/fff/g, s)
                }
                return t
            }, t.extractPeriod = function (e) {
                var i = t.stripNumbers(e),
                    s = 1;
                return i != e && (s = Number(e.slice(0, e.indexOf(i)))), {
                    period: i,
                    count: s
                }
            }, t.getDate = function (e, i, s) {
                return e instanceof Date ? t.newDate(e, s) : i && isNaN(e) ? t.stringToDate(e, i) : new Date(e)
            }, t.daysInMonth = function (t) {
                return new Date(t.getYear(), t.getMonth() + 1, 0).getDate()
            }, t.newDate = function (t, e) {
                return e && -1 == e.indexOf("fff") ? new Date(t) : new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
            }, t.resetDateToMin = function (e, i, s, a) {
                void 0 === a && (a = 1);
                var r, n, o, h, l, d, u;
                switch (t.useUTC ? (r = e.getUTCFullYear(), n = e.getUTCMonth(), o = e.getUTCDate(), h = e.getUTCHours(), l = e.getUTCMinutes(), d = e.getUTCSeconds(), u = e.getUTCMilliseconds(), e = e.getUTCDay()) : (r = e.getFullYear(), n = e.getMonth(), o = e.getDate(), h = e.getHours(), l = e.getMinutes(), d = e.getSeconds(), u = e.getMilliseconds(), e = e.getDay()), i) {
                    case "YYYY":
                        r = Math.floor(r / s) * s, n = 0, o = 1, u = d = l = h = 0;
                        break;
                    case "MM":
                        n = Math.floor(n / s) * s, o = 1, u = d = l = h = 0;
                        break;
                    case "WW":
                        o = e >= a ? o - e + a : o - (7 + e) + a, u = d = l = h = 0;
                        break;
                    case "DD":
                        u = d = l = h = 0;
                        break;
                    case "hh":
                        h = Math.floor(h / s) * s, u = d = l = 0;
                        break;
                    case "mm":
                        l = Math.floor(l / s) * s, u = d = 0;
                        break;
                    case "ss":
                        d = Math.floor(d / s) * s, u = 0;
                        break;
                    case "fff":
                        u = Math.floor(u / s) * s
                }
                return t.useUTC ? (e = new Date, e.setUTCFullYear(r, n, o), e.setUTCHours(h, l, d, u)) : e = new Date(r, n, o, h, l, d, u), e
            }, t.getPeriodDuration = function (t, e) {
                void 0 === e && (e = 1);
                var i;
                switch (t) {
                    case "YYYY":
                        i = 316224e5;
                        break;
                    case "MM":
                        i = 26784e5;
                        break;
                    case "WW":
                        i = 6048e5;
                        break;
                    case "DD":
                        i = 864e5;
                        break;
                    case "hh":
                        i = 36e5;
                        break;
                    case "mm":
                        i = 6e4;
                        break;
                    case "ss":
                        i = 1e3;
                        break;
                    case "fff":
                        i = 1
                }
                return i * e
            }, t.intervals = {
                s: {
                    nextInterval: "ss",
                    contains: 1e3
                },
                ss: {
                    nextInterval: "mm",
                    contains: 60,
                    count: 0
                },
                mm: {
                    nextInterval: "hh",
                    contains: 60,
                    count: 1
                },
                hh: {
                    nextInterval: "DD",
                    contains: 24,
                    count: 2
                },
                DD: {
                    nextInterval: "",
                    contains: 1 / 0,
                    count: 3
                }
            }, t.getMaxInterval = function (e, i) {
                var s = t.intervals;
                return e >= s[i].contains ? (e = Math.round(e / s[i].contains), i = s[i].nextInterval, t.getMaxInterval(e, i)) : "ss" == i ? s[i].nextInterval : i
            }, t.dayNames = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), t.shortDayNames = "Sun Mon Tue Wed Thu Fri Sat".split(" "), t.monthNames = "January February March April May June July August September October November December".split(" "), t.shortMonthNames = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), t.getWeekNumber = function (t) {
                t = new Date(t), t.setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var e = new Date(t.getFullYear(), 0, 1);
                return Math.ceil(((t - e) / 864e5 + 1) / 7)
            }, t.stringToDate = function (e, i) {
                var s = {},
                    a = [{
                        pattern: "YYYY",
                        period: "year"
                    }, {
                        pattern: "YY",
                        period: "year"
                    }, {
                        pattern: "MM",
                        period: "month"
                    }, {
                        pattern: "M",
                        period: "month"
                    }, {
                        pattern: "DD",
                        period: "date"
                    }, {
                        pattern: "D",
                        period: "date"
                    }, {
                        pattern: "JJ",
                        period: "hours"
                    }, {
                        pattern: "J",
                        period: "hours"
                    }, {
                        pattern: "HH",
                        period: "hours"
                    }, {
                        pattern: "H",
                        period: "hours"
                    }, {
                        pattern: "KK",
                        period: "hours"
                    }, {
                        pattern: "K",
                        period: "hours"
                    }, {
                        pattern: "LL",
                        period: "hours"
                    }, {
                        pattern: "L",
                        period: "hours"
                    }, {
                        pattern: "NN",
                        period: "minutes"
                    }, {
                        pattern: "N",
                        period: "minutes"
                    }, {
                        pattern: "SS",
                        period: "seconds"
                    }, {
                        pattern: "S",
                        period: "seconds"
                    }, {
                        pattern: "QQQ",
                        period: "milliseconds"
                    }, {
                        pattern: "QQ",
                        period: "milliseconds"
                    }, {
                        pattern: "Q",
                        period: "milliseconds"
                    }],
                    r = !0,
                    n = i.indexOf("AA"); - 1 != n && (e.substr(n, 2), "pm" == e.toLowerCase && (r = !1));
                var o, h, l, n = i;
                for (l = 0; l < a.length; l++) h = a[l].period, s[h] = 0, "date" == h && (s[h] = 1);
                for (l = 0; l < a.length; l++)
                    if (o = a[l].pattern, h = a[l].period, -1 != i.indexOf(o)) {
                        var d = t.getFromDateString(o, e, n);
                        i = i.replace(o, ""), "KK" != o && "K" != o && "LL" != o && "L" != o || r || (d += 12), s[h] = d
                    }
                return t.useUTC ? (a = new Date, a.setUTCFullYear(s.year, s.month, s.date), a.setUTCHours(s.hours, s.minutes, s.seconds, s.milliseconds)) : a = new Date(s.year, s.month, s.date, s.hours, s.minutes, s.seconds, s.milliseconds), a
            }, t.getFromDateString = function (t, e, i) {
                if (void 0 !== e) return i = i.indexOf(t), e = String(e), e = e.substr(i, t.length), "0" == e.charAt(0) && (e = e.substr(1, e.length - 1)), e = Number(e), isNaN(e) && (e = 0), -1 != t.indexOf("M") && e--, e
            }, t.formatDate = function (e, i, s) {
                s || (s = t);
                var a, r, n, o, h, l, d, u, c = t.getWeekNumber(e);
                t.useUTC ? (a = e.getUTCFullYear(), r = e.getUTCMonth(), n = e.getUTCDate(), o = e.getUTCDay(), h = e.getUTCHours(), l = e.getUTCMinutes(), d = e.getUTCSeconds(), u = e.getUTCMilliseconds()) : (a = e.getFullYear(), r = e.getMonth(), n = e.getDate(), o = e.getDay(), h = e.getHours(), l = e.getMinutes(), d = e.getSeconds(), u = e.getMilliseconds());
                var p = String(a).substr(2, 2),
                    m = "0" + o;
                i = i.replace(/W/g, c), 24 == (c = h) && (c = 0);
                var f = c;
                10 > f && (f = "0" + f), i = i.replace(/JJ/g, f), i = i.replace(/J/g, c), f = h, 0 === f && (f = 24, -1 != i.indexOf("H") && 0 === --n && (a = new Date(e), a.setDate(a.getDate() - 1), r = a.getMonth(), n = a.getDate(), a = a.getFullYear())), e = r + 1, 9 > r && (e = "0" + e), c = n, 10 > n && (c = "0" + n);
                var g = f;
                return 10 > g && (g = "0" + g), i = i.replace(/HH/g, g), i = i.replace(/H/g, f), f = h, 11 < f && (f -= 12), g = f, 10 > g && (g = "0" + g), i = i.replace(/KK/g, g), i = i.replace(/K/g, f), f = h, 0 === f && (f = 12), 12 < f && (f -= 12), g = f, 10 > g && (g = "0" + g), i = i.replace(/LL/g, g), i = i.replace(/L/g, f), f = l, 10 > f && (f = "0" + f), i = i.replace(/NN/g, f), i = i.replace(/N/g, l), l = d, 10 > l && (l = "0" + l), i = i.replace(/SS/g, l), i = i.replace(/S/g, d), d = u, 10 > d ? d = "00" + d : 100 > d && (d = "0" + d), l = u, 10 > l && (l = "00" + l), i = i.replace(/A/g, "@A@"), i = i.replace(/QQQ/g, d), i = i.replace(/QQ/g, l), i = i.replace(/Q/g, u), i = i.replace(/YYYY/g, "@IIII@"), i = i.replace(/YY/g, "@II@"), i = i.replace(/MMMM/g, "@XXXX@"), i = i.replace(/MMM/g, "@XXX@"), i = i.replace(/MM/g, "@XX@"), i = i.replace(/M/g, "@X@"), i = i.replace(/DD/g, "@RR@"), i = i.replace(/D/g, "@R@"), i = i.replace(/EEEE/g, "@PPPP@"), i = i.replace(/EEE/g, "@PPP@"), i = i.replace(/EE/g, "@PP@"), i = i.replace(/E/g, "@P@"), i = i.replace(/@IIII@/g, a), i = i.replace(/@II@/g, p), i = i.replace(/@XXXX@/g, s.monthNames[r]), i = i.replace(/@XXX@/g, s.shortMonthNames[r]), i = i.replace(/@XX@/g, e), i = i.replace(/@X@/g, r + 1), i = i.replace(/@RR@/g, c), i = i.replace(/@R@/g, n), i = i.replace(/@PPPP@/g, s.dayNames[o]), i = i.replace(/@PPP@/g, s.shortDayNames[o]), i = i.replace(/@PP@/g, m), i = i.replace(/@P@/g, o), i = 12 > h ? i.replace(/@A@/g, s.amString) : i.replace(/@A@/g, s.pmString)
            }, t.changeDate = function (e, i, s, a, r) {
                if (t.useUTC) return t.changeUTCDate(e, i, s, a, r);
                var n = -1;
                switch (void 0 === a && (a = !0), void 0 === r && (r = !1), !0 === a && (n = 1), i) {
                    case "YYYY":
                        e.setFullYear(e.getFullYear() + s * n), a || r || e.setDate(e.getDate() + 1);
                        break;
                    case "MM":
                        i = e.getMonth(), e.setMonth(e.getMonth() + s * n), e.getMonth() > i + s * n && e.setDate(e.getDate() - 1), a || r || e.setDate(e.getDate() + 1);
                        break;
                    case "DD":
                        e.setDate(e.getDate() + s * n);
                        break;
                    case "WW":
                        e.setDate(e.getDate() + s * n * 7);
                        break;
                    case "hh":
                        e.setHours(e.getHours() + s * n);
                        break;
                    case "mm":
                        e.setMinutes(e.getMinutes() + s * n);
                        break;
                    case "ss":
                        e.setSeconds(e.getSeconds() + s * n);
                        break;
                    case "fff":
                        e.setMilliseconds(e.getMilliseconds() + s * n)
                }
                return e
            }, t.changeUTCDate = function (t, e, i, s, a) {
                var r = -1;
                switch (void 0 === s && (s = !0), void 0 === a && (a = !1), !0 === s && (r = 1), e) {
                    case "YYYY":
                        t.setUTCFullYear(t.getUTCFullYear() + i * r), s || a || t.setUTCDate(t.getUTCDate() + 1);
                        break;
                    case "MM":
                        e = t.getUTCMonth(), t.setUTCMonth(t.getUTCMonth() + i * r), t.getUTCMonth() > e + i * r && t.setUTCDate(t.getUTCDate() - 1), s || a || t.setUTCDate(t.getUTCDate() + 1);
                        break;
                    case "DD":
                        t.setUTCDate(t.getUTCDate() + i * r);
                        break;
                    case "WW":
                        t.setUTCDate(t.getUTCDate() + i * r * 7);
                        break;
                    case "hh":
                        t.setUTCHours(t.getUTCHours() + i * r);
                        break;
                    case "mm":
                        t.setUTCMinutes(t.getUTCMinutes() + i * r);
                        break;
                    case "ss":
                        t.setUTCSeconds(t.getUTCSeconds() + i * r);
                        break;
                    case "fff":
                        t.setUTCMilliseconds(t.getUTCMilliseconds() + i * r)
                }
                return t
            }
        }()
    }, function (t, e) {
        ! function () {
            var t = window.AmCharts;
            t.AmRectangularChart = t.Class({
                inherits: t.AmCoordinateChart,
                construct: function (e) {
                    t.AmRectangularChart.base.construct.call(this, e), this.theme = e, this.createEvents("zoomed", "changed"), this.marginRight = this.marginBottom = this.marginTop = this.marginLeft = 20, this.depth3D = this.angle = 0, this.plotAreaFillColors = "#FFFFFF", this.plotAreaFillAlphas = 0, this.plotAreaBorderColor = "#000000", this.plotAreaBorderAlpha = 0, this.maxZoomFactor = 20, this.zoomOutButtonImageSize = 19, this.zoomOutButtonImage = "lens", this.zoomOutText = "Show all", this.zoomOutButtonColor = "#e5e5e5", this.zoomOutButtonAlpha = 0, this.zoomOutButtonRollOverAlpha = 1, this.zoomOutButtonPadding = 8, this.trendLines = [], this.autoMargins = !0, this.marginsUpdated = !1, this.autoMarginOffset = 10, t.applyTheme(this, e, "AmRectangularChart")
                },
                initChart: function () {
                    t.AmRectangularChart.base.initChart.call(this), this.updateDxy(), !this.marginsUpdated && this.autoMargins && (this.resetMargins(), this.drawGraphs = !1), this.processScrollbars(), this.updateMargins(), this.updatePlotArea(), this.updateScrollbars(), this.updateTrendLines(), this.updateChartCursor(), this.updateValueAxes(), this.scrollbarOnly || this.updateGraphs()
                },
                drawChart: function () {
                    if (t.AmRectangularChart.base.drawChart.call(this), this.drawPlotArea(), t.ifArray(this.chartData)) {
                        var e = this.chartCursor;
                        e && e.draw()
                    }
                },
                resetMargins: function () {
                    var t, e = {};
                    if ("xy" == this.type) {
                        var i = this.xAxes,
                            s = this.yAxes;
                        for (t = 0; t < i.length; t++) {
                            var a = i[t];
                            a.ignoreAxisWidth || (a.setOrientation(!0), a.fixAxisPosition(), e[a.position] = !0)
                        }
                        for (t = 0; t < s.length; t++) i = s[t], i.ignoreAxisWidth || (i.setOrientation(!1), i.fixAxisPosition(), e[i.position] = !0)
                    } else {
                        for (s = this.valueAxes, t = 0; t < s.length; t++) i = s[t], i.ignoreAxisWidth || (i.setOrientation(this.rotate), i.fixAxisPosition(), e[i.position] = !0);
                        (t = this.categoryAxis) && !t.ignoreAxisWidth && (t.setOrientation(!this.rotate), t.fixAxisPosition(), t.fixAxisPosition(), e[t.position] = !0)
                    }
                    e.left && (this.marginLeft = 0), e.right && (this.marginRight = 0), e.top && (this.marginTop = 0), e.bottom && (this.marginBottom = 0), this.fixMargins = e
                },
                measureMargins: function () {
                    var t, e = this.valueAxes,
                        i = this.autoMarginOffset,
                        s = this.fixMargins,
                        a = this.realWidth,
                        r = this.realHeight,
                        n = i,
                        o = i,
                        h = a;
                    t = r;
                    var l;
                    for (l = 0; l < e.length; l++) e[l].handleSynchronization(), t = this.getAxisBounds(e[l], n, h, o, t), n = Math.round(t.l), h = Math.round(t.r), o = Math.round(t.t), t = Math.round(t.b);
                    (e = this.categoryAxis) && (t = this.getAxisBounds(e, n, h, o, t), n = Math.round(t.l), h = Math.round(t.r), o = Math.round(t.t), t = Math.round(t.b)), s.left && n < i && (this.marginLeft = Math.round(-n + i), !isNaN(this.minMarginLeft) && this.marginLeft < this.minMarginLeft && (this.marginLeft = this.minMarginLeft)), s.right && h >= a - i && (this.marginRight = Math.round(h - a + i), !isNaN(this.minMarginRight) && this.marginRight < this.minMarginRight && (this.marginRight = this.minMarginRight)), s.top && o < i + this.titleHeight && (this.marginTop = Math.round(this.marginTop - o + i + this.titleHeight), !isNaN(this.minMarginTop) && this.marginTop < this.minMarginTop && (this.marginTop = this.minMarginTop)), s.bottom && t > r - i && (this.marginBottom = Math.round(this.marginBottom + t - r + i), !isNaN(this.minMarginBottom) && this.marginBottom < this.minMarginBottom && (this.marginBottom = this.minMarginBottom)), this.initChart()
                },
                getAxisBounds: function (t, e, i, s, a) {
                    if (!t.ignoreAxisWidth) {
                        var r = t.labelsSet,
                            n = t.tickLength;
                        if (t.inside && (n = 0), r) switch (r = t.getBBox(), t.position) {
                            case "top":
                                t = r.y, s > t && (s = t);
                                break;
                            case "bottom":
                                t = r.y + r.height, a < t && (a = t);
                                break;
                            case "right":
                                t = r.x + r.width + n + 3, i < t && (i = t);
                                break;
                            case "left":
                                t = r.x - n, e > t && (e = t)
                        }
                    }
                    return {
                        l: e,
                        t: s,
                        r: i,
                        b: a
                    }
                },
                drawZoomOutButton: function () {
                    var e = this;
                    if (!e.zbSet) {
                        var i = e.container.set();
                        e.zoomButtonSet.push(i);
                        var s = e.color,
                            a = e.fontSize,
                            r = e.zoomOutButtonImageSize,
                            n = e.zoomOutButtonImage.replace(/\.[a-z]*$/i, ""),
                            o = e.langObj.zoomOutText || e.zoomOutText,
                            h = e.zoomOutButtonColor,
                            l = e.zoomOutButtonAlpha,
                            d = e.zoomOutButtonFontSize,
                            u = e.zoomOutButtonPadding;
                        isNaN(d) || (a = d), (d = e.zoomOutButtonFontColor) && (s = d);
                        var c, d = e.zoomOutButton;
                        d && (d.fontSize && (a = d.fontSize), d.color && (s = d.color), d.backgroundColor && (h = d.backgroundColor), isNaN(d.backgroundAlpha) || (e.zoomOutButtonRollOverAlpha = d.backgroundAlpha));
                        var p = d = 0,
                            p = e.pathToImages;
                        for (n && ((t.isAbsolute(n) || void 0 === p) && (p = ""), c = e.container.image(p + n + e.extension, 0, 0, r, r), t.setCN(e, c, "zoom-out-image"), i.push(c), c = c.getBBox(), d = c.width + 5), void 0 !== o && (s = t.text(e.container, o, s, e.fontFamily, a, "start"), t.setCN(e, s, "zoom-out-label"), a = s.getBBox(), p = c ? c.height / 2 - 3 : a.height / 2, s.translate(d, p), i.push(s)), c = i.getBBox(), s = 1, t.isModern || (s = 0), h = t.rect(e.container, c.width + 2 * u + 5, c.height + 2 * u - 2, h, 1, 1, h, s), h.setAttr("opacity", l), h.translate(-u, -u), t.setCN(e, h, "zoom-out-bg"), i.push(h), h.toBack(), e.zbBG = h, c = h.getBBox(), i.translate(e.marginLeftReal + e.plotAreaWidth - c.width + u, e.marginTopReal + u), i.hide(), i.mouseover(function () {
                                e.rollOverZB()
                            }).mouseout(function () {
                                e.rollOutZB()
                            }).click(function () {
                                e.clickZB()
                            }).touchstart(function () {
                                e.rollOverZB()
                            }).touchend(function () {
                                e.rollOutZB(), e.clickZB()
                            }), l = 0; l < i.length; l++) i[l].attr({
                            cursor: "pointer"
                        });
                        void 0 !== e.zoomOutButtonTabIndex && (i.setAttr("tabindex", e.zoomOutButtonTabIndex), i.setAttr("role", "menuitem"), i.keyup(function (t) {
                            13 == t.keyCode && e.clickZB()
                        })), e.zbSet = i
                    }
                },
                rollOverZB: function () {
                    this.rolledOverZB = !0, this.zbBG.setAttr("opacity", this.zoomOutButtonRollOverAlpha)
                },
                rollOutZB: function () {
                    this.rolledOverZB = !1, this.zbBG.setAttr("opacity", this.zoomOutButtonAlpha)
                },
                clickZB: function () {
                    this.rolledOverZB = !1, this.zoomOut()
                },
                zoomOut: function () {
                    this.zoomOutValueAxes()
                },
                drawPlotArea: function () {
                    var e = this.dx,
                        i = this.dy,
                        s = this.marginLeftReal,
                        a = this.marginTopReal,
                        r = this.plotAreaWidth - 1,
                        n = this.plotAreaHeight - 1,
                        o = this.plotAreaFillColors,
                        h = this.plotAreaFillAlphas,
                        l = this.plotAreaBorderColor,
                        d = this.plotAreaBorderAlpha;
                    "object" == typeof h && (h = h[0]), o = t.polygon(this.container, [0, r, r, 0, 0], [0, 0, n, n, 0], o, h, 1, l, d, this.plotAreaGradientAngle), t.setCN(this, o, "plot-area"), o.translate(s + e, a + i), this.set.push(o), 0 !== e && 0 !== i && (o = this.plotAreaFillColors, "object" == typeof o && (o = o[0]), o = t.adjustLuminosity(o, -.15), r = t.polygon(this.container, [0, e, r + e, r, 0], [0, i, i, 0, 0], o, h, 1, l, d), t.setCN(this, r, "plot-area-bottom"), r.translate(s, a + n), this.set.push(r), e = t.polygon(this.container, [0, 0, e, e, 0], [0, n, n + i, i, 0], o, h, 1, l, d), t.setCN(this, e, "plot-area-left"), e.translate(s, a), this.set.push(e)), (s = this.bbset) && this.scrollbarOnly && s.remove()
                },
                updatePlotArea: function () {
                    var t = this.updateWidth(),
                        e = this.updateHeight(),
                        i = this.container;
                    this.realWidth = t, this.realWidth = e, i && this.container.setSize(t, e);
                    var i = this.marginLeftReal,
                        s = this.marginTopReal,
                        t = t - i - this.marginRightReal - this.dx,
                        e = e - s - this.marginBottomReal;
                    1 > t && (t = 1), 1 > e && (e = 1), this.plotAreaWidth = Math.round(t), this.plotAreaHeight = Math.round(e), this.plotBalloonsSet.translate(i, s)
                },
                updateDxy: function () {
                    this.dx = Math.round(this.depth3D * Math.cos(this.angle * Math.PI / 180)), this.dy = Math.round(-this.depth3D * Math.sin(this.angle * Math.PI / 180)), this.d3x = Math.round(this.columnSpacing3D * Math.cos(this.angle * Math.PI / 180)), this.d3y = Math.round(-this.columnSpacing3D * Math.sin(this.angle * Math.PI / 180))
                },
                updateMargins: function () {
                    var t = this.getTitleHeight();
                    this.titleHeight = t, this.marginTopReal = this.marginTop - this.dy, this.fixMargins && !this.fixMargins.top && (this.marginTopReal += t), this.marginBottomReal = this.marginBottom, this.marginLeftReal = this.marginLeft, this.marginRightReal = this.marginRight
                },
                updateValueAxes: function () {
                    var t, e = this.valueAxes;
                    for (t = 0; t < e.length; t++) {
                        var i = e[t];
                        this.setAxisRenderers(i), this.updateObjectSize(i)
                    }
                },
                setAxisRenderers: function (e) {
                    e.axisRenderer = t.RecAxis, e.guideFillRenderer = t.RecFill, e.axisItemRenderer = t.RecItem, e.marginsChanged = !0
                },
                updateGraphs: function () {
                    var t, e = this.graphs;
                    for (t = 0; t < e.length; t++) {
                        var i = e[t];
                        i.index = t, i.rotate = this.rotate, this.updateObjectSize(i)
                    }
                },
                updateObjectSize: function (t) {
                    t.width = this.plotAreaWidth - 1, t.height = this.plotAreaHeight - 1, t.x = this.marginLeftReal, t.y = this.marginTopReal, t.dx = this.dx, t.dy = this.dy
                },
                updateChartCursor: function () {
                    var e = this.chartCursor;
                    e && (e = t.processObject(e, t.ChartCursor, this.theme), this.updateObjectSize(e), this.addChartCursor(e), e.chart = this)
                },
                processScrollbars: function () {
                    var e = this.chartScrollbar;
                    e && (e = t.processObject(e, t.ChartScrollbar, this.theme), this.addChartScrollbar(e))
                },
                updateScrollbars: function () {},
                removeChartCursor: function () {
                    t.callMethod("destroy", [this.chartCursor]), this.chartCursor = null
                },
                zoomTrendLines: function () {
                    var t, e = this.trendLines;
                    for (t = 0; t < e.length; t++) {
                        var i = e[t];
                        i.valueAxis.recalculateToPercents ? i.set && i.set.hide() : (i.x = this.marginLeftReal, i.y = this.marginTopReal, i.draw())
                    }
                },
                handleCursorValueZoom: function () {},
                addTrendLine: function (t) {
                    this.trendLines.push(t)
                },
                zoomOutValueAxes: function () {
                    for (var t = this.valueAxes, e = 0; e < t.length; e++) t[e].zoomOut()
                },
                removeTrendLine: function (t) {
                    var e, i = this.trendLines;
                    for (e = i.length - 1; 0 <= e; e--) i[e] == t && i.splice(e, 1)
                },
                adjustMargins: function (t, e) {
                    var i = t.position,
                        s = t.scrollbarHeight + t.offset;
                    t.enabled && ("top" == i ? e ? this.marginLeftReal += s : this.marginTopReal += s : e ? this.marginRightReal += s : this.marginBottomReal += s)
                },
                getScrollbarPosition: function (t, e, i) {
                    var s = "bottom",
                        a = "top";
                    t.oppositeAxis || (a = s, s = "top"), t.position = e ? "bottom" == i || "left" == i ? s : a : "top" == i || "right" == i ? s : a
                },
                updateChartScrollbar: function (t, e) {
                    if (t) {
                        t.rotate = e;
                        var i = this.marginTopReal,
                            s = this.marginLeftReal,
                            a = t.scrollbarHeight,
                            r = this.dx,
                            n = this.dy,
                            o = t.offset;
                        "top" == t.position ? e ? (t.y = i, t.x = s - a - o) : (t.y = i - a + n - o, t.x = s + r) : e ? (t.y = i + n, t.x = s + this.plotAreaWidth + r + o) : (t.y = i + this.plotAreaHeight + o, t.x = this.marginLeftReal)
                    }
                },
                showZB: function (t) {
                    var e = this.zbSet;
                    t && "" !== (e = this.zoomOutText) && e && this.drawZoomOutButton(), (e = this.zbSet) && (this.zoomButtonSet.push(e), t ? e.show() : e.hide(), this.rollOutZB())
                },
                handleReleaseOutside: function (e) {
                    t.AmRectangularChart.base.handleReleaseOutside.call(this, e), (e = this.chartCursor) && e.handleReleaseOutside && e.handleReleaseOutside()
                },
                handleMouseDown: function (e) {
                    t.AmRectangularChart.base.handleMouseDown.call(this, e);
                    var i = this.chartCursor;
                    i && i.handleMouseDown && !this.rolledOverZB && i.handleMouseDown(e)
                },
                update: function () {
                    t.AmRectangularChart.base.update.call(this), this.chartCursor && this.chartCursor.update && this.chartCursor.update()
                },
                handleScrollbarValueZoom: function (t) {
                    this.relativeZoomValueAxes(t.target.valueAxes, t.relativeStart, t.relativeEnd), this.zoomAxesAndGraphs()
                },
                zoomValueScrollbar: function (t) {
                    if (t && t.enabled) {
                        var e = t.valueAxes[0],
                            i = e.relativeStart,
                            s = e.relativeEnd;
                        e.reversed && (s = 1 - i, i = 1 - e.relativeEnd), t.percentZoom(i, s)
                    }
                },
                zoomAxesAndGraphs: function () {
                    if (!this.scrollbarOnly) {
                        var t, e = this.valueAxes;
                        for (t = 0; t < e.length; t++) e[t].zoom(this.start, this.end);
                        for (e = this.graphs, t = 0; t < e.length; t++) e[t].zoom(this.start, this.end);
                        (t = this.chartCursor) && t.clearSelection(), this.zoomTrendLines()
                    }
                },
                handleValueAxisZoomReal: function (t, e) {
                    var i = t.relativeStart,
                        s = t.relativeEnd;
                    if (i > s) var a = i,
                        i = s,
                        s = a;
                    this.relativeZoomValueAxes(e, i, s), this.updateAfterValueZoom()
                },
                updateAfterValueZoom: function () {
                    this.zoomAxesAndGraphs(), this.zoomScrollbar()
                },
                relativeZoomValueAxes: function (e, i, s) {
                    if (this.hideBalloonReal(), i = t.fitToBounds(i, 0, 1), s = t.fitToBounds(s, 0, 1), i > s) {
                        var a = i;
                        i = s, s = a
                    }
                    var a = 1 / this.maxZoomFactor,
                        r = t.getDecimals(a) + 4;
                    if (s - i < a && (s = i + (s - i) / 2, i = s - a / 2, s += a / 2, 1 < s && (i -= s - 1, s = 1), 0 > i && (i = 0, s = a)), i = t.roundTo(i, r), s = t.roundTo(s, r), a = !1, e) {
                        for (r = 0; r < e.length; r++) {
                            var n = e[r].zoomToRelativeValues(i, s, !0);
                            n && (a = n)
                        }
                        this.showZB()
                    }
                    return a
                },
                addChartCursor: function (e) {
                    t.callMethod("destroy", [this.chartCursor]), e && (this.listenTo(e, "moved", this.handleCursorMove), this.listenTo(e, "zoomed", this.handleCursorZoom), this.listenTo(e, "zoomStarted", this.handleCursorZoomStarted), this.listenTo(e, "panning", this.handleCursorPanning), this.listenTo(e, "onHideCursor", this.handleCursorHide)), this.chartCursor = e
                },
                handleCursorChange: function () {},
                handleCursorMove: function (t) {
                    var e, i = this.valueAxes;
                    for (e = 0; e < i.length; e++)
                        if (!t.panning) {
                            var s = i[e];
                            s && s.showBalloon && s.showBalloon(t.x, t.y)
                        }
                },
                handleCursorZoom: function (t) {
                    if (this.skipZoomed) this.skipZoomed = !1;
                    else {
                        var e = this.startX0,
                            i = this.endX0,
                            s = this.endY0,
                            a = this.startY0,
                            r = t.startX,
                            n = t.endX,
                            o = t.startY,
                            h = t.endY;
                        this.startX0 = this.endX0 = this.startY0 = this.endY0 = NaN, this.handleCursorZoomReal(e + r * (i - e), e + n * (i - e), a + o * (s - a), a + h * (s - a), t)
                    }
                },
                handleCursorHide: function () {
                    var t, e = this.valueAxes;
                    for (t = 0; t < e.length; t++) e[t].hideBalloon();
                    for (e = this.graphs, t = 0; t < e.length; t++) e[t].hideBalloonReal()
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.AmSerialChart = t.Class({
                inherits: t.AmRectangularChart,
                construct: function (e) {
                    this.type = "serial", t.AmSerialChart.base.construct.call(this, e), this.cname = "AmSerialChart", this.theme = e, this.columnSpacing = 5, this.columnSpacing3D = 0, this.columnWidth = .8;
                    var i = new t.CategoryAxis(e);
                    i.chart = this, this.categoryAxis = i, this.zoomOutOnDataUpdate = !0, this.mouseWheelZoomEnabled = this.mouseWheelScrollEnabled = this.rotate = this.skipZoom = !1, this.minSelectedTime = 0, t.applyTheme(this, e, this.cname)
                },
                initChart: function () {
                    t.AmSerialChart.base.initChart.call(this), this.updateCategoryAxis(this.categoryAxis, this.rotate, "categoryAxis"), this.dataChanged ? this.parseData() : this.onDataUpdated(), this.drawGraphs = !0
                },
                onDataUpdated: function () {
                    var t, e = this.countColumns(),
                        i = this.chartData,
                        s = this.graphs;
                    for (t = 0; t < s.length; t++) {
                        var a = s[t];
                        a.data = i, a.columnCount = e
                    }
                    0 < i.length && (this.firstTime = this.getStartTime(i[0].time), this.lastTime = this.getEndTime(i[i.length - 1].time)), this.drawChart(), this.autoMargins && !this.marginsUpdated ? (this.marginsUpdated = !0, this.measureMargins()) : this.dispDUpd()
                },
                syncGrid: function () {
                    if (this.synchronizeGrid) {
                        var e, i, s = this.valueAxes;
                        if (0 < s.length) {
                            var a = 0;
                            for (i = 0; i < s.length; i++) e = s[i], a < e.gridCountReal && (a = e.gridCountReal);
                            var r = !1;
                            for (i = 0; i < s.length; i++)
                                if (e = s[i], e.gridCountReal < a) {
                                    var n = (a - e.gridCountReal) / 2,
                                        o = r = n;
                                    0 != n - Math.round(n) && (r -= .5, o += .5), 0 <= e.min && 0 > e.min - r * e.step && (o += r, r = 0), 0 >= e.max && 0 < e.max + o * e.step && (r += o, o = 0), n = t.getDecimals(e.step), e.minimum = t.roundTo(e.min - r * e.step, n), e.maximum = t.roundTo(e.max + o * e.step, n), e.setStep = e.step, r = e.strictMinMax = !0
                                }
                            for (r && this.updateAfterValueZoom(), i = 0; i < s.length; i++) e = s[i], e.minimum = NaN, e.maximum = NaN, e.setStep = NaN, e.strictMinMax = !1
                        }
                    }
                },
                handleWheelReal: function (t, e) {
                    if (!this.wheelBusy) {
                        var i = this.categoryAxis,
                            s = i.parseDates,
                            a = i.minDuration(),
                            r = 1,
                            n = 1;
                        this.mouseWheelZoomEnabled ? e || (r = -1) : e && (r = -1);
                        var o = this.chartCursor;
                        if (o) {
                            var h = o.mouseX,
                                o = o.mouseY;
                            r != n && (h = this.rotate ? o / this.plotAreaHeight : h / this.plotAreaWidth, r *= h, n *= 1 - h), h = .05 * (this.end - this.start), s && (h = .05 * (this.endTime - this.startTime) / a), 1 > h && (h = 1), r *= h, n *= h, s && !i.equalSpacing || (r = Math.round(r), n = Math.round(n))
                        }
                        o = this.chartData.length, i = this.lastTime, h = this.firstTime, 0 > t ? s ? (o = this.endTime - this.startTime, s = this.startTime + r * a, a = this.endTime + n * a, 0 < n && 0 < r && a >= i && (a = i, s = i - o), this.zoomToDates(new Date(s), new Date(a))) : (0 < n && 0 < r && this.end >= o - 1 && (r = n = 0), s = this.start + r, a = this.end + n, this.zoomToIndexes(s, a)) : s ? (o = this.endTime - this.startTime, s = this.startTime - r * a, a = this.endTime - n * a, 0 < n && 0 < r && s <= h && (s = h, a = h + o), this.zoomToDates(new Date(s), new Date(a))) : (0 < n && 0 < r && 1 > this.start && (r = n = 0), s = this.start - r, a = this.end - n, this.zoomToIndexes(s, a))
                    }
                },
                validateData: function (e) {
                    this.marginsUpdated = !1, this.zoomOutOnDataUpdate && !e && (this.endTime = this.end = this.startTime = this.start = NaN);
                    var i = e = !1,
                        s = !1,
                        a = this.chartScrollbar;
                    a && (a.dragging && (e = !0, a.handleDragStop()), a.resizingRight && (s = !0, a.rightDragStop()), a.resizingLeft && (i = !0, a.leftDragStop())), t.AmSerialChart.base.validateData.call(this), e && a.handleDragStart(), s && a.rightDragStart(), i && a.leftDragStart()
                },
                drawChart: function () {
                    if (0 < this.realWidth && 0 < this.realHeight) {
                        t.AmSerialChart.base.drawChart.call(this);
                        var e = this.chartData;
                        if (t.ifArray(e)) {
                            var i = this.chartScrollbar;
                            !i || !this.marginsUpdated && this.autoMargins || i.draw(), (i = this.valueScrollbar) && i.draw();
                            var s, a, i = e.length - 1;
                            s = this.categoryAxis, s.parseDates && !s.equalSpacing ? (s = this.startTime, a = this.endTime, (isNaN(s) || isNaN(a)) && (s = this.firstTime, a = this.lastTime)) : (s = this.start, a = this.end, (isNaN(s) || isNaN(a)) && (a = s = NaN), isNaN(s) && (isNaN(this.startTime) || (s = this.getClosestIndex(e, "time", this.startTime, !0, 0, e.length))), isNaN(a) && (isNaN(this.endTime) || (a = this.getClosestIndex(e, "time", this.endTime, !1, 0, e.length))), (isNaN(s) || isNaN(a)) && (s = 0, a = i)), this.endTime = this.startTime = this.end = this.start = void 0, this.zoom(s, a)
                        }
                    } else this.cleanChart()
                },
                cleanChart: function () {
                    t.callMethod("destroy", [this.valueAxes, this.graphs, this.categoryAxis, this.chartScrollbar, this.chartCursor, this.valueScrollbar])
                },
                updateCategoryAxis: function (t, e, i) {
                    t.chart = this, t.id = i, t.rotate = e, t.setOrientation(!this.rotate), t.init(), this.setAxisRenderers(t), this.updateObjectSize(t)
                },
                updateValueAxes: function () {
                    t.AmSerialChart.base.updateValueAxes.call(this);
                    var e, i = this.valueAxes;
                    for (e = 0; e < i.length; e++) {
                        var s = i[e],
                            a = this.rotate;
                        s.rotate = a, s.setOrientation(a), a = this.categoryAxis, a.startOnAxis && !a.parseDates || (s.expandMinMax = !0)
                    }
                },
                getStartTime: function (e) {
                    var i = this.categoryAxis;
                    return t.resetDateToMin(new Date(e), i.minPeriod, 1, i.firstDayOfWeek).getTime()
                },
                getEndTime: function (e) {
                    var i = t.extractPeriod(this.categoryAxis.minPeriod);
                    return t.changeDate(new Date(e), i.period, i.count, !0).getTime() - 1
                },
                updateMargins: function () {
                    t.AmSerialChart.base.updateMargins.call(this);
                    var e = this.chartScrollbar;
                    e && (this.getScrollbarPosition(e, this.rotate, this.categoryAxis.position), this.adjustMargins(e, this.rotate)), (e = this.valueScrollbar) && (this.getScrollbarPosition(e, !this.rotate, this.valueAxes[0].position), this.adjustMargins(e, !this.rotate))
                },
                updateScrollbars: function () {
                    t.AmSerialChart.base.updateScrollbars.call(this), this.updateChartScrollbar(this.chartScrollbar, this.rotate), this.updateChartScrollbar(this.valueScrollbar, !this.rotate)
                },
                zoom: function (t, e) {
                    var i = this.categoryAxis;
                    i.parseDates && !i.equalSpacing ? (this.timeZoom(t, e), isNaN(t) && this.zoomOutValueAxes()) : this.indexZoom(t, e), (i = this.chartCursor) && (i.pan || i.hideCursorReal()), this.updateLegendValues()
                },
                timeZoom: function (e, i) {
                    var s = this.maxSelectedTime;
                    isNaN(s) || (i != this.endTime && i - e > s && (e = i - s), e != this.startTime && i - e > s && (i = e + s));
                    var a = this.minSelectedTime;
                    if (0 < a && i - e < a) {
                        var r = Math.round(e + (i - e) / 2),
                            a = Math.round(a / 2);
                        e = r - a, i = r + a
                    }
                    if (a = this.chartData, r = this.categoryAxis, t.ifArray(a) && (e != this.startTime || i != this.endTime)) {
                        var n = r.minDuration(),
                            o = this.firstTime,
                            h = this.lastTime;
                        e || (e = o, isNaN(s) || (e = h - s)), i || (i = h), e > h && (e = h), i < o && (i = o), e < o && (e = o), i > h && (i = h), i < e && (i = e + n), i - e < n / 5 && (i < h ? i = e + n / 5 : e = i - n / 5), this.startTime = e, this.endTime = i, s = a.length - 1, n = this.getClosestIndex(a, "time", e, !0, 0, s), a = this.getClosestIndex(a, "time", i, !1, n, s), r.timeZoom(e, i), r.zoom(n, a), this.start = t.fitToBounds(n, 0, s), this.end = t.fitToBounds(a, 0, s), this.zoomAxesAndGraphs(), this.zoomScrollbar(), this.fixCursor(), this.showZB(), this.syncGrid(), this.updateColumnsDepth(), this.dispatchTimeZoomEvent()
                    }
                },
                showZB: function () {
                    var e, i = this.categoryAxis;
                    i && i.parseDates && !i.equalSpacing && (this.startTime > this.firstTime && (e = !0), this.endTime < this.lastTime && (e = !0)), 0 < this.start && (e = !0), this.end < this.chartData.length - 1 && (e = !0), (i = this.valueAxes) && (i = i[0], isNaN(i.relativeStart) || (0 !== t.roundTo(i.relativeStart, 3) && (e = !0), 1 != t.roundTo(i.relativeEnd, 3) && (e = !0))), t.AmSerialChart.base.showZB.call(this, e)
                },
                updateAfterValueZoom: function () {
                    t.AmSerialChart.base.updateAfterValueZoom.call(this), this.updateColumnsDepth()
                },
                indexZoom: function (t, e) {
                    var i = this.maxSelectedSeries,
                        s = !1;
                    if (isNaN(i) || (e != this.end && e - t > i && (t = e - i, s = !0), t != this.start && e - t > i && (e = t + i, s = !0)), s && (s = this.chartScrollbar) && s.dragger) {
                        var a = s.dragger.getBBox();
                        s.maxWidth = a.width, s.maxHeight = a.height
                    }
                    t == this.start && e == this.end || (s = this.chartData.length - 1, isNaN(t) && (t = 0, isNaN(i) || (t = s - i)), isNaN(e) && (e = s), e < t && (e = t), e > s && (e = s), t > s && (t = s - 1), 0 > t && (t = 0), this.start = t, this.end = e, this.categoryAxis.zoom(t, e), this.zoomAxesAndGraphs(), this.zoomScrollbar(), this.fixCursor(), 0 !== t || e != this.chartData.length - 1 ? this.showZB(!0) : this.showZB(!1), this.syncGrid(), this.updateColumnsDepth(), this.dispatchIndexZoomEvent())
                },
                updateGraphs: function () {
                    t.AmSerialChart.base.updateGraphs.call(this);
                    var e, i = this.graphs;
                    for (e = 0; e < i.length; e++) {
                        var s = i[e];
                        s.columnWidthReal = this.columnWidth, s.categoryAxis = this.categoryAxis, t.isString(s.fillToGraph) && (s.fillToGraph = this.graphsById[s.fillToGraph])
                    }
                },
                zoomAxesAndGraphs: function () {
                    t.AmSerialChart.base.zoomAxesAndGraphs.call(this), this.updateColumnsDepth()
                },
                updateColumnsDepth: function () {
                    if (0 !== this.depth3D || 0 !== this.angle) {
                        var e, i, s = this.graphs;
                        for (this.columnsArray = [], e = 0; e < s.length; e++) {
                            i = s[e];
                            var a = i.columnsArray;
                            if (a) {
                                var r;
                                for (r = 0; r < a.length; r++) this.columnsArray.push(a[r])
                            }
                        }
                        if (this.columnsArray.sort(this.compareDepth), s = this.columnsSet, 0 < this.columnsArray.length) {
                            for (a = this.container.set(), this.columnSet.push(a), e = 0; e < this.columnsArray.length; e++) a.push(this.columnsArray[e].column.set);
                            i && a.translate(i.x, i.y), this.columnsSet = a
                        }
                        t.remove(s)
                    }
                },
                compareDepth: function (t, e) {
                    return t.depth > e.depth ? 1 : -1
                },
                zoomScrollbar: function () {
                    var t = this.chartScrollbar,
                        e = this.categoryAxis;
                    if (t) {
                        if (!this.zoomedByScrollbar) {
                            var i = t.dragger;
                            i && i.stop()
                        }
                        this.zoomedByScrollbar = !1, e.parseDates && !e.equalSpacing ? t.timeZoom(this.startTime, this.endTime) : t.zoom(this.start, this.end)
                    }
                    this.zoomValueScrollbar(this.valueScrollbar)
                },
                updateTrendLines: function () {
                    var e, i = this.trendLines;
                    for (e = 0; e < i.length; e++) {
                        var s = i[e],
                            s = t.processObject(s, t.TrendLine, this.theme);
                        i[e] = s, s.chart = this, s.id || (s.id = "trendLineAuto" + e + "_" + (new Date).getTime()), t.isString(s.valueAxis) && (s.valueAxis = this.getValueAxisById(s.valueAxis)), s.valueAxis || (s.valueAxis = this.valueAxes[0]), s.categoryAxis = this.categoryAxis
                    }
                },
                validateNow: function (e, i) {
                    e && this.zoomOutOnDataUpdate && (this.endTime = this.end = this.startTime = this.start = NaN), t.AmSerialChart.base.validateNow.call(this, e, i)
                },
                countColumns: function () {
                    var t, e, i, s, a = 0,
                        r = this.valueAxes.length,
                        n = this.graphs.length,
                        o = !1;
                    for (s = 0; s < r; s++) {
                        e = this.valueAxes[s];
                        var h = e.stackType,
                            l = 0;
                        if ("100%" == h || "regular" == h)
                            for (o = !1, i = 0; i < n; i++) t = this.graphs[i], t.tcc = 1, t.valueAxis == e && "column" == t.type && (!o && t.stackable && (a++, o = !0), (!t.stackable && t.clustered || t.newStack && 0 !== l) && a++, t.columnIndex = a - 1, t.clustered || (t.columnIndex = 0), l++);
                        if ("none" == h || "3d" == h) {
                            for (l = !1, i = 0; i < n; i++) t = this.graphs[i], t.valueAxis == e && "column" == t.type && (t.clustered ? (t.tcc = 1, t.newStack && (a = 0), t.hidden || (t.columnIndex = a, a++)) : t.hidden || (l = !0, t.tcc = 1, t.columnIndex = 0));
                            l && 0 === a && (a = 1)
                        }
                        if ("3d" == h) {
                            for (e = 1, l = 0; l < n; l++) t = this.graphs[l], t.newStack && e++, t.depthCount = e, t.tcc = a;
                            a = e
                        }
                    }
                    return a
                },
                parseData: function () {
                    t.AmSerialChart.base.parseData.call(this), this.parseSerialData(this.dataProvider)
                },
                getCategoryIndexByValue: function (t) {
                    var e, i = this.chartData;
                    for (e = 0; e < i.length; e++)
                        if (i[e].category == t) return e
                },
                handleScrollbarZoom: function (t) {
                    this.zoomedByScrollbar = !0, this.zoom(t.start, t.end)
                },
                dispatchTimeZoomEvent: function () {
                    if (this.drawGraphs && (this.prevStartTime != this.startTime || this.prevEndTime != this.endTime)) {
                        var e = {
                            type: "zoomed"
                        };
                        e.startDate = new Date(this.startTime), e.endDate = new Date(this.endTime), e.startIndex = this.start, e.endIndex = this.end, this.startIndex = this.start, this.endIndex = this.end, this.startDate = e.startDate, this.endDate = e.endDate, this.prevStartTime = this.startTime, this.prevEndTime = this.endTime;
                        var i = this.categoryAxis,
                            s = t.extractPeriod(i.minPeriod).period,
                            i = i.dateFormatsObject[s];
                        e.startValue = t.formatDate(e.startDate, i, this), e.endValue = t.formatDate(e.endDate, i, this), e.chart = this, e.target = this, this.fire(e)
                    }
                },
                dispatchIndexZoomEvent: function () {
                    if (this.drawGraphs && (this.prevStartIndex != this.start || this.prevEndIndex != this.end)) {
                        this.startIndex = this.start, this.endIndex = this.end;
                        var e = this.chartData;
                        if (t.ifArray(e) && !isNaN(this.start) && !isNaN(this.end)) {
                            var i = {
                                chart: this,
                                target: this,
                                type: "zoomed"
                            };
                            i.startIndex = this.start, i.endIndex = this.end, i.startValue = e[this.start].category, i.endValue = e[this.end].category, this.categoryAxis.parseDates && (this.startTime = e[this.start].time, this.endTime = e[this.end].time, i.startDate = new Date(this.startTime), i.endDate = new Date(this.endTime)), this.prevStartIndex = this.start, this.prevEndIndex = this.end, this.fire(i)
                        }
                    }
                },
                updateLegendValues: function () {
                    this.legend && this.legend.updateValues()
                },
                getClosestIndex: function (t, e, i, s, a, r) {
                    0 > a && (a = 0), r > t.length - 1 && (r = t.length - 1);
                    var n = a + Math.round((r - a) / 2),
                        o = t[n][e];
                    return i == o ? n : 1 >= r - a ? s ? a : Math.abs(t[a][e] - i) < Math.abs(t[r][e] - i) ? a : r : i == o ? n : i < o ? this.getClosestIndex(t, e, i, s, a, n) : this.getClosestIndex(t, e, i, s, n, r)
                },
                zoomToIndexes: function (t, e) {
                    var i = this.chartData;
                    if (i) {
                        var s = i.length;
                        0 < s && (0 > t && (t = 0), e > s - 1 && (e = s - 1), s = this.categoryAxis, s.parseDates && !s.equalSpacing ? this.zoom(i[t].time, this.getEndTime(i[e].time)) : this.zoom(t, e))
                    }
                },
                zoomToDates: function (e, i) {
                    var s = this.chartData;
                    if (s)
                        if (this.categoryAxis.equalSpacing) {
                            var a = this.getClosestIndex(s, "time", e.getTime(), !0, 0, s.length);
                            i = t.resetDateToMin(i, this.categoryAxis.minPeriod, 1), s = this.getClosestIndex(s, "time", i.getTime(), !1, 0, s.length), this.zoom(a, s)
                        } else this.zoom(e.getTime(), i.getTime())
                },
                zoomToCategoryValues: function (t, e) {
                    this.chartData && this.zoom(this.getCategoryIndexByValue(t), this.getCategoryIndexByValue(e))
                },
                formatPeriodString: function (e, i) {
                    if (i) {
                        i.periodDataItem = {}, i.periodPercentDataItem = {};
                        var s = ["value", "open", "low", "high", "close"],
                            a = "value open low high close average sum count".split(" "),
                            r = i.valueAxis,
                            n = this.chartData,
                            o = i.numberFormatter;
                        o || (o = this.nf);
                        for (var h = 0; h < s.length; h++) {
                            for (var l, d, u, c, p, m, f, g, v, b, x = s[h], y = 0, C = 0, N = 0, w = 0, M = this.start; M <= this.end; M++) {
                                var A = n[M];
                                if (A) {
                                    var S = A.axes[r.id].graphs[i.id];
                                    if (S) {
                                        if (S.values) {
                                            var T = S.values[x],
                                                A = A.x.categoryAxis;
                                            this.rotate ? (0 > A || A > S.graph.height) && (T = NaN) : (0 > A || A > S.graph.width) && (T = NaN), isNaN(T) || (isNaN(l) && (l = T), d = T, (isNaN(u) || u > T) && (u = T), (isNaN(c) || c < T) && (c = T), p = t.getDecimals(y), A = t.getDecimals(T), y += T, y = t.roundTo(y, Math.max(p, A)), C++, p = y / C)
                                        }
                                        S.percents && (S = S.percents[x], !isNaN(S)) && (isNaN(m) && (m = S), f = S, (isNaN(g) || g > S) && (g = S), (isNaN(v) || v < S) && (v = S), b = t.getDecimals(N), T = t.getDecimals(S), N += S, N = t.roundTo(N, Math.max(b, T)), w++, b = N / w)
                                    }
                                }
                            }
                            y = {
                                open: l,
                                close: d,
                                high: c,
                                low: u,
                                average: p,
                                sum: y,
                                count: C
                            }, N = {
                                open: m,
                                close: f,
                                high: v,
                                low: g,
                                average: b,
                                sum: N,
                                count: w
                            }, e = t.formatValue(e, y, a, o, x + "\\.", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers), e = t.formatValue(e, N, a, this.pf, "percents\\." + x + "\\."), i.periodDataItem[x] = y, i.periodPercentDataItem[x] = N
                        }
                    }
                    return e = t.cleanFromEmpty(e)
                },
                formatString: function (e, i, s) {
                    if (i) {
                        var a = i.graph;
                        if (void 0 !== e) {
                            if (-1 != e.indexOf("[[category]]")) {
                                var r = i.serialDataItem.category;
                                if (this.categoryAxis.parseDates) {
                                    var n = this.balloonDateFormat,
                                        o = this.chartCursor;
                                    o && o.categoryBalloonDateFormat && (n = o.categoryBalloonDateFormat), n = t.formatDate(r, n, this), -1 != n.indexOf("fff") && (n = t.formatMilliseconds(n, r)), r = n
                                }
                                e = e.replace(/\[\[category\]\]/g, String(r.replace("$", "$$$")))
                            }
                            r = a.numberFormatter, r || (r = this.nf), n = i.graph.valueAxis, (o = n.duration) && !isNaN(i.values.value) && (o = t.formatDuration(i.values.value, o, "", n.durationUnits, n.maxInterval, r), e = e.replace(RegExp("\\[\\[value\\]\\]", "g"), o)), "date" == n.type && (n = t.formatDate(new Date(i.values.value), a.dateFormat, this), o = RegExp("\\[\\[value\\]\\]", "g"), e = e.replace(o, n), n = t.formatDate(new Date(i.values.open), a.dateFormat, this), o = RegExp("\\[\\[open\\]\\]", "g"), e = e.replace(o, n)), a = "value open low high close total".split(" "), n = this.pf, e = t.formatValue(e, i.percents, a, n, "percents\\."), e = t.formatValue(e, i.values, a, r, "", this.usePrefixes, this.prefixesOfSmallNumbers, this.prefixesOfBigNumbers), e = t.formatValue(e, i.values, ["percents"], n), -1 != e.indexOf("[[") && (e = t.formatDataContextValue(e, i.dataContext)), -1 != e.indexOf("[[") && i.graph.customData && (e = t.formatDataContextValue(e, i.graph.customData)), e = t.AmSerialChart.base.formatString.call(this, e, i, s)
                        }
                        return e
                    }
                },
                updateChartCursor: function () {
                    t.AmSerialChart.base.updateChartCursor.call(this);
                    var e = this.chartCursor,
                        i = this.categoryAxis;
                    if (e) {
                        var s = e.categoryBalloonAlpha,
                            a = e.categoryBalloonColor,
                            r = e.color;
                        void 0 === a && (a = e.cursorColor);
                        var n = e.valueZoomable,
                            o = e.zoomable,
                            h = e.valueLineEnabled;
                        if (this.rotate ? (e.vLineEnabled = h, e.hZoomEnabled = n, e.vZoomEnabled = o) : (e.hLineEnabled = h, e.vZoomEnabled = n, e.hZoomEnabled = o), e.valueLineBalloonEnabled)
                            for (h = 0; h < this.valueAxes.length; h++) n = this.valueAxes[h], (o = n.balloon) || (o = {}), o = t.extend(o, this.balloon, !0), o.fillColor = a, o.balloonColor = a, o.fillAlpha = s, o.borderColor = a, o.color = r, n.balloon = o;
                        else
                            for (o = 0; o < this.valueAxes.length; o++) n = this.valueAxes[o], n.balloon && (n.balloon = null);
                        i && (i.balloonTextFunction = e.categoryBalloonFunction, e.categoryLineAxis = i, i.balloonText = e.categoryBalloonText, e.categoryBalloonEnabled && ((o = i.balloon) || (o = {}), o = t.extend(o, this.balloon, !0), o.fillColor = a, o.balloonColor = a, o.fillAlpha = s, o.borderColor = a, o.color = r, i.balloon = o), i.balloon && (i.balloon.enabled = e.categoryBalloonEnabled))
                    }
                },
                addChartScrollbar: function (e) {
                    t.callMethod("destroy", [this.chartScrollbar]), e && (e.chart = this, this.listenTo(e, "zoomed", this.handleScrollbarZoom)), this.rotate ? void 0 === e.width && (e.width = e.scrollbarHeight) : void 0 === e.height && (e.height = e.scrollbarHeight), e.gridAxis = this.categoryAxis, this.chartScrollbar = e
                },
                addValueScrollbar: function (e) {
                    t.callMethod("destroy", [this.valueScrollbar]), e && (e.chart = this, this.listenTo(e, "zoomed", this.handleScrollbarValueZoom), this.listenTo(e, "zoomStarted", this.handleCursorZoomStarted));
                    var i = e.scrollbarHeight;
                    this.rotate ? void 0 === e.height && (e.height = i) : void 0 === e.width && (e.width = i), e.gridAxis || (e.gridAxis = this.valueAxes[0]), e.valueAxes = this.valueAxes, this.valueScrollbar = e
                },
                removeChartScrollbar: function () {
                    t.callMethod("destroy", [this.chartScrollbar]), this.chartScrollbar = null
                },
                removeValueScrollbar: function () {
                    t.callMethod("destroy", [this.valueScrollbar]), this.valueScrollbar = null
                },
                handleReleaseOutside: function (e) {
                    t.AmSerialChart.base.handleReleaseOutside.call(this, e), t.callMethod("handleReleaseOutside", [this.chartScrollbar, this.valueScrollbar])
                },
                update: function () {
                    t.AmSerialChart.base.update.call(this), this.chartScrollbar && this.chartScrollbar.update && this.chartScrollbar.update(), this.valueScrollbar && this.valueScrollbar.update && this.valueScrollbar.update()
                },
                processScrollbars: function () {
                    t.AmSerialChart.base.processScrollbars.call(this);
                    var e = this.valueScrollbar;
                    e && (e = t.processObject(e, t.ChartScrollbar, this.theme), e.id = "valueScrollbar", this.addValueScrollbar(e))
                },
                handleValueAxisZoom: function (t) {
                    this.handleValueAxisZoomReal(t, this.valueAxes)
                },
                zoomOut: function () {
                    t.AmSerialChart.base.zoomOut.call(this), this.zoom(), this.syncGrid()
                },
                getNextItem: function (t) {
                    var e = t.index,
                        i = this.chartData,
                        s = t.graph;
                    if (e + 1 < i.length)
                        for (e += 1; e < i.length; e++)
                            if ((t = i[e]) && (t = t.axes[s.valueAxis.id].graphs[s.id], !isNaN(t.y))) return t
                },
                handleCursorZoomReal: function (t, e, i, s, a) {
                    var r, n, o = a.target;
                    this.rotate ? (isNaN(t) || isNaN(e) || this.relativeZoomValueAxes(this.valueAxes, t, e) && this.updateAfterValueZoom(), o.vZoomEnabled && (r = a.start, n = a.end)) : (isNaN(i) || isNaN(s) || this.relativeZoomValueAxes(this.valueAxes, i, s) && this.updateAfterValueZoom(), o.hZoomEnabled && (r = a.start, n = a.end)), isNaN(r) || isNaN(n) || (t = this.categoryAxis, t.parseDates && !t.equalSpacing ? this.zoomToDates(new Date(r), new Date(n)) : this.zoomToIndexes(r, n))
                },
                handleCursorZoomStarted: function () {
                    var t = this.valueAxes;
                    if (t) {
                        var t = t[0],
                            e = t.relativeStart,
                            i = t.relativeEnd;
                        t.reversed && (e = 1 - t.relativeEnd, i = 1 - t.relativeStart), this.rotate ? (this.startX0 = e, this.endX0 = i) : (this.startY0 = e, this.endY0 = i)
                    }
                    this.categoryAxis && (this.start0 = this.start, this.end0 = this.end, this.startTime0 = this.startTime, this.endTime0 = this.endTime)
                },
                fixCursor: function () {
                    this.chartCursor && this.chartCursor.fixPosition(), this.prevCursorItem = null
                },
                handleCursorMove: function (e) {
                    t.AmSerialChart.base.handleCursorMove.call(this, e);
                    var i = e.target,
                        s = this.categoryAxis;
                    if (e.panning) this.handleCursorHide(e);
                    else if (this.chartData && !i.isHidden) {
                        var a = this.graphs;
                        if (a) {
                            var r;
                            if (r = s.xToIndex(this.rotate ? e.y : e.x), r = this.chartData[r]) {
                                var n, o, h, l;
                                if (i.oneBalloonOnly && i.valueBalloonsEnabled) {
                                    var d = 1 / 0;
                                    for (n = a.length - 1; 0 <= n; n--)
                                        if (o = a[n], o.balloon.enabled && o.showBalloon && !o.hidden) {
                                            if (h = o.valueAxis.id, h = r.axes[h].graphs[o.id], i.showNextAvailable && isNaN(h.y) && !(h = this.getNextItem(h))) continue;
                                            h = h.y, "top" == o.showBalloonAt && (h = 0), "bottom" == o.showBalloonAt && (h = this.height);
                                            var u = i.mouseX,
                                                c = i.mouseY;
                                            h = this.rotate ? Math.abs(u - h) : Math.abs(c - h), h < d && (d = h, l = o)
                                        }
                                    i.mostCloseGraph = l
                                }
                                if (this.prevCursorItem != r || l != this.prevMostCloseGraph) {
                                    for (d = [], n = 0; n < a.length; n++) o = a[n], h = o.valueAxis.id, h = r.axes[h].graphs[o.id], i.showNextAvailable && isNaN(h.y) && !(h = this.getNextItem(h)) && o.balloon ? o.balloon.hide() : l && o != l ? (o.showGraphBalloon(h, i.pointer, !1, i.graphBulletSize, i.graphBulletAlpha), o.balloon.hide(0)) : i.valueBalloonsEnabled ? (o.balloon.showBullet = i.bulletsEnabled, o.balloon.bulletSize = i.bulletSize / 2, e.hideBalloons || (o.showGraphBalloon(h, i.pointer, !1, i.graphBulletSize, i.graphBulletAlpha), o.balloon.set && d.push({
                                        balloon: o.balloon,
                                        y: o.balloon.pointToY
                                    }))) : (o.currentDataItem = h, o.resizeBullet(h, i.graphBulletSize, i.graphBulletAlpha));
                                    i.avoidBalloonOverlapping && this.arrangeBalloons(d), this.prevCursorItem = r
                                }
                                this.prevMostCloseGraph = l
                            }
                        }
                        a = t.fitToBounds(e.x, 0, i.width), l = t.fitToBounds(e.y, 0, i.height), s.showBalloon(a, l, i.categoryBalloonDateFormat, e.skip), this.updateLegendValues()
                    }
                },
                handleCursorHide: function (e) {
                    t.AmSerialChart.base.handleCursorHide.call(this, e), e = this.categoryAxis, this.prevCursorItem = null, this.updateLegendValues(), e && e.hideBalloon(), e = this.graphs;
                    var i;
                    for (i = 0; i < e.length; i++) e[i].currentDataItem = null
                },
                handleCursorPanning: function (e) {
                    var i, s = e.target,
                        a = e.deltaX,
                        r = e.deltaY,
                        n = e.delta2X,
                        o = e.delta2Y;
                    if (e = !1, this.rotate) {
                        isNaN(n) && (n = a, e = !0);
                        var h = this.endX0;
                        i = this.startX0;
                        var l = h - i,
                            h = h - l * n,
                            d = l;
                        e || (d = 0), e = t.fitToBounds(i - l * a, 0, 1 - d)
                    } else isNaN(o) && (o = r, e = !0), h = this.endY0, i = this.startY0, l = h - i, h += l * r, d = l, e || (d = 0), e = t.fitToBounds(i + l * o, 0, 1 - d);
                    i = t.fitToBounds(h, d, 1);
                    var u;
                    s.valueZoomable && (u = this.relativeZoomValueAxes(this.valueAxes, e, i));
                    var c;
                    i = this.categoryAxis, this.rotate && (a = r, n = o), e = !1, isNaN(n) && (n = a, e = !0), s.zoomable && (0 < Math.abs(a) || 0 < Math.abs(n)) && (i.parseDates && !i.equalSpacing ? (o = this.startTime0, r = this.endTime0, i = r - o, n *= i, l = this.firstTime, h = this.lastTime, d = i, e || (d = 0), e = Math.round(t.fitToBounds(o - i * a, l, h - d)), n = Math.round(t.fitToBounds(r - n, l + d, h)), (this.startTime != e || this.endTime != n) && (c = {
                        chart: this,
                        target: s,
                        type: "zoomed",
                        start: e,
                        end: n
                    }, this.skipZoomed = !0, s.fire(c), this.zoom(e, n), c = !0)) : (o = this.start0, r = this.end0, i = r - o, a = Math.round(i * a), n = Math.round(i * n), l = this.chartData.length - 1, e || (i = 0), e = t.fitToBounds(o - a, 0, l - i), i = t.fitToBounds(r - n, i, l), (this.start != e || this.end != i) && (this.skipZoomed = !0, s.fire({
                        chart: this,
                        target: s,
                        type: "zoomed",
                        start: e,
                        end: i
                    }), this.zoom(e, i), c = !0))), !c && u && this.updateAfterValueZoom()
                },
                arrangeBalloons: function (t) {
                    var e = this.plotAreaHeight;
                    t.sort(this.compareY);
                    var i, s, a, r = this.plotAreaWidth,
                        n = t.length;
                    for (i = 0; i < n; i++) s = t[i].balloon, s.setBounds(0, 0, r, e), s.restorePrevious(), s.draw(), e = s.yPos - 3;
                    for (t.reverse(), i = 0; i < n; i++) {
                        s = t[i].balloon;
                        var e = s.bottom,
                            o = s.bottom - s.yPos;
                        0 < i && e - o < a + 3 && s.setBounds && (s.setBounds(0, a + 3, r, a + o + 3), s.restorePrevious(), s.draw()), s.set && s.set.show(), a = s.bottom
                    }
                },
                compareY: function (t, e) {
                    return t.y < e.y ? 1 : -1
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.Cuboid = t.Class({
                construct: function (t, e, i, s, a, r, n, o, h, l, d, u, c, p, m, f, g) {
                    this.set = t.set(), this.container = t, this.h = Math.round(i), this.w = Math.round(e), this.dx = s, this.dy = a, this.colors = r, this.alpha = n, this.bwidth = o, this.bcolor = h, this.balpha = l, this.dashLength = p, this.topRadius = f, this.pattern = m, this.rotate = c, this.bcn = g, c ? 0 > e && 0 === d && (d = 180) : 0 > i && 270 == d && (d = 90), this.gradientRotation = d, 0 === s && 0 === a && (this.cornerRadius = u), this.draw()
                },
                draw: function () {
                    var e = this.set;
                    e.clear();
                    var i = this.container,
                        s = i.chart,
                        a = this.w,
                        r = this.h,
                        n = this.dx,
                        o = this.dy,
                        h = this.colors,
                        l = this.alpha,
                        d = this.bwidth,
                        u = this.bcolor,
                        c = this.balpha,
                        p = this.gradientRotation,
                        m = this.cornerRadius,
                        f = this.dashLength,
                        g = this.pattern,
                        v = this.topRadius,
                        b = this.bcn,
                        x = h,
                        y = h;
                    "object" == typeof h && (x = h[0], y = h[h.length - 1]);
                    var C, N, w, M, A, S, T, D, L, k = l;
                    g && (l = 0);
                    var B, O, R, I, E = this.rotate;
                    if (0 < Math.abs(n) || 0 < Math.abs(o))
                        if (isNaN(v)) T = y, y = t.adjustLuminosity(x, -.2), y = t.adjustLuminosity(x, -.2), C = t.polygon(i, [0, n, a + n, a, 0], [0, o, o, 0, 0], y, l, 1, u, 0, p), 0 < c && (L = t.line(i, [0, n, a + n], [0, o, o], u, c, d, f)), N = t.polygon(i, [0, 0, a, a, 0], [0, r, r, 0, 0], y, l, 1, u, 0, p), N.translate(n, o), 0 < c && (w = t.line(i, [n, n], [o, o + r], u, c, d, f)), M = t.polygon(i, [0, 0, n, n, 0], [0, r, r + o, o, 0], y, l, 1, u, 0, p), A = t.polygon(i, [a, a, a + n, a + n, a], [0, r, r + o, o, 0], y, l, 1, u, 0, p), 0 < c && (S = t.line(i, [a, a + n, a + n, a], [0, o, r + o, r], u, c, d, f)), y = t.adjustLuminosity(T, .2), T = t.polygon(i, [0, n, a + n, a, 0], [r, r + o, r + o, r, r], y, l, 1, u, 0, p), 0 < c && (D = t.line(i, [0, n, a + n], [r, r + o, r + o], u, c, d, f));
                        else {
                            var P, F, z;
                            E ? (P = r / 2, y = n / 2, z = r / 2, F = a + n / 2, O = Math.abs(r / 2), B = Math.abs(n / 2)) : (y = a / 2, P = o / 2, F = a / 2, z = r + o / 2 + 1, B = Math.abs(a / 2), O = Math.abs(o / 2)), R = B * v, I = O * v, .1 < B && .1 < B && (C = t.circle(i, B, x, l, d, u, c, !1, O), C.translate(y, P)), .1 < R && .1 < R && (T = t.circle(i, R, t.adjustLuminosity(x, .5), l, d, u, c, !1, I), T.translate(F, z))
                        }
                    for (l = k, 1 > Math.abs(r) && (r = 0), 1 > Math.abs(a) && (a = 0), !isNaN(v) && (0 < Math.abs(n) || 0 < Math.abs(o)) ? (h = [x], h = {
                            fill: h,
                            stroke: u,
                            "stroke-width": d,
                            "stroke-opacity": c,
                            "fill-opacity": l
                        }, E ? (l = "M0,0 L" + a + "," + (r / 2 - r / 2 * v), d = " B", 0 < a && (d = " A"), t.VML ? (l += d + Math.round(a - R) + "," + Math.round(r / 2 - I) + "," + Math.round(a + R) + "," + Math.round(r / 2 + I) + "," + a + ",0," + a + "," + r, l = l + " L0," + r + (d + Math.round(-B)) + "," + Math.round(r / 2 - O) + "," + Math.round(B) + "," + Math.round(r / 2 + O) + ",0," + r + ",0,0") : (l += "A" + R + "," + I + ",0,0,0," + a + "," + (r - r / 2 * (1 - v)) + "L0," + r, l += "A" + B + "," + O + ",0,0,1,0,0"), B = 90) : (d = a / 2 - a / 2 * v, l = "M0,0 L" + d + "," + r, t.VML ? (l = "M0,0 L" + d + "," + r, d = " B", 0 > r && (d = " A"), l += d + Math.round(a / 2 - R) + "," + Math.round(r - I) + "," + Math.round(a / 2 + R) + "," + Math.round(r + I) + ",0," + r + "," + a + "," + r, l += " L" + a + ",0", l += d + Math.round(a / 2 + B) + "," + Math.round(O) + "," + Math.round(a / 2 - B) + "," + Math.round(-O) + "," + a + ",0,0,0") : (l += "A" + R + "," + I + ",0,0,0," + (a - a / 2 * (1 - v)) + "," + r + "L" + a + ",0", l += "A" + B + "," + O + ",0,0,1,0,0"), B = 180), i = i.path(l).attr(h), i.gradient("linearGradient", [x, t.adjustLuminosity(x, -.3), t.adjustLuminosity(x, -.3), x], B), E ? i.translate(n / 2, 0) : i.translate(0, o / 2)) : i = 0 === r ? t.line(i, [0, a], [0, 0], u, c, d, f) : 0 === a ? t.line(i, [0, 0], [0, r], u, c, d, f) : 0 < m ? t.rect(i, a, r, h, l, d, u, c, m, p, f) : t.polygon(i, [0, 0, a, a, 0], [0, r, r, 0, 0], h, l, d, u, c, p, !1, f), a = isNaN(v) ? 0 > r ? [C, L, N, w, M, A, S, T, D, i] : [T, D, N, w, M, A, C, L, S, i] : E ? 0 < a ? [C, i, T] : [T, i, C] : 0 > r ? [C, i, T] : [T, i, C], t.setCN(s, i, b + "front"), t.setCN(s, N, b + "back"), t.setCN(s, T, b + "top"), t.setCN(s, C, b + "bottom"), t.setCN(s, M, b + "left"), t.setCN(s, A, b + "right"), C = 0; C < a.length; C++)(N = a[C]) && (e.push(N), t.setCN(s, N, b + "element"));
                    g && i.pattern(g, NaN, s.path)
                },
                width: function (t) {
                    isNaN(t) && (t = 0), this.w = Math.round(t), this.draw()
                },
                height: function (t) {
                    isNaN(t) && (t = 0), this.h = Math.round(t), this.draw()
                },
                animateHeight: function (e, i) {
                    var s = this;
                    s.animationFinished = !1, s.easing = i, s.totalFrames = e * t.updateRate, s.rh = s.h, s.frame = 0, s.height(1), setTimeout(function () {
                        s.updateHeight.call(s)
                    }, 1e3 / t.updateRate)
                },
                updateHeight: function () {
                    var e = this;
                    e.frame++;
                    var i = e.totalFrames;
                    e.frame <= i ? (i = e.easing(0, e.frame, 1, e.rh - 1, i), e.height(i), window.requestAnimationFrame ? window.requestAnimationFrame(function () {
                        e.updateHeight.call(e)
                    }) : setTimeout(function () {
                        e.updateHeight.call(e)
                    }, 1e3 / t.updateRate)) : (e.height(e.rh), e.animationFinished = !0)
                },
                animateWidth: function (e, i) {
                    var s = this;
                    s.animationFinished = !1, s.easing = i, s.totalFrames = e * t.updateRate, s.rw = s.w, s.frame = 0, s.width(1), setTimeout(function () {
                        s.updateWidth.call(s)
                    }, 1e3 / t.updateRate)
                },
                updateWidth: function () {
                    var e = this;
                    e.frame++;
                    var i = e.totalFrames;
                    e.frame <= i ? (i = e.easing(0, e.frame, 1, e.rw - 1, i), e.width(i), window.requestAnimationFrame ? window.requestAnimationFrame(function () {
                        e.updateWidth.call(e)
                    }) : setTimeout(function () {
                        e.updateWidth.call(e)
                    }, 1e3 / t.updateRate)) : (e.width(e.rw), e.animationFinished = !0)
                }
            })
        }(),
        function () {
            var t = window.AmCharts;
            t.CategoryAxis = t.Class({
                inherits: t.AxisBase,
                construct: function (e) {
                    this.cname = "CategoryAxis", t.CategoryAxis.base.construct.call(this, e), this.minPeriod = "DD", this.equalSpacing = this.parseDates = !1, this.position = "bottom", this.startOnAxis = !1, this.gridPosition = "middle", this.safeDistance = 30, this.stickBalloonToCategory = !1, t.applyTheme(this, e, this.cname)
                },
                draw: function () {
                    t.CategoryAxis.base.draw.call(this), this.generateDFObject();
                    var e = this.chart.chartData;
                    if (this.data = e, this.labelRotationR = this.labelRotation, this.type = null, t.ifArray(e)) {
                        var i, s = this.chart;
                        "scrollbar" != this.id ? (t.setCN(s, this.set, "category-axis"), t.setCN(s, this.labelsSet, "category-axis"), t.setCN(s, this.axisLine.axisSet, "category-axis")) : this.bcn = this.id + "-";
                        var a, r, n, o, h, l, d = this.start,
                            u = this.labelFrequency,
                            c = 0,
                            p = this.end - d + 1,
                            m = this.gridCountR,
                            f = this.showFirstLabel,
                            g = this.showLastLabel,
                            v = "",
                            v = t.extractPeriod(this.minPeriod),
                            b = t.getPeriodDuration(v.period, v.count),
                            x = this.rotate,
                            y = this.firstDayOfWeek,
                            C = this.boldPeriodBeginning;
                        i = t.resetDateToMin(new Date(e[e.length - 1].time + 1.05 * b), this.minPeriod, 1, y).getTime(), this.firstTime = s.firstTime, this.endTime > i && (this.endTime = i), l = this.minorGridEnabled, n = this.gridAlpha;
                        var N = 0,
                            w = 0;
                        if (this.widthField)
                            for (i = this.start; i <= this.end; i++)
                                if (h = this.data[i]) {
                                    var M = Number(this.data[i].dataContext[this.widthField]);
                                    isNaN(M) || (N += M, h.widthValue = M)
                                }
                        if (this.parseDates && !this.equalSpacing) this.lastTime = e[e.length - 1].time, this.maxTime = t.resetDateToMin(new Date(this.lastTime + 1.05 * b), this.minPeriod, 1, y).getTime(), this.timeDifference = this.endTime - this.startTime, this.parseDatesDraw();
                        else if (this.parseDates) {
                            if (this.parseDates && this.equalSpacing) {
                                if (c = this.start, this.startTime = this.data[this.start].time, this.endTime = this.data[this.end].time, this.timeDifference = this.endTime - this.startTime, i = this.choosePeriod(0), u = i.period, r = i.count, i = t.getPeriodDuration(u, r), i < b && (u = v.period, r = v.count, i = b), n = u, "WW" == n && (n = "DD"), this.currentDateFormat = this.dateFormatsObject[n], this.stepWidth = this.getStepWidth(p), m = Math.ceil(this.timeDifference / i) + 1, v = t.resetDateToMin(new Date(this.startTime - i), u, r, y).getTime(), this.cellWidth = this.getStepWidth(p), p = Math.round(v / i), d = -1, p / 2 == Math.round(p / 2) && (d = -2, v -= i), p = this.start, p / 2 == Math.round(p / 2) && p--, 0 > p && (p = 0), w = this.end + 2, w >= this.data.length && (w = this.data.length), e = !1, e = !f, this.previousPos = -1e3, 20 < this.labelRotationR && (this.safeDistance = 5), M = p, this.data[p].time != t.resetDateToMin(new Date(this.data[p].time), u, r, y).getTime()) {
                                    var b = 0,
                                        A = v;
                                    for (i = p; i < w; i++) h = this.data[i].time, this.checkPeriodChange(u, r, h, A) && (b++, 2 <= b && (M = i, i = w), A = h)
                                }
                                if (l && 1 < r && (h = this.chooseMinorFrequency(r), t.getPeriodDuration(u, h)), 0 < this.gridCountR)
                                    for (i = p; i < w; i++) h = this.data[i].time, this.checkPeriodChange(u, r, h, v) && i >= M && (p = this.getCoordinate(i - this.start), l = !1, this.nextPeriod[n] && (l = this.checkPeriodChange(this.nextPeriod[n], 1, h, v, n)) && t.resetDateToMin(new Date(h), this.nextPeriod[n], 1, y).getTime() != h && (l = !1), b = !1, l && this.markPeriodChange ? (l = this.dateFormatsObject[this.nextPeriod[n]], b = !0) : l = this.dateFormatsObject[n], v = t.formatDate(new Date(h), l, s), (i == d && !f || i == m && !g) && (v = " "), e ? e = !1 : (C || (b = !1), p - this.previousPos > this.safeDistance * Math.cos(this.labelRotationR * Math.PI / 180) && (this.labelFunction && (v = this.labelFunction(v, new Date(h), this, u, r, o)), this.boldLabels && (b = !0), a = new this.axisItemRenderer(this, p, v, void 0, void 0, void 0, void 0, b), l = a.graphics(), this.pushAxisItem(a), l = l.getBBox().width, t.isModern || (l -= p), this.previousPos = p + l)), o = v = h)
                            }
                        } else if (this.cellWidth = this.getStepWidth(p), p < m && (m = p), c += this.start, this.stepWidth = this.getStepWidth(p), 0 < m)
                            for (y = Math.floor(p / m), h = this.chooseMinorFrequency(y), p = c, p / 2 == Math.round(p / 2) && p--, 0 > p && (p = 0), C = 0, this.widthField && (p = this.start, y = 1), this.end - p + 1 >= this.autoRotateCount && (this.labelRotationR = this.autoRotateAngle), i = p; i <= this.end + 2; i++) {
                                if (m = !1, 0 <= i && i < this.data.length ? (r = this.data[i], v = r.category, m = r.forceShow) : v = "", l && !isNaN(h)) {
                                    if (i / h != Math.round(i / h) && !m) continue;
                                    i / y == Math.round(i / y) || m || (this.gridAlpha = this.minorGridAlpha, v = void 0)
                                } else if (i / y != Math.round(i / y) && !m) continue;
                                p = this.getCoordinate(i - c), m = 0, "start" == this.gridPosition && (p -= this.cellWidth / 2, m = this.cellWidth / 2), a = !0, o = m, "start" == this.tickPosition && (o = 0, a = !1, m = 0), (i == d && !f || i == this.end && !g) && (v = void 0), Math.round(C / u) != C / u && (v = void 0), C++, e = this.cellWidth, x && (e = NaN, this.ignoreAxisWidth || !s.autoMargins) && (e = "right" == this.position ? s.marginRight - this.titleWidth : s.marginLeft - this.titleWidth, e -= this.tickLength + 10), this.labelFunction && r && (v = this.labelFunction(v, r, this)), v = t.fixBrakes(v), b = !1, this.boldLabels && (b = !0), i > this.end && "start" == this.tickPosition && (v = " "), this.rotate && this.inside && (m -= 2), isNaN(r.widthValue) || (r.percentWidthValue = r.widthValue / N * 100, e = this.rotate ? this.height * r.widthValue / N : this.width * r.widthValue / N, p = w, w += e, o = m = e / 2), a = new this.axisItemRenderer(this, p, v, a, e, m, void 0, b, o, !1, r.labelColor, r.className), a.serialDataItem = r, this.pushAxisItem(a), this.gridAlpha = n
                            }
                        for (i = f = 0; i < this.data.length; i++)(h = this.data[i]) && (this.parseDates && !this.equalSpacing ? (g = h.time, d = this.cellWidth, "MM" == this.minPeriod && (d = 864e5 * t.daysInMonth(new Date(g)) * this.stepWidth, h.cellWidth = d), g = Math.round((g - this.startTime) * this.stepWidth + d / 2)) : g = this.getCoordinate(i - c), h.x[this.id] = g);
                        if (this.widthField)
                            for (i = this.start; i <= this.end; i++) h = this.data[i], d = h.widthValue, h.percentWidthValue = d / N * 100, this.rotate ? (g = this.height * d / N / 2 + f, f = this.height * d / N + f) : (g = this.width * d / N / 2 + f, f = this.width * d / N + f), h.x[this.id] = g;
                        for (N = this.guides.length, i = 0; i < N; i++) f = this.guides[i], y = y = y = l = d = NaN, g = f.above, f.toCategory && (y = s.getCategoryIndexByValue(f.toCategory), isNaN(y) || (d = this.getCoordinate(y - c), f.expand && (d += this.cellWidth / 2), a = new this.axisItemRenderer(this, d, "", !0, NaN, NaN, f), this.pushAxisItem(a, g))), f.category && (y = s.getCategoryIndexByValue(f.category), isNaN(y) || (l = this.getCoordinate(y - c), f.expand && (l -= this.cellWidth / 2), y = (d - l) / 2, a = new this.axisItemRenderer(this, l, f.label, !0, NaN, y, f), this.pushAxisItem(a, g))), C = s.dataDateFormat, f.toDate && (!C || f.toDate instanceof Date || (f.toDate = f.toDate.toString() + " |"), f.toDate = t.getDate(f.toDate, C), this.equalSpacing ? (y = s.getClosestIndex(this.data, "time", f.toDate.getTime(), !1, 0, this.data.length - 1), isNaN(y) || (d = this.getCoordinate(y - c))) : d = (f.toDate.getTime() - this.startTime) * this.stepWidth, a = new this.axisItemRenderer(this, d, "", !0, NaN, NaN, f), this.pushAxisItem(a, g)), f.date && (!C || f.date instanceof Date || (f.date = f.date.toString() + " |"), f.date = t.getDate(f.date, C), this.equalSpacing ? (y = s.getClosestIndex(this.data, "time", f.date.getTime(), !1, 0, this.data.length - 1), isNaN(y) || (l = this.getCoordinate(y - c))) : l = (f.date.getTime() - this.startTime) * this.stepWidth, y = (d - l) / 2, a = !0, f.toDate && (a = !1), a = "H" == this.orientation ? new this.axisItemRenderer(this, l, f.label, a, 2 * y, NaN, f) : new this.axisItemRenderer(this, l, f.label, !1, NaN, y, f), this.pushAxisItem(a, g)), a && (y = a.label) && this.addEventListeners(y, f), (0 < d || 0 < l) && (y = !1, this.rotate ? (d < this.height || l < this.height) && (y = !0) : (d < this.width || l < this.width) && (y = !0), y && (d = new this.guideFillRenderer(this, l, d, f), l = d.graphics(), this.pushAxisItem(d, g), f.graphics = l, l.index = i, this.addEventListeners(l, f)));
                        (s = s.chartCursor) && (x ? s.fixHeight(this.cellWidth) : (s.fixWidth(this.cellWidth), s.fullWidth && this.balloon && (this.balloon.minWidth = this.cellWidth))), this.previousHeight = S
                    }
                    this.axisCreated = !0, this.set.translate(this.x, this.y), this.labelsSet.translate(this.x, this.y), this.labelsSet.show(), this.positionTitle(), (x = this.axisLine.set) && x.toFront();
                    var S = this.getBBox().height;
                    2 < S - this.previousHeight && this.autoWrap && !this.parseDates && (this.axisCreated = this.chart.marginsUpdated = !1)
                },
                xToIndex: function (e) {
                    var i, s = this.data,
                        a = this.chart,
                        r = a.rotate,
                        n = this.stepWidth;
                    if (this.parseDates && !this.equalSpacing) e = this.startTime + Math.round(e / n) - this.minDuration() / 2, i = a.getClosestIndex(s, "time", e, !1, this.start, this.end + 1);
                    else if (this.widthField)
                        for (a = 1 / 0, n = this.start; n <= this.end; n++) {
                            var o = this.data[n];
                            o && (o = Math.abs(o.x[this.id] - e)) < a && (a = o, i = n)
                        } else this.startOnAxis || (e -= n / 2), i = this.start + Math.round(e / n);
                    i = t.fitToBounds(i, 0, s.length - 1);
                    var h;
                    return s[i] && (h = s[i].x[this.id]), r ? h > this.height + 1 && i-- : h > this.width + 1 && i--, 0 > h && i++, i = t.fitToBounds(i, 0, s.length - 1)
                },
                dateToCoordinate: function (t) {
                    return this.parseDates && !this.equalSpacing ? (t.getTime() - this.startTime) * this.stepWidth : this.parseDates && this.equalSpacing ? (t = this.chart.getClosestIndex(this.data, "time", t.getTime(), !1, 0, this.data.length - 1), this.getCoordinate(t - this.start)) : NaN
                },
                categoryToCoordinate: function (t) {
                    return this.chart ? this.parseDates ? this.dateToCoordinate(new Date(t)) : (t = this.chart.getCategoryIndexByValue(t), isNaN(t) ? void 0 : this.getCoordinate(t - this.start)) : NaN
                },
                coordinateToDate: function (t) {
                    return this.equalSpacing ? (t = this.xToIndex(t), new Date(this.data[t].time)) : new Date(this.startTime + t / this.stepWidth)
                },
                coordinateToValue: function (t) {
                    if (t = this.xToIndex(t), t = this.data[t]) return this.parseDates ? t.time : t.category
                },
                getCoordinate: function (t) {
                    return t *= this.stepWidth, this.startOnAxis || (t += this.stepWidth / 2), Math.round(t)
                },
                formatValue: function (e, i) {
                    return i || (i = this.currentDateFormat), this.parseDates && (e = t.formatDate(new Date(e), i, this.chart)), e
                },
                showBalloonAt: function (t, e) {
                    return void 0 === e && (e = this.parseDates ? this.dateToCoordinate(new Date(t)) : this.categoryToCoordinate(t)), this.adjustBalloonCoordinate(e)
                },
                formatBalloonText: function (e, i, s) {
                    var a = "",
                        r = "",
                        n = this.chart,
                        o = this.data[i];
                    if (o)
                        if (this.parseDates) a = t.formatDate(o.category, s, n), i = t.changeDate(new Date(o.category), this.minPeriod, 1), r = t.formatDate(i, s, n), -1 != a.indexOf("fff") && (a = t.formatMilliseconds(a, o.category), r = t.formatMilliseconds(r, i));
                        else {
                            var h;
                            this.data[i + 1] && (h = this.data[i + 1]), a = t.fixNewLines(o.category), h && (r = t.fixNewLines(h.category))
                        }
                    return e = e.replace(/\[\[category\]\]/g, String(a)), e = e.replace(/\[\[toCategory\]\]/g, String(r))
                },
                adjustBalloonCoordinate: function (t, e) {
                    var i = this.xToIndex(t),
                        s = this.chart.chartCursor;
                    if (this.stickBalloonToCategory) {
                        var a = this.data[i];
                        a && (t = a.x[this.id]), this.stickBalloonToStart && (t -= this.cellWidth / 2);
                        var r = 0;
                        if (s) {
                            var n = s.limitToGraph;
                            if (n) {
                                var o = n.valueAxis.id;
                                n.hidden || (r = a.axes[o].graphs[n.id].y)
                            }
                            this.rotate ? ("left" == this.position ? (n && (r -= s.width), 0 < r && (r = 0)) : 0 > r && (r = 0), s.fixHLine(t, r)) : ("top" == this.position ? (n && (r -= s.height), 0 < r && (r = 0)) : 0 > r && (r = 0), s.fullWidth && (t += 1), s.fixVLine(t, r))
                        }
                    }
                    return s && !e && (s.setIndex(i), this.parseDates && s.setTimestamp(this.coordinateToDate(t).getTime())), t
                }
            })
        }()
    }, function (t, e) {}, function (t, e) {}, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(0),
            a = i(3),
            r = i(1),
            n = i(2),
            o = i(47);
        i(48), i(49);
        var h = function () {
            function t(t, e) {
                var i = this;
                this.state = e, this.trails = t, this.container = s.byId("selectionPanel"), this.trailsPanel = s.byId("trailsPanel"), this.generateTrailsPanel(), a(document.querySelector(".removeSelected"), "click", function (t) {
                    i.state.setSelectedTrailId(null)
                }), this.filterPanel = s.byId("filterPanel"), this.generateFilterPanel(), e.watch("selectedTrailId", function (t) {
                    document.querySelector(".selected") && document.querySelector(".selected").classList.remove("selected"), t ? (document.querySelector('[data-id ="' + t + '"]').classList.add("selected"), document.querySelector(".removeSelected").removeAttribute("disabled")) : document.querySelector(".removeSelected").setAttribute("disabled", "")
                }), e.watch("filters", function (t) {
                    var e = i.getFilteredTrails(t).map(function (t) {
                        return t.id
                    });
                    i.state.setFilteredTrailIds(e)
                }), e.watch("filteredTrailIds", function (t) {
                    i.updateVisibleTrails(t)
                })
            }
            return t.prototype.getFilteredTrails = function (t) {
                return this.trails.filter(function (e) {
                    var i = !0;
                    for (var s in t)
                        if (Array.isArray(t[s])) {
                            if (e[s] < t[s][0] || e[s] > t[s][1]) {
                                i = !1;
                                break
                            }
                        } else if ("All" !== t[s] && e[s] !== t[s]) {
                        i = !1;
                        break
                    }
                    return i
                })
            }, t.prototype.updateVisibleTrails = function (t) {
                var e = document.querySelectorAll(".trail");
                [].forEach.call(e, function (e) {
                    -1 === t.indexOf(parseInt(e.dataset.id, 10)) ? e.classList.add("disabled") : e.classList.remove("disabled")
                })
            }, t.prototype.generateTrailsPanel = function () {
                var t = this,
                    e = this.state;
                this.trails.forEach(function (i) {
                    var s = r.create("div", {
                        innerHTML: i.name,
                        "data-difficulty": i.difficulty,
                        "data-id": i.id,
                        "data-category": i.category,
                        "data-walktime": i.walktime,
                        "data-status": i.status,
                        "data-ascent": i.ascent,
                        class: "trail"
                    }, t.trailsPanel);
                    a(s, "click", function (t) {
                        e.setSelectedTrailId(parseInt(t.target.dataset.id, 10))
                    })
                })
            }, t.prototype.generateFilterPanel = function () {
                this.generateSingleChoiceFilters(), this.generateRangeFilters()
            }, t.prototype.generateSingleChoiceFilters = function () {
                for (var t = this, e = n.default.data.filterOptions.singleChoice, i = 0, s = e; i < s.length; i++) {
                    var o = s[i],
                        h = this.getUniqueValues(o),
                        l = o.charAt(0).toUpperCase() + o.slice(1);
                    r.create("div", {
                        innerHTML: l,
                        class: "filter-category"
                    }, this.filterPanel);
                    for (var d = r.create("span", {
                            class: "radio-group"
                        }, this.filterPanel), u = 0; u < h.length; u++) {
                        var c = 0 === u ? "checked" : "",
                            p = o + "-" + h[u],
                            m = '<input type="radio" id="' + p + '" name=' + o + " " + c + '/><label for="' + p + '" data-group="' + o + '" data-option="' + h[u] + '">' + h[u] + "</label>";
                        d.innerHTML += m
                    }
                    this.state.setFilter(o, "All"), a(d, "click", function (e) {
                        var i = e.target;
                        "label" === i.localName && t.state.setFilter(i.dataset.group, i.dataset.option)
                    })
                }
            }, t.prototype.getUniqueValues = function (t) {
                var e = ["All"];
                return this.trails.forEach(function (i) {
                    -1 === e.indexOf(i[t]) && e.push(i[t])
                }), e
            }, t.prototype.generateRangeFilters = function () {
                for (var t = n.default.data.filterOptions.range, e = this.state, i = this, s = 0, a = t; s < a.length; s++) {
                    var h = a[s];
                    ! function (t) {
                        var s = t.charAt(0).toUpperCase() + t.slice(1);
                        r.create("div", {
                            innerHTML: s,
                            class: "filter-category"
                        }, i.filterPanel);
                        var a = i.getExtremes(t),
                            n = "",
                            h = 1;
                        switch (t) {
                            case "walktime":
                                n = "hrs", h = 1;
                                break;
                            case "ascent":
                                n = "m", h = 50
                        }
                        r.create("span", {
                            innerHTML: a.min + " " + n
                        }, i.filterPanel);
                        var l = r.create("div", {
                                class: "range-slider",
                                "data-group": t
                            }, i.filterPanel),
                            d = {
                                to: function (t) {
                                    return parseInt(t, 10) + " " + n
                                },
                                from: function (t) {
                                    return parseInt(t, 10) + " " + n
                                }
                            };
                        o.create(l, {
                            start: [a.min, a.max],
                            range: {
                                min: a.min,
                                max: a.max
                            },
                            connect: !0,
                            step: h,
                            tooltips: [d, d]
                        }), e.setFilter(t, [a.min, a.max]), l.noUiSlider.on("end", function (t) {
                            e.setFilter(this.target.dataset.group, t)
                        }), r.create("span", {
                            innerHTML: a.max + " " + n
                        }, i.filterPanel)
                    }(h)
                }
            }, t.prototype.getExtremes = function (t) {
                var e = 1e3,
                    i = 0;
                return this.trails.forEach(function (s) {
                    null !== s[t] && (s[t] < e && (e = s[t]), s[t] > i && (i = s[t]))
                }), {
                    min: e,
                    max: i
                }
            }, t
        }();
        e.default = h
    }, function (t, e, i) {
        var s, a, r; /*! nouislider - 11.0.0 - 2018-01-12 20:37:52 */
        ! function (i) {
            a = [], s = i, void 0 !== (r = "function" == typeof s ? s.apply(e, a) : s) && (t.exports = r)
        }(function () {
            "use strict";

            function t(t) {
                return "object" == typeof t && "function" == typeof t.to && "function" == typeof t.from
            }

            function e(t) {
                t.parentElement.removeChild(t)
            }

            function i(t) {
                t.preventDefault()
            }

            function s(t) {
                return t.filter(function (t) {
                    return !this[t] && (this[t] = !0)
                }, {})
            }

            function a(t, e) {
                return Math.round(t / e) * e
            }

            function r(t, e) {
                var i = t.getBoundingClientRect(),
                    s = t.ownerDocument,
                    a = s.documentElement,
                    r = m(s);
                return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0), e ? i.top + r.y - a.clientTop : i.left + r.x - a.clientLeft
            }

            function n(t) {
                return "number" == typeof t && !isNaN(t) && isFinite(t)
            }

            function o(t, e, i) {
                i > 0 && (u(t, e), setTimeout(function () {
                    c(t, e)
                }, i))
            }

            function h(t) {
                return Math.max(Math.min(t, 100), 0)
            }

            function l(t) {
                return Array.isArray(t) ? t : [t]
            }

            function d(t) {
                t = String(t);
                var e = t.split(".");
                return e.length > 1 ? e[1].length : 0
            }

            function u(t, e) {
                t.classList ? t.classList.add(e) : t.className += " " + e
            }

            function c(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            }

            function p(t, e) {
                return t.classList ? t.classList.contains(e) : new RegExp("\\b" + e + "\\b").test(t.className)
            }

            function m(t) {
                var e = void 0 !== window.pageXOffset,
                    i = "CSS1Compat" === (t.compatMode || "");
                return {
                    x: e ? window.pageXOffset : i ? t.documentElement.scrollLeft : t.body.scrollLeft,
                    y: e ? window.pageYOffset : i ? t.documentElement.scrollTop : t.body.scrollTop
                }
            }

            function f() {
                return window.navigator.pointerEnabled ? {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                } : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                }
            }

            function g() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (t) {}
                return t
            }

            function v() {
                return window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            }

            function b(t, e) {
                return 100 / (e - t)
            }

            function x(t, e) {
                return 100 * e / (t[1] - t[0])
            }

            function y(t, e) {
                return x(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
            }

            function C(t, e) {
                return e * (t[1] - t[0]) / 100 + t[0]
            }

            function N(t, e) {
                for (var i = 1; t >= e[i];) i += 1;
                return i
            }

            function w(t, e, i) {
                if (i >= t.slice(-1)[0]) return 100;
                var s, a, r, n, o = N(i, t);
                return s = t[o - 1], a = t[o], r = e[o - 1], n = e[o], r + y([s, a], i) / b(r, n)
            }

            function M(t, e, i) {
                if (i >= 100) return t.slice(-1)[0];
                var s, a, r, n, o = N(i, e);
                return s = t[o - 1], a = t[o], r = e[o - 1], n = e[o], C([s, a], (i - r) * b(r, n))
            }

            function A(t, e, i, s) {
                if (100 === s) return s;
                var r, n, o = N(s, t);
                return i ? (r = t[o - 1], n = t[o], s - r > (n - r) / 2 ? n : r) : e[o - 1] ? t[o - 1] + a(s - t[o - 1], e[o - 1]) : s
            }

            function S(t, e, i) {
                var s;
                if ("number" == typeof e && (e = [e]), !Array.isArray(e)) throw new Error("noUiSlider (" + J + "): 'range' contains invalid value.");
                if (s = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t), !n(s) || !n(e[0])) throw new Error("noUiSlider (" + J + "): 'range' value isn't numeric.");
                i.xPct.push(s), i.xVal.push(e[0]), s ? i.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (i.xSteps[0] = e[1]), i.xHighestCompleteStep.push(0)
            }

            function T(t, e, i) {
                if (!e) return !0;
                i.xSteps[t] = x([i.xVal[t], i.xVal[t + 1]], e) / b(i.xPct[t], i.xPct[t + 1]);
                var s = (i.xVal[t + 1] - i.xVal[t]) / i.xNumSteps[t],
                    a = Math.ceil(Number(s.toFixed(3)) - 1),
                    r = i.xVal[t] + i.xNumSteps[t] * a;
                i.xHighestCompleteStep[t] = r
            }

            function D(t, e, i) {
                this.xPct = [], this.xVal = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
                var s, a = [];
                for (s in t) t.hasOwnProperty(s) && a.push([t[s], s]);
                for (a.length && "object" == typeof a[0][0] ? a.sort(function (t, e) {
                        return t[0][0] - e[0][0]
                    }) : a.sort(function (t, e) {
                        return t[0] - e[0]
                    }), s = 0; s < a.length; s++) S(a[s][1], a[s][0], this);
                for (this.xNumSteps = this.xSteps.slice(0), s = 0; s < this.xNumSteps.length; s++) T(s, this.xNumSteps[s], this)
            }

            function L(e) {
                if (t(e)) return !0;
                throw new Error("noUiSlider (" + J + "): 'format' requires 'to' and 'from' methods.")
            }

            function k(t, e) {
                if (!n(e)) throw new Error("noUiSlider (" + J + "): 'step' is not numeric.");
                t.singleStep = e
            }

            function B(t, e) {
                if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + J + "): 'range' is not an object.");
                if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + J + "): Missing 'min' or 'max' in 'range'.");
                if (e.min === e.max) throw new Error("noUiSlider (" + J + "): 'range' 'min' and 'max' cannot be equal.");
                t.spectrum = new D(e, t.snap, t.singleStep)
            }

            function O(t, e) {
                if (e = l(e), !Array.isArray(e) || !e.length) throw new Error("noUiSlider (" + J + "): 'start' option is incorrect.");
                t.handles = e.length, t.start = e
            }

            function R(t, e) {
                if (t.snap = e, "boolean" != typeof e) throw new Error("noUiSlider (" + J + "): 'snap' option must be a boolean.")
            }

            function I(t, e) {
                if (t.animate = e, "boolean" != typeof e) throw new Error("noUiSlider (" + J + "): 'animate' option must be a boolean.")
            }

            function E(t, e) {
                if (t.animationDuration = e, "number" != typeof e) throw new Error("noUiSlider (" + J + "): 'animationDuration' option must be a number.")
            }

            function P(t, e) {
                var i, s = [!1];
                if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
                    for (i = 1; i < t.handles; i++) s.push(e);
                    s.push(!1)
                } else {
                    if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + J + "): 'connect' option doesn't match handle count.");
                    s = e
                }
                t.connect = s
            }

            function F(t, e) {
                switch (e) {
                    case "horizontal":
                        t.ort = 0;
                        break;
                    case "vertical":
                        t.ort = 1;
                        break;
                    default:
                        throw new Error("noUiSlider (" + J + "): 'orientation' option is invalid.")
                }
            }

            function z(t, e) {
                if (!n(e)) throw new Error("noUiSlider (" + J + "): 'margin' option must be numeric.");
                if (0 !== e && (t.margin = t.spectrum.getMargin(e), !t.margin)) throw new Error("noUiSlider (" + J + "): 'margin' option is only supported on linear sliders.")
            }

            function G(t, e) {
                if (!n(e)) throw new Error("noUiSlider (" + J + "): 'limit' option must be numeric.");
                if (t.limit = t.spectrum.getMargin(e), !t.limit || t.handles < 2) throw new Error("noUiSlider (" + J + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
            }

            function W(t, e) {
                if (!n(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + J + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                if (Array.isArray(e) && 2 != e.length && !n(e[0]) && !n(e[1])) throw new Error("noUiSlider (" + J + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                if (0 !== e) {
                    if (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getMargin(e[0]), t.spectrum.getMargin(e[1])], !1 === t.padding[0] || !1 === t.padding[1]) throw new Error("noUiSlider (" + J + "): 'padding' option is only supported on linear sliders.");
                    if (t.padding[0] < 0 || t.padding[1] < 0) throw new Error("noUiSlider (" + J + "): 'padding' option must be a positive number(s).");
                    if (t.padding[0] >= 50 || t.padding[1] >= 50) throw new Error("noUiSlider (" + J + "): 'padding' option must be less than half the range.")
                }
            }

            function V(t, e) {
                switch (e) {
                    case "ltr":
                        t.dir = 0;
                        break;
                    case "rtl":
                        t.dir = 1;
                        break;
                    default:
                        throw new Error("noUiSlider (" + J + "): 'direction' option was not recognized.")
                }
            }

            function H(t, e) {
                if ("string" != typeof e) throw new Error("noUiSlider (" + J + "): 'behaviour' must be a string containing options.");
                var i = e.indexOf("tap") >= 0,
                    s = e.indexOf("drag") >= 0,
                    a = e.indexOf("fixed") >= 0,
                    r = e.indexOf("snap") >= 0,
                    n = e.indexOf("hover") >= 0;
                if (a) {
                    if (2 !== t.handles) throw new Error("noUiSlider (" + J + "): 'fixed' behaviour must be used with 2 handles");
                    z(t, t.start[1] - t.start[0])
                }
                t.events = {
                    tap: i || r,
                    drag: s,
                    fixed: a,
                    snap: r,
                    hover: n
                }
            }

            function Y(t, e) {
                if (!1 !== e)
                    if (!0 === e) {
                        t.tooltips = [];
                        for (var i = 0; i < t.handles; i++) t.tooltips.push(!0)
                    } else {
                        if (t.tooltips = l(e), t.tooltips.length !== t.handles) throw new Error("noUiSlider (" + J + "): must pass a formatter for all handles.");
                        t.tooltips.forEach(function (t) {
                            if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + J + "): 'tooltips' must be passed a formatter or 'false'.")
                        })
                    }
            }

            function X(t, e) {
                t.ariaFormat = e, L(e)
            }

            function j(t, e) {
                t.format = e, L(e)
            }

            function Z(t, e) {
                if (void 0 !== e && "string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + J + "): 'cssPrefix' must be a string or `false`.");
                t.cssPrefix = e
            }

            function U(t, e) {
                if (void 0 !== e && "object" != typeof e) throw new Error("noUiSlider (" + J + "): 'cssClasses' must be an object.");
                if ("string" == typeof t.cssPrefix) {
                    t.cssClasses = {};
                    for (var i in e) e.hasOwnProperty(i) && (t.cssClasses[i] = t.cssPrefix + e[i])
                } else t.cssClasses = e
            }

            function q(t) {
                var e = {
                        margin: 0,
                        limit: 0,
                        padding: 0,
                        animate: !0,
                        animationDuration: 300,
                        ariaFormat: Q,
                        format: Q
                    },
                    i = {
                        step: {
                            r: !1,
                            t: k
                        },
                        start: {
                            r: !0,
                            t: O
                        },
                        connect: {
                            r: !0,
                            t: P
                        },
                        direction: {
                            r: !0,
                            t: V
                        },
                        snap: {
                            r: !1,
                            t: R
                        },
                        animate: {
                            r: !1,
                            t: I
                        },
                        animationDuration: {
                            r: !1,
                            t: E
                        },
                        range: {
                            r: !0,
                            t: B
                        },
                        orientation: {
                            r: !1,
                            t: F
                        },
                        margin: {
                            r: !1,
                            t: z
                        },
                        limit: {
                            r: !1,
                            t: G
                        },
                        padding: {
                            r: !1,
                            t: W
                        },
                        behaviour: {
                            r: !0,
                            t: H
                        },
                        ariaFormat: {
                            r: !1,
                            t: X
                        },
                        format: {
                            r: !1,
                            t: j
                        },
                        tooltips: {
                            r: !1,
                            t: Y
                        },
                        cssPrefix: {
                            r: !1,
                            t: Z
                        },
                        cssClasses: {
                            r: !1,
                            t: U
                        }
                    },
                    s = {
                        connect: !1,
                        direction: "ltr",
                        behaviour: "tap",
                        orientation: "horizontal",
                        cssPrefix: "noUi-",
                        cssClasses: {
                            target: "target",
                            base: "base",
                            origin: "origin",
                            handle: "handle",
                            handleLower: "handle-lower",
                            handleUpper: "handle-upper",
                            horizontal: "horizontal",
                            vertical: "vertical",
                            background: "background",
                            connect: "connect",
                            connects: "connects",
                            ltr: "ltr",
                            rtl: "rtl",
                            draggable: "draggable",
                            drag: "state-drag",
                            tap: "state-tap",
                            active: "active",
                            tooltip: "tooltip",
                            pips: "pips",
                            pipsHorizontal: "pips-horizontal",
                            pipsVertical: "pips-vertical",
                            marker: "marker",
                            markerHorizontal: "marker-horizontal",
                            markerVertical: "marker-vertical",
                            markerNormal: "marker-normal",
                            markerLarge: "marker-large",
                            markerSub: "marker-sub",
                            value: "value",
                            valueHorizontal: "value-horizontal",
                            valueVertical: "value-vertical",
                            valueNormal: "value-normal",
                            valueLarge: "value-large",
                            valueSub: "value-sub"
                        }
                    };
                t.format && !t.ariaFormat && (t.ariaFormat = t.format), Object.keys(i).forEach(function (a) {
                    if (void 0 === t[a] && void 0 === s[a]) {
                        if (i[a].r) throw new Error("noUiSlider (" + J + "): '" + a + "' is required.");
                        return !0
                    }
                    i[a].t(e, void 0 === t[a] ? s[a] : t[a])
                }), e.pips = t.pips;
                var a = document.createElement("div"),
                    r = void 0 !== a.style.msTransform,
                    n = void 0 !== a.style.transform;
                e.transformRule = n ? "transform" : r ? "msTransform" : "webkitTransform";
                var o = [
                    ["left", "top"],
                    ["right", "bottom"]
                ];
                return e.style = o[e.dir][e.ort], e
            }

            function _(t, a, n) {
                function d(t, e) {
                    var i = xt.createElement("div");
                    return e && u(i, e), t.appendChild(i), i
                }

                function b(t, e) {
                    var i = d(t, a.cssClasses.origin),
                        s = d(i, a.cssClasses.handle);
                    return s.setAttribute("data-handle", e), s.setAttribute("tabindex", "0"), s.setAttribute("role", "slider"), s.setAttribute("aria-orientation", a.ort ? "vertical" : "horizontal"), 0 === e ? u(s, a.cssClasses.handleLower) : e === a.handles - 1 && u(s, a.cssClasses.handleUpper), i
                }

                function x(t, e) {
                    return !!e && d(t, a.cssClasses.connect)
                }

                function y(t, e) {
                    return !!a.tooltips[e] && d(t.firstChild, a.cssClasses.tooltip)
                }

                function C(t, e, i) {
                    if ("range" === t || "steps" === t) return gt.xVal;
                    if ("count" === t) {
                        if (e < 2) throw new Error("noUiSlider (" + J + "): 'values' (>= 2) required for mode 'count'.");
                        var s = e - 1,
                            a = 100 / s;
                        for (e = []; s--;) e[s] = s * a;
                        e.push(100), t = "positions"
                    }
                    return "positions" === t ? e.map(function (t) {
                        return gt.fromStepping(i ? gt.getStep(t) : t)
                    }) : "values" === t ? i ? e.map(function (t) {
                        return gt.fromStepping(gt.getStep(gt.toStepping(t)))
                    }) : e : void 0
                }

                function N(t, e, i) {
                    function a(t, e) {
                        return (t + e).toFixed(7) / 1
                    }
                    var r = {},
                        n = gt.xVal[0],
                        o = gt.xVal[gt.xVal.length - 1],
                        h = !1,
                        l = !1,
                        d = 0;
                    return i = s(i.slice().sort(function (t, e) {
                        return t - e
                    })), i[0] !== n && (i.unshift(n), h = !0), i[i.length - 1] !== o && (i.push(o), l = !0), i.forEach(function (s, n) {
                        var o, u, c, p, m, f, g, v, b, x, y = s,
                            C = i[n + 1];
                        if ("steps" === e && (o = gt.xNumSteps[n]), o || (o = C - y), !1 !== y && void 0 !== C)
                            for (o = Math.max(o, 1e-7), u = y; u <= C; u = a(u, o)) {
                                for (p = gt.toStepping(u), m = p - d, v = m / t, b = Math.round(v), x = m / b, c = 1; c <= b; c += 1) f = d + c * x, r[f.toFixed(5)] = ["x", 0];
                                g = i.indexOf(u) > -1 ? 1 : "steps" === e ? 2 : 0, !n && h && (g = 0), u === C && l || (r[p.toFixed(5)] = [u, g]), d = p
                            }
                    }), r
                }

                function w(t, e, i) {
                    function s(t, e) {
                        var i = e === a.cssClasses.value,
                            s = i ? l : c,
                            r = i ? o : h;
                        return e + " " + s[a.ort] + " " + r[t]
                    }

                    function r(t, r) {
                        r[1] = r[1] && e ? e(r[0], r[1]) : r[1];
                        var o = d(n, !1);
                        o.className = s(r[1], a.cssClasses.marker), o.style[a.style] = t + "%", r[1] && (o = d(n, !1), o.className = s(r[1], a.cssClasses.value), o.setAttribute("data-value", r[0]), o.style[a.style] = t + "%", o.innerText = i.to(r[0]))
                    }
                    var n = xt.createElement("div"),
                        o = [a.cssClasses.valueNormal, a.cssClasses.valueLarge, a.cssClasses.valueSub],
                        h = [a.cssClasses.markerNormal, a.cssClasses.markerLarge, a.cssClasses.markerSub],
                        l = [a.cssClasses.valueHorizontal, a.cssClasses.valueVertical],
                        c = [a.cssClasses.markerHorizontal, a.cssClasses.markerVertical];
                    return u(n, a.cssClasses.pips), u(n, 0 === a.ort ? a.cssClasses.pipsHorizontal : a.cssClasses.pipsVertical), Object.keys(t).forEach(function (e) {
                        r(e, t[e])
                    }), n
                }

                function M() {
                    ht && (e(ht), ht = null)
                }

                function A(t) {
                    M();
                    var e = t.mode,
                        i = t.density || 1,
                        s = t.filter || !1,
                        a = t.values || !1,
                        r = t.stepped || !1,
                        n = C(e, a, r),
                        o = N(i, e, n),
                        h = t.format || {
                            to: Math.round
                        };
                    return ht = ct.appendChild(w(o, s, h))
                }

                function S() {
                    var t = at.getBoundingClientRect(),
                        e = "offset" + ["Width", "Height"][a.ort];
                    return 0 === a.ort ? t.width || at[e] : t.height || at[e]
                }

                function T(t, e, i, s) {
                    var r = function (r) {
                            return !!(r = D(r, s.pageOffset, s.target || e)) && (!(ct.hasAttribute("disabled") && !s.doNotReject) && (!(p(ct, a.cssClasses.tap) && !s.doNotReject) && (!(t === lt.start && void 0 !== r.buttons && r.buttons > 1) && ((!s.hover || !r.buttons) && (ut || r.preventDefault(), r.calcPoint = r.points[a.ort], void i(r, s))))))
                        },
                        n = [];
                    return t.split(" ").forEach(function (t) {
                        e.addEventListener(t, r, !!ut && {
                            passive: !0
                        }), n.push([t, r])
                    }), n
                }

                function D(t, e, i) {
                    var s, a, r = 0 === t.type.indexOf("touch"),
                        n = 0 === t.type.indexOf("mouse"),
                        o = 0 === t.type.indexOf("pointer");
                    if (0 === t.type.indexOf("MSPointer") && (o = !0), r) {
                        var h = function (t) {
                            return t.target === i || i.contains(t.target)
                        };
                        if ("touchstart" === t.type) {
                            var l = Array.prototype.filter.call(t.touches, h);
                            if (l.length > 1) return !1;
                            s = l[0].pageX, a = l[0].pageY
                        } else {
                            var d = Array.prototype.find.call(t.changedTouches, h);
                            if (!d) return !1;
                            s = d.pageX, a = d.pageY
                        }
                    }
                    return e = e || m(xt), (n || o) && (s = t.clientX + e.x, a = t.clientY + e.y), t.pageOffset = e, t.points = [s, a], t.cursor = n || o, t
                }

                function L(t) {
                    var e = t - r(at, a.ort),
                        i = 100 * e / S();
                    return a.dir ? 100 - i : i
                }

                function k(t) {
                    var e = 100,
                        i = !1;
                    return rt.forEach(function (s, a) {
                        if (!s.hasAttribute("disabled")) {
                            var r = Math.abs(pt[a] - t);
                            r < e && (i = a, e = r)
                        }
                    }), i
                }

                function B(t, e, i, s) {
                    var a = i.slice(),
                        r = [!t, t],
                        n = [t, !t];
                    s = s.slice(), t && s.reverse(), s.length > 1 ? s.forEach(function (t, i) {
                        var s = G(a, t, a[t] + e, r[i], n[i], !1);
                        !1 === s ? e = 0 : (e = s - a[t], a[t] = s)
                    }) : r = n = [!0];
                    var o = !1;
                    s.forEach(function (t, s) {
                        o = j(t, i[t] + e, r[s], n[s]) || o
                    }), o && s.forEach(function (t) {
                        O("update", t), O("slide", t)
                    })
                }

                function O(t, e, i) {
                    Object.keys(bt).forEach(function (s) {
                        var r = s.split(".")[0];
                        t === r && bt[s].forEach(function (t) {
                            t.call(ot, vt.map(a.format.to), e, vt.slice(), i || !1, pt.slice())
                        })
                    })
                }

                function R(t, e) {
                    "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && E(t, e)
                }

                function I(t, e) {
                    if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return E(t, e);
                    var i = (a.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
                    B(i > 0, 100 * i / e.baseSize, e.locations, e.handleNumbers)
                }

                function E(t, e) {
                    e.handle && (c(e.handle, a.cssClasses.active), ft -= 1), e.listeners.forEach(function (t) {
                        yt.removeEventListener(t[0], t[1])
                    }), 0 === ft && (c(ct, a.cssClasses.drag), X(), t.cursor && (Ct.style.cursor = "", Ct.removeEventListener("selectstart", i))), e.handleNumbers.forEach(function (t) {
                        O("change", t), O("set", t), O("end", t)
                    })
                }

                function P(t, e) {
                    var s;
                    if (1 === e.handleNumbers.length) {
                        var r = rt[e.handleNumbers[0]];
                        if (r.hasAttribute("disabled")) return !1;
                        s = r.children[0], ft += 1, u(s, a.cssClasses.active)
                    }
                    t.stopPropagation();
                    var n = [],
                        o = T(lt.move, yt, I, {
                            target: t.target,
                            handle: s,
                            listeners: n,
                            startCalcPoint: t.calcPoint,
                            baseSize: S(),
                            pageOffset: t.pageOffset,
                            handleNumbers: e.handleNumbers,
                            buttonsProperty: t.buttons,
                            locations: pt.slice()
                        }),
                        h = T(lt.end, yt, E, {
                            target: t.target,
                            handle: s,
                            listeners: n,
                            doNotReject: !0,
                            handleNumbers: e.handleNumbers
                        }),
                        l = T("mouseout", yt, R, {
                            target: t.target,
                            handle: s,
                            listeners: n,
                            doNotReject: !0,
                            handleNumbers: e.handleNumbers
                        });
                    n.push.apply(n, o.concat(h, l)), t.cursor && (Ct.style.cursor = getComputedStyle(t.target).cursor, rt.length > 1 && u(ct, a.cssClasses.drag), Ct.addEventListener("selectstart", i, !1)), e.handleNumbers.forEach(function (t) {
                        O("start", t)
                    })
                }

                function F(t) {
                    t.stopPropagation();
                    var e = L(t.calcPoint),
                        i = k(e);
                    if (!1 === i) return !1;
                    a.events.snap || o(ct, a.cssClasses.tap, a.animationDuration), j(i, e, !0, !0), X(), O("slide", i, !0), O("update", i, !0), O("change", i, !0), O("set", i, !0), a.events.snap && P(t, {
                        handleNumbers: [i]
                    })
                }

                function z(t) {
                    var e = L(t.calcPoint),
                        i = gt.getStep(e),
                        s = gt.fromStepping(i);
                    Object.keys(bt).forEach(function (t) {
                        "hover" === t.split(".")[0] && bt[t].forEach(function (t) {
                            t.call(ot, s)
                        })
                    })
                }

                function G(t, e, i, s, r, n) {
                    return rt.length > 1 && (s && e > 0 && (i = Math.max(i, t[e - 1] + a.margin)), r && e < rt.length - 1 && (i = Math.min(i, t[e + 1] - a.margin))), rt.length > 1 && a.limit && (s && e > 0 && (i = Math.min(i, t[e - 1] + a.limit)), r && e < rt.length - 1 && (i = Math.max(i, t[e + 1] - a.limit))), a.padding && (0 === e && (i = Math.max(i, a.padding[0])), e === rt.length - 1 && (i = Math.min(i, 100 - a.padding[1]))), i = gt.getStep(i), !((i = h(i)) === t[e] && !n) && i
                }

                function W(t, e) {
                    var i = a.ort;
                    return (i ? e : t) + ", " + (i ? t : e)
                }

                function V(t) {
                    return t + "%"
                }

                function H(t, e) {
                    return a.dir ? 100 - t - e : t
                }

                function Y(t, e) {
                    pt[t] = e, vt[t] = gt.fromStepping(e);
                    var i = "translate(" + W(V(H(e, 0)), "0") + ")";
                    rt[t].style[a.transformRule] = i, Z(t), Z(t + 1)
                }

                function X() {
                    mt.forEach(function (t) {
                        var e = pt[t] > 50 ? -1 : 1,
                            i = 3 + (rt.length + e * t);
                        rt[t].style.zIndex = i
                    })
                }

                function j(t, e, i, s) {
                    return !1 !== (e = G(pt, t, e, i, s, !1)) && (Y(t, e), !0)
                }

                function Z(t) {
                    if (nt[t]) {
                        var e = 0,
                            i = 100;
                        0 !== t && (e = pt[t - 1]), t !== nt.length - 1 && (i = pt[t]);
                        var s = i - e,
                            r = "translate(" + W(V(H(e, s)), "0") + ")",
                            n = "scale(" + W(s / 100, "1") + ")";
                        nt[t].style[a.transformRule] = r + " " + n
                    }
                }

                function U(t, e) {
                    return null === t || !1 === t || void 0 === t ? pt[e] : ("number" == typeof t && (t = String(t)), t = a.format.from(t), t = gt.toStepping(t), !1 === t || isNaN(t) ? pt[e] : t)
                }

                function _(t, e) {
                    var i = l(t),
                        s = void 0 === pt[0];
                    e = void 0 === e || !!e, a.animate && !s && o(ct, a.cssClasses.tap, a.animationDuration), mt.forEach(function (t) {
                        j(t, U(i[t], t), !0, !1)
                    }), mt.forEach(function (t) {
                        j(t, pt[t], !0, !0)
                    }), X(), mt.forEach(function (t) {
                        O("update", t), null !== i[t] && e && O("set", t)
                    })
                }

                function K(t) {
                    _(a.start, t)
                }

                function Q() {
                    var t = vt.map(a.format.to);
                    return 1 === t.length ? t[0] : t
                }

                function $() {
                    for (var t in a.cssClasses) a.cssClasses.hasOwnProperty(t) && c(ct, a.cssClasses[t]);
                    for (; ct.firstChild;) ct.removeChild(ct.firstChild);
                    delete ct.noUiSlider
                }

                function tt() {
                    return pt.map(function (t, e) {
                        var i = gt.getNearbySteps(t),
                            s = vt[e],
                            a = i.thisStep.step,
                            r = null;
                        !1 !== a && s + a > i.stepAfter.startValue && (a = i.stepAfter.startValue - s), r = s > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && s - i.stepBefore.highestStep, 100 === t ? a = null : 0 === t && (r = null);
                        var n = gt.countStepDecimals();
                        return null !== a && !1 !== a && (a = Number(a.toFixed(n))), null !== r && !1 !== r && (r = Number(r.toFixed(n))), [r, a]
                    })
                }

                function et(t, e) {
                    bt[t] = bt[t] || [], bt[t].push(e), "update" === t.split(".")[0] && rt.forEach(function (t, e) {
                        O("update", e)
                    })
                }

                function it(t) {
                    var e = t && t.split(".")[0],
                        i = e && t.substring(e.length);
                    Object.keys(bt).forEach(function (t) {
                        var s = t.split(".")[0],
                            a = t.substring(s.length);
                        e && e !== s || i && i !== a || delete bt[t]
                    })
                }

                function st(t, e) {
                    var i = Q(),
                        s = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                    s.forEach(function (e) {
                        void 0 !== t[e] && (n[e] = t[e])
                    });
                    var r = q(n);
                    s.forEach(function (e) {
                        void 0 !== t[e] && (a[e] = r[e])
                    }), gt = r.spectrum, a.margin = r.margin, a.limit = r.limit, a.padding = r.padding, a.pips && A(a.pips), pt = [], _(t.start || i, e)
                }
                var at, rt, nt, ot, ht, lt = f(),
                    dt = v(),
                    ut = dt && g(),
                    ct = t,
                    pt = [],
                    mt = [],
                    ft = 0,
                    gt = a.spectrum,
                    vt = [],
                    bt = {},
                    xt = t.ownerDocument,
                    yt = xt.documentElement,
                    Ct = xt.body;
                if (ct.noUiSlider) throw new Error("noUiSlider (" + J + "): Slider was already initialized.");
                return function (t) {
                        u(t, a.cssClasses.target), 0 === a.dir ? u(t, a.cssClasses.ltr) : u(t, a.cssClasses.rtl), 0 === a.ort ? u(t, a.cssClasses.horizontal) : u(t, a.cssClasses.vertical), at = d(t, a.cssClasses.base)
                    }(ct),
                    function (t, e) {
                        var i = d(e, a.cssClasses.connects);
                        rt = [], nt = [], nt.push(x(i, t[0]));
                        for (var s = 0; s < a.handles; s++) rt.push(b(e, s)), mt[s] = s, nt.push(x(i, t[s + 1]))
                    }(a.connect, at), ot = {
                        destroy: $,
                        steps: tt,
                        on: et,
                        off: it,
                        get: Q,
                        set: _,
                        reset: K,
                        __moveHandles: function (t, e, i) {
                            B(t, e, pt, i)
                        },
                        options: n,
                        updateOptions: st,
                        target: ct,
                        removePips: M,
                        pips: A
                    },
                    function (t) {
                        t.fixed || rt.forEach(function (t, e) {
                            T(lt.start, t.children[0], P, {
                                handleNumbers: [e]
                            })
                        }), t.tap && T(lt.start, at, F, {}), t.hover && T(lt.move, at, z, {
                            hover: !0
                        }), t.drag && nt.forEach(function (e, i) {
                            if (!1 !== e && 0 !== i && i !== nt.length - 1) {
                                var s = rt[i - 1],
                                    r = rt[i],
                                    n = [e];
                                u(e, a.cssClasses.draggable), t.fixed && (n.push(s.children[0]), n.push(r.children[0])), n.forEach(function (t) {
                                    T(lt.start, t, P, {
                                        handles: [s, r],
                                        handleNumbers: [i - 1, i]
                                    })
                                })
                            }
                        })
                    }(a.events), _(a.start), a.pips && A(a.pips), a.tooltips && function () {
                        var t = rt.map(y);
                        et("update", function (e, i, s) {
                            if (t[i]) {
                                var r = e[i];
                                !0 !== a.tooltips[i] && (r = a.tooltips[i].to(s[i])), t[i].innerHTML = r
                            }
                        })
                    }(),
                    function () {
                        et("update", function (t, e, i, s, r) {
                            mt.forEach(function (t) {
                                var e = rt[t],
                                    s = G(pt, t, 0, !0, !0, !0),
                                    n = G(pt, t, 100, !0, !0, !0),
                                    o = r[t],
                                    h = a.ariaFormat.to(i[t]);
                                e.children[0].setAttribute("aria-valuemin", s.toFixed(1)), e.children[0].setAttribute("aria-valuemax", n.toFixed(1)), e.children[0].setAttribute("aria-valuenow", o.toFixed(1)), e.children[0].setAttribute("aria-valuetext", h)
                            })
                        })
                    }(), ot
            }

            function K(t, e) {
                if (!t || !t.nodeName) throw new Error("noUiSlider (" + J + "): create requires a single element, got: " + t);
                var i = q(e, t),
                    s = _(t, i, e);
                return t.noUiSlider = s, s
            }
            var J = "11.0.0";
            D.prototype.getMargin = function (t) {
                var e = this.xNumSteps[0];
                if (e && t / e % 1 != 0) throw new Error("noUiSlider (" + J + "): 'limit', 'margin' and 'padding' must be divisible by step.");
                return 2 === this.xPct.length && x(this.xVal, t)
            }, D.prototype.toStepping = function (t) {
                return t = w(this.xVal, this.xPct, t)
            }, D.prototype.fromStepping = function (t) {
                return M(this.xVal, this.xPct, t)
            }, D.prototype.getStep = function (t) {
                return t = A(this.xPct, this.xSteps, this.snap, t)
            }, D.prototype.getNearbySteps = function (t) {
                var e = N(t, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[e - 2],
                        step: this.xNumSteps[e - 2],
                        highestStep: this.xHighestCompleteStep[e - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[e - 1],
                        step: this.xNumSteps[e - 1],
                        highestStep: this.xHighestCompleteStep[e - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[e - 0],
                        step: this.xNumSteps[e - 0],
                        highestStep: this.xHighestCompleteStep[e - 0]
                    }
                }
            }, D.prototype.countStepDecimals = function () {
                var t = this.xNumSteps.map(d);
                return Math.max.apply(null, t)
            }, D.prototype.convert = function (t) {
                return this.getStep(this.toStepping(t))
            };
            var Q = {
                to: function (t) {
                    return void 0 !== t && t.toFixed(2)
                },
                from: Number
            };
            return {
                version: J,
                create: K
            }
        })
    }, function (t, e) {}, function (t, e) {}, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(0),
            a = i(3),
            r = i(1);
        i(51);
        var n = function () {
            function t(t) {
                var e = this;
                this.container = s.byId("basemapPanel"), this.basemapContainer = document.querySelector(".basemaps"), t.view.map.layers.filter(function (t) {
                    return "Basemap" === t.title
                }).getItemAt(0).layers.forEach(function (i) {
                    var s = i,
                        n = r.create("div", {
                            class: "basemapItem",
                            style: "background: url(" + s.portalItem.thumbnailUrl + ") no-repeat center",
                            "data-id": i.id,
                            innerHTML: "<div>" + i.title + "</div>"
                        }, e.basemapContainer);
                    a(n, "click", function (e) {
                        t.currentBasemapId = e.target.dataset.id
                    })
                })
            }
            return t
        }();
        e.default = n
    }, function (t, e) {}, function (t, e) {}, function (t, e) {
        var i = {
            scriptURL: "/hiking-app/dist/../sw.js"
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            register: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return !!navigator.serviceWorker && navigator.serviceWorker.register(i.scriptURL, t)
            }
        }, t.exports = e.default
    }])
});
export default {
  scene: {
    websceneItemId: "74a4f190d34e468a8c95178c997a43bb" // global scene
    // websceneItemId: "7abaad52a4254f30ab1897079cad504a" // local scene
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
};

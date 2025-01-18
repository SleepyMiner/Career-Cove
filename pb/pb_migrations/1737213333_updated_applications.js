/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2689671926")

  // remove field
  collection.fields.removeById("json1700383643")

  // remove field
  collection.fields.removeById("json3576764016")

  // remove field
  collection.fields.removeById("json990738133")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2689671926")

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "json1700383643",
    "maxSize": 0,
    "name": "workExperience",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "hidden": false,
    "id": "json3576764016",
    "maxSize": 0,
    "name": "skills",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "json990738133",
    "maxSize": 0,
    "name": "certifications",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
})

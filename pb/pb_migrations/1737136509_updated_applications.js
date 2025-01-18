/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2689671926")

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "bool1981675086",
    "name": "accepted",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2689671926")

  // remove field
  collection.fields.removeById("bool1981675086")

  return app.save(collection)
})

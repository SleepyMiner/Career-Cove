/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2873630990")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool2487745274",
    "name": "isVerified",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2873630990")

  // remove field
  collection.fields.removeById("bool2487745274")

  return app.save(collection)
})

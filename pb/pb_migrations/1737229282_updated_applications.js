/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2689671926")

  // update collection data
  unmarshal({
    "listRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2689671926")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id=id"
  }, collection)

  return app.save(collection)
})

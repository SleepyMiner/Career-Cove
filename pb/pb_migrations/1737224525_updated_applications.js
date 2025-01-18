/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2689671926")

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "file1623314592",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword"
    ],
    "name": "resume",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2689671926")

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "file1623314592",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "resume",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})

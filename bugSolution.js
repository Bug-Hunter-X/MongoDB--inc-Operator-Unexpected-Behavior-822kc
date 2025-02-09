```javascript
// Correct usage of $inc and $setOnInsert
db.collection.updateOne({"_id":ObjectId("someId")},{
  $set: { field: 0 },
  $inc: { field: value },
  $setOnInsert: {field: value}
});
```
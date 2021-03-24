const handler = async function(event, context) {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  return "Hello"
}

exports.handler = handler
module.exports.handler = handler;
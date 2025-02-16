function httpResponseSuccessHandler(res, code, msg, data) {
  res.status(code).send({
    status: msg,
    result: data
  })
}

function httpResponseHandlerError(res, errorcode, errormsg) {
  console.log("error code ==", errorcode, errormsg);
  if (errorcode == undefined) {
    return res.status(400).send({ status: "Failure", message: errormsg })
  } else {
    return res.status(errorcode).send({ status: "Failure", message: errormsg })
  }
}

module.exports.httpResponseHandlerError = httpResponseHandlerError
module.exports.httpResponseSuccessHandler = httpResponseSuccessHandler

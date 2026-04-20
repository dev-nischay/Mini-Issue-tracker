export var httpStatus;
(function (httpStatus) {
    httpStatus[httpStatus["Ok"] = 200] = "Ok";
    httpStatus[httpStatus["BadRequest"] = 400] = "BadRequest";
    httpStatus[httpStatus["InternalServerError"] = 500] = "InternalServerError";
    httpStatus[httpStatus["Conflict"] = 409] = "Conflict";
    httpStatus[httpStatus["Unauthorized"] = 401] = "Unauthorized";
    httpStatus[httpStatus["NotFound"] = 404] = "NotFound";
    httpStatus[httpStatus["Forbidden"] = 403] = "Forbidden";
})(httpStatus || (httpStatus = {}));

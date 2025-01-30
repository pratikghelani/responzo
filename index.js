class ResponseHandler {
    static success(message = "Request successful", data = null) {
        return {
            status: "success",
            message,
            data,
        };
    }

    static created(message = "Resource created successfully", data = null) {
        return {
            status: "success",
            message,
            data,
        };
    }

    static badRequest(message = "Invalid request", errors = {}) {
        return {
            status: "error",
            message,
            errors,
        };
    }

    static validationError(errors = {}) {
        return {
            status: "error",
            message: "Validation failed",
            errors,
        };
    }

    static unauthorized(message = "Unauthorized access") {
        return {
            status: "error",
            message,
            error_code: "AUTH_401",
        };
    }

    static forbidden(message = "Access denied") {
        return {
            status: "error",
            message,
            error_code: "AUTH_403",
        };
    }

    static notFound(message = "Resource not found") {
        return {
            status: "error",
            message,
            error_code: "NOT_FOUND_404",
        };
    }

    static conflict(message = "Conflict occurred") {
        return {
            status: "error",
            message,
            error_code: "CONFLICT_409",
        };
    }

    static serverError(message = "Internal Server Error") {
        return {
            status: "error",
            message,
            error_code: "SERVER_500",
        };
    }

    static tooManyRequests(message = "Too many requests, try again later") {
        return {
            status: "error",
            message,
            error_code: "RATE_LIMIT_429",
        };
    }
}

module.exports = ResponseHandler;

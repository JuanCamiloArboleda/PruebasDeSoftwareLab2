var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "997",
        "ok": "997",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "557",
        "ok": "557",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles1": {
        "total": "532",
        "ok": "532",
        "ko": "-"
    },
    "percentiles2": {
        "total": "623",
        "ok": "623",
        "ko": "-"
    },
    "percentiles3": {
        "total": "685",
        "ok": "685",
        "ko": "-"
    },
    "percentiles4": {
        "total": "991",
        "ok": "991",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 197,
    "percentage": 98.5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 1.5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.45",
        "ok": "6.45",
        "ko": "-"
    }
},
contents: {
"req_get-account-tra-1675321170": {
        type: "REQUEST",
        name: "Get Account Transactions",
path: "Get Account Transactions",
pathFormatted: "req_get-account-tra-1675321170",
stats: {
    "name": "Get Account Transactions",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "997",
        "ok": "997",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "557",
        "ok": "557",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "90",
        "ko": "-"
    },
    "percentiles1": {
        "total": "532",
        "ok": "532",
        "ko": "-"
    },
    "percentiles2": {
        "total": "623",
        "ok": "623",
        "ko": "-"
    },
    "percentiles3": {
        "total": "685",
        "ok": "685",
        "ko": "-"
    },
    "percentiles4": {
        "total": "991",
        "ok": "991",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 197,
    "percentage": 98.5
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 1.5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.45",
        "ok": "6.45",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

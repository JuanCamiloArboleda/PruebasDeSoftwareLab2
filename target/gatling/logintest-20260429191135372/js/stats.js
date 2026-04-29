var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "276",
        "ok": "276",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "296",
        "ok": "296",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "27",
        "ok": "27",
        "ko": "-"
    },
    "percentiles1": {
        "total": "288",
        "ok": "288",
        "ko": "-"
    },
    "percentiles2": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "percentiles3": {
        "total": "335",
        "ok": "335",
        "ko": "-"
    },
    "percentiles4": {
        "total": "445",
        "ok": "445",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 300,
    "percentage": 100.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
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
        "total": "3.3",
        "ok": "3.3",
        "ko": "-"
    }
},
contents: {
"req_login-carga-nor-842714448": {
        type: "REQUEST",
        name: "Login Carga Normal",
path: "Login Carga Normal",
pathFormatted: "req_login-carga-nor-842714448",
stats: {
    "name": "Login Carga Normal",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "280",
        "ok": "280",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles1": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "percentiles2": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "percentiles3": {
        "total": "439",
        "ok": "439",
        "ko": "-"
    },
    "percentiles4": {
        "total": "451",
        "ok": "451",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 100,
    "percentage": 100.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
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
        "total": "1.1",
        "ok": "1.1",
        "ko": "-"
    }
}
    },"req_login-carga-pic--606890290": {
        type: "REQUEST",
        name: "Login Carga Pico",
path: "Login Carga Pico",
pathFormatted: "req_login-carga-pic--606890290",
stats: {
    "name": "Login Carga Pico",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "276",
        "ok": "276",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles1": {
        "total": "286",
        "ok": "286",
        "ko": "-"
    },
    "percentiles2": {
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "percentiles3": {
        "total": "321",
        "ok": "321",
        "ko": "-"
    },
    "percentiles4": {
        "total": "364",
        "ok": "364",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 200,
    "percentage": 100.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
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
        "total": "2.2",
        "ok": "2.2",
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

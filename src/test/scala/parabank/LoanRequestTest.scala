package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

// Historia de Usuario No Funcional 4: Solicitud de prestamo bajo carga
// Criterios: 150 usuarios concurrentes | promedio ≤ 5s | tasa de exito ≥ 98%
class LoanRequestTest extends Simulation {

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/json")
<<<<<<< HEAD
=======
    .contentTypeHeader("application/json")
    .basicAuth(username, password)

  // Request body with loan details
  val loanRequestBody =
    s"""{
       |  "customerId": "$customerId",
       |  "amount": "$loanAmount",
       |  "downPayment": "$downPayment"
       |}""".stripMargin
>>>>>>> 34215ba4ecc396ab52fa03d285f4dbe0ca66abcd

  // 2 Scenario Definition
  val scn = scenario("Loan Request - Carga Concurrente")
    .exec(
      http("Request Loan")
        .post("/requestLoan")
<<<<<<< HEAD
        .queryParam("customerId", customerId)
        .queryParam("amount", loanAmount)
        .queryParam("downPayment", downPayment)
        .queryParam("fromAccountId", fromAccountId)
=======
        .body(StringBody(loanRequestBody))
>>>>>>> 34215ba4ecc396ab52fa03d285f4dbe0ca66abcd
        .check(status.is(200))
    )

  // 3 Load Scenario
  // Historia 4: 150 usuarios concurrentes con ramp de 30 segundos
  setUp(
    scn.inject(rampUsers(150).during(30.seconds))
  ).protocols(httpConf)
   .assertions(
      // Tiempo de respuesta promedio debe ser ≤ 5 segundos
      global.responseTime.mean.lte(5000),
      // Tasa de error no debe superar el 1%
      global.failedRequests.percent.lte(1)
   )
}

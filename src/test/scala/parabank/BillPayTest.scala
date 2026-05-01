package parabank

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import parabank.Data._
import scala.concurrent.duration._

// Historia de Usuario No Funcional 5: Pago de servicios con concurrencia alta
// Criterios: 200 usuarios concurrentes | ≤ 3s por transaccion | ≤ 1% errores
class BillPayTest extends Simulation {

  // 1 Http Conf
  val httpConf = http.baseUrl(url)
    .acceptHeader("application/xml")
    .contentTypeHeader("application/xml")

  // Cuerpo XML con los datos del pagador (payee)
  val payeeBody =
    """<payee>
      <name>Utility</name>
      <address>
        <street>123 Main St</street>
        <city>Anytown</city>
        <state>CA</state>
        <zipCode>12345</zipCode>
      </address>
      <phoneNumber>555-555-5555</phoneNumber>
      <accountNumber>9876543210</accountNumber>
      <routingNumber>021000021</routingNumber>
    </payee>"""

  // 2 Scenario Definition
  val scn = scenario("Bill Pay - Alta Concurrencia")
    .exec(
      http("Bill Payment")
        .post("/billpay")
        .queryParam("accountId", billPayAccountId)
        .queryParam("amount", billPayAmount)
        .body(StringBody(payeeBody))
        .check(status.is(200))
    )

  // 3 Load Scenario
  // Historia 5: 200 usuarios concurrentes con ramp de 30 segundos
  setUp(
    scn.inject(rampUsers(200).during(30.seconds))
  ).protocols(httpConf)
   .assertions(
     // Tiempo de respuesta medio por transaccion debe ser ≤ 3 segundos
     global.responseTime.mean.lte(3000),
     // Tasa de errores funcionales debe ser ≤ 1%
     global.failedRequests.percent.lte(1)
   )
}

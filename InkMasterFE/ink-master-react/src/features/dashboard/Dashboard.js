import React from "react";
import './Dashboard.css';  // Custom sidebar styles
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  FormGroup,
  Label,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");

  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  // Example data for charts
  const sampleLineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Data",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#36A2EB",
      },
    ],
  };

  const sampleBarData = {
    labels: ["USA", "Germany", "Australia", "UK", "Romania", "Brazil"],
    datasets: [
      {
        label: "Sales",
        data: [50, 30, 40, 60, 35, 50],
        backgroundColor: "#FF6384",
      },
    ],
  };

  return (
    <>
      <div className="content">
        {/* Top Large Line Chart */}
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup className="btn-group-toggle float-right">
                      <Button
                        tag="label"
                        className={`btn-simple ${bigChartData === "data1" ? "active" : ""}`}
                        color="info"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        Accounts
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        tag="label"
                        className={`btn-simple ${bigChartData === "data2" ? "active" : ""}`}
                        onClick={() => setBgChartData("data2")}
                      >
                        Purchases
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        tag="label"
                        className={`btn-simple ${bigChartData === "data3" ? "active" : ""}`}
                        onClick={() => setBgChartData("data3")}
                      >
                        Sessions
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {sampleLineData.datasets[0].data.length > 0 ? (
                    <Line
                      data={sampleLineData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                    />
                  ) : (
                    <p>No data</p>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Three Smaller Charts */}
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {sampleLineData.datasets[0].data.length > 0 ? (
                    <Line
                      data={sampleLineData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                    />
                  ) : (
                    <p>No data</p>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Daily Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" /> 3,500€
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {sampleBarData.datasets[0].data.length > 0 ? (
                    <Bar
                      data={sampleBarData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                    />
                  ) : (
                    <p>No data</p>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Completed Tasks</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-send text-success" /> 12,100K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {sampleLineData.datasets[0].data.length > 0 ? (
                    <Line
                      data={sampleLineData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                    />
                  ) : (
                    <p>No data</p>
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Tasks and Simple Table */}
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Tasks(5)</h6>
                <p className="card-category d-inline"> today</p>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title" data-fulltext="Update the Documentation">
                            Update the Documentation
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button color="link" id="tooltip1" type="button">
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip delay={0} target="tooltip1" placement="right">
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      {/* Add more tasks similarly */}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>China</td>
                      <td>Beijing</td>
                      <td className="text-center">$52,000</td>
                    </tr>
                    <tr>
                      <td>Sara Smith</td>
                      <td>France</td>
                      <td>Paris</td>
                      <td className="text-center">$45,300</td>
                    </tr>
                    <tr>
                      <td>Jacob Thornton</td>
                      <td>United Kingdom</td>
                      <td>London</td>
                      <td className="text-center">$85,450</td>
                    </tr>
                    <tr>
                      <td>Harry Jones</td>
                      <td>Canada</td>
                      <td>Toronto</td>
                      <td className="text-center">$67,320</td>
                    </tr>
                    <tr>
                      <td>Linda Wright</td>
                      <td>Germany</td>
                      <td>Berlin</td>
                      <td className="text-center">$73,250</td>
                    </tr>
                    <tr>
                      <td>Michael King</td>
                      <td>Australia</td>
                      <td>Sydney</td>
                      <td className="text-center">$95,000</td>
                    </tr>
                    <tr>
                      <td>Jennifer Lee</td>
                      <td>Japan</td>
                      <td>Tokyo</td>
                      <td className="text-center">$59,900</td>
                    </tr>
                    <tr>
                      <td>Robert Brown</td>
                      <td>New Zealand</td>
                      <td>Auckland</td>
                      <td className="text-center">$68,200</td>
                    </tr>
                    <tr>
                      <td>Emily Davis</td>
                      <td>Spain</td>
                      <td>Madrid</td>
                      <td className="text-center">$72,000</td>
                    </tr>
                    <tr>
                      <td>David Wilson</td>
                      <td>Mexico</td>
                      <td>Mexico City</td>
                      <td className="text-center">$50,500</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;

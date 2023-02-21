import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";

function createData(
  name: string,
  mondayHours: any,
  utorakHours: any,
  srijedaHours: any,
  cetvtrakHours: any,
  petakHours: any,
  subotaHours: any,
  nediljaHours: any
) {
  return {
    name,
    mondayHours,
    utorakHours,
    srijedaHours,
    cetvtrakHours,
    petakHours,
    subotaHours,
    nediljaHours,
  };
}

const rows = [
  createData(
    "Vela Luka - Korčula",
    ["5:15, 06:30, 10:00, 13:45, 17:00/17:15, 20:15"],
    ["06:30, 10:00, 13:45, 17:00/17:15, 20:15"],
    ["5:15, 06:30, 10:00, 13:45, 17:00/17:15, 20:15"],
    ["06:30, 10:00, 13:45, 17:00/17:15, 20:15"],
    ["5:15, 06:30, 10:00, 13:45, 17:00/17:15, 20:15"],
    ["06:30, 17:00 / 17:15"],
    ["13:30, 17:00 / 17:15, 20:15"]
  ),
  createData(
    "Korčula - Vela Luka",
    ["06:00, 10:15, 14:00, 15:00 / 15:15, 18:30"],
    ["06:00, 10:15, 14:00, 15:00 / 15:15, 18:30"],
    ["06:00, 10:15, 14:00, 15:00 / 15:15, 18:30"],
    ["06:00, 10:15, 14:00, 15:00 / 15:15, 18:30"],
    ["06:00, 10:15, 14:00, 15:00 / 15:15, 18:30"],
    ["06:00, 10:15"],
    ["12:15, 21:00"]
  ),
  createData(
    "Vela Luka - Zagreb",
    ["20:15"],
    ["20:15"],
    ["20:15"],
    ["20:15"],
    ["20:15"],
    ["20:15"],
    ["20:15"]
  ),
  createData(
    "Zagreb - Vela Luka",
    ["19:30"],
    ["19:30"],
    ["19:30"],
    ["19:30"],
    ["19:30"],
    ["19:30"],
    ["19:30"]
  ),
  createData(
    "Vela Luka - Dubrovnik",
    ["05:15"],
    ["/"],
    ["05:15"],
    ["/"],
    ["05:15"],
    ["/"],
    ["13:30"]
  ),
  createData(
    "Dubrovnik - Vela Luka",
    ["15:00"],
    ["/"],
    ["15:00"],
    ["/"],
    ["15:00"],
    ["/"],
    ["18:00"]
  ),
  createData(
    "Korčula - Beograd",
    ["/"],
    ["/"],
    ["/"],
    ["/"],
    ["/"],
    ["/"],
    ["17:15"]
  ),
  createData(
    "Beograd - Korčula",
    ["/"],
    ["/"],
    ["/"],
    ["/"],
    ["21:00"],
    ["/"],
    ["/"]
  ),
];

//20:15 19:30

const formatHours = (hours: any) => {
  return hours.map((hour: any) => hour.split(",").join("<br>")).join("<br>");
};

console.log(formatHours);

export default function DenseTable() {
  return (
    <>
      <section className="timetable container mx-auto px-4">
        <h2 className="arriva-title py-5">Arriva bus transport</h2>
        <TableContainer component={Paper} className="mb-10">
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Time Table</TableCell>
                <TableCell align="right">Ponediljak</TableCell>
                <TableCell align="right">Utorak</TableCell>
                <TableCell align="right">Srida</TableCell>
                <TableCell align="right">Četvrtak</TableCell>
                <TableCell align="right">Petak</TableCell>
                <TableCell align="right">Subota</TableCell>
                <TableCell align="right">Nedilja</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component={"th"} scope="row">
                  Vela Luka - Korčula
                </TableCell>
                <TableCell align="right">Korčula - Vela Luka</TableCell>
                <TableCell align="right">Vela Luka - Zagreb</TableCell>
                <TableCell align="right">Zagreb - Vela Luka</TableCell>
                <TableCell align="right">Vela Luka - Dubrovnik</TableCell>
                <TableCell align="right">Dubrovnik - Vela Luka</TableCell>
                <TableCell align="right">Korčula - Beograd</TableCell>
                <TableCell align="right">Beograd - Korčula</TableCell>
              </TableRow> */}
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {row.mondayHours.join("<br>")}
                  </TableCell>
                  <TableCell align="right">{row.utorakHours}</TableCell>
                  <TableCell align="right">{row.srijedaHours}</TableCell>
                  <TableCell align="right">{row.cetvtrakHours}</TableCell>
                  <TableCell align="right">{row.petakHours}</TableCell>
                  <TableCell align="right">{row.subotaHours}</TableCell>
                  <TableCell align="right">{row.nediljaHours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Link
          className="bg-oceanBlue py-3 px-7 mt-10 rounded-full text-white"
          href="/contact"
        >
          Buy Ticket
        </Link>
      </section>
    </>
  );
}

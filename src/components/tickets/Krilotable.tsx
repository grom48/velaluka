import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";

function createData(name: string, mondayHours: string, utorakHours: string) {
  return {
    name,
    mondayHours,
    utorakHours,
  };
}

function createDataThird(
  name: string,
  length: string,
  days: string,
  holidays: string
) {
  return { name, length, days, holidays };
}

const rows = [
  createData("7:30", "Split", "20:40"),
  createData("07:55-08:00", "Brač (Milna)", "20:10-20:15"),
  createData("08:30-08:40", "Hvar (Hvar)", "19:30-19:40"),
  createData("09:50-10:00", "Korčula (Old Town)", "18:10-18:20"),
  createData("10:30-10:35", "Mljet (Pomena)", "17:30-17:35"),
  createData("11:55", "Dubrovnik", "16:15"),
];

const rows2 = [
  createData("7:30", "Split", "20:25"),
  createData("07:55-08:00", "Brač (Milna)", "19:50-19:55"),
  createData("08:30-08:40", "Hvar (Hvar)", "19:10-19:20"),
  createData("09:50-10:00", "Korčula (Old Town)", "17:55-18:05"),
  createData("10:30-10:35", "Mljet (Pomena)", "17:15-17:20"),
  createData("11:55", "Dubrovnik", "16:00"),
];

const rows3 = [
  createData("7:30", "Split", "20:10"),
  createData("08:20-08:30", "Brač (Bol)", "19:10-19:20"),
  createData("09:05-09:15", "Makarska", "18:25-18:35"),
  createData("10:25-10:35", "Korčula (Old Town", "17:05-17:15"),
  createData("11:05-11:15", "Pomena (Mljet)", "16:25-16:35"),
  createData("12:40", "Dubrovnik", "15:00"),
];

const rows4 = [
  createDataThird("16:00", "Split", "8:30", "15:30"),
  createDataThird("16:55-17:05", "Hvar", "07:25-07:35", "14:25-14:35"),
  createDataThird("18:30", "Korčula (Old Town)", "06:00", "13:00"),
];

const rows5 = [
  createData("17:00", "Split", "08:45"),
  createData("17:55:18:10", "Hvar", "07:35-07:50"),
  createData("19:00-19:05", "Prigradica", "06:40-06:45"),
  createData("19:45", "Korčula (Old Town)", "06:00"),
];

const Krilotable = () => {
  return (
    <section className="timetable container mx-auto px-4">
      <h2 className="arriva-title py-5">Krilo - Kapetan Luka</h2>
      <h4>Split - Brač - Hvar - Korčula - Mljet - Dubrovnik</h4>
      <TableContainer component={Paper} className="mb-10">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Every day</TableCell>
              <TableCell>01.04. – 31.08.2023.</TableCell>
              <TableCell>Every day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.mondayHours}</TableCell>
                <TableCell>{row.utorakHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} className="mb-10">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Every day</TableCell>
              <TableCell>01.09. – 30.10.2023.</TableCell>
              <TableCell>Every day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.mondayHours}</TableCell>
                <TableCell>{row.utorakHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h4 className="py-10">
        Split - Brač - Makarska - Korčula - Mljet - Mljet - Dubrovnik
      </h4>
      <TableContainer component={Paper} className="mb-10">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Every day</TableCell>
              <TableCell>01.06. – 30.09.2023.</TableCell>
              <TableCell>Every day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows3.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.mondayHours}</TableCell>
                <TableCell>{row.utorakHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h4 className="py-10">Split – Hvar – Prigradica – Korčula</h4>
      <TableContainer component={Paper} className="mb-10">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Every day</TableCell>
              <TableCell>01.01. - 01.06.2023. 02.10. - 31.12.2023.</TableCell>
              <TableCell>Every day except sunday and holidays</TableCell>
              <TableCell>Sunday and holidays</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows4.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.length}</TableCell>
                <TableCell>{row.days}</TableCell>
                <TableCell>{row.holidays}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} className="mb-10">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Every day</TableCell>
              <TableCell>02.06. - 01.10.2023.</TableCell>
              <TableCell>Every day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows5.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.mondayHours}</TableCell>
                <TableCell>{row.utorakHours}</TableCell>
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
  );
};

export default Krilotable;

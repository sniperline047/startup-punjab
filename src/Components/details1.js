import React from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './materialComponent/Title';
import Footer from './Footer';

// Generate Order Data
function createData( Name, Post, Mobile, Email ) {
  return { Name, Post, Mobile, Email };
}



// const useStyles = makeStyles(theme => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
const rows = [
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];
// }));

export default function details1({dep,res}) {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{`Employee List: Department Of Finance`}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Post</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Post}</TableCell>
              <TableCell>{row.Mobile}</TableCell>
              <TableCell>{row.Email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div >
        <Link color="primary" href="http://localhost:3000/">
          Go to Home!
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
}
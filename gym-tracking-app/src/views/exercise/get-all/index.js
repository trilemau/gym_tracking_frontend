// material-ui
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// other imports
import { API_BACKEND_URL } from 'constants';

// ==============================|| SAMPLE PAGE ||============================== //

const GET_WORKOUT_EXERCISES_PATH = "/v1/exercise/get-exercises";

console.log(API_BACKEND_URL + GET_WORKOUT_EXERCISES_PATH);

// const exercises = fetch(API_BACKEND_URL + GET_WORKOUT_EXERCISES_PATH)
// .then((response) => {
//     if (!response.ok) {
//         throw new Error("Failed to get exercises");
//     }

//     return response.json();
// });

const exercises = [
	{
		"id": 111,
		"name": "Flat dumbbell chest press",
		"muscleGroups": [
			"CHEST"
		],
		"image": null
	},
	{
		"id": 222,
		"name": "Incline dumbbell chest press",
		"muscleGroups": [
			"CHEST"
		],
		"image": null
	},
	{
		"id": 333,
		"name": "Barbell back squat",
		"muscleGroups": [
			"QUADS",
			"GLUTES"
		],
		"image": null
	},
	{
		"id": 444,
		"name": "Barbell front squat",
		"muscleGroups": [
			"QUADS",
			"GLUTES"
		],
		"image": null
	}
]

console.log(exercises);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const GetAllExercises = () => {
    return (
        <MainCard title="All exercises">
        <Typography variant="h4">
            This page returns all exercises
        </Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Muscle groups</TableCell>
                        <TableCell>Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exercises.map((exercise) => (
                        <TableRow
                        key={exercise.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{exercise.name}</TableCell>
                            <TableCell>{exercise.muscleGroups}</TableCell>
                            <TableCell>TODO</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </MainCard>
    );
}

export default GetAllExercises;

// imports
import express, { Application } from 'express';
import { join  } from 'path';
import hbs from 'hbs';

// connecting to the database
import './db/connection';

// routes
import indexRoutes from './routes/index';
import bibliographyRoutes from './routes/bibliography';
import bmiCalculatorRoutes from './routes/bmiCalculator';
import stemCellsRoutes from './routes/stemCells';
import fitnessFundaRoutes from './routes/fitnessFunda';
import contactRoutes from './routes/contact';

const app: Application = express();
const port = process.env.PORT ?? 80;

// PATHS
const staticPath = join(__dirname , "../public");
const templatePath = join(__dirname , "../templates/views");
const partialsPath = join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MIDDLE WARE
app.use(express.static(staticPath));

app.set('view engine' , "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// ROUTES
app.use('/', indexRoutes);
app.use('/bibliography', bibliographyRoutes);
app.use('/bmi-calculator', bmiCalculatorRoutes);
app.use('/stem-cells', stemCellsRoutes);
app.use('/fitness-funda', fitnessFundaRoutes);
app.use('/contact', contactRoutes);

// STARTING THE SERVER
app.listen(port, () => {
  console.log("Server started");
});
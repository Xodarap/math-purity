import Checkbox from '@material-ui/core/Checkbox';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Container, Divider, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/footer';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderLeft: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    paddingBottom: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topHeader: {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  formControl: {
    marginBottom: '20px'
  }
}));

export default function Home() {
  const classes = useStyles();
  const [checked, setCheckedState] = React.useState(true);
  const [score, setScore] = React.useState(20);
  const setChecked = (name) => (event) => setCheckedState(state => {
    const newState = ({ ...state, [name]: event.target.checked })
    const newScore = 20 - Object.values(newState).filter(v => v).reduce((ac, _) => ac + 1, 0)
    setScore(newScore)
    return newState
  })
  const MakeCheckbox = ({ name, children }) =>
    <FormControlLabel control={<Checkbox checked={checked[name]} onChange={setChecked(name)} />}
      label={children}
    />
  return (
    <div className={styles.container}>
      <Head>
        <title>Rice Mathematical Purity Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.root}>
        <Container maxWidth="md">
          <Typography variant="h4" className={classes.topHeader}>Rice Mathematical Purity Test</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormLabel component="legend">My last paper...</FormLabel>
                  <MakeCheckbox name='integer'>Has an equation that includes an integer</MakeCheckbox>
                  <MakeCheckbox name='rational'>Has an equation that includes a non-integer rational</MakeCheckbox>
                  <MakeCheckbox name='irrational'>Has an equation without any Greek characters</MakeCheckbox>
                  <MakeCheckbox name='latex'>Was not written in LaTeX</MakeCheckbox>
                  <MakeCheckbox name='archive'>Did not have a preprint on arXiv</MakeCheckbox>
                  <MakeCheckbox name='applied'>Was published in a journal whose title includes the word "applied"</MakeCheckbox>
                  <MakeCheckbox name='co-author'>Had nonmathematician co-authors</MakeCheckbox>
                  <MakeCheckbox name='more_than_two'>Had more than two co-authors</MakeCheckbox>
                  <MakeCheckbox name='constructive'>Included a constructive proof</MakeCheckbox>
                  <MakeCheckbox name='cited'>Was cited by someone you don't personally know</MakeCheckbox>
                  <MakeCheckbox name='Matlab'>Used Matlab</MakeCheckbox>
                  <MakeCheckbox name='generalization'>Was not a generalization of a previously known result</MakeCheckbox>
                  <MakeCheckbox name='exercise'>Didn't include the phrase "left as an exercise for the reader"</MakeCheckbox>
                  <MakeCheckbox name='supplementary'>Put all the equations in the supplementary section</MakeCheckbox>
                </FormGroup>
              </FormControl>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                  <FormLabel component="legend">Would you agree with any of the following?</FormLabel>
                  <MakeCheckbox name='nonmathematicians'>Nonmathematicians understand what I do</MakeCheckbox>
                  <MakeCheckbox name='useful'>My work is useful</MakeCheckbox>
                  <MakeCheckbox name='graphing'>I own a graphing calculator</MakeCheckbox>
                  <MakeCheckbox name='funding'>My work is well-funded</MakeCheckbox>
                  <MakeCheckbox name='stain'>The clothes I am wearing have no visible stains</MakeCheckbox>
                  <MakeCheckbox name='teach'>I teach an undergraduate course</MakeCheckbox>
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Divider variant="middle" style={{ marginTop: '15px', marginBottom: '15px' }} />
          <ScoreSection score={score} />
        </Container>
      </main>
      <Container maxWidth="md">
        <Divider variant="middle" style={{ marginTop: '15px', marginBottom: '15px' }} />
        <Footer />
      </Container>
    </div>
  )
}

function ScoreSection({ score }) {
  const { text, image } = scoreSummary({ score })
  return <Grid container spacing={3} style={{ justifyContent: 'center' }}>
    <Grid item xs={12}>
      <Typography variant="h4" style={{ textAlign: 'center' }}>Results</Typography>
    </Grid>
    <Grid item xs={12} sm={4} md={3} style={{ alignItems: 'center', display: 'flex' }}>
      <div>
        <Typography variant="body1">Score: <strong>{score}</strong></Typography>
        <br />
        <Typography variant="body1">{text}</Typography>
      </div>
    </Grid>
    <Grid item xs={12} sm={4} md={3} style={{ minWidth: '200px', justifyContent: 'center', display: 'flex' }}>
      <img src={image} style={{ width: '200px' }} />
    </Grid>
  </Grid>
}

const scoreSummary = ({ score }) => {
  if (score > 15) {
    return {
      text: "Hardy would be proud",
      image: "hardy.jpg"
    }
  }
  if (score > 10) {
    return {
      text: "You probably work at a liberal arts university",
      image: "University.jpg!s"
    }
  }
  return {
    text: "You are basically a physicist",
    image: "Einstein.jpg"
  }

}
const ScoreSummary = ({ score }) => {
  if (score > 15) {
    return <div>
      <Typography variant="body1">You're the kind of mathematician Hardy was talking about</Typography>
      <img src="hardy.jpg" style={{ width: '200px' }} />
    </div>
  }
  if (score > 10) {
    return <div>
      <Typography variant="body1">You probably work at a liberal arts university</Typography>
    </div>
  }
  return <div>
    <Typography variant="body1">You are basically a physicist</Typography>
    <img src="Einstein.jpg" style={{ width: '200px' }} />
  </div>

}
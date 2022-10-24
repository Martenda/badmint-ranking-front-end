import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useEffect, useState } from "react";

const rankingPeriodList = [
  { id: 1, label: "2022 semana 22", championshipDate: "2022-06-02" },
  { id: 2, label: "2022 semana 15", championshipDate: "2022-04-14" },
  { id: 3, label: "2021 semana 48", championshipDate: "2021-12-03" },
  { id: 4, label: "2021 semana 09", championshipDate: "2021-03-06" },
];

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3EB489"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3EB489"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3EB489"
    },
    "&:hover fieldset": {
      borderColor: "#3EB489"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3EB489"
    }
  }
});

function RankingFilters({ rankingsListResults, categoriesListResults }) {
  const [showFilters, setShowFilters] = useState(true);
  
  function updateShowFilters() {
    setShowFilters(!showFilters);
  }

  useEffect(() => {
    updateShowFilters();
  }, [])

  return (
    <div>
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",          
          marginTop: -10,
          //backgroundColor: 'lightblue',
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        <Grid xs={5}>
          <Autocomplete
            disablePortal
            id="filterRankings"
            size="small"
            options={rankingsListResults}
            sx={{
              width: 208, 
              paddingRight: 1
            }}
            renderInput={(params) => (
              <CssTextField {...params} label="Ranking" />
            )}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={4}>
          <Autocomplete
            disablePortal
            id="filterRankingCategories"
            size="small"
            options={categoriesListResults}
            sx={{
              width: 208, 
              paddingRight: 1
            }}
            renderInput={(params) => (
              <CssTextField {...params} label="Categoria" />
            )}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid xs={3}>
          <Autocomplete
            disablePortal
            id="filterRankingPeriod"
            size="small"
            options={rankingPeriodList}
            sx={{
              width: 208,
            }}
            renderInput={(params) => (
              <CssTextField {...params} label="Período do Ranking" />
            )}
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: -5,
          marginBottom: -15,
          //backgroundColor: 'lightblue',
        }}
         onClick={ () => updateShowFilters() }
      >
        <h4>Filtros</h4>
        <ExpandMoreIcon
          style={{
            marginTop: 20,
            display: showFilters ? 'none' : '',
          }}
        />
        <ExpandLessIcon
          style={{
            marginTop: 20,
            display: showFilters ? '' : 'none',
          }}
        />
      </div>
      <Grid
        container
        spacing={0}
        style={{
          width: "100%",
          marginBottom: 20,
          paddingTop: 1,
          paddingBottom: 1,
          display: showFilters ? '' : 'none',
        }}
      >
        <Grid xs={3}>
          <CssTextField
            id="filterAthleteMemberID"
            label="Member ID"
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            sx={{
              paddingRight: 1
            }}
          />
        </Grid>
        <Grid xs={5}>
          <CssTextField
            id="filterAthleteName"
            label="Nome do Atleta/Dupla"
            variant="outlined"
            size="small"
            style={{ width: "100%" }}
            sx={{
              paddingRight: 1
            }}
          />
        </Grid>
        <Grid xs={1}>
          <CssTextField
            id="filterAthleteAge"
            label="Idade"
            variant="outlined"
            size="small"
            type="number"
            style={{ width: "100%" }}
            sx={{
              paddingRight: 1
            }}
          />
        </Grid>
        <Grid xs={2}>
          <CssTextField
            id="filterAthleteClub"
            label="Clube"
            variant="outlined"
            size="small"
            style={{
              width: "100%",
            }}
            sx={{
              paddingRight: 1,
            }}
          />
        </Grid>
        <Grid xs={1}>
          <Button
            id="filterButtonSearch"
            variant="contained"
            disableElevation
            style={{
              backgroundColor: "#3EB489",
              width: '100%',
              height: '100%'
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default RankingFilters;

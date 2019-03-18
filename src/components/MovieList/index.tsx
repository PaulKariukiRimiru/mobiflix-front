import * as React from 'react';

import { Grid } from '@material-ui/core';

import { MovieListProps } from 'src/components/MovieList/interfaces';
import MovieListItem from 'src/components/MovieListItem';
import Spinner from 'src/components/Spinner';

import './MovieList.scss';

export default class MovieList extends React.Component<MovieListProps> {
  public render() {

    const { searching, movies } = this.props;

    return (
      movies.length === 0
        ? searching ? <div className="nomovies">No movies found...</div> : <Spinner />
        : <Grid
            container={true}
            className="movielist"
            spacing={0}
            wrap='wrap'
            >
            {
              movies.map((data, index) => (
                <MovieListItem
                  {...data}
                  key={new Date().toISOString() + index}
                />
              ))
            }
          </Grid>
    )
  }
}
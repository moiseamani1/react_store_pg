import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Typography, IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
const Question = ({ question, answer }) => {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState('');

  // useEffect(() => {

  // }, [isVisible])

  const showAnswerHandler = (question) => {
    if (isVisible) {
      setIsVisible('');
    } else {
      setIsVisible(question);
    }
  };

  return (
    <div className={classes.root}>
      <div
        className={classes.question}
        onClick={() => showAnswerHandler(question)}
      >
        <div className={classes.innerContent}>
          <Typography variant="body1" gutterBottom>
            {question}
          </Typography>
        </div>
        <div className={classes.innerContent}>
          <IconButton aria-label="view" size="large">
            {isVisible === question ? (
              <KeyboardArrowUp className={classes.arrow} />
            ) : (
              <KeyboardArrowDown className={classes.arrow} />
            )}
          </IconButton>
        </div>
      </div>

      {isVisible === question ? (
        <div className={classes.answer}>
          <Typography variant="body1" gutterBottom>
            {answer}
          </Typography>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Question;

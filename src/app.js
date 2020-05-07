import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';


import './styles.css';

function RandomDSA(props) {
  const [question, setQuestion] = useState('');

  const structures = [
    'Array',
    'Stack',
    'Queue',
    'Linked List',
    'Binary Tree',
    'BST',
  ];
  const actions = [
    'Find the sum of all elements',
    'Determine if a specific value is present',
    'Return a list of all duplicate values/keys',
    'Remove all duplicate values/keys',
    'Find the maximium value',
    'Find the minimum value',
    'Reverse the values',
    'Sort the values',
  ];
  const methods = ['Iteratively', 'Recursively'];

  function randomNum(max) {
    return Math.floor(Math.random() * max);
  }

  function generateQuestion() {
    let structure = structures[randomNum(structures.length)];
    let action = actions[randomNum(actions.length)];
    let method = methods[randomNum(methods.length)];
    let newQuestion = `Given a ${structure}, ${action} ... ${method}.`;
    setQuestion(newQuestion);
  }

  useEffectOnce(() => {
    generateQuestion();
  });

  const classes = ['question', question ? 'visible' : ''].join(' ');

  return (
    <>
      <header>
        <h1>Data Structures Practice</h1>
      </header>
      <main>
        <h2 className={classes}>{question}</h2>
      </main>
      <footer>
        &copy; 2020 Code Fellows <span>(Inspired by <a href="https://github.com/mnfmnfm">Michelle Ferreirae</a>)</span>
      </footer>
    </>
  );
}

export default RandomDSA;

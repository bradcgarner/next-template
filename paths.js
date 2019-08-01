'use strict';

const fs = require('fs');
const xx = null;
const arrs = [
  [
    [ xx,xx,xx,xx, 4,xx,xx,xx,xx,xx,xx,xx, 8,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx, 5,xx,xx,xx, 7,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx, 3,xx,xx,xx,xx, 6,xx,xx,xx,xx,xx, 9,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx, 2,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,10],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx, 1,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,11,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [  0,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,12],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,13,xx],
    [ xx,20,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,14,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,19,xx,xx,xx,xx,xx,xx,xx,xx,xx,15,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,17,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,18,xx,xx,xx,xx,xx,16,xx,xx,xx,xx,xx],
  ],
  [
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,15,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,12,xx,xx,xx,xx, 0,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx, 1,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,11,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx, 2,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,10,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx, 3],
    [ xx, 9,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx, 8,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx, 4,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx, 7,xx,xx,xx,xx,xx,xx,xx, 5,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx, 6,xx,xx,xx,xx,xx,xx,xx,xx],
  ],
  [
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx, 2,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx, 3,xx,xx,xx,xx,xx,xx,xx, 1,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx, 4,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx, 0,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,12,xx,xx,xx,xx],
    [  5,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,11,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx, 6,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,10,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx, 7,xx,xx,xx,xx,xx,xx,xx,xx,xx, 9,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx, 8,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
  ],
  [
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx, 2,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx, 3,xx,xx,xx,xx,xx,xx,xx, 1,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx, 4,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx, 0,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,12,xx,xx,xx,xx,xx,xx,xx],
    [  5,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,11,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx, 6,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,10,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx, 7,xx,xx,xx,xx,xx,xx,xx,xx,xx, 9,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx, 8,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
    [ xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx,xx],
  ],
];

const positions = arrs.map(()=>[]);

arrs.forEach((group,x)=>{

  let columns = 0;
  const rows = group.length;
  group.forEach(row=>{
    columns = row.length > columns ? row.length : columns ;
  });

  const columnSteps = Math.floor(100/(columns+1));
  const rowSteps = Math.floor(100/(rows+1));

  group.forEach((row,i)=>{
    row.forEach((col,j)=>{
      if(col !== null){
        const hOffset = j * columnSteps;
        const vOffset = i * rowSteps;
        const hDistFromCenter = Math.abs(hOffset - 50);
        const vDistFromCenter = Math.abs(vOffset - 50);
        const combinedDist = hDistFromCenter + vDistFromCenter;
        positions[x][col] = `${col * columnSteps}% { left: ${hOffset}%; top: ${vOffset}%; opacity: 0.${combinedDist}; }`;
      }
    });
  });
  positions[x].push(`10${positions[0]}`);
});

const css = positions.map((p,i)=>p.join(' '));

const cssGrouped = css.map((group,i)=>`${i!==0 ? '}\n' : '' }@keyframes equation${i} {\n${group}\n`).join('');
const cssFull = `${cssGrouped}}`;

fs.writeFileSync('./css.js', cssFull, err =>{
  if(err){
    console.error(err);
  }
});
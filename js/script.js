/*---- constants ---*/
const newBal = document.getElementById('bal');

/*---- app's state (variables) ----*/
let wager, balance, selection;

/*---- cached element references ----*/


/*---- event listeners ----*/
document.getElementById("placeBet").addEventListener('click', makeBet);
document.querySelector(".table").addEventListener('click', selectNum);
document.getElementById("spin").addEventListener('click', spinWhl);

/*---- functions ----*/
// init();

function initialize(){
  wager = '';
  document.getElementById("bal").innerHTML = '100';
  render();
};

function makeBet() {
  // let betBtn = wager;
  const betBtn = document.getElementById("bet").value;
  // console.log("clicked button") 
  console.log(`The player's bet is ${betBtn}`)
};

function selectNum(evt) {
  console.log(` ${evt.target.innerHTML}`);
  evt.target.style.border = '5px solid blue';
};

function spinWhl() {
    let spinVal = (Math.floor(Math.random() * (36-0) + 0));
   document.getElementById("whlNum").innerHTML = spinVal
    // last user action
    // evaluate the values of bet vs. spin
    matchSpin(selection, spinVal)
};

function matchSpin(guess, actual) {
  return guess === actual ? 
    console.log('You Win!')
    :
    console.log("You lose");
};

function updateBal(betBtn) {
  if (winner === true) {
    console.log(newBal + betBtn);
  } else {
    console.log (newBal - betBtn);
  }
};

function render() {
//render balance
  document.getElementById("bal").innerHTML = newBal;
  makeBet();
  selectNum();
  spinWhl();
  matchSpin();

};


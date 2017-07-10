import angular from 'angular';

const StartFromFilter = () => {
  return (input, start) => {
    start = +start; //parse to int

    if(input){
      return input.slice(start);
    }else{
      return input;
    }
  }
};

StartFromFilter.$inject = [];

export default StartFromFilter;

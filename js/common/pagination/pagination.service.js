class PaginationService{
  constructor() {
    this.currentPage = 0;
    this.totalPages = 0;
    this.pageSize = 12;
    this.paginationLimit = 10;
    totalItems = 0;
    pageRange = [];
  }
  clickPaginationButton(index, length){
    this.currentPage = index - 1;
    this.getPageRange(length);
    this.pageChanged();
  }
  previousButton(length){
    this.currentPage--;
    this.getPageRange(length);
    this.pageChanged();
  }
  nextButton(length){
    this.currentPage++;
    this.getPageRange(length);
    this.pageChanged();
  }
  getPageRange(length){
    this.totalItems = length;
    this.totalPages = Math.ceil(length/this.pageSize);

    this.pageRange = [];

    for(let i = 0; i < this.totalPages; i++){
      this.pageRange[i] = i + 1; // change zero index to 1 index
    }

    this.truncateRange();
  }
  truncateRange(){
    let centerVal = this.currentPage;

    if(this.totalPages > this.paginationLimit && centerVal > this.paginationLimit / 2){
      let move = Math.floor(this.paginationLimit/2);

      if(centerVal < this.totalPages - move){
        this.slice(this.pageRange, centerValue - move, centerValue + move);
      }else{
        this.slice(this.pageRange, this.pageRange.length - this.paginationLimit, this.pageRange.length);
      }
    }else if(this.totalPages > this.paginationLimit){
      this.slice(this.pageRange, 0, this.paginationLimit);
    }
  }
  slice(array, start, end){
    let numRemoved = 0;
    let arrLen = array.length;

    for(let i = 0; i < arrLen; i++){
      if(i < start || i > end - 1){
        array.splice(i - numRemoved, 1);
        numRemoved++;
      }
    }
  }
  pageChanged(){
    console.log('page has changed');
  }
}

export default PaginationService;

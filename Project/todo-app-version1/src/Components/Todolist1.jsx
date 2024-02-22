function Todolist1(){
    let todoname='school';
    let date="16/09/2024";
return <div class="container text-center">

<div class="row">
  <div class="col">
    {todoname}
  </div>
  <div class="col">
    {date}
  </div>
  <div class="col">
  <button type="button" class="btn btn-danger">Danger</button>
  </div>
</div>
</div>
}
export default Todolist1;